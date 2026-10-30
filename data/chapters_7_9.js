window.KANJI_CHAPTERS = window.KANJI_CHAPTERS || [];
window.KANJI_CHAPTERS.push(
  {
    id: 7,
    titleJp: "7章 春夏秋冬",
    titleVi: "Chương 7: Xuân Hạ Thu Đông",
    icon: "🌸",
    lessons: [
      {
        id: "7-1",
        number: 1,
        titleJp: "きせつ",
        reading: "きせつ",
        titleVi: "Bốn mùa",
        kanjiList: [
          {
            char: "春",
            hanViet: "XUÂN",
            meaning: "Mùa xuân, tuổi xuân",
            strokes: 9,
            onyomi: ["シュン"],
            kunyomi: ["はる"],
            radical: "日 (Nhật - Mặt trời)",
            components: "三人 (Ba người) + 日 (Mặt trời)",
            mnemonic: "Ba người (三人) cùng ra ngoài dưới ánh mặt trời (日) ấm áp của mùa XUÂN (春).",
            lookalikes: [
              { char: "奉", hanViet: "PHỤNG", diff: "Phía dưới không phải bộ Nhật (日) mà là nét sổ và ngang" },
              { char: "泰", hanViet: "THÁI", diff: "Phía dưới là bộ Thủy (氺)" }
            ],
            words: [
              { word: "春", reading: "はる", hanViet: "XUÂN", meaning: "Mùa xuân", level: "N5", type: "kun" },
              { word: "春休み", reading: "はるやすみ", hanViet: "XUÂN HƯU", meaning: "Kỳ nghỉ xuân", level: "N5", type: "kun" },
              { word: "春分の日", reading: "しゅんぶんのひ", hanViet: "XUÂN PHÂN NHẬT", meaning: "Ngày Xuân phân", level: "N4", type: "on" },
              { word: "青春", reading: "せいしゅん", hanViet: "THANH XUÂN", meaning: "Tuổi trẻ, thanh xuân", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "春休みに かぞくと りょこうに 行きます。",
                reading: "はるやすみに かぞくと りょこうに いきます。",
                vi: "Vào kỳ nghỉ xuân tôi sẽ đi du lịch cùng gia đình."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "【春】は あたたかくて 気もちが いいです。",
                target: "春",
                answer: "はる",
                options: ["はる", "なつ", "あき", "ふゆ"],
                hint: "Mùa đầu tiên trong năm (Mùa xuân)."
              },
              {
                type: "kanji",
                question: "【はるやすみ】に 国へ 帰ります。",
                target: "はるやすみ",
                answer: "春休み",
                options: ["春休み", "夏休み", "秋休み", "冬休み"],
                hint: "Kỳ nghỉ mùa xuân (XUÂN HƯU)."
              }
            ]
          },
          {
            char: "夏",
            hanViet: "HẠ",
            meaning: "Mùa hè, mùa hạ",
            strokes: 10,
            onyomi: ["カ", "ゲ"],
            kunyomi: ["なつ"],
            radical: "夊 (Truy - Đi chậm)",
            components: "百 (Một trăm / Đầu) + 夊 (Bước chân)",
            mnemonic: "Đội mũ che đầu (頁/百) bước đi chậm rãi (夊) dưới cái nắng gay gắt của mùa HẠ (夏).",
            lookalikes: [
              { char: "憂", hanViet: "ƯU", diff: "Có thêm bộ Tâm (心) ở giữa, mang nghĩa ưu buồn" },
              { char: "復", hanViet: "PHỤC", diff: "Có bộ Xích (彳) bên trái và bộ Nhật ở giữa" }
            ],
            words: [
              { word: "夏", reading: "なつ", hanViet: "HẠ", meaning: "Mùa hè", level: "N5", type: "kun" },
              { word: "夏休み", reading: "なつやすみ", hanViet: "HẠ HƯU", meaning: "Kỳ nghỉ hè", level: "N5", type: "kun" },
              { word: "初夏", reading: "しょか", hanViet: "SƠ HẠ", meaning: "Đầu mùa hè", level: "N4", type: "on" },
              { word: "真夏", reading: "まなつ", hanViet: "CHÂN HẠ", meaning: "Giữa mùa hè", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "日本の 夏は とても あついです。",
                reading: "にほんの なつは とても あついです。",
                vi: "Mùa hè ở Nhật Bản rất nóng."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "【夏休み】に うみへ およぎに 行きました。",
                target: "夏休み",
                answer: "なつやすみ",
                options: ["なつやすみ", "はるやすみ", "ふゆやすみ", "あきやすみ"],
                hint: "Kỳ nghỉ hè."
              },
              {
                type: "kanji",
                question: "わたしは 【なつ】が 一番 すきです。",
                target: "なつ",
                answer: "夏",
                options: ["夏", "春", "秋", "冬"],
                hint: "Chữ HẠ (mùa hè)."
              }
            ]
          },
          {
            char: "秋",
            hanViet: "THU",
            meaning: "Mùa thu",
            strokes: 9,
            onyomi: ["シュウ"],
            kunyomi: ["あき"],
            radical: "禾 (Hòa - Cây lúa)",
            components: "禾 (Cây lúa) + 火 (Lửa)",
            mnemonic: "Cây lúa (禾) chín vàng rực rỡ như màu lửa (火) báo hiệu mùa THU (秋) đã về.",
            lookalikes: [
              { char: "和", hanViet: "HÒA", diff: "Bên phải là bộ Khẩu (口) chứ không phải bộ Hỏa (火)" },
              { char: "秒", hanViet: "MIỂU", diff: "Bên phải là bộ Thiểu (少 - ít), nghĩa là giây" }
            ],
            words: [
              { word: "秋", reading: "あき", hanViet: "THU", meaning: "Mùa thu", level: "N5", type: "kun" },
              { word: "秋分の日", reading: "しゅうぶんのひ", hanViet: "THU PHÂN NHẬT", meaning: "Ngày Thu phân", level: "N4", type: "on" },
              { word: "晩秋", reading: "ばんしゅう", hanViet: "VÃN THU", meaning: "Cuối thu", level: "N4", type: "on" },
              { word: "春夏秋冬", reading: "しゅんかしゅうとう", hanViet: "XUÂN HẠ THU ĐÔNG", meaning: "Bốn mùa Xuân Hạ Thu Đông", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "秋は もみじが とても きれいです。",
                reading: "あきは もみじが とても きれいです。",
                vi: "Vào mùa thu lá đỏ rất đẹp."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "【秋】は すずしくて べんきょうしやすいです。",
                target: "秋",
                answer: "あき",
                options: ["あき", "はる", "なつ", "ふゆ"],
                hint: "Mùa thu mát mẻ."
              },
              {
                type: "kanji",
                question: "【あき】に なると、くだものが おいしいです。",
                target: "あき",
                answer: "秋",
                options: ["秋", "春", "夏", "冬"],
                hint: "Chữ THU (禾 + 火)."
              }
            ]
          },
          {
            char: "冬",
            hanViet: "ĐÔNG",
            meaning: "Mùa đông",
            strokes: 5,
            onyomi: ["トウ"],
            kunyomi: ["ふゆ"],
            radical: "冫 (Băng - Nước đá)",
            components: "夂 (Bước chân) + 冫 (Hai giọt băng giá)",
            mnemonic: "Bước chân đi (夂) trên hai tảng băng lạnh giá (冫) trong mùa ĐÔNG (冬).",
            lookalikes: [
              { char: "終", hanViet: "CHUNG", diff: "Có thêm bộ Mịch (糸) ở bên trái, nghĩa là kết thúc" },
              { char: "冷", hanViet: "LÃNH", diff: "Hai chấm băng nằm bên trái, bên phải là chữ Lệnh (令)" }
            ],
            words: [
              { word: "冬", reading: "ふゆ", hanViet: "ĐÔNG", meaning: "Mùa đông", level: "N5", type: "kun" },
              { word: "冬休み", reading: "ふゆやすみ", hanViet: "ĐÔNG HƯU", meaning: "Kỳ nghỉ đông", level: "N5", type: "kun" },
              { word: "真冬", reading: "まふゆ", hanViet: "CHÂN ĐÔNG", meaning: "Giữa mùa đông", level: "N4", type: "kun" },
              { word: "冬眠", reading: "とうみん", hanViet: "ĐÔNG MIÊN", meaning: "Ngủ đông", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "冬休みに スキーに 行きたいです。",
                reading: "ふゆやすみに スキーに いきたいです。",
                vi: "Vào kỳ nghỉ đông tôi muốn đi trượt tuyết."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "北国の 【冬】は とても さむいです。",
                target: "冬",
                answer: "ふゆ",
                options: ["ふゆ", "あき", "なつ", "はる"],
                hint: "Mùa lạnh nhất trong năm (Mùa đông)."
              },
              {
                type: "kanji",
                question: "【ふゆやすみ】は みじかいです。",
                target: "ふゆやすみ",
                answer: "冬休み",
                options: ["冬休み", "夏休み", "春休み", "秋休み"],
                hint: "Kỳ nghỉ mùa đông (ĐÔNG HƯU)."
              }
            ]
          },
          {
            char: "空",
            hanViet: "KHÔNG",
            meaning: "Bầu trời, trống rỗng",
            strokes: 8,
            onyomi: ["クウ"],
            kunyomi: ["そら", "あ.く", "あ.ける", "から"],
            radical: "穴 (Huyệt - Hang lỗ)",
            components: "穴 (Hang động) + 工 (Công sức)",
            mnemonic: "Bỏ công sức (工) đào cái hang (穴) tạo ra khoảng KHÔNG (空) trống rỗng, ngước lên thấy bầu trời.",
            lookalikes: [
              { char: "室", hanViet: "THẤT", diff: "Phía trên là bộ Miên (宀), phía dưới là chữ Chí (至)" },
              { char: "窓", hanViet: "SONG", diff: "Cũng có bộ Huyệt (穴) ở trên nhưng dưới là chữ Tâm (心)" }
            ],
            words: [
              { word: "空", reading: "そら", hanViet: "KHÔNG", meaning: "Bầu trời", level: "N5", type: "kun" },
              { word: "空気", reading: "くうき", hanViet: "KHÔNG KHÍ", meaning: "Không khí, bầu không khí", level: "N4", type: "on" },
              { word: "空港", reading: "くうこう", hanViet: "KHÔNG CẢNG", meaning: "Sân bay", level: "N4", type: "on" },
              { word: "空く", reading: "あく", hanViet: "KHÔNG", meaning: "Trống, vắng, đói (bụng)", level: "N4", type: "kun" },
              { word: "空手", reading: "からて", hanViet: "KHÔNG THỦ", meaning: "Võ Karate", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "青い 空を 見上げると 気もちが いいです。",
                reading: "あおい そらを みあげると きもちが いいです。",
                vi: "Ngước nhìn bầu trời xanh thấy thật dễ chịu."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "山の 【空気】は とても きれいです。",
                target: "空気",
                answer: "くうき",
                options: ["くうき", "そらき", "てんき", "げんき"],
                hint: "Không khí (KHÔNG KHÍ)."
              },
              {
                type: "kanji",
                question: "おなかが 【あきました】ね。",
                target: "あきました",
                answer: "空きました",
                options: ["空きました", "開きました", "明きました", "飽きました"],
                hint: "Bụng trống rỗng / đói bụng (dùng chữ KHÔNG)."
              }
            ]
          },
          {
            char: "星",
            hanViet: "TINH",
            meaning: "Ngôi sao, hành tinh",
            strokes: 9,
            onyomi: ["セイ", "ショウ"],
            kunyomi: ["ほし"],
            radical: "日 (Nhật - Mặt trời)",
            components: "日 (Mặt trời) + 生 (Sinh ra)",
            mnemonic: "Từ ánh sáng mặt trời (日) sinh ra (生) muôn vàn vì TINH tú / ngôi sao (星).",
            lookalikes: [
              { char: "晴", hanViet: "TÌNH", diff: "Bộ Nhật (日) nằm bên trái, bên phải là chữ Thanh (青)" },
              { char: "早", hanViet: "TẢO", diff: "Phía dưới bộ Nhật chỉ là chữ Thập (十)" }
            ],
            words: [
              { word: "星", reading: "ほし", hanViet: "TINH", meaning: "Ngôi sao", level: "N4", type: "kun" },
              { word: "星空", reading: "ほしぞら", hanViet: "TINH KHÔNG", meaning: "Bầu trời đầy sao", level: "N4", type: "kun" },
              { word: "流れ星", reading: "ながれぼし", hanViet: "LƯU TINH", meaning: "Sao băng", level: "N4", type: "kun" },
              { word: "火星", reading: "かせい", hanViet: "HỎA TINH", meaning: "Sao Hỏa", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "今夜は 空に 星が たくさん 出て います。",
                reading: "こんやは そらに ほしが たくさん でて います。",
                vi: "Đêm nay trên bầu trời có rất nhiều ngôi sao hiện ra."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "夜、きれいな 【星】を 見ました。",
                target: "星",
                answer: "ほし",
                options: ["ほし", "つき", "そら", "くも"],
                hint: "Ngôi sao trên trời."
              },
              {
                type: "kanji",
                question: "いなかは 【ほしぞら】が うつくしいです。",
                target: "ほしぞら",
                answer: "星空",
                options: ["星空", "青空", "夜空", "晴空"],
                hint: "Bầu trời sao (TINH KHÔNG)."
              }
            ]
          },
          {
            char: "雲",
            hanViet: "VÂN",
            meaning: "Đám mây",
            strokes: 12,
            onyomi: ["ウン"],
            kunyomi: ["くも"],
            radical: "雨 (Vũ - Mưa)",
            components: "雨 (Mưa) + 云 (Nói / Cuộn tròn)",
            mnemonic: "Hơi nước cuộn tròn (云) dưới màn mưa (雨) tạo thành đám mây VÂN (雲).",
            lookalikes: [
              { char: "雪", hanViet: "TUYẾT", diff: "Phía dưới bộ Vũ (雨) là chữ Kệ (ヨ) - bàn tay quét tuyết" },
              { char: "電", hanViet: "ĐIỆN", diff: "Phía dưới bộ Vũ là chữ Điền có đuôi móc câu" }
            ],
            words: [
              { word: "雲", reading: "くも", hanViet: "VÂN", meaning: "Đám mây", level: "N4", type: "kun" },
              { word: "雨雲", reading: "あまぐも", hanViet: "VŨ VÂN", meaning: "Mây mưa", level: "N4", type: "kun" },
              { word: "黒雲", reading: "くろぐも", hanViet: "HẮC VÂN", meaning: "Mây đen", level: "N4", type: "kun" },
              { word: "雲海", reading: "うんかい", hanViet: "VÂN HẢI", meaning: "Biển mây", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "空に 白い 雲が うかんで います。",
                reading: "そらに しろい くもが うかんで います。",
                vi: "Trên bầu trời có những đám mây trắng đang trôi bồng bềnh."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "黒い 【雲】が 出て きました。",
                target: "雲",
                answer: "くも",
                options: ["くも", "ゆき", "ほし", "かぜ"],
                hint: "Đám mây."
              },
              {
                type: "kanji",
                question: "今日は 【くも】が 一つも ありません。",
                target: "くも",
                answer: "雲",
                options: ["雲", "雪", "電", "雷"],
                hint: "Chữ VÂN (đám mây)."
              }
            ]
          },
          {
            char: "去",
            hanViet: "KHỨ",
            meaning: "Quá khứ, rời đi, trôi qua",
            strokes: 5,
            onyomi: ["キョ", "コ"],
            kunyomi: ["さ.る"],
            radical: "厶 (Khư - Riêng tư)",
            components: "土 (Đất) + 厶 (Riêng tư)",
            mnemonic: "Vùi lấp xuống đất (土) những chuyện riêng tư (厶) để nó trở thành quá KHỨ (去).",
            lookalikes: [
              { char: "法", hanViet: "PHÁP", diff: "Có thêm bộ Thủy (氵) ở bên trái" },
              { char: "吉", hanViet: "CÁT", diff: "Phía dưới là bộ Khẩu (口) chứ không phải bộ Khư (厶)" }
            ],
            words: [
              { word: "去年", reading: "きょねん", hanViet: "KHỨ NIÊN", meaning: "Năm ngoái", level: "N5", type: "on" },
              { word: "過去", reading: "かこ", hanViet: "QUÁ KHỨ", meaning: "Quá khứ", level: "N4", type: "on" },
              { word: "去る", reading: "さる", hanViet: "KHỨ", meaning: "Rời đi, qua đi", level: "N4", type: "kun" },
              { word: "消去", reading: "しょうきょ", hanViet: "TIÊU KHỨ", meaning: "Xóa bỏ", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "去年の 冬は 雪が たくさん ふりました。",
                reading: "きょねんの ふゆは ゆきが たくさん ふりました。",
                vi: "Mùa đông năm ngoái tuyết đã rơi rất nhiều."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "【去年】、日本へ 来ました。",
                target: "去年",
                answer: "きょねん",
                options: ["きょねん", "さくねん", "こねん", "らいねん"],
                hint: "Năm ngoái (KHỨ NIÊN)."
              },
              {
                type: "kanji",
                question: "【かこ】の ことは わすれましょう。",
                target: "かこ",
                answer: "過去",
                options: ["過去", "過法", "回去", "通去"],
                hint: "Quá khứ (QUÁ KHỨ)."
              }
            ]
          }
        ]
      },
      {
        id: "7-2",
        number: 2,
        titleJp: "天気",
        reading: "てんき",
        titleVi: "Thời tiết",
        kanjiList: [
          {
            char: "天",
            hanViet: "THIÊN",
            meaning: "Bầu trời, thiên nhiên",
            strokes: 4,
            onyomi: ["テン"],
            kunyomi: ["あま", "あめ"],
            radical: "大 (Đại - To lớn)",
            components: "一 (Một) + 大 (To lớn)",
            mnemonic: "Khoảng không gian duy nhất (一) nằm trên đầu người to lớn (大) chính là bầu trời THIÊN (天).",
            lookalikes: [
              { char: "夫", hanViet: "PHU", diff: "Nét phẩy xuyên lên trên nét ngang đầu tiên" },
              { char: "矢", hanViet: "THỈ", diff: "Có nét phẩy ngắn ở góc trên bên trái" }
            ],
            words: [
              { word: "天気", reading: "てんき", hanViet: "THIÊN KHÍ", meaning: "Thời tiết", level: "N5", type: "on" },
              { word: "天気予報", reading: "てんきよほう", hanViet: "THIÊN KHÍ DỰ BÁO", meaning: "Dự báo thời tiết", level: "N4", type: "on" },
              { word: "天ぷら", reading: "てんぷら", hanViet: "THIÊN", meaning: "Món Tempura (tẩm bột chiên)", level: "N4", type: "on" },
              { word: "天才", reading: "てんさい", hanViet: "THIÊN TÀI", meaning: "Thiên tài", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "あしたは いい 天気に なるでしょう。",
                reading: "あしたは いい てんきに なるでしょう。",
                vi: "Ngày mai chắc thời tiết sẽ đẹp."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "まいあさ 【天気】よほうを 見ます。",
                target: "天気",
                answer: "てんき",
                options: ["てんき", "げんき", "でんき", "くうき"],
                hint: "Thời tiết (THIÊN KHÍ)."
              },
              {
                type: "kanji",
                question: "かれは ほんとうに 【てんさい】ですね。",
                target: "てんさい",
                answer: "天才",
                options: ["天才", "夫才", "大才", "天歳"],
                hint: "Thiên tài (THIÊN TÀI)."
              }
            ]
          },
          {
            char: "晴",
            hanViet: "TÌNH",
            meaning: "Trời nắng, quang đãng",
            strokes: 12,
            onyomi: ["セイ"],
            kunyomi: ["は.れる", "は.れ"],
            radical: "日 (Nhật - Mặt trời)",
            components: "日 (Mặt trời) + 青 (Màu xanh)",
            mnemonic: "Có mặt trời (日) tỏa nắng trên bầu trời trong xanh (青) là ngày nắng đẹp, quang TÌNH (晴).",
            lookalikes: [
              { char: "時", hanViet: "THỜI", diff: "Bên phải là chữ Tự (寺 - ngôi chùa)" },
              { char: "精", hanViet: "TINH", diff: "Bên trái là bộ Mễ (米 - hạt gạo)" }
            ],
            words: [
              { word: "晴れ", reading: "はれ", hanViet: "TÌNH", meaning: "Trời nắng, quang đãng", level: "N5", type: "kun" },
              { word: "晴れる", reading: "はれる", hanViet: "TÌNH", meaning: "Trời hửng nắng, tạnh ráo", level: "N5", type: "kun" },
              { word: "快晴", reading: "かいせい", hanViet: "KHOÁI TÌNH", meaning: "Trời quang mây tạnh", level: "N4", type: "on" },
              { word: "素晴らしい", reading: "すばらしい", hanViet: "TỐ TÌNH", meaning: "Tuyệt vời", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "雨が やんで、だんだん 晴れて きました。",
                reading: "あめが やんで、だんだん はれて きました。",
                vi: "Mưa đã tạnh và trời dần hửng nắng."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "あしたは 【晴れ】のち くもりです。",
                target: "晴れ",
                answer: "はれ",
                options: ["はれ", "あめ", "くもり", "ゆき"],
                hint: "Trời nắng, quang đãng."
              },
              {
                type: "kanji",
                question: "ごごから 【はれる】でしょう。",
                target: "はれる",
                answer: "晴れる",
                options: ["晴れる", "時れる", "青れる", "星れる"],
                hint: "Chữ TÌNH (日 + 青)."
              }
            ]
          },
          {
            char: "雪",
            hanViet: "TUYẾT",
            meaning: "Tuyết",
            strokes: 11,
            onyomi: ["セツ"],
            kunyomi: ["ゆき"],
            radical: "雨 (Vũ - Mưa)",
            components: "雨 (Mưa) + ヨ (Bàn tay cầm chổi)",
            mnemonic: "Mưa (雨) đông cứng lại đến mức có thể dùng tay cầm chổi (ヨ) quét được chính là TUYẾT (雪).",
            lookalikes: [
              { char: "雲", hanViet: "VÂN", diff: "Phía dưới là chữ Vân (云) chứ không phải bộ Kệ (ヨ)" },
              { char: "電", hanViet: "ĐIỆN", diff: "Phía dưới là chữ Điền kéo đuôi móc" }
            ],
            words: [
              { word: "雪", reading: "ゆき", hanViet: "TUYẾT", meaning: "Tuyết", level: "N5", type: "kun" },
              { word: "大雪", reading: "おおゆき", hanViet: "ĐẠI TUYẾT", meaning: "Tuyết rơi dày, bão tuyết", level: "N4", type: "kun" },
              { word: "雪だるま", reading: "ゆきだるま", hanViet: "TUYẾT", meaning: "Người tuyết", level: "N4", type: "kun" },
              { word: "新雪", reading: "しんせつ", hanViet: "TÂN TUYẾT", meaning: "Tuyết mới rơi", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "けさから 雪が ふって います。",
                reading: "けさから ゆきが ふって います。",
                vi: "Tuyết đang rơi từ sáng nay."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "山の上は 白い 【雪】が つもって います。",
                target: "雪",
                answer: "ゆき",
                options: ["ゆき", "くも", "あめ", "かぜ"],
                hint: "Tuyết trắng."
              },
              {
                type: "kanji",
                question: "こどもと 【ゆき】だるまを 作りました。",
                target: "ゆき",
                answer: "雪",
                options: ["雪", "雲", "雨", "雷"],
                hint: "Chữ TUYẾT."
              }
            ]
          },
          {
            char: "風",
            hanViet: "PHONG",
            meaning: "Cơn gió, phong cách",
            strokes: 9,
            onyomi: ["フウ", "フ"],
            kunyomi: ["かぜ", "かざ"],
            radical: "風 (Phong - Gió)",
            components: "几 (Cánh buồm) + 虫 (Côn trùng)",
            mnemonic: "Cánh buồm (几) căng lên mang theo cả côn trùng (虫) bay đi trong cơn gió PHONG (風).",
            lookalikes: [
              { char: "嵐", hanViet: "LAM", diff: "Có thêm bộ Sơn (山) ở phía trên, nghĩa là bão tố" },
              { char: "凪", hanViet: "CHỈ", diff: "Bên trong là chữ Chỉ (止), nghĩa là lặng gió" }
            ],
            words: [
              { word: "風", reading: "かぜ", hanViet: "PHONG", meaning: "Gió", level: "N5", type: "kun" },
              { word: "台風", reading: "たいふう", hanViet: "ĐÀI PHONG", meaning: "Bão", level: "N4", type: "on" },
              { word: "風邪", reading: "かぜ", hanViet: "PHONG TÀ", meaning: "Cảm cúm", level: "N4", type: "kun" },
              { word: "お風呂", reading: "おふろ", hanViet: "PHONG LỮ", meaning: "Bồn tắm, nhà tắm", level: "N5", type: "on" },
              { word: "和風", reading: "わふう", hanViet: "HÒA PHONG", meaning: "Phong cách Nhật Bản", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "今日は 風が つよいですから、気をつけて ください。",
                reading: "きょうは かぜが つよいですから、きをつけて ください。",
                vi: "Hôm nay gió mạnh nên xin hãy cẩn thận."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "【台風】が 来て いるので、学校は 休みです。",
                target: "台風",
                answer: "たいふう",
                options: ["たいふう", "たいかぜ", "だいふう", "だいかぜ"],
                hint: "Cơn bão (ĐÀI PHONG)."
              },
              {
                type: "kanji",
                question: "すずしい 【かぜ】が ふいて います。",
                target: "かぜ",
                answer: "風",
                options: ["風", "雲", "雨", "雪"],
                hint: "Chữ PHONG (cơn gió)."
              }
            ]
          },
          {
            char: "強",
            hanViet: "CƯỜNG, CƯỠNG",
            meaning: "Mạnh mẽ, ép buộc",
            strokes: 11,
            onyomi: ["キョウ", "ゴウ"],
            kunyomi: ["つよ.い", "つよ.まる", "し.いる"],
            radical: "弓 (Cung - Cây cung)",
            components: "弓 (Cây cung) + 厶 (Riêng) + 虫 (Sâu bọ)",
            mnemonic: "Cây cung (弓) bắn mạnh đến nỗi xuyên qua cả côn trùng (虫) thể hiện sức mạnh CƯỜNG (強).",
            lookalikes: [
              { char: "弱", hanViet: "NHƯỢC", diff: "Có hai bộ Cung và các nét chấm, nghĩa là yếu ớt" },
              { char: "引", hanViet: "DẪN", diff: "Bên phải chỉ là một nét sổ thẳng" }
            ],
            words: [
              { word: "強い", reading: "つよい", hanViet: "CƯỜNG", meaning: "Mạnh mẽ", level: "N5", type: "kun" },
              { word: "勉強", reading: "べんきょう", hanViet: "MIỄN CƯỜNG", meaning: "Học tập", level: "N5", type: "on" },
              { word: "強風", reading: "きょうふう", hanViet: "CƯỜNG PHONG", meaning: "Gió mạnh", level: "N4", type: "on" },
              { word: "強調", reading: "きょうちょう", hanViet: "CƯỜNG ĐIỆU", meaning: "Nhấn mạnh", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "かれは スポーツが できて、体が 強いです。",
                reading: "かれは スポーツが できて、からだが つよいです。",
                vi: "Anh ấy chơi thể thao giỏi và có cơ thể khỏe mạnh."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "外は 風が 【強い】です。",
                target: "強い",
                answer: "つよい",
                options: ["つよい", "よわい", "あつい", "さむい"],
                hint: "Mạnh (trái nghĩa với yếu)."
              },
              {
                type: "kanji",
                question: "まいにち 日本語を 【べんきょう】して います。",
                target: "べんきょう",
                answer: "勉強",
                options: ["勉強", "勉弱", "力強", "勉弓"],
                hint: "Học tập (MIỄN CƯỜNG)."
              }
            ]
          },
          {
            char: "弱",
            hanViet: "NHƯỢC",
            meaning: "Yếu ớt, kém",
            strokes: 10,
            onyomi: ["ジャク"],
            kunyomi: ["よわ.い", "よわ.る"],
            radical: "弓 (Cung - Cây cung)",
            components: "弓 (Cây cung) + 冫 (Băng giá / Lông vũ) × 2",
            mnemonic: "Hai cây cung (弓) mảnh như lông vũ hay bị đóng băng (冫) nên rất yếu ớt, nhu NHƯỢC (弱).",
            lookalikes: [
              { char: "強", hanViet: "CƯỜNG", diff: "Bên phải là bộ Khư và bộ Trùng, nghĩa là mạnh" },
              { char: "羽", hanViet: "VŨ", diff: "Không có bộ Cung uốn cong, chỉ là đôi cánh lông vũ" }
            ],
            words: [
              { word: "弱い", reading: "よわい", hanViet: "NHƯỢC", meaning: "Yếu, kém", level: "N4", type: "kun" },
              { word: "弱点", reading: "じゃくてん", hanViet: "NHƯỢC ĐIỂM", meaning: "Điểm yếu, nhược điểm", level: "N4", type: "on" },
              { word: "弱虫", reading: "よわむし", hanViet: "NHƯỢC TRÙNG", meaning: "Kẻ nhát gan, mít ướt", level: "N4", type: "kun" },
              { word: "強弱", reading: "きょうじゃく", hanViet: "CƯỜNG NHƯỢC", meaning: "Mạnh và yếu, độ mạnh yếu", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "わたしは おさけに 弱いです。",
                reading: "わたしは おさけに よわいです。",
                vi: "Tôi uống rượu kém (tửu lượng yếu)."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "いに 【弱い】ので、コーヒーを あまり 飲みません。",
                target: "弱い",
                answer: "よわい",
                options: ["よわい", "つよい", "いたい", "わるい"],
                hint: "Yếu (trái nghĩa với つよい)."
              },
              {
                type: "kanji",
                question: "自分の 【じゃくてん】を 知る ことは 大切です。",
                target: "じゃくてん",
                answer: "弱点",
                options: ["弱点", "強点", "羽点", "欠点"],
                hint: "Điểm yếu (NHƯỢC ĐIỂM)."
              }
            ]
          },
          {
            char: "暑",
            hanViet: "THỬ",
            meaning: "Nóng bức (thời tiết)",
            strokes: 12,
            onyomi: ["ショ"],
            kunyomi: ["あつ.い"],
            radical: "日 (Nhật - Mặt trời)",
            components: "日 (Mặt trời) + 者 (Kẻ, người)",
            mnemonic: "Mặt trời (日) chiếu thẳng xuống đầu người (者) làm thời tiết vô cùng nóng bức THỬ (暑).",
            lookalikes: [
              { char: "署", hanViet: "THỰ", diff: "Phía trên là bộ Võng (罒 - lưới), dùng cho đồn cảnh sát (警察署)" },
              { char: "著", hanViet: "TRỨ", diff: "Phía trên là bộ Thảo (艹 - cỏ)" }
            ],
            words: [
              { word: "暑い", reading: "あつい", hanViet: "THỬ", meaning: "Nóng (thời tiết)", level: "N5", type: "kun" },
              { word: "暑さ", reading: "あつさ", hanViet: "THỬ", meaning: "Cái nóng, độ nóng", level: "N4", type: "kun" },
              { word: "蒸し暑い", reading: "むしあつい", hanViet: "CHƯNG THỬ", meaning: "Nóng bức, oi ả", level: "N4", type: "kun" },
              { word: "暑中見舞い", reading: "しょちゅうみまい", hanViet: "THỬ TRUNG KIẾN VŨ", meaning: "Thiệp hỏi thăm mùa hè", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "今日は きのうより ずっと 暑いです。",
                reading: "きょうは きのうより ずっと あついです。",
                vi: "Hôm nay nóng hơn hôm qua rất nhiều."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "へやが 【暑い】ですから、エアコンを つけましょう。",
                target: "暑い",
                answer: "あつい",
                options: ["あつい", "さむい", "すずしい", "あたたかい"],
                hint: "Thời tiết nóng bức."
              },
              {
                type: "kanji",
                question: "日本の 夏は むし【あつい】です。",
                target: "あつい",
                answer: "暑い",
                options: ["暑い", "熱い", "厚い", "署い"],
                hint: "Nóng về thời tiết (có bộ Nhật 日 ở trên)."
              }
            ]
          },
          {
            char: "寒",
            hanViet: "HÀN",
            meaning: "Lạnh, rét (thời tiết)",
            strokes: 12,
            onyomi: ["カン"],
            kunyomi: ["さむ.い"],
            radical: "宀 (Miên - Mái nhà)",
            components: "宀 (Mái nhà) + 艹 (Cỏ rơm) + 人 (Người) + 冫 (Băng giá)",
            mnemonic: "Trong mái nhà (宀), người (人) đắp đầy cỏ rơm (艹) mà dưới sàn vẫn đóng băng (冫) vì trời giá HÀN (寒).",
            lookalikes: [
              { char: "塞", hanViet: "TẮC", diff: "Phía dưới cùng là bộ Thổ (土) chứ không phải hai chấm băng" },
              { char: "実", hanViet: "THỰC", diff: "Ít nét hơn nhiều, bên dưới là chữ Đầu/Phu" }
            ],
            words: [
              { word: "寒い", reading: "さむい", hanViet: "HÀN", meaning: "Lạnh (thời tiết)", level: "N5", type: "kun" },
              { word: "寒さ", reading: "さむさ", hanViet: "HÀN", meaning: "Cái lạnh", level: "N4", type: "kun" },
              { word: "肌寒い", reading: "はだざむい", hanViet: "CƠ HÀN", meaning: "Se lạnh", level: "N4", type: "kun" },
              { word: "寒気", reading: "さむけ", hanViet: "HÀN KHÍ", meaning: "Cơn ớn lạnh, rùng mình", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "外は 寒いですから、コートを 着て ください。",
                reading: "そとは さむいですから、コートを きて ください。",
                vi: "Bên ngoài trời lạnh nên hãy mặc áo khoác vào."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "だんだん 【寒く】 なって きましたね。",
                target: "寒く",
                answer: "さむく",
                options: ["さむく", "あつく", "つめたく", "すずしく"],
                hint: "Trở nên lạnh (thời tiết)."
              },
              {
                type: "kanji",
                question: "わたしは 【さむい】 きせつが にがてです。",
                target: "さむい",
                answer: "寒い",
                options: ["寒い", "冷い", "凍い", "冬い"],
                hint: "Chữ HÀN (lạnh thời tiết)."
              }
            ]
          }
        ]
      },
      {
        id: "7-3",
        number: 3,
        titleJp: "旅行",
        reading: "りょこう",
        titleVi: "Du lịch",
        kanjiList: [
          {
            char: "旅",
            hanViet: "LỮ",
            meaning: "Chuyến đi, du lịch",
            strokes: 10,
            onyomi: ["リョ"],
            kunyomi: ["たび"],
            radical: "方 (Phương - Phương hướng)",
            components: "方 (Phương hướng) + 𠂉 (Cờ hiệu) + 氏/衣 (Đoàn người)",
            mnemonic: "Đi theo lá cờ chỉ phương hướng (方) cùng đoàn người đi du lịch LỮ hành (旅).",
            lookalikes: [
              { char: "族", hanViet: "TỘC", diff: "Bên phải phía dưới là chữ Thỉ (矢 - mũi tên), nghĩa là gia tộc" },
              { char: "放", hanViet: "PHÓNG", diff: "Bên phải là bộ Phộc (攵), nghĩa là thả ra" }
            ],
            words: [
              { word: "旅行", reading: "りょこう", hanViet: "LỮ HÀNH", meaning: "Du lịch", level: "N5", type: "on" },
              { word: "旅館", reading: "りょかん", hanViet: "LỮ QUÁN", meaning: "Nhà trọ kiểu Nhật", level: "N4", type: "on" },
              { word: "一人旅", reading: "ひとりたび", hanViet: "NHẤT NHÂN LỮ", meaning: "Du lịch một mình", level: "N4", type: "kun" },
              { word: "旅客機", reading: "りょかくき", hanViet: "LỮ KHÁCH CƠ", meaning: "Máy bay chở khách", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "らいげつ、友だちと 京都へ 旅行に 行きます。",
                reading: "らいげつ、ともだちと きょうとへ りょこうに いきます。",
                vi: "Tháng sau tôi sẽ đi du lịch Kyoto cùng với bạn."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "日本の 【旅館】に とまりたいです。",
                target: "旅館",
                answer: "りょかん",
                options: ["りょかん", "りょこう", "たびかん", "ぞくかん"],
                hint: "Nhà trọ truyền thống Nhật Bản (LỮ QUÁN)."
              },
              {
                type: "kanji",
                question: "かぞくで 北海道へ 【りょこう】しました。",
                target: "りょこう",
                answer: "旅行",
                options: ["旅行", "族行", "放行", "旅交"],
                hint: "Du lịch (LỮ HÀNH)."
              }
            ]
          },
          {
            char: "持",
            hanViet: "TRÌ",
            meaning: "Cầm, nắm, mang, có",
            strokes: 9,
            onyomi: ["ジ"],
            kunyomi: ["も.つ"],
            radical: "扌 (Thủ - Tay)",
            components: "扌 (Tay) + 寺 (Ngôi chùa)",
            mnemonic: "Dùng bàn tay (扌) cầm nắm, duy TRÌ (持) đồ lễ khi đi chùa (寺).",
            lookalikes: [
              { char: "待", hanViet: "ĐÃI", diff: "Bên trái là bộ Xích (彳 - bước chân), nghĩa là chờ đợi" },
              { char: "時", hanViet: "THỜI", diff: "Bên trái là bộ Nhật (日 - mặt trời), nghĩa là thời gian" }
            ],
            words: [
              { word: "持つ", reading: "もつ", hanViet: "TRÌ", meaning: "Cầm, mang, sở hữu", level: "N5", type: "kun" },
              { word: "持っていく", reading: "もっていく", hanViet: "TRÌ HÀNH", meaning: "Mang đi, đem theo", level: "N5", type: "kun" },
              { word: "気持ち", reading: "きもち", hanViet: "KHÍ TRÌ", meaning: "Cảm giác, tâm trạng", level: "N4", type: "kun" },
              { word: "お金持ち", reading: "おかねもち", hanViet: "KIM TRÌ", meaning: "Người giàu có", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "荷物が おもいですから、半分 持ちましょうか。",
                reading: "にもつが おもいですから、はんぶん もちましょうか。",
                vi: "Hành lý nặng quá, để tôi cầm giúp một nửa nhé?"
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "あした パスポートを 【持って】 きて ください。",
                target: "持って",
                answer: "もって",
                options: ["もって", "まって", "とって", "かって"],
                hint: "Mang theo (dùng tay cầm)."
              },
              {
                type: "kanji",
                question: "あたたかい 温泉に 入ると、【きもち】が いいです。",
                target: "きもち",
                answer: "気持ち",
                options: ["気持ち", "気待ち", "気時ち", "気特ち"],
                hint: "Tâm trạng, cảm giác dễ chịu (KHÍ TRÌ)."
              }
            ]
          },
          {
            char: "世",
            hanViet: "THẾ",
            meaning: "Thế giới, cuộc đời, thế hệ",
            strokes: 5,
            onyomi: ["セイ", "セ"],
            kunyomi: ["よ"],
            radical: "一 (Nhất - Số một)",
            components: "卅 (Ba mươi năm = Một thế hệ)",
            mnemonic: "Ba chữ thập (十+十+十 = 30 năm) ghép lại thành một THẾ hệ, một đời người (世).",
            lookalikes: [
              { char: "葉", hanViet: "DIỆP", diff: "Có bộ Thảo (艹) ở trên và bộ Mộc (木) ở dưới, chữ Thế nằm ở giữa" },
              { char: "冊", hanViet: "SÁCH", diff: "Các nét sổ xuyên qua nét ngang, giống thẻ tre buộc lại" }
            ],
            words: [
              { word: "世界", reading: "せかい", hanViet: "THẾ GIỚI", meaning: "Thế giới", level: "N4", type: "on" },
              { word: "世話", reading: "せわ", hanViet: "THẾ THOẠI", meaning: "Chăm sóc, giúp đỡ", level: "N4", type: "on" },
              { word: "世の中", reading: "よのなか", hanViet: "THẾ TRUNG", meaning: "Xã hội, cuộc đời", level: "N4", type: "kun" },
              { word: "世紀", reading: "せいき", hanViet: "THẾ KỶ", meaning: "Thế kỷ", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "世界中の いろいろな 国を 旅行したいです。",
                reading: "せかいじゅうの いろいろな くにを りょこうしたいです。",
                vi: "Tôi muốn đi du lịch nhiều đất nước khắp thế giới."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "日本に いる あいだ、先生に 【世話】に なりました。",
                target: "世話",
                answer: "せわ",
                options: ["せわ", "よわ", "せいわ", "せかい"],
                hint: "Sự chăm sóc, giúp đỡ (THẾ THOẠI)."
              },
              {
                type: "kanji",
                question: "富士山は 【せかい】で 有名な 山です。",
                target: "せかい",
                answer: "世界",
                options: ["世界", "世介", "冊界", "世海"],
                hint: "Thế giới (THẾ GIỚI)."
              }
            ]
          },
          {
            char: "界",
            hanViet: "GIỚI",
            meaning: "Ranh giới, thế giới, giới hạn",
            strokes: 9,
            onyomi: ["カイ"],
            kunyomi: [],
            radical: "田 (Điền - Ruộng)",
            components: "田 (Ruộng) + 介 (Ở giữa / Phân chia)",
            mnemonic: "Phân chia (介) các thửa ruộng (田) bằng những đường ranh GIỚI (界).",
            lookalikes: [
              { char: "思", hanViet: "TƯ", diff: "Phía dưới bộ Điền là bộ Tâm (心)" },
              { char: "男", hanViet: "NAM", diff: "Phía dưới bộ Điền là bộ Lực (力)" }
            ],
            words: [
              { word: "世界", reading: "せかい", hanViet: "THẾ GIỚI", meaning: "Thế giới", level: "N4", type: "on" },
              { word: "世界中", reading: "せかいじゅう", hanViet: "THẾ GIỚI TRUNG", meaning: "Khắp thế giới", level: "N4", type: "on" },
              { word: "限界", reading: "げんかい", hanViet: "HẠN GIỚI", meaning: "Giới hạn", level: "N4", type: "on" },
              { word: "視界", reading: "しかい", hanViet: "THỊ GIỚI", meaning: "Tầm nhìn", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "インターネットで 世界中の ニュースが 分かります。",
                reading: "インターネットで せかいじゅうの ニュースが わかります。",
                vi: "Nhờ có Internet mà có thể biết tin tức khắp thế giới."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "【世界中】の 人と 友だちに なりたいです。",
                target: "世界中",
                answer: "せかいじゅう",
                options: ["せかいじゅう", "せかいなか", "せかいちゅう", "よなかじゅう"],
                hint: "Khắp toàn thế giới."
              },
              {
                type: "kanji",
                question: "ここは 【せかい】遺産に えらばれました。",
                target: "せかい",
                answer: "世界",
                options: ["世界", "世思", "世男", "世胃"],
                hint: "Thế giới (THẾ GIỚI)."
              }
            ]
          },
          {
            char: "写",
            hanViet: "TẢ",
            meaning: "Chụp ảnh, sao chép, miêu tả",
            strokes: 5,
            onyomi: ["シャ"],
            kunyomi: ["うつ.す", "うつ.る"],
            radical: "冖 (Mịch - Khăn trùm)",
            components: "冖 (Khăn trùm máy ảnh) + 与 (Trao tặng)",
            mnemonic: "Trùm khăn lên máy ảnh (冖) để chụp và trao tặng (与) bức hình miêu TẢ (写) cảnh đẹp.",
            lookalikes: [
              { char: "与", hanViet: "DỮ", diff: "Không có bộ Mịch (冖) trùm ở phía trên" },
              { char: "号", hanViet: "HIỆU", diff: "Phía trên là bộ Khẩu (口)" }
            ],
            words: [
              { word: "写真", reading: "しゃしん", hanViet: "TẢ CHÂN", meaning: "Bức ảnh", level: "N5", type: "on" },
              { word: "写す", reading: "うつす", hanViet: "TẢ", meaning: "Chép lại, chụp lại", level: "N4", type: "kun" },
              { word: "写る", reading: "うつる", hanViet: "TẢ", meaning: "Được chụp, in bóng", level: "N4", type: "kun" },
              { word: "写真館", reading: "しゃしんかん", hanViet: "TẢ CHÂN QUÁN", meaning: "Tiệm chụp ảnh", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "旅行の とき、写真を たくさん とりました。",
                reading: "りょこうの とき、しゃしんを たくさん とりました。",
                vi: "Khi đi du lịch tôi đã chụp rất nhiều ảnh."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "黒板の 字を ノートに 【写して】 ください。",
                target: "写して",
                answer: "うつして",
                options: ["うつして", "なおして", "けして", "さがして"],
                hint: "Chép lại vào vở."
              },
              {
                type: "kanji",
                question: "いっしょに 【しゃしん】を とりませんか。",
                target: "しゃしん",
                answer: "写真",
                options: ["写真", "与真", "写直", "写具"],
                hint: "Bức ảnh (TẢ CHÂN)."
              }
            ]
          },
          {
            char: "真",
            hanViet: "CHÂN",
            meaning: "Chân thật, chính giữa",
            strokes: 10,
            onyomi: ["シン"],
            kunyomi: ["ま"],
            radical: "目 (Mục - Con mắt)",
            components: "十 (Mười) + 目 (Con mắt) + 八 (Đôi chân/Bệ đỡ)",
            mnemonic: "Mười (十) con mắt (目) cùng nhìn vào một vật đặt trên bệ (八) để kiểm chứng sự CHÂN thật (真).",
            lookalikes: [
              { char: "直", hanViet: "TRỰC", diff: "Phía dưới là nét sổ ngang vuông góc (L), không có hai chân八" },
              { char: "具", hanViet: "CỤ", diff: "Phía trên không có chữ Thập (十)" }
            ],
            words: [
              { word: "写真", reading: "しゃしん", hanViet: "TẢ CHÂN", meaning: "Bức ảnh", level: "N5", type: "on" },
              { word: "真ん中", reading: "まんなか", hanViet: "CHÂN TRUNG", meaning: "Chính giữa", level: "N4", type: "kun" },
              { word: "真っ白", reading: "まっしろ", hanViet: "CHÂN BẠCH", meaning: "Trắng tinh, trắng xóa", level: "N4", type: "kun" },
              { word: "真面目", reading: "まじめ", hanViet: "CHÂN DIỆN MỤC", meaning: "Nghiêm túc, chăm chỉ", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "テーブルの 真ん中に 花を かざりました。",
                reading: "テーブルの まんなかに はなを かざりました。",
                vi: "Tôi đã trang trí hoa ở chính giữa bàn."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "写真の 【真ん中】に いる 人が わたしの 姉です。",
                target: "真ん中",
                answer: "まんなか",
                options: ["まんなか", "まなか", "しんなか", "まんなが"],
                hint: "Ở chính giữa."
              },
              {
                type: "kanji",
                question: "雪が ふって、外が 【まっしろ】に なりました。",
                target: "まっしろ",
                answer: "真っ白",
                options: ["真っ白", "直っ白", "具っ白", "実っ白"],
                hint: "Trắng tinh (CHÂN BẠCH)."
              }
            ]
          },
          {
            char: "船",
            hanViet: "THUYỀN",
            meaning: "Tàu thủy, con thuyền",
            strokes: 11,
            onyomi: ["セン"],
            kunyomi: ["ふね", "ふな"],
            radical: "舟 (Chu - Con thuyền)",
            components: "舟 (Thuyền nhỏ) + 八 (Tám) + 口 (Miệng người)",
            mnemonic: "Chiếc thuyền (舟) chở được tám (八) người (口) lênh đênh trên biển là con THUYỀN lớn (船).",
            lookalikes: [
              { char: "航", hanViet: "HÀNG", diff: "Bên phải là chữ Khang (亢), nghĩa là hàng hải / bay" },
              { char: "般", hanViet: "BAN", diff: "Bên phải là bộ Thù (殳)" }
            ],
            words: [
              { word: "船", reading: "ふね", hanViet: "THUYỀN", meaning: "Tàu thủy, thuyền", level: "N4", type: "kun" },
              { word: "船便", reading: "ふなびん", hanViet: "THUYỀN TIỆN", meaning: "Gửi hàng đường biển", level: "N4", type: "kun" },
              { word: "風船", reading: "ふうせん", hanViet: "PHONG THUYỀN", meaning: "Bóng bay", level: "N4", type: "on" },
              { word: "黒船", reading: "くろふね", hanViet: "HẮC THUYỀN", meaning: "Tàu đen (trong lịch sử)", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "近くの 島へ 船に 乗って 行きました。",
                reading: "ちかくの しまへ ふねに のって いきました。",
                vi: "Tôi đã đi tàu thủy ra hòn đảo gần đó."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "この 荷物を 【船便】で 送って ください。",
                target: "船便",
                answer: "ふなびん",
                options: ["ふなびん", "ふねびん", "せんびん", "こうびん"],
                hint: "Đường biển (THUYỀN TIỆN)."
              },
              {
                type: "kanji",
                question: "港に 大きな 【ふね】が とまって います。",
                target: "ふね",
                answer: "船",
                options: ["船", "航", "般", "車"],
                hint: "Chữ THUYỀN (tàu thủy)."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 8,
    titleJp: "8章 学校",
    titleVi: "Chương 8: Trường học",
    icon: "🏫",
    lessons: [
      {
        id: "8-1",
        number: 1,
        titleJp: "勉強",
        reading: "べんきょう",
        titleVi: "Học tập",
        kanjiList: [
          {
            char: "勉",
            hanViet: "MIỄN",
            meaning: "Cố gắng, chăm chỉ, nỗ lực",
            strokes: 10,
            onyomi: ["ベン"],
            kunyomi: ["つと.める"],
            radical: "力 (Lực - Sức lực)",
            components: "免 (Tránh khỏi) + 力 (Sức lực)",
            mnemonic: "Dùng hết sức lực (力) để tránh khỏi (免) sự dốt nát chính là chăm chỉ học tập MIỄN (勉).",
            lookalikes: [
              { char: "免", hanViet: "MIỄN", diff: "Không có bộ Lực (力) ở bên phải, nghĩa là miễn trừ" },
              { char: "晩", hanViet: "VÃN", diff: "Có bộ Nhật (日) ở bên trái, không có bộ Lực, nghĩa là buổi tối" }
            ],
            words: [
              { word: "勉強", reading: "べんきょう", hanViet: "MIỄN CƯỜNG", meaning: "Học tập", level: "N5", type: "on" },
              { word: "勉強する", reading: "べんきょうする", hanViet: "MIỄN CƯỜNG", meaning: "Học, nghiên cứu", level: "N5", type: "on" },
              { word: "勤勉", reading: "きんべん", hanViet: "CẦN MIỄN", meaning: "Chăm chỉ, cần cù", level: "N4", type: "on" },
              { word: "猛勉強", reading: "もうべんきょう", hanViet: "MÃNH MIỄN CƯỜNG", meaning: "Học gạo, cày ngày đêm", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "図書館で 日本語の 勉強を します。",
                reading: "としょかんで にほんごの べんきょうを します。",
                vi: "Tôi học tiếng Nhật ở thư viện."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "テストの ために いっしょうけんめい 【勉強】しました。",
                target: "勉強",
                answer: "べんきょう",
                options: ["べんきょう", "めんきょう", "うんどう", "れんしゅう"],
                hint: "Học tập (MIỄN CƯỜNG)."
              },
              {
                type: "kanji",
                question: "まいにち ２時間 【べんきょう】して います。",
                target: "べんきょう",
                answer: "勉強",
                options: ["勉強", "免強", "晩強", "動強"],
                hint: "Chữ MIỄN (có bộ Lực 力 bên phải) + chữ CƯỜNG."
              }
            ]
          },
          {
            char: "漢",
            hanViet: "HÁN",
            meaning: "Nhà Hán, chữ Hán, đàn ông",
            strokes: 13,
            onyomi: ["カン"],
            kunyomi: [],
            radical: "氵 (Thủy - Nước)",
            components: "氵 (Nước) + 艹 (Cỏ) + 口 (Miệng) + 夫 (Người đàn ông)",
            mnemonic: "Bên dòng sông Hán Thủy (氵) có người đàn ông (夫) viết chữ HÁN (漢).",
            lookalikes: [
              { char: "難", hanViet: "NAN", diff: "Bên trái không có bộ Thủy, bên phải là bộ Chuy (隹), nghĩa là khó khăn" },
              { char: "嘆", hanViet: "THÁN", diff: "Bên trái là bộ Khẩu (口), nghĩa là than thở" }
            ],
            words: [
              { word: "漢字", reading: "かんじ", hanViet: "HÁN TỰ", meaning: "Chữ Hán (Kanji)", level: "N5", type: "on" },
              { word: "和漢", reading: "わかん", hanViet: "HÒA HÁN", meaning: "Nhật Bản và Trung Hoa", level: "N4", type: "on" },
              { word: "漢方薬", reading: "かんぽうやく", hanViet: "HÁN PHƯƠNG DƯỢC", meaning: "Thuốc Bắc, thuốc Đông y", level: "N4", type: "on" },
              { word: "門外漢", reading: "もんがいかん", hanViet: "MÔN NGOẠI HÁN", meaning: "Người ngoại đạo, không chuyên", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "毎日 新しい 漢字を ５つ おぼえます。",
                reading: "まいにち あたらしい かんじを いつつ おぼえます。",
                vi: "Mỗi ngày tôi nhớ 5 chữ Kanji mới."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "この 【漢字】の 読み方が 分かりません。",
                target: "漢字",
                answer: "かんじ",
                options: ["かんじ", "ひらがな", "ローマじ", "もじ"],
                hint: "Chữ Hán (HÁN TỰ)."
              },
              {
                type: "kanji",
                question: "日本語の 【かんじ】は おもしろいです。",
                target: "かんじ",
                answer: "漢字",
                options: ["漢字", "難字", "嘆字", "韓字"],
                hint: "Chữ Hán (HÁN TỰ)."
              }
            ]
          },
          {
            char: "宿",
            hanViet: "TÚC",
            meaning: "Trọ lại, nhà trọ",
            strokes: 11,
            onyomi: ["シュク"],
            kunyomi: ["やど", "やど.る"],
            radical: "宀 (Miên - Mái nhà)",
            components: "宀 (Mái nhà) + 亻 (Người) + 百 (Một trăm)",
            mnemonic: "Dưới một mái nhà (宀) có thể cho một trăm (百) người (亻) nghỉ trọ qua đêm TÚC (宿).",
            lookalikes: [
              { char: "縮", hanViet: "SÚC", diff: "Có thêm bộ Mịch (糸) ở bên trái, nghĩa là co rút lại" },
              { char: "定", hanViet: "ĐỊNH", diff: "Bên dưới mái nhà là chữ Chính biến thể" }
            ],
            words: [
              { word: "宿題", reading: "しゅくだい", hanViet: "TÚC ĐỀ", meaning: "Bài tập về nhà", level: "N5", type: "on" },
              { word: "宿", reading: "やど", hanViet: "TÚC", meaning: "Nhà trọ, quán trọ", level: "N4", type: "kun" },
              { word: "宿泊", reading: "しゅくはく", hanViet: "TÚC BẠC", meaning: "Việc nghỉ trọ, lưu trú", level: "N4", type: "on" },
              { word: "下宿", reading: "げしゅく", hanViet: "HẠ TÚC", meaning: "Nhà trọ sinh viên, ở trọ", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "きのうの 晩、宿題を ぜんぶ しました。",
                reading: "きのうの ばん、しゅくだいを ぜんぶ しました。",
                vi: "Tối hôm qua tôi đã làm hết bài tập về nhà."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "先生に 【宿題】を 出しました。",
                target: "宿題",
                answer: "しゅくだい",
                options: ["しゅくだい", "もんだい", "しつもん", "きょうしつ"],
                hint: "Bài tập về nhà (TÚC ĐỀ)."
              },
              {
                type: "kanji",
                question: "きょうは 【しゅくだい】が たくさん あります。",
                target: "しゅくだい",
                answer: "宿題",
                options: ["宿題", "室題", "家題", "定題"],
                hint: "Bài tập về nhà (TÚC ĐỀ)."
              }
            ]
          },
          {
            char: "題",
            hanViet: "ĐỀ",
            meaning: "Đề tài, tiêu đề, vấn đề",
            strokes: 18,
            onyomi: ["ダイ"],
            kunyomi: [],
            radical: "頁 (Hiệt - Trang giấy, đầu)",
            components: "是 (Đúng đắn) + 頁 (Trang giấy / Cái đầu)",
            mnemonic: "Dùng cái đầu (頁) suy nghĩ điều đúng đắn (是) để giải quyết vấn ĐỀ (題).",
            lookalikes: [
              { char: "提", hanViet: "ĐỀ", diff: "Bên trái là bộ Thủ (扌), bên phải là chữ Thị (是), không có bộ Hiệt" },
              { char: "顔", hanViet: "NHAN", diff: "Bên trái là chữ Ngạn (彦), nghĩa là khuôn mặt" }
            ],
            words: [
              { word: "宿題", reading: "しゅくだい", hanViet: "TÚC ĐỀ", meaning: "Bài tập về nhà", level: "N5", type: "on" },
              { word: "問題", reading: "もんだい", hanViet: "VẤN ĐỀ", meaning: "Câu hỏi, vấn đề", level: "N5", type: "on" },
              { word: "話題", reading: "わだい", hanViet: "THOẠI ĐỀ", meaning: "Chủ đề nói chuyện", level: "N4", type: "on" },
              { word: "題名", reading: "だいめい", hanViet: "ĐỀ DANH", meaning: "Tựa đề, tiêu đề", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "この 問題は ちょっと むずかしいです。",
                reading: "この もんだいは ちょっと むずかしいです。",
                vi: "Câu hỏi (vấn đề) này hơi khó một chút."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "テストの 【問題】を よく 読んで ください。",
                target: "問題",
                answer: "もんだい",
                options: ["もんだい", "しゅくだい", "わだい", "だいめい"],
                hint: "Câu hỏi / Vấn đề (VẤN ĐỀ)."
              },
              {
                type: "kanji",
                question: "本の 【だいめい】を わすれて しまいました。",
                target: "だいめい",
                answer: "題名",
                options: ["題名", "提名", "頭名", "顔名"],
                hint: "Tựa đề cuốn sách (ĐỀ DANH)."
              }
            ]
          },
          {
            char: "質",
            hanViet: "CHẤT",
            meaning: "Chất lượng, bản chất, câu hỏi",
            strokes: 15,
            onyomi: ["シツ", "シチ"],
            kunyomi: [],
            radical: "貝 (Bối - Vỏ sò, tiền bạc)",
            components: "斤 (Cái rìu) × 2 + 貝 (Tiền bạc, bảo vật)",
            mnemonic: "Dùng hai cái rìu (斤斤) gọt giũa viên ngọc quý (貝) để kiểm tra CHẤT lượng (質).",
            lookalikes: [
              { char: "賛", hanViet: "TÁN", diff: "Phía trên là hai chữ Phu (夫夫) chứ không phải hai bộ Cân (斤斤)" },
              { char: "貸", hanViet: "THẢI", diff: "Phía trên là chữ Đại (代), nghĩa là cho vay" }
            ],
            words: [
              { word: "質問", reading: "しつもん", hanViet: "CHẤT VẤN", meaning: "Câu hỏi, thắc mắc", level: "N5", type: "on" },
              { word: "質", reading: "しつ", hanViet: "CHẤT", meaning: "Chất lượng", level: "N4", type: "on" },
              { word: "品質", reading: "ひんしつ", hanViet: "PHẨM CHẤT", meaning: "Chất lượng sản phẩm", level: "N4", type: "on" },
              { word: "体質", reading: "たいしつ", hanViet: "THỂ CHẤT", meaning: "Thể chất, cơ địa", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "なにか 質問が ありますか。",
                reading: "なにか しつもんが ありますか。",
                vi: "Các bạn có câu hỏi nào không?"
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "先生に 【質問】しても いいですか。",
                target: "質問",
                answer: "しつもん",
                options: ["しつもん", "もんだい", "しゅくだい", "こたえ"],
                hint: "Đặt câu hỏi (CHẤT VẤN)."
              },
              {
                type: "kanji",
                question: "この みせの 服は 【しつ】が いいです。",
                target: "しつ",
                answer: "質",
                options: ["質", "賛", "室", "貸"],
                hint: "Chất lượng tốt (dùng chữ CHẤT)."
              }
            ]
          },
          {
            char: "問",
            hanViet: "VẤN",
            meaning: "Hỏi, thăm hỏi, vấn đề",
            strokes: 11,
            onyomi: ["モン"],
            kunyomi: ["と.う", "と.い"],
            radical: "口 (Khẩu - Cái miệng)",
            components: "門 (Cánh cổng) + 口 (Cái miệng)",
            mnemonic: "Đứng trước cổng (門) dùng miệng (口) để hỏi thăm VẤN (問).",
            lookalikes: [
              { char: "間", hanViet: "GIAN", diff: "Bên trong cổng là bộ Nhật (日 - mặt trời)" },
              { char: "聞", hanViet: "VĂN", diff: "Bên trong cổng là bộ Nhĩ (耳 - cái tai)" }
            ],
            words: [
              { word: "問題", reading: "もんだい", hanViet: "VẤN ĐỀ", meaning: "Câu hỏi, vấn đề", level: "N5", type: "on" },
              { word: "質問", reading: "しつもん", hanViet: "CHẤT VẤN", meaning: "Câu hỏi, thắc mắc", level: "N5", type: "on" },
              { word: "問い合わせ", reading: "といあわせ", hanViet: "VẤN HỢP", meaning: "Hỏi thông tin, liên hệ", level: "N4", type: "kun" },
              { word: "訪問", reading: "ほうもん", hanViet: "PHỎNG VẤN", meaning: "Viếng thăm", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "分からない ときは、先生に 質問して ください。",
                reading: "わからない ときは、せんせいに しつもんして ください。",
                vi: "Khi không hiểu, xin hãy đặt câu hỏi cho giáo viên."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "つぎの 【問題】に 答えて ください。",
                target: "問題",
                answer: "もんだい",
                options: ["もんだい", "しつもん", "かいとう", "しけん"],
                hint: "Câu hỏi trong bài thi (VẤN ĐỀ)."
              },
              {
                type: "kanji",
                question: "電話で 【といあわせ】を しました。",
                target: "といあわせ",
                answer: "問い合わせ",
                options: ["問い合わせ", "間い合わせ", "聞い合わせ", "開い合わせ"],
                hint: "Hỏi thông tin (VẤN HỢP)."
              }
            ]
          },
          {
            char: "教",
            hanViet: "GIÁO",
            meaning: "Dạy học, chỉ bảo, tôn giáo",
            strokes: 11,
            onyomi: ["キョウ"],
            kunyomi: ["おし.える", "おそ.わる"],
            radical: "攵 (Phộc - Đánh khẽ)",
            components: "孝 (Hiếu thảo) + 攵 (Cầm roi chỉ dạy)",
            mnemonic: "Người thầy cầm thước (攵) dạy dỗ trẻ con lòng hiếu thảo (孝) chính là GIÁO dục (教).",
            lookalikes: [
              { char: "数", hanViet: "SỐ", diff: "Bên trái là chữ Lâu (米 + 女), nghĩa là đếm số" },
              { char: "考", hanViet: "KHẢO", diff: "Chỉ có phần bên trái gần giống chữ Hiếu, không có bộ Phộc (攵)" }
            ],
            words: [
              { word: "教える", reading: "おしえる", hanViet: "GIÁO", meaning: "Dạy, chỉ bảo, cho biết", level: "N5", type: "kun" },
              { word: "教室", reading: "きょうしつ", hanViet: "GIÁO THẤT", meaning: "Phòng học, lớp học", level: "N5", type: "on" },
              { word: "教会", reading: "きょうかい", hanViet: "GIÁO HỘI", meaning: "Nhà thờ", level: "N4", type: "on" },
              { word: "教育", reading: "きょういく", hanViet: "GIÁO DỤC", meaning: "Giáo dục", level: "N4", type: "on" },
              { word: "教科書", reading: "きょうかしょ", hanViet: "GIÁO KHOA THƯ", meaning: "Sách giáo khoa", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "すみませんが、駅の 場所を 教えて ください。",
                reading: "すみませんが、えきの ばしょを おしえて ください。",
                vi: "Xin lỗi, vui lòng chỉ cho tôi chỗ nhà ga với ạ."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "子どもに ピアノを 【教えて】 います。",
                target: "教えて",
                answer: "おしえて",
                options: ["おしえて", "かんがえて", "おぼえて", "こたえて"],
                hint: "Dạy học / Chỉ bảo."
              },
              {
                type: "kanji",
                question: "かばんの 中に 【きょうかしょ】が 入って います。",
                target: "きょうかしょ",
                answer: "教科書",
                options: ["教科書", "数科書", "考科書", "孝科書"],
                hint: "Sách giáo khoa (GIÁO KHOA THƯ)."
              }
            ]
          },
          {
            char: "室",
            hanViet: "THẤT",
            meaning: "Căn phòng",
            strokes: 9,
            onyomi: ["シツ"],
            kunyomi: ["むろ"],
            radical: "宀 (Miên - Mái nhà)",
            components: "宀 (Mái nhà) + 至 (Đi đến)",
            mnemonic: "Đi đến (至) bên dưới mái nhà (宀) để bước vào căn phòng THẤT (室).",
            lookalikes: [
              { char: "屋", hanViet: "ỐC", diff: "Phía trên là bộ Thi (尸) chứ không phải bộ Miên (宀)" },
              { char: "宝", hanViet: "BẢO", diff: "Bên dưới bộ Miên là chữ Ngọc (玉)" }
            ],
            words: [
              { word: "教室", reading: "きょうしつ", hanViet: "GIÁO THẤT", meaning: "Phòng học", level: "N5", type: "on" },
              { word: "会議室", reading: "かいぎしつ", hanViet: "HỘI NGHỊ THẤT", meaning: "Phòng họp", level: "N4", type: "on" },
              { word: "和室", reading: "わしつ", hanViet: "HÒA THẤT", meaning: "Phòng kiểu Nhật", level: "N4", type: "on" },
              { word: "研究室", reading: "けんきゅうしつ", hanViet: "NGHIÊN CỨU THẤT", meaning: "Phòng nghiên cứu", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "わたしたちの 教室は ３階に あります。",
                reading: "わたしたちの きょうしつは さんかいに あります。",
                vi: "Phòng học của chúng tôi ở tầng 3."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "先生の 【研究室】へ 行きました。",
                target: "研究室",
                answer: "けんきゅうしつ",
                options: ["けんきゅうしつ", "かいぎしつ", "きょうしつ", "じむしつ"],
                hint: "Phòng nghiên cứu (NGHIÊN CỨU THẤT)."
              },
              {
                type: "kanji",
                question: "旅館の 【わしつ】に とまりました。",
                target: "わしつ",
                answer: "和室",
                options: ["和室", "和屋", "和質", "和家"],
                hint: "Phòng kiểu Nhật (HÒA THẤT)."
              }
            ]
          }
        ]
      },
      {
        id: "8-2",
        number: 2,
        titleJp: "テスト",
        reading: "テスト",
        titleVi: "Bài kiểm tra",
        kanjiList: [
          {
            char: "試",
            hanViet: "THÍ",
            meaning: "Thử nghiệm, kỳ thi",
            strokes: 13,
            onyomi: ["シ"],
            kunyomi: ["こころ.みる", "ため.す"],
            radical: "言 (Ngôn - Lời nói)",
            components: "言 (Lời nói) + 式 (Cách thức, nghi thức)",
            mnemonic: "Dùng lời nói (言) và quy cách (式) để kiểm tra trong kỳ THÍ (試).",
            lookalikes: [
              { char: "誠", hanViet: "THÀNH", diff: "Bên phải là chữ Thành (成), nghĩa là chân thành" },
              { char: "識", hanViet: "THỨC", diff: "Bên phải là chữ Chức (音 + 戈), nghĩa là kiến thức" }
            ],
            words: [
              { word: "試験", reading: "しけん", hanViet: "THÍ NGHIỆM", meaning: "Kỳ thi, bài kiểm tra", level: "N4", type: "on" },
              { word: "試合", reading: "しあい", hanViet: "THÍ HỢP", meaning: "Trận đấu", level: "N4", type: "on" },
              { word: "試す", reading: "ためす", hanViet: "THÍ", meaning: "Thử, thử nghiệm", level: "N4", type: "kun" },
              { word: "試着", reading: "しちゃく", hanViet: "THÍ TRƯỚC", meaning: "Mặc thử quần áo", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "らいしゅう、日本語の 試験が あります。",
                reading: "らいしゅう、にほんごの しけんが あります。",
                vi: "Tuần sau có kỳ thi tiếng Nhật."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "あしたは サッカーの 【試合】が あります。",
                target: "試合",
                answer: "しあい",
                options: ["しあい", "しけん", "ためあい", "しごう"],
                hint: "Trận đấu thể thao (THÍ HỢP)."
              },
              {
                type: "kanji",
                question: "新しい やり方を 【ためして】 みましょう。",
                target: "ためして",
                answer: "試して",
                options: ["試して", "験して", "話して", "誠して"],
                hint: "Thử nghiệm (chữ THÍ)."
              }
            ]
          },
          {
            char: "験",
            hanViet: "NGHIỆM",
            meaning: "Kiểm nghiệm, kinh nghiệm, thi cử",
            strokes: 18,
            onyomi: ["ケン", "ゲン"],
            kunyomi: [],
            radical: "馬 (Mã - Con ngựa)",
            components: "馬 (Con ngựa) + 僉 (Tất cả mọi người)",
            mnemonic: "Mọi người (僉) cùng cưỡi thử con ngựa (馬) để kiểm NGHIỆM (験) tốc độ của nó.",
            lookalikes: [
              { char: "険", hanViet: "HIỂM", diff: "Bên trái là bộ Phụ (阝 - sườn núi), nghĩa là nguy hiểm" },
              { char: "検", hanViet: "KIỂM", diff: "Bên trái là bộ Mộc (木 - cái cây), nghĩa là kiểm tra" }
            ],
            words: [
              { word: "試験", reading: "しけん", hanViet: "THÍ NGHIỆM", meaning: "Kỳ thi", level: "N4", type: "on" },
              { word: "経験", reading: "けいけん", hanViet: "KINH NGHIỆM", meaning: "Kinh nghiệm", level: "N4", type: "on" },
              { word: "実験", reading: "じっけん", hanViet: "THỰC NGHIỆM", meaning: "Thí nghiệm", level: "N4", type: "on" },
              { word: "受験", reading: "じゅけん", hanViet: "THỤ NGHIỆM", meaning: "Dự thi", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "留学は とても いい 経験に なりました。",
                reading: "りゅうがくは とても いい けいけんに なりました。",
                vi: "Việc du học đã trở thành một kinh nghiệm rất tốt."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "大学に 入る ために 【試験】を 受けます。",
                target: "試験",
                answer: "しけん",
                options: ["しけん", "じっけん", "けいけん", "しあい"],
                hint: "Kỳ thi (THÍ NGHIỆM)."
              },
              {
                type: "kanji",
                question: "仕事の 【けいけん】が ありますか。",
                target: "けいけん",
                answer: "経験",
                options: ["経験", "経険", "経検", "経剣"],
                hint: "Kinh nghiệm (KINH NGHIỆM - có bộ Mã 馬)."
              }
            ]
          },
          {
            char: "答",
            hanViet: "ĐÁP",
            meaning: "Trả lời, đáp án",
            strokes: 12,
            onyomi: ["トウ"],
            kunyomi: ["こた.える", "こた.え"],
            radical: "竹 (Trúc - Cây tre)",
            components: "⺮ (Tre trúc) + 合 (Hợp lại)",
            mnemonic: "Viết lên thẻ tre (⺮) câu trả lời phù hợp (合) với câu hỏi chính là ĐÁP án (答).",
            lookalikes: [
              { char: "算", hanViet: "TOÁN", diff: "Phía dưới bộ Trúc là bộ Mục (目) và bộ củng (廾)" },
              { char: "笑", hanViet: "TIẾU", diff: "Phía dưới bộ Trúc là chữ Yêu (夭), nghĩa là cười" }
            ],
            words: [
              { word: "答える", reading: "こたえる", hanViet: "ĐÁP", meaning: "Trả lời, giải đáp", level: "N4", type: "kun" },
              { word: "答え", reading: "こたえ", hanViet: "ĐÁP", meaning: "Câu trả lời, đáp án", level: "N4", type: "kun" },
              { word: "回答", reading: "かいとう", hanViet: "HỒI ĐÁP", meaning: "Phản hồi, phúc đáp", level: "N4", type: "on" },
              { word: "解答", reading: "かいとう", hanViet: "GIẢI ĐÁP", meaning: "Lời giải, đáp án", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "大きい 声で 質問に 答えて ください。",
                reading: "おおきい こえで しつもんに こたえて ください。",
                vi: "Hãy trả lời câu hỏi bằng giọng to rõ."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "ただしい 【答え】を 一つ えらんで ください。",
                target: "答え",
                answer: "こたえ",
                options: ["こたえ", "とえ", "かんがえ", "おしえ"],
                hint: "Đáp án, câu trả lời."
              },
              {
                type: "kanji",
                question: "アンケートに 【こたえて】 ください。",
                target: "こたえて",
                answer: "答えて",
                options: ["答えて", "合えて", "笑えて", "算えて"],
                hint: "Trả lời (chữ ĐÁP)."
              }
            ]
          },
          {
            char: "考",
            hanViet: "KHẢO",
            meaning: "Suy nghĩ, cân nhắc, tham khảo",
            strokes: 6,
            onyomi: ["コウ"],
            kunyomi: ["かんが.える"],
            radical: "耂 (Lão - Người già)",
            components: "耂 (Người già) + 丂 (Chiếc gậy chống)",
            mnemonic: "Người già (耂) chống gậy (丂) trầm ngâm suy nghĩ, suy KHẢO (考).",
            lookalikes: [
              { char: "老", hanViet: "LÃO", diff: "Phía dưới là chữ Chủy (匕), nghĩa là già" },
              { char: "孝", hanViet: "HIẾU", diff: "Phía dưới là chữ Tử (子 - người con), nghĩa là hiếu thảo" }
            ],
            words: [
              { word: "考える", reading: "かんがえる", hanViet: "KHẢO", meaning: "Suy nghĩ", level: "N4", type: "kun" },
              { word: "考え方", reading: "かんがえかた", hanViet: "KHẢO PHƯƠNG", meaning: "Cách suy nghĩ, quan điểm", level: "N4", type: "kun" },
              { word: "参考", reading: "さんこう", hanViet: "THAM KHẢO", meaning: "Tham khảo", level: "N4", type: "on" },
              { word: "選考", reading: "せんこう", hanViet: "TUYỂN KHẢO", meaning: "Tuyển chọn, xét tuyển", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "しょうらいの ことを よく 考えて います。",
                reading: "しょうらいの ことを よく かんがえて います。",
                vi: "Tôi đang suy nghĩ kỹ về chuyện tương lai."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "もう すこし 時間を かけて 【考えます】。",
                target: "考えます",
                answer: "かんがえます",
                options: ["かんがえます", "こたえます", "おぼえます", "おしえます"],
                hint: "Suy nghĩ."
              },
              {
                type: "kanji",
                question: "この 本は とても 【さんこう】に なります。",
                target: "さんこう",
                answer: "参考",
                options: ["参考", "参老", "参孝", "参教"],
                hint: "Tham khảo (THAM KHẢO)."
              }
            ]
          },
          {
            char: "正",
            hanViet: "CHÍNH, CHÁNH",
            meaning: "Đúng đắn, chính xác, chỉnh sửa",
            strokes: 5,
            onyomi: ["セイ", "ショウ"],
            kunyomi: ["ただ.しい", "ただ.す", "まさ"],
            radical: "止 (Chỉ - Dừng lại)",
            components: "一 (Vạch đích) + 止 (Dừng chân lại)",
            mnemonic: "Dừng chân (止) ngay đúng vạch chuẩn (一) là hoàn toàn CHÍNH xác (正).",
            lookalikes: [
              { char: "止", hanViet: "CHỈ", diff: "Thiếu nét ngang (一) ở trên cùng, nghĩa là dừng lại" },
              { char: "足", hanViet: "TÚC", diff: "Phía trên là bộ Khẩu (口), nghĩa là bàn chân" }
            ],
            words: [
              { word: "正しい", reading: "ただしい", hanViet: "CHÍNH", meaning: "Đúng, chính xác", level: "N4", type: "kun" },
              { word: "お正月", reading: "おしょうがつ", hanViet: "CHÍNH NGUYỆT", meaning: "Tết Nguyên đán, tháng Giêng", level: "N4", type: "on" },
              { word: "正解", reading: "せいかい", hanViet: "CHÍNH GIẢI", meaning: "Đáp án đúng", level: "N4", type: "on" },
              { word: "正直", reading: "しょうじき", hanViet: "CHÍNH TRỰC", meaning: "Thành thật, trung thực", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "正しい 答えに 丸を つけて ください。",
                reading: "ただしい こたえに まるを つけて ください。",
                vi: "Hãy khoanh tròn vào câu trả lời đúng."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "日本の 【お正月】に おもちを 食べます。",
                target: "お正月",
                answer: "おしょうがつ",
                options: ["おしょうがつ", "おせいがつ", "おしょうげつ", "おただしいつき"],
                hint: "Dịp Tết năm mới ở Nhật (CHÍNH NGUYỆT)."
              },
              {
                type: "kanji",
                question: "どれが 【ただしい】か 教えて ください。",
                target: "ただしい",
                answer: "正しい",
                options: ["正しい", "止しい", "定しい", "直しい"],
                hint: "Đúng đắn (chữ CHÍNH)."
              }
            ]
          },
          {
            char: "丸",
            hanViet: "HOÀN",
            meaning: "Hình tròn, viên tròn, trọn vẹn",
            strokes: 3,
            onyomi: ["ガン"],
            kunyomi: ["まる", "まる.い", "まる.める"],
            radical: "丶 (Chủ - Nét chấm)",
            components: "九 (Chín) + 丶 (Nét chấm)",
            mnemonic: "Thêm một nét chấm (丶) vào chữ Cửu (九) để vo thành viên thuốc tròn HOÀN (丸).",
            lookalikes: [
              { char: "九", hanViet: "CỬU", diff: "Không có nét chấm ở giữa, nghĩa là số 9" },
              { char: "凡", hanViet: "PHÀM", diff: "Nét phẩy bên trái thẳng đứng, không cắt qua nét ngang đầu" }
            ],
            words: [
              { word: "丸", reading: "まる", hanViet: "HOÀN", meaning: "Vòng tròn, dấu tròn (đúng)", level: "N4", type: "kun" },
              { word: "丸い", reading: "まるい", hanViet: "HOÀN", meaning: "Tròn", level: "N4", type: "kun" },
              { word: "日の丸", reading: "ひのまる", hanViet: "NHẬT HOÀN", meaning: "Quốc kỳ Nhật Bản", level: "N4", type: "kun" },
              { word: "丸暗記", reading: "まるあんき", hanViet: "HOÀN ÁM KÝ", meaning: "Học thuộc lòng vẹt", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "テストで 百点を とって、大きな 丸を もらいました。",
                reading: "テストで ひゃくてんを とって、おおきな まるを もらいました。",
                vi: "Tôi được 100 điểm bài kiểm tra và nhận được một vòng tròn lớn."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "いい 答えには 【丸】を つけます。",
                target: "丸",
                answer: "まる",
                options: ["まる", "きゅう", "ばつ", "てん"],
                hint: "Dấu tròn."
              },
              {
                type: "kanji",
                question: "今夜は 【まるい】 月が きれいに 見えます。",
                target: "まるい",
                answer: "丸い",
                options: ["丸い", "九い", "凡い", "玉い"],
                hint: "Tròn (chữ HOÀN)."
              }
            ]
          },
          {
            char: "不",
            hanViet: "BẤT",
            meaning: "Không, chẳng (phủ định)",
            strokes: 4,
            onyomi: ["フ", "ブ"],
            kunyomi: [],
            radical: "一 (Nhất - Số một)",
            components: "一 (Mặt đất) + 丩/小 (Mầm cây chưa mọc lên được)",
            mnemonic: "Hạt giống bị chặn dưới mặt đất (一) BẤT (不) thể mọc lên được (nghĩa là không).",
            lookalikes: [
              { char: "下", hanViet: "HẠ", diff: "Nét sổ thẳng từ nét ngang trên cùng, không có nét phẩy trái" },
              { char: "木", hanViet: "MỘC", diff: "Nét sổ xuyên qua nét ngang, là cái cây" }
            ],
            words: [
              { word: "不便", reading: "ふべん", hanViet: "BẤT TIỆN", meaning: "Bất tiện", level: "N4", type: "on" },
              { word: "不安", reading: "ふあん", hanViet: "BẤT AN", meaning: "Lo lắng, bất an", level: "N4", type: "on" },
              { word: "不合格", reading: "ふごうかく", hanViet: "BẤT HỢP CÁCH", meaning: "Thi trượt, không đạt", level: "N4", type: "on" },
              { word: "不足", reading: "ふそく", hanViet: "BẤT TÚC", meaning: "Thiếu hụt", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "ここは 駅から 遠くて、すこし 不便です。",
                reading: "ここは えきから とおくて、すこし ふべんです。",
                vi: "Chỗ này xa nhà ga nên hơi bất tiện một chút."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "初めての 一人暮らしで すこし 【不安】です。",
                target: "不安",
                answer: "ふあん",
                options: ["ふあん", "ふべん", "ふそく", "ふまん"],
                hint: "Lo lắng, bất an (BẤT AN)."
              },
              {
                type: "kanji",
                question: "バスが 少なくて 【ふべん】な ところです。",
                target: "ふべん",
                answer: "不便",
                options: ["不便", "下便", "無便", "非便"],
                hint: "Bất tiện (BẤT TIỆN)."
              }
            ]
          },
          {
            char: "同",
            hanViet: "ĐỒNG",
            meaning: "Giống nhau, cùng nhau",
            strokes: 6,
            onyomi: ["ドウ"],
            kunyomi: ["おな.じ"],
            radical: "口 (Khẩu - Cái miệng)",
            components: "冂 (Khung bao quanh) + 一 (Một) + 口 (Cái miệng)",
            mnemonic: "Trong cùng một nhà (冂), mọi cái miệng (口) đều nói một lời (一) giống nhau ĐỒNG (同).",
            lookalikes: [
              { char: "向", hanViet: "HƯỚNG", diff: "Có nét phẩy ở trên cùng và không có nét ngang trên chữ Khẩu" },
              { char: "周", hanViet: "CHU", diff: "Bên trong có chữ Thổ (土) ở trên chữ Khẩu (口)" }
            ],
            words: [
              { word: "同じ", reading: "おなじ", hanViet: "ĐỒNG", meaning: "Giống nhau, cùng", level: "N5", type: "kun" },
              { word: "同時", reading: "どうじ", hanViet: "ĐỒNG THỜI", meaning: "Cùng lúc, đồng thời", level: "N4", type: "on" },
              { word: "同僚", reading: "どうりょう", hanViet: "ĐỒNG LIÊU", meaning: "Đồng nghiệp", level: "N4", type: "on" },
              { word: "共同", reading: "きょうどう", hanViet: "CỘNG ĐỒNG", meaning: "Chung, hợp tác", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "わたしと 田中さんは 同じ 大学です。",
                reading: "わたしと たなかさんは おなじ だいがくです。",
                vi: "Tôi và anh Tanaka học cùng một trường đại học."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "あの 二人は 【同じ】 誕生日です。",
                target: "同じ",
                answer: "おなじ",
                options: ["おなじ", "どうじ", "にじ", "ちかい"],
                hint: "Giống nhau, cùng một."
              },
              {
                type: "kanji",
                question: "二つの ことを 【どうじ】に するのは むずかしいです。",
                target: "どうじ",
                answer: "同時",
                options: ["同時", "向時", "周時", "回時"],
                hint: "Cùng lúc (ĐỒNG THỜI)."
              }
            ]
          }
        ]
      },
      {
        id: "8-3",
        number: 3,
        titleJp: "社会科",
        reading: "しゃかいか",
        titleVi: "Môn xã hội",
        kanjiList: [
          {
            char: "政",
            hanViet: "CHÍNH",
            meaning: "Chính trị, cai trị, quản lý",
            strokes: 9,
            onyomi: ["セイ", "ショウ"],
            kunyomi: ["まつりごと"],
            radical: "攵 (Phộc - Đánh khẽ)",
            components: "正 (Đúng đắn) + 攵 (Hành động thúc đẩy)",
            mnemonic: "Hành động (攵) để giữ cho xã hội đi đúng đường (正) gọi là làm CHÍNH trị (政).",
            lookalikes: [
              { char: "故", hanViet: "CỐ", diff: "Bên trái là chữ Cổ (古), nghĩa là nguyên cớ, sự cố" },
              { char: "改", hanViet: "CẢI", diff: "Bên trái là chữ Kỷ (己), nghĩa là sửa đổi" }
            ],
            words: [
              { word: "政治", reading: "せいじ", hanViet: "CHÍNH TRỊ", meaning: "Chính trị", level: "N4", type: "on" },
              { word: "政府", reading: "せいふ", hanViet: "CHÍNH PHỦ", meaning: "Chính phủ", level: "N4", type: "on" },
              { word: "政治家", reading: "せいじか", hanViet: "CHÍNH TRỊ GIA", meaning: "Chính trị gia", level: "N4", type: "on" },
              { word: "行政", reading: "ぎょうせい", hanViet: "HÀNH CHÍNH", meaning: "Hành chính", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "大学で 政治と 経済を 勉強して います。",
                reading: "だいがくで せいじと けいざいを べんきょうして います。",
                vi: "Tôi đang học ngành chính trị và kinh tế ở trường đại học."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "父は 【政治】の ニュースを よく 見ます。",
                target: "政治",
                answer: "せいじ",
                options: ["せいじ", "けいざい", "れきし", "しゃかい"],
                hint: "Chính trị (CHÍNH TRỊ)."
              },
              {
                type: "kanji",
                question: "新しい 【せいふ】が できました。",
                target: "せいふ",
                answer: "政府",
                options: ["政府", "正府", "故府", "改府"],
                hint: "Chính phủ (CHÍNH PHỦ)."
              }
            ]
          },
          {
            char: "治",
            hanViet: "TRỊ, TRÌ",
            meaning: "Cai trị, chữa trị, bình yên",
            strokes: 8,
            onyomi: ["ジ", "チ"],
            kunyomi: ["なお.る", "なお.す", "おさ.める"],
            radical: "氵 (Thủy - Nước)",
            components: "氵 (Dòng nước) + 台 (Cái bệ / Đê điều)",
            mnemonic: "Đắp đê đài (台) để chế ngự dòng nước lũ (氵) chính là TRỊ thủy, cai TRỊ (治).",
            lookalikes: [
              { char: "始", hanViet: "THỦY", diff: "Bên trái là bộ Nữ (女), nghĩa là bắt đầu" },
              { char: "活", hanViet: "HOẠT", diff: "Bên phải là chữ Thiệt (舌 - cái lưỡi), nghĩa là sinh hoạt" }
            ],
            words: [
              { word: "政治", reading: "せいじ", hanViet: "CHÍNH TRỊ", meaning: "Chính trị", level: "N4", type: "on" },
              { word: "治る", reading: "なおる", hanViet: "TRỊ", meaning: "Khỏi bệnh, lành vết thương", level: "N4", type: "kun" },
              { word: "治す", reading: "なおす", hanViet: "TRỊ", meaning: "Chữa bệnh, điều trị", level: "N4", type: "kun" },
              { word: "治療", reading: "ちりょう", hanViet: "TRỊ LIỆU", meaning: "Điều trị y tế", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "薬を 飲んだら、かぜが 治りました。",
                reading: "くすりを のんだら、かぜが なおりました。",
                vi: "Sau khi uống thuốc thì bệnh cảm đã khỏi."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "歯を 【治して】 もらいに 病院へ 行きます。",
                target: "治して",
                answer: "なおして",
                options: ["なおして", "こわして", "さがして", "うつして"],
                hint: "Chữa trị (răng, bệnh)."
              },
              {
                type: "kanji",
                question: "びょうきが はやく 【なおる】と いいですね。",
                target: "なおる",
                answer: "治る",
                options: ["治る", "直る", "始る", "活る"],
                hint: "Khỏi bệnh (dùng chữ TRỊ có bộ Thủy)."
              }
            ]
          },
          {
            char: "経",
            hanViet: "KINH",
            meaning: "Trải qua, kinh tế, kinh nghiệm",
            strokes: 11,
            onyomi: ["ケイ", "キョウ"],
            kunyomi: ["へ.る", "た.つ"],
            radical: "糸 (Mịch - Sợi tơ)",
            components: "糸 (Sợi tơ) + 圣 (Tay căng sợi dọc trên khung cửi + Đất)",
            mnemonic: "Sợi tơ dọc (糸) xuyên suốt khung vải, trải qua thời gian tích lũy thành KINH nghiệm (経).",
            lookalikes: [
              { char: "軽", hanViet: "KHINH", diff: "Bên trái là bộ Xa (車 - chiếc xe), nghĩa là nhẹ" },
              { char: "続", hanViet: "TỤC", diff: "Bên phải là chữ Mại (売), nghĩa là tiếp tục" }
            ],
            words: [
              { word: "経済", reading: "けいざい", hanViet: "KINH TẾ", meaning: "Kinh tế", level: "N4", type: "on" },
              { word: "経験", reading: "けいけん", hanViet: "KINH NGHIỆM", meaning: "Kinh nghiệm", level: "N4", type: "on" },
              { word: "経営", reading: "けいえい", hanViet: "KINH DOANH", meaning: "Quản lý, kinh doanh", level: "N4", type: "on" },
              { word: "経つ", reading: "たつ", hanViet: "KINH", meaning: "(Thời gian) trôi qua", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "日本へ 来てから ３年が 経ちました。",
                reading: "にほんへ きてから さんねんが たちました。",
                vi: "Đã 3 năm trôi qua kể từ khi tôi đến Nhật."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "日本の 【経済】に ついて レポートを 書きます。",
                target: "経済",
                answer: "けいざい",
                options: ["けいざい", "けいけん", "せいじ", "れきし"],
                hint: "Kinh tế (KINH TẾ)."
              },
              {
                type: "kanji",
                question: "父は レストランを 【けいえい】して います。",
                target: "けいえい",
                answer: "経営",
                options: ["経営", "軽営", "続営", "絵営"],
                hint: "Kinh doanh, quản lý (KINH DOANH)."
              }
            ]
          },
          {
            char: "済",
            hanViet: "TẾ",
            meaning: "Xong xuôi, cứu giúp, kinh tế",
            strokes: 11,
            onyomi: ["サイ", "ザイ"],
            kunyomi: ["す.む", "す.ます"],
            radical: "氵 (Thủy - Nước)",
            components: "氵 (Nước) + 斉 (Đều đặn, chỉnh tề)",
            mnemonic: "Cùng nhau vượt qua dòng nước (氵) một cách chỉnh tề (斉) là công việc đã xong xuôi, kinh TẾ (済).",
            lookalikes: [
              { char: "斉", hanViet: "TỀ", diff: "Không có bộ Thủy (氵) ở bên trái" },
              { char: "清", hanViet: "THANH", diff: "Bên phải là chữ Thanh (青), nghĩa là trong sạch" }
            ],
            words: [
              { word: "経済", reading: "けいざい", hanViet: "KINH TẾ", meaning: "Kinh tế", level: "N4", type: "on" },
              { word: "済む", reading: "すむ", hanViet: "TẾ", meaning: "Xong, kết thúc, hoàn tất", level: "N4", type: "kun" },
              { word: "済ませる", reading: "すませる", hanViet: "TẾ", meaning: "Làm cho xong, hoàn thành", level: "N4", type: "kun" },
              { word: "返済", reading: "へんさい", hanViet: "HOÀN TẾ", meaning: "Trả nợ, hoàn trả", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "宿題が 済んだら、あそびに 行きましょう。",
                reading: "しゅくだいが すんだら、あそびに いきましょう。",
                vi: "Sau khi làm xong bài tập về nhà, chúng ta hãy đi chơi nhé."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "食事を はやく 【済ませて】 出かけました。",
                target: "済ませて",
                answer: "すませて",
                options: ["すませて", "あわせて", "まかせて", "きかせて"],
                hint: "Làm cho xong (bữa ăn, công việc)."
              },
              {
                type: "kanji",
                question: "世界の 【けいざい】が 変わって います。",
                target: "けいざい",
                answer: "経済",
                options: ["経済", "経斉", "経清", "経消"],
                hint: "Kinh tế (KINH TẾ)."
              }
            ]
          },
          {
            char: "歴",
            hanViet: "LỊCH",
            meaning: "Trải qua, lịch sử, lý lịch",
            strokes: 14,
            onyomi: ["レキ"],
            kunyomi: [],
            radical: "止 (Chỉ - Dừng chân)",
            components: "厂 (Sườn núi) + 林 (Rừng cây) + 止 (Bước chân)",
            mnemonic: "Bước chân (止) đi qua những cánh rừng (林) và vách núi (厂) tạo nên bề dày LỊCH sử (歴).",
            lookalikes: [
              { char: "暦", hanViet: "LỊCH", diff: "Phía dưới là bộ Nhật (日 - mặt trời), nghĩa là tờ lịch ngày tháng" },
              { char: "圧", hanViet: "ÁP", diff: "Bên trong bộ Hán (厂) chỉ là bộ Thổ (土)" }
            ],
            words: [
              { word: "歴史", reading: "れきし", hanViet: "LỊCH SỬ", meaning: "Lịch sử", level: "N4", type: "on" },
              { word: "履歴書", reading: "りれきしょ", hanViet: "LÝ LỊCH THƯ", meaning: "Sơ yếu lý lịch (CV)", level: "N4", type: "on" },
              { word: "学歴", reading: "がくれき", hanViet: "HỌC LỊCH", meaning: "Trình độ học vấn", level: "N4", type: "on" },
              { word: "経歴", reading: "けいれき", hanViet: "KINH LỊCH", meaning: "Quá trình công tác, tiểu sử", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "京都は ふるい 歴史が ある 町です。",
                reading: "きょうとは ふるい れきしが ある まちです。",
                vi: "Kyoto là một thành phố có lịch sử lâu đời."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "アルバイトの 面接に 【履歴書】を 持って いきます。",
                target: "履歴書",
                answer: "りれきしょ",
                options: ["りれきしょ", "れきししょ", "きょうかしょ", "さんこうしょ"],
                hint: "Bản sơ yếu lý lịch (LÝ LỊCH THƯ)."
              },
              {
                type: "kanji",
                question: "日本の 【れきし】に きょうみが あります。",
                target: "れきし",
                answer: "歴史",
                options: ["歴史", "暦史", "歴使", "圧史"],
                hint: "Lịch sử (LỊCH SỬ)."
              }
            ]
          },
          {
            char: "史",
            hanViet: "SỬ",
            meaning: "Lịch sử, sử sách",
            strokes: 5,
            onyomi: ["シ"],
            kunyomi: [],
            radical: "口 (Khẩu - Cái miệng)",
            components: "中 (Ở giữa) + 又 (Bàn tay cầm bút)",
            mnemonic: "Bàn tay (又) cầm bút ghi chép công tâm ở giữa (中) để lưu lại SỬ sách (史).",
            lookalikes: [
              { char: "吏", hanViet: "LẠI", diff: "Có thêm một nét ngang ở trên cùng, nghĩa là quan lại" },
              { char: "使", hanViet: "SỬ", diff: "Có bộ Nhân đứng (亻) bên trái và chữ Lại ở bên phải, nghĩa là sử dụng" }
            ],
            words: [
              { word: "歴史", reading: "れきし", hanViet: "LỊCH SỬ", meaning: "Lịch sử", level: "N4", type: "on" },
              { word: "日本史", reading: "にほんし", hanViet: "NHẬT BẢN SỬ", meaning: "Lịch sử Nhật Bản", level: "N4", type: "on" },
              { word: "世界史", reading: "せかいし", hanViet: "THẾ GIỚI SỬ", meaning: "Lịch sử thế giới", level: "N4", type: "on" },
              { word: "史上", reading: "しじょう", hanViet: "SỬ THƯỢNG", meaning: "Trong lịch sử", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "高校の とき、世界史が 好きでした。",
                reading: "こうこうの とき、せかいしが すきでした。",
                vi: "Thời cấp 3, tôi rất thích môn Lịch sử thế giới."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "大学で 【日本史】を 研究して います。",
                target: "日本史",
                answer: "にほんし",
                options: ["にほんし", "にほんじ", "にほんれき", "にっぽんし"],
                hint: "Lịch sử Nhật Bản (NHẬT BẢN SỬ)."
              },
              {
                type: "kanji",
                question: "この お寺には 長い 【れきし】が あります。",
                target: "れきし",
                answer: "歴史",
                options: ["歴史", "歴使", "歴吏", "歴事"],
                hint: "Lịch sử (LỊCH SỬ)."
              }
            ]
          },
          {
            char: "国",
            hanViet: "QUỐC",
            meaning: "Đất nước, quốc gia",
            strokes: 8,
            onyomi: ["コク"],
            kunyomi: ["くに"],
            radical: "囗 (Vi - Vây quanh)",
            components: "囗 (Biên giới bao quanh) + 玉 (Ngọc ấn nhà vua)",
            mnemonic: "Viên ngọc quý của vua (玉) được bảo vệ trong đường biên giới (囗) tạo thành QUỐC gia (国).",
            lookalikes: [
              { char: "団", hanViet: "ĐOÀN", diff: "Bên trong là chữ Thốn (寸), nghĩa là đoàn thể" },
              { char: "困", hanViet: "KHỐN", diff: "Bên trong là chữ Mộc (木), nghĩa là khốn khó" }
            ],
            words: [
              { word: "国", reading: "くに", hanViet: "QUỐC", meaning: "Đất nước, quê hương", level: "N5", type: "kun" },
              { word: "外国", reading: "がいこく", hanViet: "NGOẠI QUỐC", meaning: "Nước ngoài", level: "N5", type: "on" },
              { word: "国際", reading: "こくさい", hanViet: "QUỐC TẾ", meaning: "Quốc tế", level: "N4", type: "on" },
              { word: "国王", reading: "こくおう", hanViet: "QUỐC VƯƠNG", meaning: "Nhà vua, quốc vương", level: "N4", type: "on" },
              { word: "帰国", reading: "きこく", hanViet: "QUY QUỐC", meaning: "Về nước", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "夏休みに 国へ 帰って、かぞくに 会います。",
                reading: "なつやすみに くにへ かえって、かぞくに あいます。",
                vi: "Kỳ nghỉ hè tôi sẽ về nước và gặp gia đình."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "将来、【国際】的な 仕事が したいです。",
                target: "国際",
                answer: "こくさい",
                options: ["こくさい", "がいこく", "くにぎわ", "こくおう"],
                hint: "Quốc tế (QUỐC TẾ)."
              },
              {
                type: "kanji",
                question: "あなたの 【くに】は どちらですか。",
                target: "くに",
                answer: "国",
                options: ["国", "団", "園", "困"],
                hint: "Đất nước (chữ QUỐC)."
              }
            ]
          },
          {
            char: "王",
            hanViet: "VƯƠNG",
            meaning: "Nhà vua, quốc vương",
            strokes: 4,
            onyomi: ["オウ"],
            kunyomi: [],
            radical: "玉 (Ngọc - Đá quý)",
            components: "三 (Trời, Người, Đất) + 丨 (Nét sổ kết nối)",
            mnemonic: "Người đứng giữa kết nối (丨) cả ba cõi Trời - Đất - Người (三) chính là bậc quân VƯƠNG (王).",
            lookalikes: [
              { char: "玉", hanViet: "NGỌC", diff: "Có thêm một dấu chấm (丶) ở góc dưới bên phải" },
              { char: "主", hanViet: "CHỦ", diff: "Có thêm một dấu chấm ở trên đỉnh đầu" }
            ],
            words: [
              { word: "王様", reading: "おうさま", hanViet: "VƯƠNG DẠNG", meaning: "Nhà vua, đức vua", level: "N4", type: "on" },
              { word: "国王", reading: "こくおう", hanViet: "QUỐC VƯƠNG", meaning: "Quốc vương", level: "N4", type: "on" },
              { word: "女王", reading: "じょおう", hanViet: "NỮ VƯƠNG", meaning: "Nữ hoàng", level: "N4", type: "on" },
              { word: "王子", reading: "おうじ", hanViet: "VƯƠNG TỬ", meaning: "Hoàng tử", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "むかし、この 城に 王様が 住んで いました。",
                reading: "むかし、この しろに おうさまが すんで いました。",
                vi: "Ngày xưa, có một vị vua từng sống trong tòa lâu đài này."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "イギリスの 【女王】に ついて 調べました。",
                target: "女王",
                answer: "じょおう",
                options: ["じょおう", "おんなおう", "めおう", "にょおう"],
                hint: "Nữ hoàng (NỮ VƯƠNG)."
              },
              {
                type: "kanji",
                question: "タイの 【こくおう】は 国民に 愛されて います。",
                target: "こくおう",
                answer: "国王",
                options: ["国王", "国玉", "国主", "国皇"],
                hint: "Quốc vương (QUỐC VƯƠNG)."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 9,
    titleJp: "9章 休みの日",
    titleVi: "Chương 9: Ngày nghỉ",
    icon: "🏖️",
    lessons: [
      {
        id: "9-1",
        number: 1,
        titleJp: "運動",
        reading: "うんどう",
        titleVi: "Vận động",
        kanjiList: [
          {
            char: "運",
            hanViet: "VẬN",
            meaning: "Vận chuyển, vận động, vận may",
            strokes: 12,
            onyomi: ["ウン"],
            kunyomi: ["はこ.ぶ"],
            radical: "辶 (Sước - Bước đi)",
            components: "辶 (Con đường) + 軍 (Đoàn quân, xe cộ)",
            mnemonic: "Đoàn xe quân đội (軍) di chuyển trên con đường (辶) để VẬN chuyển (運) hàng hóa.",
            lookalikes: [
              { char: "連", hanViet: "LIÊN", diff: "Bên trong chỉ có chữ Xa (車), không có bộ Mịch (冖) trùm trên" },
              { char: "軍", hanViet: "QUÂN", diff: "Không có bộ Sước (辶) ở bên ngoài" }
            ],
            words: [
              { word: "運動", reading: "うんどう", hanViet: "VẬN ĐỘNG", meaning: "Vận động, thể thao", level: "N4", type: "on" },
              { word: "運転", reading: "うんてん", hanViet: "VẬN CHUYỂN", meaning: "Lái xe", level: "N4", type: "on" },
              { word: "運ぶ", reading: "はこぶ", hanViet: "VẬN", meaning: "Chở, khiêng, mang vác", level: "N4", type: "kun" },
              { word: "運", reading: "うん", hanViet: "VẬN", meaning: "Số phận, vận may", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "健康の ために まいにち 運動して います。",
                reading: "けんこうの ために まいにち うんどうして います。",
                vi: "Vì sức khỏe nên mỗi ngày tôi đều vận động."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "父は 車の 【運転】が じょうずです。",
                target: "運転",
                answer: "うんてん",
                options: ["うんてん", "うんどう", "はこてん", "れんてん"],
                hint: "Lái xe (VẬN CHUYỂN)."
              },
              {
                type: "kanji",
                question: "おもい 荷物を へやまで 【はこびました】。",
                target: "はこびました",
                answer: "運びました",
                options: ["運びました", "選びました", "遊びました", "並びました"],
                hint: "Khiêng, chở đồ (chữ VẬN)."
              }
            ]
          },
          {
            char: "動",
            hanViet: "ĐỘNG",
            meaning: "Chuyển động, hoạt động, làm việc",
            strokes: 11,
            onyomi: ["ドウ"],
            kunyomi: ["うご.く", "うご.かす"],
            radical: "力 (Lực - Sức lực)",
            components: "重 (Nặng nề) + 力 (Sức lực)",
            mnemonic: "Dùng sức lực (力) đẩy một vật nặng (重) làm cho nó chuyển ĐỘNG (動).",
            lookalikes: [
              { char: "働", hanViet: "ĐỘNG", diff: "Có thêm bộ Nhân đứng (亻) ở bên trái, nghĩa là lao động làm việc (はたらく)" },
              { char: "勲", hanViet: "HUÂN", diff: "Có thêm 4 chấm hỏa (灬) ở dưới cùng" }
            ],
            words: [
              { word: "運動", reading: "うんどう", hanViet: "VẬN ĐỘNG", meaning: "Vận động, tập thể dục", level: "N4", type: "on" },
              { word: "動物", reading: "どうぶつ", hanViet: "ĐỘNG VẬT", meaning: "Động vật", level: "N4", type: "on" },
              { word: "動く", reading: "うごく", hanViet: "ĐỘNG", meaning: "Chuyển động, chạy (máy móc)", level: "N4", type: "kun" },
              { word: "自動車", reading: "じどうしゃ", hanViet: "TỰ ĐỘNG XA", meaning: "Xe ô tô", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "休みの 日に 動物園へ パンダを 見に 行きました。",
                reading: "やすみの ひに どうぶつえんへ パンダを みに いきました。",
                vi: "Vào ngày nghỉ tôi đã đi sở thú để xem gấu trúc."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "この 時計は 電池が 切れて 【動きません】。",
                target: "動きません",
                answer: "うごきません",
                options: ["うごきません", "はたらきません", "あるきません", "あきません"],
                hint: "Không chạy / không chuyển động."
              },
              {
                type: "kanji",
                question: "わたしは 【どうぶつ】が 大好きです。",
                target: "どうぶつ",
                answer: "動物",
                options: ["動物", "働物", "重物", "建物"],
                hint: "Động vật (ĐỘNG VẬT - không có bộ Nhân đứng)."
              }
            ]
          },
          {
            char: "練",
            hanViet: "LUYỆN",
            meaning: "Luyện tập, rèn luyện, nhào trộn",
            strokes: 14,
            onyomi: ["レン"],
            kunyomi: ["ね.る"],
            radical: "糸 (Mịch - Sợi tơ)",
            components: "糸 (Sợi tơ) + 東 (Phương Đông)",
            mnemonic: "Ở phương Đông (東), người ta chuốt sợi tơ (糸) thật kỹ càng như quá trình LUYỆN tập (練).",
            lookalikes: [
              { char: "棟", hanViet: "ĐỐNG", diff: "Bên trái là bộ Mộc (木), nghĩa là tòa nhà" },
              { char: "凍", hanViet: "ĐÔNG", diff: "Bên trái là bộ Băng (冫), nghĩa là đóng băng" }
            ],
            words: [
              { word: "練習", reading: "れんしゅう", hanViet: "LUYỆN TẬP", meaning: "Luyện tập", level: "N4", type: "on" },
              { word: "訓練", reading: "くんれん", hanViet: "HUẤN LUYỆN", meaning: "Huấn luyện, đào tạo", level: "N4", type: "on" },
              { word: "練る", reading: "ねる", hanViet: "LUYỆN", meaning: "Nhào (bột), trau chuốt (kế hoạch)", level: "N4", type: "kun" },
              { word: "未練", reading: "みれん", hanViet: "VỊ LUYỆN", meaning: "Lưu luyến, vương vấn", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "毎日 ギターの 練習を して います。",
                reading: "まいにち ギターの れんしゅうを して います。",
                vi: "Mỗi ngày tôi đều luyện tập đàn guitar."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "漢字を 書く 【練習】を しましょう。",
                target: "練習",
                answer: "れんしゅう",
                options: ["れんしゅう", "ふくしゅう", "よしゅう", "がくしゅう"],
                hint: "Luyện tập (LUYỆN TẬP)."
              },
              {
                type: "kanji",
                question: "水泳の 【れんしゅう】は たいへんです。",
                target: "れんしゅう",
                answer: "練習",
                options: ["練習", "棟習", "連習", "続習"],
                hint: "Luyện tập (LUYỆN TẬP)."
              }
            ]
          },
          {
            char: "習",
            hanViet: "TẬP",
            meaning: "Học tập, tập luyện, thói quen",
            strokes: 11,
            onyomi: ["シュウ"],
            kunyomi: ["なら.う"],
            radical: "羽 (Vũ - Lông vũ, cánh)",
            components: "羽 (Đôi cánh) + 白 (Màu trắng)",
            mnemonic: "Chú chim non đập đôi cánh (羽) dưới ánh nắng trắng (白) để TẬP (習) bay.",
            lookalikes: [
              { char: "翌", hanViet: "DỰC", diff: "Phía dưới là chữ Lập (立), nghĩa là ngày hôm sau" },
              { char: "翼", hanViet: "DỰC", diff: "Phía dưới là chữ Dị (異), nghĩa là đôi cánh máy bay/chim" }
            ],
            words: [
              { word: "練習", reading: "れんしゅう", hanViet: "LUYỆN TẬP", meaning: "Luyện tập", level: "N4", type: "on" },
              { word: "習う", reading: "ならう", hanViet: "TẬP", meaning: "Học (từ thầy cô, người hướng dẫn)", level: "N4", type: "kun" },
              { word: "習慣", reading: "しゅうかん", hanViet: "TẬP QUÁN", meaning: "Thói quen, tập quán", level: "N4", type: "on" },
              { word: "復習", reading: "ふくしゅう", hanViet: "PHỤC TẬP", meaning: "Ôn tập", level: "N4", type: "on" },
              { word: "予習", reading: "よしゅう", hanViet: "DỰ TẬP", meaning: "Chuẩn bị bài trước", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "子どもの とき、水泳を 習いました。",
                reading: "こどもの とき、すいえいを ならいました。",
                vi: "Khi còn nhỏ tôi đã học bơi."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "日本人の 先生に 生け花を 【習って】 います。",
                target: "習って",
                answer: "ならって",
                options: ["ならって", "おしえて", "べんきょうして", "あらって"],
                hint: "Theo học từ ai đó."
              },
              {
                type: "kanji",
                question: "じゅぎょうの まえに 【よしゅう】を します。",
                target: "よしゅう",
                answer: "予習",
                options: ["予習", "予翌", "予羽", "予週"],
                hint: "Chuẩn bị bài mới (DỰ TẬP)."
              }
            ]
          },
          {
            char: "走",
            hanViet: "TẨU",
            meaning: "Chạy",
            strokes: 7,
            onyomi: ["ソウ"],
            kunyomi: ["はし.る"],
            radical: "走 (Tẩu - Chạy)",
            components: "土 (Mặt đất) + 龰 (Bàn chân bước nhanh)",
            mnemonic: "Đôi chân (龰) đạp mạnh trên mặt đất (土) để chạy thật nhanh TẨU (走).",
            lookalikes: [
              { char: "起", hanViet: "KHỞI", diff: "Có thêm chữ Kỷ (己) ở bên phải, nghĩa là thức dậy" },
              { char: "徒", hanViet: "ĐỒ", diff: "Có thêm bộ Xích (彳) ở bên trái" }
            ],
            words: [
              { word: "走る", reading: "はしる", hanViet: "TẨU", meaning: "Chạy", level: "N4", type: "kun" },
              { word: "ご馳走", reading: "ごちそう", hanViet: "TRÌ TẨU", meaning: "Bữa ăn thịnh soạn, chiêu đãi", level: "N4", type: "on" },
              { word: "競走", reading: "きょうそう", hanViet: "CẠNH TẨU", meaning: "Chạy đua", level: "N4", type: "on" },
              { word: "逃走", reading: "とうそう", hanViet: "ĐÀO TẨU", meaning: "Bỏ trốn, chạy trốn", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "毎朝 公園を ３キロ 走ります。",
                reading: "まいあさ こうえんを さんキロ はしります。",
                vi: "Mỗi sáng tôi chạy 3 km ở công viên."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "時間が ないので、駅まで 【走りました】。",
                target: "走りました",
                answer: "はしりました",
                options: ["はしりました", "あるきました", "およぎました", "とびました"],
                hint: "Chạy bộ."
              },
              {
                type: "kanji",
                question: "ろうかを 【はしらないで】 ください。",
                target: "はしらないで",
                answer: "走らないで",
                options: ["走らないで", "足らないで", "歩らないで", "起らないで"],
                hint: "Đừng chạy ở hành lang (dùng chữ TẨU)."
              }
            ]
          },
          {
            char: "歩",
            hanViet: "BỘ",
            meaning: "Đi bộ, bước đi",
            strokes: 8,
            onyomi: ["ホ", "ブ", "フ"],
            kunyomi: ["ある.く", "あゆ.む"],
            radical: "止 (Chỉ - Bàn chân)",
            components: "止 (Dừng chân) + 少 (Một chút)",
            mnemonic: "Dừng lại (止) nghỉ một chút (少) rồi lại tiếp tục đi BỘ (歩).",
            lookalikes: [
              { char: "渉", hanViet: "THIỆP", diff: "Có thêm bộ Thủy (氵) bên trái, nghĩa là giao thiệp / lội nước" },
              { char: "頻", hanViet: "TẦN", diff: "Có thêm bộ Hiệt (頁) bên phải" }
            ],
            words: [
              { word: "歩く", reading: "あるく", hanViet: "BỘ", meaning: "Đi bộ", level: "N4", type: "kun" },
              { word: "散歩", reading: "さんぽ", hanViet: "TẢN BỘ", meaning: "Đi dạo", level: "N4", type: "on" },
              { word: "歩道", reading: "ほどう", hanViet: "BỘ ĐẠO", meaning: "Vỉa hè, đường dành cho người đi bộ", level: "N4", type: "on" },
              { word: "進歩", reading: "しんぽ", hanViet: "TIẾN BỘ", meaning: "Tiến bộ", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "家から 駅まで 歩いて １０分ぐらい かかります。",
                reading: "いえから えきまで あるいて じゅっぷんぐらい かかります。",
                vi: "Từ nhà đi bộ đến ga mất khoảng 10 phút."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "夕がた、犬と 公園を 【散歩】します。",
                target: "散歩",
                answer: "さんぽ",
                options: ["さんぽ", "さんほ", "さんぶ", "さんぷ"],
                hint: "Đi dạo (TẢN BỘ)."
              },
              {
                type: "kanji",
                question: "天気が いいので、【あるいて】 帰りましょう。",
                target: "あるいて",
                answer: "歩いて",
                options: ["歩いて", "走いて", "止いて", "少いて"],
                hint: "Đi bộ (chữ BỘ)."
              }
            ]
          },
          {
            char: "泳",
            hanViet: "VỊNH",
            meaning: "Bơi lội",
            strokes: 8,
            onyomi: ["エイ"],
            kunyomi: ["およ.ぐ"],
            radical: "氵 (Thủy - Nước)",
            components: "氵 (Nước) + 永 (Dài lâu, vĩnh cửu)",
            mnemonic: "Bơi lội VỊNH (泳) một quãng đường dài (永) dưới làn nước (氵).",
            lookalikes: [
              { char: "永", hanViet: "VĨNH", diff: "Không có bộ Thủy (氵) bên trái, nghĩa là vĩnh viễn" },
              { char: "氷", hanViet: "BĂNG", diff: "Chỉ có một nét chấm bên trái chữ Thủy (水), nghĩa là nước đá" }
            ],
            words: [
              { word: "泳ぐ", reading: "およぐ", hanViet: "VỊNH", meaning: "Bơi", level: "N4", type: "kun" },
              { word: "水泳", reading: "すいえい", hanViet: "THỦY VỊNH", meaning: "Môn bơi lội", level: "N4", type: "on" },
              { word: "泳ぎ方", reading: "およぎかた", hanViet: "VỊNH PHƯƠNG", meaning: "Cách bơi, kiểu bơi", level: "N4", type: "kun" },
              { word: "平泳ぎ", reading: "ひらおよぎ", hanViet: "BÌNH VỊNH", meaning: "Bơi ếch", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "夏休みに 海で 泳ぎました。",
                reading: "なつやすみに うみで およぎました。",
                vi: "Vào kỳ nghỉ hè tôi đã bơi ở biển."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "わたしの しゅみは 【水泳】です。",
                target: "水泳",
                answer: "すいえい",
                options: ["すいえい", "みずおよぎ", "すいよう", "えいすい"],
                hint: "Môn bơi lội (THỦY VỊNH)."
              },
              {
                type: "kanji",
                question: "プールで １時間 【およぎました】。",
                target: "およぎました",
                answer: "泳ぎました",
                options: ["泳ぎました", "永ぎました", "水ぎました", "氷ぎました"],
                hint: "Bơi (chữ VỊNH có bộ Thủy 氵)."
              }
            ]
          },
          {
            char: "才",
            hanViet: "TÀI",
            meaning: "Tài năng, tuổi (viết tắt của 歳)",
            strokes: 3,
            onyomi: ["サイ"],
            kunyomi: [],
            radical: "手 (Thủ - Tay)",
            components: "一 (Mặt đất) + 亅 (Thân cây) + ノ (Nhánh mầm)",
            mnemonic: "Mầm cây vươn lên khỏi mặt đất thể hiện sức sống và TÀI năng (才) bẩm sinh.",
            lookalikes: [
              { char: "寸", hanViet: "THỐN", diff: "Có nét chấm thay vì nét phẩy dài, nghĩa là tấc" },
              { char: "木", hanViet: "MỘC", diff: "Có đủ cả nét phẩy và nét mác hai bên" }
            ],
            words: [
              { word: "天才", reading: "てんさい", hanViet: "THIÊN TÀI", meaning: "Thiên tài", level: "N4", type: "on" },
              { word: "才能", reading: "さいのう", hanViet: "TÀI NĂNG", meaning: "Tài năng, năng khiếu", level: "N4", type: "on" },
              { word: "二十才", reading: "はたち", hanViet: "NHỊ THẬP TÀI", meaning: "20 tuổi", level: "N5", type: "kun" },
              { word: "三才", reading: "さんさい", hanViet: "TAM TÀI", meaning: "3 tuổi", level: "N5", type: "on" }
            ],
            examples: [
              {
                jp: "あの 子は 音楽の 才能が あります。",
                reading: "あの こは おんがくの さいのうが あります。",
                vi: "Đứa bé đó có tài năng âm nhạc."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "むすこは 今年 【五才】に なります。",
                target: "五才",
                answer: "ごさい",
                options: ["ごさい", "いつさい", "ござい", "ごたい"],
                hint: "5 tuổi."
              },
              {
                type: "kanji",
                question: "かれは サッカーの 【てんさい】だと 言われて います。",
                target: "てんさい",
                answer: "天才",
                options: ["天才", "天寸", "天木", "天力"],
                hint: "Thiên tài (THIÊN TÀI)."
              }
            ]
          }
        ]
      },
      {
        id: "9-2",
        number: 2,
        titleJp: "リゾート",
        reading: "リゾート",
        titleVi: "Khu nghỉ dưỡng",
        kanjiList: [
          {
            char: "自",
            hanViet: "TỰ",
            meaning: "Bản thân, tự mình, tự nhiên",
            strokes: 6,
            onyomi: ["ジ", "シ"],
            kunyomi: ["みずか.ら"],
            radical: "自 (Tự - Cái mũi, bản thân)",
            components: "ノ (Nét phẩy) + 目 (Hình dáng chiếc mũi ở giữa mặt)",
            mnemonic: "Người Nhật chỉ tay vào chiếc mũi của mình để nói về TỰ bản thân (自).",
            lookalikes: [
              { char: "目", hanViet: "MỤC", diff: "Không có nét phẩy (ノ) ở trên đỉnh, nghĩa là con mắt" },
              { char: "白", hanViet: "BẠCH", diff: "Bên trong chỉ có một nét ngang, nghĩa là màu trắng" }
            ],
            words: [
              { word: "自分", reading: "じぶん", hanViet: "TỰ PHÂN", meaning: "Bản thân mình", level: "N5", type: "on" },
              { word: "自然", reading: "しぜん", hanViet: "TỰ NHIÊN", meaning: "Tự nhiên, thiên nhiên", level: "N4", type: "on" },
              { word: "自由", reading: "じゆう", hanViet: "TỰ DO", meaning: "Tự do", level: "N4", type: "on" },
              { word: "自転車", reading: "じてんしゃ", hanViet: "TỰ CHUYỂN XA", meaning: "Xe đạp", level: "N5", type: "on" },
              { word: "自信", reading: "じしん", hanViet: "TỰ TÍN", meaning: "Tự tin", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "自分の ことは 自分で しましょう。",
                reading: "じぶんの ことは じぶんで しましょう。",
                vi: "Việc của bản thân mình thì hãy tự mình làm."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "ここは みどりが 多くて、【自然】が ゆたかです。",
                target: "自然",
                answer: "しぜん",
                options: ["しぜん", "じぜん", "じぶん", "じゆう"],
                hint: "Thiên nhiên (TỰ NHIÊN - đọc âm シ)."
              },
              {
                type: "kanji",
                question: "休みの 日は 【じゆう】に すごしたいです。",
                target: "じゆう",
                answer: "自由",
                options: ["自由", "目由", "白由", "事由"],
                hint: "Tự do (TỰ DO)."
              }
            ]
          },
          {
            char: "然",
            hanViet: "NHIÊN",
            meaning: "Như thế, tự nhiên, đương nhiên",
            strokes: 12,
            onyomi: ["ゼン", "ネン"],
            kunyomi: [],
            radical: "灬 (Hỏa - Lửa)",
            components: "月 (Thịt) + 犬 (Con chó) + 灬 (Lửa nướng)",
            mnemonic: "Nướng thịt (月) trên ngọn lửa (灬) tỏa mùi thơm là điều đương NHIÊN, tự NHIÊN (然).",
            lookalikes: [
              { char: "燃", hanViet: "NHIÊN", diff: "Có thêm bộ Hỏa (火) ở bên trái, nghĩa là đốt cháy (もえる)" },
              { char: "黙", hanViet: "MẶC", diff: "Phía trên bên trái là chữ Hắc (黒), nghĩa là im lặng" }
            ],
            words: [
              { word: "自然", reading: "しぜん", hanViet: "TỰ NHIÊN", meaning: "Thiên nhiên, tự nhiên", level: "N4", type: "on" },
              { word: "全然", reading: "ぜんぜん", hanViet: "TOÀN NHIÊN", meaning: "Hoàn toàn (không)", level: "N5", type: "on" },
              { word: "当然", reading: "とうぜん", hanViet: "ĐƯƠNG NHIÊN", meaning: "Đương nhiên, tất nhiên", level: "N4", type: "on" },
              { word: "突然", reading: "とつぜん", hanViet: "ĐỘT NHIÊN", meaning: "Đột nhiên, bất ngờ", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "きのうは 突然 雨が ふりだしました。",
                reading: "きのうは とつぜん あめが ふりだしました。",
                vi: "Hôm qua đột nhiên trời đổ mưa."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "わたしは おさけが 【全然】 飲めません。",
                target: "全然",
                answer: "ぜんぜん",
                options: ["ぜんぜん", "しぜん", "とつぜん", "とうぜん"],
                hint: "Hoàn toàn (không) - TOÀN NHIÊN."
              },
              {
                type: "kanji",
                question: "北海道の うつくしい 【しぜん】を 見たいです。",
                target: "しぜん",
                answer: "自然",
                options: ["自然", "自燃", "自熱", "自照"],
                hint: "Thiên nhiên (TỰ NHIÊN)."
              }
            ]
          },
          {
            char: "草",
            hanViet: "THẢO",
            meaning: "Cỏ, cây cỏ, bản thảo",
            strokes: 9,
            onyomi: ["ソウ"],
            kunyomi: ["くさ"],
            radical: "艹 (Thảo - Cỏ)",
            components: "艹 (Cỏ) + 早 (Sớm)",
            mnemonic: "Loài thực vật (艹) đón sương mai từ lúc sáng sớm (早) chính là ngọn cỏ THẢO (草).",
            lookalikes: [
              { char: "早", hanViet: "TẢO", diff: "Không có bộ Thảo (艹) ở phía trên, nghĩa là sớm" },
              { char: "茶", hanViet: "TRÀ", diff: "Phía dưới bộ Thảo là chữ Nhân và chữ Mộc, nghĩa là trà" }
            ],
            words: [
              { word: "草", reading: "くさ", hanViet: "THẢO", meaning: "Cỏ", level: "N4", type: "kun" },
              { word: "草原", reading: "そうげん", hanViet: "THẢO NGUYÊN", meaning: "Thảo nguyên, đồng cỏ", level: "N4", type: "on" },
              { word: "草花", reading: "くさばな", hanViet: "THẢO HOA", meaning: "Hoa cỏ", level: "N4", type: "kun" },
              { word: "雑草", reading: "ざっそう", hanViet: "TẠP THẢO", meaning: "Cỏ dại", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "庭の 草が のびたので、きれいに しました。",
                reading: "にわの くさが のびたので、きれいに しました。",
                vi: "Vì cỏ trong vườn mọc dài nên tôi đã dọn sạch."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "牛が みどりの 【草】を 食べて います。",
                target: "草",
                answer: "くさ",
                options: ["くさ", "はな", "き", "は"],
                hint: "Cỏ xanh."
              },
              {
                type: "kanji",
                question: "ひろい 【そうげん】を 馬が 走って います。",
                target: "そうげん",
                answer: "草原",
                options: ["草原", "早原", "茶原", "花原"],
                hint: "Thảo nguyên (THẢO NGUYÊN)."
              }
            ]
          },
          {
            char: "原",
            hanViet: "NGUYÊN",
            meaning: "Cánh đồng, thảo nguyên, nguyên nhân",
            strokes: 10,
            onyomi: ["ゲン"],
            kunyomi: ["はら"],
            radical: "厂 (Hán - Sườn núi)",
            components: "厂 (Vách núi) + 白 (Trắng) + 小 (Nhỏ)",
            mnemonic: "Từ vách núi (厂) dòng suối trắng (泉/白+小) chảy ra tưới mát cả vùng đồng bằng NGUYÊN (原).",
            lookalikes: [
              { char: "源", hanViet: "NGUYÊN", diff: "Có thêm bộ Thủy (氵) bên trái, nghĩa là nguồn nước" },
              { char: "願", hanViet: "NGUYỆN", diff: "Có thêm bộ Hiệt (頁) bên phải, nghĩa là cầu nguyện" }
            ],
            words: [
              { word: "草原", reading: "そうげん", hanViet: "THẢO NGUYÊN", meaning: "Thảo nguyên", level: "N4", type: "on" },
              { word: "原因", reading: "げんいん", hanViet: "NGUYÊN NHÂN", meaning: "Nguyên nhân", level: "N4", type: "on" },
              { word: "高原", reading: "こうげん", hanViet: "CAO NGUYÊN", meaning: "Cao nguyên", level: "N4", type: "on" },
              { word: "野原", reading: "のはら", hanViet: "DÃ NGUYÊN", meaning: "Cánh đồng cỏ", level: "N4", type: "kun" },
              { word: "原料", reading: "げんりょう", hanViet: "NGUYÊN LIỆU", meaning: "Nguyên liệu", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "事故の 原因を くわしく 調べて います。",
                reading: "じこの げんいんを くわしく しらべて います。",
                vi: "Người ta đang điều tra kỹ nguyên nhân vụ tai nạn."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "夏は すずしい 【高原】へ あそびに 行きます。",
                target: "高原",
                answer: "こうげん",
                options: ["こうげん", "たかはら", "そうげん", "のはら"],
                hint: "Cao nguyên (CAO NGUYÊN)."
              },
              {
                type: "kanji",
                question: "故障の 【げんいん】が 分かりました。",
                target: "げんいん",
                answer: "原因",
                options: ["原因", "源因", "願因", "厚因"],
                hint: "Nguyên nhân (NGUYÊN NHÂN)."
              }
            ]
          },
          {
            char: "湖",
            hanViet: "HỒ",
            meaning: "Hồ nước",
            strokes: 12,
            onyomi: ["コ"],
            kunyomi: ["みずうみ"],
            radical: "氵 (Thủy - Nước)",
            components: "氵 (Nước) + 古 (Cổ xưa) + 月 (Mặt trăng)",
            mnemonic: "Mặt nước (氵) phẳng lặng in bóng vầng trăng (月) từ thời cổ xưa (古) chính là mặt HỒ (湖).",
            lookalikes: [
              { char: "潮", hanViet: "TRIỀU", diff: "Ở giữa là chữ Trập (十+日+十) chứ không phải chữ Cổ (古), nghĩa là thủy triều" },
              { char: "糊", hanViet: "HỒ", diff: "Bên trái là bộ Mễ (米 - gạo), nghĩa là hồ dán" }
            ],
            words: [
              { word: "湖", reading: "みずうみ", hanViet: "HỒ", meaning: "Hồ nước", level: "N4", type: "kun" },
              { word: "琵琶湖", reading: "びわこ", hanViet: "TỲ BÀ HỒ", meaning: "Hồ Biwa (hồ lớn nhất Nhật Bản)", level: "N4", type: "on" },
              { word: "湖畔", reading: "こはん", hanViet: "HỒ BẠN", meaning: "Bờ hồ", level: "N4", type: "on" },
              { word: "白鳥の湖", reading: "はくちょうのみずうみ", hanViet: "BẠCH ĐIỂU HỒ", meaning: "Hồ Thiên Nga", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "静かな 湖の 近くで キャンプを しました。",
                reading: "しずかな みずうみの ちかくで キャンプを しました。",
                vi: "Chúng tôi đã cắm trại gần một hồ nước yên tĩnh."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "ボートに 乗って 【湖】を わたりました。",
                target: "湖",
                answer: "みずうみ",
                options: ["みずうみ", "いけ", "うみ", "かわ"],
                hint: "Hồ nước lớn (cách đọc kunyomi dài 4 âm tiết)."
              },
              {
                type: "kanji",
                question: "富士山の 近くには ５つの 【みずうみ】が あります。",
                target: "みずうみ",
                answer: "湖",
                options: ["湖", "池", "海", "河"],
                hint: "Chữ HỒ (氵 + 古 + 月)."
              }
            ]
          },
          {
            char: "谷",
            hanViet: "CỐC",
            meaning: "Thung lũng, khe núi",
            strokes: 7,
            onyomi: ["コク"],
            kunyomi: ["たに"],
            radical: "谷 (Cốc - Thung lũng)",
            components: "八 (Hai sườn núi) + 人 (Khe suối mở rộng) + 口 (Cửa hang/thung lũng)",
            mnemonic: "Nước chảy qua hai tầng sườn núi (八 + 人) tụ về vùng trũng (口) tạo thành thung lũng CỐC (谷).",
            lookalikes: [
              { char: "浴", hanViet: "DỤC", diff: "Có thêm bộ Thủy (氵) bên trái, nghĩa là tắm (あびる)" },
              { char: "容", hanViet: "DUNG", diff: "Có thêm bộ Miên (宀) ở trên cùng, nghĩa là nội dung / dung mạo" }
            ],
            words: [
              { word: "谷", reading: "たに", hanViet: "CỐC", meaning: "Thung lũng", level: "N4", type: "kun" },
              { word: "谷川", reading: "たにがわ", hanViet: "CỐC XUYÊN", meaning: "Suối trong thung lũng", level: "N4", type: "kun" },
              { word: "渓谷", reading: "けいこく", hanViet: "KHÊ CỐC", meaning: "Hẻm núi, khe vực", level: "N4", type: "on" },
              { word: "渋谷", reading: "しぶや", hanViet: "SÁP CỐC", meaning: "Quận Shibuya (Tokyo)", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "山と 山の あいだに 深い 谷が あります。",
                reading: "やまと やまの あいだに ふかい たにが あります。",
                vi: "Giữa hai ngọn núi có một thung lũng sâu."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "橋の 上から 深い 【谷】を 見下ろしました。",
                target: "谷",
                answer: "たに",
                options: ["たに", "やま", "いけ", "もり"],
                hint: "Thung lũng."
              },
              {
                type: "kanji",
                question: "きれいな 【たにがわ】で 魚を つりました。",
                target: "たにがわ",
                answer: "谷川",
                options: ["谷川", "浴川", "容川", "俗川"],
                hint: "Con suối trong thung lũng (CỐC XUYÊN)."
              }
            ]
          },
          {
            char: "海",
            hanViet: "HẢI",
            meaning: "Biển, đại dương",
            strokes: 9,
            onyomi: ["カイ"],
            kunyomi: ["うみ"],
            radical: "氵 (Thủy - Nước)",
            components: "氵 (Nước) + 毎 (Mỗi ngày, bao la)",
            mnemonic: "Nơi mà mỗi (毎) dòng nước (氵) đều đổ về chính là biển lớn HẢI (海).",
            lookalikes: [
              { char: "毎", hanViet: "MỖI", diff: "Không có bộ Thủy (氵) bên trái, nghĩa là mỗi" },
              { char: "梅", hanViet: "MAI", diff: "Bên trái là bộ Mộc (木), nghĩa là cây mơ/mai" }
            ],
            words: [
              { word: "海", reading: "うみ", hanViet: "HẢI", meaning: "Biển", level: "N5", type: "kun" },
              { word: "海外", reading: "かいがい", hanViet: "HẢI NGOẠI", meaning: "Nước ngoài, hải ngoại", level: "N4", type: "on" },
              { word: "海岸", reading: "かいがん", hanViet: "HẢI NGẠN", meaning: "Bờ biển", level: "N4", type: "on" },
              { word: "海辺", reading: "うみべ", hanViet: "HẢI BIÊN", meaning: "Bãi biển, vùng ven biển", level: "N4", type: "kun" },
              { word: "北海道", reading: "ほっかいどう", hanViet: "BẮC HẢI ĐẠO", meaning: "Tỉnh Hokkaido", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "夏休みに かぞくと 海へ 行きました。",
                reading: "なつやすみに かぞくと うみへ いきました。",
                vi: "Vào kỳ nghỉ hè tôi đã đi biển cùng gia đình."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "将来、【海外】で 働きたいと 思って います。",
                target: "海外",
                answer: "かいがい",
                options: ["かいがい", "うみそと", "うみがい", "がいこく"],
                hint: "Nước ngoài (HẢI NGOẠI)."
              },
              {
                type: "kanji",
                question: "ホテルの 窓から 青い 【うみ】が 見えます。",
                target: "うみ",
                answer: "海",
                options: ["海", "池", "湖", "梅"],
                hint: "Biển xanh (chữ HẢI)."
              }
            ]
          },
          {
            char: "辺",
            hanViet: "BIÊN",
            meaning: "Vùng lân cận, ven bờ, phía",
            strokes: 5,
            onyomi: ["ヘン"],
            kunyomi: ["あた.り", "べ"],
            radical: "辶 (Sước - Bước đi)",
            components: "辶 (Con đường) + 刀 (Con dao / Vùng ranh giới)",
            mnemonic: "Đi dọc theo con đường (辶) sát ranh giới sắc như dao (刀) là vùng ven BIÊN (辺).",
            lookalikes: [
              { char: "近", hanViet: "CẬN", diff: "Bên trong là bộ Cân (斤 - cái rìu), nghĩa là gần" },
              { char: "迎", hanViet: "NGHÊNH", diff: "Bên trong là chữ Ngang (卬), nghĩa là đón tiếp" }
            ],
            words: [
              { word: "この辺", reading: "このへん", hanViet: "BIÊN", meaning: "Quanh đây, vùng này", level: "N4", type: "on" },
              { word: "海辺", reading: "うみべ", hanViet: "HẢI BIÊN", meaning: "Bờ biển, ven biển", level: "N4", type: "kun" },
              { word: "辺り", reading: "あたり", hanViet: "BIÊN", meaning: "Vùng lân cận, xung quanh", level: "N4", type: "kun" },
              { word: "周辺", reading: "しゅうへん", hanViet: "CHU BIÊN", meaning: "Vùng ven, ngoại vi", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "すみません、この辺に コンビニが ありますか。",
                reading: "すみません、このへんに コンビニが ありますか。",
                vi: "Xin lỗi, quanh đây có cửa hàng tiện lợi nào không ạ?"
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "あさ、【海辺】を 散歩しました。",
                target: "海辺",
                answer: "うみべ",
                options: ["うみべ", "かいへん", "うみへん", "うみあたり"],
                hint: "Ven biển, bờ biển (đọc kunyomi)."
              },
              {
                type: "kanji",
                question: "【このへん】は 静かで 住みやすいです。",
                target: "このへん",
                answer: "この辺",
                options: ["この辺", "この近", "この道", "この込"],
                hint: "Vùng quanh đây (chữ BIÊN)."
              }
            ]
          }
        ]
      },
      {
        id: "9-3",
        number: 3,
        titleJp: "いなか",
        reading: "いなか",
        titleVi: "Quê hương / Nông thôn",
        kanjiList: [
          {
            char: "里",
            hanViet: "LÝ",
            meaning: "Làng quê, dặm (đơn vị đo)",
            strokes: 7,
            onyomi: ["リ"],
            kunyomi: ["さと"],
            radical: "里 (Lý - Làng xóm)",
            components: "田 (Ruộng) + 土 (Đất)",
            mnemonic: "Nơi có ruộng đồng (田) và đất đai (土) trù phú chính là làng quê LÝ (里).",
            lookalikes: [
              { char: "黒", hanViet: "HẮC", diff: "Có thêm 4 chấm hỏa (灬) ở dưới, nghĩa là màu đen" },
              { char: "重", hanViet: "TRỌNG", diff: "Có thêm nét phẩy và nét ngang xuyên qua ở trên, nghĩa là nặng" }
            ],
            words: [
              { word: "郷里", reading: "きょうり", hanViet: "HƯƠNG LÝ", meaning: "Quê hương", level: "N4", type: "on" },
              { word: "里", reading: "さと", hanViet: "LÝ", meaning: "Làng quê, quê nhà", level: "N4", type: "kun" },
              { word: "里帰り", reading: "さとがえり", hanViet: "LÝ QUY", meaning: "Về thăm quê (sau khi lập gia đình)", level: "N4", type: "kun" },
              { word: "山里", reading: "やまざと", hanViet: "SƠN LÝ", meaning: "Làng miền núi", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "お盆に 家族で 里帰りを しました。",
                reading: "おぼんに かぞくで さとがえりを しました。",
                vi: "Dịp lễ Obon tôi đã về thăm quê cùng gia đình."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "秋に なると、山の 【里】は もみじが きれいです。",
                target: "里",
                answer: "さと",
                options: ["さと", "むら", "まち", "くに"],
                hint: "Làng quê (chữ LÝ)."
              },
              {
                type: "kanji",
                question: "夏休みに 【さとがえり】を する 予定です。",
                target: "さとがえり",
                answer: "里帰り",
                options: ["里帰り", "田帰り", "町帰り", "村帰り"],
                hint: "Về thăm quê ngoại/quê nhà (LÝ QUY)."
              }
            ]
          },
          {
            char: "野",
            hanViet: "DÃ",
            meaning: "Cánh đồng, hoang dã, lĩnh vực",
            strokes: 11,
            onyomi: ["ヤ"],
            kunyomi: ["の"],
            radical: "里 (Lý - Làng xóm)",
            components: "里 (Làng ruộng) + 予 (Trước, rộng mở)",
            mnemonic: "Vùng đất rộng mở (予) nằm bên ngoài làng ruộng (里) là cánh đồng DÃ (野).",
            lookalikes: [
              { char: "理", hanViet: "LÝ", diff: "Bên trái là bộ Vương/Ngọc (王), bên phải là chữ Lý (里)" },
              { char: "預", hanViet: "DỰ", diff: "Bên trái là chữ Dự (予), bên phải là bộ Hiệt (頁), nghĩa là gửi giữ" }
            ],
            words: [
              { word: "野菜", reading: "やさい", hanViet: "DÃ THÁI", meaning: "Rau củ", level: "N5", type: "on" },
              { word: "野球", reading: "やきゅう", hanViet: "DÃ CẦU", meaning: "Bóng chày", level: "N4", type: "on" },
              { word: "野原", reading: "のはら", hanViet: "DÃ NGUYÊN", meaning: "Cánh đồng cỏ", level: "N4", type: "kun" },
              { word: "分野", reading: "ぶんや", hanViet: "PHÂN DÃ", meaning: "Lĩnh vực", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "健康の ために 野菜を たくさん 食べます。",
                reading: "けんこうの ために やさいを たくさん たべます。",
                vi: "Vì sức khỏe nên tôi ăn nhiều rau củ."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "日本では 【野球】が とても 人気が あります。",
                target: "野球",
                answer: "やきゅう",
                options: ["やきゅう", "のきゅう", "やまり", "サッカー"],
                hint: "Môn bóng chày (DÃ CẦU)."
              },
              {
                type: "kanji",
                question: "いなかで作った 新しい 【やさい】は おいしいです。",
                target: "やさい",
                answer: "野菜",
                options: ["野菜", "里菜", "理菜", "家菜"],
                hint: "Rau củ (DÃ THÁI)."
              }
            ]
          },
          {
            char: "奥",
            hanViet: "ÁO",
            meaning: "Bên trong sâu, phía trong cùng, vợ",
            strokes: 12,
            onyomi: ["オウ"],
            kunyomi: ["おく"],
            radical: "大 (Đại - To lớn)",
            components: "宀/冂 (Ngôi nhà sâu) + 米 (Hạt gạo) + 大 (To lớn)",
            mnemonic: "Hạt gạo quý (米) luôn được cất giữ ở nơi sâu thẳm bên trong cùng ÁO (奥) của ngôi nhà lớn (大).",
            lookalikes: [
              { char: "粤", hanViet: "VIỆT", diff: "Phía dưới là chữ Khư/Khảo chứ không phải chữ Đại (大)" },
              { char: "実", hanViet: "THỰC", diff: "Phía trên là bộ Miên (宀), ở giữa không có chữ Mễ (米)" }
            ],
            words: [
              { word: "奥", reading: "おく", hanViet: "ÁO", meaning: "Phía trong cùng, bề sâu", level: "N4", type: "kun" },
              { word: "奥さん", reading: "おくさん", hanViet: "ÁO", meaning: "Vợ (của người khác), phu nhân", level: "N5", type: "kun" },
              { word: "山奥", reading: "やまおく", hanViet: "SƠN ÁO", meaning: "Sâu trong núi", level: "N4", type: "kun" },
              { word: "奥歯", reading: "おくば", hanViet: "ÁO XỈ", meaning: "Răng hàm (răng trong cùng)", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "森の 奥に 小さな 神社が あります。",
                reading: "もりの おくに ちいさな じんじゃが あります。",
                vi: "Sâu trong rừng có một ngôi đền nhỏ."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "田中さんの 【奥さん】は 料理が じょうずです。",
                target: "奥さん",
                answer: "おくさん",
                options: ["おくさん", "おうさん", "よめさん", "つまさん"],
                hint: "Vợ của người khác."
              },
              {
                type: "kanji",
                question: "どうぞ 部屋の 【おく】へ 入って ください。",
                target: "おく",
                answer: "奥",
                options: ["奥", "裏", "中", "内"],
                hint: "Phía sâu bên trong phòng (chữ ÁO)."
              }
            ]
          },
          {
            char: "池",
            hanViet: "TRÌ",
            meaning: "Cái ao, hồ nhỏ, pin",
            strokes: 6,
            onyomi: ["チ"],
            kunyomi: ["いけ"],
            radical: "氵 (Thủy - Nước)",
            components: "氵 (Nước) + 也 (Cũng vậy / Uốn lượn)",
            mnemonic: "Chỗ đất trũng (也) tích tụ nước (氵) quanh năm tạo thành cái ao TRÌ (池).",
            lookalikes: [
              { char: "地", hanViet: "ĐỊA", diff: "Bên trái là bộ Thổ (土 - đất), nghĩa là mặt đất" },
              { char: "他", hanViet: "THA", diff: "Bên trái là bộ Nhân đứng (亻 - người), nghĩa là người khác" }
            ],
            words: [
              { word: "池", reading: "いけ", hanViet: "TRÌ", meaning: "Cái ao", level: "N4", type: "kun" },
              { word: "電池", reading: "でんち", hanViet: "ĐIỆN TRÌ", meaning: "Pin, ắc quy", level: "N4", type: "on" },
              { word: "乾電池", reading: "かんでんち", hanViet: "CAN ĐIỆN TRÌ", meaning: "Pin khô", level: "N4", type: "on" },
              { word: "古池", reading: "ふるいけ", hanViet: "CỔ TRÌ", meaning: "Ao cũ", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "公園の 池に きれいな 魚が 泳いで います。",
                reading: "こうえんの いけに きれいな さかなが およいで います。",
                vi: "Dưới ao trong công viên có những chú cá đẹp đang bơi."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "カメラの 【電池】が なくなりました。",
                target: "電池",
                answer: "でんち",
                options: ["でんち", "でんじ", "でんいけ", "でんき"],
                hint: "Cục pin (ĐIỆN TRÌ)."
              },
              {
                type: "kanji",
                question: "庭に 小さな 【いけ】を 作りました。",
                target: "いけ",
                answer: "池",
                options: ["池", "地", "他", "湖"],
                hint: "Cái ao (có bộ Thủy 氵 bên trái)."
              }
            ]
          },
          {
            char: "虫",
            hanViet: "TRÙNG",
            meaning: "Côn trùng, sâu bọ",
            strokes: 6,
            onyomi: ["チュウ"],
            kunyomi: ["むし"],
            radical: "虫 (Trùng - Sâu bọ)",
            components: "中 (Ở giữa) + 厶 (Cái đuôi sâu cong lên)",
            mnemonic: "Hình ảnh con sâu có cái đầu to (口) và phần đuôi uốn cong ở dưới chính là côn TRÙNG (虫).",
            lookalikes: [
              { char: "中", hanViet: "TRUNG", diff: "Không có nét hất và dấu chấm ở dưới cùng" },
              { char: "風", hanViet: "PHONG", diff: "Có bộ Kỷ (几) bao bọc bên ngoài chữ Trùng" }
            ],
            words: [
              { word: "虫", reading: "むし", hanViet: "TRÙNG", meaning: "Côn trùng, sâu bọ", level: "N4", type: "kun" },
              { word: "虫歯", reading: "むしば", hanViet: "TRÙNG XỈ", meaning: "Răng sâu", level: "N4", type: "kun" },
              { word: "毛虫", reading: "けむし", hanViet: "MAO TRÙNG", meaning: "Sâu róm", level: "N4", type: "kun" },
              { word: "昆虫", reading: "こんちゅう", hanViet: "CÔN TRÙNG", meaning: "Côn trùng", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "秋の 夜は 虫の 声が 聞こえます。",
                reading: "あきの よるは むしの こえが きこえます。",
                vi: "Đêm mùa thu có thể nghe thấy tiếng côn trùng kêu."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "甘い ものを 食べすぎて、【虫歯】に なりました。",
                target: "虫歯",
                answer: "むしば",
                options: ["むしば", "ちゅうば", "むしは", "おくば"],
                hint: "Răng sâu (TRÙNG XỈ)."
              },
              {
                type: "kanji",
                question: "弟は 森で 【むし】を つかまえました。",
                target: "むし",
                answer: "虫",
                options: ["虫", "中", "風", "蛇"],
                hint: "Côn trùng, sâu bọ (chữ TRÙNG)."
              }
            ]
          },
          {
            char: "羽",
            hanViet: "VŨ",
            meaning: "Lông vũ, đôi cánh, đơn vị đếm chim/thỏ",
            strokes: 6,
            onyomi: ["ウ"],
            kunyomi: ["は", "はね", "わ"],
            radical: "羽 (Vũ - Lông vũ)",
            components: "习 (Một bên cánh) × 2",
            mnemonic: "Hai chiếc cánh có lông tơ ghép song song tạo thành đôi cánh lông VŨ (羽).",
            lookalikes: [
              { char: "習", hanViet: "TẬP", diff: "Có thêm chữ Bạch (白) ở phía dưới, nghĩa là học tập" },
              { char: "弱", hanViet: "NHƯỢC", diff: "Có bộ Cung (弓) uốn cong, nghĩa là yếu ớt" }
            ],
            words: [
              { word: "羽", reading: "はね", hanViet: "VŨ", meaning: "Lông vũ, cánh (chim, côn trùng)", level: "N4", type: "kun" },
              { word: "一羽", reading: "いちわ", hanViet: "NHẤT VŨ", meaning: "Một con (chim, thỏ)", level: "N4", type: "kun" },
              { word: "三羽", reading: "さんば", hanViet: "TAM VŨ", meaning: "Ba con (chim, thỏ)", level: "N4", type: "kun" },
              { word: "羽毛", reading: "うもう", hanViet: "VŨ MAO", meaning: "Lông vũ", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "池に 白い 鳥が 二羽 います。",
                reading: "いけに しろい とりが にわ います。",
                vi: "Ở dưới ao có hai con chim trắng."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "きれいな ちょうの 【羽】を 見つけました。",
                target: "羽",
                answer: "はね",
                options: ["はね", "け", "みみ", "あし"],
                hint: "Đôi cánh / Lông vũ."
              },
              {
                type: "kanji",
                question: "うさぎを 【いちわ】 かって います。",
                target: "いちわ",
                answer: "一羽",
                options: ["一羽", "一匹", "一頭", "一鳥"],
                hint: "Đếm chim và thỏ dùng chữ VŨ."
              }
            ]
          },
          {
            char: "鳴",
            hanViet: "MINH",
            meaning: "(Chim, thú, côn trùng) kêu, hót; chuông reo",
            strokes: 14,
            onyomi: ["メイ"],
            kunyomi: ["な.く", "な.る", "な.らす"],
            radical: "鳥 (Điểu - Con chim)",
            components: "口 (Cái miệng) + 鳥 (Con chim)",
            mnemonic: "Con chim (鳥) mở cái miệng (口) cất tiếng hót vang MINH (鳴).",
            lookalikes: [
              { char: "鳥", hanViet: "ĐIỂU", diff: "Không có bộ Khẩu (口) ở bên trái, chỉ là con chim" },
              { char: "島", hanViet: "ĐẢO", diff: "Phía dưới là bộ Sơn (山), không có bộ Khẩu, nghĩa là hòn đảo" }
            ],
            words: [
              { word: "鳴く", reading: "なく", hanViet: "MINH", meaning: "Kêu, hót, sủa (động vật)", level: "N4", type: "kun" },
              { word: "鳴る", reading: "なる", hanViet: "MINH", meaning: "Reo, vang lên (chuông, sấm)", level: "N4", type: "kun" },
              { word: "鳴らす", reading: "ならす", hanViet: "MINH", meaning: "Bấm (còi), rung (chuông)", level: "N4", type: "kun" },
              { word: "悲鳴", reading: "ひめい", hanViet: "BI MINH", meaning: "Tiếng thét, tiếng kêu cứu", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "朝、鳥が 鳴いて いる 声が 聞こえます。",
                reading: "あさ、とりが ないて いる こえが きこえます。",
                vi: "Buổi sáng có thể nghe thấy tiếng chim đang hót."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "となりの 家の 犬が よく 【鳴きます】。",
                target: "鳴きます",
                answer: "なきます",
                options: ["なきます", "ききます", "あるきます", "おきます"],
                hint: "Chó sủa / Động vật kêu."
              },
              {
                type: "kanji",
                question: "電話が 【なって】 いますよ。",
                target: "なって",
                answer: "鳴って",
                options: ["鳴って", "泣って", "成って", "生って"],
                hint: "Chuông điện thoại reo (dùng chữ MINH 口+鳥)."
              }
            ]
          },
          {
            char: "馬",
            hanViet: "MÃ",
            meaning: "Con ngựa",
            strokes: 10,
            onyomi: ["バ"],
            kunyomi: ["うま", "ま"],
            radical: "馬 (Mã - Con ngựa)",
            components: "Hình tượng đầu, bờm, lưng và 4 vó (灬) của con ngựa",
            mnemonic: "Hình vẽ con ngựa có bờm dài ở cổ và 4 cái chân (灬) đang phi nước đại chính là chữ MÃ (馬).",
            lookalikes: [
              { char: "鳥", hanViet: "ĐIỂU", diff: "Có nét phẩy ở trên đỉnh đầu, là con chim" },
              { char: "駅", hanViet: "DỊCH", diff: "Chữ Mã làm bộ thủ bên trái, bên phải là chữ Xích (尺), nghĩa là nhà ga" }
            ],
            words: [
              { word: "馬", reading: "うま", hanViet: "MÃ", meaning: "Con ngựa", level: "N4", type: "kun" },
              { word: "乗馬", reading: "じょうば", hanViet: "THỪA MÃ", meaning: "Cưỡi ngựa", level: "N4", type: "on" },
              { word: "馬車", reading: "ばしゃ", hanViet: "MÃ XA", meaning: "Xe ngựa", level: "N4", type: "on" },
              { word: "競馬", reading: "けいば", hanViet: "CẠNH MÃ", meaning: "Đua ngựa", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "北海道の 牧場で 白い 馬に 乗りました。",
                reading: "ほっかいどうの ぼくじょうで しろい うまに のりました。",
                vi: "Tôi đã cưỡi một chú ngựa trắng ở trang trại tại Hokkaido."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "草原を 【馬】が はやく 走って います。",
                target: "馬",
                answer: "うま",
                options: ["うま", "とり", "うし", "いぬ"],
                hint: "Con ngựa."
              },
              {
                type: "kanji",
                question: "休みの 日に 【じょうば】を 体験しました。",
                target: "じょうば",
                answer: "乗馬",
                options: ["乗馬", "乗鳥", "乗駅", "乗牛"],
                hint: "Cưỡi ngựa (THỪA MÃ)."
              }
            ]
          }
        ]
      }
    ]
  }
);
