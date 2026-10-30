window.KANJI_CHAPTERS = window.KANJI_CHAPTERS || [];

window.KANJI_CHAPTERS.push({
  id: 1,
  titleJp: "1章 家族の生かつ",
  titleVi: "Chương 1: Cuộc sống gia đình",
  icon: "👨‍👩‍👧‍👦",
  lessons: [
    {
      id: "1-1",
      number: 1,
      titleJp: "家族",
      reading: "かぞく",
      titleVi: "Gia đình",
      introJp: "あなたは 何人家族ですか。家族の 話を 聞いたり 話したり できるように なりましょう。",
      introVi: "Gia đình bạn có mấy người? Hãy cùng học cách nghe và nói chuyện về gia đình nhé.",
      kanjiList: [
        {
          char: "家",
          hanViet: "GIA",
          meaning: "Nhà, gia đình, chuyên gia",
          strokes: 10,
          onyomi: ["カ", "ケ"],
          kunyomi: ["いえ", "や"],
          radical: "宀 (Miên - Mái nhà)",
          components: "宀 (Mái nhà) + 豕 (Thỉ - Con lợn)",
          mnemonic: "Dưới mái nhà (宀) có nuôi đàn lợn (豕) là biểu tượng của sự sung túc, tạo thành một ngôi NHÀ (家).",
          lookalikes: [
            { char: "宅", hanViet: "TRẠCH", diff: "Dưới bộ Miên (宀) là chữ Thất cách điệu (乇) - nhà riêng/nhà người khác" },
            { char: "室", hanViet: "THẤT", diff: "Dưới bộ Miên (宀) là chữ Chí (至) - căn phòng" }
          ],
          words: [
            { word: "家", reading: "いえ", hanViet: "GIA", meaning: "Ngôi nhà", level: "N5", type: "kun" },
            { word: "家族", reading: "かぞく", hanViet: "GIA TỘC", meaning: "Gia đình", level: "N5", type: "on" },
            { word: "大家さん", reading: "おおやさん", hanViet: "ĐẠI GIA", meaning: "Chủ nhà trọ", level: "N4", type: "kun" },
            { word: "家賃", reading: "やちん", hanViet: "GIA NHẪM", meaning: "Tiền thuê nhà", level: "N4", type: "kun" },
            { word: "作家", reading: "さっか", hanViet: "TÁC GIA", meaning: "Nhà văn, tác giả", level: "N4", type: "on" },
            { word: "政治家", reading: "せいじか", hanViet: "CHÍNH TRỊ GIA", meaning: "Chính trị gia", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "わたしの 家の ちかくに コンビニが あります。",
              reading: "わたしの いえの ちかくに コンビニが あります。",
              vi: "Ở gần nhà tôi có cửa hàng tiện lợi."
            },
            {
              jp: "アパートの 一かいに 大家さんが すんでいます。",
              reading: "アパートの いっかいに おおやさんが すんでいます。",
              vi: "Bác chủ nhà sống ở tầng 1 của khu căn hộ."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "わたしの 【家】の ちかくに コンビニが あります。",
              target: "家",
              answer: "いえ",
              options: ["いえ", "や", "か", "け"],
              hint: "Danh từ đứng một mình chỉ ngôi nhà."
            },
            {
              type: "kanji",
              question: "まい月 25日までに 【やちん】を はらいます。",
              target: "やちん",
              answer: "家ちん",
              options: ["家ちん", "屋ちん", "室ちん", "宅ちん"],
              hint: "Tiền thuê nhà (GIA NHẪM)."
            }
          ]
        },
        {
          char: "族",
          hanViet: "TỘC",
          meaning: "Dòng tộc, gia đình, nhóm",
          strokes: 11,
          onyomi: ["ゾク"],
          kunyomi: [],
          radical: "方 (Phương - Phương hướng, cờ)",
          components: "方 (Cờ hiệu) + 𠂉 + 矢 (Thỉ - Mũi tên)",
          mnemonic: "Dưới ngọn cờ hiệu (方), những người cầm cung tên (矢) tập hợp lại bảo vệ nhau chính là một bộ TỘC, GIA TỘC (族).",
          lookalikes: [
            { char: "旅", hanViet: "LỮ", diff: "Bên phải phía dưới là bộ Y biến thể (𧘇) - đi du lịch" }
          ],
          words: [
            { word: "家族", reading: "かぞく", hanViet: "GIA TỘC", meaning: "Gia đình", level: "N5", type: "on" },
            { word: "水族館", reading: "すいぞくかん", hanViet: "THỦY TỘC QUÁN", meaning: "Thủy cung", level: "N4", type: "on" },
            { word: "一族", reading: "いちぞく", hanViet: "NHẤT TỘC", meaning: "Cả dòng họ, gia tộc", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "山田さんは 何人 家族ですか。",
              reading: "やまださんは なんにん かぞくですか。",
              vi: "Gia đình anh Yamada có mấy người?"
            },
            {
              jp: "休みの日に 友だちと 水族かんへ 行きます。",
              reading: "やすみのひに ともだちと すいぞくかんへ いきます。",
              vi: "Vào ngày nghỉ tôi đi thủy cung với bạn."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "休みの日に 友だちと 【水族かん】へ 行きます。",
              target: "水族かん",
              answer: "すいぞくかん",
              options: ["すいぞくかん", "みずぞくかん", "すいりょかん", "すいっそくかん"],
              hint: "Thủy cung (THỦY TỘC QUÁN)."
            },
            {
              type: "kanji",
              question: "私の 家は ごにん【かぞく】です。",
              target: "かぞく",
              answer: "家族",
              options: ["家族", "家旅", "屋族", "家続"],
              hint: "Gia đình (GIA TỘC)."
            }
          ]
        },
        {
          char: "兄",
          hanViet: "HUYNH",
          meaning: "Anh trai",
          strokes: 5,
          onyomi: ["キョウ", "ケイ"],
          kunyomi: ["あに"],
          radical: "儿 (Nhân đi - Đôi chân người)",
          components: "口 (Khẩu - Miệng) + 儿 (Đôi chân người)",
          mnemonic: "Người đứng trên đôi chân vững chãi (儿) và dùng cái miệng (口) khuyên bảo các em là người ANH TRAI (兄).",
          lookalikes: [
            { char: "児", hanViet: "NHI", diff: "Phía trên là chữ Cữu (臼), chỉ trẻ nhỏ" },
            { char: "祝", hanViet: "CHÚC", diff: "Có thêm bộ Thị (礻) ở bên trái - chúc mừng" }
          ],
          words: [
            { word: "兄", reading: "あに", hanViet: "HUYNH", meaning: "Anh trai (của mình)", level: "N5", type: "kun" },
            { word: "お兄さん", reading: "おにいさん", hanViet: "HUYNH", meaning: "Anh trai (người khác / gọi anh)", level: "N5", type: "kun" },
            { word: "兄弟", reading: "きょうだい", hanViet: "HUYNH ĐỆ", meaning: "Anh chị em", level: "N5", type: "on" },
            { word: "長兄", reading: "ちょうけい", hanViet: "TRƯỞNG HUYNH", meaning: "Anh cả", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "お兄さんは 何時に 帰ってきますか。",
              reading: "おにいさんは なんじに かえってきますか。",
              vi: "Anh trai bạn mấy giờ sẽ về?"
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "子どものころ よく 【兄弟】げんかを しました。",
              target: "兄弟",
              answer: "きょうだい",
              options: ["きょうだい", "あにおとうと", "けいだい", "きょうてい"],
              hint: "Anh chị em (HUYNH ĐỆ)."
            },
            {
              type: "kanji",
              question: "【あに】は アメリカに りゅう学しています。",
              target: "あに",
              answer: "兄",
              options: ["兄", "弟", "姉", "妹"],
              hint: "Anh trai của mình (HUYNH)."
            }
          ]
        },
        {
          char: "弟",
          hanViet: "ĐỆ",
          meaning: "Em trai",
          strokes: 7,
          onyomi: ["ود", "ダイ", "テイ"],
          kunyomi: ["おとうと"],
          radical: "弓 (Cung - Cây cung)",
          components: "丷 (Hai nét chấm) + 弓 (Cây cung) + 丨 (Nét sổ) + ノ (Nét phẩy)",
          mnemonic: "Cậu EM TRAI (弟) đội mũ có 2 sừng nhỏ (丷), tay cầm cây cung (弓) quấn quanh chiếc cọc (丨).",
          lookalikes: [
            { char: "第", hanViet: "ĐỆ", diff: "Có thêm bộ Trúc (竹) ở trên - thứ tự (Đệ nhất, Đệ nhị)" }
          ],
          words: [
            { word: "弟", reading: "おとうと", hanViet: "ĐỆ", meaning: "Em trai (của mình)", level: "N5", type: "kun" },
            { word: "弟さん", reading: "おとうとさん", hanViet: "ĐỆ", meaning: "Em trai (của người khác)", level: "N5", type: "kun" },
            { word: "兄弟", reading: "きょうだい", hanViet: "HUYNH ĐỆ", meaning: "Anh chị em", level: "N5", type: "on" },
            { word: "弟子", reading: "でし", hanViet: "ĐỆ TỬ", meaning: "Đệ tử, học trò", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "私の 弟は サッカー部に 入っています。",
              reading: "わたしの おとうとは サッカーぶに はいっています。",
              vi: "Em trai tôi đang tham gia câu lạc bộ bóng đá."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "私の 【弟】は 今年 小学生に なりました。",
              target: "弟",
              answer: "おとうと",
              options: ["おとうと", "いもうと", "あに", "おとと"],
              hint: "Em trai (ĐỆ)."
            },
            {
              type: "kanji",
              question: "子どものころ よく 【きょうだい】げんかを しました。",
              target: "きょうだい",
              answer: "兄弟",
              options: ["兄弟", "兄第", "姉妹", "兄妹"],
              hint: "Anh em / anh chị em (HUYNH ĐỆ)."
            }
          ]
        },
        {
          char: "姉",
          hanViet: "TỶ",
          meaning: "Chị gái",
          strokes: 8,
          onyomi: ["シ"],
          kunyomi: ["あね"],
          radical: "女 (Nữ - Người phụ nữ)",
          components: "女 (Phụ nữ) + 市 (Thị - Chợ)",
          mnemonic: "Người phụ nữ (女) thay mẹ đi chợ (市) lo cho các em chính là CHỊ GÁI (姉).",
          lookalikes: [
            { char: "妹", hanViet: "MUỘI", diff: "Bên phải là chữ Vị (未 - chưa) - em gái" },
            { char: "婦", hanViet: "PHỤ", diff: "Bên phải là cây chổi (帚) - người vợ, phụ nữ" }
          ],
          words: [
            { word: "姉", reading: "あね", hanViet: "TỶ", meaning: "Chị gái (của mình)", level: "N5", type: "kun" },
            { word: "お姉さん", reading: "おねえさん", hanViet: "TỶ", meaning: "Chị gái (của người khác / gọi chị)", level: "N5", type: "kun" },
            { word: "姉妹", reading: "しまい", hanViet: "TỶ MUỘI", meaning: "Chị em gái", level: "N4", type: "on" },
            { word: "姉妹都市", reading: "しまいとし", hanViet: "TỶ MUỘI ĐÔ THỊ", meaning: "Thành phố kết nghĩa", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "姉は けっこんして 名字が かわりました。",
              reading: "あねは けっこんして みょうじが かわりました。",
              vi: "Chị gái tôi sau khi kết hôn đã đổi họ."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "山田さん【姉妹】は おなじ 大学に かよっています。",
              target: "姉妹",
              answer: "しまい",
              options: ["しまい", "あねいもうと", "きょうだい", "しめい"],
              hint: "Chị em gái (TỶ MUỘI)."
            },
            {
              type: "kanji",
              question: "上田さんの 【おねえさん】は きれいな 人です。",
              target: "おねえさん",
              answer: "お姉さん",
              options: ["お姉さん", "お妹さん", "お兄さん", "お婦さん"],
              hint: "Chị gái (TỶ)."
            }
          ]
        },
        {
          char: "妹",
          hanViet: "MUỘI",
          meaning: "Em gái",
          strokes: 8,
          onyomi: ["マイ"],
          kunyomi: ["いもうと"],
          radical: "女 (Nữ - Người phụ nữ)",
          components: "女 (Phụ nữ) + 未 (Vị - Chưa)",
          mnemonic: "Người con gái (女) còn nhỏ, chưa (未) trưởng thành là cô EM GÁI (妹).",
          lookalikes: [
            { char: "姉", hanViet: "TỶ", diff: "Bên phải là chữ Thị (市) - chị gái" },
            { char: "味", hanViet: "VỊ", diff: "Bên trái là bộ Khẩu (口) - mùi vị" }
          ],
          words: [
            { word: "妹", reading: "いもうと", hanViet: "MUỘI", meaning: "Em gái (của mình)", level: "N5", type: "kun" },
            { word: "妹さん", reading: "いもうとさん", hanViet: "MUỘI", meaning: "Em gái (của người khác)", level: "N5", type: "kun" },
            { word: "姉妹", reading: "しまい", hanViet: "TỶ MUỘI", meaning: "Chị em gái", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "妹は おなかが すくと すぐ なきます。",
              reading: "いもうとは おなかが すくと すぐ なきます。",
              vi: "Em gái tôi cứ đói bụng là khóc ngay."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "【妹】は おなかが すくと すぐ なきます。",
              target: "妹",
              answer: "いもうと",
              options: ["いもうと", "おとうと", "あね", "まい"],
              hint: "Em gái (MUỘI)."
            },
            {
              type: "kanji",
              question: "山田さん【しまい】は おなじ 大学に かよっています。",
              target: "しまい",
              answer: "姉妹",
              options: ["姉妹", "姉味", "市未", "兄妹"],
              hint: "Chị em gái (TỶ MUỘI)."
            }
          ]
        },
        {
          char: "私",
          hanViet: "TƯ",
          meaning: "Tôi, riêng tư, cá nhân",
          strokes: 7,
          onyomi: ["シ"],
          kunyomi: ["わたし", "わたくし"],
          radical: "禾 (Hòa - Cây lúa)",
          components: "禾 (Cây lúa) + 厶 (Khư - Riêng tư)",
          mnemonic: "Cây lúa (禾) gặt về cất giữ cho riêng mình (厶) là của TƯ / TÔI (私).",
          lookalikes: [
            { char: "和", hanViet: "HÒA", diff: "Bên phải là bộ Khẩu (口) - hòa bình, kiểu Nhật" },
            { char: "秋", hanViet: "THU", diff: "Bên phải là bộ Hỏa (火) - mùa thu" }
          ],
          words: [
            { word: "私", reading: "わたし", hanViet: "TƯ", meaning: "Tôi", level: "N5", type: "kun" },
            { word: "私立", reading: "しりつ", hanViet: "TƯ LẬP", meaning: "Tư thục, dân lập", level: "N4", type: "on" },
            { word: "私鉄", reading: "してつ", hanViet: "TƯ THIẾT", meaning: "Đường sắt tư nhân", level: "N4", type: "on" },
            { word: "私服", reading: "しふく", hanViet: "TƯ PHỤC", meaning: "Thường phục (quần áo cá nhân)", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "むすめは 私立の 高校に かよっています。",
              reading: "むすめは しりつの こうこうに かよっています。",
              vi: "Con gái tôi đang theo học trường cấp 3 tư thục."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "黒田か長は 【私服】も おしゃれです。",
              target: "私服",
              answer: "しふく",
              options: ["しふく", "わたしふく", "わふく", "ようふく"],
              hint: "Quần áo thường ngày (TƯ PHỤC)."
            },
            {
              type: "kanji",
              question: "むすめは 【しりつ】の 高校に かよっています。",
              target: "しりつ",
              answer: "私立",
              options: ["私立", "市立", "和立", "自立"],
              hint: "Trường tư thục (TƯ LẬP)."
            }
          ]
        },
        {
          char: "育",
          hanViet: "DỤC",
          meaning: "Nuôi dạy, lớn lên, giáo dục",
          strokes: 8,
          onyomi: ["イク"],
          kunyomi: ["そだ-つ", "そだ-てる"],
          radical: "月 (Nhục - Thịt, cơ thể)",
          components: "云 (Đứa trẻ sinh ra lộn ngược) + 月 (Nhục - Cơ thể)",
          mnemonic: "Đứa trẻ mới sinh (云) được chăm bẵm cho cơ thể (月) lớn khôn là NUÔI DƯỠNG / GIÁO DỤC (育).",
          lookalikes: [
            { char: "充", hanViet: "SUNG", diff: "Phía dưới là bộ Nhi (儿) - đầy đủ, bổ sung" },
            { char: "背", hanViet: "BỐI", diff: "Phía trên là chữ Bắc (北) - cái lưng" }
          ],
          words: [
            { word: "育つ", reading: "そだつ", hanViet: "DỤC", meaning: "Lớn lên, trưởng thành (Tự động từ)", level: "N4", type: "kun" },
            { word: "育てる", reading: "そだてる", hanViet: "DỤC", meaning: "Nuôi nấng, trồng trọt (Tha động từ)", level: "N4", type: "kun" },
            { word: "教育", reading: "きょういく", hanViet: "GIÁO DỤC", meaning: "Giáo dục", level: "N4", type: "on" },
            { word: "体育", reading: "たいいく", hanViet: "THỂ DỤC", meaning: "Thể dục", level: "N4", type: "on" },
            { word: "育児", reading: "いくじ", hanViet: "DỤC NHI", meaning: "Việc nuôi dạy trẻ", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "小学校のころ 体育が 一ばん 好きでした。",
              reading: "しょうがっこうのころ たいいくが いちばん すきでした。",
              vi: "Hồi tiểu học tôi thích nhất môn thể dục."
            },
            {
              jp: "ベランダで トマトを 育てています。",
              reading: "ベランダで トマトを そだてています。",
              vi: "Tôi đang trồng cà chua ở ngoài ban công."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "山川さんは いなかで 【育ちました】。",
              target: "育ちました",
              answer: "そだちました",
              options: ["そだちました", "そだてました", "いくちました", "たちました"],
              hint: "Lớn lên ở vùng quê (Tự động từ)."
            },
            {
              type: "kanji",
              question: "おっとは 【いくじ】を 手つだってくれます。",
              target: "いくじ",
              answer: "育児",
              options: ["育児", "充児", "育字", "教児"],
              hint: "Việc chăm sóc, nuôi con (DỤC NHI)."
            }
          ]
        }
      ]
    },
    {
      id: "1-2",
      number: 2,
      titleJp: "マンション",
      reading: "マンション",
      titleVi: "Chung cư",
      introJp: "あなたは どんなところに すんでいますか。すんでいるところや 部屋について 聞いたり 話したり できるように なりましょう。",
      introVi: "Bạn đang sống ở nơi như thế nào? Hãy học cách hỏi và kể về nơi ở cũng như căn phòng của mình nhé.",
      kanjiList: [
        {
          char: "部",
          hanViet: "BỘ",
          meaning: "Bộ phận, câu lạc bộ, phòng",
          strokes: 11,
          onyomi: ["ブ"],
          kunyomi: [],
          radical: "阝 (Ấp - Vùng đất, bên phải)",
          components: "立 (Lập - Đứng) + 口 (Khẩu - Miệng) + 阝 (Ấp - Vùng đất)",
          mnemonic: "Đứng (立) dùng miệng (口) phân chia vùng đất (阝) thành từng khu vực, BỘ PHẬN (部).",
          lookalikes: [
            { char: "都", hanViet: "ĐÔ", diff: "Bên trái là chữ Giả (者) - thủ đô, thành phố" },
            { char: "倍", hanViet: "BỘI", diff: "Có bộ Nhân đứng (亻) bên trái, không có bộ Ấp (阝) - gấp bội" }
          ],
          words: [
            { word: "部屋", reading: "へや", hanViet: "BỘ ỐC", meaning: "Căn phòng (Cách đọc đặc biệt)", level: "N5", type: "kun" },
            { word: "部長", reading: "ぶちょう", hanViet: "BỘ TRƯỞNG", meaning: "Trưởng phòng, chủ nhiệm CLB", level: "N4", type: "on" },
            { word: "全部", reading: "ぜんぶ", hanViet: "TOÀN BỘ", meaning: "Toàn bộ, tất cả", level: "N5", type: "on" },
            { word: "一部", reading: "いちぶ", hanViet: "NHẤT BỘ", meaning: "Một phần", level: "N4", type: "on" },
            { word: "学部", reading: "がくぶ", hanViet: "HỌC BỘ", meaning: "Khoa (ở trường đại học)", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "かれは サッカー部の 部長です。",
              reading: "かれは サッカーぶの ぶちょうです。",
              vi: "Anh ấy là đội trưởng câu lạc bộ bóng đá."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "これらは 私が もっている 本の 【一部】です。",
              target: "一部",
              answer: "いちぶ",
              options: ["いちぶ", "ひとぶ", "いっぺ", "いちべ"],
              hint: "Một phần (NHẤT BỘ)."
            },
            {
              type: "kanji",
              question: "私は 【ぶんがくぶ】を そつぎょうしました。",
              target: "ぶんがくぶ",
              answer: "文学部",
              options: ["文学部", "文学都", "文学屋", "文学室"],
              hint: "Khoa Văn học (VĂN HỌC BỘ)."
            }
          ]
        },
        {
          char: "屋",
          hanViet: "ỐC",
          meaning: "Mái nhà, cửa tiệm, căn phòng",
          strokes: 9,
          onyomi: ["オク"],
          kunyomi: ["や"],
          radical: "尸 (Thi - Mái nhà/xác)",
          components: "尸 (Mái nhà) + 至 (Chí - Đến)",
          mnemonic: "Đi đến (至) nơi có mái che (尸) dừng chân chính là ngôi nhà, CỬA TIỆM (屋).",
          lookalikes: [
            { char: "室", hanViet: "THẤT", diff: "Phía trên là bộ Miên (宀) thay vì bộ Thi (尸)" },
            { char: "居", hanViet: "CƯ", diff: "Bên dưới bộ Thi (尸) là chữ Cổ (古) - cư trú" }
          ],
          words: [
            { word: "部屋", reading: "へや", hanViet: "BỘ ỐC", meaning: "Căn phòng", level: "N5", type: "kun" },
            { word: "本屋", reading: "ほんや", hanViet: "BẢN ỐC", meaning: "Hiệu sách", level: "N5", type: "kun" },
            { word: "花屋", reading: "はなや", hanViet: "HOA ỐC", meaning: "Tiệm hoa", level: "N5", type: "kun" },
            { word: "屋上", reading: "おくじょう", hanViet: "ỐC THƯỢNG", meaning: "Sân thượng", level: "N4", type: "on" },
            { word: "屋根", reading: "やね", hanViet: "ỐC CĂN", meaning: "Mái nhà", level: "N4", type: "kun" }
          ],
          examples: [
            {
              jp: "マンションの 屋上から ふじ山が 見えます。",
              reading: "マンションの おくじょうから ふじさんんが みえます。",
              vi: "Từ sân thượng của chung cư có thể nhìn thấy núi Phú Sĩ."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "マンションの 【屋上】から 花火が 見えます。",
              target: "屋上",
              answer: "おくじょう",
              options: ["おくじょう", "やうえ", "やじょう", "おくうえ"],
              hint: "Sân thượng (ỐC THƯỢNG)."
            },
            {
              type: "kanji",
              question: "学校の 帰りに 【ほんや】で ざっしを 買いました。",
              target: "ほんや",
              answer: "本屋",
              options: ["本屋", "本家", "本室", "本店"],
              hint: "Hiệu sách (BẢN ỐC)."
            }
          ]
        },
        {
          char: "広",
          hanViet: "QUẢNG",
          meaning: "Rộng, mở rộng, lan rộng",
          strokes: 5,
          onyomi: ["コウ"],
          kunyomi: ["ひろ-い", "ひろ-がる", "ひろ-げる"],
          radical: "广 (Nghiễm - Mái nhà rộng)",
          components: "广 (Mái nhà sườn núi) + 厶 (Khư)",
          mnemonic: "Dưới mái hiên lớn (广) có không gian thoáng đãng (厶) vô cùng RỘNG RÃI (広).",
          lookalikes: [
            { char: "店", hanViet: "ĐIẾM", diff: "Bên trong bộ Nghiễm (广) là chữ Chiêm (占) - cửa tiệm" },
            { char: "庁", hanViet: "SẢNH", diff: "Bên trong bộ Nghiễm (广) là chữ Đinh (丁) - cơ quan" }
          ],
          words: [
            { word: "広い", reading: "ひろい", hanViet: "QUẢNG", meaning: "Rộng rãi", level: "N5", type: "kun" },
            { word: "広がる", reading: "ひろがる", hanViet: "QUẢNG", meaning: "Lan rộng, mở rộng (Tự động từ)", level: "N4", type: "kun" },
            { word: "広げる", reading: "ひろげる", hanViet: "QUẢNG", meaning: "Trải ra, mở rộng (Tha động từ)", level: "N4", type: "kun" },
            { word: "広大", reading: "こうだい", hanViet: "QUẢNG ĐẠI", meaning: "Rộng lớn, mênh mông", level: "N4", type: "on" },
            { word: "広場", reading: "ひろば", hanViet: "QUẢNG TRƯỜNG", meaning: "Quảng trường, bãi rộng", level: "N4", type: "kun" }
          ],
          examples: [
            {
              jp: "川上さんの 部屋は 広くて きれいです。",
              reading: "かわかみさんの へやは ひろくて きれいです。",
              vi: "Phòng của bạn Kawakami vừa rộng vừa đẹp."
            },
            {
              jp: "電車の中で 足を 広げて すわらないでください。",
              reading: "でんしゃのなかで あしを ひろげて すわらないでください。",
              vi: "Xin đừng ngồi dạng rộng chân ở trong tàu điện."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "アフリカには 【広大な】 さばくが あります。",
              target: "広大な",
              answer: "こうだいな",
              options: ["こうだいな", "ひろだいな", "こうたいな", "ひろおおな"],
              hint: "Rộng lớn mênh mông (QUẢNG ĐẠI)."
            },
            {
              type: "kanji",
              question: "まんいん電車の 中で 新聞を 【ひろげないで】ください。",
              target: "ひろげないで",
              answer: "広げないで",
              options: ["広げないで", "店げないで", "度げないで", "床げないで"],
              hint: "Trải rộng tờ báo ra (Tha động từ)."
            }
          ]
        },
        {
          char: "低",
          hanViet: "ĐÊ",
          meaning: "Thấp, hạ thấp, suy giảm",
          strokes: 7,
          onyomi: ["テイ"],
          kunyomi: ["ひく-い", "ひく-める", "ひく-まる"],
          radical: "亻 (Nhân đứng - Người)",
          components: "亻 (Người) + 氏 (Thị - Họ) + 一 (Một nét gạch dưới đất)",
          mnemonic: "Người (亻) cúi mình xuống sát mặt đất (一) ở vị trí THẤP (低).",
          lookalikes: [
            { char: "底", hanViet: "ĐÁY", diff: "Phía trên là bộ Nghiễm (广) thay vì Nhân đứng (亻) - cái đáy" },
            { char: "紙", hanViet: "CHỈ", diff: "Bên trái là bộ Mịch (糸), không có nét gạch ngang dưới cùng - tờ giấy" }
          ],
          words: [
            { word: "低い", reading: "ひくい", hanViet: "ĐÊ", meaning: "Thấp", level: "N4", type: "kun" },
            { word: "低下", reading: "ていか", hanViet: "ĐÊ HẠ", meaning: "Sụt giảm, hạ thấp", level: "N4", type: "on" },
            { word: "低学年", reading: "ていがくねん", hanViet: "ĐÊ HỌC NIÊN", meaning: "Khối lớp nhỏ (lớp 1, 2 tiểu học)", level: "N4", type: "on" },
            { word: "高低", reading: "こうてい", hanViet: "CAO ĐÊ", meaning: "Cao thấp, độ chênh lệch", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "私は せが 低いので 高いところが とどきません。",
              reading: "わたしは せが ひくいので たかいところが とどきません。",
              vi: "Vì tôi thấp bé nên không với tới được chỗ cao."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "今日の よるは 気おんが 【低下】します。",
              target: "低下",
              answer: "ていか",
              options: ["ていか", "ひくか", "ていげ", "ひくした"],
              hint: "Nhiệt độ hạ thấp (ĐÊ HẠ)."
            },
            {
              type: "kanji",
              question: "私は せが 【ひくくて】 高い ところが とどきません。",
              target: "ひくくて",
              answer: "低くて",
              options: ["低くて", "底くて", "紙くて", "短くて"],
              hint: "Chiều cao thấp (ĐÊ)."
            }
          ]
        },
        {
          char: "緑",
          hanViet: "LỤC",
          meaning: "Màu xanh lá cây, cây xanh",
          strokes: 14,
          onyomi: ["リョク", "ロク"],
          kunyomi: ["みどり"],
          radical: "糸 (Mịch - Sợi tơ)",
          components: "糸 (Sợi tơ) + 彔 (Lộc - Khắc gỗ, nước chảy)",
          mnemonic: "Sợi tơ (糸) được nhuộm bằng lá cây bên dòng nước trong (彔) tạo nên màu XANH LÁ (緑).",
          lookalikes: [
            { char: "縁", hanViet: "DUYÊN", diff: "Bên phải phía dưới là chữ Thỉ (豕) - nhân duyên" },
            { char: "録", hanViet: "LỤC", diff: "Bên trái là bộ Kim (金) - ghi chép, kỷ lục" }
          ],
          words: [
            { word: "緑", reading: "みどり", hanViet: "LỤC", meaning: "Màu xanh lá, cây xanh", level: "N5", type: "kun" },
            { word: "緑色", reading: "みどりいろ", hanViet: "LỤC SẮC", meaning: "Màu xanh lá cây", level: "N4", type: "kun" },
            { word: "緑茶", reading: "りょくちゃ", hanViet: "LỤC TRÀ", meaning: "Trà xanh", level: "N4", type: "on" },
            { word: "新緑", reading: "しんりょく", hanViet: "TÂN LỤC", meaning: "Lá non đầu mùa", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "まんじゅうを 食べながら 緑茶を 飲みます。",
              reading: "まんじゅうを たべながら りょくちゃを のみます。",
              vi: "Tôi vừa ăn bánh bao ngọt vừa uống trà xanh."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "3時の 休けいに 【緑茶】を 飲みました。",
              target: "緑茶",
              answer: "りょくちゃ",
              options: ["りょくちゃ", "みどりちゃ", "ろくちゃ", "あおちゃ"],
              hint: "Trà xanh (LỤC TRÀ)."
            },
            {
              type: "kanji",
              question: "5月は 【しんりょく】が きれいな きせつです。",
              target: "しんりょく",
              answer: "新緑",
              options: ["新緑", "新録", "新青", "森緑"],
              hint: "Lá xanh non (TÂN LỤC)."
            }
          ]
        },
        {
          char: "静",
          hanViet: "TĨNH",
          meaning: "Yên tĩnh, bình tĩnh",
          strokes: 14,
          onyomi: ["セイ", "ジョウ"],
          kunyomi: ["しず-か", "しず-まる", "しず-める"],
          radical: "青 (Thanh - Màu xanh)",
          components: "青 (Màu xanh) + 争 (Tranh - Tranh giành)",
          mnemonic: "Giữa bầu trời xanh (青), mọi sự tranh giành (争) đều lắng xuống để trở nên YÊN TĨNH (静).",
          lookalikes: [
            { char: "晴", hanViet: "TINH", diff: "Bên trái là bộ Nhật (日), bên phải là chữ Thanh (青) - trời nắng" },
            { char: "清", hanViet: "THANH", diff: "Bên trái là bộ Thủy (氵) - trong sạch" }
          ],
          words: [
            { word: "静か", reading: "しずか", hanViet: "TĨNH", meaning: "Yên tĩnh", level: "N5", type: "kun" },
            { word: "冷静", reading: "れいせい", hanViet: "LÃNH TĨNH", meaning: "Bình tĩnh, điềm tĩnh", level: "N4", type: "on" },
            { word: "静電気", reading: "せいでんき", hanViet: "TĨNH ĐIỆN KHÍ", meaning: "Tĩnh điện", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "すみません、すこし 静かに してください。",
              reading: "すみません、すこし しずかに してください。",
              vi: "Xin lỗi, vui lòng giữ trật tự một chút."
            },
            {
              jp: "じしんの ときも かれは れい静に 行どうしました。",
              reading: "じしんの ときも かれは れいせいに こうどうしました。",
              vi: "Ngay cả khi có động đất anh ấy vẫn hành động rất bình tĩnh."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "テスト中は 【静かに】 してください。",
              target: "静かに",
              answer: "しずかに",
              options: ["しずかに", "せいかに", "あきらかに", "ゆたかに"],
              hint: "Giữ yên lặng (TĨNH)."
            },
            {
              type: "kanji",
              question: "川上さんは いつも 【れいせい】で おちついています。",
              target: "れいせい",
              answer: "れい静",
              options: ["れい静", "れい晴", "れい清", "れい精"],
              hint: "Bình tĩnh, điềm đạm (LÃNH TĨNH)."
            }
          ]
        },
        {
          char: "近",
          hanViet: "CẬN",
          meaning: "Gần, dạo gần đây",
          strokes: 7,
          onyomi: ["キン"],
          kunyomi: ["ちか-い", "ちか-づく"],
          radical: "辶 (Sước - Bước đi)",
          components: "斤 (Cân - Cái rìu) + 辶 (Bước đi)",
          mnemonic: "Cầm chiếc rìu (斤) bước đi (辶) vài bước là tới nơi GẦN (近) nhà.",
          lookalikes: [
            { char: "遠", hanViet: "VIỄN", diff: "Bên trong là chữ Viên (袁) nhiều nét - nghĩa là Xa" },
            { char: "新", hanViet: "TÂN", diff: "Bên trái là chữ Thân (親 bỏ 見), bên phải là bộ Cân (斤) - mới" }
          ],
          words: [
            { word: "近い", reading: "ちかい", hanViet: "CẬN", meaning: "Gần", level: "N5", type: "kun" },
            { word: "近く", reading: "ちかく", hanViet: "CẬN", meaning: "Ở gần, vùng lân cận", level: "N5", type: "kun" },
            { word: "近づく", reading: "ちかづく", hanViet: "CẬN", meaning: "Tiến lại gần", level: "N4", type: "kun" },
            { word: "最近", reading: "さいきん", hanViet: "TỐI CẬN", meaning: "Dạo gần đây", level: "N4", type: "on" },
            { word: "近所", reading: "きんじょ", hanViet: "CẬN SỞ", meaning: "Hàng xóm, vùng lân cận", level: "N4", type: "on" },
            { word: "近道", reading: "ちかみち", hanViet: "CẬN ĐẠO", meaning: "Đường tắt", level: "N4", type: "kun" }
          ],
          examples: [
            {
              jp: "このみちは 学校への 近みちです。",
              reading: "このみちは がっこうへの ちかみちです。",
              vi: "Con đường này là đường tắt tới trường học."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "【さい近】 あつい日が つづいています。",
              target: "さい近",
              answer: "さいきん",
              options: ["さいきん", "さいちか", "もっきん", "さいこん"],
              hint: "Dạo gần đây (TỐI CẬN)."
            },
            {
              type: "kanji",
              question: "家の 【ちかく】に 古い お寺が あります。",
              target: "ちかく",
              answer: "近く",
              options: ["近く", "遠く", "遅く", "速く"],
              hint: "Ở gần nhà (CẬN)."
            }
          ]
        },
        {
          char: "遠",
          hanViet: "VIỄN",
          meaning: "Xa, xa xôi",
          strokes: 13,
          onyomi: ["エン"],
          kunyomi: ["とお-い", "とお-く"],
          radical: "辶 (Sước - Bước đi)",
          components: "袁 (Viên - Áo dài: 土 + 口 + 衣) + 辶 (Bước đi)",
          mnemonic: "Mặc áo dài chỉnh tề (袁) bước đi (辶) một chặng đường dài tới phương XA (遠).",
          lookalikes: [
            { char: "園", hanViet: "VIÊN", diff: "Bao quanh bởi bộ Vi (囗) thay vì bộ Sước (辶) - công viên, vườn" },
            { char: "遅", hanViet: "TRÌ", diff: "Bên trong là bộ Thi + Dương (犀) - muộn, chậm" }
          ],
          words: [
            { word: "遠い", reading: "とおい", hanViet: "VIỄN", meaning: "Xa", level: "N5", type: "kun" },
            { word: "遠く", reading: "とおく", hanViet: "VIỄN", meaning: "Nơi xa, ở đằng xa", level: "N5", type: "kun" },
            { word: "遠足", reading: "えんそく", hanViet: "VIỄN TÚC", meaning: "Chuyến dã ngoại", level: "N4", type: "on" },
            { word: "望遠鏡", reading: "ぼうえんきょう", hanViet: "VỌNG VIỄN KÍNH", meaning: "Kính viễn vọng, ống nhòm", level: "N4", type: "on" },
            { word: "遠近", reading: "えんきん", hanViet: "VIỄN CẬN", meaning: "Xa gần", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "私の 家は えきから 遠いので バスに のります。",
              reading: "わたしの いえは えきから とおいので バスに のります。",
              vi: "Nhà tôi xa nhà ga nên tôi đi xe buýt."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "【ぼう遠きょう】で 月を かんさつしました。",
              target: "ぼう遠きょう",
              answer: "ぼうえんきょう",
              options: ["ぼうえんきょう", "ぼうとおきょう", "ぼうえんぎょう", "ぼおんきょう"],
              hint: "Kính viễn vọng (VỌNG VIỄN KÍNH)."
            },
            {
              type: "kanji",
              question: "家から かいしゃまで 【とおくて】 大へんです。",
              target: "とおくて",
              answer: "遠くて",
              options: ["遠くて", "園くて", "近くて", "遅くて"],
              hint: "Từ nhà đến công ty xa (VIỄN)."
            }
          ]
        }
      ]
    },
    {
      id: "1-3",
      number: 3,
      titleJp: "しごと",
      reading: "しごと",
      titleVi: "Công việc",
      introJp: "あなたは どんな しごとに きょうみが ありますか。じ分や 家族の しごとについて 聞いたり 話したり できるように なりましょう。",
      introVi: "Bạn có hứng thú với công việc như thế nào? Hãy học cách hỏi và nói về công việc của bản thân và gia đình nhé.",
      kanjiList: [
        {
          char: "会",
          hanViet: "HỘI",
          meaning: "Gặp gỡ, hội họp, công ty",
          strokes: 6,
          onyomi: ["カイ", "エ"],
          kunyomi: ["あ-う"],
          radical: "人 (Nhân - Người / Nón)",
          components: "𠆢 (Mái nhà/Nón) + 云 (Vân - Đám mây, nói chuyện)",
          mnemonic: "Mọi người tụ tập dưới một mái nhà (𠆢) cùng trò chuyện (云) là GẶP GỠ, HỘI HỌP (会).",
          lookalikes: [
            { char: "合", hanViet: "HỢP", diff: "Phía dưới là bộ Khẩu (口) - hợp lại, vừa vặn" },
            { char: "今", hanViet: "KIM", diff: "Phía dưới là chữ フ - bây giờ" }
          ],
          words: [
            { word: "会う", reading: "あう", hanViet: "HỘI", meaning: "Gặp gỡ", level: "N5", type: "kun" },
            { word: "会社", reading: "かいしゃ", hanViet: "HỘI XÃ", meaning: "Công ty", level: "N5", type: "on" },
            { word: "会話", reading: "かいわ", hanViet: "HỘI THOẠI", meaning: "Hội thoại, trò chuyện", level: "N4", type: "on" },
            { word: "会議", reading: "かいぎ", hanViet: "HỘI NGHỊ", meaning: "Cuộc họp, hội nghị", level: "N4", type: "on" },
            { word: "会場", reading: "かいじょう", hanViet: "HỘI TRƯỜNG", meaning: "Hội trường, địa điểm tổ chức", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "父は コンピュータの 会社で 働いています。",
              reading: "ちちは コンピュータの かいしゃで はたらいています。",
              vi: "Bố tôi làm việc tại một công ty máy tính."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "今日の 【会ぎ】は とても 重ようなので 遅れないでください。",
              target: "会ぎ",
              answer: "かいぎ",
              options: ["かいぎ", "あいぎ", "えぎ", "ごうぎ"],
              hint: "Cuộc họp (HỘI NGHỊ)."
            },
            {
              type: "kanji",
              question: "父は コンピュータの 【かいしゃ】で 働いています。",
              target: "かいしゃ",
              answer: "会社",
              options: ["会社", "合社", "会者", "公社"],
              hint: "Công ty (HỘI XÃ)."
            }
          ]
        },
        {
          char: "社",
          hanViet: "XÃ",
          meaning: "Công ty, xã hội, đền thần",
          strokes: 7,
          onyomi: ["シャ"],
          kunyomi: ["やしろ"],
          radical: "礻 (Thị - Thần đất, lễ tế)",
          components: "礻 (Thị - Bàn thờ thần) + 土 (Thổ - Đất)",
          mnemonic: "Nơi lập bàn thờ thần (礻) cai quản vùng đất (土) để mọi người tụ họp tạo nên XÃ HỘI, ĐỀN THẦN, CÔNG TY (社).",
          lookalikes: [
            { char: "礼", hanViet: "LỄ", diff: "Bên phải là nét sổ móc (乚) - lễ phép, cảm ơn" },
            { char: "祉", hanViet: "CHỈ", diff: "Bên phải là chữ Chỉ (止) - phúc lợi" }
          ],
          words: [
            { word: "会社", reading: "かいしゃ", hanViet: "HỘI XÃ", meaning: "Công ty", level: "N5", type: "on" },
            { word: "社長", reading: "しゃちょう", hanViet: "XÃ TRƯỞNG", meaning: "Giám đốc công ty", level: "N5", type: "on" },
            { word: "社会", reading: "しゃかい", hanViet: "XÃ HỘI", meaning: "Xã hội", level: "N4", type: "on" },
            { word: "神社", reading: "じんじゃ", hanViet: "THẦN XÃ", meaning: "Đền Thần đạo (Shinto)", level: "N4", type: "on" },
            { word: "本社", reading: "ほんしゃ", hanViet: "BẢN XÃ", meaning: "Trụ sở chính", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "私の 家は 会社から 近いです。",
              reading: "わたしの いえは かいしゃから ちかいです。",
              vi: "Nhà tôi ở gần công ty."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "すず木さんの ご主人は 有名な 会社の 【社長】です。",
              target: "社長",
              answer: "しゃちょう",
              options: ["しゃちょう", "じゃちょう", "かいちょう", "ぶちょう"],
              hint: "Giám đốc công ty (XÃ TRƯỞNG)."
            },
            {
              type: "kanji",
              question: "私の 家は 【かいしゃ】から 近いです。",
              target: "かいしゃ",
              answer: "会社",
              options: ["会社", "会礼", "合社", "公社"],
              hint: "Công ty (HỘI XÃ)."
            }
          ]
        },
        {
          char: "働",
          hanViet: "ĐỘNG",
          meaning: "Làm việc, lao động",
          strokes: 13,
          onyomi: ["ドウ"],
          kunyomi: ["はたら-く"],
          radical: "亻 (Nhân đứng - Người)",
          components: "亻 (Người) + 動 (Động - Chuyển động: 重 + 力)",
          mnemonic: "Con người (亻) vận động cơ thể và sức lực (動) để LÀM VIỆC, LAO ĐỘNG (働).",
          lookalikes: [
            { char: "動", hanViet: "ĐỘNG", diff: "Không có bộ Nhân đứng (亻) ở bên trái - chuyển động, cử động" }
          ],
          words: [
            { word: "働く", reading: "はたらく", hanViet: "ĐỘNG", meaning: "Làm việc, lao động", level: "N5", type: "kun" },
            { word: "労働", reading: "ろうどう", hanViet: "LAO ĐỘNG", meaning: "Sự lao động", level: "N4", type: "on" },
            { word: "共働き", reading: "ともばたらき", hanViet: "CỘNG ĐỘNG", meaning: "Hai vợ chồng cùng đi làm", level: "N4", type: "kun" }
          ],
          examples: [
            {
              jp: "父は 工場で 働いています。",
              reading: "ちちは こうじょうで はたらいています。",
              vi: "Bố tôi đang làm việc ở nhà máy."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "父は コンピュータの 会社で 【働いて】います。",
              target: "働いて",
              answer: "はたらいて",
              options: ["はたらいて", "うごいて", "どういて", "かれて"],
              hint: "Làm việc ở công ty."
            },
            {
              type: "kanji",
              question: "姉と おなじ ぎんこうで 【はたらいて】いる 人です。",
              target: "はたらいて",
              answer: "働いて",
              options: ["働いて", "動いて", "重いて", "行いて"],
              hint: "Con người (亻) vận động (動) để làm việc."
            }
          ]
        },
        {
          char: "作",
          hanViet: "TÁC",
          meaning: "Làm ra, chế tạo, sáng tác",
          strokes: 7,
          onyomi: ["サク", "サ"],
          kunyomi: ["つく-る"],
          radical: "亻 (Nhân đứng - Người)",
          components: "亻 (Người) + 乍 (Trạ - Chợt, bắt đầu dựng lên)",
          mnemonic: "Con người (亻) bắt tay vào chế tạo (乍) để LÀM RA, SÁNG TÁC (作) sản phẩm.",
          lookalikes: [
            { char: "昨", hanViet: "TẠC", diff: "Bên trái là bộ Nhật (日) thay vì Nhân đứng (亻) - hôm qua (昨日)" }
          ],
          words: [
            { word: "作る", reading: "つくる", hanViet: "TÁC", meaning: "Làm, chế tạo, nấu", level: "N5", type: "kun" },
            { word: "作文", reading: "さくぶん", hanViet: "TÁC VĂN", meaning: "Bài văn, viết văn", level: "N4", type: "on" },
            { word: "作品", reading: "さくひん", hanViet: "TÁC PHẨM", meaning: "Tác phẩm", level: "N4", type: "on" },
            { word: "作家", reading: "さっか", hanViet: "TÁC GIA", meaning: "Nhà văn, tác giả", level: "N4", type: "on" },
            { word: "作業", reading: "さぎょう", hanViet: "TÁC NGHIỆP", meaning: "Công tác, thao tác làm việc", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "母が いそがしいときは ときどき わたしが ごはんを 作ります。",
              reading: "ははが いそがしいときは ときどき わたしが ごはんを つくります。",
              vi: "Khi mẹ bận thì thỉnh thoảng tôi nấu cơm."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "近所の 本屋で 人気の 【作家】の サイン会が ありました。",
              target: "作家",
              answer: "さっか",
              options: ["さっか", "さくか", "つくりや", "さか"],
              hint: "Nhà văn (TÁC GIA - có âm ngắt っ)."
            },
            {
              type: "kanji",
              question: "かみひこうきを 【つくって】 あそびます。",
              target: "つくって",
              answer: "作って",
              options: ["作って", "昨って", "使って", "仕って"],
              hint: "Làm máy bay giấy (TÁC)."
            }
          ]
        },
        {
          char: "工",
          hanViet: "CÔNG",
          meaning: "Công nghiệp, chế tạo, người thợ",
          strokes: 3,
          onyomi: ["コウ", "ク"],
          kunyomi: [],
          radical: "工 (Công - Người thợ, cái thước)",
          components: "工 (Hình chiếc thước thợ nối trời và đất)",
          mnemonic: "Hình ảnh chiếc thước chữ T của người thợ xây dựng, đại diện cho CÔNG VIỆC, KỸ THUẬT (工).",
          lookalikes: [
            { char: "土", hanViet: "THỔ", diff: "Nét sổ nhô lên khỏi nét ngang trên - đất đai" },
            { char: "玉", hanViet: "NGỌC", diff: "Có 3 nét ngang và 1 dấu chấm - viên ngọc" }
          ],
          words: [
            { word: "工場", reading: "こうじょう", hanViet: "CÔNG TRƯỜNG", meaning: "Nhà máy, công xưởng", level: "N4", type: "on" },
            { word: "工事", reading: "こうじ", hanViet: "CÔNG SỰ", meaning: "Công trình thi công, sửa chữa", level: "N4", type: "on" },
            { word: "工学", reading: "こうがく", hanViet: "CÔNG HỌC", meaning: "Ngành kỹ thuật / công nghệ", level: "N4", type: "on" },
            { word: "大工", reading: "だいく", hanViet: "ĐẠI CÔNG", meaning: "Thợ mộc", level: "N4", type: "on" },
            { word: "工夫", reading: "くふう", hanViet: "CÔNG PHU", meaning: "Tìm tòi, sáng kiến", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "兄の 大学の せん門は きかい工学です。",
              reading: "あにの だいがくの せんもんは きかいこうがくです。",
              vi: "Chuyên ngành đại học của anh trai tôi là kỹ thuật cơ khí."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "兄は 大学の せん門は きかい【工学】です。",
              target: "工学",
              answer: "こうがく",
              options: ["こうがく", "くがく", "こうまなぶ", "どがく"],
              hint: "Ngành kỹ thuật (CÔNG HỌC)."
            },
            {
              type: "kanji",
              question: "土日は 近くの 【こうじょう】で アルバイトを しています。",
              target: "こうじょう",
              answer: "工場",
              options: ["工場", "土場", "広場", "会場"],
              hint: "Nhà máy, phân xưởng (CÔNG TRƯỜNG)."
            }
          ]
        },
        {
          char: "場",
          hanViet: "TRƯỜNG",
          meaning: "Nơi chốn, địa điểm, quảng trường",
          strokes: 12,
          onyomi: ["ジョウ"],
          kunyomi: ["ば"],
          radical: "土 (Thổ - Đất)",
          components: "土 (Đất) + 易 (Dịch - Mặt trời mọc chiếu sáng)",
          mnemonic: "Vùng đất (土) rộng rãi nơi ánh mặt trời (日) chiếu rọi (勿) là ĐỊA ĐIỂM, QUẢNG TRƯỜNG (場).",
          lookalikes: [
            { char: "湯", hanViet: "THANG", diff: "Bên trái là bộ Thủy (氵) thay vì bộ Thổ (土) - nước nóng" },
            { char: "陽", hanViet: "DƯƠNG", diff: "Bên trái là bộ Phụ (阝) - ánh nắng mặt trời" }
          ],
          words: [
            { word: "場所", reading: "ばしょ", hanViet: "TRƯỜNG SỞ", meaning: "Địa điểm, nơi chốn", level: "N4", type: "kun" },
            { word: "工場", reading: "こうじょう", hanViet: "CÔNG TRƯỜNG", meaning: "Nhà máy, xí nghiệp", level: "N4", type: "on" },
            { word: "会場", reading: "かいじょう", hanViet: "HỘI TRƯỜNG", meaning: "Hội trường, nơi tổ chức", level: "N4", type: "on" },
            { word: "売り場", reading: "うりば", hanViet: "MẠI TRƯỜNG", meaning: "Quầy bán hàng", level: "N4", type: "kun" },
            { word: "駐車場", reading: "ちゅうしゃじょう", hanViet: "TRÚ XA TRƯỜNG", meaning: "Bãi đỗ xe", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "インターネットで 東京タワーの 場所を しらべます。",
              reading: "インターネットで とうきょうタワーの ばしょを しらべます。",
              vi: "Tôi tra cứu địa điểm tháp Tokyo trên Internet."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "インターネットで 東京タワーの 【場所】を しらべます。",
              target: "場所",
              answer: "ばしょ",
              options: ["ばしょ", "じょうしょ", "ばところ", "じょうじょ"],
              hint: "Địa điểm, nơi chốn (TRƯỜNG SỞ)."
            },
            {
              type: "kanji",
              question: "いりょうひん【うりば】は 二かいと 三がいです。",
              target: "うりば",
              answer: "売り場",
              options: ["売り場", "売り所", "売り屋", "売り店"],
              hint: "Quầy bán hàng (MẠI TRƯỜNG)."
            }
          ]
        },
        {
          char: "始",
          hanViet: "THỦY",
          meaning: "Bắt đầu, khởi đầu",
          strokes: 8,
          onyomi: ["シ"],
          kunyomi: ["はじ-める", "はじ-まる"],
          radical: "女 (Nữ - Người phụ nữ)",
          components: "女 (Người mẹ/phụ nữ) + 台 (Đài - Bệ đỡ, thai nghén)",
          mnemonic: "Người phụ nữ (女) mang thai (台) chính là sự KHỞI ĐẦU, BẮT ĐẦU (始) của một sinh mệnh mới.",
          lookalikes: [
            { char: "治", hanViet: "TRỊ", diff: "Bên trái là bộ Thủy (氵) thay vì bộ Nữ (女) - cai trị, chữa trị" }
          ],
          words: [
            { word: "始まる", reading: "はじまる", hanViet: "THỦY", meaning: "Bắt đầu (Tự động từ)", level: "N5", type: "kun" },
            { word: "始める", reading: "はじめる", hanViet: "THỦY", meaning: "Bắt đầu làm gì (Tha động từ)", level: "N4", type: "kun" },
            { word: "開始", reading: "かいし", hanViet: "KHAI THỦY", meaning: "Sự bắt đầu, khai cuộc", level: "N4", type: "on" },
            { word: "年始", reading: "ねんし", hanViet: "NIÊN THỦY", meaning: "Đầu năm mới", level: "N4", type: "on" },
            { word: "始発", reading: "しはつ", hanViet: "THỦY PHÁT", meaning: "Chuyến tàu/xe đầu tiên trong ngày", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "しごとは 9時に 始まります。",
              reading: "しごとは くじに はじまります。",
              vi: "Công việc bắt đầu lúc 9 giờ."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "ダイエットを 【始めました】。",
              target: "始めました",
              answer: "はじめました",
              options: ["はじめました", "はじまりました", "しめました", "とめました"],
              hint: "Bắt đầu ăn kiêng (Tha động từ đi với を)."
            },
            {
              type: "kanji",
              question: "学校は ごぜん9時から 【はじまります】。",
              target: "はじまります",
              answer: "始まります",
              options: ["始まります", "治まります", "終まります", "開まります"],
              hint: "Trường học bắt đầu (THỦY)."
            }
          ]
        },
        {
          char: "終",
          hanViet: "CHUNG",
          meaning: "Kết thúc, cuối cùng",
          strokes: 11,
          onyomi: ["シュウ"],
          kunyomi: ["お-わる", "お-える"],
          radical: "糸 (Mịch - Sợi tơ)",
          components: "糸 (Sợi tơ) + 冬 (Đông - Mùa đông)",
          mnemonic: "Cuộn tơ (糸) đã dệt xong khi mùa đông (冬) khép lại một năm, báo hiệu sự KẾT THÚC (終).",
          lookalikes: [
            { char: "絡", hanViet: "LẠC", diff: "Bên phải là chữ Các (各) - liên lạc" },
            { char: "続", hanViet: "TỤC", diff: "Bên phải là chữ Mại (売) - tiếp tục" }
          ],
          words: [
            { word: "終わる", reading: "おわる", hanViet: "CHUNG", meaning: "Kết thúc, xong (Tự động từ)", level: "N5", type: "kun" },
            { word: "終える", reading: "おえる", hanViet: "CHUNG", meaning: "Làm xong, hoàn thành (Tha động từ)", level: "N4", type: "kun" },
            { word: "終電", reading: "しゅうでん", hanViet: "CHUNG ĐIỆN", meaning: "Chuyến tàu điện cuối cùng", level: "N4", type: "on" },
            { word: "最終", reading: "さいしゅう", hanViet: "TỐI CHUNG", meaning: "Cuối cùng", level: "N4", type: "on" },
            { word: "終点", reading: "しゅうてん", hanViet: "CHUNG ĐIỂM", meaning: "Trạm cuối, bến cuối", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "終電に のれなかったので あるいて 家まで 帰りました。",
              reading: "しゅうでんに のれなかったので あるいて いえまで かえりました。",
              vi: "Vì không kịp lên chuyến tàu cuối nên tôi đã đi bộ về nhà."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "【終電】に のれなかったので あるいて 家まで 帰りました。",
              target: "終電",
              answer: "しゅうでん",
              options: ["しゅうでん", "おわりでん", "しゅうてん", "さいでん"],
              hint: "Chuyến tàu điện cuối cùng trong ngày (CHUNG ĐIỆN)."
            },
            {
              type: "kanji",
              question: "問題が 【おわったら】 じ分で 丸を つけましょう。",
              target: "おわったら",
              answer: "終わったら",
              options: ["終わったら", "冬わったら", "続わったら", "始わったら"],
              hint: "Sau khi làm xong câu hỏi (CHUNG)."
            }
          ]
        }
      ]
    }
  ]
});

window.KANJI_CHAPTERS.push({
  id: 2,
  titleJp: "2章 コンビニ",
  titleVi: "Chương 2: Cửa hàng tiện lợi",
  icon: "🏪",
  lessons: [
    {
      id: "2-1",
      number: 1,
      titleJp: "レジ",
      reading: "レジ",
      titleVi: "Quầy thu ngân",
      introJp: "コンビニは とても 便利です。お店の 人も 親切です。レジで お金を はらったり おべん当を あたためてもらったりします。",
      introVi: "Cửa hàng tiện lợi rất tiện ích. Nhân viên cửa hàng cũng thân thiện. Ở quầy thu ngân ta có thể trả tiền hoặc nhờ hâm nóng cơm hộp.",
      kanjiList: [
        {
          char: "店",
          hanViet: "ĐIẾM",
          meaning: "Cửa hàng, quán, tiệm",
          strokes: 8,
          onyomi: ["テン"],
          kunyomi: ["みせ"],
          radical: "广 (Nghiễm - Mái nhà)",
          components: "广 (Mái nhà) + 占 (Chiêm - Chiếm giữ vị trí)",
          mnemonic: "Dựng mái nhà (广) chiếm một vị trí tốt (占) trên phố để mở CỬA HÀNG (店).",
          lookalikes: [
            { char: "広", hanViet: "QUẢNG", diff: "Bên trong là chữ Khư (厶) - rộng rãi" },
            { char: "度", hanViet: "ĐỘ", diff: "Bên trong là chữ Hựu (又) và Thảo - mức độ, số lần" }
          ],
          words: [
            { word: "店", reading: "みせ", hanViet: "ĐIẾM", meaning: "Cửa hàng, quán", level: "N5", type: "kun" },
            { word: "店員", reading: "てんいん", hanViet: "ĐIẾM VIÊN", meaning: "Nhân viên cửa hàng", level: "N4", type: "on" },
            { word: "本店", reading: "ほんてん", hanViet: "BẢN ĐIẾM", meaning: "Cửa hàng chính", level: "N4", type: "on" },
            { word: "支店", reading: "してん", hanViet: "CHI ĐIẾM", meaning: "Chi nhánh", level: "N4", type: "on" },
            { word: "店内", reading: "てんない", hanViet: "ĐIẾM NỘI", meaning: "Bên trong cửa hàng", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "うちの 近くに 新しい 店が できました。",
              reading: "うちの ちかくに あたらしい みせが できました。",
              vi: "Ở gần nhà tôi mới mở một cửa hàng mới."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "【店員】も みんな 親切です。",
              target: "店員",
              answer: "てんいん",
              options: ["てんいん", "みせいん", "てんい", "みせびと"],
              hint: "Nhân viên cửa hàng (ĐIẾM VIÊN)."
            },
            {
              type: "kanji",
              question: "北かい道に ある 【してん】に てんきんする からです。",
              target: "してん",
              answer: "支店",
              options: ["支店", "支広", "支屋", "支社"],
              hint: "Chi nhánh cửa hàng/ngân hàng (CHI ĐIẾM)."
            }
          ]
        },
        {
          char: "客",
          hanViet: "KHÁCH",
          meaning: "Khách, khách hàng, hành khách",
          strokes: 9,
          onyomi: ["キャク", "カク"],
          kunyomi: [],
          radical: "宀 (Miên - Mái nhà)",
          components: "宀 (Mái nhà) + 各 (Các - Mỗi người)",
          mnemonic: "Mỗi người (各) từ phương xa bước vào dưới mái nhà (宀) đều là KHÁCH QUÝ (客).",
          lookalikes: [
            { char: "容", hanViet: "DUNG", diff: "Bên dưới mái nhà là bộ Cốc (谷) - nội dung, dung mạo" },
            { char: "落", hanViet: "LẠC", diff: "Phía trên là bộ Thảo (艹) và có bộ Thủy (氵) - rơi, rụng" }
          ],
          words: [
            { word: "お客様", reading: "おきゃくさま", hanViet: "KHÁCH DẠNG", meaning: "Quý khách", level: "N4", type: "on" },
            { word: "お客さん", reading: "おきゃくさん", hanViet: "KHÁCH", meaning: "Khách hàng, vị khách", level: "N4", type: "on" },
            { word: "客間", reading: "きゃくま", hanViet: "KHÁCH GIAN", meaning: "Phòng khách", level: "N4", type: "on" },
            { word: "乗客", reading: "じょうきゃく", hanViet: "THỪA KHÁCH", meaning: "Hành khách (trên tàu/xe)", level: "N4", type: "on" },
            { word: "客船", reading: "きゃくせん", hanViet: "KHÁCH THUYỀN", meaning: "Tàu chở khách", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "昼は たくさんの お客さんが 利ようします。",
              reading: "ひるは たくさんの おきゃくさんが りようします。",
              vi: "Vào buổi trưa có rất nhiều khách hàng sử dụng dịch vụ."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "りょうりが できました。すぐ 【お客様】に 出してください。",
              target: "お客様",
              answer: "おきゃくさま",
              options: ["おきゃくさま", "おかくさま", "おきやくさま", "おきゃくさん"],
              hint: "Quý khách (KHÁCH DẠNG)."
            },
            {
              type: "kanji",
              question: "昼は たくさんの 【おきゃくさん】が 利ようします。",
              target: "おきゃくさん",
              answer: "お客さん",
              options: ["お客さん", "お容さん", "お家さん", "お室さん"],
              hint: "Khách hàng (KHÁCH)."
            }
          ]
        },
        {
          char: "親",
          hanViet: "THÂN",
          meaning: "Cha mẹ, thân thiết, tự mình",
          strokes: 16,
          onyomi: ["シン"],
          kunyomi: ["おや", "した-しい", "した-しむ"],
          radical: "見 (Kiến - Nhìn)",
          components: "立 (Đứng) + 木 (Cây) + 見 (Nhìn)",
          mnemonic: "Người đứng (立) trên ngọn cây (木) dõi mắt nhìn theo (見) con cái đi xa chính là CHA MẸ / NGƯỜI THÂN (親).",
          lookalikes: [
            { char: "新", hanViet: "TÂN", diff: "Bên phải là bộ Cân (斤 - cái rìu) thay vì bộ Kiến (見) - mới" },
            { char: "観", hanViet: "QUAN", diff: "Bên trái là chữ Quán - tham quan, quan sát" }
          ],
          words: [
            { word: "親", reading: "おや", hanViet: "THÂN", meaning: "Cha mẹ, phụ huynh", level: "N4", type: "kun" },
            { word: "両親", reading: "りょうしん", hanViet: "LƯỠNG THÂN", meaning: "Bố mẹ (cả cha lẫn mẹ)", level: "N5", type: "on" },
            { word: "親切", reading: "しんせつ", hanViet: "THÂN THIẾT", meaning: "Tử tế, thân thiện, nhiệt tình", level: "N4", type: "on" },
            { word: "親しい", reading: "したしい", hanViet: "THÂN", meaning: "Thân thiết, gần gũi", level: "N4", type: "kun" },
            { word: "親友", reading: "しんゆう", hanViet: "THÂN HỮU", meaning: "Bạn thân", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "パーティーで 川本さんと 親しく なりました。",
              reading: "パーティーで かわもとさんと したしく なりました。",
              vi: "Ở bữa tiệc tôi đã trở nên thân thiết với bạn Kawamoto."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "パーティーで 川本さんと 【親しく】 なりました。",
              target: "親しく",
              answer: "したしく",
              options: ["したしく", "しんしく", "おやしく", "あたらしく"],
              hint: "Trở nên thân thiết (Tính từ đuôi い đọc âm Kun)."
            },
            {
              type: "kanji",
              question: "お店の 人も みんな 【しんせつ】です。",
              target: "しんせつ",
              answer: "親切",
              options: ["親切", "新切", "心切", "真切"],
              hint: "Tử tế, tốt bụng (THÂN THIẾT)."
            }
          ]
        },
        {
          char: "切",
          hanViet: "THIẾT",
          meaning: "Cắt, hết hạn/hết hàng, quan trọng",
          strokes: 4,
          onyomi: ["セツ", "サイ"],
          kunyomi: ["き-る", "き-れる"],
          radical: "刀 (Đao - Con dao)",
          components: "七 (Thất - Số 7) + 刀 (Đao - Con dao)",
          mnemonic: "Dùng con dao (刀) CẮT (切) làm 7 (七) phần.",
          lookalikes: [
            { char: "功", hanViet: "CÔNG", diff: "Bên trái là chữ Công (工), bên phải là bộ Lực (力) - thành công" }
          ],
          words: [
            { word: "切る", reading: "きる", hanViet: "THIẾT", meaning: "Cắt, ngắt (Tha động từ)", level: "N5", type: "kun" },
            { word: "切れる", reading: "きれる", hanViet: "THIẾT", meaning: "Đứt, hết hạn, hết hàng (Tự động từ)", level: "N4", type: "kun" },
            { word: "切手", reading: "きって", hanViet: "THIẾT THỦ", meaning: "Tem thư", level: "N5", type: "kun" },
            { word: "大切", reading: "たいせつ", hanViet: "ĐẠI THIẾT", meaning: "Quan trọng, quý giá", level: "N4", type: "on" },
            { word: "親切", reading: "しんせつ", hanViet: "THÂN THIẾT", meaning: "Tử tế, ân cần", level: "N4", type: "on" },
            { word: "品切れ", reading: "しなぎれ", hanViet: "PHẨM THIẾT", meaning: "Hết hàng", level: "N4", type: "kun" }
          ],
          examples: [
            {
              jp: "あそこの ケーキは すぐ 品切れに なってしまいます。",
              reading: "あそこの ケーキは すぐ しなぎれに なってしまいます。",
              vi: "Bánh kem ở tiệm đằng kia rất nhanh bị hết hàng."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "なつは あついので かみを みじかく 【切りました】。",
              target: "切りました",
              answer: "きりました",
              options: ["きりました", "きれました", "せつりました", "とりました"],
              hint: "Cắt tóc ngắn (Tha động từ)."
            },
            {
              type: "kanji",
              question: "コンビニで 【きって】を 買うことも できます。",
              target: "きって",
              answer: "切手",
              options: ["切手", "刈手", "分手", "紙手"],
              hint: "Tem thư (THIẾT THỦ)."
            }
          ]
        },
        {
          char: "売",
          hanViet: "MẠI",
          meaning: "Bán, buôn bán",
          strokes: 7,
          onyomi: ["バイ"],
          kunyomi: ["う-る", "う-れる"],
          radical: "士 (Sĩ - Kẻ sĩ)",
          components: "士 (Sĩ) + 冖 (Khăn trùm) + 儿 (Đôi chân)",
          mnemonic: "Người học trò (士) đội khăn (冖) chạy khắp nơi bằng đôi chân (儿) để BÁN HÀNG (売).",
          lookalikes: [
            { char: "買", hanViet: "MÃI", diff: "Phía trên là cái lưới (罒), phía dưới là vỏ sò tiền (貝) - mua" },
            { char: "読", hanViet: "ĐỘC", diff: "Có thêm bộ Ngôn (言) ở bên trái - đọc sách" }
          ],
          words: [
            { word: "売る", reading: "うる", hanViet: "MẠI", meaning: "Bán (Tha động từ)", level: "N5", type: "kun" },
            { word: "売れる", reading: "うれる", hanViet: "MẠI", meaning: "Bán chạy, được bán (Tự động từ)", level: "N4", type: "kun" },
            { word: "売り場", reading: "うりば", hanViet: "MẠI TRƯỜNG", meaning: "Quầy bán hàng", level: "N4", type: "kun" },
            { word: "自動販売機", reading: "じどうはんばいき", hanViet: "TỰ ĐỘNG PHIẾN MẠI CƠ", meaning: "Máy bán hàng tự động", level: "N4", type: "on" },
            { word: "特売", reading: "とくばい", hanViet: "ĐẶC MẠI", meaning: "Bán giảm giá đặc biệt", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "今日は ラーメンを 五百食 売りましょう。",
              reading: "きょうは ラーメンを ごひゃくしょく うりましょう。",
              vi: "Hôm nay chúng ta hãy bán 500 suất mì Ramen nhé."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "古い 洋服を リサイクルショップで 【売ったら】 五千円に なりました。",
              target: "売ったら",
              answer: "うったら",
              options: ["うったら", "かったら", "ばいったら", "よんだら"],
              hint: "Bán quần áo cũ (MẠI)."
            },
            {
              type: "kanji",
              question: "市場では 新しい やさいや 魚を 安く 【うって】います。",
              target: "うって",
              answer: "売って",
              options: ["売って", "買って", "読んで", "続って"],
              hint: "Bán rau và cá (MẠI - phân biệt với 買 là Mua)."
            }
          ]
        },
        {
          char: "当",
          hanViet: "ĐƯƠNG, ĐÁNG",
          meaning: "Trúng, đúng, đương thời, phần cơm",
          strokes: 6,
          onyomi: ["トウ"],
          kunyomi: ["あ-たる", "あ-てる"],
          radical: "小 (Tiểu - Nhỏ)",
          components: "⺌ (Ba tia sáng) + 彐 (Bàn tay nắm giữ)",
          mnemonic: "Bàn tay (彐) nắm bắt đúng điểm sáng (⺌) nên TRÚNG ĐÍCH / ĐÍCH ĐÁNG (当).",
          lookalikes: [
            { char: "雪", hanViet: "TUYẾT", diff: "Phía trên là bộ Vũ (雨 - mưa) - tuyết rơi" }
          ],
          words: [
            { word: "当たる", reading: "あたる", hanViet: "ĐƯƠNG", meaning: "Trúng (số), chiếu vào (Tự động từ)", level: "N4", type: "kun" },
            { word: "当てる", reading: "あてる", hanViet: "ĐƯƠNG", meaning: "Đoán trúng, áp vào (Tha động từ)", level: "N4", type: "kun" },
            { word: "本当", reading: "ほんとう", hanViet: "BẢN ĐƯƠNG", meaning: "Thật sự, sự thật", level: "N5", type: "on" },
            { word: "お弁当", reading: "おべんとう", hanViet: "TIỆN ĐƯƠNG", meaning: "Cơm hộp", level: "N5", type: "on" },
            { word: "当日", reading: "とうじつ", hanViet: "ĐƯƠNG NHẬT", meaning: "Ngày hôm đó (ngày diễn ra sự kiện)", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "たからくじで 一おく円 当たったら どうしますか。",
              reading: "たからくじで いちおくえん あたったら どうしますか。",
              vi: "Nếu trúng xổ số 100 triệu yên thì bạn sẽ làm gì?"
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "たからくじで 一おく円 【当たったら】 どうしますか。",
              target: "当たったら",
              answer: "あたったら",
              options: ["あたったら", "あてたら", "とうたったら", "とったら"],
              hint: "Trúng xổ số (Tự động từ)."
            },
            {
              type: "kanji",
              question: "コンビニで 【おべんとう】や 飲み物を 買います。",
              target: "おべんとう",
              answer: "おべん当",
              options: ["おべん当", "おべん党", "おべん常", "おべん堂"],
              hint: "Cơm hộp (TIỆN ĐƯƠNG)."
            }
          ]
        },
        {
          char: "品",
          hanViet: "PHẨM",
          meaning: "Hàng hóa, sản phẩm, phẩm chất",
          strokes: 9,
          onyomi: ["ヒン"],
          kunyomi: ["しな"],
          radical: "口 (Khẩu - Miệng, chiếc hộp)",
          components: "口 + 口 + 口 (Ba chiếc hộp chất chồng lên nhau)",
          mnemonic: "Ba kiện hàng (口口口) xếp chồng lên nhau biểu thị cho HÀNG HÓA, SẢN PHẨM (品).",
          lookalikes: [
            { char: "晶", hanViet: "TINH", diff: "Gồm 3 chữ Nhật (日) - tinh thể lấp lánh" },
            { char: "森", hanViet: "SÂM", diff: "Gồm 3 chữ Mộc (木) - rừng rậm" }
          ],
          words: [
            { word: "品物", reading: "しなもの", hanViet: "PHẨM VẬT", meaning: "Hàng hóa, món đồ", level: "N4", type: "kun" },
            { word: "品切れ", reading: "しなぎれ", hanViet: "PHẨM THIẾT", meaning: "Hết hàng", level: "N4", type: "kun" },
            { word: "作品", reading: "さくひん", hanViet: "TÁC PHẨM", meaning: "Tác phẩm", level: "N4", type: "on" },
            { word: "上品", reading: "じょうひん", hanViet: "THƯỢNG PHẨM", meaning: "Thanh lịch, tao nhã", level: "N4", type: "on" },
            { word: "食料品", reading: "しょくりょうひん", hanViet: "THỰC LIỆU PHẨM", meaning: "Thực phẩm", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "かの女は 上品な ふんいきを もっています。",
              reading: "かのじょは じょうひんな ふんいきを もっています。",
              vi: "Cô ấy có phong thái rất thanh lịch."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "あそこの ケーキは すぐ 【品切れ】に なってしまいます。",
              target: "品切れ",
              answer: "しなぎれ",
              options: ["しなぎれ", "ひんぎれ", "しなきれ", "ひんきれ"],
              hint: "Hết hàng (đọc âm Kun + ぎれ)."
            },
            {
              type: "kanji",
              question: "コンビニには いろいろな 【しなもの】が あります。",
              target: "しなもの",
              answer: "品物",
              options: ["品物", "店物", "買物", "荷物"],
              hint: "Hàng hóa, mặt hàng (PHẨM VẬT)."
            }
          ]
        }
      ]
    },
    {
      id: "2-2",
      number: 2,
      titleJp: "店内",
      reading: "てんない",
      titleVi: "Trong cửa hàng",
      introJp: "コンビニの 店内には コピー機や 銀行の ATMも あります。便利な サービスを 使いましょう。",
      introVi: "Bên trong cửa hàng tiện lợi có cả máy photocopy và cây ATM ngân hàng. Hãy cùng sử dụng các dịch vụ tiện ích nhé.",
      kanjiList: [
        {
          char: "便",
          hanViet: "TIỆN, BIỆN",
          meaning: "Tiện lợi, thư từ, chuyến bay/xe",
          strokes: 9,
          onyomi: ["ベン", "ビン"],
          kunyomi: ["たよ-り"],
          radical: "亻 (Nhân đứng - Người)",
          components: "亻 (Người) + 更 (Canh - Thay đổi, cải tiến)",
          mnemonic: "Con người (亻) luôn cải tiến, thay đổi (更) mọi thứ để cuộc sống TIỆN LỢI (便) hơn.",
          lookalikes: [
            { char: "使", hanViet: "SỬ", diff: "Bên phải là chữ Lại (吏 - không phải chữ 日 kín) - sử dụng" }
          ],
          words: [
            { word: "便利", reading: "べんり", hanViet: "TIỆN LỢI", meaning: "Tiện lợi, thuận tiện", level: "N5", type: "on" },
            { word: "不便", reading: "ふべん", hanViet: "BẤT TIỆN", meaning: "Bất tiện", level: "N4", type: "on" },
            { word: "郵便局", reading: "ゆうびんきょく", hanViet: "BƯU TIỆN CỤC", meaning: "Bưu điện", level: "N5", type: "on" },
            { word: "便り", reading: "たより", hanViet: "TIỆN", meaning: "Tin tức, thư từ", level: "N4", type: "kun" },
            { word: "宅急便", reading: "たっきゅうびん", hanViet: "TRẠCH CẤP TIỆN", meaning: "Chuyển phát nhanh tận nhà", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "むかし ならった 先生から 便りが ありました。",
              reading: "むかし ならった せんせいから たよりが ありました。",
              vi: "Tôi nhận được thư thăm hỏi từ người thầy dạy tôi ngày xưa."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "むかし ならった 先生から 【便り】が ありました。",
              target: "便り",
              answer: "たより",
              options: ["たより", "べんり", "びんり", "おくり"],
              hint: "Tin tức, thư từ (đọc âm Kun)."
            },
            {
              type: "kanji",
              question: "大雨で 今日の 【びん】は キャンセルに なりました。",
              target: "びん",
              answer: "便",
              options: ["便", "使", "番", "船"],
              hint: "Chuyến bay / chuyến xe (TIỆN)."
            }
          ]
        },
        {
          char: "利",
          hanViet: "LỢI",
          meaning: "Có ích, lợi nhuận, sử dụng",
          strokes: 7,
          onyomi: ["リ"],
          kunyomi: ["き-く"],
          radical: "刂 (Đao đứng - Con dao)",
          components: "禾 (Cây lúa) + 刂 (Con dao/Lưỡi liềm)",
          mnemonic: "Dùng lưỡi liềm sắc bén (刂) gặt lúa (禾) thu hoạch về nhiều LỢI ÍCH (利).",
          lookalikes: [
            { char: "和", hanViet: "HÒA", diff: "Bên phải là bộ Khẩu (口) thay vì bộ Đao (刂) - hòa hợp" },
            { char: "科", hanViet: "KHOA", diff: "Bên phải là bộ Đấu (斗) - môn học, khoa học" }
          ],
          words: [
            { word: "便利", reading: "べんり", hanViet: "TIỆN LỢI", meaning: "Tiện lợi", level: "N5", type: "on" },
            { word: "利用する", reading: "りようする", hanViet: "LỢI DỤNG", meaning: "Sử dụng (dịch vụ, phương tiện)", level: "N4", type: "on" },
            { word: "利益", reading: "りえき", hanViet: "LỢI ÍCH", meaning: "Lợi nhuận, lợi ích", level: "N4", type: "on" },
            { word: "利子", reading: "りし", hanViet: "LỢI TỬ", meaning: "Tiền lãi (ngân hàng)", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "このえきを 利ようする人は 1日 一万人ぐらいです。",
              reading: "このえきを りようするひとは いちにち いちまんにんぐらいです。",
              vi: "Số người sử dụng nhà ga này khoảng 10.000 người mỗi ngày."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "お金を かりたら 【利子】を はらわなければなりません。",
              target: "利子",
              answer: "りし",
              options: ["りし", "りこ", "ききこ", "りいし"],
              hint: "Tiền lãi khi vay tiền (LỢI TỬ)."
            },
            {
              type: "kanji",
              question: "インターネットは とても 【べんり】です。",
              target: "べんり",
              answer: "便利",
              options: ["便利", "便和", "使利", "便科"],
              hint: "Tiện lợi (TIỆN LỢI)."
            }
          ]
        },
        {
          char: "使",
          hanViet: "SỬ, SỨ",
          meaning: "Sử dụng, dùng, sứ giả",
          strokes: 8,
          onyomi: ["シ"],
          kunyomi: ["つか-う"],
          radical: "亻 (Nhân đứng - Người)",
          components: "亻 (Người) + 吏 (Lại - Quan lại, người thừa hành)",
          mnemonic: "Người (亻) giao việc cho cấp dưới (吏) để SỬ DỤNG (使) hoặc cử đi làm SỨ GIẢ.",
          lookalikes: [
            { char: "便", hanViet: "TIỆN", diff: "Bên phải là chữ Canh (更) có nét ngang trên đầu - tiện lợi" }
          ],
          words: [
            { word: "使う", reading: "つかう", hanViet: "SỬ", meaning: "Sử dụng, dùng", level: "N5", type: "kun" },
            { word: "使い方", reading: "つかいかた", hanViet: "SỬ PHƯƠNG", meaning: "Cách sử dụng", level: "N4", type: "kun" },
            { word: "使用", reading: "しよう", hanViet: "SỬ DỤNG", meaning: "Sự sử dụng", level: "N4", type: "on" },
            { word: "大使", reading: "たいし", hanViet: "ĐẠI SỨ", meaning: "Đại sứ", level: "N4", type: "on" },
            { word: "大使館", reading: "たいしかん", hanViet: "ĐẠI SỨ QUÁN", meaning: "Đại sứ quán", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "このパソコンの 使い方を おしえてください。",
              reading: "このパソコンの つかいかたを おしえてください。",
              vi: "Xin hãy chỉ cho tôi cách sử dụng chiếc máy tính này."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "フィリピンの 【大使】が 来日しました。",
              target: "大使",
              answer: "たいし",
              options: ["たいし", "だいし", "おおつかい", "たいびん"],
              hint: "Đại sứ (ĐẠI SỨ)."
            },
            {
              type: "kanji",
              question: "この水どうは 【しよう】しないでください。",
              target: "しよう",
              answer: "使用",
              options: ["使用", "便用", "作用", "仕用"],
              hint: "Sử dụng (SỬ DỤNG)."
            }
          ]
        },
        {
          char: "銀",
          hanViet: "NGÂN",
          meaning: "Bạc, ngân hàng",
          strokes: 14,
          onyomi: ["ギン"],
          kunyomi: [],
          radical: "金 (Kim - Kim loại, vàng)",
          components: "金 (Kim loại) + 艮 (Cấn - Cứng rắn, giữ lại)",
          mnemonic: "Thứ kim loại (金) sáng lấp lánh và bền bỉ (艮) dùng đúc tiền chính là BẠC / NGÂN HÀNG (銀).",
          lookalikes: [
            { char: "鉄", hanViet: "THIẾT", diff: "Bên phải là chữ Thất (失) - sắt thép" },
            { char: "根", hanViet: "CĂN", diff: "Bên trái là bộ Mộc (木) thay vì bộ Kim (金) - rễ cây" }
          ],
          words: [
            { word: "銀行", reading: "ぎんこう", hanViet: "NGÂN HÀNG", meaning: "Ngân hàng", level: "N5", type: "on" },
            { word: "銀メダル", reading: "ぎんメダル", hanViet: "NGÂN", meaning: "Huy chương bạc", level: "N4", type: "on" },
            { word: "銀色", reading: "ぎんいろ", hanViet: "NGÂN SẮC", meaning: "Màu bạc", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "うちから 銀行まで 遠いので いつも コンビニの ATMを 使います。",
              reading: "うちから ぎんこうまで とおいので いつも コンビニの ATMを つかいます。",
              vi: "Vì từ nhà đến ngân hàng khá xa nên tôi luôn dùng cây ATM ở cửa hàng tiện lợi."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "山下さんは じゅうどうで 【銀メダル】を とりました。",
              target: "銀メダル",
              answer: "ぎんメダル",
              options: ["ぎんメダル", "きんメダル", "かねメダル", "しろメダル"],
              hint: "Huy chương bạc (NGÂN)."
            },
            {
              type: "kanji",
              question: "ちょっと 【ぎんこう】に 行ってきます。",
              target: "ぎんこう",
              answer: "銀行",
              options: ["銀行", "金行", "鉄行", "根行"],
              hint: "Ngân hàng (NGÂN HÀNG)."
            }
          ]
        },
        {
          char: "白",
          hanViet: "BẠCH",
          meaning: "Màu trắng, trong trắng",
          strokes: 5,
          onyomi: ["ハク", "ビャク"],
          kunyomi: ["しろ", "しろ-い"],
          radical: "白 (Bạch - Màu trắng)",
          components: "ノ (Tia nắng) + 日 (Mặt trời)",
          mnemonic: "Khi tia nắng đầu tiên (ノ) của mặt trời (日) chiếu rọi, bầu trời rạng lên sắc TRẮNG (白).",
          lookalikes: [
            { char: "百", hanViet: "BÁCH", diff: "Có thêm nét ngang (一) ở trên đầu - số 100" },
            { char: "自", hanViet: "TỰ", diff: "Có 2 nét ngang bên trong thay vì 1 nét - tự bản thân" }
          ],
          words: [
            { word: "白い", reading: "しろい", hanViet: "BẠCH", meaning: "Trắng (Tính từ)", level: "N5", type: "kun" },
            { word: "白", reading: "しろ", hanViet: "BẠCH", meaning: "Màu trắng (Danh từ)", level: "N5", type: "kun" },
            { word: "白黒", reading: "しろくろ", hanViet: "BẠCH HẮC", meaning: "Đen trắng", level: "N4", type: "kun" },
            { word: "真っ白", reading: "まっしろ", hanViet: "CHÂN BẠCH", meaning: "Trắng tinh, trắng xóa", level: "N4", type: "kun" },
            { word: "白鳥", reading: "はくちょう", hanViet: "BẠCH ĐIỂU", meaning: "Chim thiên nga", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "ふゆに なると みずうみに たくさん 白鳥が 来ます。",
              reading: "ふゆに なると みずうみに たくさん はくちょうが きます。",
              vi: "Khi mùa đông đến, có rất nhiều thiên nga bay tới hồ."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "せんたくしたら シャツが 【まっ白】に なりました。",
              target: "まっ白",
              answer: "まっしろ",
              options: ["まっしろ", "ましろ", "まっぱく", "まっくろ"],
              hint: "Trắng tinh (まっしろ)."
            },
            {
              type: "kanji",
              question: "【はくちょう】の 親子が みずうみで あそんでいます。",
              target: "はくちょう",
              answer: "白鳥",
              options: ["白鳥", "百鳥", "自鳥", "黒鳥"],
              hint: "Chim thiên nga (BẠCH ĐIỂU)."
            }
          ]
        },
        {
          char: "黒",
          hanViet: "HẮC",
          meaning: "Màu đen, có lãi",
          strokes: 11,
          onyomi: ["コク"],
          kunyomi: ["くろ", "くろ-い"],
          radical: "黒 (Hắc - Màu đen)",
          components: "里 (Lý - Làng xóm/bếp lò) + 灬 (Hỏa - Lửa đốt bên dưới)",
          mnemonic: "Ngọn lửa (灬) đốt bên dưới lò nung (里) làm khói bám thành màu ĐEN (黒).",
          lookalikes: [
            { char: "里", hanViet: "LÝ", diff: "Không có 4 chấm Hỏa (灬) ở dưới - làng quê" },
            { char: "墨", hanViet: "MẶC", diff: "Có thêm chữ Thổ (土) ở dưới cùng - mực tàu" }
          ],
          words: [
            { word: "黒い", reading: "くろい", hanViet: "HẮC", meaning: "Đen (Tính từ)", level: "N5", type: "kun" },
            { word: "黒板", reading: "こくばん", hanViet: "HẮC BẢN", meaning: "Bảng đen", level: "N4", type: "on" },
            { word: "真っ黒", reading: "まっくろ", hanViet: "CHÂN HẮC", meaning: "Đen kịt, đen nhẻm", level: "N4", type: "kun" },
            { word: "黒字", reading: "くろじ", hanViet: "HẮC TỰ", meaning: "Làm ăn có lãi (thặng dư)", level: "N4", type: "kun" },
            { word: "白黒コピー", reading: "しろくろコピー", hanViet: "BẠCH HẮC", meaning: "Photocopy đen trắng", level: "N4", type: "kun" }
          ],
          examples: [
            {
              jp: "きょ年の 会社の 利えきは 黒字でした。",
              reading: "きょねんの かいしゃの りえきは くろじでした。",
              vi: "Lợi nhuận của công ty năm ngoái đã có lãi."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "きょ年の 会社の 利えきは 【黒字】でした。",
              target: "黒字",
              answer: "くろじ",
              options: ["くろじ", "こくじ", "しろじ", "くろいじ"],
              hint: "Làm ăn có lãi (đọc âm Kun くろ + âm On じ)."
            },
            {
              type: "kanji",
              question: "学生が 【こくばん】に こたえを 書きます。",
              target: "こくばん",
              answer: "黒板",
              options: ["黒板", "里板", "白板", "重板"],
              hint: "Bảng đen (HẮC BẢN)."
            }
          ]
        },
        {
          char: "紙",
          hanViet: "CHỈ",
          meaning: "Giấy, tờ giấy, báo",
          strokes: 10,
          onyomi: ["シ"],
          kunyomi: ["かみ"],
          radical: "糸 (Mịch - Sợi tơ)",
          components: "糸 (Sợi tơ) + 氏 (Thị - Dòng họ)",
          mnemonic: "Nghiền sợi tơ và vỏ cây (糸) mỏng mịn để viết tên họ (氏) lên TỜ GIẤY (紙).",
          lookalikes: [
            { char: "低", hanViet: "ĐÊ", diff: "Bên trái là Nhân đứng (亻) và có thêm nét chấm ngang dưới chữ 氏 - thấp" }
          ],
          words: [
            { word: "紙", reading: "かみ", hanViet: "CHỈ", meaning: "Giấy", level: "N5", type: "kun" },
            { word: "手紙", reading: "てがみ", hanViet: "THỦ CHỈ", meaning: "Bức thư", level: "N5", type: "kun" },
            { word: "折り紙", reading: "おりがみ", hanViet: "TRIẾT CHỈ", meaning: "Nghệ thuật gấp giấy Origami", level: "N4", type: "kun" },
            { word: "コピー用紙", reading: "コピーようし", hanViet: "DỤNG CHỈ", meaning: "Giấy in/photocopy", level: "N4", type: "on" },
            { word: "新聞紙", reading: "しんぶんし", hanViet: "TÂN VĂN CHỈ", meaning: "Giấy báo cũ", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "おり紙で きれいな 花を おりました。",
              reading: "おりがみで きれいな はなを おりました。",
              vi: "Tôi đã gấp những bông hoa thật đẹp bằng giấy Origami."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "【コピーよう紙】が なくなって しまいました。",
              target: "コピーよう紙",
              answer: "コピーようし",
              options: ["コピーようし", "コピーようがみ", "コピーようかみ", "コピーようじ"],
              hint: "Giấy photocopy (DỤNG CHỈ)."
            },
            {
              type: "kanji",
              question: "【しんぶんし】は ひもで しばって 出してください。",
              target: "しんぶんし",
              answer: "新聞紙",
              options: ["新聞紙", "新聞氏", "新聞誌", "新聞糸"],
              hint: "Giấy báo cũ (TÂN VĂN CHỈ)."
            }
          ]
        }
      ]
    },
    {
      id: "2-3",
      number: 3,
      titleJp: "24時間",
      reading: "にじゅうよじかん",
      titleVi: "24 giờ",
      introJp: "コンビニは 24時間 あいています。朝 早くても 夜 おそくても いつでも 行くことができます。",
      introVi: "Cửa hàng tiện lợi mở cửa 24 giờ. Dù sáng sớm hay đêm muộn bạn đều có thể ghé qua bất cứ lúc nào.",
      kanjiList: [
        {
          char: "朝",
          hanViet: "TRIỀU",
          meaning: "Buổi sáng, triều đại",
          strokes: 12,
          onyomi: ["チョウ"],
          kunyomi: ["あさ"],
          radical: "月 (Nguyệt - Mặt trăng)",
          components: "十 + 日 + 十 (Mặt trời mọc lên giữa cỏ cây) + 月 (Mặt trăng mờ dần)",
          mnemonic: "Khi mặt trời (日) nhô lên khỏi đám cỏ (十十) và mặt trăng (月) lặn dần chính là BUỔI SÁNG (朝).",
          lookalikes: [
            { char: "乾", hanViet: "CAN", diff: "Bên phải là chữ Khất (乞) thay vì bộ Nguyệt (月) - khô ráo" }
          ],
          words: [
            { word: "朝", reading: "あさ", hanViet: "TRIỀU", meaning: "Buổi sáng", level: "N5", type: "kun" },
            { word: "毎朝", reading: "まいあさ", hanViet: "MỖI TRIỀU", meaning: "Mỗi sáng", level: "N5", type: "kun" },
            { word: "今朝", reading: "けさ", hanViet: "KIM TRIỀU", meaning: "Sáng nay (Cách đọc đặc biệt)", level: "N5", type: "kun" },
            { word: "朝食", reading: "ちょうしょく", hanViet: "TRIỀU THỰC", meaning: "Bữa điểm tâm sáng", level: "N4", type: "on" },
            { word: "早朝", reading: "そうちょう", hanViet: "TẢO TRIỀU", meaning: "Sáng tinh mơ", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "朝食は いつも パンと コーヒーです。",
              reading: "ちょうしょくは いつも パンと コーヒーです。",
              vi: "Bữa sáng của tôi luôn là bánh mì và cà phê."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "【今朝】 5時に おきて ジョギングを しました。",
              target: "今朝",
              answer: "けさ",
              options: ["けさ", "いまあさ", "こんちょう", "きょうあさ"],
              hint: "Sáng nay (cách đọc đặc biệt)."
            },
            {
              type: "kanji",
              question: "【そうちょう】 こうえんを さんぽします。",
              target: "そうちょう",
              answer: "早朝",
              options: ["早朝", "早昼", "早夜", "草朝"],
              hint: "Sáng sớm tinh mơ (TẢO TRIỀU)."
            }
          ]
        },
        {
          char: "晩",
          hanViet: "VÃN",
          meaning: "Buổi tối, chiều muộn",
          strokes: 12,
          onyomi: ["バン"],
          kunyomi: [],
          radical: "日 (Nhật - Mặt trời)",
          components: "日 (Mặt trời) + 免 (Miễn - Tránh khỏi, lặn đi)",
          mnemonic: "Khi mặt trời (日) khuất bóng, miễn (免) làm việc vất vả là lúc BUỔI TỐI (晩) về.",
          lookalikes: [
            { char: "勉", hanViet: "MIỄN", diff: "Không có bộ Nhật (日) mà có bộ Lực (力) - học tập chăm chỉ (勉強)" }
          ],
          words: [
            { word: "晩ご飯", reading: "ばんごはん", hanViet: "VÃN PHẠN", meaning: "Cơm tối, bữa tối", level: "N5", type: "on" },
            { word: "今晩", reading: "こんばん", hanViet: "KIM VÃN", meaning: "Tối nay", level: "N5", type: "on" },
            { word: "毎晩", reading: "まいばん", hanViet: "MỖI VÃN", meaning: "Mỗi tối", level: "N5", type: "on" },
            { word: "朝晩", reading: "あさばん", hanViet: "TRIỀU VÃN", meaning: "Sáng và tối", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "さい近 朝晩 すずしくなりました。",
              reading: "さいきん あさばん すずしくなりました。",
              vi: "Dạo gần đây vào buổi sáng và buổi tối trời đã trở nên mát mẻ."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "さい近 【朝晩】 すずしくなりました。",
              target: "朝晩",
              answer: "あさばん",
              options: ["あさばん", "ちょうばん", "あさよる", "ちょうべん"],
              hint: "Sáng và tối."
            },
            {
              type: "kanji",
              question: "今日の 【ばんごはん】は 何ですか。",
              target: "ばんごはん",
              answer: "晩ごはん",
              options: ["晩ごはん", "勉ごはん", "夜ごはん", "昼ごはん"],
              hint: "Bữa tối (VÃN)."
            }
          ]
        },
        {
          char: "昼",
          hanViet: "TRÚ",
          meaning: "Buổi trưa, ban ngày",
          strokes: 9,
          onyomi: ["チュウ"],
          kunyomi: ["ひる"],
          radical: "日 (Nhật - Mặt trời)",
          components: "尺 (Thước đo bóng nắng) + 旦 (Đán - Mặt trời mọc trên mặt đất)",
          mnemonic: "Khi mặt trời trên mặt đất (旦) lên cao đúng tầm thước đo (尺) là lúc BUỔI TRƯA (昼).",
          lookalikes: [
            { char: "屋", hanViet: "ỐC", diff: "Phía dưới là chữ Chí (至) thay vì chữ Đán (旦) - cửa hiệu, phòng" }
          ],
          words: [
            { word: "昼", reading: "ひる", hanViet: "TRÚ", meaning: "Buổi trưa, ban ngày", level: "N5", type: "kun" },
            { word: "昼休み", reading: "ひるやすみ", hanViet: "TRÚ HƯU", meaning: "Giờ nghỉ trưa", level: "N5", type: "kun" },
            { word: "昼ご飯", reading: "ひるごはん", hanViet: "TRÚ PHẠN", meaning: "Bữa cơm trưa", level: "N5", type: "kun" },
            { word: "昼食", reading: "ちゅうしょく", hanViet: "TRÚ THỰC", meaning: "Bữa ăn trưa (trang trọng)", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "昼食は 近くの こうえんで 食べましょう。",
              reading: "ちゅうしょくは ちかくの こうえんで たべましょう。",
              vi: "Chúng ta hãy ăn trưa ở công viên gần đây nhé."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "【昼食】は ラーメンを 食べました。",
              target: "昼食",
              answer: "ちゅうしょく",
              options: ["ちゅうしょく", "ひるしょく", "ちゅうじき", "ひるごはん"],
              hint: "Bữa ăn trưa đọc theo âm On (TRÚ THỰC)."
            },
            {
              type: "kanji",
              question: "【ひるやすみ】に 友だちと コンビニへ 行きました。",
              target: "ひるやすみ",
              answer: "昼休み",
              options: ["昼休み", "屋休み", "朝休み", "夜休み"],
              hint: "Giờ nghỉ trưa (TRÚ HƯU)."
            }
          ]
        },
        {
          char: "夜",
          hanViet: "DẠ",
          meaning: "Ban đêm, đêm khuya",
          strokes: 8,
          onyomi: ["ヤ"],
          kunyomi: ["よる", "よ"],
          radical: "夕 (Tịch - Chiều tối, trăng khuyết)",
          components: "亠 (Bầu trời đêm) + 亻 (Người) + 夕 (Trăng khuyết)",
          mnemonic: "Dưới bầu trời (亠), con người (亻) nghỉ ngơi ngắm trăng khuyết (夕) vào BAN ĐÊM (夜).",
          lookalikes: [
            { char: "液", hanViet: "DỊCH", diff: "Có thêm bộ Thủy (氵) bên trái - chất lỏng" }
          ],
          words: [
            { word: "夜", reading: "よる", hanViet: "DẠ", meaning: "Ban đêm, buổi tối", level: "N5", type: "kun" },
            { word: "今夜", reading: "こんや", hanViet: "KIM DẠ", meaning: "Đêm nay, tối nay", level: "N4", type: "on" },
            { word: "夜中", reading: "よなか", hanViet: "DẠ TRUNG", meaning: "Nửa đêm", level: "N4", type: "kun" },
            { word: "夜食", reading: "やしょく", hanViet: "DẠ THỰC", meaning: "Bữa ăn khuya", level: "N4", type: "on" },
            { word: "夜道", reading: "よみち", hanViet: "DẠ ĐẠO", meaning: "Đường đêm", level: "N4", type: "kun" },
            { word: "深夜", reading: "しんや", hanViet: "THÂM DẠ", meaning: "Đêm khuya", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "一人で 夜みちを あるくときは 気をつけてください。",
              reading: "ひとりで よみちを あるくときは きをつけてください。",
              vi: "Khi đi bộ một mình trên đường đêm xin hãy cẩn thận."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "一人で 【夜みち】を あるくときは 気をつけてください。",
              target: "夜みち",
              answer: "よみち",
              options: ["よみち", "よるみち", "やみち", "やどう"],
              hint: "Đường đêm đọc là よみち."
            },
            {
              type: "kanji",
              question: "【よなか】に おきて べんきょうしました。",
              target: "よなか",
              answer: "夜中",
              options: ["夜中", "晩中", "夕中", "昼中"],
              hint: "Giữa đêm khuya (DẠ TRUNG)."
            }
          ]
        },
        {
          char: "前",
          hanViet: "TIỀN",
          meaning: "Phía trước, trước đây",
          strokes: 9,
          onyomi: ["ゼン"],
          kunyomi: ["まえ"],
          radical: "刂 (Đao đứng - Con dao)",
          components: "丷 + 一 + 月 (Chiếc thuyền) + 刂 (Con dao cắt dây neo)",
          mnemonic: "Cắt dây neo (刂) để con thuyền (月) tiến về PHÍA TRƯỚC (前).",
          lookalikes: [
            { char: "煎", hanViet: "TIỄN", diff: "Có thêm 4 chấm Hỏa (灬) ở dưới - rang, sắc thuốc" }
          ],
          words: [
            { word: "前", reading: "まえ", hanViet: "TIỀN", meaning: "Phía trước, trước", level: "N5", type: "kun" },
            { word: "名前", reading: "なまえ", hanViet: "DANH TIỀN", meaning: "Tên", level: "N5", type: "kun" },
            { word: "午前", reading: "ごぜん", hanViet: "NGỌ TIỀN", meaning: "Buổi sáng (AM)", level: "N5", type: "on" },
            { word: "前半", reading: "ぜんはん", hanViet: "TIỀN BÁN", meaning: "Nửa đầu, hiệp 1", level: "N4", type: "on" },
            { word: "前後", reading: "ぜんご", hanViet: "TIỀN HẬU", meaning: "Trước sau, khoảng chừng", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "うんてんするとき 前後左右に 気をつけましょう。",
              reading: "うんてんするとき ぜんごさゆうに きをつけましょう。",
              vi: "Khi lái xe hãy chú ý phía trước, phía sau, bên trái và bên phải."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "うんてんするとき 【前後】左右に 気をつけましょう。",
              target: "前後",
              answer: "ぜんご",
              options: ["ぜんご", "まえうしろ", "まえあと", "ぜんこう"],
              hint: "Trước sau (TIỀN HẬU)."
            },
            {
              type: "kanji",
              question: "はじめに クラスと 【なまえ】を 書いてください。",
              target: "なまえ",
              answer: "名前",
              options: ["名前", "名先", "名後", "名目"],
              hint: "Họ và tên (DANH TIỀN)."
            }
          ]
        },
        {
          char: "後",
          hanViet: "HẬU",
          meaning: "Phía sau, sau đó, muộn",
          strokes: 9,
          onyomi: ["ゴ", "コウ"],
          kunyomi: ["うし-ろ", "あと", "おく-れる"],
          radical: "彳 (Xích - Bước chân trái)",
          components: "彳 (Bước đi) + 幺 (Nhỏ bé, dây buộc) + 夂 (Bước chân chậm lại)",
          mnemonic: "Bước đi (彳) nhưng chân vướng dây (幺) nên bước chậm lại (夂) ở PHÍA SAU (後).",
          lookalikes: [
            { char: "待", hanViet: "ĐÃI", diff: "Bên phải là chữ Tự (寺) - chờ đợi" }
          ],
          words: [
            { word: "後ろ", reading: "うしろ", hanViet: "HẬU", meaning: "Phía sau, đằng sau", level: "N5", type: "kun" },
            { word: "後で", reading: "あとで", hanViet: "HẬU", meaning: "Sau đó, lát nữa", level: "N5", type: "kun" },
            { word: "午後", reading: "ごご", hanViet: "NGỌ HẬU", meaning: "Buổi chiều (PM)", level: "N5", type: "on" },
            { word: "後半", reading: "こうはん", hanViet: "HẬU BÁN", meaning: "Nửa sau, hiệp 2", level: "N4", type: "on" },
            { word: "後輩", reading: "こうはい", hanViet: "HẬU BỐI", meaning: "Đàn em, hậu bối", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "れつの 後ろに ならんでください。",
              reading: "れつの うしろに ならんでください。",
              vi: "Vui lòng xếp hàng ở phía sau."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "【後半】20分に Aチームが 一てん とりました。",
              target: "後半",
              answer: "こうはん",
              options: ["こうはん", "ごはん", "あとはん", "うしろはん"],
              hint: "Hiệp 2 / nửa sau (HẬU BÁN đọc âm コウ)."
            },
            {
              type: "kanji",
              question: "レジの 【うしろ】に たばこが あります。",
              target: "うしろ",
              answer: "後ろ",
              options: ["後ろ", "前ろ", "待ろ", "遅ろ"],
              hint: "Phía đằng sau (HẬU)."
            }
          ]
        },
        {
          char: "午",
          hanViet: "NGỌ",
          meaning: "Giờ Ngọ, buổi trưa (12 giờ trưa)",
          strokes: 4,
          onyomi: ["ゴ"],
          kunyomi: [],
          radical: "十 (Thập - Số 10)",
          components: "𠂉 + 十 (Hình chiếc chày giã gạo lên xuống lúc chính ngọ)",
          mnemonic: "Kim đồng hồ chỉ đúng 12 giờ đứng thẳng (十) chính là GIỜ NGỌ / BUỔI TRƯA (午).",
          lookalikes: [
            { char: "牛", hanViet: "NGƯU", diff: "Nét sổ xuyên qua nét ngang trên cùng - con bò" },
            { char: "年", hanViet: "NIÊN", diff: "Có thêm nét ngang và sổ ngắn ở giữa - năm" }
          ],
          words: [
            { word: "午前", reading: "ごぜん", hanViet: "NGỌ TIỀN", meaning: "Buổi sáng (trước 12h trưa)", level: "N5", type: "on" },
            { word: "午後", reading: "ごご", hanViet: "NGỌ HẬU", meaning: "Buổi chiều (sau 12h trưa)", level: "N5", type: "on" },
            { word: "正午", reading: "しょうご", hanViet: "CHÍNH NGỌ", meaning: "Đúng 12 giờ trưa", level: "N4", type: "on" },
            { word: "午前中", reading: "ごぜんちゅう", hanViet: "NGỌ TIỀN TRUNG", meaning: "Trong suốt buổi sáng", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "しょう午に なったら 昼ごはんを 食べましょう。",
              reading: "しょうごに なったら ひるごはんを たべましょう。",
              vi: "Khi đến 12 giờ trưa chúng ta hãy ăn cơm trưa nhé."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "【しょう午】から 会ぎを 始めます。",
              target: "しょう午",
              answer: "しょうご",
              options: ["しょうご", "せいご", "しょうぎゅう", "まひる"],
              hint: "Đúng 12 giờ trưa (CHÍNH NGỌ)."
            },
            {
              type: "kanji",
              question: "学校は 【ごぜん】9時から 始まります。",
              target: "ごぜん",
              answer: "午前",
              options: ["午前", "牛前", "年前", "昼前"],
              hint: "Buổi sáng (NGỌ TIỀN - nét sổ không xuyên lên trên)."
            }
          ]
        },
        {
          char: "早",
          hanViet: "TẢO",
          meaning: "Sớm, nhanh",
          strokes: 6,
          onyomi: ["ソウ", "サッ"],
          kunyomi: ["はや-い", "はや-まる", "はや-める"],
          radical: "日 (Nhật - Mặt trời)",
          components: "日 (Mặt trời) + 十 (Ngọn cây / thập)",
          mnemonic: "Mặt trời (日) vừa nhô lên ngang ngọn cây (十) là lúc SÁNG SỚM (早).",
          lookalikes: [
            { char: "草", hanViet: "THẢO", diff: "Có thêm bộ Thảo (艹) ở trên đầu - cỏ" },
            { char: "速", hanViet: "TỐC", diff: "Mang nghĩa nhanh về tốc độ di chuyển (có bộ Sước 辶)" }
          ],
          words: [
            { word: "早い", reading: "はやい", hanViet: "TẢO", meaning: "Sớm, nhanh", level: "N5", type: "kun" },
            { word: "早く", reading: "はやく", hanViet: "TẢO", meaning: "Sớm, nhanh chóng", level: "N5", type: "kun" },
            { word: "早朝", reading: "そうちょう", hanViet: "TẢO TRIỀU", meaning: "Sáng sớm tinh mơ", level: "N4", type: "on" },
            { word: "早口", reading: "はやくち", hanViet: "TẢO KHẨU", meaning: "Nói nhanh, nói liến thoắng", level: "N4", type: "kun" }
          ],
          examples: [
            {
              jp: "川村さんは とても 早口です。",
              reading: "かわむらさんは とても はやくちです。",
              vi: "Bạn Kawamura nói rất nhanh."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "田中さんは 【早口】で 何を 言っているか わかりません。",
              target: "早口",
              answer: "はやくち",
              options: ["はやくち", "そうくち", "はやぐち", "そうこう"],
              hint: "Tật nói nhanh (đọc âm Kun はやくち)."
            },
            {
              type: "kanji",
              question: "私は まい朝 【はやく】 おきます。",
              target: "はやく",
              answer: "早く",
              options: ["早く", "速く", "草く", "古く"],
              hint: "Thức dậy sớm (TẢO)."
            }
          ]
        }
      ]
    }
  ]
});

window.KANJI_CHAPTERS.push({
  id: 3,
  titleJp: "3章 おくり物",
  titleVi: "Chương 3: Quà tặng & Bưu phẩm",
  icon: "📦",
  lessons: [
    {
      id: "3-1",
      number: 1,
      titleJp: "荷物",
      reading: "にもつ",
      titleVi: "Hành lý & Bưu kiện",
      introJp: "日本の 荷物を 送る サービスは じゅうじつしています。荷物に ついての 漢字を おぼえましょう。",
      introVi: "Dịch vụ gửi bưu kiện ở Nhật Bản rất phát triển. Hãy cùng ghi nhớ các chữ Kanji liên quan đến hành lý và bưu phẩm nhé.",
      kanjiList: [
        {
          char: "荷",
          hanViet: "HÀ",
          meaning: "Hành lý, hàng hóa, gánh vác",
          strokes: 10,
          onyomi: ["カ"],
          kunyomi: ["に"],
          radical: "艹 (Thảo - Cỏ cây)",
          components: "艹 (Lá sen/cỏ) + 何 (Hà - Người gánh đồ trên vai)",
          mnemonic: "Người (亻) vác đòn gánh (可) chở nông sản, cỏ cây (艹) chính là HÀNH LÝ, HÀNG HÓA (荷).",
          lookalikes: [
            { char: "何", hanViet: "HÀ", diff: "Không có bộ Thảo (艹) ở trên - cái gì" }
          ],
          words: [
            { word: "荷物", reading: "にもつ", hanViet: "HÀ VẬT", meaning: "Hành lý, hàng hóa", level: "N5", type: "kun" },
            { word: "手荷物", reading: "てにもつ", hanViet: "THỦ HÀ VẬT", meaning: "Hành lý xách tay", level: "N4", type: "kun" },
            { word: "入荷", reading: "にゅうか", hanViet: "NHẬP HÀ", meaning: "Nhập hàng về", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "くにの 母から 荷物が とどきました。",
              reading: "くにの ははから にもつが とどきました。",
              vi: "Hành lý/bưu kiện từ mẹ ở quê gửi đã được chuyển đến."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "【手荷物】は あそこの カウンターに あずけてください。",
              target: "手荷物",
              answer: "てにもつ",
              options: ["てにもつ", "てかもつ", "しゅにもつ", "てにぶつ"],
              hint: "Hành lý xách tay (THỦ HÀ VẬT)."
            },
            {
              type: "kanji",
              question: "【にもつ】が たくさん ありますね。",
              target: "にもつ",
              answer: "荷物",
              options: ["荷物", "何物", "花物", "品物"],
              hint: "Hành lý (HÀ VẬT)."
            }
          ]
        },
        {
          char: "送",
          hanViet: "TỐNG",
          meaning: "Gửi đi, tiễn đưa",
          strokes: 9,
          onyomi: ["ソウ"],
          kunyomi: ["おく-る"],
          radical: "辶 (Sước - Bước đi)",
          components: "关 (Hai tay nâng vật) + 辶 (Bước đi)",
          mnemonic: "Hai tay nâng món quà (关) bước đi (辶) để GỬI TẶNG hoặc TIỄN ĐƯA (送).",
          lookalikes: [
            { char: "遅", hanViet: "TRÌ", diff: "Bên trong là chữ Tê (犀) - muộn, trễ" },
            { char: "選", hanViet: "TUYỂN", diff: "Bên trong là chữ Tốn (巽) - lựa chọn" }
          ],
          words: [
            { word: "送る", reading: "おくる", hanViet: "TỐNG", meaning: "Gửi (thư, đồ), tiễn, đưa đi", level: "N5", type: "kun" },
            { word: "見送り", reading: "みおくり", hanViet: "KIẾN TỐNG", meaning: "Sự tiễn đưa (ở sân bay, nhà ga)", level: "N4", type: "kun" },
            { word: "送信", reading: "そうしん", hanViet: "TỐNG TÍN", meaning: "Gửi tin nhắn, gửi email", level: "N4", type: "on" },
            { word: "送別会", reading: "そうべつかい", hanViet: "TỐNG BIỆT HỘI", meaning: "Tiệc chia tay", level: "N4", type: "on" },
            { word: "放送", reading: "ほうそう", hanViet: "PHÓNG TỐNG", meaning: "Phát sóng, phát thanh", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "友だちを くうこうまで 見送りに 行きました。",
              reading: "ともだちを くうこうまで みおくりに いきました。",
              vi: "Tôi đã ra tận sân bay để tiễn người bạn."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "メールを 【送しん】するときは あいての アドレスを かくにんしましょう。",
              target: "送しん",
              answer: "そうしん",
              options: ["そうしん", "おくしん", "そうじん", "つうしん"],
              hint: "Gửi mail/tin nhắn (TỐNG TÍN)."
            },
            {
              type: "kanji",
              question: "くにへ 帰る 友だちの 【そうべつかい】を します。",
              target: "そうべつかい",
              answer: "送べつかい",
              options: ["送べつかい", "遅べつかい", "通べつかい", "返べつかい"],
              hint: "Tiệc chia tay (TỐNG BIỆT HỘI)."
            }
          ]
        },
        {
          char: "宅",
          hanViet: "TRẠCH",
          meaning: "Nhà ở, nhà riêng",
          strokes: 6,
          onyomi: ["タク"],
          kunyomi: [],
          radical: "宀 (Miên - Mái nhà)",
          components: "宀 (Mái nhà) + 乇 (Thác - Cỏ mọc bén rễ, gửi gắm)",
          mnemonic: "Nơi có mái nhà (宀) để ta gửi gắm, an cư (乇) chính là NHÀ RIÊNG (宅).",
          lookalikes: [
            { char: "家", hanViet: "GIA", diff: "Dưới bộ Miên (宀) là chữ Thỉ (豕) 10 nét - ngôi nhà nói chung" },
            { char: "完", hanViet: "HOÀN", diff: "Dưới bộ Miên (宀) là chữ Nguyên (元) - hoàn toàn" }
          ],
          words: [
            { word: "お宅", reading: "おたく", hanViet: "TRẠCH", meaning: "Nhà của anh/chị (lịch sự)", level: "N4", type: "on" },
            { word: "自宅", reading: "じたく", hanViet: "TỰ TRẠCH", meaning: "Nhà riêng (của mình)", level: "N4", type: "on" },
            { word: "帰宅", reading: "きたく", hanViet: "QUY TRẠCH", meaning: "Về nhà (từ chỗ làm/trường)", level: "N4", type: "on" },
            { word: "住宅", reading: "じゅうたく", hanViet: "TRÚ TRẠCH", meaning: "Nhà ở, khu dân cư", level: "N4", type: "on" },
            { word: "宅配ピザ", reading: "たくはいピザ", hanViet: "TRẠCH PHỐI", meaning: "Pizza giao tận nhà", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "先生の お宅は どちらですか。",
              reading: "せんせいの おたくは どちらですか。",
              vi: "Nhà của thầy ở đâu ạ?"
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "このあたりの 【じゅう宅】は みんな ゆう名人の 家です。",
              target: "じゅう宅",
              answer: "じゅうたく",
              options: ["じゅうたく", "じゅういえ", "すたく", "じゅうや"],
              hint: "Nhà ở (TRÚ TRẠCH)."
            },
            {
              type: "kanji",
              question: "私は まい晩 7時に 【きたく】します。",
              target: "きたく",
              answer: "帰宅",
              options: ["帰宅", "帰家", "帰室", "帰屋"],
              hint: "Trở về nhà (QUY TRẠCH)."
            }
          ]
        },
        {
          char: "急",
          hanViet: "CẤP",
          meaning: "Vội vàng, khẩn cấp, đột ngột",
          strokes: 9,
          onyomi: ["キュウ"],
          kunyomi: ["いそ-ぐ"],
          radical: "心 (Tâm - Trái tim)",
          components: "𠂊 (Người cúi) + 彐 (Bàn tay) + 心 (Trái tim)",
          mnemonic: "Tay (彐) ôm ngực vì trái tim (心) đập liên hồi khi có việc GẤP GÁP, KHẨN CẤP (急).",
          lookalikes: [
            { char: "思", hanViet: "TƯ", diff: "Phía trên là bộ Điền (田) - suy nghĩ" },
            { char: "息", hanViet: "TỨC", diff: "Phía trên là chữ Tự (自) - hơi thở" }
          ],
          words: [
            { word: "急ぐ", reading: "いそぐ", hanViet: "CẤP", meaning: "Vội vàng, khẩn trương", level: "N5", type: "kun" },
            { word: "急に", reading: "きゅうに", hanViet: "CẤP", meaning: "Đột nhiên, bỗng nhiên", level: "N4", type: "on" },
            { word: "急行", reading: "きゅうこう", hanViet: "CẤP HÀNH", meaning: "Tàu tốc hành", level: "N4", type: "on" },
            { word: "特急", reading: "とっきゅう", hanViet: "ĐẶC CẤP", meaning: "Tàu tốc hành đặc biệt", level: "N4", type: "on" },
            { word: "救急車", reading: "きゅうきゅうしゃ", hanViet: "CỨU CẤP XA", meaning: "Xe cấp cứu", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "いい天気でしたが 急に 雨に なりました。",
              reading: "いいてんきでしたが きゅうに あめに なりました。",
              vi: "Trời đang đẹp nhưng đột nhiên lại đổ mưa."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "このえきは 【急行】の 電車は とまりません。",
              target: "急行",
              answer: "きゅうこう",
              options: ["きゅうこう", "いそぎこう", "きゅうぎょう", "とっこう"],
              hint: "Tàu tốc hành (CẤP HÀNH)."
            },
            {
              type: "kanji",
              question: "時間が ないので 【いそいで】ください。",
              target: "いそいで",
              answer: "急いで",
              options: ["急いで", "速いで", "早いで", "思いで"],
              hint: "Nhanh chân, khẩn trương lên (CẤP)."
            }
          ]
        },
        {
          char: "速",
          hanViet: "TỐC",
          meaning: "Nhanh (về tốc độ), vận tốc",
          strokes: 10,
          onyomi: ["ソク"],
          kunyomi: ["はや-い", "はや-める", "すみ-やか"],
          radical: "辶 (Sước - Bước đi)",
          components: "束 (Thúc - Bó gọn) + 辶 (Bước đi trên đường)",
          mnemonic: "Hành lý bó gọn gàng (束) giúp bước đi trên đường (辶) với TỐC ĐỘ NHANH (速).",
          lookalikes: [
            { char: "早", hanViet: "TẢO", diff: "Nhanh/sớm về mặt thời gian (VD: dậy sớm, nói nhanh)" },
            { char: "遅", hanViet: "TRÌ", diff: "Bên trong là chữ Tê (犀) - chậm, muộn (trái nghĩa với 速)" }
          ],
          words: [
            { word: "速い", reading: "はやい", hanViet: "TỐC", meaning: "Nhanh (tốc độ)", level: "N4", type: "kun" },
            { word: "速さ", reading: "はやさ", hanViet: "TỐC", meaning: "Độ nhanh, vận tốc", level: "N4", type: "kun" },
            { word: "速度", reading: "そくど", hanViet: "TỐC ĐỘ", meaning: "Tốc độ", level: "N4", type: "on" },
            { word: "時速", reading: "じそく", hanViet: "THỜI TỐC", meaning: "Tốc độ theo giờ (km/h)", level: "N4", type: "on" },
            { word: "速達", reading: "そくたつ", hanViet: "TỐC ĐẠT", meaning: "Thư/bưu phẩm chuyển phát nhanh", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "高山さんは クラスで 一ばん 足が 速いです。",
              reading: "たかやまさんは クラスで いちばん あしが はやいです。",
              vi: "Bạn Takayama là người chạy nhanh nhất lớp."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "このみちは 【時速】60キロまでしか 出してはいけません。",
              target: "時速",
              answer: "じそく",
              options: ["じそく", "ときはや", "じはや", "しそく"],
              hint: "Vận tốc theo giờ (THỜI TỐC)."
            },
            {
              type: "kanji",
              question: "すみません。この手紙を 【そくたつ】で おねがいします。",
              target: "そくたつ",
              answer: "速たつ",
              options: ["速たつ", "早たつ", "急たつ", "送たつ"],
              hint: "Chuyển phát nhanh (TỐC ĐẠT)."
            }
          ]
        },
        {
          char: "遅",
          hanViet: "TRÌ",
          meaning: "Muộn, trễ, chậm",
          strokes: 12,
          onyomi: ["チ"],
          kunyomi: ["おく-れる", "おく-らす", "おそ-い"],
          radical: "辶 (Sước - Bước đi)",
          components: "尸 (Cơ thể) + 羊 (Dương - Con cừu) + 辶 (Bước đi)",
          mnemonic: "Dắt đàn cừu (羊) bước đi (辶) thong thả nên đến nơi CHẬM TRỄ, MUỘN (遅).",
          lookalikes: [
            { char: "速", hanViet: "TỐC", diff: "Bên trong là chữ Thúc (束) - nhanh" },
            { char: "遠", hanViet: "VIỄN", diff: "Bên trong là chữ Viên (袁) - xa" }
          ],
          words: [
            { word: "遅い", reading: "おそい", hanViet: "TRÌ", meaning: "Chậm, muộn (Tính từ)", level: "N5", type: "kun" },
            { word: "遅れる", reading: "おくれる", hanViet: "TRÌ", meaning: "Bị trễ, đến muộn (Động từ)", level: "N4", type: "kun" },
            { word: "遅刻", reading: "ちこく", hanViet: "TRÌ KHẮC", meaning: "Đi học/đi làm muộn", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "ねぼうして やくそくの 時間に 遅れてしまいました。",
              reading: "ねぼうして やくそくの じかんに おくれてしまいました。",
              vi: "Vì ngủ quên nên tôi đã bị trễ giờ hẹn."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "どうして 【遅こく】したんですか。",
              target: "遅こく",
              answer: "ちこく",
              options: ["ちこく", "おそこく", "おくこく", "じこく"],
              hint: "Đi muộn (TRÌ KHẮC)."
            },
            {
              type: "kanji",
              question: "やくそくの 時間に 【おくれて】 かの女と けんかしました。",
              target: "おくれて",
              answer: "遅れて",
              options: ["遅れて", "送れて", "遠れて", "後れて"],
              hint: "Trễ giờ hẹn (TRÌ)."
            }
          ]
        },
        {
          char: "重",
          hanViet: "TRỌNG, TRÙNG",
          meaning: "Nặng, quan trọng, chồng chất",
          strokes: 9,
          onyomi: ["ジュウ", "チョウ"],
          kunyomi: ["おも-い", "かさ-ねる", "かさ-なる"],
          radical: "里 (Lý - Dặm đường, đất)",
          components: "千 (Ngàn) + 里 (Lý - Bao tải đất chất chồng)",
          mnemonic: "Ngàn (千) bao hàng chất chồng lên mặt đất (里) nên vô cùng NẶNG & QUAN TRỌNG (重).",
          lookalikes: [
            { char: "動", hanViet: "ĐỘNG", diff: "Có thêm bộ Lực (力) bên phải - chuyển động" },
            { char: "黒", hanViet: "HẮC", diff: "Phía dưới là 4 chấm Hỏa (灬) - màu đen" }
          ],
          words: [
            { word: "重い", reading: "おもい", hanViet: "TRỌNG", meaning: "Nặng", level: "N5", type: "kun" },
            { word: "体重", reading: "たいじゅう", hanViet: "THỂ TRỌNG", meaning: "Cân nặng cơ thể", level: "N4", type: "on" },
            { word: "重要", reading: "じゅうよう", hanViet: "TRỌNG YẾU", meaning: "Quan trọng", level: "N4", type: "on" },
            { word: "重ねる", reading: "かさねる", hanViet: "TRÙNG", meaning: "Xếp chồng lên (Tha động từ)", level: "N4", type: "kun" },
            { word: "重なる", reading: "かさなる", hanViet: "TRÙNG", meaning: "Chồng lên nhau, trùng nhau (Tự động từ)", level: "N4", type: "kun" }
          ],
          examples: [
            {
              jp: "今日は とても さむいです。ふくを 何まいも 重ねて きています。",
              reading: "きょうは とても さむいです。ふくを なんまいも かさねて きています。",
              vi: "Hôm nay trời rất lạnh. Tôi đang mặc chồng nhiều lớp áo."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "今日は とても さむいです。ふくを 何まいも 【重ねて】 きています。",
              target: "重ねて",
              answer: "かさねて",
              options: ["かさねて", "おもねて", "じゅうねて", "つらねて"],
              hint: "Mặc chồng nhiều lớp áo (TRÙNG)."
            },
            {
              type: "kanji",
              question: "【たいじゅう】が ふえたので ジョギングを 始めました。",
              target: "たいじゅう",
              answer: "体重",
              options: ["体重", "体動", "体黒", "体量"],
              hint: "Cân nặng cơ thể (THỂ TRỌNG)."
            }
          ]
        },
        {
          char: "軽",
          hanViet: "KHINH",
          meaning: "Nhẹ, nhẹ nhàng",
          strokes: 12,
          onyomi: ["ケイ"],
          kunyomi: ["かる-い", "かろ-やか"],
          radical: "車 (Xa - Chiếc xe)",
          components: "車 (Chiếc xe) + 圣 (Hựu + Thổ - Bàn tay điều khiển trên đất)",
          mnemonic: "Chiếc xe (車) nhỏ gọn dễ dàng điều khiển bằng tay (又) trên đường đất (土) nên rất NHẸ NHÀNG (軽).",
          lookalikes: [
            { char: "経", hanViet: "KINH", diff: "Bên trái là bộ Mịch (糸) thay vì bộ Xa (車) - kinh tế, trải qua" }
          ],
          words: [
            { word: "軽い", reading: "かるい", hanViet: "KHINH", meaning: "Nhẹ", level: "N5", type: "kun" },
            { word: "軽食", reading: "けいしょく", hanViet: "KHINH THỰC", meaning: "Bữa ăn nhẹ, đồ ăn nhẹ", level: "N4", type: "on" },
            { word: "軽やか", reading: "かろやか", hanViet: "KHINH", meaning: "Nhẹ nhàng, thanh thoát", level: "N4", type: "kun" },
            { word: "口が軽い", reading: "くちがかるい", hanViet: "KHẨU KHINH", meaning: "Hay lẻo mép, không giữ được bí mật", level: "N4", type: "kun" }
          ],
          examples: [
            {
              jp: "ダイエットしたら 体が 軽くなりました。",
              reading: "ダイエットしたら からだが かるくなりました。",
              vi: "Sau khi ăn kiêng cơ thể tôi đã trở nên nhẹ nhõm hơn."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "ダイエットしたら 体が 【軽く】なりました。",
              target: "軽く",
              answer: "かるく",
              options: ["かるく", "けいく", "おもく", "ひくく"],
              hint: "Trở nên nhẹ hơn (KHINH)."
            },
            {
              type: "kanji",
              question: "ここで サンドイッチなどの 【けいしょく】が 買えます。",
              target: "けいしょく",
              answer: "軽食",
              options: ["軽食", "経食", "重食", "昼食"],
              hint: "Đồ ăn nhẹ (KHINH THỰC)."
            }
          ]
        }
      ]
    },
    {
      id: "3-2",
      number: 2,
      titleJp: "あて先",
      reading: "あてさき",
      titleVi: "Địa chỉ người nhận",
      introJp: "荷物を 送るとき かならず あて先を 書きます。あて先を 書くときに ひつような 漢字を おぼえましょう。",
      introVi: "Khi gửi bưu kiện nhất định phải ghi địa chỉ người nhận. Hãy cùng học các chữ Kanji cần thiết khi viết địa chỉ nhé.",
      kanjiList: [
        {
          char: "住",
          hanViet: "TRÚ",
          meaning: "Sống, cư trú, ở",
          strokes: 7,
          onyomi: ["ジュウ"],
          kunyomi: ["す-む", "す-まう"],
          radical: "亻 (Nhân đứng - Người)",
          components: "亻 (Người) + 主 (Chủ - Ngọn đèn/Chủ nhân)",
          mnemonic: "Con người (亻) làm chủ (主) ngôi nhà nơi mình SINH SỐNG, CƯ TRÚ (住).",
          lookalikes: [
            { char: "主", hanViet: "CHỦ", diff: "Không có bộ Nhân đứng (亻) ở bên trái - chủ nhân, chính" },
            { char: "注", hanViet: "CHÚ", diff: "Bên trái là bộ Thủy (氵) - chú ý, rót nước" }
          ],
          words: [
            { word: "住む", reading: "すむ", hanViet: "TRÚ", meaning: "Sống, cư trú", level: "N5", type: "kun" },
            { word: "住所", reading: "じゅうしょ", hanViet: "TRÚ SỞ", meaning: "Địa chỉ", level: "N4", type: "on" },
            { word: "住宅", reading: "じゅうたく", hanViet: "TRÚ TRẠCH", meaning: "Nhà ở", level: "N4", type: "on" },
            { word: "住宅街", reading: "じゅうたくがい", hanViet: "TRÚ TRẠCH NHAI", meaning: "Khu dân cư", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "ここに あなたの 名前と 住所を 書いてください。",
              reading: "ここに あなたの なまえと じゅうしょを かいてください。",
              vi: "Vui lòng viết tên và địa chỉ của bạn vào đây."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "住所が かわったので 友だちに メールで れんらくしました。【住所】",
              target: "住所",
              answer: "じゅうしょ",
              options: ["じゅうしょ", "すむところ", "しゅうしょ", "じゅうじょ"],
              hint: "Địa chỉ nhà (TRÚ SỞ)."
            },
            {
              type: "kanji",
              question: "私は 学生ようの アパートに 【すんで】います。",
              target: "すんで",
              answer: "住んで",
              options: ["住んで", "主んで", "注んで", "休んで"],
              hint: "Đang sống ở khu căn hộ (TRÚ)."
            }
          ]
        },
        {
          char: "所",
          hanViet: "SỞ",
          meaning: "Nơi, chỗ, cơ sở",
          strokes: 8,
          onyomi: ["ショ", "ジョ"],
          kunyomi: ["ところ"],
          radical: "戸 (Hộ - Cánh cửa)",
          components: "戸 (Cánh cửa) + 斤 (Cân - Cái rìu)",
          mnemonic: "Nơi nghe tiếng rìu (斤) đẽo gỗ dựng cánh cửa (戸) chính là CHỖ Ở, CƠ SỞ (所).",
          lookalikes: [
            { char: "近", hanViet: "CẬN", diff: "Có bộ Sước (辶) đi kèm bộ Cân (斤) - gần" }
          ],
          words: [
            { word: "所", reading: "ところ", hanViet: "SỞ", meaning: "Nơi, chỗ", level: "N5", type: "kun" },
            { word: "場所", reading: "ばしょ", hanViet: "TRƯỜNG SỞ", meaning: "Địa điểm, nơi chốn", level: "N4", type: "on" },
            { word: "住所", reading: "じゅうしょ", hanViet: "TRÚ SỞ", meaning: "Địa chỉ", level: "N4", type: "on" },
            { word: "近所", reading: "きんじょ", hanViet: "CẬN SỞ", meaning: "Hàng xóm, vùng lân cận", level: "N4", type: "on" },
            { word: "長所", reading: "ちょうしょ", hanViet: "TRƯỞNG SỞ", meaning: "Điểm mạnh, ưu điểm", level: "N4", type: "on" },
            { word: "短所", reading: "たんしょ", hanViet: "ĐOẢN SỞ", meaning: "Điểm yếu, nhược điểm", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "私は 高い 所が あまり 好きじゃありません。",
              reading: "わたしは たかい ところが あまり すきじゃありません。",
              vi: "Tôi không thích những nơi cao cho lắm."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "私は 高い 【所】が あまり 好きじゃありません。",
              target: "所",
              answer: "ところ",
              options: ["ところ", "しょ", "ばしょ", "じょ"],
              hint: "Đứng độc lập sau tính từ đọc theo âm Kun."
            },
            {
              type: "kanji",
              question: "ここに あなたの 名前と 【じゅうしょ】を 書いてください。",
              target: "じゅうしょ",
              answer: "住所",
              options: ["住所", "住場", "住戸", "住屋"],
              hint: "Địa chỉ (TRÚ SỞ)."
            }
          ]
        },
        {
          char: "様",
          hanViet: "DẠNG",
          meaning: "Ngài/Quý khách (kính ngữ), dáng vẻ, tình trạng",
          strokes: 14,
          onyomi: ["ヨウ"],
          kunyomi: ["さま"],
          radical: "木 (Mộc - Cây)",
          components: "木 (Cây) + 羊 (Con cừu) + 氺 (Nước)",
          mnemonic: "Hình dáng cây cối (木) và đàn cừu (羊) soi bóng xuống mặt nước (氺) tạo nên DÁNG VẺ, HÌNH DẠNG (様).",
          lookalikes: [
            { char: "洋", hanViet: "DƯƠNG", diff: "Bên trái là bộ Thủy (氵), bên phải chỉ có chữ Dương (羊) - đại dương, phương Tây" }
          ],
          words: [
            { word: "〜様", reading: "〜さま", hanViet: "DẠNG", meaning: "Ngài, Ông/Bà (kính ngữ sau tên người nhận)", level: "N4", type: "kun" },
            { word: "お客様", reading: "おきゃくさま", hanViet: "KHÁCH DẠNG", meaning: "Quý khách", level: "N4", type: "kun" },
            { word: "奥様", reading: "おくさま", hanViet: "ÁO DẠNG", meaning: "Phu nhân, vợ (người khác)", level: "N4", type: "kun" },
            { word: "様子", reading: "ようす", hanViet: "DẠNG TỬ", meaning: "Tình hình, trạng thái, vẻ ngoài", level: "N4", type: "on" },
            { word: "お疲れ様", reading: "おつかれさま", hanViet: "DẠNG", meaning: "Cảm ơn vì đã vất vả", level: "N4", type: "kun" }
          ],
          examples: [
            {
              jp: "店の 外から 中の 様子を 見ます。",
              reading: "みせの そとから なかの ようすを みます。",
              vi: "Tôi nhìn tình hình bên trong từ phía ngoài cửa hàng."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "店の 外から 中の 【様子】を 見ます。",
              target: "様子",
              answer: "ようす",
              options: ["ようす", "さまこ", "ようし", "さまし"],
              hint: "Tình hình, dáng vẻ (DẠNG TỬ đọc là ようす)."
            },
            {
              type: "kanji",
              question: "【おきゃくさま】、おまたせいたしました。",
              target: "おきゃくさま",
              answer: "お客様",
              options: ["お客様", "お客洋", "お客羊", "お客像"],
              hint: "Quý khách (KHÁCH DẠNG)."
            }
          ]
        },
        {
          char: "主",
          hanViet: "CHỦ",
          meaning: "Chủ nhân, người chồng, chủ yếu",
          strokes: 5,
          onyomi: ["シュ", "ス"],
          kunyomi: ["ぬし", "おも"],
          radical: "丶 (Chủ - Dấu chấm ngọn lửa)",
          components: "丶 (Ngọn lửa bấc đèn) + 王 (Giá đỡ chân đèn)",
          mnemonic: "Ngọn đèn (丶) đặt trên giá đỡ (王) tỏa sáng giữa nhà như vị CHỦ NHÂN (主).",
          lookalikes: [
            { char: "玉", hanViet: "NGỌC", diff: "Dấu chấm nằm ở bên dưới nét ngang thứ 2 - viên ngọc" },
            { char: "王", hanViet: "VƯƠNG", diff: "Không có dấu chấm ở trên đầu - nhà vua" }
          ],
          words: [
            { word: "ご主人", reading: "ごしゅじん", hanViet: "CHỦ NHÂN", meaning: "Chồng (của người khác), chủ tiệm", level: "N5", type: "on" },
            { word: "主に", reading: "おもに", hanViet: "CHỦ", meaning: "Chủ yếu là", level: "N4", type: "kun" },
            { word: "主な", reading: "おもな", hanViet: "CHỦ", meaning: "Chính, chủ yếu", level: "N4", type: "kun" },
            { word: "持ち主", reading: "もちぬし", hanViet: "TRÌ CHỦ", meaning: "Chủ sở hữu, người chủ món đồ", level: "N4", type: "kun" }
          ],
          examples: [
            {
              jp: "おとし物の さいふの もち主を さがしています。",
              reading: "おとしものの さいふの もちぬしを さがしています。",
              vi: "Tôi đang tìm chủ nhân của chiếc ví bị đánh rơi."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "日本酒の 【主な】 げんりょうは 米です。",
              target: "主な",
              answer: "おもな",
              options: ["おもな", "しゅな", "ぬしな", "おうな"],
              hint: "Nguyên liệu chính/chủ yếu (đọc âm Kun)."
            },
            {
              type: "kanji",
              question: "早川さんの 【ごしゅじん】は 新しく 部長に なりました。",
              target: "ごしゅじん",
              answer: "ご主人",
              options: ["ご主人", "ご住人", "ご王人", "ご玉人"],
              hint: "Chồng của người khác (CHỦ NHÂN)."
            }
          ]
        },
        {
          char: "番",
          hanViet: "PHIÊN",
          meaning: "Số thứ tự, lượt, canh gác",
          strokes: 12,
          onyomi: ["バン"],
          kunyomi: [],
          radical: "田 (Điền - Ruộng)",
          components: "釆 (Biện - Dấu chân thú/gieo hạt) + 田 (Ruộng)",
          mnemonic: "Đánh dấu thứ tự từng thửa ruộng (田) để gieo hạt (釆) theo LƯỢT, SỐ THỨ TỰ (番).",
          lookalikes: [
            { char: "審", hanViet: "THẨM", diff: "Có thêm bộ Miên (宀) ở trên cùng - thẩm tra, trọng tài" }
          ],
          words: [
            { word: "一番", reading: "いちばん", hanViet: "NHẤT PHIÊN", meaning: "Số một, nhất", level: "N5", type: "on" },
            { word: "番号", reading: "ばんごう", hanViet: "PHIÊN HIỆU", meaning: "Số hiệu (số điện thoại, số phòng)", level: "N5", type: "on" },
            { word: "番地", reading: "ばんち", hanViet: "PHIÊN ĐỊA", meaning: "Số nhà, số lô đất", level: "N4", type: "on" },
            { word: "番組", reading: "ばんぐみ", hanViet: "PHIÊN TỔ", meaning: "Chương trình (tivi, radio)", level: "N4", type: "on" },
            { word: "交番", reading: "こうばん", hanViet: "GIAO PHIÊN", meaning: "Đồn cảnh sát khu vực", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "じゅうしょは 番地だけでなく マンションの 名前も 書いてください。",
              reading: "じゅうしょは ばんちだけでなく マンションの なまえも かいてください。",
              vi: "Địa chỉ không chỉ ghi số nhà mà xin hãy ghi cả tên chung cư nữa."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "じゅうしょは 【番地】だけでなく マンションの 名前も 書いてください。",
              target: "番地",
              answer: "ばんち",
              options: ["ばんち", "ばんじ", "はんち", "ばんつち"],
              hint: "Số nhà trong địa chỉ (PHIÊN ĐỊA)."
            },
            {
              type: "kanji",
              question: "【でんわばんごう】も わすれずに 書いてほしいです。",
              target: "でんわばんごう",
              answer: "でんわ番号",
              options: ["でんわ番号", "でんわ便号", "でんわ米号", "でんわ重号"],
              hint: "Số điện thoại (PHIÊN HIỆU)."
            }
          ]
        },
        {
          char: "地",
          hanViet: "ĐỊA",
          meaning: "Đất, mặt đất, địa phương, vùng",
          strokes: 6,
          onyomi: ["チ", "ジ"],
          kunyomi: [],
          radical: "土 (Thổ - Đất)",
          components: "土 (Đất) + 也 (Dã - Trải rộng)",
          mnemonic: "Mặt đất (土) trải dài rộng khắp (也) tạo thành ĐỊA CẦU, VÙNG ĐẤT (地).",
          lookalikes: [
            { char: "池", hanViet: "TRÌ", diff: "Bên trái là bộ Thủy (氵) thay vì bộ Thổ (土) - cái ao" },
            { char: "他", hanViet: "THA", diff: "Bên trái là bộ Nhân đứng (亻) - khác, người khác" }
          ],
          words: [
            { word: "地図", reading: "ちず", hanViet: "ĐỊA ĐỒ", meaning: "Bản đồ", level: "N5", type: "on" },
            { word: "地下鉄", reading: "ちかてつ", hanViet: "ĐỊA HẠ THIẾT", meaning: "Tàu điện ngầm", level: "N5", type: "on" },
            { word: "地震", reading: "じしん", hanViet: "ĐỊA CHẤN", meaning: "Động đất", level: "N4", type: "on" },
            { word: "番地", reading: "ばんち", hanViet: "PHIÊN ĐỊA", meaning: "Số nhà, số khu đất", level: "N4", type: "on" },
            { word: "地方", reading: "ちほう", hanViet: "ĐỊA PHƯƠNG", meaning: "Địa phương, vùng tỉnh lẻ", level: "N4", type: "on" },
            { word: "観光地", reading: "かんこうち", hanViet: "QUAN QUANG ĐỊA", meaning: "Địa điểm du lịch", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "日光は 日本の 有名な かん光地です。",
              reading: "にっこうは にほんの ゆうめいな かんこうちです。",
              vi: "Nikko là một địa điểm du lịch nổi tiếng của Nhật Bản."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "【地方】から 上京して もう 20年に なります。",
              target: "地方",
              answer: "ちほう",
              options: ["ちほう", "じほう", "ちかた", "いなか"],
              hint: "Vùng địa phương (ĐỊA PHƯƠNG)."
            },
            {
              type: "kanji",
              question: "駅から じたくまでの 【ちず】を 書きました。",
              target: "ちず",
              answer: "地図",
              options: ["地図", "池図", "他図", "土図"],
              hint: "Bản đồ (ĐỊA ĐỒ)."
            }
          ]
        },
        {
          char: "号",
          hanViet: "HIỆU",
          meaning: "Số hiệu, toa tàu, cơn bão số...",
          strokes: 5,
          onyomi: ["ゴウ"],
          kunyomi: [],
          radical: "口 (Khẩu - Miệng)",
          components: "口 (Miệng hô to) + 丂 (Luồng hơi vang xa)",
          mnemonic: "Dùng miệng (口) hô vang khẩu lệnh (丂) để báo SỐ HIỆU, TÍN HIỆU (号).",
          lookalikes: [
            { char: "名", hanViet: "DANH", diff: "Phía trên là bộ Tịch (夕) - tên gọi" }
          ],
          words: [
            { word: "番号", reading: "ばんごう", hanViet: "PHIÊN HIỆU", meaning: "Số (điện thoại, thứ tự)", level: "N5", type: "on" },
            { word: "〜号室", reading: "〜ごうしつ", hanViet: "HIỆU THẤT", meaning: "Phòng số...", level: "N4", type: "on" },
            { word: "信号", reading: "しんごう", hanViet: "TÍN HIỆU", meaning: "Đèn giao thông, tín hiệu", level: "N4", type: "on" },
            { word: "号外", reading: "ごうがい", hanViet: "HIỆU NGOẠI", meaning: "Bản tin đặc biệt (phát thêm)", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "部屋が 何号しつかまで きちんと 書いてください。",
              reading: "へやが なんごうしつかまで きちんと かいてください。",
              vi: "Vui lòng ghi rõ ràng đến tận số phòng bao nhiêu."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "部屋が 【何号しつ】かまで きちんと 書いてください。",
              target: "何号しつ",
              answer: "なんごうしつ",
              options: ["なんごうしつ", "なにوبうしつ", "なんこうしつ", "なんばんしつ"],
              hint: "Phòng số mấy (HÀ HIỆU THẤT)."
            },
            {
              type: "kanji",
              question: "グリーンマンション 704【ごう】に すんでいます。",
              target: "ごう",
              answer: "号",
              options: ["号", "番", "室", "名"],
              hint: "Phòng số 704 (HIỆU)."
            }
          ]
        }
      ]
    },
    {
      id: "3-3",
      number: 3,
      titleJp: "都道府県",
      reading: "とどうふけん",
      titleVi: "Tỉnh thành Nhật Bản",
      introJp: "日本には 一都一道二府四十三県 あります。日本の 地理や まちの 漢字を おぼえましょう。",
      introVi: "Nhật Bản có 1 Đô (Tokyo), 1 Đạo (Hokkaido), 2 Phủ (Osaka, Kyoto) và 43 Tỉnh. Hãy cùng học các chữ Kanji về đơn vị hành chính nhé.",
      kanjiList: [
        {
          char: "京",
          hanViet: "KINH",
          meaning: "Kinh đô, thủ đô (Tokyo, Kyoto)",
          strokes: 8,
          onyomi: ["キョウ", "ケイ"],
          kunyomi: [],
          radical: "亠 (Đầu - Mái nhọn)",
          components: "亠 (Mái cổng thành) + 口 (Cửa thành) + 小 (Chân tháp cao)",
          mnemonic: "Tòa thành có mái cao (亠), cổng lớn (口) đứng sừng sững trên đài cao (小) chính là KINH ĐÔ (京).",
          lookalikes: [
            { char: "景", hanViet: "CẢNH", diff: "Có thêm bộ Nhật (日) ở trên cùng - phong cảnh" },
            { char: "涼", hanViet: "LƯƠNG", diff: "Có thêm bộ Thủy (氵) bên trái - mát mẻ" }
          ],
          words: [
            { word: "東京", reading: "とうきょう", hanViet: "ĐÔNG KINH", meaning: "Thủ đô Tokyo", level: "N5", type: "on" },
            { word: "京都", reading: "きょうと", hanViet: "KINH ĐÔ", meaning: "Cố đô Kyoto", level: "N4", type: "on" },
            { word: "上京する", reading: "じょうきょうする", hanViet: "THƯỢNG KINH", meaning: "Lên thủ đô Tokyo", level: "N4", type: "on" },
            { word: "京浜", reading: "けいひん", hanViet: "KINH BÃI", meaning: "Vùng Tokyo - Yokohama (đọc âm ケイ)", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "東京の 人口は やく 1,300万人です。",
              reading: "とうきょうの じんこうは やく せんさんびゃくまんにんです。",
              vi: "Dân số của Tokyo vào khoảng 13 triệu người."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "地方から 【上京】して もう 20年に なります。",
              target: "上京",
              answer: "じょうきょう",
              options: ["じょうきょう", "うえきょう", "じょうけい", "のぼりきょう"],
              hint: "Từ quê lên Tokyo (THƯỢNG KINH)."
            },
            {
              type: "kanji",
              question: "【きょうと】は 古い お寺が たくさん あります。",
              target: "きょうと",
              answer: "京都",
              options: ["京都", "景都", "京都市", "東都"],
              hint: "Cố đô Kyoto (KINH ĐÔ)."
            }
          ]
        },
        {
          char: "都",
          hanViet: "ĐÔ",
          meaning: "Thủ đô, đô thị, thành phố lớn",
          strokes: 11,
          onyomi: ["ト", "ツ"],
          kunyomi: ["みやこ"],
          radical: "阝 (Ấp - Vùng đất, bên phải)",
          components: "者 (Giả - Con người) + 阝 (Ấp - Vùng đất/thành thị)",
          mnemonic: "Vùng đất (阝) nơi có rất nhiều người (者) tụ hội sinh sống chính là ĐÔ THỊ, THỦ ĐÔ (都).",
          lookalikes: [
            { char: "部", hanViet: "BỘ", diff: "Bên trái là chữ Bồi (立 + 口) - bộ phận, CLB" }
          ],
          words: [
            { word: "東京都", reading: "とうきょうと", hanViet: "ĐÔNG KINH ĐÔ", meaning: "Đô thị Tokyo", level: "N4", type: "on" },
            { word: "京都", reading: "きょうと", hanViet: "KINH ĐÔ", meaning: "Kyoto", level: "N4", type: "on" },
            { word: "首都", reading: "しゅと", hanViet: "THỦ ĐÔ", meaning: "Thủ đô", level: "N4", type: "on" },
            { word: "都会", reading: "とかい", hanViet: "ĐÔ HỘI", meaning: "Thành thị, đô thị", level: "N4", type: "on" },
            { word: "都内", reading: "とない", hanViet: "ĐÔ NỘI", meaning: "Nội thành Tokyo", level: "N4", type: "on" },
            { word: "都合", reading: "つごう", hanViet: "ĐÔ HỢP", meaning: "Sự thuận tiện, hoàn cảnh (đọc âm ツ)", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "いつか 都会で 生かつしたいです。",
              reading: "いつか とかいで せいかつしたいです。",
              vi: "Có dịp nào đó tôi muốn sống thử ở chốn đô thị."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "日本の 【しゅ都】は どこか わかりますか。",
              target: "しゅ都",
              answer: "しゅと",
              options: ["しゅと", "しゅみやこ", "しゅつ", "しゅうと"],
              hint: "Thủ đô (THỦ ĐÔ)."
            },
            {
              type: "kanji",
              question: "ぜひ 一ど 【とかい】に 住みたいと おもっています。",
              target: "とかい",
              answer: "都会",
              options: ["都会", "部会", "市会", "町会"],
              hint: "Thành phố lớn, đô thị (ĐÔ HỘI)."
            }
          ]
        },
        {
          char: "道",
          hanViet: "ĐẠO",
          meaning: "Con đường, đạo lý, tỉnh Hokkaido",
          strokes: 12,
          onyomi: ["ドウ"],
          kunyomi: ["みち"],
          radical: "辶 (Sước - Bước đi)",
          components: "首 (Thủ - Cái đầu/hướng nhìn) + 辶 (Bước đi)",
          mnemonic: "Cái đầu (首) nhìn thẳng phía trước, chân bước đi (辶) trên CON ĐƯỜNG (道).",
          lookalikes: [
            { char: "通", hanViet: "THÔNG", diff: "Bên trong là chữ Dũng (甬) - đi qua, thông suốt" },
            { char: "導", hanViet: "ĐẠO", diff: "Có thêm bộ Thốn (寸) ở dưới - hướng dẫn, chỉ đạo" }
          ],
          words: [
            { word: "道", reading: "みち", hanViet: "ĐẠO", meaning: "Con đường", level: "N5", type: "kun" },
            { word: "北海道", reading: "ほっかいどう", hanViet: "BẮC HẢI ĐẠO", meaning: "Tỉnh đảo Hokkaido", level: "N4", type: "on" },
            { word: "道路", reading: "どうろ", hanViet: "ĐẠO LỘ", meaning: "Đường sá, đường giao thông", level: "N4", type: "on" },
            { word: "水道", reading: "すいどう", hanViet: "THỦY ĐẠO", meaning: "Nước máy", level: "N4", type: "on" },
            { word: "道具", reading: "どうぐ", hanViet: "ĐẠO CỤ", meaning: "Dụng cụ, đồ nghề", level: "N4", type: "on" },
            { word: "書道", reading: "しょどう", hanViet: "THƯ ĐẠO", meaning: "Thư pháp", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "道を あるくときは 車に 気をつけましょう。",
              reading: "みちを あるくときは くるまに きをつけましょう。",
              vi: "Khi đi bộ trên đường hãy cẩn thận xe cộ."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "ふゆ休みに 友だちと 【北かい道】へ 行きます。",
              target: "北かい道",
              answer: "ほっかいどう",
              options: ["ほっかいどう", "きたかいどう", "ほかいどう", "ほっかいみち"],
              hint: "Đảo Hokkaido (BẮC HẢI ĐẠO)."
            },
            {
              type: "kanji",
              question: "日本では 車は 【どうろ】の 左を はしります。",
              target: "どうろ",
              answer: "道ろ",
              options: ["道ろ", "通ろ", "導ろ", "首ろ"],
              hint: "Đường giao thông (ĐẠO LỘ)."
            }
          ]
        },
        {
          char: "府",
          hanViet: "PHỦ",
          meaning: "Chính phủ, phủ (Osaka-fu, Kyoto-fu)",
          strokes: 8,
          onyomi: ["フ"],
          kunyomi: [],
          radical: "广 (Nghiễm - Mái nhà rộng)",
          components: "广 (Tòa nhà lớn) + 付 (Phụ - Giao phó, đính kèm: 亻 + 寸)",
          mnemonic: "Tòa nhà lớn (广) nơi người dân (亻) trao gửi (寸) luật pháp chính là CHÍNH PHỦ, ĐÔ PHỦ (府).",
          lookalikes: [
            { char: "付", hanViet: "PHỤ", diff: "Không có mái nhà Nghiễm (广) ở trên - gắn vào, đính kèm" },
            { char: "店", hanViet: "ĐIẾM", diff: "Bên trong là chữ Chiêm (占) - cửa hàng" }
          ],
          words: [
            { word: "大阪府", reading: "おおさかふ", hanViet: "ĐẠI BẢN PHỦ", meaning: "Phủ Osaka", level: "N4", type: "on" },
            { word: "京都府", reading: "きょうとふ", hanViet: "KINH ĐÔ PHỦ", meaning: "Phủ Kyoto", level: "N4", type: "on" },
            { word: "政府", reading: "せいふ", hanViet: "CHÍNH PHỦ", meaning: "Chính phủ", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "後ろに「府」が つく所は 大さかと 京都です。",
              reading: "うしろに「ふ」が つくところは おおさかと きょうとです。",
              vi: "Những nơi có chữ 'Phủ' đứng sau là Osaka và Kyoto."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "【大さか府】は 西日本の 中しんです。",
              target: "大さか府",
              answer: "おおさかふ",
              options: ["おおさかふ", "おおさかぶ", "だいさかふ", "おおさかぷ"],
              hint: "Phủ Osaka."
            },
            {
              type: "kanji",
              question: "日本【せいふ】が 今 やらなければならない か題は たくさん あります。",
              target: "せいふ",
              answer: "政府",
              options: ["政府", "政付", "政庁", "政店"],
              hint: "Chính phủ (CHÍNH PHỦ)."
            }
          ]
        },
        {
          char: "県",
          hanViet: "HUYỆN",
          meaning: "Tỉnh (đơn vị hành chính Nhật Bản)",
          strokes: 9,
          onyomi: ["ケン"],
          kunyomi: [],
          radical: "小 (Tiểu) / 目 (Mục)",
          components: "目 (Con mắt) + 𠃊 + 小 (Trẻo lên cao để quan sát)",
          mnemonic: "Con mắt (目) nhìn bao quát cả vùng đất bên dưới (小) tạo thành một TỈNH (県).",
          lookalikes: [
            { char: "真", hanViet: "CHÂN", diff: "Phía trên có chữ Thập (十), phía dưới có 2 nét chân - chân thật" },
            { char: "具", hanViet: "CỤ", diff: "Phía dưới là nét ngang dài và 2 chấm - dụng cụ" }
          ],
          words: [
            { word: "〜県", reading: "〜けん", hanViet: "HUYỆN", meaning: "Tỉnh...", level: "N4", type: "on" },
            { word: "何県", reading: "なにけん", hanViet: "HÀ HUYỆN", meaning: "Tỉnh nào", level: "N4", type: "on" },
            { word: "県庁", reading: "けんちょう", hanViet: "HUYỆN SẢNH", meaning: "Ủy ban hành chính tỉnh", level: "N4", type: "on" },
            { word: "山口県", reading: "やまぐちけん", hanViet: "SƠN KHẨU HUYỆN", meaning: "Tỉnh Yamaguchi", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "日本には 四十三の 県が あります。",
              reading: "にほんには よんじゅうさんの けんが あります。",
              vi: "Ở Nhật Bản có 43 tỉnh."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "あなたは 【何県】の 出しんですか。",
              target: "何県",
              answer: "なにけん",
              options: ["なにけん", "なんげん", "なにげん", "どけん"],
              hint: "Bạn xuất thân từ tỉnh nào (なにけん / なんけん)."
            },
            {
              type: "kanji",
              question: "私は 【やまぐちけん】の 生まれです。",
              target: "やまぐちけん",
              answer: "山口県",
              options: ["山口県", "山口真", "山口具", "山口府"],
              hint: "Tỉnh Yamaguchi."
            }
          ]
        },
        {
          char: "市",
          hanViet: "THỊ",
          meaning: "Thành phố, chợ",
          strokes: 5,
          onyomi: ["シ"],
          kunyomi: ["いち"],
          radical: "巾 (Cân - Khăn vải)",
          components: "亠 (Mái lều) + 巾 (Tấm vải treo làm biển hiệu)",
          mnemonic: "Dưới mái lều (亠) treo tấm vải hiệu (巾) họp CHỢ, phát triển thành THÀNH PHỐ (市).",
          lookalikes: [
            { char: "姉", hanViet: "TỶ", diff: "Có thêm bộ Nữ (女) ở bên trái - chị gái" },
            { char: "布", hanViet: "BỐ", diff: "Phía trên là nét phẩy ngang (ナ) - tấm vải" }
          ],
          words: [
            { word: "〜市", reading: "〜し", hanViet: "THỊ", meaning: "Thành phố...", level: "N4", type: "on" },
            { word: "市役所", reading: "しやくしょ", hanViet: "THỊ DỊCH SỞ", meaning: "Tòa thị chính, ủy ban thành phố", level: "N4", type: "on" },
            { word: "市長", reading: "しちょう", hanViet: "THỊ TRƯỞNG", meaning: "Thị trưởng", level: "N4", type: "on" },
            { word: "市内", reading: "しない", hanViet: "THỊ NỘI", meaning: "Nội thành", level: "N4", type: "on" },
            { word: "市場", reading: "いちば", hanViet: "THỊ TRƯỜNG", meaning: "Chợ (đọc âm Kun いちば)", level: "N4", type: "kun" },
            { word: "朝市", reading: "あさいち", hanViet: "TRIỀU THỊ", meaning: "Chợ sớm", level: "N4", type: "kun" }
          ],
          examples: [
            {
              jp: "ひっこしたときは 市やく所に 行って 手つづきを しなければなりません。",
              reading: "ひっこしたときは しやくしょに いって てつづきを しなければなりません。",
              vi: "Khi chuyển nhà thì phải đến tòa thị chính để làm thủ tục."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "【市場】では 新しい やさいや 魚を 安く 売っています。",
              target: "市場",
              answer: "いちば",
              options: ["いちば", "しじょう", "しば", "いちじょう"],
              hint: "Chợ bán rau cá tươi (đọc âm Kun いちば)."
            },
            {
              type: "kanji",
              question: "【しやくしょ】の となりの公園は とても きれいです。",
              target: "しやくしょ",
              answer: "市やく所",
              options: ["市やく所", "私やく所", "区やく所", "町やく所"],
              hint: "Ủy ban thành phố / Tòa thị chính (THỊ DỊCH SỞ)."
            }
          ]
        },
        {
          char: "区",
          hanViet: "KHU",
          meaning: "Quận, khu vực, phân khu",
          strokes: 4,
          onyomi: ["ク"],
          kunyomi: [],
          radical: "匚 (Phương - Cái hộp vuông)",
          components: "匚 (Khung ranh giới) + メ (Dấu gạch chéo phân chia)",
          mnemonic: "Dùng đường gạch chéo (メ) chia mảnh đất vuông (匚) thành từng QUẬN, KHU VỰC (区).",
          lookalikes: [
            { char: "医", hanViet: "Y", diff: "Bên trong khung (匚) là chữ Thỉ (矢 - mũi tên) - y tế, bác sĩ" }
          ],
          words: [
            { word: "〜区", reading: "〜く", hanViet: "KHU", meaning: "Quận...", level: "N4", type: "on" },
            { word: "区内", reading: "くない", hanViet: "KHU NỘI", meaning: "Trong quận", level: "N4", type: "on" },
            { word: "区長", reading: "くちょう", hanViet: "KHU TRƯỞNG", meaning: "Quận trưởng, chủ tịch quận", level: "N4", type: "on" },
            { word: "区役所", reading: "くやくしょ", hanViet: "KHU DỊCH SỞ", meaning: "Ủy ban nhân dân quận", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "東京都には 23の 区が あります。",
              reading: "とうきょうとには にじゅうさんの くが あります。",
              vi: "Ở thủ đô Tokyo có 23 quận."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "このコンサートは 【区内】の 人は むりょうです。",
              target: "区内",
              answer: "くない",
              options: ["くない", "くうち", "いない", "くんなか"],
              hint: "Trong phạm vi quận (KHU NỘI)."
            },
            {
              type: "kanji",
              question: "新聞に 【くちょう】の インタビューが のっています。",
              target: "くちょう",
              answer: "区長",
              options: ["区長", "市長", "医長", "町長"],
              hint: "Quận trưởng (KHU TRƯỞNG)."
            }
          ]
        },
        {
          char: "村",
          hanViet: "THÔN",
          meaning: "Làng, thôn, xã",
          strokes: 7,
          onyomi: ["ソン"],
          kunyomi: ["むら"],
          radical: "木 (Mộc - Cây)",
          components: "木 (Cây cối) + 寸 (Thốn - Thước đo, phép tắc)",
          mnemonic: "Nơi có lũy tre, cây cối (木) bao quanh và sống theo phép tắc (寸) là LÀNG THÔN (村).",
          lookalikes: [
            { char: "材", hanViet: "TÀI", diff: "Bên phải là chữ Tài (才) - nguyên vật liệu" },
            { char: "林", hanViet: "LÂM", diff: "Hai chữ Mộc (木) đứng cạnh nhau - rừng thưa" }
          ],
          words: [
            { word: "村", reading: "むら", hanViet: "THÔN", meaning: "Ngôi làng, thôn", level: "N4", type: "kun" },
            { word: "村長", reading: "そんちょう", hanViet: "THÔN TRƯỞNG", meaning: "Trưởng thôn, chủ tịch xã", level: "N4", type: "on" },
            { word: "市町村", reading: "しちょうそん", hanViet: "THỊ ĐINH THÔN", meaning: "Thành phố, thị trấn và làng xã", level: "N4", type: "on" }
          ],
          examples: [
            {
              jp: "となりの 村へ 行くとき バスで 2時間 かかります。",
              reading: "となりの むらへ いくとき バスで にじかん かかります。",
              vi: "Khi đi sang ngôi làng bên cạnh phải mất 2 tiếng đi xe buýt."
            }
          ],
          exercises: [
            {
              type: "reading",
              question: "となりの 【村】へ 行くとき バスで 2時間 かかります。",
              target: "村",
              answer: "むら",
              options: ["むら", "そん", "まち", "さと"],
              hint: "Ngôi làng (đứng một mình đọc âm Kun)."
            },
            {
              type: "kanji",
              question: "住所へんこうは 【しちょうそん】の やく所で してください。",
              target: "しちょうそん",
              answer: "市町村",
              options: ["市町村", "市町材", "市町林", "市区村"],
              hint: "Thành phố, thị trấn, làng xã (THỊ ĐINH THÔN)."
            }
          ]
        }
      ]
    }
  ]
});
