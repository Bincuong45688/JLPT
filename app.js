(function () {
  "use strict";

  const STORAGE_KEY = "kanji_master_n4_state_v1";

  // Sort chapters 1 -> 9
  const CHAPTERS = (window.KANJI_CHAPTERS || []).sort((a, b) => a.id - b.id);

  // Build flat lookup maps
  const ALL_KANJI = [];
  const KANJI_MAP = {};
  const LESSON_MAP = {};

  CHAPTERS.forEach((ch) => {
    ch.lessons.forEach((lesson) => {
      lesson.chapterId = ch.id;
      lesson.chapterTitleJp = ch.titleJp;
      lesson.chapterTitleVi = ch.titleVi;
      LESSON_MAP[lesson.id] = lesson;
      lesson.kanjiList.forEach((k, idx) => {
        k.chapterId = ch.id;
        k.lessonId = lesson.id;
        k.lessonTitleVi = lesson.titleVi;
        k.indexInLesson = idx;
        ALL_KANJI.push(k);
        KANJI_MAP[k.char] = k;
      });
    });
  });

  // Checkpoint definitions (every 2-3 chapters + book summary tests)
  const CHECKPOINT_TESTS = [
    {
      id: "cp-1-2",
      title: "Bài Test Tổng Chương 1 – 2",
      subtitle: "Chủ đề: Gia đình, Chung cư, Công việc & Cửa hàng tiện lợi (46 chữ Kanji)",
      chapters: [1, 2],
      badge: "Cụm Chương 1–2",
      questionCount: 24
    },
    {
      id: "cp-3-4",
      title: "Bài Test Tổng Chương 3 – 4",
      subtitle: "Chủ đề: Hành lý, Địa chỉ, Tỉnh thành & Buổi hẹn hò, Thời trang (46 chữ Kanji)",
      chapters: [3, 4],
      badge: "Cụm Chương 3–4",
      questionCount: 24
    },
    {
      id: "cp-1-4",
      title: "まとめテスト 1〜4章 (Test Tổng Giữa Sách: Chương 1 – 4)",
      subtitle: "Kiểm tra tổng hợp nửa đầu cuốn Kanji Master N4 sau khi hoàn thành Chương 1–2 và 3–4 (92 chữ Kanji)",
      chapters: [1, 2, 3, 4],
      badge: "Tổng ôn 1〜4章 (P.94)",
      questionCount: 30
    },
    {
      id: "cp-5-6",
      title: "Bài Test Tổng Chương 5 – 6",
      subtitle: "Chủ đề: Nhà ga, Giao thông, Bệnh viện & Đời sống sinh viên (46 chữ Kanji)",
      chapters: [5, 6],
      badge: "Cụm Chương 5–6",
      questionCount: 24
    },
    {
      id: "cp-7-9",
      title: "Bài Test Tổng Chương 7 – 8 – 9",
      subtitle: "Chủ đề: Bốn mùa, Thời tiết, Du lịch, Trường học & Ngày nghỉ (71 chữ Kanji)",
      chapters: [7, 8, 9],
      badge: "Cụm Chương 7–9",
      questionCount: 26
    },
    {
      id: "cp-5-9",
      title: "まとめテスト 5〜9章 (Test Tổng Cuối Sách: Chương 5 – 9)",
      subtitle: "Kiểm tra tổng hợp nửa sau cuốn Kanji Master N4 sau khi hoàn thành Chương 5–6 và 7–9 (117 chữ Kanji)",
      chapters: [5, 6, 7, 8, 9],
      badge: "Tổng ôn 5〜9章 (P.206)",
      questionCount: 30
    },
    {
      id: "cp-all",
      title: "Tổng Ôn Toàn Bộ Kanji Master N4 (Chương 1 – 9)",
      subtitle: "Thử thách toàn bộ 209 chữ Kanji N4 trong sách",
      chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      badge: "Toàn bộ 209 chữ",
      questionCount: 40
    }
  ];

  // App State
  let userState = loadState();
  let currentView = "dashboard"; // dashboard | lesson | checkpoints | quiz-runner | notebook | dictionary
  let currentLessonId = "1-1";
  let currentLessonTab = "study"; // study | flashcard | practice
  let currentKanjiChar = "家";
  let currentVocabFilter = "ALL"; // ALL | N4 | N5 | on | kun
  let hideVocabSecrets = false;
  let kanjiOnlyVocab = false;
  let openChapterIds = new Set([1]);

  // Active Quiz Runner State
  let activeQuiz = null;
  // Active JLPT Exam State (3 Exam Sets per Chapter & Checkpoint)
  let activeJlptExam = null;

  function defaultState() {
    return {
      theme: "light",
      mastered: {},     // { "家": true }
      starred: {},      // { "家": true }
      mistakes: {},     // { "家": count }
      notes: {},        // { "家": "ghi chú..." }
      customWords: {},  // { "家": [ { word, reading, hanViet, meaning, level } ] }
      testHistory: {}   // { "cp-1-2": { bestScore: 18, total: 20, date: "..." } }
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      return Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) {
      return defaultState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
    } catch (e) {
      console.error("Failed to save state:", e);
    }
    updateSidebarStats();
  }

  // ROMAJI -> HIRAGANA CONVERTER FOR TYPING EXERCISES
  const ROMAJI_TABLE = {
    kya: "きゃ", kyu: "きゅ", kyo: "きょ",
    sha: "しゃ", shu: "しゅ", sho: "しょ",
    sya: "しゃ", syu: "しゅ", syo: "しょ",
    cha: "ちゃ", chu: "ちゅ", cho: "ちょ",
    tya: "ちゃ", tyu: "ちゅ", tyo: "ちょ",
    nya: "にゃ", nyu: "にゅ", nyo: "にょ",
    hya: "ひゃ", hyu: "ひゅ", hyo: "ひょ",
    mya: "みゃ", myu: "みゅ", myo: "みょ",
    rya: "りゃ", ryu: "りゅ", ryo: "りょ",
    gya: "ぎゃ", gyu: "ぎゅ", gyo: "ぎょ",
    ja: "じゃ", ju: "じゅ", jo: "じょ",
    jya: "じゃ", jyu: "じゅ", jyo: "じょ",
    zya: "じゃ", zyu: "じゅ", zyo: "じょ",
    bya: "びゃ", byu: "びゅ", byo: "びょ",
    pya: "ぴゃ", pyu: "ぴゅ", pyo: "ぴょ",
    shi: "し", chi: "ち", tsu: "つ", fu: "ふ",
    ka: "か", ki: "き", ku: "く", ke: "け", ko: "こ",
    sa: "さ", si: "し", su: "す", se: "せ", so: "そ",
    ta: "た", ti: "ち", tu: "つ", te: "て", to: "と",
    na: "な", ni: "に", nu: "ぬ", ne: "ね", no: "の",
    ha: "は", hi: "ひ", hu: "ふ", he: "へ", ho: "ほ",
    ma: "ま", mi: "み", mu: "む", me: "め", mo: "も",
    ya: "や", yu: "ゆ", yo: "よ",
    ra: "ら", ri: "り", ru: "る", re: "れ", ro: "ろ",
    wa: "わ", wo: "を", nn: "ん",
    ga: "が", gi: "ぎ", gu: "ぐ", ge: "げ", go: "ご",
    za: "ざ", ji: "じ", zi: "じ", zu: "ず", ze: "ぜ", zo: "ぞ",
    da: "だ", di: "ぢ", du: "づ", de: "で", do: "ど",
    ba: "ば", bi: "び", bu: "ぶ", be: "べ", bo: "ぼ",
    pa: "ぱ", pi: "ぴ", pu: "ぷ", pe: "ぺ", po: "ぽ",
    a: "あ", i: "い", u: "う", e: "え", o: "お", "-": "ー"
  };

  function romajiToHiragana(input, finalizeN) {
    let s = input.toLowerCase();
    let result = "";
    let i = 0;
    while (i < s.length) {
      // Double consonant -> っ (except 'n')
      if (
        i + 1 < s.length &&
        s[i] === s[i + 1] &&
        /[bcdfghjklmpqrstvwxyz]/.test(s[i]) &&
        s[i] !== "n"
      ) {
        result += "っ";
        i++;
        continue;
      }
      // 'n' before consonant (not y or vowel)
      if (
        s[i] === "n" &&
        i + 1 < s.length &&
        !/[aiueony']/.test(s[i + 1])
      ) {
        result += "ん";
        i++;
        continue;
      }
      if (s.slice(i, i + 2) === "n'") {
        result += "ん";
        i += 2;
        continue;
      }
      const tri = s.slice(i, i + 3);
      if (ROMAJI_TABLE[tri]) {
        result += ROMAJI_TABLE[tri];
        i += 3;
        continue;
      }
      const bi = s.slice(i, i + 2);
      if (ROMAJI_TABLE[bi]) {
        result += ROMAJI_TABLE[bi];
        i += 2;
        continue;
      }
      const uni = s[i];
      if (ROMAJI_TABLE[uni]) {
        result += ROMAJI_TABLE[uni];
        i += 1;
        continue;
      }
      if (finalizeN && uni === "n" && i === s.length - 1) {
        result += "ん";
        i += 1;
        continue;
      }
      result += uni;
      i++;
    }
    return result;
  }

  // TEXT TO SPEECH
  function speakJp(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ja-JP";
    utter.rate = 0.92;
    window.speechSynthesis.speak(utter);
  }
  window.speakJp = speakJp;

  // HELPERS
  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatBracketQuestion(qText) {
    return escapeHtml(qText).replace(
      /【([^】]+)】/g,
      '<span class="quiz-highlight">$1</span>'
    );
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  const SUPPLEMENTAL_KANJI_WORDS = {
    "毎": [
      { word: "毎朝", reading: "まいあさ", hanViet: "MỖI TRIỀU", meaning: "Mỗi buổi sáng", level: "N5", type: "on" },
      { word: "毎晩", reading: "まいばん", hanViet: "MỖI VÃN", meaning: "Mỗi buổi tối", level: "N5", type: "on" }
    ],
    "週": [
      { word: "一週間", reading: "いっしゅうかん", hanViet: "NHẤT CHU GIAN", meaning: "Một tuần lễ", level: "N5", type: "on" }
    ],
    "画": [
      { word: "画面", reading: "がめん", hanViet: "HỌA DIỆN", meaning: "Màn hình", level: "N4", type: "on" }
    ],
    "特": [
      { word: "特売", reading: "とくばい", hanViet: "ĐẶC MẠI", meaning: "Đợt bán hạ giá đặc biệt", level: "N4", type: "on" }
    ],
    "思": [
      { word: "片思い", reading: "かたおもい", hanViet: "PHIẾN TƯ", meaning: "Tình cảm đơn phương", level: "N4", type: "kun" },
      { word: "思い", reading: "おもい", hanViet: "TƯ", meaning: "Suy nghĩ, cảm xúc", level: "N4", type: "kun" }
    ],
    "料": [
      { word: "送料", reading: "そうりょう", hanViet: "TỐNG LIỆU", meaning: "Phí gửi hàng, cước vận chuyển", level: "N4", type: "on" }
    ],
    "有": [
      { word: "有名人", reading: "ゆうめいじん", hanViet: "HỮU DANH NHÂN", meaning: "Người nổi tiếng", level: "N4", type: "on" }
    ],
    "服": [
      { word: "仕事服", reading: "しごとふく", hanViet: "SĨ SỰ PHỤC", meaning: "Trang phục đi làm", level: "N4", type: "on" }
    ],
    "短": [
      { word: "短時間", reading: "たんじかん", hanViet: "ĐOẢN THỜI GIAN", meaning: "Khoảng thời gian ngắn", level: "N4", type: "on" }
    ],
    "光": [
      { word: "光線", reading: "こうせん", hanViet: "QUANG TUYẾN", meaning: "Tia sáng, luồng sáng", level: "N4", type: "on" }
    ],
    "味": [
      { word: "味方", reading: "みかた", hanViet: "VỊ PHƯƠNG", meaning: "Đồng minh, người phe mình", level: "N4", type: "kun" }
    ],
    "太": [
      { word: "太字", reading: "ふとじ", hanViet: "THÁI TỰ", meaning: "Chữ in đậm, nét đậm", level: "N4", type: "kun" }
    ],
    "皿": [
      { word: "大皿", reading: "おおざら", hanViet: "ĐẠI MÃNH", meaning: "Chiếc đĩa lớn", level: "N4", type: "kun" }
    ],
    "飯": [
      { word: "夕飯", reading: "ゆうはん", hanViet: "TỊCH PHẠN", meaning: "Bữa cơm chiều tối", level: "N4", type: "on" }
    ],
    "旅": [
      { word: "船旅", reading: "ふなたび", hanViet: "THUYỀN LỮ", meaning: "Chuyến du lịch bằng tàu thủy", level: "N4", type: "kun" },
      { word: "旅行社", reading: "りょこうしゃ", hanViet: "LỮ HÀNH XÃ", meaning: "Công ty du lịch", level: "N4", type: "on" }
    ],
    "持": [
      { word: "持ち物", reading: "もちもの", hanViet: "TRÌ VẬT", meaning: "Đồ đạc mang theo, hành lý", level: "N4", type: "kun" },
      { word: "長持ち", reading: "ながもち", hanViet: "TRƯỜNG TRÌ", meaning: "Bền lâu, dùng được lâu", level: "N4", type: "kun" }
    ],
    "世": [
      { word: "世代", reading: "せだい", hanViet: "THẾ ĐẠI", meaning: "Thế hệ", level: "N4", type: "on" }
    ],
    "写": [
      { word: "写真家", reading: "しゃしんか", hanViet: "TẢ CHÂN GIA", meaning: "Nhiếp ảnh gia", level: "N4", type: "on" }
    ],
    "真": [
      { word: "真夏", reading: "まなつ", hanViet: "CHÂN HẠ", meaning: "Giữa mùa hè", level: "N4", type: "kun" },
      { word: "真冬", reading: "まふゆ", hanViet: "CHÂN ĐÔNG", meaning: "Giữa mùa đông", level: "N4", type: "kun" }
    ],
    "船": [
      { word: "船長", reading: "せんちょう", hanViet: "THUYỀN TRƯỞNG", meaning: "Thuyền trưởng", level: "N4", type: "on" },
      { word: "乗船", reading: "じょうせん", hanViet: "THỪA THUYỀN", meaning: "Sự lên tàu thủy", level: "N4", type: "on" }
    ],
    "漢": [
      { word: "漢文", reading: "かんぶん", hanViet: "HÁN VĂN", meaning: "Hán văn, cổ văn", level: "N4", type: "on" },
      { word: "漢語", reading: "かんご", hanViet: "HÁN NGỮ", meaning: "Từ Hán Nhật", level: "N4", type: "on" }
    ],
    "題": [
      { word: "問題集", reading: "もんだいしゅう", hanViet: "VẤN ĐỀ TẬP", meaning: "Sách tuyển tập câu hỏi", level: "N4", type: "on" }
    ],
    "問": [
      { word: "問屋", reading: "とんや", hanViet: "VẤN ỐC", meaning: "Cửa hàng bán buôn", level: "N4", type: "kun" },
      { word: "学問", reading: "がくもん", hanViet: "HỌC VẤN", meaning: "Học vấn, tri thức", level: "N4", type: "on" }
    ],
    "室": [
      { word: "洋室", reading: "ようしつ", hanViet: "DƯƠNG THẤT", meaning: "Phòng kiểu phương Tây", level: "N4", type: "on" }
    ],
    "治": [
      { word: "退治", reading: "たいじ", hanViet: "THOÁI TRỊ", meaning: "Tiêu diệt, trị tận gốc", level: "N4", type: "on" },
      { word: "治める", reading: "おさめる", hanViet: "TRỊ", meaning: "Cai trị, quản lý", level: "N4", type: "kun" }
    ],
    "経": [
      { word: "経済学", reading: "けいざいがく", hanViet: "KINH TẾ HỌC", meaning: "Ngành Kinh tế học", level: "N4", type: "on" }
    ],
    "済": [
      { word: "使用済み", reading: "しようずみ", hanViet: "SỬ DỤNG TẾ", meaning: "Đã qua sử dụng", level: "N4", type: "kun" }
    ],
    "国": [
      { word: "国内", reading: "こくない", hanViet: "QUỐC NỘI", meaning: "Trong nước, nội địa", level: "N4", type: "on" },
      { word: "全国", reading: "ぜんこく", hanViet: "TOÀN QUỐC", meaning: "Toàn quốc, cả nước", level: "N4", type: "on" }
    ],
    "自": [
      { word: "自動", reading: "じどう", hanViet: "TỰ ĐỘNG", meaning: "Tự động", level: "N4", type: "on" }
    ],
    "草": [
      { word: "水草", reading: "みずくさ", hanViet: "THỦY THẢO", meaning: "Cỏ nước, rong thủy sinh", level: "N4", type: "kun" }
    ],
    "海": [
      { word: "海水", reading: "かいすい", hanViet: "HẢI THỦY", meaning: "Nước biển", level: "N4", type: "on" }
    ]
  };

  function getKanjiWords(k) {
    const base = k.words || [];
    const extra = SUPPLEMENTAL_KANJI_WORDS[k.char] || [];
    const custom = (userState.customWords && userState.customWords[k.char]) || [];
    const seen = new Set();
    const merged = [];
    base.concat(extra, custom).forEach((w) => {
      if (w && w.word && !seen.has(w.word)) {
        seen.add(w.word);
        merged.push(w);
      }
    });
    return merged;
  }

  // BUILD EXERCISES FOR A SINGLE KANJI (5-6 questions covering reading, kanji, radical, hanViet, and typing)
  function buildExercisesForKanji(k) {
    const list = [];
    // 1. Textbook exercises from k.exercises
    (k.exercises || []).forEach((ex) => {
      list.push({
        kanjiChar: k.char,
        type: ex.type || "reading",
        badge: ex.type === "kanji" ? "Chọn chữ Kanji đúng" : "Đọc từ trong câu",
        question: ex.question,
        answer: ex.answer,
        options: shuffleArray(ex.options),
        hint: ex.hint || ""
      });
    });

    // 2. Radical & Structure question
    const otherRadicals = shuffleArray(
      ALL_KANJI.filter((x) => x.char !== k.char && x.radical !== k.radical).map((x) => x.radical)
    ).slice(0, 3);
    if (otherRadicals.length === 3) {
      list.push({
        kanjiChar: k.char,
        type: "radical",
        badge: "Bộ thủ & Cấu trúc chữ",
        question: `Chữ 【${k.char}】 (${k.hanViet} - ${k.meaning}) có bộ thủ chính là gì?`,
        answer: k.radical,
        options: shuffleArray([k.radical, ...otherRadicals]),
        hint: `Cấu tạo: ${k.components}`
      });
    }

    // 3. Han Viet & Meaning question
    const otherMeanings = shuffleArray(
      ALL_KANJI.filter((x) => x.char !== k.char).map((x) => `${x.hanViet} — ${x.meaning}`)
    ).slice(0, 3);
    const correctHvMeaning = `${k.hanViet} — ${k.meaning}`;
    list.push({
      kanjiChar: k.char,
      type: "meaning",
      badge: "Âm Hán Việt & Nghĩa",
      question: `Âm Hán Việt và nghĩa của chữ 【${k.char}】 là gì?`,
      answer: correctHvMeaning,
      options: shuffleArray([correctHvMeaning, ...otherMeanings]),
      hint: k.mnemonic
    });

    // 4. Typing exercise from one of its N4/N5 words
    const words = getKanjiWords(k);
    if (words.length > 0) {
      const w = words[0];
      list.push({
        kanjiChar: k.char,
        type: "typing",
        badge: "Gõ cách đọc Hiragana / Romaji",
        question: `Hãy gõ cách đọc Hiragana của từ 【${w.word}】 (${w.meaning} - ${w.level}):`,
        answer: w.reading.replace(/〜/g, ""),
        options: [],
        hint: `Âm Hán Việt: ${w.hanViet}`
      });
    }

    return list;
  }

  // BUILD QUIZ FOR A LESSON OR CHECKPOINT
  function buildQuizPool(kanjiArray, count, allowTyping) {
    const allowedKanjiSet = new Set(kanjiArray.map((k) => k.char));
    const pool = [];
    kanjiArray.forEach((k) => {
      (k.exercises || []).forEach((ex) => {
        const opts =
          ex.type === "kanji"
            ? buildScopedKanjiOptions(ex.answer, ex.options, k, kanjiArray, allowedKanjiSet, 1)
            : shuffleArray(ex.options);
        pool.push({
          kanjiChar: k.char,
          type: ex.type,
          badge: ex.type === "kanji" ? "漢字を書きましょう (Chọn Kanji)" : "漢字を読みましょう (Cách đọc)",
          question: ex.question,
          answer: ex.answer,
          options: opts,
          hint: `Chữ ${k.char} (${k.hanViet}): ${ex.hint || k.meaning}`
        });
      });

      const words = getKanjiWords(k);
      words.forEach((w) => {
        const cleanReading = w.reading.replace(/〜/g, "");
        if (allowTyping && /^[ぁ-んー]+$/.test(cleanReading)) {
          pool.push({
            kanjiChar: k.char,
            type: "typing",
            badge: `Gõ cách đọc từ vựng [${w.level}]`,
            question: `Gõ cách đọc Hiragana của từ 【${w.word}】 (${w.meaning}):`,
            answer: cleanReading,
            options: [],
            hint: `Chữ ${k.char} (${k.hanViet}) • Từ Hán Việt: ${w.hanViet}`
          });
        } else {
          const distractors = buildPhoneticReadingDistractors(
            cleanReading,
            [],
            kanjiArray.flatMap((x) => (x.words || []).map((xw) => xw.reading.replace(/〜/g, "")))
          );
          pool.push({
            kanjiChar: k.char,
            type: "vocab-reading",
            badge: `Từ ghép ${w.level}`,
            question: `Từ vựng 【${w.word}】 (${w.meaning}) đọc là gì?`,
            answer: cleanReading,
            options: shuffleArray([cleanReading, ...distractors.slice(0, 3)]),
            hint: `Âm Hán Việt: ${w.hanViet}`
          });
        }
      });
    });

    return shuffleArray(pool).slice(0, count);
  }

  // ============================================================================
  // JLPT EXAM GENERATOR (3 BỘ ĐỀ CHUẨN JLPT CHO MỖI CHƯƠNG & TEST TỔNG)
  // Chỉ sử dụng từ vựng và chữ Kanji trong các chương đã học!
  // ============================================================================
  function seededShuffle(arr, seed) {
    const copy = arr.slice();
    let s = seed || 1;
    for (let i = copy.length - 1; i > 0; i--) {
      s = (s * 1664525 + 1013904223) % 4294967296;
      const j = s % (i + 1);
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function buildPhoneticReadingDistractors(correctReading, existingOpts, chapterReadings) {
    const traps = new Set();
    const cleanAns = correctReading.replace(/〜/g, "").trim();

    // 1. Keep valid hiragana existing distractors
    (existingOpts || []).forEach((opt) => {
      const c = opt.replace(/〜/g, "").trim();
      if (c && c !== cleanAns) traps.add(c);
    });

    // 2. Generate realistic JLPT phonetic traps (long/short vowel, dakuten, geminate っ)
    const variants = [];
    if (cleanAns.includes("おう")) variants.push(cleanAns.replace("おう", "お"));
    if (cleanAns.includes("ゅう")) variants.push(cleanAns.replace("ゅう", "ゅ"));
    if (cleanAns.includes("ょう")) variants.push(cleanAns.replace("ょう", "ょ"));
    if (!cleanAns.includes("う") && /[おこそとのほもよろごぞどのぼぽきゅしゅちゅりゅきょしょちょりょ]/.test(cleanAns)) {
      variants.push(
        cleanAns.replace(/([おこそとのほもよろごぞどのぼぽきゅしゅちゅりゅきょしょちょりょ])/, "$1う")
      );
    }
    if (cleanAns.includes("っ")) {
      variants.push(cleanAns.replace("っ", ""));
      variants.push(cleanAns.replace("っ", "つ"));
    } else if (cleanAns.length >= 2) {
      variants.push(cleanAns[0] + "っ" + cleanAns.slice(1));
    }

    const dakutenPairs = [
      ["か", "が"], ["き", "ぎ"], ["く", "ぐ"], ["け", "げ"], ["こ", "ご"],
      ["さ", "ざ"], ["し", "じ"], ["す", "ず"], ["せ", "ぜ"], ["そ", "ぞ"],
      ["た", "だ"], ["て", "で"], ["と", "ど"],
      ["は", "ば"], ["ひ", "び"], ["ふ", "ぶ"], ["へ", "べ"], ["ほ", "ぼ"]
    ];
    dakutenPairs.forEach(([a, b]) => {
      if (cleanAns.includes(a)) variants.push(cleanAns.replace(a, b));
      if (cleanAns.includes(b)) variants.push(cleanAns.replace(b, a));
    });

    variants.forEach((v) => {
      if (v && v !== cleanAns && v.length >= 1) traps.add(v);
    });

    // 3. Fallback from same-chapter readings of similar length
    (chapterReadings || []).forEach((r) => {
      const cr = r.replace(/〜/g, "").trim();
      if (cr && cr !== cleanAns && Math.abs(cr.length - cleanAns.length) <= 2) {
        traps.add(cr);
      }
    });

    return Array.from(traps).slice(0, 3);
  }

  function buildScopedKanjiOptions(correctWord, existingOpts, k, scopedKanjiList, allowedKanjiSet, seed) {
    const cleanAns = correctWord.replace(/〜/g, "").trim();
    const distractors = new Set();

    // Helper: check if all Kanji in an option belong to learned chapters (or the answer itself)
    const ansKanji = new Set(Array.from(cleanAns).filter((ch) => /[\u4e00-\u9faf]/.test(ch)));
    function isStrictlyInScope(optStr) {
      for (const ch of optStr) {
        if (/[\u4e00-\u9faf]/.test(ch) && !allowedKanjiSet.has(ch) && !ansKanji.has(ch)) {
          return false;
        }
      }
      return true;
    }

    // 1. Keep existing options ONLY if all their Kanji are in the learned chapter scope
    (existingOpts || []).forEach((opt) => {
      const c = opt.replace(/〜/g, "").trim();
      if (c && c !== cleanAns && isStrictlyInScope(c)) {
        distractors.add(c);
      }
    });

    // 2. Same-lesson and same-chapter Kanji characters for building JLPT Kanji traps
    const sameLessonKanji = scopedKanjiList
      .filter((x) => x.lessonId === k.lessonId && x.char !== k.char)
      .map((x) => x.char);
    const sameChapterKanji = scopedKanjiList
      .filter((x) => x.char !== k.char)
      .map((x) => x.char);
    const candidateChars = sameLessonKanji.concat(sameChapterKanji);

    // Replace target Kanji in cleanAns with other Kanji from the same lesson/chapter
    if (cleanAns.includes(k.char)) {
      candidateChars.forEach((otherChar) => {
        if (distractors.size < 6) {
          const fake = cleanAns.replace(k.char, otherChar);
          if (fake !== cleanAns) distractors.add(fake);
        }
      });
    }

    // Also try replacing other Kanji positions in a 2-kanji compound using chapter Kanji
    const charsInWord = Array.from(cleanAns);
    charsInWord.forEach((ch, idx) => {
      if (/[\u4e00-\u9faf]/.test(ch)) {
        candidateChars.slice(0, 6).forEach((rep) => {
          if (rep !== ch && distractors.size < 8) {
            const copy = charsInWord.slice();
            copy[idx] = rep;
            const fake = copy.join("");
            if (fake !== cleanAns) distractors.add(fake);
          }
        });
      }
    });

    // Fallback: other vocabulary words from the same chapter
    scopedKanjiList.forEach((xk) => {
      (xk.words || []).forEach((xw) => {
        const cw = xw.word.replace(/〜/g, "").trim();
        if (cw && cw !== cleanAns && isStrictlyInScope(cw) && distractors.size < 8) {
          distractors.add(cw);
        }
      });
    });

    const chosenDistractors = seededShuffle(Array.from(distractors), seed).slice(0, 3);
    return seededShuffle([cleanAns, ...chosenDistractors], seed + 7);
  }

  function pickNonRepeatingTemplate(templates, target, seedIndex, usedSet, catTag) {
    for (let step = 0; step < templates.length; step++) {
      const idx = (seedIndex + step) % templates.length;
      const key = `${catTag}-${idx}`;
      if (!usedSet || !usedSet.has(key)) {
        if (usedSet) usedSet.add(key);
        return templates[idx].replace("{T}", `【${target}】`);
      }
    }
    const fallbackIdx = seedIndex % templates.length;
    return templates[fallbackIdx].replace("{T}", `【${target}】`);
  }

  function buildNaturalJlptSentence(wordStr, readingStr, wObj, kObj, mode, variantSeed, usedSet, allowExamples) {
    const target = mode === "mondai1" ? wordStr : readingStr;
    const m = (wObj.meaning || "").toLowerCase();
    const vSeed = Math.abs(variantSeed || 0);

    // 1. In Lesson mode (allowExamples = true), use textbook k.examples if available and not yet used in this paper
    if (allowExamples && kObj && kObj.examples && kObj.examples.length > 0) {
      for (let i = 0; i < kObj.examples.length; i++) {
        const exm = kObj.examples[i];
        const exKey = `ex-${kObj.char}-${i}`;
        if (exm.jp && exm.jp.includes(wordStr) && (!usedSet || !usedSet.has(exKey))) {
          if (usedSet) usedSet.add(exKey);
          return exm.jp.replace(wordStr, `【${target}】`);
        }
      }
    }

    // 2. Special adverbial / expression words
    if (wordStr === "特に") {
      return pickNonRepeatingTemplate(
        [
          "わたしは くだものの なかで、{T} りんごが すきです。",
          "きょうは {T} ようじが ないので、いえで やすみます。",
          "この みせの りょうりは、{T} わかい ひとに にんきが あります。"
        ],
        target,
        vSeed,
        usedSet,
        "adv-tokuni"
      );
    }
    if (wordStr === "全然") {
      return pickNonRepeatingTemplate(
        [
          "きのうの よるは {T} ねむることが できませんでした。",
          "この もんだいは むずかしくて、{T} わかりません。",
          "かれは おさけを {T} のまない そうです。"
        ],
        target,
        vSeed,
        usedSet,
        "adv-zenzen"
      );
    }
    if (wordStr === "早く") {
      return pickNonRepeatingTemplate(
        [
          "あしたは いつもより {T} おきなければ なりません。",
          "まいばん {T} ねる ように して います。",
          "でかける じゅんびを {T} おわらせて ください。"
        ],
        target,
        vSeed,
        usedSet,
        "adv-hayaku"
      );
    }
    if (wordStr === "近く" || wordStr === "遠く") {
      return pickNonRepeatingTemplate(
        [
          "えきの {T} に あたらしい スーパーが できました。",
          "{T} から きれいな やまが よく みえます。",
          "やすみの ひに {T} の こうえんまで あるきました。"
        ],
        target,
        vSeed,
        usedSet,
        "adv-dist"
      );
    }

    // 3. Suru-verbs (ending in する) — all templates take dictionary form する directly
    if (wordStr.endsWith("する")) {
      return pickNonRepeatingTemplate(
        [
          "あした ともだちと いっしょに {T} つもりです。",
          "まいにち すこしずつ {T} ことが たいせつです。",
          "らいしゅうまでに かならず {T} ように して ください。",
          "じかんが ある ときに {T} ことに して います。",
          "これから みんなで {T} ところなので、てつだって ください。",
          "きのう きめた とおりに {T} ことが できました。",
          "やすみの ひは ゆっくり {T} よていです。",
          "わすれない うちに {T} ほうが いいと おもいます。"
        ],
        target,
        vSeed,
        usedSet,
        "verb-suru"
      );
    }

    // 4. Dictionary-form Verbs (ending in hiragana okurigana う,く,ぐ,す,つ,ぬ,ぶ,む,る)
    if (/[うくぐすつぬぶむる]$/.test(wordStr)) {
      return pickNonRepeatingTemplate(
        [
          "まいにち きちんと {T} ことが たいせつです。",
          "あした はやく {T} つもりです。",
          "これから {T} ところですが、いっしょに どうですか。",
          "わすれないで {T} ように、メモを とりました。",
          "じかんが ある ときに、ゆっくり {T} のが すきです。",
          "らいしゅうの げつようびに {T} よていです。",
          "つぎの えきで {T} まえに、きっぷを よういして ください。",
          "ひとりで {T} ことが できるように なりました。",
          "きょうは もう おそいので、あした {T} ことに しましょう。",
          "もうすぐ {T} じかんに なりますから、じゅんびして ください。",
          "せんせいが {T} とおりに やって みて ください。",
          "たいへんですが、さいごまで {T} ために がんばります。"
        ],
        target,
        vSeed,
        usedSet,
        "verb-ru"
      );
    }

    // 5. i-Adjectives (ending in い, excluding deverbal nouns like 知り合い, 皿洗い, 見舞い, 思い)
    if (
      wordStr.endsWith("い") &&
      wordStr.length >= 2 &&
      !/(合い|洗い|見舞い|思い|わい|違い|手伝い|支払い|問い合わせ)$/.test(wordStr)
    ) {
      return pickNonRepeatingTemplate(
        [
          "この まちは とても {T} と おもいます。",
          "きのう かった ものは、おもったより {T} です。",
          "ここは いつも {T} から、とても きに いって います。",
          "あたらしい へやは まえより {T} ので、べんりです。",
          "きょうは いつもより {T} ひですね。",
          "ともだちは 「こっちの ほうが {T} よ」 と いいました。",
          "あまり {T} ものは えらばない ほうが いいですよ。",
          "しゃしんを みたら、とても {T} ようすが わかりました。",
          "だんだん {T} きせつに なって きましたね。",
          "みんなが {T} と いって よろこんで いました。",
          "もう すこし {T} ものが あれば、かいたいです。",
          "にほんへ きて、いちばん {T} と かんじた ことです。"
        ],
        target,
        vSeed,
        usedSet,
        "adj-i"
      );
    }

    // 6. People / Family / Professions
    if (
      /[家員長様兄弟姉妹夫妻主人者医王婦友児客選手氏親娘孫祖父母]$/.test(wordStr) ||
      m.includes("người") ||
      m.includes("anh trai") ||
      m.includes("chị gái") ||
      m.includes("em trai") ||
      m.includes("em gái") ||
      m.includes("vợ chồng") ||
      m.includes("nhân viên") ||
      m.includes("bác sĩ")
    ) {
      return pickNonRepeatingTemplate(
        [
          "あそこに いる ひとは わたしの しりあいの {T} です。",
          "きのう えきの まえで {T} に あいました。",
          "こんしゅうの どようびに {T} と しょくじに いきます。",
          "この プレゼントは {T} から もらった ものです。",
          "わからない ことが あったら、{T} に きいて ください。",
          "らいげつ {T} が わたしの いえへ あそびに きます。",
          "でんわで {T} と いろいろな はなしを しました。",
          "いつも おせわに なって いる {T} に おれいを いいました。",
          "うちの {T} は とても げんきで やさしい ひとです。",
          "かいぎしつで {T} が くるのを まって います。"
        ],
        target,
        vSeed,
        usedSet,
        "noun-person"
      );
    }

    // 7. Places / Buildings / Nature Locations
    if (
      /[屋店場館園院室所駅市区村県府都京道国海湖池谷原里野辺宅社寺城港橋森島]$/.test(wordStr) ||
      m.includes("nhà") ||
      m.includes("phòng") ||
      m.includes("quán") ||
      m.includes("tiệm") ||
      m.includes("công viên") ||
      m.includes("bệnh viện") ||
      m.includes("thành phố")
    ) {
      return pickNonRepeatingTemplate(
        [
          "やすみの ひに かぞくと {T} へ いきました。",
          "えきから {T} まで あるいて じゅっぷんぐらい かかります。",
          "あしたの ごご、{T} の まえで あいましょう。",
          "この ちかくに とても おおきな {T} が あります。",
          "きのう ともだちと {T} で しゃしんを とりました。",
          "つぎの やすみに {T} へ あそびに いきたいです。",
          "ちずを みながら、はじめて {T} まで あるきました。",
          "この バスに のると、{T} の ちかくに つきます。",
          "わたしの すんで いる まちには きれいな {T} が あります。",
          "まいしゅう にちようびに {T} の まわりを さんぽします。"
        ],
        target,
        vSeed,
        usedSet,
        "noun-place"
      );
    }

    // 8. Time / Seasons / Dates / Frequency
    if (
      /[朝昼晩夜午週毎春夏秋冬日年時分秒月曜昔今度回期代末]$/.test(wordStr) ||
      m.includes("buổi sáng") ||
      m.includes("buổi trưa") ||
      m.includes("buổi tối") ||
      m.includes("mùa") ||
      m.includes("tuần") ||
      m.includes("tháng") ||
      m.includes("năm")
    ) {
      return pickNonRepeatingTemplate(
        [
          "{T} に なると、いつも いそがしく なります。",
          "つぎの テストは {T} に おこなわれます。",
          "{T} の よていを カレンダーに かいて おきました。",
          "わたしは {T} の きせつや じかんが いちばん すきです。",
          "{T} は かぞくと いえで ゆっくり すごします。",
          "この しごとは {T} までに おわらせる つもりです。",
          "きょねんの {T} に にほんへ りょこうに いきました。",
          "{T} から あたらしい クラスが はじまります。",
          "いつも {T} ごろに ともだちから れんらくが きます。",
          "{T} は てんきが いいと うれしいですね。"
        ],
        target,
        vSeed,
        usedSet,
        "noun-time"
      );
    }

    // 9. General Nouns / Objects / Study / Daily Life (24 distinct templates so no two questions ever share a frame)
    return pickNonRepeatingTemplate(
      [
        "きょうの じゅぎょうで {T} に ついて くわしく ならいました。",
        "この ほんには {T} の ことが わかりやすく かいて あります。",
        "あしたまでに {T} を しっかり じゅんびして おいて ください。",
        "ともだちと {T} に ついて いろいろ はなしあいました。",
        "せんせいから {T} の せつめいを きいて、よく わかりました。",
        "つぎの かいぎで {T} を みんなで きめる ことになって います。",
        "テレビの ニュースで {T} の はなしを みかけました。",
        "わたしは まえから {T} に とても きょうみが あります。",
        "たいせつな {T} ですから、なくさない ように して ください。",
        "インターネットで {T} を しらべて みました。",
        "きのう デパートへ いって、あたらしい {T} を みました。",
        "にほんの {T} は わたしの くにと すこし ちがいます。",
        "わからない {T} が あったら、いつでも しつもんして ください。",
        "ノートに {T} を きれいに まとめて かきました。",
        "ははに {T} の ことを でんわで つたえました。",
        "この {T} は だれでも かんたんに わかります。",
        "きょうの ごご、{T} の かくにんを おねがいします。",
        "まいにちの せいかつで {T} は とても だいじな ものです。",
        "あたらしい {T} が できて、みんな よろこんで います。",
        "せんぱいに {T} の やりかたを おしえて もらいました。",
        "テストの まえに {T} を もう いちど みなおしました。",
        "レポートの テーマとして {T} を えらびました。",
        "この プリントに {T} が かいて ありますから、よんで ください。",
        "ともだちに {T} を みせて もらって、びっくり しました。"
      ],
      target,
      vSeed,
      usedSet,
      "noun-gen"
    );
  }

  function stringHashSeed(str) {
    let h = 2166136261;
    const s = String(str || "default");
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return Math.abs(h);
  }

  function buildScopedJlptExamCore(targetKanjiList, allowedKanjiSet, setNumber, perMondaiCount, tier, scopeId) {
    const scopeHash = stringHashSeed(`${tier}-${scopeId}`);
    const isLessonTier = tier === "lesson";
    const tierVariantOffset = isLessonTier ? 0 : tier === "chapter" ? 5 : 9 + (scopeHash % 7);

    const chapterReadings = targetKanjiList.flatMap((k) =>
      getKanjiWords(k).map((w) => w.reading.replace(/〜/g, "").trim())
    );

    // Build per-Kanji vocabulary test items (strictly from the target scope's words & exercises)
    let perKanjiBuckets = targetKanjiList.map((k, kIdx) => {
      const items = [];
      const seenWords = new Set();

      // 1. Add from k.exercises first
      const exRead = (k.exercises || []).find((e) => e.type === "reading");
      const exKanji = (k.exercises || []).find((e) => e.type === "kanji");

      if (exRead && exRead.target && exRead.answer) {
        const wMatch = getKanjiWords(k).find(
          (w) => w.word.replace(/〜/g, "") === exRead.target || w.reading.replace(/〜/g, "") === exRead.answer
        );
        seenWords.add(exRead.target);
        items.push({
          kanjiObj: k,
          wordObj: wMatch || { word: exRead.target, reading: exRead.answer, meaning: exRead.hint || k.meaning, type: "on" },
          word: exRead.target,
          reading: exRead.answer,
          hanViet: wMatch ? wMatch.hanViet : k.hanViet,
          meaning: wMatch ? wMatch.meaning : exRead.hint || k.meaning,
          level: wMatch ? wMatch.level : "N4",
          textbookMondai1: exRead.question,
          textbookMondai2: exRead.question.replace(`【${exRead.target}】`, `【${exRead.answer}】`),
          existingReadOpts: exRead.options,
          existingKanjiOpts: [],
          isTextbookEx: true
        });
      }

      if (exKanji && exKanji.target && exKanji.answer && !seenWords.has(exKanji.answer)) {
        const wMatch = getKanjiWords(k).find(
          (w) => w.word.replace(/〜/g, "") === exKanji.answer || w.reading.replace(/〜/g, "") === exKanji.target
        );
        seenWords.add(exKanji.answer);
        items.push({
          kanjiObj: k,
          wordObj: wMatch || { word: exKanji.answer, reading: exKanji.target, meaning: exKanji.hint || k.meaning, type: "on" },
          word: exKanji.answer,
          reading: exKanji.target,
          hanViet: wMatch ? wMatch.hanViet : k.hanViet,
          meaning: wMatch ? wMatch.meaning : exKanji.hint || k.meaning,
          level: wMatch ? wMatch.level : "N4",
          textbookMondai1: exKanji.question.replace(`【${exKanji.target}】`, `【${exKanji.answer}】`),
          textbookMondai2: exKanji.question,
          existingReadOpts: [],
          existingKanjiOpts: exKanji.options,
          isTextbookEx: true
        });
      }

      // 2. Add all remaining vocabulary words of this Kanji
      getKanjiWords(k).forEach((w) => {
        const cleanWord = w.word.replace(/〜/g, "").trim();
        const cleanRead = w.reading.replace(/〜/g, "").trim();
        if (!cleanWord || !cleanRead || !/[\u4e00-\u9faf]/.test(cleanWord)) return;
        if (seenWords.has(cleanWord)) return;
        seenWords.add(cleanWord);

        items.push({
          kanjiObj: k,
          wordObj: w,
          word: cleanWord,
          reading: cleanRead,
          hanViet: w.hanViet || k.hanViet,
          meaning: w.meaning || k.meaning,
          level: w.level || "N4",
          textbookMondai1: null,
          textbookMondai2: null,
          existingReadOpts: [],
          existingKanjiOpts: [],
          isTextbookEx: false
        });
      });

      // For Chapter & Checkpoint tiers, rotate each Kanji's bucket so compound words not tested first in Lesson Set 1 come first!
      if (!isLessonTier && items.length > 2) {
        const shift = 2 + ((scopeHash + kIdx) % (items.length - 1));
        return items.slice(shift).concat(items.slice(0, shift));
      }
      return items;
    });

    // For Chapter & Checkpoint tiers, deterministically permute bucket order so question sequence is distinct across tiers
    if (!isLessonTier) {
      perKanjiBuckets = seededShuffle(perKanjiBuckets, scopeHash);
    }

    // Interleave (round-robin) across all Kanji in scope so every Kanji is represented evenly
    const masterItems = [];
    const globalSeenWords = new Set();
    const maxDepth = Math.max(...perKanjiBuckets.map((b) => b.length), 1);

    for (let d = 0; d < maxDepth; d++) {
      for (let b = 0; b < perKanjiBuckets.length; b++) {
        const item = perKanjiBuckets[b][d];
        if (item && !globalSeenWords.has(item.word)) {
          globalSeenWords.add(item.word);
          masterItems.push(item);
        }
      }
    }

    const totalPerSet = perMondaiCount * 2;
    const startOffset = (setNumber - 1) * totalPerSet;
    const selectedSlice = [];

    for (let i = 0; i < totalPerSet; i++) {
      const item = masterItems[(startOffset + i) % masterItems.length];
      selectedSlice.push(item);
    }

    // Split disjointly into Mondai 1 and Mondai 2:
    // Use word hash parity so that if a word appears in Lesson tier as Mondai 1, in Chapter tier it prefers Mondai 2!
    const mondai1Raw = [];
    const mondai2Raw = [];
    selectedSlice.forEach((item) => {
      const wHash = stringHashSeed(item.word);
      const preferM1 = tier === "lesson" ? wHash % 2 === 0 : tier === "chapter" ? wHash % 2 === 1 : (wHash + scopeHash) % 2 === 0;
      if (preferM1 && mondai1Raw.length < perMondaiCount) {
        mondai1Raw.push(item);
      } else if (!preferM1 && mondai2Raw.length < perMondaiCount) {
        mondai2Raw.push(item);
      } else if (mondai1Raw.length < perMondaiCount) {
        mondai1Raw.push(item);
      } else {
        mondai2Raw.push(item);
      }
    });

    const seedBase = (scopeHash % 10000) + setNumber * 97;
    const usedTemplatesInPaper = new Set();

    const mondai1 = mondai1Raw.map((item, idx) => {
      const wHash = stringHashSeed(item.word);
      const distractors = buildPhoneticReadingDistractors(
        item.reading,
        item.existingReadOpts,
        chapterReadings
      );
      const options = seededShuffle([item.reading, ...distractors], seedBase + idx);
      const qSentence =
        isLessonTier && item.isTextbookEx && item.textbookMondai1
          ? item.textbookMondai1
          : buildNaturalJlptSentence(
              item.word,
              item.reading,
              item.wordObj,
              item.kanjiObj,
              "mondai1",
              wHash + tierVariantOffset,
              usedTemplatesInPaper,
              isLessonTier
            );

      return {
        qNumber: idx + 1,
        mondai: 1,
        kanjiChar: item.kanjiObj.char,
        lessonId: item.kanjiObj.lessonId,
        word: item.word,
        reading: item.reading,
        hanViet: item.hanViet,
        meaning: item.meaning,
        level: item.level,
        question: qSentence,
        answer: item.reading,
        options
      };
    });

    const mondai2 = mondai2Raw.map((item, idx) => {
      const wHash = stringHashSeed(item.word);
      const options = buildScopedKanjiOptions(
        item.word,
        item.existingKanjiOpts,
        item.kanjiObj,
        targetKanjiList,
        allowedKanjiSet,
        seedBase + 50 + idx
      );
      const qSentence =
        isLessonTier && item.isTextbookEx && item.textbookMondai2
          ? item.textbookMondai2
          : buildNaturalJlptSentence(
              item.word,
              item.reading,
              item.wordObj,
              item.kanjiObj,
              "mondai2",
              wHash + tierVariantOffset,
              usedTemplatesInPaper,
              isLessonTier
            );

      return {
        qNumber: perMondaiCount + idx + 1,
        mondai: 2,
        kanjiChar: item.kanjiObj.char,
        lessonId: item.kanjiObj.lessonId,
        word: item.word,
        reading: item.reading,
        hanViet: item.hanViet,
        meaning: item.meaning,
        level: item.level,
        question: qSentence,
        answer: item.word,
        options
      };
    });

    return {
      mondai1,
      mondai2,
      allQuestions: mondai1.concat(mondai2),
      totalVocabInScope: masterItems.length
    };
  }

  function buildLessonJlptExamSet(lessonId, setNumber) {
    const lesson = LESSON_MAP[lessonId];
    if (!lesson) return { mondai1: [], mondai2: [], allQuestions: [], totalVocabInScope: 0 };

    const targetKanjiList = lesson.kanjiList;
    // Allowed Kanji scope: all Kanji learned up to this lesson (chapter < lesson.chapterId, or same chapter & lesson.number <= current)
    const allowedKanjiSet = new Set();
    CHAPTERS.forEach((ch) => {
      if (ch.id < lesson.chapterId) {
        ch.lessons.forEach((l) => l.kanjiList.forEach((k) => allowedKanjiSet.add(k.char)));
      } else if (ch.id === lesson.chapterId) {
        ch.lessons.forEach((l) => {
          if (l.number <= lesson.number) {
            l.kanjiList.forEach((k) => allowedKanjiSet.add(k.char));
          }
        });
      }
    });
    targetKanjiList.forEach((k) => {
      getKanjiWords(k).forEach((w) => {
        for (const ch of w.word) {
          if (/[\u4e00-\u9faf]/.test(ch)) allowedKanjiSet.add(ch);
        }
      });
    });

    // 5 Mondai 1 + 5 Mondai 2 = 10 questions per set x 3 sets = 30 non-repeating vocabulary questions per lesson
    return buildScopedJlptExamCore(targetKanjiList, allowedKanjiSet, setNumber, 5, "lesson", `lesson-${lessonId}`);
  }

  function buildJlptExamSet(chapterIds, setNumber, perMondaiCount, tier, scopeId) {
    const maxChId = Math.max(...chapterIds);
    const targetKanjiList = CHAPTERS.filter((ch) => chapterIds.includes(ch.id)).flatMap((ch) =>
      ch.lessons.flatMap((l) => l.kanjiList)
    );
    const allowedKanjiSet = new Set(
      CHAPTERS.filter((ch) => ch.id <= maxChId).flatMap((ch) =>
        ch.lessons.flatMap((l) => l.kanjiList.map((k) => k.char))
      )
    );
    targetKanjiList.forEach((k) => {
      getKanjiWords(k).forEach((w) => {
        for (const ch of w.word) {
          if (/[\u4e00-\u9faf]/.test(ch)) allowedKanjiSet.add(ch);
        }
      });
    });

    const actualTier = tier || (chapterIds.length === 1 ? "chapter" : "checkpoint");
    const actualScopeId = scopeId || `${actualTier}-${chapterIds.join("-")}`;
    return buildScopedJlptExamCore(targetKanjiList, allowedKanjiSet, setNumber, perMondaiCount, actualTier, actualScopeId);
  }

  // SIDEBAR & STATS RENDERING
  function updateSidebarStats() {
    const masteredCount = Object.keys(userState.mastered || {}).filter((k) => userState.mastered[k]).length;
    const starredCount = Object.keys(userState.starred || {}).filter((k) => userState.starred[k]).length;
    const mistakeCount = Object.keys(userState.mistakes || {}).filter((k) => userState.mistakes[k] > 0).length;
    const total = ALL_KANJI.length || 209;
    const pct = Math.round((masteredCount / total) * 100);

    const textEl = document.getElementById("sidebarProgressText");
    const barEl = document.getElementById("sidebarProgressBar");
    const starEl = document.getElementById("sidebarStarredCount");
    const misEl = document.getElementById("sidebarMistakeCount");
    const badgeEl = document.getElementById("notebookBadge");

    if (textEl) textEl.textContent = `${masteredCount} / ${total} chữ (${pct}%)`;
    if (barEl) barEl.style.width = `${pct}%`;
    if (starEl) starEl.textContent = `⭐ ${starredCount} đánh dấu`;
    if (misEl) misEl.textContent = `⚠️ ${mistakeCount} hay sai`;
    if (badgeEl) {
      const nbTotal = starredCount + mistakeCount;
      badgeEl.style.display = nbTotal > 0 ? "inline-block" : "none";
      badgeEl.textContent = String(nbTotal);
    }
  }

  function renderSidebarTree() {
    const treeEl = document.getElementById("chapterTree");
    if (!treeEl) return;

    let html = "";
    CHAPTERS.forEach((ch) => {
      const isOpen = openChapterIds.has(ch.id);
      const chKanji = ch.lessons.flatMap((l) => l.kanjiList);
      const chMastered = chKanji.filter((k) => userState.mastered[k.char]).length;

      html += `
        <div class="chapter-group ${isOpen ? "open" : ""}" data-ch="${ch.id}">
          <button class="chapter-header-btn" onclick="window.toggleChapterSidebar(${ch.id})">
            <span>${ch.icon}</span>
            <span style="flex:1">${escapeHtml(ch.titleVi)}</span>
            <span style="font-size:11px;color:var(--text-muted)">${chMastered}/${chKanji.length}</span>
          </button>
          <div class="chapter-lessons-list">
            ${ch.lessons
              .map((l) => {
                const lMastered = l.kanjiList.filter((k) => userState.mastered[k.char]).length;
                const isActive =
                  (currentView === "lesson" && currentLessonId === l.id) ||
                  (currentView === "jlpt-exam" && activeJlptExam && activeJlptExam.baseType === "lesson" && activeJlptExam.lessonId === l.id);
                const doneSets = [1, 2, 3].filter(
                  (sNum) => userState.testHistory && userState.testHistory[`lesson-${l.id}-set-${sNum}`]
                ).length;
                return `
                  <div>
                    <button class="lesson-nav-btn ${isActive ? "active" : ""}" onclick="window.openLesson('${l.id}')">
                      <span>Bài ${l.number}: ${escapeHtml(l.titleVi)} (${escapeHtml(l.titleJp)})</span>
                      <span style="font-size:11px;opacity:0.85">${lMastered}/${l.kanjiList.length}${doneSets > 0 ? ` • 📝${doneSets}/3` : ""}</span>
                    </button>
                    <div style="display:flex;gap:3px;padding:2px 4px 6px 14px">
                      ${[1, 2, 3]
                        .map((sNum) => {
                          const lh = userState.testHistory && userState.testHistory[`lesson-${l.id}-set-${sNum}`];
                          const isCurrentSet =
                            currentView === "jlpt-exam" &&
                            activeJlptExam &&
                            activeJlptExam.baseType === "lesson" &&
                            activeJlptExam.lessonId === l.id &&
                            activeJlptExam.setNumber === sNum;
                          return `<button class="exam-set-btn ${isCurrentSet ? "active-set" : lh ? "completed" : ""}" style="flex:1;justify-content:center;padding:3px 4px;font-size:10.5px" onclick="window.startLessonJlptTest('${l.id}', ${sNum})">
                            Đề ${sNum}${lh ? ` (${lh.bestScore}/${lh.total})` : ""}
                          </button>`;
                        })
                        .join("")}
                    </div>
                  </div>
                `;
              })
              .join("")}
            <div style="padding:4px 0 2px 6px;font-size:10.5px;font-weight:700;color:var(--text-muted)">🎯 Test Tổng Chương ${ch.id}:</div>
            <div style="display:flex;gap:4px;margin-top:2px;padding-left:6px">
              ${[1, 2, 3]
                .map((sNum) => {
                  const h = userState.testHistory && userState.testHistory[`ch-${ch.id}-set-${sNum}`];
                  return `<button class="exam-set-btn ${h ? "completed" : ""}" style="flex:1;justify-content:center;padding:5px 4px;font-size:11px" onclick="window.startChapterTest(${ch.id}, ${sNum})">
                    Đề ${sNum} ${h ? `(${h.bestScore}/${h.total})` : ""}
                  </button>`;
                })
                .join("")}
            </div>
          </div>
        </div>
      `;

      // Insert checkpoint banner in sidebar after Ch 2, Ch 4, Ch 6, Ch 9
      if (ch.id === 2) {
        html += `<button class="checkpoint-sidebar-btn" onclick="window.startCheckpointById('cp-1-2', 1)">
          <span>🏆 Test Tổng Chương 1–2</span><span>3 đề →</span>
        </button>`;
      } else if (ch.id === 4) {
        html += `<button class="checkpoint-sidebar-btn" onclick="window.startCheckpointById('cp-3-4', 1)">
          <span>🏆 Test Tổng Chương 3–4</span><span>3 đề →</span>
        </button>
        <button class="checkpoint-sidebar-btn" style="border-color:var(--primary);background:var(--primary-soft)" onclick="window.startCheckpointById('cp-1-4', 1)">
          <span>🔥 まとめテスト 1〜4章</span><span>3 đề →</span>
        </button>`;
      } else if (ch.id === 6) {
        html += `<button class="checkpoint-sidebar-btn" onclick="window.startCheckpointById('cp-5-6', 1)">
          <span>🏆 Test Tổng Chương 5–6</span><span>3 đề →</span>
        </button>`;
      } else if (ch.id === 9) {
        html += `<button class="checkpoint-sidebar-btn" onclick="window.startCheckpointById('cp-7-9', 1)">
          <span>🏆 Test Tổng Chương 7–9</span><span>3 đề →</span>
        </button>
        <button class="checkpoint-sidebar-btn" style="border-color:var(--primary);background:var(--primary-soft)" onclick="window.startCheckpointById('cp-5-9', 1)">
          <span>🔥 まとめテスト 5〜9章</span><span>3 đề →</span>
        </button>`;
      }
    });

    treeEl.innerHTML = html;

    // Update top nav pills
    document.querySelectorAll(".sidebar-quick-nav .nav-pill").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-view") === currentView);
    });
  }

  window.toggleChapterSidebar = function (chId) {
    if (openChapterIds.has(chId)) {
      openChapterIds.delete(chId);
    } else {
      openChapterIds.add(chId);
    }
    renderSidebarTree();
  };

  window.openLesson = function (lessonId, kanjiChar, tab) {
    const lesson = LESSON_MAP[lessonId];
    if (!lesson) return;
    currentView = "lesson";
    currentLessonId = lessonId;
    openChapterIds.add(lesson.chapterId);
    currentLessonTab = tab || "study";
    currentKanjiChar = kanjiChar || lesson.kanjiList[0].char;
    closeMobileSidebar();
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function closeMobileSidebar() {
    const sb = document.getElementById("sidebar");
    if (sb) sb.classList.remove("mobile-open");
  }

  // BREADCRUMB
  function renderBreadcrumb() {
    const bc = document.getElementById("breadcrumb");
    if (!bc) return;
    if (currentView === "dashboard") {
      bc.innerHTML = `<span>🗺️ Lộ trình Kanji Master N4 (9 Chương • 27 Bài • 209 Chữ)</span>`;
    } else if (currentView === "lesson") {
      const lesson = LESSON_MAP[currentLessonId];
      bc.innerHTML = `
        <span class="crumb-link" onclick="window.switchView('dashboard')">Lộ trình</span>
        <span>›</span>
        <span>${escapeHtml(lesson.chapterTitleVi)}</span>
        <span>›</span>
        <span style="color:var(--primary)">Bài ${lesson.number}: ${escapeHtml(lesson.titleVi)} (${escapeHtml(lesson.titleJp)})</span>
      `;
    } else if (currentView === "checkpoints") {
      bc.innerHTML = `
        <span class="crumb-link" onclick="window.switchView('dashboard')">Lộ trình</span>
        <span>›</span>
        <span>🏆 Hệ thống Bài Test Tổng & Bộ Đề Đa Kỳ Thi</span>
      `;
    } else if (currentView === "custom-practice") {
      bc.innerHTML = `
        <span class="crumb-link" onclick="window.switchView('dashboard')">Lộ trình</span>
        <span>›</span>
        <span style="color:var(--primary)">🎛️ Tự Chọn Bài / Chữ Kanji & Tạo Đề (JLPT • NAT-TEST • JBT/J.TEST • TOPJ)</span>
      `;
    } else if (currentView === "choukai") {
      bc.innerHTML = `
        <span class="crumb-link" onclick="window.switchView('dashboard')">Lộ trình</span>
        <span>›</span>
        <span style="color:var(--primary)">🎧 Phòng Luyện Nghe Choukai (聴解) & Phản Xạ Kaiwa (会話) N5–N4</span>
      `;
    } else if (currentView === "notebook") {
      bc.innerHTML = `
        <span class="crumb-link" onclick="window.switchView('dashboard')">Lộ trình</span>
        <span>›</span>
        <span>📒 Sổ tay Chữ hay sai & Đánh dấu</span>
      `;
    } else if (currentView === "dictionary") {
      bc.innerHTML = `
        <span class="crumb-link" onclick="window.switchView('dashboard')">Lộ trình</span>
        <span>›</span>
        <span>🔍 Tra cứu 209 chữ Kanji N4</span>
      `;
    } else if (currentView === "quiz-runner" && activeQuiz) {
      bc.innerHTML = `
        <span class="crumb-link" onclick="window.switchView('dashboard')">Lộ trình</span>
        <span>›</span>
        <span style="color:var(--primary)">🎯 ${escapeHtml(activeQuiz.title)}</span>
      `;
    } else if (currentView === "jlpt-exam" && activeJlptExam) {
      if (activeJlptExam.baseType === "lesson") {
        const lesson = LESSON_MAP[activeJlptExam.lessonId];
        bc.innerHTML = `
          <span class="crumb-link" onclick="window.switchView('dashboard')">Lộ trình</span>
          <span>›</span>
          <span class="crumb-link" onclick="window.openLesson('${activeJlptExam.lessonId}')">${escapeHtml(lesson ? lesson.chapterTitleVi : "")} • Bài ${activeJlptExam.lessonId}</span>
          <span>›</span>
          <span style="color:var(--primary)">📄 Test JLPT Bài ${activeJlptExam.lessonId} — Đề số ${activeJlptExam.setNumber}</span>
        `;
      } else {
        bc.innerHTML = `
          <span class="crumb-link" onclick="window.switchView('dashboard')">Lộ trình</span>
          <span>›</span>
          <span class="crumb-link" onclick="window.switchView('checkpoints')">Bộ đề JLPT</span>
          <span>›</span>
          <span style="color:var(--primary)">📄 ${escapeHtml(activeJlptExam.title)} — Đề số ${activeJlptExam.setNumber}</span>
        `;
      }
    }
  }

  window.switchView = function (viewName) {
    currentView = viewName;
    closeMobileSidebar();
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // VIEW 1: DASHBOARD (LỘ TRÌNH 9 CHƯƠNG + TRẠM TEST TỔNG)
  function renderDashboardView() {
    const masteredCount = Object.keys(userState.mastered || {}).filter((k) => userState.mastered[k]).length;
    const starredCount = Object.keys(userState.starred || {}).filter((k) => userState.starred[k]).length;
    const mistakeCount = Object.keys(userState.mistakes || {}).filter((k) => userState.mistakes[k] > 0).length;

    let html = `
      <div class="hero-banner">
        <div>
          <h2>Chinh phục 209 Chữ Kanji N4 — 漢字マスター N4</h2>
          <p>Học theo từng Chương và từng Bài bám sát giáo trình Kanji Master N4: phân tích Bộ thủ, Chiết tự mẹo nhớ, Từ ghép N5/N4, Tập viết nét chữ và Bài tập thực chiến.</p>
          <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="window.openLesson('${currentLessonId}')">
              ▶ Học tiếp Bài ${LESSON_MAP[currentLessonId].id} (${escapeHtml(LESSON_MAP[currentLessonId].titleVi)})
            </button>
            <button class="btn btn-secondary" style="background:#fff;color:var(--primary);border-color:#fff;font-weight:800" onclick="window.switchView('custom-practice')">
              🎛️ Tự Chọn Bài / Kanji & Tạo Đề (JLPT • NAT • JBT)
            </button>
            <button class="btn btn-secondary" style="background:#fef3c7;color:#92400e;border-color:#fcd34d;font-weight:800" onclick="window.switchView('choukai')">
              🎧 Luyện Nghe Choukai & Kaiwa N4
            </button>
            <button class="btn btn-secondary" style="background:rgba(255,255,255,0.14);color:#fff;border-color:rgba(255,255,255,0.25)" onclick="window.switchView('checkpoints')">
              🏆 Làm Bài Test Tổng
            </button>
          </div>
        </div>
        <div class="hero-stats">
          <div class="hero-stat-box">
            <strong>${masteredCount}/209</strong>
            <span>Đã thuộc</span>
          </div>
          <div class="hero-stat-box">
            <strong>${starredCount}</strong>
            <span>Đánh dấu ⭐</span>
          </div>
          <div class="hero-stat-box">
            <strong>${mistakeCount}</strong>
            <span>Cần ôn lại ⚠️</span>
          </div>
        </div>
      </div>

      <div class="chapter-grid">
    `;

    CHAPTERS.forEach((ch) => {
      const chKanji = ch.lessons.flatMap((l) => l.kanjiList);
      const chMastered = chKanji.filter((k) => userState.mastered[k.char]).length;

      html += `
        <div class="chapter-card">
          <div class="chapter-card-header">
            <div class="chapter-title-wrap">
              <div class="chapter-icon">${ch.icon}</div>
              <div>
                <h3>${escapeHtml(ch.titleVi)} <span class="jp-font" style="font-weight:500;font-size:15px;color:var(--text-muted)">(${escapeHtml(ch.titleJp)})</span></h3>
                <p>${ch.lessons.length} bài học • ${chKanji.length} chữ Kanji • Đã thuộc ${chMastered}/${chKanji.length} chữ</p>
              </div>
            </div>
            <div class="exam-set-buttons">
              <span style="font-size:12px;font-weight:700;color:var(--text-muted);align-self:center;margin-right:4px">🎯 Test JLPT Chương ${ch.id}:</span>
              ${[1, 2, 3]
                .map((sNum) => {
                  const h = userState.testHistory && userState.testHistory[`ch-${ch.id}-set-${sNum}`];
                  return `
                    <button class="exam-set-btn ${h ? "completed" : ""}" onclick="window.startChapterTest(${ch.id}, ${sNum})">
                      <span>📄 Đề số ${sNum}</span>
                      ${h ? `<span>✅ ${h.bestScore}/${h.total}</span>` : `<span style="opacity:0.7">(20 câu)</span>`}
                    </button>
                  `;
                })
                .join("")}
            </div>
          </div>

          <div class="lessons-row">
            ${ch.lessons
              .map((lesson) => {
                const lMastered = lesson.kanjiList.filter((k) => userState.mastered[k.char]).length;
                return `
                  <div class="lesson-card" onclick="window.openLesson('${lesson.id}')">
                    <div>
                      <div class="lesson-card-top">
                        <span class="lesson-badge">Chương ${ch.id} • Bài ${lesson.number}</span>
                        <span style="font-size:12px;font-weight:700;color:var(--success)">${lMastered}/${lesson.kanjiList.length} đã thuộc</span>
                      </div>
                      <div class="lesson-title">${escapeHtml(lesson.titleVi)} — <span class="jp-font">${escapeHtml(lesson.titleJp)}</span></div>
                      <div class="lesson-sub jp-font">${escapeHtml(lesson.reading)}</div>
                      <div class="kanji-preview-pills">
                        ${lesson.kanjiList
                          .map((k) => {
                            const isM = !!userState.mastered[k.char];
                            const isS = !!userState.starred[k.char];
                            return `<span class="kanji-mini-chip ${isM ? "mastered" : ""} ${isS ? "starred" : ""}" title="${k.char} (${k.hanViet}): ${k.meaning}">${k.char}</span>`;
                          })
                          .join("")}
                      </div>
                      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed var(--border-color)" onclick="event.stopPropagation()">
                        <div style="font-size:11px;font-weight:700;color:var(--text-muted);margin-bottom:5px">
                          📝 Test JLPT Cuối Bài ${lesson.id} (3 đề không lặp):
                        </div>
                        <div style="display:flex;gap:5px;flex-wrap:wrap">
                          ${[1, 2, 3]
                            .map((sNum) => {
                              const lh = userState.testHistory && userState.testHistory[`lesson-${lesson.id}-set-${sNum}`];
                              return `
                                <button
                                  class="exam-set-btn ${lh ? "completed" : ""}"
                                  style="padding:4px 8px;font-size:11px;flex:1;justify-content:center"
                                  onclick="window.startLessonJlptTest('${lesson.id}', ${sNum})"
                                >
                                  <span>📄 Đề ${sNum}</span>
                                  ${lh ? `<span>✅ ${lh.bestScore}/${lh.total}</span>` : `<span style="opacity:0.7">(10c)</span>`}
                                </button>
                              `;
                            })
                            .join("")}
                        </div>
                      </div>
                    </div>
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;padding-top:10px;border-top:1px solid var(--border-color);font-size:12.5px;font-weight:700;color:var(--primary)">
                      <span>Vào học & Làm bài tập</span>
                      <span>→</span>
                    </div>
                  </div>
                `;
              })
              .join("")}
          </div>
        </div>
      `;

      // Checkpoint banners after Ch 2, Ch 4 (3-4 then 1-4), Ch 6 (5-6), Ch 9 (7-9 then 5-9)
      const cpListAfter = {
        2: [CHECKPOINT_TESTS[0]], // cp-1-2
        4: [CHECKPOINT_TESTS[1], CHECKPOINT_TESTS[2]], // cp-3-4 first, then cp-1-4
        6: [CHECKPOINT_TESTS[3]], // cp-5-6
        9: [CHECKPOINT_TESTS[4], CHECKPOINT_TESTS[5]] // cp-7-9 first, then cp-5-9
      }[ch.id];

      if (cpListAfter) {
        cpListAfter.forEach((cpItem) => {
          html += `
            <div class="checkpoint-banner-card">
              <div class="checkpoint-banner-info">
                <h4>🏆 ${escapeHtml(cpItem.title)} <span class="lesson-badge">${escapeHtml(cpItem.badge)}</span></h4>
                <p>${escapeHtml(cpItem.subtitle)} • 🔒 Chỉ gồm các từ vựng thuộc Chương ${cpItem.chapters.join(", ")}</p>
              </div>
              <div class="exam-set-buttons">
                ${[1, 2, 3]
                  .map((sNum) => {
                    const h = userState.testHistory && userState.testHistory[`${cpItem.id}-set-${sNum}`];
                    return `
                      <button class="exam-set-btn ${h ? "completed" : ""}" onclick="window.startCheckpointById('${cpItem.id}', ${sNum})">
                        <span>🏆 Đề số ${sNum}</span>
                        ${h ? `<span>✅ ${h.bestScore}/${h.total}</span>` : `<span style="opacity:0.7">(${cpItem.questionCount} câu)</span>`}
                      </button>
                    `;
                  })
                  .join("")}
              </div>
            </div>
          `;
        });
      }
    });

    html += `</div>`;
    return html;
  }

  // VIEW 2: LESSON VIEW (HỌC TỪNG CHỮ + FLASHCARD + BÀI TẬP CUỐI BÀI)
  let perKanjiQuizState = {
    kanjiChar: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false,
    selectedAnswer: "",
    isCorrect: false
  };

  let flashcardState = {
    lessonId: null,
    index: 0,
    flipped: false
  };

  function renderLessonView() {
    const lesson = LESSON_MAP[currentLessonId];
    if (!lesson) return "";

    const htmlHeader = `
      <div class="lesson-header-bar">
        <div>
          <span class="lesson-badge">${escapeHtml(lesson.chapterTitleVi)} • Bài ${lesson.number}</span>
          <h2 style="font-size:21px;font-weight:800;margin-top:4px">
            ${escapeHtml(lesson.titleVi)} — <span class="jp-font">${escapeHtml(lesson.titleJp)} (${escapeHtml(lesson.reading)})</span>
          </h2>
          ${lesson.introVi ? `<p style="font-size:13px;color:var(--text-secondary);margin-top:2px">${escapeHtml(lesson.introVi)}</p>` : ""}
        </div>
        <div class="lesson-mode-tabs">
          <button class="mode-tab-btn ${currentLessonTab === "study" ? "active" : ""}" onclick="window.setLessonTab('study')">
            📖 Học từng chữ & Bài tập (${lesson.kanjiList.length})
          </button>
          <button class="mode-tab-btn ${currentLessonTab === "flashcard" ? "active" : ""}" onclick="window.setLessonTab('flashcard')">
            🃏 Flashcard Lật thẻ
          </button>
          <button class="mode-tab-btn ${currentLessonTab === "practice" ? "active" : ""}" onclick="window.setLessonTab('practice')">
            ✍️ Test JLPT Cuối Bài (3 Đề)
          </button>
        </div>
      </div>
    `;

    if (currentLessonTab === "flashcard") {
      return htmlHeader + renderLessonFlashcardTab(lesson);
    }
    if (currentLessonTab === "practice") {
      return htmlHeader + renderLessonPracticeTabLauncher(lesson);
    }
    return htmlHeader + renderLessonStudyTab(lesson);
  }

  window.setLessonTab = function (tab) {
    currentLessonTab = tab;
    if (tab === "flashcard") {
      flashcardState = { lessonId: currentLessonId, index: 0, flipped: false };
    }
    renderApp();
  };

  function renderLessonStudyTab(lesson) {
    const k = lesson.kanjiList.find((x) => x.char === currentKanjiChar) || lesson.kanjiList[0];
    currentKanjiChar = k.char;

    const isMastered = !!userState.mastered[k.char];
    const isStarred = !!userState.starred[k.char];
    const userNote = (userState.notes && userState.notes[k.char]) || "";
    const allWords = getKanjiWords(k);
    const filteredWords = allWords.filter((w) => {
      if (currentVocabFilter === "ALL") return true;
      if (currentVocabFilter === "N4" || currentVocabFilter === "N5") return w.level === currentVocabFilter;
      if (currentVocabFilter === "on" || currentVocabFilter === "kun") return w.type === currentVocabFilter;
      return true;
    });

    // Ensure per-kanji quiz is initialized for this Kanji
    if (perKanjiQuizState.kanjiChar !== k.char) {
      perKanjiQuizState = {
        kanjiChar: k.char,
        questions: buildExercisesForKanji(k),
        currentIndex: 0,
        score: 0,
        answered: false,
        selectedAnswer: "",
        isCorrect: false
      };
    }

    const stripHtml = `
      <div class="kanji-strip">
        ${lesson.kanjiList
          .map((item) => {
            const active = item.char === k.char;
            const m = !!userState.mastered[item.char];
            const s = !!userState.starred[item.char];
            return `
              <button class="kanji-strip-btn ${active ? "active" : ""}" onclick="window.selectKanjiInLesson('${item.char}')">
                <span class="ks-status">${m ? "✅" : s ? "⭐" : ""}</span>
                <span class="ks-char">${item.char}</span>
                <span class="ks-hv">${escapeHtml(item.hanViet)}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    `;

    const leftColHtml = `
      <div class="kanji-left-col">
        <!-- Main Kanji Card -->
        <div class="surface-card">
          <div class="kanji-hero-box">
            <div class="tianzige-box">
              <span class="big-kanji-char kanji-calligraphy">${k.char}</span>
            </div>
            <div class="kanji-meta-info">
              <span class="hv-pill">${escapeHtml(k.hanViet)}</span>
              <div class="kanji-meaning-title">${escapeHtml(k.meaning)}</div>
              <div class="stroke-badge">🖌️ Số nét: <strong>${k.strokes}画 (${k.strokes} nét)</strong></div>
              <div style="margin-top:8px">
                <button class="btn btn-secondary" style="padding:5px 10px;font-size:12px" onclick="window.speakJp('${k.char}')">
                  🔊 Nghe phát âm
                </button>
              </div>
            </div>
          </div>

          <div class="reading-grid">
            <div class="reading-box on-box">
              <span class="reading-label">Âm On (音読み - Ghép Hán)</span>
              <div class="reading-values">${k.onyomi && k.onyomi.length ? escapeHtml(k.onyomi.join(" ・ ")) : "—"}</div>
            </div>
            <div class="reading-box kun-box">
              <span class="reading-label">Âm Kun (訓読み - Thuần Nhật)</span>
              <div class="reading-values">${k.kunyomi && k.kunyomi.length ? escapeHtml(k.kunyomi.join(" ・ ")) : "—"}</div>
            </div>
          </div>

          <div class="kanji-action-row">
            <button class="btn ${isMastered ? "btn-success" : "btn-secondary"}" style="flex:1" onclick="window.toggleMastered('${k.char}')">
              ${isMastered ? "✅ Đã thuộc chữ này" : "☐ Đánh dấu đã thuộc"}
            </button>
            <button class="btn btn-secondary" onclick="window.toggleStarred('${k.char}')" title="Đánh dấu vào sổ tay cần chú ý">
              ${isStarred ? "⭐ Đã lưu" : "☆ Đánh dấu"}
            </button>
            <button class="btn btn-secondary" onclick="window.openCustomNoteModal('${k.char}')" title="Thêm từ ghép hoặc ghi chú riêng">
              📝 Ghi chú / +Từ
            </button>
          </div>
        </div>

        <!-- Writing Practice Pad (練習枠) -->
        <div class="surface-card">
          <div class="section-heading">
            <span>✍️ Khung tập viết nét chữ (練習枠)</span>
            <div style="display:flex;gap:6px">
              <button class="filter-chip" onclick="window.toggleCanvasGuide()">Ẩn/Hiện chữ mẫu</button>
              <button class="filter-chip" onclick="window.clearKanjiCanvas()">Xóa bảng</button>
            </div>
          </div>
          <div class="canvas-wrap">
            <div class="writing-canvas-container tianzige-box" style="width:220px;height:220px">
              <div class="canvas-guide-char kanji-calligraphy" id="canvasGuideChar">${k.char}</div>
              <canvas id="kanjiCanvas" width="220" height="220"></canvas>
            </div>
            <span style="font-size:12px;color:var(--text-muted)">Dùng chuột hoặc màn hình cảm ứng viết theo thứ tự nét từ trái sang phải, từ trên xuống dưới.</span>
          </div>
        </div>
      </div>
    `;

    const rightColHtml = `
      <div class="kanji-right-col">
        <!-- Structure, Radical & Mnemonic -->
        <div class="surface-card">
          <div class="section-heading">
            <span>🧩 Cấu trúc chữ, Bộ thủ & Mẹo nhớ (Chiết tự)</span>
          </div>
          <div class="anatomy-breakdown">
            <div class="anatomy-row">
              <div class="anatomy-item">
                <div class="anatomy-item-label">BỘ THỦ CHÍNH (部首)</div>
                <div class="anatomy-item-val">${escapeHtml(k.radical)}</div>
              </div>
              <div class="anatomy-item">
                <div class="anatomy-item-label">THÀNH PHẦN CẤU TẠO</div>
                <div class="anatomy-item-val">${escapeHtml(k.components)}</div>
              </div>
            </div>
            <div class="mnemonic-callout">
              <strong>💡 Câu chuyện / Mẹo nhớ nhanh:</strong><br/>
              ${escapeHtml(k.mnemonic)}
            </div>
            ${
              userNote
                ? `<div class="mnemonic-callout" style="background:var(--success-soft);border-left-color:var(--success)">
                    <strong>📌 Ghi chú cá nhân của bạn:</strong> ${escapeHtml(userNote)}
                  </div>`
                : ""
            }
            ${
              k.lookalikes && k.lookalikes.length
                ? `
              <div class="lookalike-box">
                <div class="lookalike-title">⚠️ CẢNH BÁO CHỮ KANJI DỄ NHẦM LẪN (N5/N4)</div>
                <div class="lookalike-list">
                  ${k.lookalikes
                    .map(
                      (lk) => `
                    <div class="lookalike-item">
                      <span class="lookalike-char-badge">${escapeHtml(lk.char)}</span>
                      <strong>[${escapeHtml(lk.hanViet)}]</strong>
                      <span>— ${escapeHtml(lk.diff)}</span>
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>
            `
                : ""
            }
          </div>
        </div>

        <!-- Compound Words (N4 & N5) -->
        <div class="surface-card">
          <div class="section-heading" style="flex-wrap:wrap;gap:8px">
            <span>📚 Từ ghép thông dụng với 「${k.char}」 (N5 & N4)</span>
            <div class="vocab-filter-bar">
              <button class="filter-chip ${currentVocabFilter === "ALL" ? "active" : ""}" onclick="window.setVocabFilter('ALL')">Tất cả (${allWords.length})</button>
              <button class="filter-chip ${currentVocabFilter === "N4" ? "active" : ""}" onclick="window.setVocabFilter('N4')">Level N4</button>
              <button class="filter-chip ${currentVocabFilter === "N5" ? "active" : ""}" onclick="window.setVocabFilter('N5')">Level N5</button>
              <button class="filter-chip ${currentVocabFilter === "on" ? "active" : ""}" onclick="window.setVocabFilter('on')">Âm On</button>
              <button class="filter-chip ${currentVocabFilter === "kun" ? "active" : ""}" onclick="window.setVocabFilter('kun')">Âm Kun</button>
              <button class="filter-chip ${hideVocabSecrets ? "active" : ""}" onclick="window.toggleVocabSecrets()">🙈 Ẩn/Hiện đáp án</button>
              <button class="filter-chip ${kanjiOnlyVocab ? "active" : ""}" onclick="window.toggleKanjiOnlyVocab()">🫣 Chỉ để lại Kanji</button>
            </div>
          </div>

          <div class="vocab-list ${hideVocabSecrets ? "hide-secrets" : ""} ${kanjiOnlyVocab ? "kanji-only" : ""}">
            ${filteredWords
              .map(
                (w) => `
              <div class="vocab-item" onclick="this.classList.toggle('revealed')" title="${kanjiOnlyVocab || hideVocabSecrets ? "Di chuột hoặc bấm vào để xem đáp án" : ""}">
                <div class="vocab-left">
                  <button class="icon-btn" style="width:28px;height:28px;font-size:12px" onclick="event.stopPropagation(); window.speakJp('${escapeHtml(w.word.replace(/〜/g, ""))}')" title="Nghe phát âm">🔊</button>
                  <span class="vocab-word">${escapeHtml(w.word)}</span>
                  <span class="vocab-reading">${escapeHtml(w.reading)}</span>
                  <span class="vocab-hv">${escapeHtml(w.hanViet)}</span>
                </div>
                <div class="vocab-right">
                  <span class="vocab-meaning">${escapeHtml(w.meaning)}</span>
                  <span class="level-tag ${w.level}">${escapeHtml(w.level)}</span>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <!-- Example Sentences -->
        ${
          k.examples && k.examples.length
            ? `
          <div class="surface-card">
            <div class="section-heading">
              <span>💬 Câu ví dụ thực tế trong sách</span>
            </div>
            ${k.examples
              .map(
                (ex) => `
              <div class="example-item">
                <div class="example-jp">
                  <span>${escapeHtml(ex.jp)}</span>
                  <button class="icon-btn" onclick="window.speakJp('${escapeHtml(ex.jp)}')" title="Đọc câu ví dụ">🔊</button>
                </div>
                <div class="example-reading">${escapeHtml(ex.reading)}</div>
                <div class="example-vi">→ ${escapeHtml(ex.vi)}</div>
              </div>
            `
              )
              .join("")}
          </div>
        `
            : ""
        }

        <!-- Per-Kanji Interactive Exercise Widget -->
        ${renderPerKanjiExerciseBox(k, lesson)}

        <!-- Quick Launcher for 3 Non-Repeating Lesson JLPT Exam Sets -->
        <div class="surface-card" style="border:2px solid var(--primary);background:var(--primary-soft)">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
            <div>
              <h4 style="font-size:15.5px;font-weight:800;color:var(--primary)">
                📝 Bộ 3 Đề Thi Chuẩn JLPT Cuối Bài ${lesson.id}: ${escapeHtml(lesson.titleVi)}
              </h4>
              <p style="font-size:12.5px;color:var(--text-secondary);margin-top:2px">
                Mỗi đề 10 câu (5 câu <strong>問題1: Kanji → Hiragana</strong> + 5 câu <strong>問題2: Hiragana → Kanji</strong>) • 🔒 <strong>30 từ vựng khác nhau 100%, không lặp lại giữa 3 đề!</strong>
              </p>
            </div>
            <div class="exam-set-buttons">
              ${[1, 2, 3]
                .map((sNum) => {
                  const lh = userState.testHistory && userState.testHistory[`lesson-${lesson.id}-set-${sNum}`];
                  return `
                    <button class="exam-set-btn ${lh ? "completed" : ""}" onclick="window.startLessonJlptTest('${lesson.id}', ${sNum})">
                      <span>📄 Đề số ${sNum}</span>
                      ${lh ? `<span>✅ ${lh.bestScore}/${lh.total}</span>` : `<span style="opacity:0.75">(10 câu)</span>`}
                    </button>
                  `;
                })
                .join("")}
            </div>
          </div>
        </div>
      </div>
    `;

    return stripHtml + `<div class="kanji-detail-grid">${leftColHtml}${rightColHtml}</div>`;
  }

  function renderPerKanjiExerciseBox(k, lesson) {
    const qs = perKanjiQuizState.questions;
    const idx = perKanjiQuizState.currentIndex;

    if (idx >= qs.length) {
      const nextIdx = k.indexInLesson + 1;
      const nextKanji = lesson.kanjiList[nextIdx];
      return `
        <div class="surface-card practice-card">
          <div class="section-heading">
            <span>🎯 Bài tập luyện chữ 「${k.char}」 — Hoàn thành!</span>
          </div>
          <div style="text-align:center;padding:16px 8px">
            <div style="font-size:36px;margin-bottom:8px">🎉</div>
            <h4 style="font-size:18px;font-weight:800">Bạn đã trả lời đúng ${perKanjiQuizState.score} / ${qs.length} câu của chữ 「${k.char}」!</h4>
            <p style="font-size:13.5px;color:var(--text-secondary);margin:6px 0 16px">
              Làm bài tập ngay sau khi học giúp não ghi nhớ sâu cả cấu trúc bộ thủ lẫn từ ghép.
            </p>
            <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap">
              <button class="btn btn-success" onclick="window.markMasteredAndNext('${k.char}', '${nextKanji ? nextKanji.char : ""}')">
                ✅ Đánh dấu Đã thuộc ${nextKanji ? `& Qua chữ 「${nextKanji.char}」 →` : "& Làm bài tập cuối bài →"}
              </button>
              <button class="btn btn-secondary" onclick="window.resetPerKanjiQuiz('${k.char}')">
                🔄 Luyện lại chữ 「${k.char}」
              </button>
            </div>
          </div>
        </div>
      `;
    }

    const q = qs[idx];
    return `
      <div class="surface-card practice-card" id="perKanjiQuizCard">
        <div class="section-heading">
          <span>🎯 Bài tập thực hành ngay chữ 「${k.char}」</span>
          <span style="font-size:12.5px;color:var(--accent-indigo)">Câu ${idx + 1} / ${qs.length} • Đúng: ${perKanjiQuizState.score}</span>
        </div>

        <div class="quiz-question-box">
          <span class="quiz-type-badge">${escapeHtml(q.badge)}</span>
          <div class="quiz-prompt-text">${formatBracketQuestion(q.question)}</div>

          ${
            q.type === "typing"
              ? `
              <div class="typing-answer-wrap">
                <input
                  type="text"
                  id="perKanjiTypingInput"
                  class="typing-input"
                  placeholder="Gõ romaji (VD: kazoku) hoặc hiragana..."
                  value="${escapeHtml(perKanjiQuizState.selectedAnswer)}"
                  ${perKanjiQuizState.answered ? "disabled" : ""}
                  oninput="window.handleRomajiLiveInput(this)"
                  onkeydown="if(event.key==='Enter') window.submitPerKanjiTyping()"
                />
                ${
                  !perKanjiQuizState.answered
                    ? `<button class="btn btn-indigo" onclick="window.submitPerKanjiTyping()">Kiểm tra</button>`
                    : ""
                }
              </div>
              <div style="font-size:11.5px;color:var(--text-muted);margin-top:6px">
                💡 Mẹo: Bạn có thể gõ Romaji trực tiếp (ví dụ: <code>kazoku</code> sẽ tự đổi thành <code>かぞく</code>).
              </div>
            `
              : `
              <div class="quiz-options-grid">
                ${q.options
                  .map((opt) => {
                    let cls = "quiz-option-btn";
                    if (perKanjiQuizState.answered) {
                      if (opt === q.answer) cls += " correct";
                      else if (opt === perKanjiQuizState.selectedAnswer) cls += " wrong";
                    }
                    return `
                      <button
                        class="${cls}"
                        ${perKanjiQuizState.answered ? "disabled" : ""}
                        onclick="window.answerPerKanjiQuestion('${escapeHtml(opt)}')"
                      >
                        ${escapeHtml(opt)}
                      </button>
                    `;
                  })
                  .join("")}
              </div>
            `
          }

          ${
            perKanjiQuizState.answered
              ? `
              <div class="quiz-feedback ${perKanjiQuizState.isCorrect ? "ok" : "err"}">
                ${
                  perKanjiQuizState.isCorrect
                    ? `✅ Chính xác! Đáp án: <strong>${escapeHtml(q.answer)}</strong>`
                    : `❌ Chưa đúng! Đáp án đúng là: <strong>${escapeHtml(q.answer)}</strong> (Đã lưu chữ 「${k.char}」 vào Sổ tay ôn tập)`
                }
                ${q.hint ? `<div style="margin-top:4px;font-weight:500">💡 Giải thích: ${escapeHtml(q.hint)}</div>` : ""}
              </div>
              <div style="margin-top:12px;display:flex;justify-content:flex-end">
                <button class="btn btn-primary" onclick="window.nextPerKanjiQuestion()">
                  ${idx + 1 < qs.length ? "Câu tiếp theo →" : "Xem kết quả →"}
                </button>
              </div>
            `
              : ""
          }
        </div>
      </div>
    `;
  }

  window.handleRomajiLiveInput = function (inputEl) {
    const raw = inputEl.value;
    // Convert romaji segments while preserving trailing single 'n' until finalized
    if (/[a-zA-Z]/.test(raw)) {
      const converted = romajiToHiragana(raw, false);
      if (converted !== raw) {
        inputEl.value = converted;
      }
    }
  };

  window.answerPerKanjiQuestion = function (selected) {
    if (perKanjiQuizState.answered) return;
    const q = perKanjiQuizState.questions[perKanjiQuizState.currentIndex];
    const cleanSelected = romajiToHiragana(selected.trim(), true);
    const isCorrect = cleanSelected === q.answer || selected.trim() === q.answer;

    perKanjiQuizState.answered = true;
    perKanjiQuizState.selectedAnswer = selected;
    perKanjiQuizState.isCorrect = isCorrect;

    if (isCorrect) {
      perKanjiQuizState.score++;
    } else {
      userState.mistakes[q.kanjiChar] = (userState.mistakes[q.kanjiChar] || 0) + 1;
      saveState();
    }
    renderApp();
  };

  window.submitPerKanjiTyping = function () {
    const inp = document.getElementById("perKanjiTypingInput");
    if (!inp || !inp.value.trim()) return;
    const finalHira = romajiToHiragana(inp.value.trim(), true);
    inp.value = finalHira;
    window.answerPerKanjiQuestion(finalHira);
  };

  window.nextPerKanjiQuestion = function () {
    perKanjiQuizState.currentIndex++;
    perKanjiQuizState.answered = false;
    perKanjiQuizState.selectedAnswer = "";
    renderApp();
  };

  window.resetPerKanjiQuiz = function (char) {
    const k = KANJI_MAP[char];
    if (!k) return;
    perKanjiQuizState = {
      kanjiChar: char,
      questions: buildExercisesForKanji(k),
      currentIndex: 0,
      score: 0,
      answered: false,
      selectedAnswer: "",
      isCorrect: false
    };
    renderApp();
  };

  window.markMasteredAndNext = function (currentChar, nextChar) {
    userState.mastered[currentChar] = true;
    saveState();
    if (nextChar) {
      window.selectKanjiInLesson(nextChar);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.setLessonTab("practice");
    }
  };

  window.selectKanjiInLesson = function (char) {
    currentKanjiChar = char;
    renderApp();
  };

  window.toggleMastered = function (char) {
    userState.mastered[char] = !userState.mastered[char];
    saveState();
    renderApp();
  };

  window.toggleStarred = function (char) {
    userState.starred[char] = !userState.starred[char];
    saveState();
    renderApp();
  };

  window.setVocabFilter = function (filter) {
    currentVocabFilter = filter;
    renderApp();
  };

  window.toggleVocabSecrets = function () {
    hideVocabSecrets = !hideVocabSecrets;
    if (hideVocabSecrets) kanjiOnlyVocab = false;
    renderApp();
  };

  window.toggleKanjiOnlyVocab = function () {
    kanjiOnlyVocab = !kanjiOnlyVocab;
    if (kanjiOnlyVocab) hideVocabSecrets = false;
    renderApp();
  };

  // LESSON FLASHCARD TAB
  function renderLessonFlashcardTab(lesson) {
    const list = lesson.kanjiList;
    const idx = Math.min(flashcardState.index, list.length - 1);
    const k = list[idx];

    return `
      <div class="flashcard-stage">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <span style="font-weight:700;color:var(--text-secondary)">Thẻ ${idx + 1} / ${list.length}</span>
          <span style="font-size:12.5px;color:var(--text-muted)">Bấm vào thẻ để lật mặt sau</span>
        </div>

        <div class="flashcard-box" onclick="window.flipFlashcard()">
          ${
            !flashcardState.flipped
              ? `
              <div class="fc-front-char kanji-calligraphy">${k.char}</div>
              <p style="margin-top:16px;color:var(--text-muted);font-size:13.5px">Nhấn để xem Âm Hán Việt, Bộ thủ & Từ ghép</p>
            `
              : `
              <span class="hv-pill" style="font-size:16px;margin-bottom:8px">${escapeHtml(k.char)} — ${escapeHtml(k.hanViet)}</span>
              <h3 style="font-size:22px;font-weight:800;margin-bottom:8px">${escapeHtml(k.meaning)}</h3>
              <p style="font-size:13.5px;color:var(--text-secondary);margin-bottom:6px"><strong>Bộ thủ:</strong> ${escapeHtml(k.radical)} | <strong>Cấu tạo:</strong> ${escapeHtml(k.components)}</p>
              <p style="font-size:13.5px;color:var(--accent-indigo);margin-bottom:14px">💡 ${escapeHtml(k.mnemonic)}</p>
              <div style="width:100%;text-align:left;background:var(--bg-subtle);padding:12px;border-radius:10px">
                ${getKanjiWords(k)
                  .slice(0, 4)
                  .map(
                    (w) => `
                  <div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px dashed var(--border-color);font-size:13.5px">
                    <span><strong class="jp-font">${escapeHtml(w.word)}</strong> (${escapeHtml(w.reading)})</span>
                    <span>${escapeHtml(w.meaning)} <strong style="color:var(--primary)">[${w.level}]</strong></span>
                  </div>
                `
                  )
                  .join("")}
              </div>
            `
          }
        </div>

        <div style="display:flex;justify-content:center;gap:10px;margin-top:18px;flex-wrap:wrap">
          <button class="btn btn-secondary" onclick="window.moveFlashcard(-1)" ${idx === 0 ? "disabled" : ""}>← Trước</button>
          <button class="btn btn-secondary" style="border-color:var(--warning);color:var(--warning)" onclick="window.markFlashcardStatus('${k.char}', false)">
            ⭐ Chưa nhớ kỹ (Lưu sổ tay)
          </button>
          <button class="btn btn-success" onclick="window.markFlashcardStatus('${k.char}', true)">
            ✅ Đã nhớ chữ này
          </button>
          <button class="btn btn-secondary" onclick="window.moveFlashcard(1)" ${idx === list.length - 1 ? "disabled" : ""}>Tiếp →</button>
        </div>
      </div>
    `;
  }

  window.flipFlashcard = function () {
    flashcardState.flipped = !flashcardState.flipped;
    renderApp();
  };

  window.moveFlashcard = function (delta) {
    const lesson = LESSON_MAP[currentLessonId];
    const next = flashcardState.index + delta;
    if (next >= 0 && next < lesson.kanjiList.length) {
      flashcardState.index = next;
      flashcardState.flipped = false;
      renderApp();
    }
  };

  window.markFlashcardStatus = function (char, mastered) {
    if (mastered) {
      userState.mastered[char] = true;
    } else {
      userState.starred[char] = true;
      userState.mastered[char] = false;
    }
    saveState();
    const lesson = LESSON_MAP[currentLessonId];
    if (flashcardState.index + 1 < lesson.kanjiList.length) {
      flashcardState.index++;
      flashcardState.flipped = false;
    }
    renderApp();
  };

  // LESSON PRACTICE LAUNCHER (3 ĐỀ JLPT CUỐI BÀI + LUYỆN GÕ HIRAGANA)
  function renderLessonPracticeTabLauncher(lesson) {
    return `
      <div class="surface-card" style="max-width:780px;margin:20px auto;padding:28px 24px">
        <div style="text-align:center;margin-bottom:22px">
          <div style="font-size:44px;margin-bottom:8px">📄</div>
          <span class="jlpt-level-stamp">日本語能力試験 N4 • ふくしゅう Bài ${lesson.id}</span>
          <h3 style="font-size:22px;font-weight:800;margin-top:10px">
            Bộ 3 Đề Thi JLPT Cuối Bài ${lesson.id}: ${escapeHtml(lesson.titleVi)} (${escapeHtml(lesson.titleJp)})
          </h3>
          <p style="color:var(--text-secondary);margin:8px auto 0;font-size:14px;max-width:640px">
            Thiết kế chuẩn cấu trúc đề thi JLPT gồm <strong>問題1 (Chuyển từ Kanji sang Hiragana: 5 câu)</strong> và <strong>問題2 (Chuyển từ Hiragana sang Kanji: 5 câu)</strong>.
            <br/>🔒 <strong>Cam kết không lặp lại:</strong> 3 đề kiểm tra <strong>30 từ vựng và 30 mẫu câu hoàn toàn khác nhau</strong> của ${lesson.kanjiList.length} chữ Kanji trong bài (${lesson.kanjiList.map((k) => k.char).join("・")}).
          </p>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:14px;margin-bottom:24px">
          ${[1, 2, 3]
            .map((sNum) => {
              const h = userState.testHistory && userState.testHistory[`lesson-${lesson.id}-set-${sNum}`];
              return `
                <div class="surface-card" style="padding:18px;border:2px solid ${h ? "var(--success)" : "var(--border-color)"};text-align:center;display:flex;flex-direction:column;justify-content:space-between;gap:12px">
                  <div>
                    <div style="font-size:12px;font-weight:800;color:var(--primary);text-transform:uppercase">ふくしゅう Bài ${lesson.id}</div>
                    <h4 style="font-size:18px;font-weight:800;margin:4px 0">📄 Đề Số ${sNum}</h4>
                    <div style="font-size:12.5px;color:var(--text-secondary)">
                      5 câu 問題1 (Đọc Hira)<br/>+ 5 câu 問題2 (Chọn Kanji)
                    </div>
                    ${
                      h
                        ? `<div style="margin-top:8px;padding:4px 10px;background:var(--success-soft);color:var(--success);border-radius:999px;font-size:12px;font-weight:800;display:inline-block">
                            ✅ Điểm cao nhất: ${h.bestScore}/${h.total}
                          </div>`
                        : `<div style="margin-top:8px;font-size:12px;color:var(--text-muted)">Chưa làm đề này</div>`
                    }
                  </div>
                  <button class="btn ${h ? "btn-secondary" : "btn-primary"}" style="width:100%;justify-content:center" onclick="window.startLessonJlptTest('${lesson.id}', ${sNum})">
                    ${h ? `🔄 Làm lại Đề số ${sNum}` : `🚀 Bắt đầu Đề số ${sNum}`}
                  </button>
                </div>
              `;
            })
            .join("")}
        </div>

        <div style="border-top:1px solid var(--border-color);padding-top:18px;text-align:center">
          <div style="font-size:13px;font-weight:700;color:var(--text-secondary);margin-bottom:10px">
            ⌨️ Chế độ luyện phản xạ bổ trợ (Tự gõ Romaji / Hiragana không nhìn gợi ý):
          </div>
          <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap">
            <button class="btn btn-indigo" onclick="window.startLessonQuiz('${lesson.id}', true)">
              ⌨️ Luyện Tự Gõ Hiragana Từ Vựng Bài ${lesson.id} (20 câu)
            </button>
            <button class="btn btn-secondary" onclick="window.startLessonQuiz('${lesson.id}', false)">
              🎯 Trắc Nghiệm Tổng Hợp Nhanh (20 câu)
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // FULL QUIZ RUNNER (USED FOR LESSON ふくしゅう, CHAPTER TESTS, AND CHECKPOINT SUMMARY TESTS)
  window.startLessonQuiz = function (lessonId, allowTyping) {
    const lesson = LESSON_MAP[lessonId];
    if (!lesson) return;
    const questions = buildQuizPool(lesson.kanjiList, 20, allowTyping);
    activeQuiz = {
      id: `lesson-${lessonId}`,
      title: `ふくしゅう Bài ${lesson.id}: ${lesson.titleVi}`,
      questions,
      currentIndex: 0,
      score: 0,
      answered: false,
      selectedAnswer: "",
      isCorrect: false,
      wrongKanjiSet: new Set()
    };
    currentView = "quiz-runner";
    renderApp();
  };

  window.startLessonJlptTest = function (lessonId, setNumber) {
    const lesson = LESSON_MAP[lessonId];
    if (!lesson) return;
    const sNum = setNumber || 1;
    const examData = buildLessonJlptExamSet(lessonId, sNum);
    activeJlptExam = {
      examKey: `lesson-${lessonId}-set-${sNum}`,
      baseType: "lesson",
      lessonId: lessonId,
      chapterId: lesson.chapterId,
      cpId: null,
      chapterIds: [lesson.chapterId],
      setNumber: sNum,
      perMondaiCount: 5,
      title: `Test JLPT Bài ${lesson.id}: ${lesson.titleVi} (${lesson.titleJp})`,
      scopeLabel: `Chỉ gồm từ vựng của ${lesson.kanjiList.length} chữ Kanji trong Bài ${lesson.id} (${lesson.kanjiList.map((k) => k.char).join(", ")}) — Không lặp lại giữa 3 đề`,
      mondai1: examData.mondai1,
      mondai2: examData.mondai2,
      allQuestions: examData.allQuestions,
      instantFeedback: false,
      submitted: false,
      userAnswers: {},
      revealedHints: {}
    };
    currentView = "jlpt-exam";
    closeMobileSidebar();
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.startChapterTest = function (chapterId, setNumber) {
    const ch = CHAPTERS.find((x) => x.id === chapterId);
    if (!ch) return;
    const sNum = setNumber || 1;
    const examData = buildJlptExamSet([chapterId], sNum, 10, "chapter", `ch-${chapterId}`);
    activeJlptExam = {
      examKey: `ch-${chapterId}-set-${sNum}`,
      baseType: "chapter",
      lessonId: null,
      chapterId: chapterId,
      cpId: null,
      chapterIds: [chapterId],
      setNumber: sNum,
      perMondaiCount: 10,
      title: `${ch.titleJp} — ${ch.titleVi}`,
      scopeLabel: `Chỉ gồm từ vựng & Kanji trong Chương ${chapterId} (${ch.titleVi}) — Câu hỏi mới không lặp lại đề từng bài`,
      mondai1: examData.mondai1,
      mondai2: examData.mondai2,
      allQuestions: examData.allQuestions,
      instantFeedback: false,
      submitted: false,
      userAnswers: {} // { qNumber: selectedOption }
    };
    currentView = "jlpt-exam";
    closeMobileSidebar();
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.startCheckpointById = function (cpId, setNumber) {
    const cp = CHECKPOINT_TESTS.find((x) => x.id === cpId);
    if (!cp) return;
    const sNum = setNumber || 1;
    const perMondai = Math.floor((cp.questionCount || 30) / 2);
    const examData = buildJlptExamSet(cp.chapters, sNum, perMondai, "checkpoint", cp.id);
    activeJlptExam = {
      examKey: `${cp.id}-set-${sNum}`,
      baseType: "checkpoint",
      lessonId: null,
      chapterId: null,
      cpId: cp.id,
      chapterIds: cp.chapters,
      setNumber: sNum,
      perMondaiCount: perMondai,
      title: cp.title,
      scopeLabel: `Chỉ gồm từ vựng & Kanji trong Chương ${cp.chapters.join(", ")} đã học — Không lặp lại giữa 3 đề`,
      mondai1: examData.mondai1,
      mondai2: examData.mondai2,
      allQuestions: examData.allQuestions,
      instantFeedback: false,
      submitted: false,
      userAnswers: {},
      revealedHints: {}
    };
    currentView = "jlpt-exam";
    closeMobileSidebar();
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ============================================================================
  // MULTI-EXAM CUSTOM STUDIO (CHỌN TỪNG CHỮ KANJI / TỪNG BÀI & ĐA KỲ THI: JLPT, NAT-TEST, JBT/J.TEST, TOPJ)
  // ============================================================================
  const EXAM_FORMATS = {
    JLPT: {
      id: "JLPT",
      badge: "🇯🇵 Chuẩn JLPT N4",
      stamp: "日本語能力試験 JLPT N4 • 文字・語彙",
      title: "Kỳ thi Năng lực Nhật ngữ JLPT N4",
      desc: "Gồm 問題1 (Đọc Kanji → Hiragana), 問題2 (Chuyển Hiragana → Kanji) & 問題3 (Điền từ vựng Kanji vào chỗ trống theo ngữ cảnh)."
    },
    NAT: {
      id: "NAT",
      badge: "🏅 Chuẩn NAT-TEST 4級",
      stamp: "日本語 NAT-TEST 4級 • 文字・語彙",
      title: "Kỳ thi NAT-TEST 4級 (Bẫy Âm đọc & Chữ gần giống)",
      desc: "Gồm 問題I (Bẫy trường âm/âm ngắt/âm đục), 問題II (Bẫy chữ Kanji có bộ thủ & hình dáng gần giống) & 問題III (Ý nghĩa từ ghép)."
    },
    JBT: {
      id: "JBT",
      badge: "💼 Chuẩn JBT / J.TEST",
      stamp: "実用日本語検定 J.TEST & JBT • 実戦語彙・四択",
      title: "Kỳ thi Thực dụng J.TEST & Giao tiếp JBT (100% Trắc nghiệm)",
      desc: "Gồm 問題A (Đọc Kanji thực tế), 問題B (Chọn Kanji văn cảnh công việc/đời sống) & 問題C (Trắc nghiệm Ý nghĩa & Cách dùng từ vựng thực chiến)."
    },
    TOPJ: {
      id: "TOPJ",
      badge: "🌏 Chuẩn JPT / TOPJ",
      stamp: "実用日本語運用能力試験 TOPJ / JPT • 漢字・語彙",
      title: "Kỳ thi Năng lực Ứng dụng TOPJ & JPT",
      desc: "Gồm 問題1 (Phản xạ đọc nhanh Kanji), 問題2 (Hoàn thành từ ghép trong câu) & 問題3 (Nhận diện Bộ thủ, Chiết tự & Âm Hán Việt)."
    },
    ALL: {
      id: "ALL",
      badge: "🔥 Tổng Hợp Đa Kỳ Thi",
      stamp: "総合実戦試験 (JLPT + NAT-TEST + JBT/J.TEST + TOPJ)",
      title: "Đề Thi Tổng Hợp 4 Kỳ Thi (100% Multiple Choice)",
      desc: "Kết hợp 4 phần trắc nghiệm: 問題1 (Đọc Hiragana), 問題2 (Chọn Kanji bẫy hình tự), 問題3 (Điền từ vào chỗ trống) & 問題4 (Ý nghĩa từ ghép, Âm Hán Việt & Bộ thủ)."
    }
  };

  // Default selection: Bài 1, 2 của Chương 1 + Bài 1, 2 của Chương 2 (như ví dụ của người dùng)
  const customSelectorState = {
    selectedKanjiSet: new Set(
      ["1-1", "1-2", "2-1", "2-2"].flatMap((lid) =>
        LESSON_MAP[lid] ? LESSON_MAP[lid].kanjiList.map((k) => k.char) : []
      )
    ),
    examFormat: "JLPT",
    questionCount: 20
  };

  window.toggleCustomChapter = function (chId) {
    const ch = CHAPTERS.find((x) => x.id === chId);
    if (!ch) return;
    const chChars = ch.lessons.flatMap((l) => l.kanjiList.map((k) => k.char));
    const allPicked = chChars.every((c) => customSelectorState.selectedKanjiSet.has(c));
    chChars.forEach((c) => {
      if (allPicked) customSelectorState.selectedKanjiSet.delete(c);
      else customSelectorState.selectedKanjiSet.add(c);
    });
    renderApp();
  };

  window.toggleCustomLesson = function (lessonId) {
    const lesson = LESSON_MAP[lessonId];
    if (!lesson) return;
    const lChars = lesson.kanjiList.map((k) => k.char);
    const allPicked = lChars.every((c) => customSelectorState.selectedKanjiSet.has(c));
    lChars.forEach((c) => {
      if (allPicked) customSelectorState.selectedKanjiSet.delete(c);
      else customSelectorState.selectedKanjiSet.add(c);
    });
    renderApp();
  };

  window.toggleCustomKanji = function (char) {
    if (customSelectorState.selectedKanjiSet.has(char)) {
      customSelectorState.selectedKanjiSet.delete(char);
    } else {
      customSelectorState.selectedKanjiSet.add(char);
    }
    renderApp();
  };

  window.applyCustomPreset = function (preset) {
    customSelectorState.selectedKanjiSet.clear();
    if (preset === "example-12-12") {
      ["1-1", "1-2", "2-1", "2-2"].forEach((lid) => {
        if (LESSON_MAP[lid]) {
          LESSON_MAP[lid].kanjiList.forEach((k) => customSelectorState.selectedKanjiSet.add(k.char));
        }
      });
    } else if (preset === "all") {
      ALL_KANJI.forEach((k) => customSelectorState.selectedKanjiSet.add(k.char));
    } else if (preset === "mastered") {
      ALL_KANJI.filter((k) => userState.mastered[k.char]).forEach((k) =>
        customSelectorState.selectedKanjiSet.add(k.char)
      );
    } else if (preset === "starred") {
      ALL_KANJI.filter((k) => userState.starred[k.char]).forEach((k) =>
        customSelectorState.selectedKanjiSet.add(k.char)
      );
    } else if (preset === "mistakes") {
      ALL_KANJI.filter((k) => (userState.mistakes[k.char] || 0) > 0).forEach((k) =>
        customSelectorState.selectedKanjiSet.add(k.char)
      );
    }
    renderApp();
  };

  window.setCustomExamFormat = function (fmt) {
    if (EXAM_FORMATS[fmt]) {
      customSelectorState.examFormat = fmt;
      renderApp();
    }
  };

  window.setCustomQuestionCount = function (cnt) {
    customSelectorState.questionCount = Number(cnt) || 20;
    renderApp();
  };

  function buildLookalikeKanjiOptions(correctWord, existingOpts, k, scopedKanjiList, allowedKanjiSet, seed) {
    const cleanAns = correctWord.replace(/〜/g, "").trim();
    const distractors = new Set();

    // Prioritize lookalike Kanji from k.lookalikes first (classic NAT-TEST trap!)
    if (k.lookalikes && k.lookalikes.length > 0 && cleanAns.includes(k.char)) {
      k.lookalikes.forEach((lk) => {
        if (lk.char && lk.char !== k.char) {
          const trapWord = cleanAns.replace(k.char, lk.char);
          if (trapWord !== cleanAns) distractors.add(trapWord);
        }
      });
    }

    const baseOpts = buildScopedKanjiOptions(correctWord, existingOpts, k, scopedKanjiList, allowedKanjiSet, seed);
    baseOpts.forEach((o) => {
      if (o !== cleanAns) distractors.add(o);
    });

    const chosen = seededShuffle(Array.from(distractors), seed).slice(0, 3);
    return seededShuffle([cleanAns, ...chosen], seed + 13);
  }

  function buildCustomMultiExamSet(selectedCharsArray, examFormat, setNumber, totalQuestions) {
    const selectedSet = new Set(selectedCharsArray);
    const targetKanjiList = ALL_KANJI.filter((k) => selectedSet.has(k.char));
    if (targetKanjiList.length === 0) {
      return { sections: [], mondai1: [], mondai2: [], allQuestions: [], totalVocabInScope: 0 };
    }

    // Allowed Kanji scope: all selected Kanji + Kanji in their compound words + Kanji from lessons up to max selected chapter
    const maxChId = Math.max(...targetKanjiList.map((k) => k.chapterId));
    const allowedKanjiSet = new Set(selectedCharsArray);
    CHAPTERS.filter((ch) => ch.id <= maxChId).forEach((ch) =>
      ch.lessons.forEach((l) => l.kanjiList.forEach((k) => allowedKanjiSet.add(k.char)))
    );
    targetKanjiList.forEach((k) => {
      getKanjiWords(k).forEach((w) => {
        for (const ch of w.word) {
          if (/[\u4e00-\u9faf]/.test(ch)) allowedKanjiSet.add(ch);
        }
      });
    });

    const scopeKey = `${examFormat}-${selectedCharsArray.join("")}`;
    const scopeHash = stringHashSeed(scopeKey);
    const formatOffset = { JLPT: 3, NAT: 9, JBT: 15, TOPJ: 21, ALL: 27 }[examFormat] || 3;

    const scopedReadings = targetKanjiList.flatMap((k) =>
      getKanjiWords(k).map((w) => w.reading.replace(/〜/g, "").trim())
    );
    const scopedWords = targetKanjiList.flatMap((k) =>
      getKanjiWords(k).map((w) => ({
        word: w.word.replace(/〜/g, "").trim(),
        reading: w.reading.replace(/〜/g, "").trim(),
        meaning: w.meaning || k.meaning,
        hanViet: w.hanViet || k.hanViet
      }))
    );

    // Build per-Kanji vocabulary buckets
    let perKanjiBuckets = targetKanjiList.map((k, kIdx) => {
      const items = [];
      const seenWords = new Set();

      getKanjiWords(k).forEach((w) => {
        const cleanWord = w.word.replace(/〜/g, "").trim();
        const cleanRead = w.reading.replace(/〜/g, "").trim();
        if (!cleanWord || !cleanRead || !/[\u4e00-\u9faf]/.test(cleanWord)) return;
        if (seenWords.has(cleanWord)) return;
        seenWords.add(cleanWord);
        items.push({
          kanjiObj: k,
          wordObj: w,
          word: cleanWord,
          reading: cleanRead,
          hanViet: w.hanViet || k.hanViet,
          meaning: w.meaning || k.meaning,
          level: w.level || "N4"
        });
      });

      const shift = (scopeHash + kIdx) % Math.max(items.length, 1);
      return items.slice(shift).concat(items.slice(0, shift));
    });

    perKanjiBuckets = seededShuffle(perKanjiBuckets, scopeHash);

    const masterItems = [];
    const globalSeenWords = new Set();
    const maxDepth = Math.max(...perKanjiBuckets.map((b) => b.length), 1);
    for (let d = 0; d < maxDepth; d++) {
      for (let b = 0; b < perKanjiBuckets.length; b++) {
        const item = perKanjiBuckets[b][d];
        if (item && !globalSeenWords.has(item.word)) {
          globalSeenWords.add(item.word);
          masterItems.push(item);
        }
      }
    }

    const actualTotal = Math.min(totalQuestions, Math.max(6, masterItems.length));
    const startOffset = (setNumber - 1) * actualTotal;
    const selectedSlice = [];
    for (let i = 0; i < actualTotal; i++) {
      selectedSlice.push(masterItems[(startOffset + i) % masterItems.length]);
    }

    // Divide selectedSlice into 3 (or 4) parts without any repeated words
    const n1 = Math.max(2, Math.round(actualTotal * 0.35));
    const n2 = Math.max(2, Math.round(actualTotal * 0.35));
    const part1Raw = selectedSlice.slice(0, n1);
    const part2Raw = selectedSlice.slice(n1, n1 + n2);
    const part3Raw = selectedSlice.slice(n1 + n2);

    const seedBase = (scopeHash % 10000) + setNumber * 113;
    const usedTemplatesInPaper = new Set();
    let qCounter = 1;

    // Helper: Part 1 (Reading Kanji -> Hiragana)
    const buildReadingQuestions = (arr, mondaiNum) =>
      arr.map((item, idx) => {
        const wHash = stringHashSeed(item.word);
        const distractors = buildPhoneticReadingDistractors(item.reading, [], scopedReadings);
        const options = seededShuffle([item.reading, ...distractors], seedBase + idx);
        const qSentence = buildNaturalJlptSentence(
          item.word,
          item.reading,
          item.wordObj,
          item.kanjiObj,
          "mondai1",
          wHash + formatOffset,
          usedTemplatesInPaper,
          false
        );
        return {
          qNumber: qCounter++,
          mondai: mondaiNum,
          inputType: "choice",
          kanjiChar: item.kanjiObj.char,
          lessonId: item.kanjiObj.lessonId,
          word: item.word,
          reading: item.reading,
          hanViet: item.hanViet,
          meaning: item.meaning,
          level: item.level,
          question: qSentence,
          answer: item.reading,
          options
        };
      });

    // Helper: Part 2 (Kanji Writing Hiragana -> Kanji)
    const buildKanjiQuestions = (arr, mondaiNum, useLookalikeTrap) =>
      arr.map((item, idx) => {
        const wHash = stringHashSeed(item.word);
        const options = useLookalikeTrap
          ? buildLookalikeKanjiOptions(item.word, [], item.kanjiObj, targetKanjiList, allowedKanjiSet, seedBase + 40 + idx)
          : buildScopedKanjiOptions(item.word, [], item.kanjiObj, targetKanjiList, allowedKanjiSet, seedBase + 40 + idx);
        const qSentence = buildNaturalJlptSentence(
          item.word,
          item.reading,
          item.wordObj,
          item.kanjiObj,
          "mondai2",
          wHash + formatOffset,
          usedTemplatesInPaper,
          false
        );
        return {
          qNumber: qCounter++,
          mondai: mondaiNum,
          inputType: "choice",
          kanjiChar: item.kanjiObj.char,
          lessonId: item.kanjiObj.lessonId,
          word: item.word,
          reading: item.reading,
          hanViet: item.hanViet,
          meaning: item.meaning,
          level: item.level,
          question: qSentence,
          answer: item.word,
          options
        };
      });

    // Helper: Part 3A (Context Cloze / Vocabulary Meaning in Context — JLPT Mondai 3 & NAT-TEST Mondai III)
    const buildContextClozeQuestions = (arr, mondaiNum) =>
      arr.map((item, idx) => {
        const wHash = stringHashSeed(item.word);
        const rawSentence = buildNaturalJlptSentence(
          item.word,
          item.reading,
          item.wordObj,
          item.kanjiObj,
          "mondai1",
          wHash + formatOffset + 2,
          usedTemplatesInPaper,
          false
        );
        // Replace 【word】 with blank 【（　　　）】; keep hint hidden until user clicks "💡 Hiện gợi ý"
        const clozeSentence = rawSentence.replace(`【${item.word}】`, "【（　　　）】");

        const otherWords = seededShuffle(
          scopedWords
            .map((x) => x.word)
            .filter((w) => w && w !== item.word),
          seedBase + 80 + idx
        ).slice(0, 3);
        const options = seededShuffle([item.word, ...otherWords], seedBase + 95 + idx);

        return {
          qNumber: qCounter++,
          mondai: mondaiNum,
          inputType: "choice",
          kanjiChar: item.kanjiObj.char,
          lessonId: item.kanjiObj.lessonId,
          word: item.word,
          reading: item.reading,
          hanViet: item.hanViet,
          meaning: item.meaning,
          level: item.level,
          question: clozeSentence,
          hint: `Nghĩa: ${item.meaning} • Hán Việt: [${item.hanViet}]`,
          answer: item.word,
          options
        };
      });

    // Helper: Part 3B / Part 4 (Multiple Choice — Vocabulary Meaning, Usage & Paraphrase in Context)
    const buildMeaningAndUsageChoiceQuestions = (arr, mondaiNum) =>
      arr.map((item, idx) => {
        const wHash = stringHashSeed(item.word);
        const k = item.kanjiObj;
        const mode = idx % 2; // 0: Sentence underlined word -> pick meaning/Han-Viet; 1: Meaning/Situation -> pick Kanji word

        if (mode === 0) {
          const qSentence = buildNaturalJlptSentence(
            item.word,
            item.reading,
            item.wordObj,
            item.kanjiObj,
            "mondai1",
            wHash + formatOffset + 3,
            usedTemplatesInPaper,
            false
          );
          const correctLabel = `${item.meaning} [${item.hanViet}]`;
          const poolLabels = Array.from(
            new Set(
              scopedWords
                .filter((x) => x.word !== item.word && x.meaning !== item.meaning)
                .map((x) => `${x.meaning} [${x.hanViet}]`)
            )
          );
          const fallbackLabels = ALL_KANJI.filter((x) => x.char !== k.char).map(
            (x) => `${x.meaning} [${x.hanViet}]`
          );
          const otherLabels = seededShuffle(
            poolLabels.length >= 3 ? poolLabels : [...poolLabels, ...fallbackLabels],
            seedBase + 105 + idx
          ).slice(0, 3);
          const options = seededShuffle([correctLabel, ...otherLabels], seedBase + 115 + idx);

          return {
            qNumber: qCounter++,
            mondai: mondaiNum,
            inputType: "choice",
            kanjiChar: k.char,
            lessonId: k.lessonId,
            word: item.word,
            reading: item.reading,
            hanViet: item.hanViet,
            meaning: item.meaning,
            level: item.level,
            question: qSentence,
            hint: `Cách đọc: ${item.reading} • Bộ thủ chữ 「${k.char}」: ${k.radical}`,
            answer: correctLabel,
            options
          };
        } else {
          const options = buildLookalikeKanjiOptions(
            item.word,
            [],
            k,
            targetKanjiList,
            allowedKanjiSet,
            seedBase + 125 + idx
          );
          return {
            qNumber: qCounter++,
            mondai: mondaiNum,
            inputType: "choice",
            kanjiChar: k.char,
            lessonId: k.lessonId,
            word: item.word,
            reading: item.reading,
            hanViet: item.hanViet,
            meaning: item.meaning,
            level: item.level,
            question: `Từ vựng Kanji nào dưới đây mang ý nghĩa là 「【${item.meaning}】」?`,
            hint: `Âm Hán Việt: [${item.hanViet}] • Cách đọc: ${item.reading}`,
            answer: item.word,
            options
          };
        }
      });

    // Helper: Part 3C (TOPJ / JPT Radical, Structure & Han-Viet Recognition — Multiple Choice)
    const buildTopjStructureQuestions = (arr, mondaiNum) =>
      arr.map((item, idx) => {
        const k = item.kanjiObj;
        const askRadical = idx % 2 === 0;
        if (askRadical) {
          const otherRads = seededShuffle(
            Array.from(new Set(ALL_KANJI.filter((x) => x.radical !== k.radical).map((x) => x.radical))),
            seedBase + 140 + idx
          ).slice(0, 3);
          const options = seededShuffle([k.radical, ...otherRads], seedBase + 155 + idx);
          return {
            qNumber: qCounter++,
            mondai: mondaiNum,
            inputType: "choice",
            kanjiChar: k.char,
            lessonId: k.lessonId,
            word: item.word,
            reading: item.reading,
            hanViet: k.hanViet,
            meaning: k.meaning,
            level: item.level,
            question: `Chữ Kanji 「【${k.char}】」 (trong từ vựng 「${item.word}」) có bộ thủ chính (部首) là gì?`,
            hint: `Âm Hán Việt: [${k.hanViet}] (${k.meaning}) • Cấu tạo: ${k.components}`,
            answer: k.radical,
            options
          };
        } else {
          const correctLabel = `${k.hanViet} — ${k.meaning}`;
          const otherLabels = seededShuffle(
            ALL_KANJI.filter((x) => x.char !== k.char).map((x) => `${x.hanViet} — ${x.meaning}`),
            seedBase + 170 + idx
          ).slice(0, 3);
          const options = seededShuffle([correctLabel, ...otherLabels], seedBase + 185 + idx);
          return {
            qNumber: qCounter++,
            mondai: mondaiNum,
            inputType: "choice",
            kanjiChar: k.char,
            lessonId: k.lessonId,
            word: item.word,
            reading: item.reading,
            hanViet: k.hanViet,
            meaning: k.meaning,
            level: item.level,
            question: `Chữ Kanji 「【${k.char}】」 (trong từ vựng 「${item.word}」) có Âm Hán Việt và nghĩa chính là gì?`,
            hint: `Cách đọc từ 「${item.word}」: ${item.reading} • Bộ thủ: ${k.radical} (${k.components})`,
            answer: correctLabel,
            options
          };
        }
      });

    let sections = [];
    if (examFormat === "JLPT") {
      const s1 = buildReadingQuestions(part1Raw, 1);
      const s2 = buildKanjiQuestions(part2Raw, 2, false);
      const s3 = buildContextClozeQuestions(part3Raw, 3);
      sections = [
        {
          id: "m1",
          titleJp: "問題1　<u>　　　</u>のことばは ひらがなで どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
          titleVi: "Phần 1 (漢字読み — Kanji sang Hiragana): Chọn cách đọc Hiragana đúng cho từ gạch chân.",
          shortLabel: "問題1 (Đọc Hira)",
          questions: s1
        },
        {
          id: "m2",
          titleJp: "問題2　<u>　　　</u>のことばは どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
          titleVi: "Phần 2 (表記 — Hiragana sang Kanji): Chọn chữ Kanji đúng cho từ gạch chân.",
          shortLabel: "問題2 (Chọn Kanji)",
          questions: s2
        },
        {
          id: "m3",
          titleJp: "問題3　（　　　）に なにを いれますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
          titleVi: "Phần 3 (文脈規定 — Điền từ vựng Kanji vào chỗ trống): Chọn từ phù hợp với ngữ cảnh (Bấm 「💡 Hiện gợi ý」 nếu muốn xem nghĩa).",
          shortLabel: "問題3 (Điền từ)",
          questions: s3
        }
      ];
    } else if (examFormat === "NAT") {
      const s1 = buildReadingQuestions(part1Raw, 1);
      const s2 = buildKanjiQuestions(part2Raw, 2, true);
      const s3 = buildContextClozeQuestions(part3Raw, 3);
      sections = [
        {
          id: "nat1",
          titleJp: "問題I　【NAT-TEST 発音・表記】 <u>　　　</u>のことばの よみかたとして いちばん いい ものを えらびなさい。",
          titleVi: "Phần I (Bẫy Trường âm • Âm ngắt • Âm đục): Chú ý phân biệt kỹ cách đọc chuẩn của từ Kanji gạch chân.",
          shortLabel: "問題I (Bẫy Âm đọc)",
          questions: s1
        },
        {
          id: "nat2",
          titleJp: "問題II　【NAT-TEST 同形・類字】 <u>　　　</u>のことばの 漢字（かんじ）として いちばん いい ものを えらびなさい。",
          titleVi: "Phần II (Bẫy Chữ Kanji gần giống / Cùng bộ thủ): Phân biệt kỹ nét chữ và bộ thủ để không chọn nhầm chữ na ná.",
          shortLabel: "問題II (Bẫy Hình tự)",
          questions: s2
        },
        {
          id: "nat3",
          titleJp: "問題III　【NAT-TEST 語彙の用法】 つぎの ぶんの （　　　）に いれるのに いちばん いい ことばを えらびなさい。",
          titleVi: "Phần III (Cách dùng từ ghép trong câu): Chọn từ ghép Kanji khớp với ngữ cảnh (Bấm 「💡 Hiện gợi ý」 nếu cần trợ giúp).",
          shortLabel: "問題III (Từ ghép)",
          questions: s3
        }
      ];
    } else if (examFormat === "JBT") {
      const s1 = buildReadingQuestions(part1Raw, 1);
      const s2 = buildKanjiQuestions(part2Raw, 2, true);
      const s3 = buildMeaningAndUsageChoiceQuestions(part3Raw, 3);
      sections = [
        {
          id: "jbt1",
          titleJp: "問題A　【JBT / J.TEST 実用語彙の読み】 つぎの ぶんの <u>　　　</u>の 漢字の よみかたを えらんで ください。",
          titleVi: "Phần A (Đọc Kanji thực tiễn giao tiếp & công việc): Chọn cách đọc Hiragana đúng.",
          shortLabel: "問題A (Đọc thực tế)",
          questions: s1
        },
        {
          id: "jbt2",
          titleJp: "問題B　【JBT / J.TEST 漢字選択】 つぎの ぶんの <u>　　　</u>を 漢字で かく とき、ただしい ものを えらんで ください。",
          titleVi: "Phần B (Chọn Kanji thực chiến): Chọn cách viết Kanji chính xác trong câu.",
          shortLabel: "問題B (Chọn Kanji)",
          questions: s2
        },
        {
          id: "jbt3",
          titleJp: "問題C　【JBT / J.TEST 語彙の意味・用法】 <u>　　　</u>の ことばの 意味（いみ）や ただしい 漢字語彙を １・２・３・４から えらんで ください。",
          titleVi: "Phần C (Trắc nghiệm Ý nghĩa & Cách dùng từ vựng thực tế — 4 lựa chọn, có nút 「💡 Hiện gợi ý」):",
          shortLabel: "問題C (Nghĩa & Cách dùng)",
          questions: s3
        }
      ];
    } else if (examFormat === "TOPJ") {
      const s1 = buildReadingQuestions(part1Raw, 1);
      const s2 = buildKanjiQuestions(part2Raw, 2, false);
      const s3 = buildTopjStructureQuestions(part3Raw, 3);
      sections = [
        {
          id: "topj1",
          titleJp: "問題1　【TOPJ / JPT 漢字の読み】 <u>　　　</u>の ことばの よみかたを １・２・３・４から えらんで ください。",
          titleVi: "Phần 1 (Phản xạ đọc nhanh Kanji sang Hiragana):",
          shortLabel: "問題1 (Đọc nhanh)",
          questions: s1
        },
        {
          id: "topj2",
          titleJp: "問題2　【TOPJ / JPT 熟語表記】 <u>　　　</u>の ことばの 漢字を １・２・３・４から えらんで ください。",
          titleVi: "Phần 2 (Hoàn thành từ ghép Kanji trong câu):",
          shortLabel: "問題2 (Từ ghép)",
          questions: s2
        },
        {
          id: "topj3",
          titleJp: "問題3　【TOPJ 漢字の構成・部首・漢越】 つぎの 漢字の 部首（ぶしゅ）と 意味（いみ）を えらんで ください。",
          titleVi: "Phần 3 (Trắc nghiệm Bộ thủ • Cấu tạo chiết tự & Âm Hán Việt):",
          shortLabel: "問題3 (Bộ thủ & Hán Việt)",
          questions: s3
        }
      ];
    } else {
      // ALL-IN-ONE (100% Multiple Choice across all 4 sections)
      const half3 = Math.max(1, Math.floor(part3Raw.length / 2));
      const p3a = part3Raw.slice(0, half3);
      const p3b = part3Raw.slice(half3);
      const s1 = buildReadingQuestions(part1Raw, 1);
      const s2 = buildKanjiQuestions(part2Raw, 2, true);
      const s3 = buildContextClozeQuestions(p3a, 3);
      const s4 = buildMeaningAndUsageChoiceQuestions(p3b, 4);
      sections = [
        {
          id: "all1",
          titleJp: "問題1　【JLPT / NAT 漢字読み】 <u>　　　</u>のことばは ひらがなで どう かきますか。",
          titleVi: "Phần 1 (Chuyển từ Kanji sang Hiragana — 4 đáp án):",
          shortLabel: "問題1 (Đọc Hira)",
          questions: s1
        },
        {
          id: "all2",
          titleJp: "問題2　【JLPT / NAT 漢字表記】 <u>　　　</u>のことばは どう かきますか。",
          titleVi: "Phần 2 (Chuyển từ Hiragana sang Kanji & Bẫy hình tự — 4 đáp án):",
          shortLabel: "問題2 (Chọn Kanji)",
          questions: s2
        },
        {
          id: "all3",
          titleJp: "問題3　【文脈規定】 （　　　）に いれるのに いちばん いい ことばを えらんで ください。",
          titleVi: "Phần 3 (Điền từ vựng Kanji vào chỗ trống — Gợi ý đã được ẩn, bấm 「💡 Hiện gợi ý」 khi cần xem):",
          shortLabel: "問題3 (Điền từ)",
          questions: s3
        },
        {
          id: "all4",
          titleJp: "問題4　【類義・語彙の意味・用法】 <u>　　　</u>の ことばの 意味（いみ）や ただしい 漢字語彙を １・２・３・４から えらんで ください。",
          titleVi: "Phần 4 (Trắc nghiệm Ý nghĩa Từ ghép, Âm Hán Việt & Cách dùng trong câu — 4 đáp án Multiple Choice):",
          shortLabel: "問題4 (Nghĩa & Từ ghép)",
          questions: s4
        }
      ].filter((sec) => sec.questions.length > 0);
    }

    const allQuestions = sections.flatMap((s) => s.questions);
    return {
      sections,
      mondai1: sections[0] ? sections[0].questions : [],
      mondai2: sections[1] ? sections[1].questions : [],
      allQuestions,
      totalVocabInScope: masterItems.length
    };
  }

  window.startSelectedKanjiExam = function (setNumber) {
    const selectedChars = Array.from(customSelectorState.selectedKanjiSet);
    if (selectedChars.length === 0) {
      alert("Bạn hãy chọn ít nhất 1 chữ Kanji hoặc 1 Bài học để tạo đề luyện tập nhé!");
      return;
    }
    const fmt = customSelectorState.examFormat || "JLPT";
    const fmtMeta = EXAM_FORMATS[fmt] || EXAM_FORMATS.JLPT;
    const totalQ = customSelectorState.questionCount || 20;
    const sNum = setNumber || 1;

    const examData = buildCustomMultiExamSet(selectedChars, fmt, sNum, totalQ);

    // Summarize selected lessons for label
    const pickedLessons = [];
    CHAPTERS.forEach((ch) => {
      ch.lessons.forEach((l) => {
        const countInL = l.kanjiList.filter((k) => customSelectorState.selectedKanjiSet.has(k.char)).length;
        if (countInL === l.kanjiList.length) {
          pickedLessons.push(`Bài ${l.id}`);
        } else if (countInL > 0) {
          pickedLessons.push(`Bài ${l.id} (${countInL}/${l.kanjiList.length} chữ)`);
        }
      });
    });

    const hashShort = stringHashSeed(selectedChars.join("")) % 100000;
    activeJlptExam = {
      examKey: `custom-${fmt}-${hashShort}-set-${sNum}`,
      baseType: "custom-kanji",
      examFormat: fmt,
      examStamp: fmtMeta.stamp,
      selectedChars,
      totalCustomCount: totalQ,
      lessonId: null,
      chapterId: null,
      cpId: null,
      chapterIds: [],
      setNumber: sNum,
      perMondaiCount: Math.floor(totalQ / 2),
      title: `${fmtMeta.badge}: Đề Luyện Tập Theo Phạm Vi Đã Chọn (${selectedChars.length} chữ Kanji)`,
      scopeLabel: `Phạm vi: ${pickedLessons.slice(0, 6).join(", ")}${pickedLessons.length > 6 ? ` (+${pickedLessons.length - 6} bài khác)` : ""} • Tổng ${selectedChars.length} chữ Kanji (${examData.totalVocabInScope} từ vựng) — Không lặp lại giữa 3 đề`,
      sections: examData.sections,
      mondai1: examData.mondai1,
      mondai2: examData.mondai2,
      allQuestions: examData.allQuestions,
      instantFeedback: false,
      submitted: false,
      userAnswers: {},
      revealedHints: {}
    };
    currentView = "jlpt-exam";
    closeMobileSidebar();
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.startSelectedKanjiQuickQuiz = function (allowTyping) {
    const selectedChars = Array.from(customSelectorState.selectedKanjiSet);
    if (selectedChars.length === 0) {
      alert("Bạn hãy chọn ít nhất 1 chữ Kanji hoặc 1 Bài học nhé!");
      return;
    }
    const kanjiObjs = ALL_KANJI.filter((k) => customSelectorState.selectedKanjiSet.has(k.char));
    const count = customSelectorState.questionCount || 20;
    const questions = buildQuizPool(kanjiObjs, count, allowTyping);
    activeQuiz = {
      id: `custom-quick-${stringHashSeed(selectedChars.join("")) % 10000}`,
      title: `Luyện Phản Xạ (${selectedChars.length} chữ Kanji đã chọn)`,
      questions,
      currentIndex: 0,
      score: 0,
      answered: false,
      selectedAnswer: "",
      isCorrect: false,
      wrongKanjiSet: new Set()
    };
    currentView = "quiz-runner";
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.startCustomCheckpointQuiz = function (setNumber) {
    window.startSelectedKanjiExam(setNumber || 1);
  };

  window.switchJlptExamSet = function (setNumber) {
    if (!activeJlptExam) return;
    if (activeJlptExam.baseType === "lesson") {
      window.startLessonJlptTest(activeJlptExam.lessonId, setNumber);
    } else if (activeJlptExam.baseType === "chapter") {
      window.startChapterTest(activeJlptExam.chapterId, setNumber);
    } else if (activeJlptExam.baseType === "checkpoint") {
      window.startCheckpointById(activeJlptExam.cpId, setNumber);
    } else if (activeJlptExam.baseType === "custom-kanji") {
      window.startSelectedKanjiExam(setNumber);
    } else {
      const examData = buildJlptExamSet(
        activeJlptExam.chapterIds,
        setNumber,
        activeJlptExam.perMondaiCount,
        "checkpoint",
        `custom-${activeJlptExam.chapterIds.join("-")}`
      );
      activeJlptExam.setNumber = setNumber;
      activeJlptExam.examKey = `custom-${activeJlptExam.chapterIds.join("-")}-set-${setNumber}`;
      activeJlptExam.mondai1 = examData.mondai1;
      activeJlptExam.mondai2 = examData.mondai2;
      activeJlptExam.allQuestions = examData.allQuestions;
      activeJlptExam.submitted = false;
      activeJlptExam.userAnswers = {};
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  window.toggleJlptExamMode = function () {
    if (!activeJlptExam) return;
    activeJlptExam.instantFeedback = !activeJlptExam.instantFeedback;
    renderApp();
  };

  window.selectJlptChoice = function (qNumber, choiceValue) {
    if (!activeJlptExam || activeJlptExam.submitted) return;
    activeJlptExam.userAnswers[qNumber] = choiceValue;
    if (activeJlptExam.instantFeedback) {
      const q = activeJlptExam.allQuestions.find((x) => x.qNumber === qNumber);
      if (q && choiceValue !== q.answer) {
        userState.mistakes[q.kanjiChar] = (userState.mistakes[q.kanjiChar] || 0) + 1;
        saveState();
      }
    }
    renderApp();
  };

  window.handleJlptTypingInput = function (qNumber, inputEl) {
    if (!activeJlptExam || activeJlptExam.submitted) return;
    const raw = inputEl.value;
    if (/[a-zA-Z]/.test(raw)) {
      const converted = romajiToHiragana(raw, false);
      if (converted !== raw) {
        inputEl.value = converted;
      }
    }
    activeJlptExam.userAnswers[qNumber] = romajiToHiragana(inputEl.value.trim(), true);
  };

  window.checkSingleJlptTyping = function (qNumber) {
    if (!activeJlptExam) return;
    const inp = document.getElementById(`jlpt-typing-${qNumber}`);
    if (inp) {
      const finalHira = romajiToHiragana(inp.value.trim(), true);
      inp.value = finalHira;
      activeJlptExam.userAnswers[qNumber] = finalHira;
    }
    renderApp();
  };

  window.submitJlptExamPaper = function () {
    if (!activeJlptExam || activeJlptExam.submitted) return;
    // Finalize any trailing 'n' in typing inputs
    activeJlptExam.allQuestions.forEach((q) => {
      if (q.inputType === "typing" && activeJlptExam.userAnswers[q.qNumber]) {
        activeJlptExam.userAnswers[q.qNumber] = romajiToHiragana(
          String(activeJlptExam.userAnswers[q.qNumber]).trim(),
          true
        );
      }
    });
    activeJlptExam.submitted = true;

    let correctCount = 0;
    activeJlptExam.allQuestions.forEach((q) => {
      const picked = activeJlptExam.userAnswers[q.qNumber];
      if (picked === q.answer) {
        correctCount++;
      } else {
        userState.mistakes[q.kanjiChar] = (userState.mistakes[q.kanjiChar] || 0) + 1;
      }
    });

    userState.testHistory = userState.testHistory || {};
    const prev = userState.testHistory[activeJlptExam.examKey];
    const best = prev ? Math.max(prev.bestScore, correctCount) : correctCount;
    userState.testHistory[activeJlptExam.examKey] = {
      bestScore: best,
      total: activeJlptExam.allQuestions.length,
      date: new Date().toLocaleDateString("vi-VN")
    };
    saveState();
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.retryCurrentJlptExam = function () {
    if (!activeJlptExam) return;
    activeJlptExam.submitted = false;
    activeJlptExam.userAnswers = {};
    activeJlptExam.revealedHints = {};
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.toggleJlptQuestionHint = function (qNumber) {
    if (!activeJlptExam) return;
    activeJlptExam.revealedHints = activeJlptExam.revealedHints || {};
    activeJlptExam.revealedHints[qNumber] = !activeJlptExam.revealedHints[qNumber];
    renderApp();
  };

  function formatJlptSentence(sentence) {
    return escapeHtml(sentence).replace(
      /【([^】]+)】/g,
      '<span class="jlpt-underline">$1</span>'
    );
  }

  function renderJlptQuestionBlock(q, exam) {
    const picked = exam.userAnswers[q.qNumber];
    const showResult = exam.submitted || (exam.instantFeedback && picked !== undefined && picked !== "");
    const isCorrect = picked === q.answer;
    const kObj = KANJI_MAP[q.kanjiChar];
    const isHintShown = !!(exam.revealedHints && exam.revealedHints[q.qNumber]);

    return `
      <div class="jlpt-question-item" id="jlpt-q-${q.qNumber}">
        <div class="jlpt-q-line">
          <span class="jlpt-q-num">${q.qNumber}</span>
          <div class="jlpt-q-sentence">
            ${formatJlptSentence(q.question)}
            ${
              q.hint
                ? `
                  <button
                    type="button"
                    class="jlpt-hint-btn ${isHintShown ? "active" : ""}"
                    onclick="window.toggleJlptQuestionHint(${q.qNumber})"
                  >
                    ${isHintShown ? "🙈 Ẩn gợi ý" : "💡 Hiện gợi ý"}
                  </button>
                  ${
                    isHintShown
                      ? `<span class="jlpt-hint-badge">💡 ${escapeHtml(q.hint)}</span>`
                      : ""
                  }
                `
                : ""
            }
          </div>
        </div>
        ${
          q.inputType === "typing"
            ? `
            <div style="padding-left:44px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
              <input
                type="text"
                id="jlpt-typing-${q.qNumber}"
                class="typing-input"
                style="max-width:340px"
                placeholder="Gõ Romaji (VD: kazoku) hoặc Hiragana..."
                value="${escapeHtml(picked || "")}"
                ${exam.submitted ? "disabled" : ""}
                oninput="window.handleJlptTypingInput(${q.qNumber}, this)"
                onkeydown="if(event.key==='Enter') window.checkSingleJlptTyping(${q.qNumber})"
              />
              ${
                exam.instantFeedback && !exam.submitted
                  ? `<button class="btn btn-indigo" onclick="window.checkSingleJlptTyping(${q.qNumber})">Kiểm tra</button>`
                  : `<span style="font-size:12px;color:var(--text-muted)">💡 Gõ Romaji sẽ tự chuyển sang Hiragana</span>`
              }
            </div>
          `
            : `
            <div class="jlpt-choices-grid">
              ${q.options
                .map((opt, idx) => {
                  let cls = "jlpt-choice-btn";
                  if (!showResult && picked === opt) {
                    cls += " selected";
                  } else if (showResult) {
                    if (opt === q.answer) cls += " correct";
                    else if (picked === opt) cls += " wrong";
                  }
                  return `
                    <button
                      class="${cls}"
                      ${exam.submitted ? "disabled" : ""}
                      onclick="window.selectJlptChoice(${q.qNumber}, '${escapeHtml(opt)}')"
                    >
                      <span class="jlpt-choice-num">${idx + 1}</span>
                      <span>${escapeHtml(opt)}</span>
                    </button>
                  `;
                })
                .join("")}
            </div>
          `
        }
        ${
          showResult
            ? `
            <div class="jlpt-explain-bar ${isCorrect ? "ok" : "err"}">
              <div>
                ${
                  isCorrect
                    ? `✅ <strong>Chính xác!</strong>`
                    : picked
                    ? `❌ <strong>Sai</strong> (Bạn trả lời: ${escapeHtml(picked)})`
                    : `⚪ <strong>Chưa trả lời</strong>`
                }
                — Đáp án đúng: <strong class="jp-font">${escapeHtml(q.answer)}</strong>
                • Từ vựng: <strong class="jp-font">${escapeHtml(q.word)}（${escapeHtml(q.reading)}）</strong>
                [${escapeHtml(q.hanViet)}] = <strong>${escapeHtml(q.meaning)}</strong>
              </div>
              ${
                kObj
                  ? `<button class="filter-chip" onclick="window.openLesson('${kObj.lessonId}', '${kObj.char}')">
                      Xem chữ 「${kObj.char}」 (Bài ${kObj.lessonId}) →
                    </button>`
                  : ""
              }
            </div>
          `
            : ""
        }
      </div>
    `;
  }

  function renderJlptExamView() {
    if (!activeJlptExam) return renderCheckpointsView();
    const ex = activeJlptExam;
    const totalQ = ex.allQuestions.length;
    const answeredCount = Object.keys(ex.userAnswers).filter((k) => ex.userAnswers[k] !== "").length;

    const activeSections =
      ex.sections && ex.sections.length > 0
        ? ex.sections
        : [
            {
              id: "m1",
              titleJp:
                "問題1　<u>　　　</u>のことばは ひらがなで どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
              titleVi:
                "Phần 1 (Chuyển từ Kanji sang Hiragana): Từ gạch chân được đọc bằng Hiragana như thế nào? Chọn 1 đáp án đúng nhất từ 1・2・3・4.",
              shortLabel: "問題1 (Kanji → Hiragana)",
              questions: ex.mondai1 || []
            },
            {
              id: "m2",
              titleJp:
                "問題2　<u>　　　</u>のことばは どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
              titleVi:
                "Phần 2 (Chuyển từ Hiragana sang Kanji): Từ gạch chân được viết bằng Kanji như thế nào? Chọn 1 đáp án đúng nhất từ 1・2・3・4.",
              shortLabel: "問題2 (Hiragana → Kanji)",
              questions: ex.mondai2 || []
            }
          ];

    let totalCorrect = 0;
    const wrongKanjiChars = new Set();
    const sectionScores = activeSections.map((sec) => {
      let c = 0;
      if (ex.submitted) {
        sec.questions.forEach((q) => {
          if (ex.userAnswers[q.qNumber] === q.answer) {
            c++;
            totalCorrect++;
          } else {
            wrongKanjiChars.add(q.kanjiChar);
          }
        });
      }
      return { label: sec.shortLabel || "問題", correct: c, total: sec.questions.length };
    });

    const score100 = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0;
    const stampText = ex.examStamp || "日本語能力試験 N4 • 文字・語彙";

    return `
      <div class="jlpt-exam-container">
        <!-- EXAM HEADER & SET SWITCHER -->
        <div class="jlpt-exam-header">
          <div class="jlpt-exam-toprow">
            <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
              <span class="jlpt-level-stamp">${escapeHtml(stampText)}</span>
              <div>
                <h2 style="font-size:20px;font-weight:800">${escapeHtml(ex.title)} — Đề số ${ex.setNumber}</h2>
                <div style="font-size:12.5px;color:var(--success);font-weight:700;margin-top:2px">
                  🔒 ${escapeHtml(ex.scopeLabel)}
                </div>
              </div>
            </div>
            <div class="exam-set-buttons">
              ${[1, 2, 3]
                .map((sNum) => {
                  const keyPrefix =
                    ex.baseType === "lesson"
                      ? `lesson-${ex.lessonId}`
                      : ex.baseType === "chapter"
                      ? `ch-${ex.chapterId}`
                      : ex.baseType === "checkpoint"
                      ? ex.cpId
                      : ex.baseType === "custom-kanji"
                      ? ex.examKey.replace(/-set-\d+$/, "")
                      : `custom-${ex.chapterIds.join("-")}`;
                  const h = userState.testHistory && userState.testHistory[`${keyPrefix}-set-${sNum}`];
                  return `
                    <button
                      class="exam-set-btn ${ex.setNumber === sNum ? "active-set" : h ? "completed" : ""}"
                      onclick="window.switchJlptExamSet(${sNum})"
                    >
                      <span>📄 Đề số ${sNum}</span>
                      ${h ? `<span>(${h.bestScore}/${h.total})</span>` : ""}
                    </button>
                  `;
                })
                .join("")}
            </div>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-top:14px">
            <div style="font-size:13px;color:var(--text-secondary)">
              Cấu trúc đề: ${activeSections.map((s) => `<strong>${escapeHtml(s.shortLabel)} (${s.questions.length} câu)</strong>`).join(" + ")}
            </div>
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              ${
                ex.baseType === "custom-kanji"
                  ? `<button class="filter-chip" onclick="window.switchView('custom-practice')">⚙️ Đổi Bài / Kanji / Kỳ thi khác</button>`
                  : ""
              }
              <button class="filter-chip ${!ex.instantFeedback ? "active" : ""}" onclick="if(ex.instantFeedback) window.toggleJlptExamMode()">
                📋 Làm cả đề rồi nộp (Thi thật)
              </button>
              <button class="filter-chip ${ex.instantFeedback ? "active" : ""}" onclick="if(!ex.instantFeedback) window.toggleJlptExamMode()">
                ⚡ Chấm ngay từng câu
              </button>
            </div>
          </div>
        </div>

        <!-- SCORE SUMMARY IF SUBMITTED -->
        ${
          ex.submitted
            ? `
          <div class="surface-card" style="border:2px solid var(--primary);text-align:center;padding:24px">
            <div style="font-size:42px;margin-bottom:6px">${score100 >= 80 ? "🏆" : score100 >= 60 ? "🎉" : "💪"}</div>
            <h3 style="font-size:22px;font-weight:800">Kết Quả Đề Số ${ex.setNumber}: ${totalCorrect} / ${totalQ} câu (${score100}/100 điểm)</h3>
            <div style="display:flex;justify-content:center;gap:12px;margin:12px 0;flex-wrap:wrap;font-size:13.5px;font-weight:700">
              ${sectionScores
                .map(
                  (sc) => `
                <span style="padding:6px 14px;background:var(--bg-subtle);border-radius:8px">
                  ${escapeHtml(sc.label)}: <strong style="color:var(--primary)">${sc.correct} / ${sc.total}</strong>
                </span>
              `
                )
                .join("")}
            </div>
            ${
              wrongKanjiChars.size > 0
                ? `<p style="font-size:13px;color:var(--danger);font-weight:600;margin-bottom:14px">
                    ⚠️ Đã lưu ${wrongKanjiChars.size} chữ Kanji bạn làm sai/bỏ trống vào <strong>Sổ tay ôn tập</strong>. Xem chi tiết đáp án bên dưới!
                  </p>`
                : `<p style="font-size:14px;color:var(--success);font-weight:700;margin-bottom:14px">🌟 Tuyệt vời! Bạn đã trả lời đúng tuyệt đối toàn bộ các phần trong đề!</p>`
            }
            <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap">
              <button class="btn btn-secondary" onclick="window.retryCurrentJlptExam()">🔄 Làm lại Đề số ${ex.setNumber}</button>
              ${
                ex.setNumber < 3
                  ? `<button class="btn btn-primary" onclick="window.switchJlptExamSet(${ex.setNumber + 1})">
                      Làm tiếp Đề số ${ex.setNumber + 1} (Không trùng câu) →
                    </button>`
                  : ex.baseType === "lesson"
                  ? (() => {
                      const curLesson = LESSON_MAP[ex.lessonId];
                      const nextLessonId =
                        curLesson && curLesson.number < 3 ? `${curLesson.chapterId}-${curLesson.number + 1}` : null;
                      return nextLessonId && LESSON_MAP[nextLessonId]
                        ? `<button class="btn btn-primary" onclick="window.openLesson('${nextLessonId}')">
                            ▶ Học tiếp Bài ${nextLessonId} (${escapeHtml(LESSON_MAP[nextLessonId].titleVi)}) →
                          </button>`
                        : `<button class="btn btn-primary" onclick="window.startChapterTest(${ex.chapterId}, 1)">
                            🔥 Làm tiếp Test JLPT Chương ${ex.chapterId} (Đề 1) →
                          </button>`;
                    })()
                  : ex.baseType === "custom-kanji"
                  ? `<button class="btn btn-primary" onclick="window.switchView('custom-practice')">
                      🎛️ Chọn tiếp Bài / Chữ Kanji khác
                    </button>`
                  : `<button class="btn btn-primary" onclick="window.switchView('checkpoints')">
                      🏆 Về Danh sách Bộ đề JLPT
                    </button>`
              }
              ${
                ex.baseType === "lesson"
                  ? `<button class="btn btn-secondary" onclick="window.openLesson('${ex.lessonId}')">
                      📖 Quay lại Bài ${ex.lessonId}
                    </button>`
                  : ""
              }
            </div>
          </div>
        `
            : ""
        }

        <!-- RENDER ALL EXAM SECTIONS -->
        ${activeSections
          .map(
            (sec) => `
          <div class="jlpt-mondai-box">
            <div class="jlpt-mondai-banner">
              <div class="jm-jp">${sec.titleJp}</div>
              <div class="jm-vi">${escapeHtml(sec.titleVi)}</div>
            </div>
            ${sec.questions.map((q) => renderJlptQuestionBlock(q, ex)).join("")}
          </div>
        `
          )
          .join("")}

        <!-- STICKY SUBMIT BAR -->
        ${
          !ex.submitted
            ? `
          <div class="jlpt-sticky-submit">
            <div>
              <strong style="font-size:15px">Tiến độ làm bài: <span style="color:var(--primary)">${answeredCount} / ${totalQ}</span> câu đã làm</strong>
              <div style="font-size:12px;color:var(--text-muted)">${activeSections.map((s) => `${escapeHtml(s.shortLabel)}: ${s.questions.length} câu`).join(" • ")}</div>
            </div>
            <div style="display:flex;gap:10px">
              <button class="btn btn-secondary" onclick="window.retryCurrentJlptExam()">Xóa chọn lại</button>
              <button class="btn btn-primary" onclick="window.submitJlptExamPaper()">
                ✅ Nộp bài & Chấm điểm (${answeredCount}/${totalQ})
              </button>
            </div>
          </div>
        `
            : ""
        }
      </div>
    `;
  }

  function renderQuizRunnerView() {
    if (!activeQuiz) return renderDashboardView();
    const qs = activeQuiz.questions;
    const idx = activeQuiz.currentIndex;

    if (idx >= qs.length) {
      const pct = Math.round((activeQuiz.score / qs.length) * 100);
      const wrongChars = Array.from(activeQuiz.wrongKanjiSet);
      return `
        <div class="surface-card" style="max-width:720px;margin:20px auto;padding:32px 26px;text-align:center">
          <div style="font-size:48px;margin-bottom:8px">${pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "💪"}</div>
          <h2 style="font-size:24px;font-weight:800">${escapeHtml(activeQuiz.title)}</h2>
          <p style="font-size:18px;font-weight:700;color:var(--primary);margin:10px 0">
            Kết quả: ${activeQuiz.score} / ${qs.length} câu đúng (${pct} điểm)
          </p>

          ${
            wrongChars.length > 0
              ? `
              <div style="text-align:left;background:var(--danger-soft);border:1px solid var(--danger);padding:16px;border-radius:12px;margin:18px 0">
                <h4 style="color:var(--danger);margin-bottom:8px">⚠️ Các chữ Kanji bạn làm sai trong bài này (Đã tự động lưu vào Sổ tay):</h4>
                <div style="display:flex;flex-wrap:wrap;gap:8px">
                  ${wrongChars
                    .map((c) => {
                      const k = KANJI_MAP[c];
                      return `<button class="btn btn-secondary" onclick="window.openLesson('${k.lessonId}', '${k.char}')">
                        <strong class="jp-font" style="font-size:18px">${k.char}</strong> (${escapeHtml(k.hanViet)} - ${escapeHtml(k.meaning)})
                      </button>`;
                    })
                    .join("")}
                </div>
              </div>
            `
              : `<p style="color:var(--success);font-weight:700;margin:14px 0">🎉 Xuất sắc! Bạn không sai câu nào cả!</p>`
          }

          <div style="display:flex;justify-content:center;gap:12px;margin-top:20px;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="window.switchView('dashboard')">🗺️ Về Lộ Trình Học</button>
            <button class="btn btn-secondary" onclick="window.switchView('checkpoints')">🏆 Danh sách Bài Test Tổng</button>
            <button class="btn btn-secondary" onclick="window.switchView('notebook')">📒 Mở Sổ Tay Ôn Tập</button>
          </div>
        </div>
      `;
    }

    const q = qs[idx];
    return `
      <div class="surface-card" style="max-width:760px;margin:10px auto">
        <div class="section-heading">
          <span>🎯 ${escapeHtml(activeQuiz.title)}</span>
          <span style="color:var(--primary)">Câu ${idx + 1} / ${qs.length} • Đúng: ${activeQuiz.score}</span>
        </div>

        <div class="progress-bar-track" style="margin-bottom:18px">
          <div class="progress-bar-fill" style="width:${Math.round((idx / qs.length) * 100)}%"></div>
        </div>

        <div class="quiz-question-box">
          <span class="quiz-type-badge">${escapeHtml(q.badge)}</span>
          <div class="quiz-prompt-text">${formatBracketQuestion(q.question)}</div>

          ${
            q.type === "typing"
              ? `
              <div class="typing-answer-wrap">
                <input
                  type="text"
                  id="runnerTypingInput"
                  class="typing-input"
                  placeholder="Gõ romaji hoặc hiragana..."
                  value="${escapeHtml(activeQuiz.selectedAnswer)}"
                  ${activeQuiz.answered ? "disabled" : ""}
                  oninput="window.handleRomajiLiveInput(this)"
                  onkeydown="if(event.key==='Enter') window.submitRunnerTyping()"
                />
                ${
                  !activeQuiz.answered
                    ? `<button class="btn btn-indigo" onclick="window.submitRunnerTyping()">Trả lời</button>`
                    : ""
                }
              </div>
            `
              : `
              <div class="quiz-options-grid">
                ${q.options
                  .map((opt) => {
                    let cls = "quiz-option-btn";
                    if (activeQuiz.answered) {
                      if (opt === q.answer) cls += " correct";
                      else if (opt === activeQuiz.selectedAnswer) cls += " wrong";
                    }
                    return `
                      <button
                        class="${cls}"
                        ${activeQuiz.answered ? "disabled" : ""}
                        onclick="window.answerRunnerQuestion('${escapeHtml(opt)}')"
                      >
                        ${escapeHtml(opt)}
                      </button>
                    `;
                  })
                  .join("")}
              </div>
            `
          }

          ${
            activeQuiz.answered
              ? `
              <div class="quiz-feedback ${activeQuiz.isCorrect ? "ok" : "err"}">
                ${
                  activeQuiz.isCorrect
                    ? `✅ Chính xác! Đáp án: <strong>${escapeHtml(q.answer)}</strong>`
                    : `❌ Chưa đúng! Đáp án đúng là: <strong>${escapeHtml(q.answer)}</strong>`
                }
                ${q.hint ? `<div style="margin-top:4px;font-weight:500">💡 ${escapeHtml(q.hint)}</div>` : ""}
              </div>
              <div style="margin-top:14px;display:flex;justify-content:flex-end">
                <button class="btn btn-primary" onclick="window.nextRunnerQuestion()">
                  ${idx + 1 < qs.length ? "Câu tiếp theo →" : "Xem điểm tổng kết →"}
                </button>
              </div>
            `
              : ""
          }
        </div>
      </div>
    `;
  }

  window.answerRunnerQuestion = function (selected) {
    if (!activeQuiz || activeQuiz.answered) return;
    const q = activeQuiz.questions[activeQuiz.currentIndex];
    const cleanSelected = romajiToHiragana(selected.trim(), true);
    const isCorrect = cleanSelected === q.answer || selected.trim() === q.answer;

    activeQuiz.answered = true;
    activeQuiz.selectedAnswer = selected;
    activeQuiz.isCorrect = isCorrect;

    if (isCorrect) {
      activeQuiz.score++;
    } else {
      activeQuiz.wrongKanjiSet.add(q.kanjiChar);
      userState.mistakes[q.kanjiChar] = (userState.mistakes[q.kanjiChar] || 0) + 1;
      saveState();
    }
    renderApp();
  };

  window.submitRunnerTyping = function () {
    const inp = document.getElementById("runnerTypingInput");
    if (!inp || !inp.value.trim()) return;
    const finalHira = romajiToHiragana(inp.value.trim(), true);
    inp.value = finalHira;
    window.answerRunnerQuestion(finalHira);
  };

  window.nextRunnerQuestion = function () {
    if (!activeQuiz) return;
    activeQuiz.currentIndex++;
    activeQuiz.answered = false;
    activeQuiz.selectedAnswer = "";

    if (activeQuiz.currentIndex >= activeQuiz.questions.length) {
      userState.testHistory = userState.testHistory || {};
      const prev = userState.testHistory[activeQuiz.id];
      const best = prev ? Math.max(prev.bestScore, activeQuiz.score) : activeQuiz.score;
      userState.testHistory[activeQuiz.id] = {
        bestScore: best,
        total: activeQuiz.questions.length,
        date: new Date().toLocaleDateString("vi-VN")
      };
      saveState();
    }
    renderApp();
  };

  // VIEW 3: CHECKPOINT TESTS HUB (BÀI TEST TỔNG ĐỊNH KỲ 2-3 CHƯƠNG & TEST TỪNG CHƯƠNG)
  function renderCheckpointsView() {
    return `
      <div class="surface-card" style="margin-bottom:20px">
        <h2 style="font-size:21px;font-weight:800;margin-bottom:6px">🏆 Bộ Đề Thi Chuẩn JLPT N4 — Phần Kanji & Từ Vựng (文字・語彙)</h2>
        <p style="font-size:14px;color:var(--text-secondary)">
          Mỗi Chương và mỗi kỳ Test Tổng đều có <strong>3 bộ đề chuẩn cấu trúc JLPT (Đề 1, Đề 2, Đề 3)</strong> gồm <strong>問題1 (Kanji → Hiragana)</strong> và <strong>問題2 (Hiragana → Kanji)</strong>. Toàn bộ từ vựng và đáp án nhiễu được giới hạn <strong>chỉ trong các chương đã học</strong>.
        </p>
      </div>

      <!-- PART 1: PERIODIC CHECKPOINT TESTS -->
      <div class="surface-card" style="margin-bottom:22px">
        <h3 style="font-size:17px;font-weight:800;margin-bottom:14px">📌 Phần 1: Các Kỳ Test Tổng Sau Mỗi 2–3 Chương (まとめテスト — 3 Đề / Kỳ)</h3>
        <div style="display:flex;flex-direction:column;gap:14px">
          ${CHECKPOINT_TESTS.map((cp) => {
            return `
              <div class="checkpoint-banner-card">
                <div class="checkpoint-banner-info">
                  <h4>🏆 ${escapeHtml(cp.title)} <span class="lesson-badge">${escapeHtml(cp.badge)}</span></h4>
                  <p>${escapeHtml(cp.subtitle)} • 🔒 Phạm vi: Chương ${cp.chapters.join(", ")}</p>
                </div>
                <div class="exam-set-buttons">
                  ${[1, 2, 3]
                    .map((sNum) => {
                      const h = userState.testHistory && userState.testHistory[`${cp.id}-set-${sNum}`];
                      return `
                        <button class="exam-set-btn ${h ? "completed" : ""}" onclick="window.startCheckpointById('${cp.id}', ${sNum})">
                          <span>🏆 Đề số ${sNum}</span>
                          ${h ? `<span>✅ ${h.bestScore}/${h.total}</span>` : `<span style="opacity:0.7">(${cp.questionCount} câu)</span>`}
                        </button>
                      `;
                    })
                    .join("")}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <!-- PART 2: CHAPTER ACHIEVEMENT TESTS -->
      <div class="surface-card" style="margin-bottom:22px">
        <h3 style="font-size:17px;font-weight:800;margin-bottom:14px">📘 Phần 2: Bộ Đề Test Cuối Mỗi Chương (アチーブメントテスト — 3 Đề / Chương)</h3>
        <div style="display:flex;flex-direction:column;gap:12px">
          ${CHAPTERS.map((ch) => {
            const chKanjiCount = ch.lessons.reduce((s, l) => s + l.kanjiList.length, 0);
            return `
              <div class="vocab-item" style="flex-wrap:wrap">
                <div>
                  <div style="font-weight:800;font-size:15.5px">${ch.icon} ${escapeHtml(ch.titleVi)} <span class="jp-font" style="color:var(--text-muted);font-weight:500">(${escapeHtml(ch.titleJp)})</span></div>
                  <div style="font-size:12.5px;color:var(--text-secondary)">🔒 Chỉ gồm các từ vựng thuộc ${chKanjiCount} chữ Kanji của Chương ${ch.id} (10 câu 問題1 + 10 câu 問題2 • Câu hỏi mới không lặp lại đề từng bài)</div>
                </div>
                <div class="exam-set-buttons">
                  ${[1, 2, 3]
                    .map((sNum) => {
                      const h = userState.testHistory && userState.testHistory[`ch-${ch.id}-set-${sNum}`];
                      return `
                        <button class="exam-set-btn ${h ? "completed" : ""}" onclick="window.startChapterTest(${ch.id}, ${sNum})">
                          <span>📄 Đề số ${sNum}</span>
                          ${h ? `<span>✅ ${h.bestScore}/${h.total}</span>` : `<span style="opacity:0.7">(20 câu)</span>`}
                        </button>
                      `;
                    })
                    .join("")}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <!-- PART 2B: LESSON JLPT TESTS (27 LESSONS x 3 SETS = 81 SETS) -->
      <div class="surface-card" style="margin-bottom:22px">
        <h3 style="font-size:17px;font-weight:800;margin-bottom:6px">📝 Phần 3: Bộ Đề Test JLPT Sau Mỗi Bài Học (ふくしゅう — 27 Bài × 3 Đề = 81 Đề)</h3>
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:14px">
          Mỗi bài học có 3 đề chuẩn JLPT (5 câu 問題1 + 5 câu 問題2 = 10 câu/đề), kiểm tra <strong>30 từ vựng hoàn toàn khác nhau</strong> trong phạm vi bài đó.
        </p>
        <div style="display:flex;flex-direction:column;gap:14px">
          ${CHAPTERS.map((ch) => {
            return `
              <div style="border:1px solid var(--border-color);border-radius:12px;padding:12px 14px;background:var(--bg-subtle)">
                <div style="font-weight:800;font-size:14px;margin-bottom:10px;color:var(--primary)">
                  ${ch.icon} ${escapeHtml(ch.titleVi)} (${escapeHtml(ch.titleJp)})
                </div>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px">
                  ${ch.lessons
                    .map((l) => {
                      return `
                        <div class="surface-card" style="padding:10px 12px">
                          <div style="font-weight:700;font-size:13px;margin-bottom:4px">
                            Bài ${l.id}: ${escapeHtml(l.titleVi)} <span class="jp-font" style="color:var(--text-muted)">(${escapeHtml(l.titleJp)})</span>
                          </div>
                          <div style="font-size:11.5px;color:var(--text-muted);margin-bottom:8px">
                            Chữ: ${l.kanjiList.map((k) => k.char).join("・")}
                          </div>
                          <div style="display:flex;gap:5px;flex-wrap:wrap">
                            ${[1, 2, 3]
                              .map((sNum) => {
                                const lh = userState.testHistory && userState.testHistory[`lesson-${l.id}-set-${sNum}`];
                                return `
                                  <button class="exam-set-btn ${lh ? "completed" : ""}" style="flex:1;justify-content:center;padding:4px 6px;font-size:11px" onclick="window.startLessonJlptTest('${l.id}', ${sNum})">
                                    <span>Đề ${sNum}</span>
                                    ${lh ? `<span>✅${lh.bestScore}/${lh.total}</span>` : `<span style="opacity:0.7">(10c)</span>`}
                                  </button>
                                `;
                              })
                              .join("")}
                          </div>
                        </div>
                      `;
                    })
                    .join("")}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <!-- PART 4: CUSTOM LESSON & KANJI MULTI-EXAM BUILDER -->
      ${renderCustomPracticeStudioView(true)}
    `;
  }

  // VIEW 3B: CUSTOM PRACTICE STUDIO (CHỌN BÀI / CHỌN KANJI & ĐA KỲ THI: JLPT, NAT-TEST, JBT/J.TEST, TOPJ)
  function renderCustomPracticeStudioView(isEmbedded = false) {
    const selectedPool = ALL_KANJI.filter((k) => customSelectorState.selectedKanjiSet.has(k.char));
    const totalVocabCount = selectedPool.reduce((sum, k) => sum + getKanjiWords(k).length, 0);
    const activeLessonIds = [];
    CHAPTERS.forEach((ch) => {
      ch.lessons.forEach((l) => {
        const allIn = l.kanjiList.every((k) => customSelectorState.selectedKanjiSet.has(k.char));
        const someIn = l.kanjiList.some((k) => customSelectorState.selectedKanjiSet.has(k.char));
        if (allIn) activeLessonIds.push(`Bài ${l.id}`);
        else if (someIn) activeLessonIds.push(`Bài ${l.id} (một phần)`);
      });
    });

    const curFormat = EXAM_FORMATS[customSelectorState.examFormat] || EXAM_FORMATS.JLPT;
    const selectedChars = selectedPool.map((k) => k.char);
    const hashShort = stringHashSeed(selectedChars.join("")) % 100000;

    return `
      <div class="surface-card" style="margin-bottom:20px;border:2px solid var(--accent-indigo)">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:14px;margin-bottom:16px">
          <div>
            <span class="chapter-tag" style="background:var(--accent-indigo-soft);color:var(--accent-indigo);margin-bottom:6px">
              🎛️ PHÒNG LUYỆN ĐỀ TỰ CHỌN BÀI & KANJI ĐA KỲ THI
            </span>
            <h2 style="font-size:${isEmbedded ? "19px" : "22px"};font-weight:800;margin-bottom:4px">
              Tự Chọn Bài Học / Từng Chữ Kanji & Luyện Thi Đa Định Dạng
            </h2>
            <p style="font-size:13.5px;color:var(--text-secondary)">
              Chọn bất kỳ tổ hợp <strong>Bài học</strong> (VD: <em>Bài 1, 2 Chương 1 + Bài 1, 2 Chương 2</em>) hoặc <strong>từng chữ Kanji rời rạc</strong>, sau đó chọn chuẩn đề thi: <strong>JLPT N4, NAT-TEST 4Q, JBT / J.TEST, JPT / TOPJ</strong>.
            </p>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            <button class="filter-chip" onclick="window.applyCustomPreset('example-12-12')" title="Chọn mẫu Bài 1, 2 Chương 1 + Bài 1, 2 Chương 2">
              🎯 Mẫu: Bài 1, 2 Ch.1 + Bài 1, 2 Ch.2
            </button>
            <button class="filter-chip" onclick="window.applyCustomPreset('all')">
              ☑️ Chọn tất cả (209 chữ)
            </button>
            <button class="filter-chip" onclick="window.applyCustomPreset('mastered')">
              ✅ Đã thuộc
            </button>
            <button class="filter-chip" onclick="window.applyCustomPreset('starred')">
              ⭐ Đánh dấu sao
            </button>
            <button class="filter-chip" onclick="window.applyCustomPreset('mistakes')">
              ⚠️ Hay làm sai
            </button>
            <button class="filter-chip" onclick="window.applyCustomPreset('none')" style="color:var(--primary)">
              🗑️ Bỏ chọn hết
            </button>
          </div>
        </div>

        <!-- STEP 1: CHOOSE EXAM FORMAT (JLPT / NAT-TEST / JBT / TOPJ / ALL) -->
        <div style="margin-bottom:18px">
          <div style="font-size:13.5px;font-weight:800;margin-bottom:8px;color:var(--text-main)">
            1️⃣ Chọn Hệ Thống Đề Thi Tiếng Nhật (Mỗi kỳ thi có cấu trúc câu hỏi & bẫy đặc trưng riêng):
          </div>
          <div class="exam-format-grid">
            ${Object.values(EXAM_FORMATS)
              .map((fmt) => {
                const isAct = customSelectorState.examFormat === fmt.id;
                return `
                  <div class="exam-format-card ${isAct ? "active" : ""}" onclick="window.setCustomExamFormat('${fmt.id}')">
                    <div class="exam-format-badge" style="background:var(--primary-soft);color:var(--primary)">
                      ${escapeHtml(fmt.badge)}
                    </div>
                    <div class="exam-format-title">${escapeHtml(fmt.title)}</div>
                    <div class="exam-format-desc">${escapeHtml(fmt.desc)}</div>
                  </div>
                `;
              })
              .join("")}
          </div>
        </div>

        <!-- STEP 2: QUESTION COUNT & QUICK LAUNCH BAR -->
        <div style="background:var(--bg-subtle);border:1px solid var(--border-color);border-radius:12px;padding:14px 16px;margin-bottom:18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px">
          <div>
            <div style="font-size:14px;font-weight:800;color:var(--text-main)">
              📌 Đang chọn: <span style="color:var(--primary)">${selectedPool.length} chữ Kanji</span>
              <span style="color:var(--text-muted);font-weight:600">(${totalVocabCount} từ vựng N4/N5)</span>
            </div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:2px">
              ${
                activeLessonIds.length > 0
                  ? `Các bài đang chọn: <strong>${escapeHtml(activeLessonIds.slice(0, 8).join(", "))}${activeLessonIds.length > 8 ? ` (+${activeLessonIds.length - 8} bài nữa)` : ""}</strong>`
                  : `<span style="color:var(--primary)">⚠️ Chưa chọn chữ Kanji nào. Hãy bấm vào Bài học hoặc từng chữ Kanji bên dưới!</span>`
              }
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
            <label style="font-size:12.5px;font-weight:700;display:flex;align-items:center;gap:6px">
              Số câu / đề:
              <select onchange="window.setCustomQuestionCount(this.value)" style="padding:6px 10px;border-radius:8px;border:1px solid var(--border-color);font-weight:700;background:var(--bg-surface);color:var(--text-main)">
                ${[15, 20, 30, 40]
                  .map(
                    (cnt) =>
                      `<option value="${cnt}" ${customSelectorState.questionCount === cnt ? "selected" : ""}>${cnt} câu</option>`
                  )
                  .join("")}
              </select>
            </label>

            <div class="exam-set-buttons">
              ${[1, 2, 3]
                .map((sNum) => {
                  const testId = `custom-${curFormat.id}-${hashShort}-set-${sNum}`;
                  const h = userState.testHistory && userState.testHistory[testId];
                  return `
                    <button class="exam-set-btn ${h ? "completed" : ""}" onclick="window.startSelectedKanjiExam(${sNum})" ${selectedPool.length === 0 ? "disabled style='opacity:0.5;cursor:not-allowed'" : ""}>
                      <span>${escapeHtml(curFormat.badge)} • Đề ${sNum}</span>
                      ${h ? `<span>✅ ${h.bestScore}/${h.total}</span>` : `<span style="opacity:0.75">(${customSelectorState.questionCount}c)</span>`}
                    </button>
                  `;
                })
                .join("")}
            </div>
          </div>
        </div>

        <!-- EXTRA QUICK MODES (TYPING & RAPID QUIZ) -->
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:18px;padding:0 4px">
          <div style="font-size:12.5px;color:var(--text-secondary)">
            💡 <strong>Cam kết không trùng lặp:</strong> Đề số 1, Đề số 2 và Đề số 3 tự động chia từ vựng độc lập từ đúng <strong>${selectedPool.length} chữ Kanji</strong> bạn đã tick.
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn btn-secondary" style="padding:6px 12px;font-size:12.5px" onclick="window.startSelectedKanjiQuickQuiz(true)" ${selectedPool.length === 0 ? "disabled" : ""}>
              ⌨️ Luyện gõ Hiragana (${selectedPool.length} chữ đã chọn)
            </button>
            <button class="btn btn-secondary" style="padding:6px 12px;font-size:12.5px" onclick="window.startSelectedKanjiQuickQuiz(false)" ${selectedPool.length === 0 ? "disabled" : ""}>
              🎯 Trắc nghiệm phản xạ nhanh
            </button>
          </div>
        </div>

        <!-- STEP 3: GRANULAR CHAPTER / LESSON / INDIVIDUAL KANJI SELECTOR -->
        <div style="font-size:13.5px;font-weight:800;margin-bottom:10px;color:var(--text-main)">
          2️⃣ Tick chọn cả Chương, cả Bài học hoặc bấm từng chữ Kanji muốn luyện tập:
        </div>

        <div>
          ${CHAPTERS.map((ch) => {
            const chKanji = ch.lessons.flatMap((l) => l.kanjiList);
            const selectedInCh = chKanji.filter((k) => customSelectorState.selectedKanjiSet.has(k.char)).length;
            const allChSelected = selectedInCh === chKanji.length && chKanji.length > 0;
            const someChSelected = selectedInCh > 0 && !allChSelected;

            return `
              <div class="selector-chapter-block">
                <div class="selector-chapter-header" onclick="window.toggleCustomChapter(${ch.id})">
                  <div style="display:flex;align-items:center;gap:10px">
                    <input
                      type="checkbox"
                      ${allChSelected ? "checked" : ""}
                      ${someChSelected ? "data-partial='true'" : ""}
                      onclick="event.stopPropagation(); window.toggleCustomChapter(${ch.id})"
                      style="width:17px;height:17px;accent-color:var(--primary);cursor:pointer"
                    />
                    <span style="font-size:15px;font-weight:800">
                      ${ch.icon} ${escapeHtml(ch.titleVi)}
                      <span class="jp-font" style="color:var(--text-muted);font-weight:500;font-size:13px">(${escapeHtml(ch.titleJp)})</span>
                    </span>
                  </div>
                  <div style="display:flex;align-items:center;gap:8px">
                    <span class="lesson-badge" style="${selectedInCh > 0 ? "background:var(--primary-soft);color:var(--primary);border-color:var(--primary)" : ""}">
                      Đã chọn ${selectedInCh}/${chKanji.length} chữ
                    </span>
                  </div>
                </div>

                <div class="selector-lessons-grid">
                  ${ch.lessons
                    .map((l) => {
                      const selInLesson = l.kanjiList.filter((k) => customSelectorState.selectedKanjiSet.has(k.char)).length;
                      const allLessonSelected = selInLesson === l.kanjiList.length && l.kanjiList.length > 0;
                      const partialLesson = selInLesson > 0 && !allLessonSelected;

                      return `
                        <div class="selector-lesson-box ${allLessonSelected ? "fully-selected" : partialLesson ? "partially-selected" : ""}">
                          <div class="selector-lesson-top" onclick="window.toggleCustomLesson('${l.id}')">
                            <label style="display:flex;align-items:center;gap:7px;cursor:pointer;font-size:13px;font-weight:800" onclick="event.stopPropagation()">
                              <input
                                type="checkbox"
                                ${allLessonSelected ? "checked" : ""}
                                onchange="window.toggleCustomLesson('${l.id}')"
                                style="width:15px;height:15px;accent-color:var(--primary);cursor:pointer"
                              />
                              <span>Bài ${l.id}: ${escapeHtml(l.titleVi)}</span>
                            </label>
                            <span style="font-size:11px;font-weight:700;color:${selInLesson > 0 ? "var(--primary)" : "var(--text-muted)"}">
                              ${selInLesson}/${l.kanjiList.length} chữ
                            </span>
                          </div>

                          <div class="selector-kanji-chips">
                            ${l.kanjiList
                              .map((k) => {
                                const isKSelected = customSelectorState.selectedKanjiSet.has(k.char);
                                return `
                                  <button
                                    type="button"
                                    class="selectable-kanji-btn ${isKSelected ? "selected" : ""}"
                                    onclick="window.toggleCustomKanji('${k.char}')"
                                    title="${escapeHtml(k.char)} (${escapeHtml(k.hanViet)}) — ${escapeHtml(k.meaning)} • ${k.words.length} từ vựng"
                                  >
                                    <span class="k-char">${k.char}</span>
                                    <span class="k-hv">${escapeHtml(k.hanViet.split("/")[0])}</span>
                                  </button>
                                `;
                              })
                              .join("")}
                          </div>
                        </div>
                      `;
                    })
                    .join("")}
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <!-- STICKY FLOATING LAUNCH BAR -->
        <div class="custom-launch-bar">
          <div>
            <div style="font-weight:800;font-size:14px">
              Đề thi: <span style="color:var(--primary)">${escapeHtml(curFormat.title)}</span>
            </div>
            <div style="font-size:12px;color:var(--text-secondary)">
              Phạm vi: <strong>${selectedPool.length} chữ Kanji</strong> (${totalVocabCount} từ ghép) • <strong>${customSelectorState.questionCount} câu/đề</strong>
            </div>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="window.startSelectedKanjiExam(1)" ${selectedPool.length === 0 ? "disabled" : ""}>
              🚀 Làm Đề Số 1
            </button>
            <button class="btn btn-indigo" onclick="window.startSelectedKanjiExam(2)" ${selectedPool.length === 0 ? "disabled" : ""}>
              📄 Làm Đề Số 2
            </button>
            <button class="btn btn-secondary" onclick="window.startSelectedKanjiExam(3)" ${selectedPool.length === 0 ? "disabled" : ""}>
              📄 Làm Đề Số 3
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // VIEW 4: NOTEBOOK (SỔ TAY CHỮ HAY SAI & ĐÁNH DẤU SAO)
  function renderNotebookView() {
    const mistakeKanji = ALL_KANJI.filter((k) => (userState.mistakes[k.char] || 0) > 0);
    const starredKanji = ALL_KANJI.filter((k) => !!userState.starred[k.char]);
    const combinedPool = Array.from(new Set([...mistakeKanji, ...starredKanji]));

    return `
      <div class="surface-card" style="margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
        <div>
          <h2 style="font-size:21px;font-weight:800">📒 Sổ Tay Ôn Tập Cá Nhân (Chữ Hay Sai & Đánh Dấu)</h2>
          <p style="font-size:13.5px;color:var(--text-secondary)">
            Tập hợp những chữ Kanji bạn từng làm sai hoặc chủ động gắn sao ⭐ để luyện tập dứt điểm.
          </p>
        </div>
        ${
          combinedPool.length > 0
            ? `<button class="btn btn-primary" onclick="window.startNotebookReviewQuiz()">
                🎯 Tạo Bài Ôn Tập Riêng (${combinedPool.length} chữ)
              </button>`
            : ""
        }
      </div>

      <div class="surface-card" style="margin-bottom:20px">
        <div class="section-heading">
          <span>⚠️ Chữ Kanji bạn từng trả lời sai (${mistakeKanji.length})</span>
          ${
            mistakeKanji.length > 0
              ? `<button class="filter-chip" onclick="window.clearMistakes()">Xóa lịch sử sai</button>`
              : ""
          }
        </div>
        ${
          mistakeKanji.length === 0
            ? `<p style="color:var(--text-muted);font-size:13.5px">Chưa có chữ nào bị sai. Hãy tiếp tục làm bài tập nhé!</p>`
            : `<div class="lessons-row">
                ${mistakeKanji.map((k) => renderMiniKanjiCard(k, `Sai ${userState.mistakes[k.char]} lần`)).join("")}
              </div>`
        }
      </div>

      <div class="surface-card">
        <div class="section-heading">
          <span>⭐ Chữ Kanji bạn đánh dấu cần chú ý (${starredKanji.length})</span>
        </div>
        ${
          starredKanji.length === 0
            ? `<p style="color:var(--text-muted);font-size:13.5px">Bạn chưa đánh dấu sao chữ nào.</p>`
            : `<div class="lessons-row">
                ${starredKanji.map((k) => renderMiniKanjiCard(k, "⭐ Đánh dấu")).join("")}
              </div>`
        }
      </div>
    `;
  }

  function renderMiniKanjiCard(k, badgeText) {
    return `
      <div class="lesson-card" onclick="window.openLesson('${k.lessonId}', '${k.char}')">
        <div style="display:flex;gap:12px;align-items:center">
          <div class="search-item-char" style="width:48px;height:48px;font-size:26px">${k.char}</div>
          <div style="flex:1">
            <div style="display:flex;justify-content:space-between">
              <strong style="color:var(--primary);font-size:13px">${escapeHtml(k.hanViet)}</strong>
              <span class="lesson-badge">${escapeHtml(badgeText)}</span>
            </div>
            <div style="font-weight:700;font-size:15px">${escapeHtml(k.meaning)}</div>
            <div style="font-size:12px;color:var(--text-muted)">Bộ: ${escapeHtml(k.radical)}</div>
          </div>
        </div>
      </div>
    `;
  }

  window.startNotebookReviewQuiz = function () {
    const pool = ALL_KANJI.filter(
      (k) => (userState.mistakes[k.char] || 0) > 0 || !!userState.starred[k.char]
    );
    if (pool.length === 0) return;
    const questions = buildQuizPool(pool, Math.min(20, pool.length * 3), true);
    activeQuiz = {
      id: "notebook-review",
      title: "Ôn Tập Chữ Hay Sai & Đánh Dấu",
      questions,
      currentIndex: 0,
      score: 0,
      answered: false,
      selectedAnswer: "",
      isCorrect: false,
      wrongKanjiSet: new Set()
    };
    currentView = "quiz-runner";
    renderApp();
  };

  window.clearMistakes = function () {
    userState.mistakes = {};
    saveState();
    renderApp();
  };

  // VIEW 5: DICTIONARY (TRA CỨU 209 CHỮ KANJI N4)
  let dictFilterChapter = "ALL";
  let dictFilterStatus = "ALL";

  function renderDictionaryView() {
    const filtered = ALL_KANJI.filter((k) => {
      if (dictFilterChapter !== "ALL" && k.chapterId !== Number(dictFilterChapter)) return false;
      if (dictFilterStatus === "MASTERED" && !userState.mastered[k.char]) return false;
      if (dictFilterStatus === "UNMASTERED" && userState.mastered[k.char]) return false;
      return true;
    });

    return `
      <div class="surface-card" style="margin-bottom:18px">
        <div class="section-heading" style="flex-wrap:wrap;gap:10px">
          <span>🔍 Bảng Tra Cứu Toàn Bộ 209 Chữ Kanji Master N4 (${filtered.length} chữ)</span>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <select onchange="window.setDictChapter(this.value)" style="padding:6px 10px;border-radius:8px;border:1px solid var(--border-color)">
              <option value="ALL" ${dictFilterChapter === "ALL" ? "selected" : ""}>Tất cả 9 Chương</option>
              ${CHAPTERS.map(
                (ch) => `<option value="${ch.id}" ${String(dictFilterChapter) === String(ch.id) ? "selected" : ""}>${escapeHtml(ch.titleVi)}</option>`
              ).join("")}
            </select>
            <select onchange="window.setDictStatus(this.value)" style="padding:6px 10px;border-radius:8px;border:1px solid var(--border-color)">
              <option value="ALL" ${dictFilterStatus === "ALL" ? "selected" : ""}>Mọi trạng thái</option>
              <option value="MASTERED" ${dictFilterStatus === "MASTERED" ? "selected" : ""}>✅ Đã thuộc</option>
              <option value="UNMASTERED" ${dictFilterStatus === "UNMASTERED" ? "selected" : ""}>☐ Chưa thuộc</option>
            </select>
          </div>
        </div>
        <div class="lessons-row">
          ${filtered
            .map((k) =>
              renderMiniKanjiCard(
                k,
                userState.mastered[k.char] ? "✅ Đã thuộc" : `Bài ${k.lessonId}`
              )
            )
            .join("")}
        </div>
      </div>
    `;
  }

  window.setDictChapter = function (val) {
    dictFilterChapter = val;
    renderApp();
  };

  window.setDictStatus = function (val) {
    dictFilterStatus = val;
    renderApp();
  };

  // ============================================================================
  // VIEW 6: CHOUKAI (聴解) & KAIWA (会話) N5–N4 STUDIO
  // ============================================================================
  const choukaiState = {
    activeMode: "mode1", // mode1 (Dictation) | mode2 (Mondai 4 Quick Kaiwa) | mode3 (Mondai 1-2 Dialogue) | mode4 (Kaiwa & Traps)
    chapterFilter: "ALL", // ALL or 1..9
    speechRate: 0.9, // 0.75 | 0.9 | 1.0 | 1.15
    // Mode 1 (Dictation & Keyword Listening) state
    m1SubMode: "choice", // choice (4 đáp án) | typing (gõ Hiragana/Romaji)
    m1Questions: [],
    m1Index: 0,
    m1Answered: false,
    m1Selected: "",
    m1IsCorrect: false,
    m1Score: 0,
    m1ShowScriptBeforeAnswer: false,
    m1ShowHint: false
  };

  window.speakJpWithOptions = function (text, customRate, customPitch) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = String(text || "")
      .replace(/【|】/g, "")
      .replace(/（[^）]*）/g, "")
      .trim();
    if (!cleanText) return;
    const utter = new SpeechSynthesisUtterance(cleanText);
    utter.lang = "ja-JP";
    utter.rate = customRate || choukaiState.speechRate || 0.9;
    utter.pitch = customPitch || 1.0;
    window.speechSynthesis.speak(utter);
  };

  function buildMode1DictationPool() {
    const targetKanji =
      choukaiState.chapterFilter === "ALL"
        ? ALL_KANJI
        : ALL_KANJI.filter((k) => String(k.chapterId) === String(choukaiState.chapterFilter));

    const allReadingsInScope = targetKanji.flatMap((k) =>
      getKanjiWords(k).map((w) => w.reading.replace(/〜/g, "").trim())
    );

    const items = [];
    const seenWords = new Set();
    const usedTemplates = new Set();

    targetKanji.forEach((k) => {
      getKanjiWords(k).forEach((w) => {
        const cleanWord = w.word.replace(/〜/g, "").trim();
        const cleanRead = w.reading.replace(/〜/g, "").trim();
        if (!cleanWord || !cleanRead || seenWords.has(cleanWord)) return;
        seenWords.add(cleanWord);

        const wHash = stringHashSeed(cleanWord);
        const fullKanjiSentence = buildNaturalJlptSentence(
          cleanWord,
          cleanRead,
          w,
          k,
          "mondai1",
          wHash + 7,
          usedTemplates,
          false
        );
        // Spoken sentence for TTS (replace 【word】 with cleanWord)
        const spokenSentence = fullKanjiSentence.replace(`【${cleanWord}】`, cleanWord);
        // Masked sentence with blank slot
        const maskedSentence = fullKanjiSentence.replace(`【${cleanWord}】`, "【 🔊 ＿＿＿ 】");

        const distractors = buildPhoneticReadingDistractors(cleanRead, [], allReadingsInScope);
        const readingOptions = seededShuffle([cleanRead, ...distractors], wHash + 19);

        items.push({
          kanjiChar: k.char,
          lessonId: k.lessonId,
          chapterId: k.chapterId,
          word: cleanWord,
          reading: cleanRead,
          hanViet: w.hanViet || k.hanViet,
          meaning: w.meaning || k.meaning,
          spokenSentence,
          fullKanjiSentence: fullKanjiSentence.replace(/【|】/g, ""),
          maskedSentence,
          readingOptions
        });
      });
    });

    // Shuffle for fresh listening session
    const shuffled = shuffleArray(items).slice(0, 20);
    choukaiState.m1Questions = shuffled;
    choukaiState.m1Index = 0;
    choukaiState.m1Answered = false;
    choukaiState.m1Selected = "";
    choukaiState.m1IsCorrect = false;
    choukaiState.m1Score = 0;
    choukaiState.m1ShowScriptBeforeAnswer = false;
    choukaiState.m1ShowHint = false;
  }

  window.setChoukaiMode = function (mode) {
    choukaiState.activeMode = mode;
    if (mode === "mode1" && choukaiState.m1Questions.length === 0) {
      buildMode1DictationPool();
    }
    renderApp();
  };

  window.setChoukaiChapter = function (chVal) {
    choukaiState.chapterFilter = chVal;
    buildMode1DictationPool();
    renderApp();
  };

  window.setChoukaiSpeed = function (rate) {
    choukaiState.speechRate = Number(rate) || 0.9;
    renderApp();
  };

  window.setChoukaiM1SubMode = function (subMode) {
    choukaiState.m1SubMode = subMode;
    renderApp();
  };

  window.restartChoukaiMode1 = function () {
    buildMode1DictationPool();
    renderApp();
    const q = choukaiState.m1Questions[0];
    if (q) window.speakJpWithOptions(q.spokenSentence, choukaiState.speechRate, 1.0);
  };

  window.playCurrentM1Audio = function (customRate) {
    const q = choukaiState.m1Questions[choukaiState.m1Index];
    if (!q) return;
    window.speakJpWithOptions(q.spokenSentence, customRate || choukaiState.speechRate, 1.0);
  };

  window.playCurrentM1WordOnly = function () {
    const q = choukaiState.m1Questions[choukaiState.m1Index];
    if (!q) return;
    window.speakJpWithOptions(q.reading, 0.85, 1.0);
  };

  window.toggleM1ScriptPreview = function () {
    choukaiState.m1ShowScriptBeforeAnswer = !choukaiState.m1ShowScriptBeforeAnswer;
    renderApp();
  };

  window.toggleM1Hint = function () {
    choukaiState.m1ShowHint = !choukaiState.m1ShowHint;
    renderApp();
  };

  window.answerChoukaiM1Choice = function (pickedReading) {
    if (choukaiState.m1Answered) return;
    const q = choukaiState.m1Questions[choukaiState.m1Index];
    if (!q) return;
    choukaiState.m1Answered = true;
    choukaiState.m1Selected = pickedReading;
    choukaiState.m1IsCorrect = pickedReading === q.reading;
    if (choukaiState.m1IsCorrect) {
      choukaiState.m1Score++;
    } else {
      userState.mistakes[q.kanjiChar] = (userState.mistakes[q.kanjiChar] || 0) + 1;
      saveState();
    }
    renderApp();
    window.speakJpWithOptions(q.spokenSentence, choukaiState.speechRate, 1.0);
  };

  window.submitChoukaiM1Typing = function () {
    if (choukaiState.m1Answered) return;
    const q = choukaiState.m1Questions[choukaiState.m1Index];
    const inp = document.getElementById("m1DictationInput");
    if (!q || !inp) return;
    const userHira = romajiToHiragana(inp.value.trim(), true);
    if (!userHira) return;
    choukaiState.m1Answered = true;
    choukaiState.m1Selected = userHira;
    choukaiState.m1IsCorrect = userHira === q.reading || userHira === q.word;
    if (choukaiState.m1IsCorrect) {
      choukaiState.m1Score++;
    } else {
      userState.mistakes[q.kanjiChar] = (userState.mistakes[q.kanjiChar] || 0) + 1;
      saveState();
    }
    renderApp();
    window.speakJpWithOptions(q.spokenSentence, choukaiState.speechRate, 1.0);
  };

  window.nextChoukaiM1Question = function () {
    if (choukaiState.m1Index + 1 < choukaiState.m1Questions.length) {
      choukaiState.m1Index++;
      choukaiState.m1Answered = false;
      choukaiState.m1Selected = "";
      choukaiState.m1IsCorrect = false;
      choukaiState.m1ShowScriptBeforeAnswer = false;
      choukaiState.m1ShowHint = false;
      renderApp();
      const nextQ = choukaiState.m1Questions[choukaiState.m1Index];
      if (nextQ) window.speakJpWithOptions(nextQ.spokenSentence, choukaiState.speechRate, 1.0);
    } else {
      buildMode1DictationPool();
      renderApp();
    }
  };

  function renderChoukaiMode1Dictation() {
    if (choukaiState.m1Questions.length === 0) {
      buildMode1DictationPool();
    }
    const q = choukaiState.m1Questions[choukaiState.m1Index];
    if (!q) {
      return `<div class="surface-card">Không có dữ liệu từ vựng cho chương này.</div>`;
    }

    const total = choukaiState.m1Questions.length;
    const showScript = choukaiState.m1Answered || choukaiState.m1ShowScriptBeforeAnswer;

    return `
      <div class="surface-card" style="border:2px solid var(--primary)">
        <!-- SUB-HEADER: SUB-MODE & SCORE -->
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:16px">
          <div>
            <span class="chapter-tag" style="margin-bottom:4px">
              👂 CHẾ ĐỘ 1: NGHE BẮT TỪ KHÓA & CHÉP CHÍNH TẢ (聞き取り・ディクテーション)
            </span>
            <h3 style="font-size:18px;font-weight:800">
              Xóa độ trễ từ Tai lên Não — Nghe câu hoàn chỉnh & bắt đúng âm đọc
            </h3>
          </div>
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
            <button
              class="filter-chip ${choukaiState.m1SubMode === "choice" ? "active" : ""}"
              onclick="window.setChoukaiM1SubMode('choice')"
            >
              🎯 Trắc nghiệm 4 đáp án
            </button>
            <button
              class="filter-chip ${choukaiState.m1SubMode === "typing" ? "active" : ""}"
              onclick="window.setChoukaiM1SubMode('typing')"
            >
              ⌨️ Tự gõ Hiragana/Romaji
            </button>
            <button class="filter-chip" onclick="window.restartChoukaiMode1()">
              🔄 Đổi 20 câu mới
            </button>
          </div>
        </div>

        <!-- PROGRESS BAR -->
        <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:700;margin-bottom:8px;color:var(--text-secondary)">
          <span>Câu ${choukaiState.m1Index + 1} / ${total} • Thuộc Bài ${q.lessonId} (Chữ 「${q.kanjiChar}」)</span>
          <span style="color:var(--success)">Điểm hiện tại: ${choukaiState.m1Score} / ${choukaiState.m1Index + (choukaiState.m1Answered ? 1 : 0)}</span>
        </div>
        <div class="progress-bar-track" style="margin-bottom:18px">
          <div class="progress-bar-fill" style="width:${Math.round(((choukaiState.m1Index + 1) / total) * 100)}%"></div>
        </div>

        <!-- AUDIO STAGE -->
        <div class="choukai-audio-stage">
          <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-bottom:14px">
            <button class="audio-play-hero-btn" onclick="window.playCurrentM1Audio()">
              🔊 Bấm Nghe Cả Câu (${choukaiState.speechRate}x)
            </button>
            <button class="btn btn-secondary" onclick="window.playCurrentM1Audio(0.72)">
              🐢 Nghe Chậm (0.72x)
            </button>
            <button class="btn btn-secondary" onclick="window.playCurrentM1WordOnly()">
              🎧 Chỉ Nghe Từ Khóa Cần Bắt
            </button>
          </div>

          <div style="font-size:12.5px;color:var(--text-secondary);margin-bottom:10px">
            Hãy lắng nghe câu tiếng Nhật và xác định <strong>từ vựng ở vị trí chỗ trống 【 🔊 ＿＿＿ 】</strong> được phát âm là gì:
          </div>

          <!-- SENTENCE DISPLAY (MASKED BY DEFAULT TO FORCE LISTENING) -->
          <div class="dictation-masked-sentence">
            ${
              showScript
                ? formatJlptSentence(q.maskedSentence.replace("【 🔊 ＿＿＿ 】", `【${q.word}（${q.reading}）】`))
                : `<span style="color:var(--text-secondary);font-size:16px">🙈 Đang ẩn mặt chữ tiếng Nhật để luyện tai nghe thuần túy...</span>
                   <div style="margin-top:8px;font-size:19px">
                     <span class="dictation-slot">🔊 ＿＿＿</span>
                   </div>`
            }
          </div>

          <!-- TOGGLE SCRIPT & TOGGLE HINT BUTTONS -->
          <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:10px">
            <button
              type="button"
              class="jlpt-hint-btn ${choukaiState.m1ShowScriptBeforeAnswer ? "active" : ""}"
              onclick="window.toggleM1ScriptPreview()"
            >
              ${choukaiState.m1ShowScriptBeforeAnswer ? "🙈 Ẩn mặt chữ xung quanh" : "👁️ Xem mặt chữ xung quanh chỗ trống"}
            </button>
            <button
              type="button"
              class="jlpt-hint-btn ${choukaiState.m1ShowHint ? "active" : ""}"
              onclick="window.toggleM1Hint()"
            >
              ${choukaiState.m1ShowHint ? "🙈 Ẩn gợi ý nghĩa" : "💡 Hiện gợi ý nghĩa"}
            </button>
          </div>

          ${
            choukaiState.m1ShowScriptBeforeAnswer && !choukaiState.m1Answered
              ? `<div style="margin-top:10px;font-size:17px;font-weight:700" class="jp-font">
                  ${formatJlptSentence(q.maskedSentence)}
                </div>`
              : ""
          }

          ${
            choukaiState.m1ShowHint
              ? `<div style="margin-top:10px">
                  <span class="jlpt-hint-badge">
                    💡 Nghĩa từ cần nghe: <strong>${escapeHtml(q.meaning)}</strong> • Hán Việt: [${escapeHtml(q.hanViet)}]
                  </span>
                </div>`
              : ""
          }
        </div>

        <!-- ANSWER INPUT AREA (4 CHOICES OR TYPING) -->
        ${
          choukaiState.m1SubMode === "typing"
            ? `
              <div style="display:flex;gap:10px;justify-content:center;align-items:center;flex-wrap:wrap;margin-bottom:16px">
                <input
                  type="text"
                  id="m1DictationInput"
                  class="typing-input"
                  style="max-width:380px;font-size:18px;text-align:center"
                  placeholder="Gõ Romaji (VD: kazoku) hoặc Hiragana vừa nghe..."
                  value="${escapeHtml(choukaiState.m1Selected)}"
                  ${choukaiState.m1Answered ? "disabled" : ""}
                  oninput="const v=this.value; if(/[a-zA-Z]/.test(v)){const h=romajiToHiragana(v,false); if(h!==v) this.value=h;}"
                  onkeydown="if(event.key==='Enter') window.submitChoukaiM1Typing()"
                />
                ${
                  !choukaiState.m1Answered
                    ? `<button class="btn btn-primary" onclick="window.submitChoukaiM1Typing()">Kiểm tra đáp án</button>`
                    : ""
                }
              </div>
            `
            : `
              <div class="jlpt-choices-grid" style="padding-left:0;margin-bottom:16px">
                ${q.readingOptions
                  .map((opt, idx) => {
                    let cls = "jlpt-choice-btn";
                    if (choukaiState.m1Answered) {
                      if (opt === q.reading) cls += " correct";
                      else if (opt === choukaiState.m1Selected) cls += " wrong";
                    }
                    return `
                      <button
                        class="${cls}"
                        ${choukaiState.m1Answered ? "disabled" : ""}
                        onclick="window.answerChoukaiM1Choice('${escapeHtml(opt)}')"
                      >
                        <span class="jlpt-choice-num">${idx + 1}</span>
                        <span class="jp-font" style="font-size:17px">${escapeHtml(opt)}</span>
                      </button>
                    `;
                  })
                  .join("")}
              </div>
            `
        }

        <!-- FEEDBACK & SHADOWING BOX AFTER ANSWERING -->
        ${
          choukaiState.m1Answered
            ? `
              <div class="jlpt-explain-bar ${choukaiState.m1IsCorrect ? "ok" : "err"}" style="margin-left:0;margin-top:12px">
                <div>
                  <div style="font-size:15px;margin-bottom:4px">
                    ${
                      choukaiState.m1IsCorrect
                        ? "✅ <strong>Tai nghe rất chuẩn!</strong>"
                        : `❌ <strong>Chưa chính xác</strong> (Bạn chọn/gõ: ${escapeHtml(choukaiState.m1Selected)})`
                    }
                    — Từ khóa đúng: <strong class="jp-font" style="font-size:17px">${escapeHtml(q.word)}（${escapeHtml(q.reading)}）</strong>
                    [${escapeHtml(q.hanViet)}] = <strong>${escapeHtml(q.meaning)}</strong>
                  </div>
                  <div style="font-size:14px;color:var(--text-main)" class="jp-font">
                    📜 <strong>Script cả câu:</strong> ${escapeHtml(q.fullKanjiSentence)}
                  </div>
                  <div style="font-size:12px;color:var(--text-secondary);margin-top:4px">
                    🗣️ <em>Mẹo luyện Kaiwa: Hãy bấm "🔊 Nghe lại" và đọc nhại theo (Shadowing) cả câu 2 lần trước khi sang câu tiếp theo!</em>
                  </div>
                </div>
                <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <button class="btn btn-secondary" onclick="window.playCurrentM1Audio(1.0)">
                    🔊 Nghe chuẩn 1.0x để nhại theo
                  </button>
                  <button class="btn btn-primary" onclick="window.nextChoukaiM1Question()">
                    Câu tiếp theo →
                  </button>
                </div>
              </div>
            `
            : ""
        }
      </div>
    `;
  }

  function renderChoukaiView() {
    const modeCards = [
      {
        id: "mode1",
        badge: "👂 Chế độ 1 • Nền tảng tai nghe",
        title: "Nghe Bắt Từ Khóa & Chép Chính Tả",
        desc: "Ẩn chữ Nhật, nghe câu hoàn chỉnh để bắt đúng trường âm, âm ngắt, âm đục của từ vựng N4/N5."
      },
      {
        id: "mode2",
        badge: "⚡ Chế độ 2 • JLPT Mondai 4",
        title: "Phản Xạ Đáp Lời Kaiwa Tức Thì",
        desc: "Nghe 1 câu giao tiếp thực tế và chọn nhanh lời đáp tự nhiên nhất trong 3 lựa chọn (即時応答)."
      },
      {
        id: "mode3",
        badge: "🎭 Chế độ 3 • JLPT Mondai 1 & 2",
        title: "Giải Mã Hội Thoại & Bắt Bẫy Đổi Ý",
        desc: "Nghe hội thoại Nam – Nữ theo 9 chủ đề sách, luyện bắt từ khóa bẫy (ちょっと、やっぱり、その前に)."
      },
      {
        id: "mode4",
        badge: "🗣️ Chế độ 4 • Thực chiến Kaiwa",
        title: "Đóng Vai Kaiwa & Từ Điển Khẩu Ngữ",
        desc: "Sổ tay rút gọn văn nói (〜ちゃう, 〜とく, 〜なきゃ), cụm từ bẫy Choukai & Luyện đóng vai A–B."
      }
    ];

    return `
      <div class="surface-card" style="margin-bottom:18px;border:2px solid var(--accent-indigo)">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px;margin-bottom:16px">
          <div>
            <span class="chapter-tag" style="background:var(--accent-indigo-soft);color:var(--accent-indigo);margin-bottom:4px">
              🎧 PHÒNG LUYỆN CHOUKAI (聴解) & PHẢN XẠ KAIWA (会話) N5–N4
            </span>
            <h2 style="font-size:21px;font-weight:800">
              Luyện Tai Nghe Nhạy Bén & Phản Xạ Hội Thoại Thực Chiến
            </h2>
            <p style="font-size:13px;color:var(--text-secondary)">
              Kết nối trực tiếp từ vựng trong 9 Chương <em>Kanji Master N4</em> sang âm thanh thực tế, giúp bạn nghe bắt từ tức thì và tự tin nói Kaiwa.
            </p>
          </div>

          <!-- GLOBAL AUDIO CONTROLS: CHAPTER FILTER & SPEED -->
          <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
            <select
              onchange="window.setChoukaiChapter(this.value)"
              style="padding:7px 11px;border-radius:10px;border:1px solid var(--border-color);font-weight:700;background:var(--bg-surface);color:var(--text-main)"
            >
              <option value="ALL" ${choukaiState.chapterFilter === "ALL" ? "selected" : ""}>📚 Tất cả 9 Chương (N5 + N4)</option>
              ${CHAPTERS.map(
                (ch) =>
                  `<option value="${ch.id}" ${String(choukaiState.chapterFilter) === String(ch.id) ? "selected" : ""}>${ch.icon} Chương ${ch.id}: ${escapeHtml(ch.titleVi)}</option>`
              ).join("")}
            </select>

            <div class="audio-speed-bar" title="Tốc độ giọng đọc tiếng Nhật">
              <span style="font-size:11.5px;font-weight:800;padding-left:6px;color:var(--text-muted)">Tốc độ:</span>
              ${[
                { r: 0.75, label: "0.75x Chậm" },
                { r: 0.9, label: "0.9x Vừa" },
                { r: 1.0, label: "1.0x Thi thật" },
                { r: 1.15, label: "1.15x Nhanh" }
              ]
                .map(
                  (sp) => `
                  <button
                    type="button"
                    class="speed-pill ${choukaiState.speechRate === sp.r ? "active" : ""}"
                    onclick="window.setChoukaiSpeed(${sp.r})"
                  >
                    ${sp.label}
                  </button>
                `
                )
                .join("")}
            </div>
          </div>
        </div>

        <!-- 4 MODE SELECTOR CARDS -->
        <div class="choukai-mode-grid">
          ${modeCards
            .map(
              (mc) => `
              <div
                class="choukai-mode-card ${choukaiState.activeMode === mc.id ? "active" : ""}"
                onclick="window.setChoukaiMode('${mc.id}')"
              >
                <span class="exam-format-badge" style="background:var(--primary-soft);color:var(--primary);align-self:flex-start">
                  ${escapeHtml(mc.badge)}
                </span>
                <div style="font-size:15px;font-weight:800;color:var(--text-main)">${escapeHtml(mc.title)}</div>
                <div style="font-size:12px;color:var(--text-secondary);line-height:1.45">${escapeHtml(mc.desc)}</div>
              </div>
            `
            )
            .join("")}
        </div>
      </div>

      ${
        choukaiState.activeMode === "mode1"
          ? renderChoukaiMode1Dictation()
          : choukaiState.activeMode === "mode2"
          ? renderChoukaiMode2Mondai4()
          : choukaiState.activeMode === "mode3"
          ? renderChoukaiMode3Dialogues()
          : typeof renderChoukaiOtherModes === "function"
          ? renderChoukaiOtherModes()
          : `<div class="surface-card">Đang tải chế độ luyện nghe...</div>`
      }
    `;
  }

  // ============================================================================
  // CHẾ ĐỘ 2: PHẢN XẠ ĐÁP LỜI KAIWA TỨC THÌ (JLPT CHOUKAI MONDAI 4 — 即時応答)
  // ============================================================================
  choukaiState.m2Index = 0;
  choukaiState.m2Answered = false;
  choukaiState.m2SelectedIdx = -1;
  choukaiState.m2Score = 0;
  choukaiState.m2ShowScript = false;
  choukaiState.m2ShowHint = false;

  function getFilteredMondai4Pool() {
    const raw = window.CHOUKAI_MONDAI4 || [];
    if (choukaiState.chapterFilter === "ALL") return raw;
    const filtered = raw.filter((item) => String(item.chapterId) === String(choukaiState.chapterFilter));
    return filtered.length > 0 ? filtered : raw;
  }

  window.playM2PromptAudio = function (customRate) {
    const pool = getFilteredMondai4Pool();
    const item = pool[choukaiState.m2Index % pool.length];
    if (!item) return;
    const pitch = item.speakerGender === "M" ? 0.88 : 1.12;
    window.speakJpWithOptions(item.promptJp, customRate || choukaiState.speechRate, pitch);
  };

  window.playM2OptionAudio = function (optIdx) {
    const pool = getFilteredMondai4Pool();
    const item = pool[choukaiState.m2Index % pool.length];
    if (!item || !item.options[optIdx]) return;
    const replyPitch = item.speakerGender === "M" ? 1.12 : 0.88;
    window.speakJpWithOptions(item.options[optIdx].jp, choukaiState.speechRate, replyPitch);
  };

  window.playM2FullSequence = function () {
    if (!("speechSynthesis" in window)) return;
    const pool = getFilteredMondai4Pool();
    const item = pool[choukaiState.m2Index % pool.length];
    if (!item) return;
    window.speechSynthesis.cancel();

    const rate = choukaiState.speechRate || 0.9;
    const uPrompt = new SpeechSynthesisUtterance(item.promptJp);
    uPrompt.lang = "ja-JP";
    uPrompt.rate = rate;
    uPrompt.pitch = item.speakerGender === "M" ? 0.88 : 1.12;

    const correctOpt = item.options[item.answerIndex];
    const uReply = new SpeechSynthesisUtterance(correctOpt ? correctOpt.jp : "");
    uReply.lang = "ja-JP";
    uReply.rate = rate;
    uReply.pitch = item.speakerGender === "M" ? 1.12 : 0.88;

    window.speechSynthesis.speak(uPrompt);
    window.speechSynthesis.speak(uReply);
  };

  window.toggleM2Script = function () {
    choukaiState.m2ShowScript = !choukaiState.m2ShowScript;
    renderApp();
  };

  window.toggleM2Hint = function () {
    choukaiState.m2ShowHint = !choukaiState.m2ShowHint;
    renderApp();
  };

  window.selectM2Option = function (optIdx) {
    if (choukaiState.m2Answered) return;
    const pool = getFilteredMondai4Pool();
    const item = pool[choukaiState.m2Index % pool.length];
    if (!item) return;
    choukaiState.m2Answered = true;
    choukaiState.m2SelectedIdx = optIdx;
    if (optIdx === item.answerIndex) {
      choukaiState.m2Score++;
    }
    renderApp();
    window.playM2FullSequence();
  };

  window.nextM2Question = function (dir) {
    const pool = getFilteredMondai4Pool();
    if (pool.length === 0) return;
    const step = dir || 1;
    choukaiState.m2Index = (choukaiState.m2Index + step + pool.length) % pool.length;
    choukaiState.m2Answered = false;
    choukaiState.m2SelectedIdx = -1;
    choukaiState.m2ShowScript = false;
    choukaiState.m2ShowHint = false;
    renderApp();
    window.playM2PromptAudio();
  };

  function renderChoukaiMode2Mondai4() {
    const pool = getFilteredMondai4Pool();
    if (pool.length === 0) {
      return `<div class="surface-card">Chưa có dữ liệu Mondai 4.</div>`;
    }
    const idx = choukaiState.m2Index % pool.length;
    const item = pool[idx];
    const showText = choukaiState.m2Answered || choukaiState.m2ShowScript;
    const isCorrect = choukaiState.m2SelectedIdx === item.answerIndex;

    return `
      <div class="surface-card" style="border:2px solid var(--accent-indigo)">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:14px">
          <div>
            <span class="chapter-tag" style="background:var(--accent-indigo-soft);color:var(--accent-indigo);margin-bottom:4px">
              ⚡ CHẾ ĐỘ 2: PHẢN XẠ ĐÁP LỜI TỨC THÌ (JLPT MONDAI 4 — 即時応答)
            </span>
            <h3 style="font-size:18px;font-weight:800">
              Nghe 1 câu giao tiếp thực tế & Chọn lời đáp tự nhiên nhất trong 3 lựa chọn
            </h3>
          </div>
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
            <span class="lesson-badge">Tình huống ${idx + 1} / ${pool.length} (Chương ${item.chapterId} • Bài ${item.lessonId})</span>
            <span class="lesson-badge" style="color:var(--success)">Đúng: ${choukaiState.m2Score} câu</span>
          </div>
        </div>

        <!-- AUDIO STAGE FOR MONDAI 4 -->
        <div class="choukai-audio-stage">
          <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-bottom:14px">
            <button class="audio-play-hero-btn" onclick="window.playM2PromptAudio()">
              🔊 Nghe Câu Nói Của Đối Phương (${item.speakerGender === "M" ? "👨 Nam" : "👩 Nữ"} • ${choukaiState.speechRate}x)
            </button>
            <button class="btn btn-secondary" onclick="window.playM2PromptAudio(0.75)">
              🐢 Nghe Chậm (0.75x)
            </button>
          </div>

          <div class="dialogue-box" style="max-width:740px;margin:0 auto">
            <div class="dialogue-turn">
              <div class="dialogue-avatar ${item.speakerGender === "M" ? "male" : "female"}">
                ${item.speakerGender === "M" ? "👨" : "👩"}
              </div>
              <div style="flex:1">
                <div style="font-size:12px;font-weight:700;color:var(--text-muted);margin-bottom:4px">
                  Người nói A (${item.speakerGender === "M" ? "Giọng Nam" : "Giọng Nữ"})
                </div>
                ${
                  showText
                    ? `
                      <div class="jp-font" style="font-size:18px;font-weight:800;color:var(--text-main)">
                        「${escapeHtml(item.promptJp)}」
                      </div>
                      <div class="jp-font" style="font-size:13.5px;color:var(--primary);margin-top:2px">
                        ${escapeHtml(item.promptHira)}
                      </div>
                      ${
                        choukaiState.m2Answered
                          ? `<div style="font-size:13px;color:var(--text-secondary);margin-top:4px">
                              🇻🇳 <em>${escapeHtml(item.promptVi)}</em>
                            </div>`
                          : ""
                      }
                    `
                    : `
                      <div style="font-size:15px;color:var(--text-secondary);padding:6px 0">
                        🙈 <strong>Đang ẩn Script câu hỏi</strong> (Chuẩn phòng thi Mondai 4 — Hãy bấm nút 🔊 phía trên để nghe!)
                      </div>
                    `
                }
              </div>
            </div>
          </div>

          <!-- TOGGLE SCRIPT & HINT -->
          <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:12px">
            <button
              type="button"
              class="jlpt-hint-btn ${choukaiState.m2ShowScript ? "active" : ""}"
              onclick="window.toggleM2Script()"
            >
              ${choukaiState.m2ShowScript ? "🙈 Ẩn chữ tiếng Nhật" : "👁️ Hiện chữ tiếng Nhật (Nếu nghe chưa rõ)"}
            </button>
            <button
              type="button"
              class="jlpt-hint-btn ${choukaiState.m2ShowHint ? "active" : ""}"
              onclick="window.toggleM2Hint()"
            >
              ${choukaiState.m2ShowHint ? "🙈 Ẩn gợi ý tình huống" : "💡 Hiện gợi ý tình huống"}
            </button>
          </div>

          ${
            choukaiState.m2ShowHint
              ? `
                <div style="margin-top:10px">
                  <span class="jlpt-hint-badge">
                    💡 Bối cảnh: <strong>${escapeHtml(item.situationVi)}</strong>
                  </span>
                </div>
              `
              : ""
          }
        </div>

        <!-- 3 RESPONSE OPTIONS (1・2・3) -->
        <div style="font-size:13.5px;font-weight:800;margin-bottom:10px;color:var(--text-main)">
          👇 Chọn câu đáp lại (Kaiwa) tự nhiên nhất (Bấm 🔊 ở từng câu để nghe phát âm của đáp án đó):
        </div>

        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
          ${item.options
            .map((opt, oIdx) => {
              let cls = "jlpt-choice-btn";
              if (choukaiState.m2Answered) {
                if (oIdx === item.answerIndex) cls += " correct";
                else if (oIdx === choukaiState.m2SelectedIdx) cls += " wrong";
              }
              return `
                <div style="display:flex;gap:8px;align-items:stretch">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    style="padding:0 14px;flex-shrink:0"
                    onclick="window.playM2OptionAudio(${oIdx})"
                    title="Nghe phát âm đáp án ${oIdx + 1}"
                  >
                    🔊 Nghe ${oIdx + 1}
                  </button>
                  <button
                    type="button"
                    class="${cls}"
                    style="flex:1;justify-content:flex-start;padding:12px 16px"
                    ${choukaiState.m2Answered ? "disabled" : ""}
                    onclick="window.selectM2Option(${oIdx})"
                  >
                    <span class="jlpt-choice-num">${oIdx + 1}</span>
                    <div style="text-align:left">
                      ${
                        showText
                          ? `
                            <div class="jp-font" style="font-size:16px;font-weight:800">${escapeHtml(opt.jp)}</div>
                            <div class="jp-font" style="font-size:12.5px;color:var(--text-secondary)">${escapeHtml(opt.hira)}</div>
                            ${
                              choukaiState.m2Answered
                                ? `<div style="font-size:12.5px;color:var(--text-muted);margin-top:3px">🇻🇳 ${escapeHtml(opt.vi)}</div>`
                                : ""
                            }
                          `
                          : `<span style="font-size:14.5px;color:var(--text-secondary)">Đáp án số ${oIdx + 1} (Bấm 🔊 bên trái để nghe hoặc chọn đáp án)</span>`
                      }
                    </div>
                  </button>
                </div>
              `;
            })
            .join("")}
        </div>

        <!-- EXPLANATION & KAIWA TIP BOX -->
        ${
          choukaiState.m2Answered
            ? `
              <div class="jlpt-explain-bar ${isCorrect ? "ok" : "err"}" style="margin-left:0">
                <div>
                  <div style="font-size:15px;margin-bottom:6px">
                    ${
                      isCorrect
                        ? "✅ <strong>Phản xạ Kaiwa rất tự nhiên!</strong>"
                        : `❌ <strong>Chưa đúng ngữ cảnh</strong> (Bạn chọn đáp án ${choukaiState.m2SelectedIdx + 1}, đáp án đúng là <strong>${item.answerIndex + 1}</strong>)`
                    }
                  </div>
                  <div style="font-size:13.5px;color:var(--text-main);line-height:1.55">
                    💡 <strong>Điểm Ngữ pháp / Khẩu ngữ Kaiwa & Choukai N4 cần nhớ:</strong><br/>
                    ${escapeHtml(item.kaiwaTip)}
                  </div>
                </div>
                <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
                  <button class="btn btn-indigo" onclick="window.playM2FullSequence()">
                    🗣️ Nghe A ↔ B để Nhại Theo (Shadowing)
                  </button>
                  <button class="btn btn-primary" onclick="window.nextM2Question(1)">
                    Tình huống tiếp theo →
                  </button>
                </div>
              </div>
            `
            : `
              <div style="display:flex;justify-content:space-between;margin-top:8px">
                <button class="btn btn-secondary" onclick="window.nextM2Question(-1)">← Tình huống trước</button>
                <button class="btn btn-secondary" onclick="window.nextM2Question(1)">Bỏ qua / Tình huống tiếp →</button>
              </div>
            `
        }
      </div>
    `;
  }

  // ============================================================================
  // CHẾ ĐỘ 3: GIẢI MÃ HỘI THOẠI & BẮT BẪY ĐỔI Ý (JLPT CHOUKAI MONDAI 1 & 2)
  // ============================================================================
  choukaiState.m3Index = 0;
  choukaiState.m3Answered = false;
  choukaiState.m3SelectedIdx = -1;
  choukaiState.m3Score = 0;
  choukaiState.m3ShowScript = false;
  choukaiState.m3ShowHint = false;

  function getFilteredDialoguesPool() {
    const raw = window.CHOUKAI_DIALOGUES || [];
    if (choukaiState.chapterFilter === "ALL") return raw;
    const filtered = raw.filter((item) => String(item.chapterId) === String(choukaiState.chapterFilter));
    return filtered.length > 0 ? filtered : raw;
  }

  window.playM3FullDialogue = function (customRate) {
    if (!("speechSynthesis" in window)) return;
    const pool = getFilteredDialoguesPool();
    const dlg = pool[choukaiState.m3Index % pool.length];
    if (!dlg) return;
    window.speechSynthesis.cancel();

    const rate = customRate || choukaiState.speechRate || 0.9;

    // 1. Setting / Intro question
    const uIntro = new SpeechSynthesisUtterance(dlg.settingJp);
    uIntro.lang = "ja-JP";
    uIntro.rate = rate;
    uIntro.pitch = 1.0;
    window.speechSynthesis.speak(uIntro);

    // 2. Dialogue turns (Male vs Female pitch)
    dlg.turns.forEach((t) => {
      const uTurn = new SpeechSynthesisUtterance(t.jp);
      uTurn.lang = "ja-JP";
      uTurn.rate = rate;
      uTurn.pitch = t.speaker === "M" ? 0.85 : 1.15;
      window.speechSynthesis.speak(uTurn);
    });

    // 3. Final question
    const uQ = new SpeechSynthesisUtterance(dlg.questionJp);
    uQ.lang = "ja-JP";
    uQ.rate = rate;
    uQ.pitch = 1.0;
    window.speechSynthesis.speak(uQ);
  };

  window.playM3SingleTurn = function (turnIdx) {
    const pool = getFilteredDialoguesPool();
    const dlg = pool[choukaiState.m3Index % pool.length];
    if (!dlg || !dlg.turns[turnIdx]) return;
    const t = dlg.turns[turnIdx];
    const pitch = t.speaker === "M" ? 0.85 : 1.15;
    window.speakJpWithOptions(t.jp, choukaiState.speechRate, pitch);
  };

  window.stopChoukaiAudio = function () {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  window.toggleM3Script = function () {
    choukaiState.m3ShowScript = !choukaiState.m3ShowScript;
    renderApp();
  };

  window.toggleM3Hint = function () {
    choukaiState.m3ShowHint = !choukaiState.m3ShowHint;
    renderApp();
  };

  window.selectM3Option = function (optIdx) {
    if (choukaiState.m3Answered) return;
    const pool = getFilteredDialoguesPool();
    const dlg = pool[choukaiState.m3Index % pool.length];
    if (!dlg) return;
    choukaiState.m3Answered = true;
    choukaiState.m3SelectedIdx = optIdx;
    if (optIdx === dlg.answerIndex) {
      choukaiState.m3Score++;
    }
    renderApp();
  };

  window.nextM3Dialogue = function (dir) {
    window.stopChoukaiAudio();
    const pool = getFilteredDialoguesPool();
    if (pool.length === 0) return;
    const step = dir || 1;
    choukaiState.m3Index = (choukaiState.m3Index + step + pool.length) % pool.length;
    choukaiState.m3Answered = false;
    choukaiState.m3SelectedIdx = -1;
    choukaiState.m3ShowScript = false;
    choukaiState.m3ShowHint = false;
    renderApp();
  };

  function renderChoukaiMode3Dialogues() {
    const pool = getFilteredDialoguesPool();
    if (pool.length === 0) {
      return `<div class="surface-card">Chưa có dữ liệu hội thoại.</div>`;
    }
    const idx = choukaiState.m3Index % pool.length;
    const dlg = pool[idx];
    const showScript = choukaiState.m3Answered || choukaiState.m3ShowScript;
    const isCorrect = choukaiState.m3SelectedIdx === dlg.answerIndex;

    return `
      <div class="surface-card" style="border:2px solid var(--primary)">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:14px">
          <div>
            <span class="chapter-tag" style="margin-bottom:4px">
              🎭 CHẾ ĐỘ 3: GIẢI MÃ HỘI THOẠI & BẮT BẪY ĐỔI Ý (${escapeHtml(dlg.mondaiType)})
            </span>
            <h3 style="font-size:18px;font-weight:800">
              ${escapeHtml(dlg.titleVi)}
            </h3>
          </div>
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
            <span class="lesson-badge">Bài hội thoại ${idx + 1} / ${pool.length} (Chương ${dlg.chapterId} • Bài ${dlg.lessonId})</span>
            <span class="lesson-badge" style="color:var(--success)">Đúng: ${choukaiState.m3Score} bài</span>
          </div>
        </div>

        <!-- AUDIO STAGE FOR DIALOGUE -->
        <div class="choukai-audio-stage">
          <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-bottom:14px">
            <button class="audio-play-hero-btn" onclick="window.playM3FullDialogue()">
              ▶️ Phát Toàn Bộ Hội Thoại Nam ↔ Nữ (${choukaiState.speechRate}x)
            </button>
            <button class="btn btn-secondary" onclick="window.playM3FullDialogue(0.75)">
              🐢 Nghe Chậm (0.75x)
            </button>
            <button class="btn btn-secondary" onclick="window.stopChoukaiAudio()">
              ⏹️ Dừng phát
            </button>
          </div>

          <!-- SETTING & QUESTION PROMPT (ALWAYS VISIBLE LIKE REAL JLPT EXAM) -->
          <div style="background:var(--bg-surface);border:1.5px solid var(--border-color);border-radius:12px;padding:12px 16px;text-align:left;max-width:780px;margin:0 auto 12px">
            <div style="font-size:12px;font-weight:800;color:var(--accent-indigo);margin-bottom:4px">
              📌 CÂU HỎI ĐỊNH HƯỚNG TRƯỚC KHI NGHE (Hãy đọc kỹ câu hỏi trước khi bấm nghe):
            </div>
            <div class="jp-font" style="font-size:16px;font-weight:800;color:var(--text-main)">
              ${escapeHtml(dlg.settingJp)}
            </div>
            <div style="font-size:13px;color:var(--text-secondary);margin-top:3px">
              🇻🇳 ${escapeHtml(dlg.settingVi)}
            </div>
          </div>

          <!-- TOGGLE SCRIPT & TRAP HINT -->
          <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap">
            <button
              type="button"
              class="jlpt-hint-btn ${choukaiState.m3ShowScript ? "active" : ""}"
              onclick="window.toggleM3Script()"
            >
              ${choukaiState.m3ShowScript ? "🙈 Ẩn Script Hội Thoại" : "📜 Xem Script Hội Thoại (Kèm phân tích Bẫy)"}
            </button>
            <button
              type="button"
              class="jlpt-hint-btn ${choukaiState.m3ShowHint ? "active" : ""}"
              onclick="window.toggleM3Hint()"
            >
              ${choukaiState.m3ShowHint ? "🙈 Ẩn gợi ý bắt bẫy" : "💡 Hiện gợi ý từ khóa bắt bẫy"}
            </button>
          </div>

          ${
            choukaiState.m3ShowHint
              ? `
                <div style="margin-top:10px">
                  <span class="jlpt-hint-badge">
                    💡 Mẹo bắt bẫy bài này: ${escapeHtml(dlg.trapHint)}
                  </span>
                </div>
              `
              : ""
          }

          <!-- DIALOGUE SCRIPT (REVEALED ON ANSWER OR TOGGLE) -->
          ${
            showScript
              ? `
                <div class="dialogue-box" style="max-width:780px;margin:14px auto 0">
                  ${dlg.turns
                    .map(
                      (t, tIdx) => `
                      <div class="dialogue-turn" style="${t.isKeyAnswer ? "border:2px solid var(--success);background:var(--success-soft)" : t.isTrap ? "border:1.5px dashed #f59e0b" : ""}">
                        <div class="dialogue-avatar ${t.speaker === "M" ? "male" : "female"}">
                          ${t.speaker === "M" ? "👨" : "👩"}
                        </div>
                        <div style="flex:1">
                          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:4px">
                            <div>
                              <strong style="font-size:12.5px;color:var(--text-secondary)">${escapeHtml(t.name)}</strong>
                              ${t.isTrap ? `<span class="trap-tag">⚠️ BẪY ĐỀ THI</span>` : ""}
                              ${t.isKeyAnswer ? `<span class="key-answer-tag">🎯 CÂU CHỐT ĐÁP ÁN</span>` : ""}
                            </div>
                            <button
                              type="button"
                              class="filter-chip"
                              style="padding:2px 8px;font-size:11px"
                              onclick="window.playM3SingleTurn(${tIdx})"
                            >
                              🔊 Nghe câu này
                            </button>
                          </div>
                          <div class="jp-font" style="font-size:15.5px;font-weight:700;color:var(--text-main)">
                            ${escapeHtml(t.jp)}
                          </div>
                          <div class="jp-font" style="font-size:12.5px;color:var(--text-muted);margin-top:2px">
                            ${escapeHtml(t.hira)}
                          </div>
                          <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">
                            🇻🇳 ${escapeHtml(t.vi)}
                          </div>
                          ${
                            t.trapNote
                              ? `<div style="margin-top:6px;font-size:12px;font-weight:700;color:#b45309">
                                  🔍 <em>${escapeHtml(t.trapNote)}</em>
                                </div>`
                              : ""
                          }
                          ${
                            t.keyNote
                              ? `<div style="margin-top:6px;font-size:12px;font-weight:700;color:#15803d">
                                  ✅ <em>${escapeHtml(t.keyNote)}</em>
                                </div>`
                              : ""
                          }
                        </div>
                      </div>
                    `
                    )
                    .join("")}
                </div>
              `
              : ""
          }
        </div>

        <!-- 4 MULTIPLE CHOICE OPTIONS (1・2・3・4) -->
        <div style="font-size:14px;font-weight:800;margin-bottom:10px;color:var(--text-main)" class="jp-font">
          ❓ 質問：${escapeHtml(dlg.questionJp)}
        </div>

        <div class="jlpt-choices-grid" style="padding-left:0;margin-bottom:16px">
          ${dlg.options
            .map((opt, oIdx) => {
              let cls = "jlpt-choice-btn";
              if (choukaiState.m3Answered) {
                if (oIdx === dlg.answerIndex) cls += " correct";
                else if (oIdx === choukaiState.m3SelectedIdx) cls += " wrong";
              }
              return `
                <button
                  type="button"
                  class="${cls}"
                  style="padding:12px 14px"
                  ${choukaiState.m3Answered ? "disabled" : ""}
                  onclick="window.selectM3Option(${oIdx})"
                >
                  <span class="jlpt-choice-num">${oIdx + 1}</span>
                  <div style="text-align:left">
                    <div class="jp-font" style="font-size:15.5px;font-weight:800">${escapeHtml(opt.jp)}</div>
                    ${
                      choukaiState.m3Answered
                        ? `<div style="font-size:12px;color:var(--text-secondary);margin-top:3px">${escapeHtml(opt.vi)}</div>`
                        : ""
                    }
                  </div>
                </button>
              `;
            })
            .join("")}
        </div>

        <!-- RESULT & NAVIGATION -->
        ${
          choukaiState.m3Answered
            ? `
              <div class="jlpt-explain-bar ${isCorrect ? "ok" : "err"}" style="margin-left:0">
                <div>
                  ${
                    isCorrect
                      ? "✅ <strong>Xuất sắc! Bạn đã vượt qua bẫy đổi ý và chọn đúng đáp án!</strong>"
                      : `❌ <strong>Bạn đã dính bẫy hội thoại!</strong> (Đáp án đúng là <strong>${dlg.answerIndex + 1}：${escapeHtml(dlg.options[dlg.answerIndex].jp)}</strong>)`
                  }
                  <div style="font-size:12.5px;margin-top:4px">
                    👆 Hãy xem phần <strong>Script Hội Thoại</strong> vừa được mở ở trên (các câu có gắn nhãn <strong>⚠️ BẪY ĐỀ THI</strong> và <strong>🎯 CÂU CHỐT ĐÁP ÁN</strong>) và bấm nghe lại từng câu nhé!
                  </div>
                </div>
                <button class="btn btn-primary" onclick="window.nextM3Dialogue(1)">
                  Hội thoại tiếp theo →
                </button>
              </div>
            `
            : `
              <div style="display:flex;justify-content:space-between;margin-top:8px">
                <button class="btn btn-secondary" onclick="window.nextM3Dialogue(-1)">← Bài trước</button>
                <button class="btn btn-secondary" onclick="window.nextM3Dialogue(1)">Bài hội thoại tiếp →</button>
              </div>
            `
        }
      </div>
    `;
  }

  // INTERACTIVE WRITING CANVAS
  function initWritingCanvas() {
    const canvas = document.getElementById("kanjiCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = document.documentElement.getAttribute("data-theme") === "dark" ? "#f1f5f9" : "#182232";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    let drawing = false;
    function getPos(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    canvas.onmousedown = (e) => {
      drawing = true;
      const p = getPos(e);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
    };
    canvas.onmousemove = (e) => {
      if (!drawing) return;
      const p = getPos(e);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    };
    window.addEventListener("mouseup", () => {
      drawing = false;
    });

    canvas.ontouchstart = (e) => {
      e.preventDefault();
      drawing = true;
      const p = getPos(e);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
    };
    canvas.ontouchmove = (e) => {
      e.preventDefault();
      if (!drawing) return;
      const p = getPos(e);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    };
    canvas.ontouchend = () => {
      drawing = false;
    };
  }

  window.clearKanjiCanvas = function () {
    const canvas = document.getElementById("kanjiCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  window.toggleCanvasGuide = function () {
    const g = document.getElementById("canvasGuideChar");
    if (!g) return;
    g.style.display = g.style.display === "none" ? "flex" : "none";
  };

  // MODAL FOR CUSTOM NOTES & WORDS
  window.openCustomNoteModal = function (char) {
    const modal = document.getElementById("customNoteModal");
    document.getElementById("modalKanjiChar").textContent = char;
    document.getElementById("customNoteInput").value = (userState.notes && userState.notes[char]) || "";
    document.getElementById("customWordKanji").value = "";
    document.getElementById("customWordReading").value = "";
    document.getElementById("customWordHanViet").value = "";
    document.getElementById("customWordMeaning").value = "";
    modal.style.display = "flex";
  };

  // MAIN RENDER ENTRY
  function renderApp() {
    document.documentElement.setAttribute("data-theme", userState.theme || "light");
    updateSidebarStats();
    renderSidebarTree();
    renderBreadcrumb();

    const mainEl = document.getElementById("mainContent");
    if (!mainEl) return;

    if (currentView === "dashboard") {
      mainEl.innerHTML = renderDashboardView();
    } else if (currentView === "lesson") {
      mainEl.innerHTML = renderLessonView();
      initWritingCanvas();
    } else if (currentView === "checkpoints") {
      mainEl.innerHTML = renderCheckpointsView();
    } else if (currentView === "custom-practice") {
      mainEl.innerHTML = renderCustomPracticeStudioView(false);
    } else if (currentView === "choukai") {
      mainEl.innerHTML = renderChoukaiView();
    } else if (currentView === "notebook") {
      mainEl.innerHTML = renderNotebookView();
    } else if (currentView === "dictionary") {
      mainEl.innerHTML = renderDictionaryView();
    } else if (currentView === "quiz-runner") {
      mainEl.innerHTML = renderQuizRunnerView();
    } else if (currentView === "jlpt-exam") {
      mainEl.innerHTML = renderJlptExamView();
    }
  }

  // INITIALIZE LISTENERS
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("brandHomeBtn").addEventListener("click", () => window.switchView("dashboard"));
    document.getElementById("navDashboardBtn").addEventListener("click", () => window.switchView("dashboard"));
    document.getElementById("navCheckpointsBtn").addEventListener("click", () => window.switchView("checkpoints"));
    const navCustomBtn = document.getElementById("navCustomPracticeBtn");
    if (navCustomBtn) {
      navCustomBtn.addEventListener("click", () => window.switchView("custom-practice"));
    }
    const navChoukaiBtn = document.getElementById("navChoukaiBtn");
    if (navChoukaiBtn) {
      navChoukaiBtn.addEventListener("click", () => window.switchView("choukai"));
    }
    document.getElementById("navNotebookBtn").addEventListener("click", () => window.switchView("notebook"));
    document.getElementById("navDictionaryBtn").addEventListener("click", () => window.switchView("dictionary"));

    document.getElementById("openSidebarBtn").addEventListener("click", () => {
      document.getElementById("sidebar").classList.add("mobile-open");
    });
    document.getElementById("closeSidebarBtn").addEventListener("click", closeMobileSidebar);

    document.getElementById("themeToggleBtn").addEventListener("click", () => {
      userState.theme = userState.theme === "dark" ? "light" : "dark";
      saveState();
      renderApp();
    });

    // Global Search
    const searchInput = document.getElementById("globalSearchInput");
    const dropdown = document.getElementById("searchDropdown");
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) {
        dropdown.style.display = "none";
        return;
      }
      const matches = ALL_KANJI.filter((k) => {
        if (k.char.includes(q)) return true;
        if (k.hanViet.toLowerCase().includes(q)) return true;
        if (k.meaning.toLowerCase().includes(q)) return true;
        if ((k.words || []).some((w) => w.word.includes(q) || w.reading.includes(q) || w.meaning.toLowerCase().includes(q)))
          return true;
        return false;
      }).slice(0, 8);

      if (matches.length === 0) {
        dropdown.innerHTML = `<div style="padding:12px;font-size:13px;color:var(--text-muted)">Không tìm thấy chữ Kanji phù hợp.</div>`;
      } else {
        dropdown.innerHTML = matches
          .map(
            (k) => `
          <div class="search-item" onclick="window.openLesson('${k.lessonId}', '${k.char}'); document.getElementById('searchDropdown').style.display='none';">
            <div class="search-item-char">${k.char}</div>
            <div>
              <div style="font-weight:700;font-size:13.5px">${escapeHtml(k.hanViet)} — ${escapeHtml(k.meaning)}</div>
              <div style="font-size:12px;color:var(--text-muted)">Bài ${k.lessonId} • Bộ: ${escapeHtml(k.radical)}</div>
            </div>
          </div>
        `
          )
          .join("");
      }
      dropdown.style.display = "block";
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".quick-search-box")) {
        dropdown.style.display = "none";
      }
    });

    // Modal listeners
    const closeModal = () => {
      document.getElementById("customNoteModal").style.display = "none";
    };
    document.getElementById("closeModalBtn").addEventListener("click", closeModal);
    document.getElementById("cancelModalBtn").addEventListener("click", closeModal);
    document.getElementById("saveModalBtn").addEventListener("click", () => {
      const char = document.getElementById("modalKanjiChar").textContent;
      const note = document.getElementById("customNoteInput").value.trim();
      userState.notes = userState.notes || {};
      userState.notes[char] = note;

      const wKanji = document.getElementById("customWordKanji").value.trim();
      const wRead = document.getElementById("customWordReading").value.trim();
      const wHv = document.getElementById("customWordHanViet").value.trim();
      const wMean = document.getElementById("customWordMeaning").value.trim();
      const wLevel = document.getElementById("customWordLevel").value;

      if (wKanji && wRead && wMean) {
        userState.customWords = userState.customWords || {};
        userState.customWords[char] = userState.customWords[char] || [];
        userState.customWords[char].push({
          word: wKanji,
          reading: wRead,
          hanViet: wHv || "TỰ THÊM",
          meaning: wMean,
          level: wLevel,
          type: "on"
        });
      }
      saveState();
      closeModal();
      renderApp();
    });

    // Export / Import JSON
    document.getElementById("exportDataBtn").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(userState, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `kanji-master-n4-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });

    document.getElementById("importDataInput").addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const parsed = JSON.parse(ev.target.result);
          userState = Object.assign(defaultState(), parsed);
          saveState();
          renderApp();
          alert("Khôi phục dữ liệu học tập thành công!");
        } catch (err) {
          alert("File JSON không hợp lệ!");
        }
      };
      reader.readAsText(file);
    });

    renderApp();
  });
})();
