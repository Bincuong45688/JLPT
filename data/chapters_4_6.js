window.KANJI_CHAPTERS = window.KANJI_CHAPTERS || [];
window.KANJI_CHAPTERS.push(
  {
    id: 4,
    titleJp: "4章 デート",
    titleVi: "Chương 4: Buổi hẹn hò",
    icon: "🎬",
    lessons: [
      {
        id: "4-1",
        number: 1,
        titleJp: "デート",
        reading: "デート",
        titleVi: "Hẹn hò",
        kanjiList: [
          {
            char: "毎",
            hanViet: "MỖI",
            meaning: "Mỗi, hàng (ngày/tuần/năm)",
            strokes: 6,
            onyomi: ["マイ"],
            kunyomi: ["ごと"],
            radical: "毋 (Vô - Đừng, mẹ)",
            components: "𠂉 (Nhân nằm) + 母 (Mẫu - Mẹ)",
            mnemonic: "Người mẹ (母) đội chiếc trâm cài đầu (𠂉) tần tảo chăm sóc con cái MỖI (毎) ngày.",
            lookalikes: [
              { char: "母", hanViet: "MẪU", diff: "Không có bộ nhân nằm (𠂉) ở trên đầu - nghĩa là Mẹ" },
              { char: "海", hanViet: "HẢI", diff: "Có thêm bộ Thủy (氵) bên trái - nghĩa là Biển" }
            ],
            words: [
              { word: "毎週", reading: "まいしゅう", hanViet: "MỖI CHU", meaning: "Mỗi tuần, hàng tuần", level: "N5", type: "on" },
              { word: "毎日", reading: "まいにち", hanViet: "MỖI NHẬT", meaning: "Mỗi ngày, hàng ngày", level: "N5", type: "on" },
              { word: "毎月", reading: "まいつき", hanViet: "MỖI NGUYỆT", meaning: "Mỗi tháng, hàng tháng", level: "N5", type: "on" },
              { word: "毎年", reading: "まいとし", hanViet: "MỖI NIÊN", meaning: "Mỗi năm, hàng năm", level: "N5", type: "on" },
              { word: "三日ごと", reading: "みっかごと", hanViet: "TAM NHẬT", meaning: "Cứ mỗi 3 ngày", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "毎週 日よう日に かの女と デートを します。",
                reading: "まいしゅう にちようびに かのじょと デートを します。",
                vi: "Chủ nhật hàng tuần tôi đều hẹn hò với bạn gái."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "【毎週】 日よう日に テニスを します。",
                target: "毎週",
                answer: "まいしゅう",
                options: ["まいしゅう", "まいしゅ", "ごとじゅう", "まいوم"],
                hint: "Hàng tuần (MỖI CHU)."
              },
              {
                type: "kanji",
                question: "【まいとし】 かぞくで りょこうに 行きます。",
                target: "まいとし",
                answer: "毎年",
                options: ["毎年", "母年", "海年", "毎歳"],
                hint: "Mỗi năm (MỖI NIÊN)."
              }
            ]
          },
          {
            char: "週",
            hanViet: "CHU",
            meaning: "Tuần lễ, vòng quanh",
            strokes: 11,
            onyomi: ["シュウ"],
            kunyomi: [],
            radical: "辶 (Sước - Bước đi)",
            components: "辶 (Sước - Đi) + 周 (Chu - Chu vi, vòng quanh)",
            mnemonic: "Bước đi (辶) hết một vòng khép kín (周) từ thứ Hai đến Chủ Nhật là hết một TUẦN (週).",
            lookalikes: [
              { char: "周", hanViet: "CHU", diff: "Không có bộ Sước (辶) bên ngoài - nghĩa là Chu vi, xung quanh" },
              { char: "調", hanViet: "ĐIỀU", diff: "Bên trái là bộ Ngôn (言) thay vì bộ Sước (辶) - nghĩa là Điều tra" }
            ],
            words: [
              { word: "今週", reading: "こんしゅう", hanViet: "KIM CHU", meaning: "Tuần này", level: "N5", type: "on" },
              { word: "先週", reading: "せんしゅう", hanViet: "TIÊN CHU", meaning: "Tuần trước", level: "N5", type: "on" },
              { word: "来週", reading: "らいしゅう", hanViet: "LAI CHU", meaning: "Tuần sau", level: "N5", type: "on" },
              { word: "週末", reading: "しゅうまつ", hanViet: "CHU MẠT", meaning: "Cuối tuần", level: "N4", type: "on" },
              { word: "二週間", reading: "にしゅうかん", hanViet: "NHỊ CHU GIAN", meaning: "Hai tuần lễ", level: "N5", type: "on" }
            ],
            examples: [
              {
                jp: "来週の 週末、どこへ 行きますか。",
                reading: "らいしゅうの しゅうまつ、どこへ いきますか。",
                vi: "Cuối tuần sau bạn sẽ đi đâu?"
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "【先週】 ともだちと えいがを 見ました。",
                target: "先週",
                answer: "せんしゅう",
                options: ["せんしゅう", "せんしゅ", "まえしゅう", "らいしゅう"],
                hint: "Tuần trước (TIÊN CHU)."
              },
              {
                type: "kanji",
                question: "【こんしゅう】は テストが あります。",
                target: "こんしゅう",
                answer: "今週",
                options: ["今週", "今周", "来週", "先週"],
                hint: "Tuần này (KIM CHU)."
              }
            ]
          },
          {
            char: "映",
            hanViet: "ÁNH",
            meaning: "Phản chiếu, chiếu phim",
            strokes: 9,
            onyomi: ["エイ"],
            kunyomi: ["うつ.る", "うつ.す", "は.える"],
            radical: "日 (Nhật - Mặt trời)",
            components: "日 (Nhật - Ánh sáng) + 央 (Ương - Trung tâm)",
            mnemonic: "Ánh sáng mặt trời (日) chiếu thẳng vào trung tâm (央) màn ảnh để CHIẾU PHIM (映).",
            lookalikes: [
              { char: "央", hanViet: "ƯƠNG", diff: "Không có bộ Nhật (日) bên trái - nghĩa là Trung ương, chính giữa" },
              { char: "英", hanViet: "ANH", diff: "Có bộ Thảo (艹) ở trên thay vì bộ Nhật (日) bên trái - nghĩa là Nước Anh, anh hùng" }
            ],
            words: [
              { word: "映画", reading: "えいが", hanViet: "ÁNH HỌA", meaning: "Bộ phim, điện ảnh", level: "N5", type: "on" },
              { word: "映画館", reading: "えいがかん", hanViet: "ÁNH HỌA QUÁN", meaning: "Rạp chiếu phim", level: "N5", type: "on" },
              { word: "映る", reading: "うつる", hanViet: "ÁNH", meaning: "Được phản chiếu, lên hình", level: "N4", type: "kun" },
              { word: "映す", reading: "うつす", hanViet: "ÁNH", meaning: "Chiếu lên, phản chiếu", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "新しい 映画館で 日本の 映画を 見ました。",
                reading: "あたらしい えいがかんで にほんの えいがを みました。",
                vi: "Tôi đã xem một bộ phim Nhật tại rạp chiếu phim mới."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "どんな 【映画】が すきですか。",
                target: "映画",
                answer: "えいが",
                options: ["えいが", "えいか", "おうが", "えい画"],
                hint: "Bộ phim (ÁNH HỌA)."
              },
              {
                type: "kanji",
                question: "かがみに かおが 【うつって】 います。",
                target: "うつって",
                answer: "映って",
                options: ["映って", "写って", "英って", "央って"],
                hint: "Được phản chiếu trên gương (ÁNH)."
              }
            ]
          },
          {
            char: "画",
            hanViet: "HỌA, HOẠCH",
            meaning: "Bức tranh, nét chữ, kế hoạch",
            strokes: 8,
            onyomi: ["ガ", "カク"],
            kunyomi: [],
            radical: "田 (Điền - Ruộng)",
            components: "一 (Nhất) + 由 (Do/Điền) + 凵 (Khảm - Khung)",
            mnemonic: "Dùng bút kẻ một đường ngang (一) đóng khung (凵) mảnh ruộng (田) để vẽ nên BỨC TRANH (画) và lập KẾ HOẠCH.",
            lookalikes: [
              { char: "田", hanViet: "ĐIỀN", diff: "Chỉ có hình ô vuông mảnh ruộng ở giữa - nghĩa là Ruộng" },
              { char: "歯", hanViet: "XỈ", diff: "Bên trên là bộ Chỉ (止), bên trong khung là chữ Mễ - nghĩa là Răng" }
            ],
            words: [
              { word: "映画", reading: "えいが", hanViet: "ÁNH HỌA", meaning: "Phim ảnh", level: "N5", type: "on" },
              { word: "計画", reading: "けいかく", hanViet: "KẾ HOẠCH", meaning: "Kế hoạch, dự định", level: "N4", type: "on" },
              { word: "画家", reading: "がか", hanViet: "HỌA GIA", meaning: "Họa sĩ", level: "N4", type: "on" },
              { word: "漫画", reading: "まんが", hanViet: "MẠN HỌA", meaning: "Truyện tranh (Manga)", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "なつ休みの 計画を たてて います。",
                reading: "なつやすみの けいかくを たてて います。",
                vi: "Tôi đang lập kế hoạch cho kỳ nghỉ hè."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "りょこうの 【計画】を 話し合いました。",
                target: "計画",
                answer: "けいかく",
                options: ["けいかく", "けいが", "きかく", "けいか"],
                hint: "Kế hoạch (KẾ HOẠCH - đọc âm カク)."
              },
              {
                type: "kanji",
                question: "かれは 有名な 【がか】です。",
                target: "がか",
                answer: "画家",
                options: ["画家", "映家", "図家", "田家"],
                hint: "Họa sĩ (HỌA GIA)."
              }
            ]
          },
          {
            char: "図",
            hanViet: "ĐỒ",
            meaning: "Bản đồ, hình vẽ, mưu đồ",
            strokes: 7,
            onyomi: ["ズ", "ト"],
            kunyomi: ["はか.る"],
            radical: "囗 (Vi - Vây quanh)",
            components: "囗 (Vi - Khung) + 斗 (Đấu - Các nét chấm gạch)",
            mnemonic: "Trong khung giấy vuông vức (囗) đánh dấu các tọa độ giao nhau (メ) tạo thành tấm BẢN ĐỒ (図).",
            lookalikes: [
              { char: "国", hanViet: "QUỐC", diff: "Bên trong khung là chữ Ngọc (玉) - nghĩa là Đất nước" },
              { char: "園", hanViet: "VIÊN", diff: "Bên trong khung là chữ Viên (袁) nhiều nét - nghĩa là Vườn" }
            ],
            words: [
              { word: "地図", reading: "ちず", hanViet: "ĐỊA ĐỒ", meaning: "Bản đồ", level: "N5", type: "on" },
              { word: "図書館", reading: "としょかん", hanViet: "ĐỒ THƯ QUÁN", meaning: "Thư viện", level: "N5", type: "on" },
              { word: "合図", reading: "あいず", hanViet: "HỢP ĐỒ", meaning: "Ra hiệu, tín hiệu", level: "N4", type: "on" },
              { word: "図書室", reading: "としょしつ", hanViet: "ĐỒ THƯ THẤT", meaning: "Phòng đọc sách", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "図書館で 日本の 地図を かりました。",
                reading: "としょかんで にほんの ちずを かりました。",
                vi: "Tôi đã mượn bản đồ Nhật Bản ở thư viện."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "スマホで 【地図】を 見ながら 歩きます。",
                target: "地図",
                answer: "ちず",
                options: ["ちず", "ちと", "じず", "ちづ"],
                hint: "Bản đồ (ĐỊA ĐỒ)."
              },
              {
                type: "kanji",
                question: "【としょかん】で 本を よみます。",
                target: "としょかん",
                answer: "図書館",
                options: ["図書館", "国書館", "園書館", "図書室"],
                hint: "Thư viện (ĐỒ THƯ QUÁN)."
              }
            ]
          },
          {
            char: "館",
            hanViet: "QUÁN",
            meaning: "Tòa nhà lớn, hội quán, dinh thự",
            strokes: 16,
            onyomi: ["カン"],
            kunyomi: ["やかた"],
            radical: "食 (Thực - Ăn)",
            components: "飠 (Thực - Đồ ăn) + 官 (Quan - Quan lại, công cộng)",
            mnemonic: "Nơi cung cấp thức ăn (飠) và chỗ nghỉ cho các quan chức (官) thời xưa chính là TÒA NHÀ LỚN / HỘI QUÁN (館).",
            lookalikes: [
              { char: "飯", hanViet: "PHẠN", diff: "Bên phải là chữ Phản (反) thay vì chữ Quan (官) - nghĩa là Cơm" },
              { char: "飲", hanViet: "ẨM", diff: "Bên phải là bộ Khiếm (欠) - nghĩa là Uống" }
            ],
            words: [
              { word: "映画館", reading: "えいがかん", hanViet: "ÁNH HỌA QUÁN", meaning: "Rạp chiếu phim", level: "N5", type: "on" },
              { word: "図書館", reading: "としょかん", hanViet: "ĐỒ THƯ QUÁN", meaning: "Thư viện", level: "N5", type: "on" },
              { word: "大使館", reading: "たいしかん", hanViet: "ĐẠI SỨ QUÁN", meaning: "Đại sứ quán", level: "N5", type: "on" },
              { word: "美術館", reading: "びじゅつかん", hanViet: "MỸ THUẬT QUÁN", meaning: "Bảo tàng mỹ thuật", level: "N4", type: "on" },
              { word: "旅館", reading: "りょかん", hanViet: "LỮ QUÁN", meaning: "Quán trọ kiểu Nhật", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "日よう日に 美術館へ えを 見に 行きました。",
                reading: "にちようびに びじゅつかんへ えを みに いきました。",
                vi: "Chủ nhật tôi đã đi đến bảo tàng mỹ thuật để xem tranh."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "京都の 【旅館】に とまりました。",
                target: "旅館",
                answer: "りょかん",
                options: ["りょかん", "りょうかん", "りょがん", "たびかん"],
                hint: "Quán trọ truyền thống Nhật Bản (LỮ QUÁN)."
              },
              {
                type: "kanji",
                question: "ベトナムの 【たいしかん】は どこですか。",
                target: "たいしかん",
                answer: "大使館",
                options: ["大使館", "大史館", "大使官", "大使飯"],
                hint: "Đại sứ quán (ĐẠI SỨ QUÁN)."
              }
            ]
          },
          {
            char: "公",
            hanViet: "CÔNG",
            meaning: "Công cộng, chung, công bằng",
            strokes: 4,
            onyomi: ["コウ"],
            kunyomi: ["おおやけ"],
            radical: "八 (Bát - Số 8)",
            components: "八 (Bát - Chia tám hướng) + 厶 (Khư - Riêng tư)",
            mnemonic: "Chia đều (八) những lợi ích riêng tư (厶) cho tất cả mọi người là sự CÔNG BẰNG, CÔNG CỘNG (公).",
            lookalikes: [
              { char: "分", hanViet: "PHÂN", diff: "Bên dưới là bộ Đao (刀) thay vì bộ Khư (厶) - nghĩa là Chia, phút" },
              { char: "松", hanViet: "TÙNG", diff: "Có thêm bộ Mộc (木) bên trái - nghĩa là Cây thông" }
            ],
            words: [
              { word: "公園", reading: "こうえん", hanViet: "CÔNG VIÊN", meaning: "Công viên", level: "N5", type: "on" },
              { word: "公務員", reading: "こうむいん", hanViet: "CÔNG VỤ VIÊN", meaning: "Công chức nhà nước", level: "N4", type: "on" },
              { word: "公立", reading: "こうりつ", hanViet: "CÔNG LẬP", meaning: "Công lập (trường công)", level: "N4", type: "on" },
              { word: "公平", reading: "こうへい", hanViet: "CÔNG BÌNH", meaning: "Công bằng", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "しずかな 公園を ふたりで さんぽしました。",
                reading: "しずかな こうえんを ふたりで さんぽしました。",
                vi: "Hai chúng tôi đã cùng nhau đi dạo trong công viên yên tĩnh."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "あには 【公務員】に なりました。",
                target: "公務員",
                answer: "こうむいん",
                options: ["こうむいん", "こむいん", "こうぶいん", "おおやけいん"],
                hint: "Nhân viên công chức (CÔNG VỤ VIÊN)."
              },
              {
                type: "kanji",
                question: "家の ちかくに 広い 【こうえん】が あります。",
                target: "こうえん",
                answer: "公園",
                options: ["公園", "分園", "広園", "公円"],
                hint: "Công viên (CÔNG VIÊN)."
              }
            ]
          },
          {
            char: "園",
            hanViet: "VIÊN",
            meaning: "Vườn, công viên",
            strokes: 13,
            onyomi: ["エン"],
            kunyomi: ["その"],
            radical: "囗 (Vi - Vây quanh)",
            components: "囗 (Vi - Tường bao) + 土 (Thổ - Đất) + 口 (Khẩu) + 衣 (Y)",
            mnemonic: "Khu đất (土) có tường bao quanh (囗) nơi mọi người mặc áo đẹp (衣) cười nói (口) dạo chơi là CÔNG VIÊN (園).",
            lookalikes: [
              { char: "遠", hanViet: "VIỄN", diff: "Bên ngoài là bộ Sước (辶) thay vì khung vuông (囗) - nghĩa là Xa" },
              { char: "国", hanViet: "QUỐC", diff: "Bên trong là chữ Ngọc (玉) - nghĩa là Đất nước" }
            ],
            words: [
              { word: "公園", reading: "こうえん", hanViet: "CÔNG VIÊN", meaning: "Công viên", level: "N5", type: "on" },
              { word: "動物園", reading: "どうぶつえん", hanViet: "ĐỘNG VẬT VIÊN", meaning: "Sở thú, vườn bách thú", level: "N4", type: "on" },
              { word: "幼稚園", reading: "ようちえん", hanViet: "ẤU TRĨ VIÊN", meaning: "Trường mẫu giáo", level: "N4", type: "on" },
              { word: "遊園地", reading: "ゆうえんち", hanViet: "DU VIÊN ĐỊA", meaning: "Khu vui chơi giải trí", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "こどもを つれて 動物園へ 行きました。",
                reading: "こどもを つれて どうぶつえんへ いきました。",
                vi: "Tôi đã dẫn con đi sở thú."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "パンダを 見に 【動物園】へ 行きました。",
                target: "動物園",
                answer: "どうぶつえん",
                options: ["どうぶつえん", "どぶつえん", "どうものえん", "どうぶつかん"],
                hint: "Sở thú (ĐỘNG VẬT VIÊN)."
              },
              {
                type: "kanji",
                question: "あそこで こどもたちが あそんで いるのは 【こうえん】です。",
                target: "こうえん",
                answer: "公園",
                options: ["公園", "公遠", "広園", "公国"],
                hint: "Công viên (CÔNG VIÊN)."
              }
            ]
          }
        ]
      },
      {
        id: "4-2",
        number: 2,
        titleJp: "けっこんきねん日",
        reading: "けっこんきねんび",
        titleVi: "Ngày kỷ niệm kết hôn",
        kanjiList: [
          {
            char: "夫",
            hanViet: "PHU",
            meaning: "Người chồng, đàn ông trưởng thành",
            strokes: 4,
            onyomi: ["フ", "フウ"],
            kunyomi: ["おっと"],
            radical: "大 (Đại - To lớn)",
            components: "一 (Nhất - Trâm cài/Trời) + 大 (Đại - Người lớn)",
            mnemonic: "Người đàn ông trưởng thành (大) đội mũ trâm cài trên đầu (一) gánh vác gia đình chính là NGƯỜI CHỒNG (夫).",
            lookalikes: [
              { char: "天", hanViet: "THIÊN", diff: "Nét đầu không xuyên lên trên nét ngang thứ nhất - nghĩa là Bầu trời" },
              { char: "失", hanViet: "THẤT", diff: "Có thêm nét phẩy (ノ) bên trái trên đầu - nghĩa là Đánh mất, thất bại" }
            ],
            words: [
              { word: "夫", reading: "おっと", hanViet: "PHU", meaning: "Chồng (của mình)", level: "N4", type: "kun" },
              { word: "夫婦", reading: "ふうふ", hanViet: "PHU PHỤ", meaning: "Vợ chồng", level: "N4", type: "on" },
              { word: "夫人", reading: "ふじん", hanViet: "PHU NHÂN", meaning: "Phu nhân, vợ ngài", level: "N4", type: "on" },
              { word: "工夫", reading: "くふう", hanViet: "CÔNG PHU", meaning: "Tìm tòi, sáng kiến, xoay xở", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "わたしの 夫は りょうりが とても じょうずです。",
                reading: "わたしの おっとは りょうりが とても じょうずです。",
                vi: "Chồng tôi nấu ăn rất giỏi."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "あの 二人は なかが いい 【夫婦】ですね。",
                target: "夫婦",
                answer: "ふうふ",
                options: ["ふうふ", "ふふ", "おっとつま", "ふうぶ"],
                hint: "Cặp vợ chồng (PHU PHỤ)."
              },
              {
                type: "kanji",
                question: "こちらは わたしの 【おっと】です。",
                target: "おっと",
                answer: "夫",
                options: ["夫", "天", "失", "大"],
                hint: "Người chồng của mình (PHU)."
              }
            ]
          },
          {
            char: "妻",
            hanViet: "THÊ",
            meaning: "Người vợ",
            strokes: 8,
            onyomi: ["サイ"],
            kunyomi: ["つま"],
            radical: "女 (Nữ - Phụ nữ)",
            components: "十 + ヨ (Tay cầm chổi) + 女 (Nữ - Người phụ nữ)",
            mnemonic: "Người phụ nữ (女) tay cầm cây chổi (ヨ) chăm lo vun vén việc nhà chính là NGƯỜI VỢ (妻) hiền.",
            lookalikes: [
              { char: "要", hanViet: "YẾU", diff: "Bên trên là bộ Á (覀) thay vì các nét ngang và chữ ヨ - nghĩa là Cần thiết" },
              { char: "姉", hanViet: "TỶ", diff: "Bộ Nữ (女) nằm bên trái và chữ Thị (市) bên phải - nghĩa là Chị gái" }
            ],
            words: [
              { word: "妻", reading: "つま", hanViet: "THÊ", meaning: "Vợ (của mình)", level: "N4", type: "kun" },
              { word: "夫妻", reading: "ふさい", hanViet: "PHU THÊ", meaning: "Hai vợ chồng (lịch sự)", level: "N4", type: "on" },
              { word: "人妻", reading: "ひとづま", hanViet: "NHÂN THÊ", meaning: "Phụ nữ đã có chồng", level: "N4", type: "kun" },
              { word: "愛妻", reading: "あいさい", hanViet: "ÁI THÊ", meaning: "Người vợ yêu quý", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "けっこんきねん日に 妻に はなを プレゼントしました。",
                reading: "けっこんきねんびに つまに はなを プレゼントしました。",
                vi: "Tôi đã tặng hoa cho vợ nhân ngày kỷ niệm kết hôn."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "しゅうまつは 【妻】と かいものに 行きます。",
                target: "妻",
                answer: "つま",
                options: ["つま", "さい", "おっと", "よめ"],
                hint: "Người vợ (THÊ)."
              },
              {
                type: "kanji",
                question: "田中さん 【ふさい】を パーティーに しょうたいしました。",
                target: "ふさい",
                answer: "夫妻",
                options: ["夫妻", "夫要", "天妻", "夫婦"],
                hint: "Vợ chồng ông bà Tanaka (PHU THÊ)."
              }
            ]
          },
          {
            char: "特",
            hanViet: "ĐẶC",
            meaning: "Đặc biệt",
            strokes: 10,
            onyomi: ["トク"],
            kunyomi: [],
            radical: "牛 (Ngưu - Con bò)",
            components: "牜 (Ngưu - Con bò) + 寺 (Tự - Ngôi chùa)",
            mnemonic: "Con bò (牜) được nuôi dưỡng ở ngôi chùa (寺) là vật phẩm ĐẶC BIỆT (特) dùng cho lễ tế thần.",
            lookalikes: [
              { char: "待", hanViet: "ĐÃI", diff: "Bên trái là bộ Sách (彳 - bước đi) thay vì bộ Ngưu (牜) - nghĩa là Chờ đợi" },
              { char: "持", hanViet: "TRÌ", diff: "Bên trái là bộ Thủ (扌 - cái tay) thay vì bộ Ngưu (牜) - nghĩa là Cầm, nắm" }
            ],
            words: [
              { word: "特別", reading: "とくべつ", hanViet: "ĐẶC BIỆT", meaning: "Đặc biệt", level: "N4", type: "on" },
              { word: "特に", reading: "とくに", hanViet: "ĐẶC", meaning: "Đặc biệt là, nhất là", level: "N4", type: "on" },
              { word: "特急", reading: "とっきゅう", hanViet: "ĐẶC CẤP", meaning: "Tàu tốc hành đặc biệt", level: "N4", type: "on" },
              { word: "特色", reading: "とくしょく", hanViet: "ĐẶC SẮC", meaning: "Đặc sắc, nét đặc trưng", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "きょうは 特別な 日ですから、レストランで しょくじします。",
                reading: "きょうは とくべつな ひですから、レストランで しょくじします。",
                vi: "Vì hôm nay là ngày đặc biệt nên chúng tôi dùng bữa tại nhà hàng."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "くだものが すきです。【特に】 りんごが すきです。",
                target: "特に",
                answer: "とくに",
                options: ["とくに", "とくべつに", "じに", "まつに"],
                hint: "Đặc biệt là, nhất là (ĐẶC)."
              },
              {
                type: "kanji",
                question: "【とっきゅう】でんしゃに のって 京都へ 行きます。",
                target: "とっきゅう",
                answer: "特急",
                options: ["特急", "待急", "持急", "時急"],
                hint: "Tàu tốc hành đặc biệt (ĐẶC CẤP)."
              }
            ]
          },
          {
            char: "思",
            hanViet: "TƯ, TỨ",
            meaning: "Suy nghĩ, nhớ mong",
            strokes: 9,
            onyomi: ["シ"],
            kunyomi: ["おも.う"],
            radical: "心 (Tâm - Trái tim)",
            components: "田 (Điền - Ruộng / Cái đầu) + 心 (Tâm - Trái tim)",
            mnemonic: "Khi cả khối óc (田) lẫn con tim (心) cùng hướng về một điều gì đó, nghĩa là đang SUY NGHĨ, NHỚ NHUNG (思).",
            lookalikes: [
              { char: "男", hanViet: "NAM", diff: "Bên dưới là bộ Lực (力) thay vì bộ Tâm (心) - nghĩa là Đàn ông" },
              { char: "息", hanViet: "TỨC", diff: "Bên trên là chữ Tự (自 - cái mũi) thay vì bộ Điền (田) - nghĩa là Hơi thở" }
            ],
            words: [
              { word: "思う", reading: "おもう", hanViet: "TƯ", meaning: "Nghĩ, cho rằng", level: "N4", type: "kun" },
              { word: "思い出す", reading: "おもいだす", hanViet: "TƯ XUẤT", meaning: "Nhớ lại, hồi tưởng", level: "N4", type: "kun" },
              { word: "思い出", reading: "おもいで", hanViet: "TƯ XUẤT", meaning: "Kỷ niệm, ký ức", level: "N4", type: "kun" },
              { word: "不思議", reading: "ふしぎ", hanViet: "BẤT TƯ NGHỊ", meaning: "Kỳ lạ, bí ẩn", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "この しゃしんを 見ると、学生じだいの 思い出を 思い出します。",
                reading: "この しゃしんを みると、がくせいじだいの おもいでを おもいだします。",
                vi: "Hễ nhìn bức ảnh này là tôi lại nhớ về những kỷ niệm thời sinh viên."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "あしたは 雨が ふると 【思います】。",
                target: "思います",
                answer: "おもいます",
                options: ["おもいます", "しいます", "かんがえます", "ねがいます"],
                hint: "Nghĩ rằng (TƯ)."
              },
              {
                type: "kanji",
                question: "ともだちの 名前を 【おもいだせません】。",
                target: "おもいだせません",
                answer: "思い出せません",
                options: ["思い出せません", "男出せません", "息出せません", "心出せません"],
                hint: "Không thể nhớ ra (TƯ XUẤT)."
              }
            ]
          },
          {
            char: "料",
            hanViet: "LIỆU",
            meaning: "Nguyên liệu, tiền phí, nấu nướng",
            strokes: 10,
            onyomi: ["リョウ"],
            kunyomi: [],
            radical: "斗 (Đấu - Cái đấu đong)",
            components: "米 (Mễ - Gạo) + 斗 (Đấu - Cái đấu đong)",
            mnemonic: "Dùng cái đấu (斗) để đong gạo (米) chuẩn bị NGUYÊN LIỆU nấu ăn hoặc tính TIỀN PHÍ (料).",
            lookalikes: [
              { char: "科", hanViet: "KHOA", diff: "Bên trái là bộ Hòa (禾 - cây lúa) thay vì bộ Mễ (米 - gạo) - nghĩa là Khoa học, môn học" },
              { char: "粋", hanViet: "TÚY", diff: "Bên phải là chữ Tốt (卒) thay vì bộ Đấu (斗) - nghĩa là Tinh túy" }
            ],
            words: [
              { word: "料理", reading: "りょうり", hanViet: "LIỆU LÝ", meaning: "Món ăn, việc nấu nướng", level: "N4", type: "on" },
              { word: "無料", reading: "むりょう", hanViet: "VÔ LIỆU", meaning: "Miễn phí", level: "N4", type: "on" },
              { word: "有料", reading: "ゆうりょう", hanViet: "HỮU LIỆU", meaning: "Có tính phí", level: "N4", type: "on" },
              { word: "給料", reading: "きゅうりょう", hanViet: "CẤP LIỆU", meaning: "Tiền lương", level: "N4", type: "on" },
              { word: "材料", reading: "ざいりょう", hanViet: "TÀI LIỆU", meaning: "Nguyên liệu", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "かの女は 日本料理を つくるのが とくいです。",
                reading: "かのじょは にほんりょうりを つくるのが とくいです。",
                vi: "Bạn gái tôi rất giỏi nấu món ăn Nhật."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "この アプリは 【無料】で つかえます。",
                target: "無料",
                answer: "むりょう",
                options: ["むりょう", "ないりょう", "むりょ", "ふりょう"],
                hint: "Miễn phí (VÔ LIỆU)."
              },
              {
                type: "kanji",
                question: "スーパーで カレーの 【ざいりょう】を 買いました。",
                target: "ざいりょう",
                answer: "材料",
                options: ["材料", "材科", "財料", "材米"],
                hint: "Nguyên liệu nấu ăn (TÀI LIỆU)."
              }
            ]
          },
          {
            char: "理",
            hanViet: "LÝ",
            meaning: "Lý do, đạo lý, sửa sang",
            strokes: 11,
            onyomi: ["リ"],
            kunyomi: [],
            radical: "玉 (Ngọc - Đá quý)",
            components: "王 (Ngọc/Vương - Viên ngọc) + 里 (Lý - Làng xóm)",
            mnemonic: "Chế tác viên ngọc thô (王) theo từng đường vân hợp quy luật như chia ruộng đất trong làng (里) là có LÝ LẼ, CHẾ BIẾN (理).",
            lookalikes: [
              { char: "里", hanViet: "LÝ", diff: "Không có bộ Ngọc (王) bên trái - nghĩa là Làng quê, dặm đường" },
              { char: "埋", hanViet: "MAI", diff: "Bên trái là bộ Thổ (土 - đất) thay vì bộ Ngọc (王) - nghĩa là Chôn lấp" }
            ],
            words: [
              { word: "料理", reading: "りょうり", hanViet: "LIỆU LÝ", meaning: "Món ăn, nấu ăn", level: "N4", type: "on" },
              { word: "理由", reading: "りゆう", hanViet: "LÝ DO", meaning: "Lý do", level: "N4", type: "on" },
              { word: "無理", reading: "むり", hanViet: "VÔ LÝ", meaning: "Vô lý, quá sức", level: "N4", type: "on" },
              { word: "地理", reading: "ちり", hanViet: "ĐỊA LÝ", meaning: "Địa lý", level: "N4", type: "on" },
              { word: "修理", reading: "しゅうり", hanViet: "TU LÝ", meaning: "Sửa chữa", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "おくれた 理由を 先生に せつめいしました。",
                reading: "おくれた りゆうを せんせいに せつめいしました。",
                vi: "Tôi đã giải thích lý do đến muộn với thầy giáo."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "しごとを しすぎて 体に 【無理】を しないで ください。",
                target: "無理",
                answer: "むり",
                options: ["むり", "ないり", "むりょう", "ぶり"],
                hint: "Quá sức, vô lý (VÔ LÝ)."
              },
              {
                type: "kanji",
                question: "フランス 【りょうり】を たべに 行きました。",
                target: "りょうり",
                answer: "料理",
                options: ["料理", "科理", "料里", "料埋"],
                hint: "Món ăn (LIỆU LÝ)."
              }
            ]
          },
          {
            char: "有",
            hanViet: "HỮU",
            meaning: "Có, tồn tại, sở hữu",
            strokes: 6,
            onyomi: ["ユウ", "ウ"],
            kunyomi: ["あ.る"],
            radical: "月 (Nguyệt/Nhục - Thịt)",
            components: "𠂇 (Hữu - Tay phải) + 月 (Nhục - Miếng thịt)",
            mnemonic: "Bàn tay (𠂇) cầm chắc miếng thịt (月) tức là đang CÓ, SỞ HỮU (有) tài sản.",
            lookalikes: [
              { char: "右", hanViet: "HỮU", diff: "Bên dưới là bộ Khẩu (口) thay vì chữ Nguyệt (月) - nghĩa là Bên phải" },
              { char: "布", hanViet: "BỐ", diff: "Bên dưới là bộ Cân (巾 - khăn vải) thay vì chữ Nguyệt (月) - nghĩa là Vải vóc" }
            ],
            words: [
              { word: "有名", reading: "ゆうめい", hanViet: "HỮU DANH", meaning: "Nổi tiếng", level: "N5", type: "on" },
              { word: "有料", reading: "ゆうりょう", hanViet: "HỮU LIỆU", meaning: "Có thu phí", level: "N4", type: "on" },
              { word: "有る", reading: "ある", hanViet: "HỮU", meaning: "Có (đồ vật, sự việc)", level: "N4", type: "kun" },
              { word: "有利", reading: "ゆうり", hanViet: "HỮU LỢI", meaning: "Có lợi, thuận lợi", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "あの 有名な レストランで けっこんきねん日を いわいました。",
                reading: "あの ゆうめいな レストランで けっこんきねんびを いわいました。",
                vi: "Chúng tôi đã kỷ niệm ngày cưới tại nhà hàng nổi tiếng kia."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "ここは 【有料】の ちゅうしゃじょうです。",
                target: "有料",
                answer: "ゆうりょう",
                options: ["ゆうりょう", "ありりょう", "うりょう", "むりょう"],
                hint: "Có tính phí (HỮU LIỆU)."
              },
              {
                type: "kanji",
                question: "京都には 【ゆうめい】な おてらが たくさん あります。",
                target: "ゆうめい",
                answer: "有名",
                options: ["有名", "右名", "布名", "友名"],
                hint: "Nổi tiếng (HỮU DANH)."
              }
            ]
          }
        ]
      },
      {
        id: "4-3",
        number: 3,
        titleJp: "ファッション",
        reading: "ファッション",
        titleVi: "Thời trang",
        kanjiList: [
          {
            char: "洋",
            hanViet: "DƯƠNG",
            meaning: "Đại dương, phương Tây",
            strokes: 9,
            onyomi: ["ヨウ"],
            kunyomi: [],
            radical: "氵 (Thủy - Nước)",
            components: "氵 (Thủy - Nước) + 羊 (Dương - Con cừu)",
            mnemonic: "Vượt qua biển nước (氵) mênh mông đến xứ sở nuôi nhiều cừu (羊) chính là phương TÂY, ĐẠI DƯƠNG (洋).",
            lookalikes: [
              { char: "羊", hanViet: "DƯƠNG", diff: "Không có bộ Thủy (氵) bên trái - nghĩa là Con cừu" },
              { char: "詳", hanViet: "TƯỜNG", diff: "Bên trái là bộ Ngôn (言 - lời nói) thay vì bộ Thủy (氵) - nghĩa là Chi tiết, tường tận" }
            ],
            words: [
              { word: "洋服", reading: "ようふく", hanViet: "DƯƠNG PHỤC", meaning: "Quần áo kiểu Tây, âu phục", level: "N4", type: "on" },
              { word: "洋食", reading: "ようしょく", hanViet: "DƯƠNG THỰC", meaning: "Món ăn phương Tây", level: "N4", type: "on" },
              { word: "西洋", reading: "せいよう", hanViet: "TÂY DƯƠNG", meaning: "Phương Tây", level: "N4", type: "on" },
              { word: "太平洋", reading: "たいへいよう", hanViet: "THÁI BÌNH DƯƠNG", meaning: "Thái Bình Dương", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "デパートで デートに 着て 行く 洋服を 買いました。",
                reading: "デパートで デートに きて いく ようふくを かいました。",
                vi: "Tôi đã mua bộ quần áo ở trung tâm thương mại để mặc đi hẹn hò."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "きょうの ランチは 【洋食】に しましょう。",
                target: "洋食",
                answer: "ようしょく",
                options: ["ようしょく", "わしょく", "よしょく", "ひつじしょく"],
                hint: "Đồ ăn phương Tây (DƯƠNG THỰC)."
              },
              {
                type: "kanji",
                question: "クローゼットに 【ようふく】が たくさん あります。",
                target: "ようふく",
                answer: "洋服",
                options: ["洋服", "羊服", "海服", "様服"],
                hint: "Quần áo kiểu Tây (DƯƠNG PHỤC)."
              }
            ]
          },
          {
            char: "服",
            hanViet: "PHỤC",
            meaning: "Quần áo, trang phục, phục tùng",
            strokes: 8,
            onyomi: ["フク"],
            kunyomi: [],
            radical: "月 (Nguyệt/Nhục - Cơ thể)",
            components: "月 (Nhục - Cơ thể) + 卩 (Tiết) + 又 (Hựu - Bàn tay)",
            mnemonic: "Dùng bàn tay (又) khoác tấm vải che chở cho cơ thể (月) chính là mặc QUẦN ÁO, TRANG PHỤC (服).",
            lookalikes: [
              { char: "報", hanViet: "BÁO", diff: "Bên trái là chữ Hạnh (幸) thay vì chữ Nguyệt (月) - nghĩa là Báo cáo, tin tức" },
              { char: "暇", hanViet: "HẠ", diff: "Bên trái là bộ Nhật (日) và thêm các nét bên phải - nghĩa là Rảnh rỗi" }
            ],
            words: [
              { word: "服", reading: "ふく", hanViet: "PHỤC", meaning: "Quần áo", level: "N4", type: "on" },
              { word: "洋服", reading: "ようふく", hanViet: "DƯƠNG PHỤC", meaning: "Quần áo kiểu Tây", level: "N4", type: "on" },
              { word: "着物・和服", reading: "わふく", hanViet: "HÒA PHỤC", meaning: "Trang phục truyền thống Nhật", level: "N4", type: "on" },
              { word: "制服", reading: "せいふく", hanViet: "CHẾ PHỤC", meaning: "Đồng phục", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "日本の 高校生は ほとんど 制服を 着て います。",
                reading: "にほんの こうこうせいは ほとんど せいふくを きて います。",
                vi: "Học sinh cấp ba ở Nhật hầu hết đều mặc đồng phục."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "この 【服】は とても すずしいです。",
                target: "服",
                answer: "ふく",
                options: ["ふく", "ぼく", "きもの", "ころも"],
                hint: "Quần áo (PHỤC)."
              },
              {
                type: "kanji",
                question: "あたらしい 【ようふく】が ほしいです。",
                target: "ようふく",
                answer: "洋服",
                options: ["洋服", "洋報", "洋衣", "羊服"],
                hint: "Âu phục, quần áo (DƯƠNG PHỤC)."
              }
            ]
          },
          {
            char: "衣",
            hanViet: "Y",
            meaning: "Áo, y phục",
            strokes: 6,
            onyomi: ["イ"],
            kunyomi: ["ころも"],
            radical: "衣 (Y - Áo)",
            components: "亠 (Đầu - Cổ áo) + 衣 (Vạt áo và ống tay áo)",
            mnemonic: "Hình ảnh chiếc ÁO (衣) có cổ áo bên trên (亠) và hai vạt áo vắt chéo bên dưới.",
            lookalikes: [
              { char: "表", hanViet: "BIỂU", diff: "Bên trên là 3 nét ngang và 1 nét sổ (主) - nghĩa là Bề mặt, biểu thị" },
              { char: "夜", hanViet: "DẠ", diff: "Bên dưới có bộ Nhân đứng (亻) và bộ Tịch (夕) - nghĩa là Ban đêm" }
            ],
            words: [
              { word: "衣服", reading: "いふく", hanViet: "Y PHỤC", meaning: "Quần áo, trang phục", level: "N4", type: "on" },
              { word: "浴衣", reading: "ゆかた", hanViet: "DỤC Y", meaning: "Áo Yukata (kimono mùa hè)", level: "N4", type: "kun" },
              { word: "衣類", reading: "いるい", hanViet: "Y LOẠI", meaning: "Quần áo các loại", level: "N4", type: "on" },
              { word: "白衣", reading: "はくい", hanViet: "BẠCH Y", meaning: "Áo blouse trắng (bác sĩ)", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "なつ祭りに 浴衣を 着て はなびを 見に 行きました。",
                reading: "なつまつりに ゆかたを きて はなびを みに いきました。",
                vi: "Tôi đã mặc áo Yukata đi xem pháo hoa vào lễ hội mùa hè."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "ホテルの へやに 【浴衣】が あります。",
                target: "浴衣",
                answer: "ゆかた",
                options: ["ゆかた", "よくい", "ゆころも", "わふく"],
                hint: "Áo Yukata mặc sau khi tắm hoặc dịp lễ hội hè (DỤC Y - cách đọc đặc biệt)."
              },
              {
                type: "kanji",
                question: "ふゆの 【いふく】を はこに しまいました。",
                target: "いふく",
                answer: "衣服",
                options: ["衣服", "表服", "夜服", "医服"],
                hint: "Y phục, quần áo (Y PHỤC)."
              }
            ]
          },
          {
            char: "短",
            hanViet: "ĐOẢN",
            meaning: "Ngắn, ngắn ngủi, khuyết điểm",
            strokes: 12,
            onyomi: ["タン"],
            kunyomi: ["みじか.い"],
            radical: "矢 (Thỉ - Mũi tên)",
            components: "矢 (Thỉ - Mũi tên) + 豆 (Đậu - Hạt đậu)",
            mnemonic: "Cây tên (矢) mà chỉ dài bằng hạt đậu (豆) thì thật là NGẮN (短).",
            lookalikes: [
              { char: "知", hanViet: "TRI", diff: "Bên phải là bộ Khẩu (口) thay vì bộ Đậu (豆) - nghĩa là Biết" },
              { char: "頭", hanViet: "ĐẦU", diff: "Bên phải là bộ Hiệt (頁) thay vì bộ Thỉ (矢) bên trái - nghĩa là Cái đầu" }
            ],
            words: [
              { word: "短い", reading: "みじかい", hanViet: "ĐOẢN", meaning: "Ngắn", level: "N5", type: "kun" },
              { word: "短所", reading: "たんしょ", hanViet: "ĐOẢN SỞ", meaning: "Nhược điểm, khuyết điểm", level: "N4", type: "on" },
              { word: "短期", reading: "たんき", hanViet: "ĐOẢN KỲ", meaning: "Ngắn hạn", level: "N4", type: "on" },
              { word: "短大", reading: "たんだい", hanViet: "ĐOẢN ĐẠI", meaning: "Trường cao đẳng (đại học ngắn hạn)", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "なつに なったので、かみを 短く きりました。",
                reading: "なつに なったので、かみを みじかく きりました。",
                vi: "Vì đã sang hè nên tôi cắt tóc ngắn đi."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "この スカートは すこし 【短い】です。",
                target: "短い",
                answer: "みじかい",
                options: ["みじかい", "ながい", "ひくい", "ちいさい"],
                hint: "Ngắn (ĐOẢN)."
              },
              {
                type: "kanji",
                question: "じぶんの 長所と 【たんしょ】を 考えて みて ください。",
                target: "たんしょ",
                answer: "短所",
                options: ["短所", "知所", "豆所", "単所"],
                hint: "Khuyết điểm, điểm yếu (ĐOẢN SỞ)."
              }
            ]
          },
          {
            char: "毛",
            hanViet: "MAO",
            meaning: "Lông, tóc, len",
            strokes: 4,
            onyomi: ["モウ"],
            kunyomi: ["け"],
            radical: "毛 (Mao - Lông)",
            components: "毛 (Hình dáng sợi lông vũ uốn cong)",
            mnemonic: "Hình ảnh một chiếc LÔNG (毛) chim mềm mại uốn cong với các sợi tơ nhỏ.",
            lookalikes: [
              { char: "手", hanViet: "THỦ", diff: "Nét cuối cùng móc thẳng xuống ở giữa thay vì uốn cong sang phải - nghĩa là Bàn tay" },
              { char: "尾", hanViet: "VĨ", diff: "Có thêm bộ Thi (尸) bao bên ngoài - nghĩa là Cái đuôi" }
            ],
            words: [
              { word: "毛", reading: "け", hanViet: "MAO", meaning: "Lông, sợi len", level: "N4", type: "kun" },
              { word: "髪の毛", reading: "かみのけ", hanViet: "PHÁT MAO", meaning: "Tóc, mái tóc", level: "N4", type: "kun" },
              { word: "毛布", reading: "もうふ", hanViet: "MAO BỐ", meaning: "Chăn len, chăn lông", level: "N4", type: "on" },
              { word: "毛糸", reading: "けいと", hanViet: "MAO MỊCH", meaning: "Sợi len", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "さむいので、もう一枚 毛布を 貸して ください。",
                reading: "さむいので、もういちまい もうふを かして ください。",
                vi: "Vì trời lạnh nên làm ơn cho tôi mượn thêm một chiếc chăn nữa."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "あかちゃんの 【髪の毛】は やわらかいです。",
                target: "髪の毛",
                answer: "かみのけ",
                options: ["かみのけ", "かみのも", "あたまのけ", "かみのて"],
                hint: "Mái tóc (PHÁT MAO)."
              },
              {
                type: "kanji",
                question: "ふゆは あたたかい 【もうふ】で ねます。",
                target: "もうふ",
                answer: "毛布",
                options: ["毛布", "手布", "毛市", "尾布"],
                hint: "Chăn lông, chăn len (MAO BỐ)."
              }
            ]
          },
          {
            char: "糸",
            hanViet: "MỊCH, TƠ",
            meaning: "Sợi chỉ, sợi tơ",
            strokes: 6,
            onyomi: ["シ"],
            kunyomi: ["いと"],
            radical: "糸 (Mịch - Sợi tơ)",
            components: "幺 (Yêu - Sợi tơ xoắn) + 小 (Tiểu - Nhỏ)",
            mnemonic: "Những sợi tơ nhỏ (小) được xe xoắn lại với nhau (幺) tạo thành cuộn CHỈ, SỢI TƠ (糸).",
            lookalikes: [
              { char: "系", hanViet: "HỆ", diff: "Có thêm một nét phẩy (ノ) nằm ngang trên đỉnh - nghĩa là Hệ thống" },
              { char: "細", hanViet: "TẾ", diff: "Có thêm bộ Điền (田) bên phải - nghĩa là Thon nhỏ, chi tiết" }
            ],
            words: [
              { word: "糸", reading: "いと", hanViet: "MỊCH", meaning: "Sợi chỉ, sợi tơ", level: "N4", type: "kun" },
              { word: "毛糸", reading: "けいと", hanViet: "MAO MỊCH", meaning: "Sợi len", level: "N4", type: "kun" },
              { word: "針と糸", reading: "はりといと", hanViet: "CHÂM MỊCH", meaning: "Kim và chỉ", level: "N4", type: "kun" },
              { word: "綿糸", reading: "めんし", hanViet: "MIÊN MỊCH", meaning: "Sợi bông, chỉ cotton", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "あかい 毛糸で セーターを あみました。",
                reading: "あかい けいとで セーターを あみました。",
                vi: "Tôi đã đan chiếc áo len bằng sợi len màu đỏ."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "祖母は 【毛糸】で マフラーを つくって くれました。",
                target: "毛糸",
                answer: "けいと",
                options: ["けいと", "もうし", "けし", "ていと"],
                hint: "Sợi len (MAO MỊCH)."
              },
              {
                type: "kanji",
                question: "ボタンが とれたので、【いと】で つけました。",
                target: "いと",
                answer: "糸",
                options: ["糸", "系", "毛", "氷"],
                hint: "Sợi chỉ (MỊCH)."
              }
            ]
          },
          {
            char: "玉",
            hanViet: "NGỌC",
            meaning: "Hòn ngọc, quả cầu, vật hình tròn",
            strokes: 5,
            onyomi: ["ギョク"],
            kunyomi: ["たま"],
            radical: "玉 (Ngọc - Đá quý)",
            components: "王 (Vương - Nhà vua) + 丶 (Chấm - Viên ngọc)",
            mnemonic: "Bên hông của nhà vua (王) luôn đeo một viên đá quý lấp lánh (丶) gọi là NGỌC (玉).",
            lookalikes: [
              { char: "王", hanViet: "VƯƠNG", diff: "Không có dấu chấm (丶) ở góc dưới bên phải - nghĩa là Vua" },
              { char: "宝", hanViet: "BẢO", diff: "Có thêm bộ Miên (宀 - mái nhà) ở trên - nghĩa là Bảo bối, châu báu" }
            ],
            words: [
              { word: "玉", reading: "たま", hanViet: "NGỌC", meaning: "Quả cầu, hòn bi, ngọc", level: "N4", type: "kun" },
              { word: "玉ねぎ", reading: "たまねぎ", hanViet: "NGỌC", meaning: "Hành tây", level: "N4", type: "kun" },
              { word: "お年玉", reading: "おとしだま", hanViet: "NIÊN NGỌC", meaning: "Tiền mừng tuổi (lì xì)", level: "N4", type: "kun" },
              { word: "目玉焼き", reading: "めだまやき", hanViet: "MỤC NGỌC THIÊU", meaning: "Trứng ốp la", level: "N4", type: "kun" },
              { word: "十円玉", reading: "じゅうえんだま", hanViet: "THẬP VIÊN NGỌC", meaning: "Đồng xu 10 yên", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "お正月に おじいさんから お年玉を もらいました。",
                reading: "おしょうがつに おじいさんから おとしだまを もらいました。",
                vi: "Vào dịp Tết, tôi đã nhận được tiền lì xì từ ông."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "カレーに 【玉ねぎ】と にんじんを 入れます。",
                target: "玉ねぎ",
                answer: "たまねぎ",
                options: ["たまねぎ", "ぎょくねぎ", "おうねぎ", "まるねぎ"],
                hint: "Củ hành tây (NGỌC)."
              },
              {
                type: "kanji",
                question: "ポケットに 百円【だま】が 三つ あります。",
                target: "だま",
                answer: "玉",
                options: ["玉", "王", "宝", "丸"],
                hint: "Đồng xu tròn (NGỌC)."
              }
            ]
          },
          {
            char: "光",
            hanViet: "QUANG",
            meaning: "Ánh sáng, tỏa sáng, lấp lánh",
            strokes: 6,
            onyomi: ["コウ"],
            kunyomi: ["ひか.る", "ひかり"],
            radical: "儿 (Nhân đi - Đôi chân)",
            components: "⺌ (Tiểu/Hỏa - Ngọn lửa) + 一 (Nhất) + 儿 (Nhân đi)",
            mnemonic: "Người (儿) cầm ngọn đuốc rực lửa (⺌) trên đầu tỏa ra ÁNH SÁNG (光) rực rỡ khắp nơi.",
            lookalikes: [
              { char: "先", hanViet: "TIÊN", diff: "Bên trên là nét phẩy và chữ Thổ thay vì 3 nét chấm của ngọn lửa - nghĩa là Trước" },
              { char: "兄", hanViet: "HUYNH", diff: "Bên trên là bộ Khẩu (口) thay vì các tia sáng - nghĩa là Anh trai" }
            ],
            words: [
              { word: "光", reading: "ひかり", hanViet: "QUANG", meaning: "Ánh sáng, tia sáng", level: "N4", type: "kun" },
              { word: "光る", reading: "ひかる", hanViet: "QUANG", meaning: "Chiếu sáng, lấp lánh", level: "N4", type: "kun" },
              { word: "観光", reading: "かんこう", hanViet: "QUAN QUANG", meaning: "Tham quan, du lịch", level: "N4", type: "on" },
              { word: "日光", reading: "にっこう", hanViet: "NHẬT QUANG", meaning: "Ánh nắng mặt trời", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "きれいな ゆびわが キラキラと 光って います。",
                reading: "きれいな ゆびわが キラキラと ひかって います。",
                vi: "Chiếc nhẫn tuyệt đẹp đang lấp lánh tỏa sáng."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "京都には 【観光】客が たくさん 来ます。",
                target: "観光",
                answer: "かんこう",
                options: ["かんこう", "かんひかり", "みこう", "かんこ"],
                hint: "Tham quan du lịch (QUAN QUANG)."
              },
              {
                type: "kanji",
                question: "夜空に 星が 【ひかって】 います。",
                target: "ひかって",
                answer: "光って",
                options: ["光って", "先って", "火って", "明って"],
                hint: "Tỏa sáng, lấp lánh (QUANG)."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    titleJp: "5章 町",
    titleVi: "Chương 5: Phố phường",
    icon: "🚆",
    lessons: [
      {
        id: "5-1",
        number: 1,
        titleJp: "駅",
        reading: "えき",
        titleVi: "Nhà ga",
        kanjiList: [
          {
            char: "駅",
            hanViet: "DỊCH",
            meaning: "Nhà ga, trạm dừng",
            strokes: 14,
            onyomi: ["エキ"],
            kunyomi: [],
            radical: "馬 (Mã - Con ngựa)",
            components: "馬 (Mã - Con ngựa) + 尺 (Xích - Thước đo khoảng cách)",
            mnemonic: "Thời xưa cứ đi một quãng đường nhất định (尺) lại có trạm nghỉ cho ngựa (馬), ngày nay gọi là NHÀ GA (駅).",
            lookalikes: [
              { char: "訳", hanViet: "DỊCH", diff: "Bên trái là bộ Ngôn (言 - lời nói) thay vì bộ Mã (馬) - nghĩa là Phiên dịch, lý do" },
              { char: "験", hanViet: "NGHIỆM", diff: "Bên phải là chữ Thiêm (僉) thay vì bộ Xích (尺) - nghĩa là Thử nghiệm, kỳ thi" }
            ],
            words: [
              { word: "駅", reading: "えき", hanViet: "DỊCH", meaning: "Nhà ga", level: "N5", type: "on" },
              { word: "駅前", reading: "えきまえ", hanViet: "DỊCH TIỀN", meaning: "Trước nhà ga", level: "N5", type: "on" },
              { word: "駅員", reading: "えきいん", hanViet: "DỊCH VIÊN", meaning: "Nhân viên nhà ga", level: "N4", type: "on" },
              { word: "駅弁", reading: "えきべん", hanViet: "DỊCH BIỆN", meaning: "Cơm hộp bán ở nhà ga", level: "N4", type: "on" },
              { word: "東京駅", reading: "とうきょうえき", hanViet: "ĐÔNG KINH DỊCH", meaning: "Ga Tokyo", level: "N5", type: "on" }
            ],
            examples: [
              {
                jp: "分からない ときは 駅員さんに きいて ください。",
                reading: "わからない ときは えきいんさんに きいて ください。",
                vi: "Khi không rõ, bạn hãy hỏi nhân viên nhà ga nhé."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "【駅前】の スーパーで 買い物を しました。",
                target: "駅前",
                answer: "えきまえ",
                options: ["えきまえ", "えきぜん", "うままえ", "やくまえ"],
                hint: "Khu vực phía trước nhà ga (DỊCH TIỀN)."
              },
              {
                type: "kanji",
                question: "次の 【えき】で でんしゃを おります。",
                target: "えき",
                answer: "駅",
                options: ["駅", "訳", "験", "馬"],
                hint: "Nhà ga (DỊCH)."
              }
            ]
          },
          {
            char: "鉄",
            hanViet: "THIẾT",
            meaning: "Sắt, đường sắt",
            strokes: 13,
            onyomi: ["テツ"],
            kunyomi: ["くろがね"],
            radical: "金 (Kim - Kim loại)",
            components: "釒 (Kim - Kim loại) + 失 (Thất - Mất)",
            mnemonic: "Loại kim loại (釒) nếu không bảo quản kỹ sẽ bị gỉ sét và mất đi (失) độ bóng chính là SẮT (鉄).",
            lookalikes: [
              { char: "銀", hanViet: "NGÂN", diff: "Bên phải là bộ Cấn (艮) thay vì chữ Thất (失) - nghĩa là Bạc, ngân hàng" },
              { char: "鏡", hanViet: "KÍNH", diff: "Bên phải là chữ Cánh (竟) - nghĩa là Cái gương" }
            ],
            words: [
              { word: "地下鉄", reading: "ちかてつ", hanViet: "ĐỊA HẠ THIẾT", meaning: "Tàu điện ngầm", level: "N5", type: "on" },
              { word: "鉄道", reading: "てつどう", hanViet: "THIẾT ĐẠO", meaning: "Đường sắt", level: "N4", type: "on" },
              { word: "私鉄", reading: "してつ", hanViet: "TƯ THIẾT", meaning: "Đường sắt tư nhân", level: "N4", type: "on" },
              { word: "鉄橋", reading: "てっきょう", hanViet: "THIẾT KIỀU", meaning: "Cầu sắt", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "毎朝 地下鉄に 乗って 会社へ かよいます。",
                reading: "まいあさ ちかてつに のって かいしゃへ かよいます。",
                vi: "Mỗi sáng tôi đều đi tàu điện ngầm đến công ty."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "日本の 【鉄道】は とても べんりです。",
                target: "鉄道",
                answer: "てつどう",
                options: ["てつどう", "てつみち", "しつどう", "かねどう"],
                hint: "Đường sắt (THIẾT ĐẠO)."
              },
              {
                type: "kanji",
                question: "バスより 【ちかてつ】の ほうが はやいです。",
                target: "ちかてつ",
                answer: "地下鉄",
                options: ["地下鉄", "地下銀", "地下失", "地鉄"],
                hint: "Tàu điện ngầm (ĐỊA HẠ THIẾT)."
              }
            ]
          },
          {
            char: "乗",
            hanViet: "THỪA",
            meaning: "Lên xe, cưỡi, đi (tàu, xe)",
            strokes: 9,
            onyomi: ["ジョウ"],
            kunyomi: ["の.る", "の.せる"],
            radical: "丿 (Phiệt - Nét phẩy)",
            components: "禾 (Hòa - Cây lúa) + 北 (Bắc - Hai người quay lưng)",
            mnemonic: "Hai người (北) trèo LÊN (乗) ngọn cây (木/禾) để quan sát đường đi.",
            lookalikes: [
              { char: "重", hanViet: "TRỌNG", diff: "Ở giữa là bộ Điền (田) và đáy là chữ Nhất (一) không xoè hai chân - nghĩa là Nặng" },
              { char: "東", hanViet: "ĐÔNG", diff: "Ở giữa là bộ Nhật (日) và không có hai nét bên ngoài - nghĩa là Phía đông" }
            ],
            words: [
              { word: "乗る", reading: "のる", hanViet: "THỪA", meaning: "Lên (tàu, xe), đi xe", level: "N5", type: "kun" },
              { word: "乗り物", reading: "のりもの", hanViet: "THỪA VẬT", meaning: "Phương tiện giao thông", level: "N4", type: "kun" },
              { word: "乗り換える", reading: "のりかえる", hanViet: "THỪA HOÁN", meaning: "Chuyển tàu, đổi chuyến xe", level: "N4", type: "kun" },
              { word: "乗り場", reading: "のりば", hanViet: "THỪA TRƯỜNG", meaning: "Bến xe, điểm đón xe", level: "N4", type: "kun" },
              { word: "乗客", reading: "じょうきゃく", hanViet: "THỪA KHÁCH", meaning: "Hành khách", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "東京駅で 新幹線に 乗り換えて ください。",
                reading: "とうきょうえきで しんかんせんに のりかえて ください。",
                vi: "Hãy chuyển sang tàu Shinkansen ở ga Tokyo."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "タクシーの 【乗り場】は あちらです。",
                target: "乗り場",
                answer: "のりば",
                options: ["のりば", "じょうば", "のりじょう", "のるば"],
                hint: "Điểm đón xe / bến xe (THỪA TRƯỜNG)."
              },
              {
                type: "kanji",
                question: "毎朝 ７時の バスに 【のります】。",
                target: "のります",
                answer: "乗ります",
                options: ["乗ります", "重ります", "東ります", "来ります"],
                hint: "Lên xe (THỪA)."
              }
            ]
          },
          {
            char: "降",
            hanViet: "GIÁNG, HÀNG",
            meaning: "Xuống xe, rơi xuống (mưa, tuyết)",
            strokes: 10,
            onyomi: ["コウ"],
            kunyomi: ["お.りる", "お.ろす", "ふ.る"],
            radical: "阝 (Phụ - Gò đất)",
            components: "阝 (Phụ - Bậc thềm, sườn đồi) + 夂 (Trĩ - Bước chân) + 㐄 (Bước xuống)",
            mnemonic: "Đôi bàn chân (夂 + 㐄) bước từng bước từ trên bậc thềm cao (阝) đi XUỐNG (降).",
            lookalikes: [
              { char: "隆", hanViet: "LONG", diff: "Có thêm nét ngang và bộ Sinh (生) ở dưới cùng bên phải - nghĩa là Hưng thịnh" },
              { char: "隣", hanViet: "LÂN", diff: "Bên phải có thêm bộ Mễ (米) ở trên - nghĩa là Bên cạnh, hàng xóm" }
            ],
            words: [
              { word: "降りる", reading: "おりる", hanViet: "GIÁNG", meaning: "Xuống (xe, tàu)", level: "N5", type: "kun" },
              { word: "降る", reading: "ふる", hanViet: "GIÁNG", meaning: "Rơi (mưa, tuyết)", level: "N5", type: "kun" },
              { word: "降ろす", reading: "おろす", hanViet: "GIÁNG", meaning: "Dỡ xuống, cho xuống xe, rút tiền", level: "N4", type: "kun" },
              { word: "以降", reading: "いこう", hanViet: "DĨ GIÁNG", meaning: "Trở đi, về sau", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "雨が 降って きたので、つぎの バス停で 降りました。",
                reading: "あめが ふって きたので、つぎの バスていで おりました。",
                vi: "Vì trời bắt đầu mưa nên tôi đã xuống ở trạm xe buýt tiếp theo."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "冬は ここに 雪が たくさん 【降ります】。",
                target: "降ります",
                answer: "ふります",
                options: ["ふります", "おります", "くだります", "おろします"],
                hint: "Tuyết rơi / mưa rơi (GIÁNG - đọc là ふる)."
              },
              {
                type: "kanji",
                question: "つぎの 駅で でんしゃを 【おります】。",
                target: "おります",
                answer: "降ります",
                options: ["降ります", "落ちます", "下ります", "乗ります"],
                hint: "Xuống tàu, xuống xe (GIÁNG)."
              }
            ]
          },
          {
            char: "開",
            hanViet: "KHAI",
            meaning: "Mở, khai mạc, bắt đầu",
            strokes: 12,
            onyomi: ["カイ"],
            kunyomi: ["あ.く", "あ.ける", "ひら.く"],
            radical: "門 (Môn - Cánh cổng)",
            components: "門 (Môn - Cổng) + 开 (Khai - Hai tay kéo chốt cửa)",
            mnemonic: "Đưa hai tay kéo thanh chốt (开) ở giữa cánh cổng (門) để MỞ CỬA (開).",
            lookalikes: [
              { char: "閉", hanViet: "BẾ", diff: "Bên trong cổng là chữ Tài (才) thay vì chữ Khai (开) - nghĩa là Đóng cửa" },
              { char: "関", hanViet: "QUAN", diff: "Bên trong cổng là chữ Quan (𦰩) - nghĩa là Liên quan, cửa ải" },
              { char: "問", hanViet: "VẤN", diff: "Bên trong cổng là bộ Khẩu (口) - nghĩa là Hỏi, vấn đề" }
            ],
            words: [
              { word: "開く", reading: "あく", hanViet: "KHAI", meaning: "Mở ra (tự động)", level: "N5", type: "kun" },
              { word: "開ける", reading: "あける", hanViet: "KHAI", meaning: "Mở (cửa, hộp...)", level: "N5", type: "kun" },
              { word: "開く", reading: "ひらく", hanViet: "KHAI", meaning: "Mở (trang sách, tài khoản, tiệc)", level: "N4", type: "kun" },
              { word: "開始", reading: "かいし", hanViet: "KHAI THỦY", meaning: "Bắt đầu, khai cuộc", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "でんしゃの ドアが 開きますから、ごちゅうい ください。",
                reading: "でんしゃの ドアが あきますから、ごちゅうい ください。",
                vi: "Cửa tàu điện sắp mở, xin quý khách lưu ý."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "テキストの １０ページを 【開いて】 ください。",
                target: "開いて",
                answer: "ひらいて",
                options: ["ひらいて", "あいて", "かいて", "とじて"],
                hint: "Mở sách vở, tài liệu (KHAI - đọc là ひらく)."
              },
              {
                type: "kanji",
                question: "あついので、まどを 【あけて】も いいですか。",
                target: "あけて",
                answer: "開けて",
                options: ["開けて", "閉めて", "聞けて", "問けて"],
                hint: "Mở cửa sổ (KHAI)."
              }
            ]
          },
          {
            char: "閉",
            hanViet: "BẾ",
            meaning: "Đóng, khép, bế mạc",
            strokes: 11,
            onyomi: ["ヘイ"],
            kunyomi: ["し.まる", "し.める", "と.じる"],
            radical: "門 (Môn - Cánh cổng)",
            components: "門 (Môn - Cổng) + 才 (Tài - Thanh gỗ cài chốt)",
            mnemonic: "Dùng thanh gỗ (才) cài chặt hai cánh cổng (門) lại nghĩa là ĐÓNG CỬA (閉).",
            lookalikes: [
              { char: "開", hanViet: "KHAI", diff: "Bên trong cổng là chữ Khai (开) thay vì chữ Tài (才) - nghĩa là Mở cửa" },
              { char: "間", hanViet: "GIAN", diff: "Bên trong cổng là bộ Nhật (日) - nghĩa là Khoảng giữa, thời gian" }
            ],
            words: [
              { word: "閉まる", reading: "しまる", hanViet: "BẾ", meaning: "Đóng lại (tự động)", level: "N5", type: "kun" },
              { word: "閉める", reading: "しめる", hanViet: "BẾ", meaning: "Đóng (cửa)", level: "N5", type: "kun" },
              { word: "閉じる", reading: "とじる", hanViet: "BẾ", meaning: "Gập lại (sách), nhắm (mắt)", level: "N4", type: "kun" },
              { word: "閉店", reading: "へいてん", hanViet: "BẾ ĐIẾM", meaning: "Đóng cửa hàng", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "もうすぐ ドアが 閉まります。",
                reading: "もうすぐ ドアが しまります。",
                vi: "Cửa sắp đóng lại ngay bây giờ."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "目を 【閉じて】 おんがくを 聞きます。",
                target: "閉じて",
                answer: "とじて",
                options: ["とじて", "しめて", "しまって", "ひらいて"],
                hint: "Nhắm mắt lại (BẾ - đọc là とじる)."
              },
              {
                type: "kanji",
                question: "この デパートは 夜 ９時に 【しまります】。",
                target: "しまります",
                answer: "閉まります",
                options: ["閉まります", "開まります", "間まります", "止まります"],
                hint: "Đóng cửa (BẾ)."
              }
            ]
          },
          {
            char: "発",
            hanViet: "PHÁT",
            meaning: "Xuất phát, phát ra, công bố",
            strokes: 9,
            onyomi: ["ハツ", "ホツ"],
            kunyomi: [],
            radical: "癶 (Bát - Đôi chân đạp)",
            components: "癶 (Bát - Hai bàn chân bước) + 开 (Hai tay giương cung)",
            mnemonic: "Hai chân đạp vững trên đất (癶), hai tay giương cung bắn tên (开) lao vút đi là XUẤT PHÁT, PHÁT RA (発).",
            lookalikes: [
              { char: "登", hanViet: "ĐĂNG", diff: "Bên dưới là bộ Đậu (豆) thay vì chữ Khai (开) - nghĩa là Leo lên" },
              { char: "廃", hanViet: "PHẾ", diff: "Có thêm bộ Nghiễm (广 - mái nhà) bao bên ngoài - nghĩa là Phế bỏ" }
            ],
            words: [
              { word: "出発", reading: "しゅっぱつ", hanViet: "XUẤT PHÁT", meaning: "Xuất phát, khởi hành", level: "N4", type: "on" },
              { word: "発表", reading: "はっぴょう", hanViet: "PHÁT BIỂU", meaning: "Phát biểu, thuyết trình, công bố", level: "N4", type: "on" },
              { word: "発明", reading: "はつめい", hanViet: "PHÁT MINH", meaning: "Phát minh", level: "N4", type: "on" },
              { word: "発音", reading: "はつおん", hanViet: "PHÁT ÂM", meaning: "Phát âm", level: "N4", type: "on" },
              { word: "始発", reading: "しはつ", hanViet: "THỦY PHÁT", meaning: "Chuyến tàu/xe đầu tiên trong ngày", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "９時発の ひこうきで ホーチミンへ 出発します。",
                reading: "くじはつの ひこうきで ホーチミンへ しゅっぱつします。",
                vi: "Tôi sẽ khởi hành đi TP. Hồ Chí Minh trên chuyến bay xuất phát lúc 9 giờ."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "会議で あたらしい けいかくを 【発表】しました。",
                target: "発表",
                answer: "はっぴょう",
                options: ["はっぴょう", "はつひょう", "はっびょう", "はつおもて"],
                hint: "Phát biểu, công bố (PHÁT BIỂU)."
              },
              {
                type: "kanji",
                question: "明日の 朝 はやく 【しゅっぱつ】します。",
                target: "しゅっぱつ",
                answer: "出発",
                options: ["出発", "出登", "出開", "始発"],
                hint: "Xuất phát, khởi hành (XUẤT PHÁT)."
              }
            ]
          },
          {
            char: "着",
            hanViet: "TRƯỚC",
            meaning: "Đến nơi, mặc (quần áo)",
            strokes: 12,
            onyomi: ["チャク", "ジャク"],
            kunyomi: ["き.る", "き.せる", "つ.く", "つ.ける"],
            radical: "目 (Mục - Con mắt)",
            components: "羊 (Dương - Con cừu) + 目 (Mục - Con mắt)",
            mnemonic: "Nhìn bằng mắt (目) thấy người khoác chiếc áo lông cừu (羊) vừa ĐẾN NƠI (着).",
            lookalikes: [
              { char: "差", hanViet: "SAI", diff: "Bên dưới là bộ Công (工) thay vì bộ Mục (目) - nghĩa là Chênh lệch, khác biệt" },
              { char: "看", hanViet: "KHÁN", diff: "Bên trên là bộ Thủ (手 - bàn tay) thay vì chữ Dương (羊) - nghĩa là Trông nom, y tá" }
            ],
            words: [
              { word: "着く", reading: "つく", hanViet: "TRƯỚC", meaning: "Đến nơi", level: "N5", type: "kun" },
              { word: "着る", reading: "きる", hanViet: "TRƯỚC", meaning: "Mặc (áo từ vai trở xuống)", level: "N5", type: "kun" },
              { word: "着物", reading: "きもの", hanViet: "TRƯỚC VẬT", meaning: "Kimono, quần áo", level: "N4", type: "kun" },
              { word: "到着", reading: "とうちゃく", hanViet: "ĐÁO TRƯỚC", meaning: "Đến nơi, hạ cánh", level: "N4", type: "on" },
              { word: "下着", reading: "したぎ", hanViet: "HẠ TRƯỚC", meaning: "Đồ lót", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "えきに 着いたら、すぐ でんわを して ください。",
                reading: "えきに ついたら、すぐ でんわを して ください。",
                vi: "Khi nào đến ga, hãy gọi điện cho tôi ngay nhé."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "ひこうきは １０時に 空港に 【到着】します。",
                target: "到着",
                answer: "とうちゃく",
                options: ["とうちゃく", "とうつく", "とちゃく", "とうき"],
                hint: "Đến nơi (ĐÁO TRƯỚC)."
              },
              {
                type: "kanji",
                question: "さむいですから、コートを 【きて】 ください。",
                target: "きて",
                answer: "着て",
                options: ["着て", "来て", "差て", "見て"],
                hint: "Mặc áo khoác (TRƯỚC)."
              }
            ]
          }
        ]
      },
      {
        id: "5-2",
        number: 2,
        titleJp: "交さてん",
        reading: "こうさてん",
        titleVi: "Ngã tư",
        kanjiList: [
          {
            char: "交",
            hanViet: "GIAO",
            meaning: "Giao nhau, trao đổi, giao thông",
            strokes: 6,
            onyomi: ["コウ"],
            kunyomi: ["まじ.わる", "ま.ぜる", "か.わす"],
            radical: "亠 (Đầu - Phần trên)",
            components: "亠 (Đầu) + 父 (Phụ - Hai nét vắt chéo)",
            mnemonic: "Hình ảnh người đội mũ (亠) đang bắt chéo hai chân (父) tạo thành điểm GIAO NHAU, GIAO THÔNG (交).",
            lookalikes: [
              { char: "父", hanViet: "PHỤ", diff: "Không có bộ Đầu (亠) ở trên cùng - nghĩa là Cha, bố" },
              { char: "文", hanViet: "VĂN", diff: "Chỉ có 4 nét, không có hai nét chấm hai bên dưới nét ngang - nghĩa là Văn chương" },
              { char: "校", hanViet: "HIỆU", diff: "Có thêm bộ Mộc (木) bên trái - nghĩa là Trường học" }
            ],
            words: [
              { word: "交通", reading: "こうつう", hanViet: "GIAO THÔNG", meaning: "Giao thông, đi lại", level: "N4", type: "on" },
              { word: "交差点", reading: "こうさてん", hanViet: "GIAO THOA ĐIỂM", meaning: "Ngã tư, giao lộ", level: "N4", type: "on" },
              { word: "交番", reading: "こうばん", hanViet: "GIAO PHIÊN", meaning: "Đồn cảnh sát, bốt cảnh sát", level: "N5", type: "on" },
              { word: "交換", reading: "こうかん", hanViet: "GIAO HOÁN", meaning: "Trao đổi, đổi chác", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "あの 交差点を 右に まがると、交番が あります。",
                reading: "あの こうさてんを みぎに まがると、こうばんが あります。",
                vi: "Rẽ phải ở ngã tư kia sẽ có một đồn cảnh sát."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "みちに まよったので、【交番】で 聞きました。",
                target: "交番",
                answer: "こうばん",
                options: ["こうばん", "こうはん", "まじばん", "きょうばん"],
                hint: "Đồn cảnh sát khu vực (GIAO PHIÊN)."
              },
              {
                type: "kanji",
                question: "この 町は 【こうつう】が とても べんりです。",
                target: "こうつう",
                answer: "交通",
                options: ["交通", "校通", "父通", "文通"],
                hint: "Giao thông đi lại (GIAO THÔNG)."
              }
            ]
          },
          {
            char: "通",
            hanViet: "THÔNG",
            meaning: "Đi qua, đi làm/đi học, thông suốt",
            strokes: 10,
            onyomi: ["ツウ", "ツ"],
            kunyomi: ["とお.る", "とお.す", "かよ.う"],
            radical: "辶 (Sước - Bước đi)",
            components: "辶 (Sước - Con đường) + 甬 (Dũng - Ống thông suốt)",
            mnemonic: "Bước đi (辶) trên con đường thông suốt như lòng ống (甬) để ĐI QUA, ĐI HỌC HÀNG NGÀY (通).",
            lookalikes: [
              { char: "週", hanViet: "CHU", diff: "Bên trong là chữ Chu (周) thay vì chữ Dũng (甬) - nghĩa là Tuần lễ" },
              { char: "道", hanViet: "ĐẠO", diff: "Bên trong là chữ Thủ (首) thay vì chữ Dũng (甬) - nghĩa là Con đường" }
            ],
            words: [
              { word: "通る", reading: "とおる", hanViet: "THÔNG", meaning: "Đi qua, băng qua", level: "N4", type: "kun" },
              { word: "通う", reading: "かよう", hanViet: "THÔNG", meaning: "Đi đi về về (đi học, đi làm)", level: "N4", type: "kun" },
              { word: "交通", reading: "こうつう", hanViet: "GIAO THÔNG", meaning: "Giao thông", level: "N4", type: "on" },
              { word: "普通", reading: "ふつう", hanViet: "PHỔ THÔNG", meaning: "Bình thường, tàu thường", level: "N4", type: "on" },
              { word: "通り", reading: "とおり", hanViet: "THÔNG", meaning: "Con phố, đại lộ", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "わたしは まいにち じてんしゃで 大学に 通って います。",
                reading: "わたしは まいにち じてんしゃで だいがくに かよって います。",
                vi: "Hàng ngày tôi đi học đại học bằng xe đạp."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "この バスは 駅の まえを 【通ります】か。",
                target: "通ります",
                answer: "とおります",
                options: ["とおります", "かよいます", "つうります", "いきます"],
                hint: "Đi ngang qua (THÔNG - đọc là とおる)."
              },
              {
                type: "kanji",
                question: "急行ではなく、【ふつう】でんしゃに 乗りました。",
                target: "ふつう",
                answer: "普通",
                options: ["普通", "普週", "普道", "部通"],
                hint: "Tàu thường / bình thường (PHỔ THÔNG)."
              }
            ]
          },
          {
            char: "台",
            hanViet: "ĐÀI, THAI",
            meaning: "Cái bệ, mặt bàn, chiếc (đếm máy móc/xe cộ), bão",
            strokes: 5,
            onyomi: ["ダイ", "タイ"],
            kunyomi: [],
            radical: "口 (Khẩu - Cái miệng)",
            components: "厶 (Khư - Riêng tư) + 口 (Khẩu - Cái bệ vuông)",
            mnemonic: "Đứng trên chiếc bệ cao vuông vức (口) cầm micro (厶) phát biểu trên KHÁN ĐÀI (台).",
            lookalikes: [
              { char: "合", hanViet: "HỢP", diff: "Bên trên là bộ Nhân (人) và nét Nhất (一) thay vì bộ Khư (厶) - nghĩa là Gặp gỡ, phù hợp" },
              { char: "治", hanViet: "TRỊ", diff: "Có thêm bộ Thủy (氵) bên trái - nghĩa là Chữa trị, cai trị" },
              { char: "始", hanViet: "THỦY", diff: "Có thêm bộ Nữ (女) bên trái - nghĩa là Bắt đầu" }
            ],
            words: [
              { word: "台風", reading: "たいふう", hanViet: "ĐÀI PHONG", meaning: "Cơn bão", level: "N4", type: "on" },
              { word: "台所", reading: "だいどころ", hanViet: "ĐÀI SỞ", meaning: "Nhà bếp", level: "N5", type: "on" },
              { word: "二台", reading: "にだい", hanViet: "NHỊ ĐÀI", meaning: "Hai chiếc (xe, máy tính...)", level: "N5", type: "on" },
              { word: "舞台", reading: "ぶたい", hanViet: "VŨ ĐÀI", meaning: "Sân khấu", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "大きな 台風が 来て いるので、でんしゃが 止まりました。",
                reading: "おおきな たいふうが きて いるので、でんしゃが とまりました。",
                vi: "Vì có cơn bão lớn đang tới nên tàu điện đã ngừng chạy."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "9月は 日本に 【台風】が よく 来ます。",
                target: "台風",
                answer: "たいふう",
                options: ["たいふう", "だいふう", "たいかぜ", "だいかぜ"],
                hint: "Cơn bão (ĐÀI PHONG - chú ý đọc là タイ)."
              },
              {
                type: "kanji",
                question: "母は 【だいどころ】で りょうりを つくって います。",
                target: "だいどころ",
                answer: "台所",
                options: ["台所", "合所", "名所", "始所"],
                hint: "Nhà bếp (ĐÀI SỞ)."
              }
            ]
          },
          {
            char: "止",
            hanViet: "CHỈ",
            meaning: "Dừng lại, đình chỉ, ngăn cấm",
            strokes: 4,
            onyomi: ["シ"],
            kunyomi: ["と.まる", "と.める", "や.める", "や.む"],
            radical: "止 (Chỉ - Bàn chân dừng lại)",
            components: "止 (Hình ảnh bàn chân dừng bước tại vạch kẻ)",
            mnemonic: "Hình ảnh dấu bàn chân đứng yên ngay trước vạch kẻ đường báo hiệu phải DỪNG LẠI (止).",
            lookalikes: [
              { char: "正", hanViet: "CHÍNH", diff: "Có thêm một nét ngang (一) ở trên đỉnh - nghĩa là Đúng đắn, chính xác" },
              { char: "上", hanViet: "THƯỢNG", diff: "Không có nét sổ ngắn bên trái - nghĩa là Ở trên" },
              { char: "歩", hanViet: "BỘ", diff: "Có thêm chữ Thiểu (少) ở bên dưới - nghĩa là Đi bộ" }
            ],
            words: [
              { word: "止まる", reading: "とまる", hanViet: "CHỈ", meaning: "Dừng lại (tự động)", level: "N5", type: "kun" },
              { word: "止める", reading: "とめる", hanViet: "CHỈ", meaning: "Cho dừng lại, đỗ (xe)", level: "N4", type: "kun" },
              { word: "中止", reading: "ちゅうし", hanViet: "TRUNG CHỈ", meaning: "Hủy bỏ, hoãn lại", level: "N4", type: "on" },
              { word: "禁止", reading: "きんし", hanViet: "CẤM CHỈ", meaning: "Nghiêm cấm", level: "N4", type: "on" },
              { word: "止む", reading: "やむ", hanViet: "CHỈ", meaning: "Tạnh (mưa, gió)", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "あかい しんごうで 車が 止まりました。",
                reading: "あかい しんごうで くるまが とまりました。",
                vi: "Xe ô tô đã dừng lại ở đèn tín hiệu màu đỏ."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "雨で サッカーの しあいは 【中止】に なりました。",
                target: "中止",
                answer: "ちゅうし",
                options: ["ちゅうし", "なかどめ", "ちゅうと", "じゅうし"],
                hint: "Đình chỉ, hủy bỏ (TRUNG CHỈ)."
              },
              {
                type: "kanji",
                question: "ここに じてんしゃを 【とめないで】 ください。",
                target: "とめないで",
                answer: "止めないで",
                options: ["止めないで", "正めないで", "歩めないで", "上めないで"],
                hint: "Đừng đỗ / dừng xe (CHỈ)."
              }
            ]
          },
          {
            char: "色",
            hanViet: "SẮC",
            meaning: "Màu sắc, sắc thái",
            strokes: 6,
            onyomi: ["ショク", "シキ"],
            kunyomi: ["いろ"],
            radical: "色 (Sắc - Màu sắc)",
            components: "𠂊 (Đầu người) + 巴 (Ba - Dáng người quỳ)",
            mnemonic: "Nhìn nét mặt trên đầu người (𠂊) đang cúi mình (巴) là biết ngay SẮC MẶT, MÀU SẮC (色).",
            lookalikes: [
              { char: "絶", hanViet: "TUYỆT", diff: "Có thêm bộ Mịch (糸) bên trái - nghĩa là Tuyệt đối, đứt đoạn" },
              { char: "包", hanViet: "BAO", diff: "Bên trên là bộ Bao (勹) ôm lấy chữ Kỷ (己) - nghĩa là Bao bọc" }
            ],
            words: [
              { word: "色", reading: "いろ", hanViet: "SẮC", meaning: "Màu sắc", level: "N5", type: "kun" },
              { word: "茶色", reading: "ちゃいろ", hanViet: "TRÀ SẮC", meaning: "Màu nâu", level: "N5", type: "kun" },
              { word: "黄色", reading: "きいろ", hanViet: "HOÀNG SẮC", meaning: "Màu vàng", level: "N5", type: "kun" },
              { word: "色々", reading: "いろいろ", hanViet: "SẮC SẮC", meaning: "Nhiều, đa dạng", level: "N5", type: "kun" },
              { word: "景色", reading: "けしき", hanViet: "CẢNH SẮC", meaning: "Phong cảnh", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "しんごうの 色が 青に かわりました。",
                reading: "しんごうの いろが あおに かわりました。",
                vi: "Màu của đèn giao thông đã chuyển sang màu xanh."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "ホテルの まどから きれいな 【景色】が 見えます。",
                target: "景色",
                answer: "けしき",
                options: ["けしき", "けいしょく", "けいろ", "かげいろ"],
                hint: "Phong cảnh (CẢNH SẮC - chú ý đọc là シキ)."
              },
              {
                type: "kanji",
                question: "どんな 【いろ】の ふくが すきですか。",
                target: "いろ",
                answer: "色",
                options: ["色", "包", "絶", "目"],
                hint: "Màu sắc (SẮC)."
              }
            ]
          },
          {
            char: "赤",
            hanViet: "XÍCH",
            meaning: "Màu đỏ",
            strokes: 7,
            onyomi: ["セキ", "シャク"],
            kunyomi: ["あか", "あか.い"],
            radical: "赤 (Xích - Màu đỏ)",
            components: "土 (Thổ - Đất) + 灬 (Biến thể của Hỏa - Lửa)",
            mnemonic: "Đất sét (土) được nung trên ngọn lửa lớn (火) sẽ rực lên MÀU ĐỎ (赤).",
            lookalikes: [
              { char: "走", hanViet: "TẨU", diff: "Bên dưới bộ Thổ là bộ Chỉ (止 - bàn chân) thay vì các nét lửa - nghĩa là Chạy" },
              { char: "変", hanViet: "BIẾN", diff: "Bên trên là chữ Diệc (亦) và bên dưới là bộ Truy (夂) - nghĩa là Thay đổi" }
            ],
            words: [
              { word: "赤い", reading: "あかい", hanViet: "XÍCH", meaning: "Đỏ, màu đỏ (tính từ)", level: "N5", type: "kun" },
              { word: "赤", reading: "あか", hanViet: "XÍCH", meaning: "Màu đỏ (danh từ)", level: "N5", type: "kun" },
              { word: "赤ちゃん", reading: "あかちゃん", hanViet: "XÍCH", meaning: "Em bé sơ sinh", level: "N4", type: "kun" },
              { word: "赤道", reading: "せきどう", hanViet: "XÍCH ĐẠO", meaning: "Đường xích đạo", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "しんごうが 赤の ときは、わたっては いけません。",
                reading: "しんごうが あかの ときは、わたっては いけません。",
                vi: "Khi đèn tín hiệu màu đỏ thì không được băng qua đường."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "かわいい 【赤ちゃん】が 生まれました。",
                target: "赤ちゃん",
                answer: "あかちゃん",
                options: ["あかちゃん", "せきちゃん", "あかいちゃん", "べびちゃん"],
                hint: "Em bé sơ sinh (XÍCH)."
              },
              {
                type: "kanji",
                question: "かの女は 【あかい】 バラが すきです。",
                target: "あかい",
                answer: "赤い",
                options: ["赤い", "走い", "青い", "明い"],
                hint: "Màu đỏ (XÍCH)."
              }
            ]
          },
          {
            char: "黄",
            hanViet: "HOÀNG",
            meaning: "Màu vàng",
            strokes: 11,
            onyomi: ["コウ", "オウ"],
            kunyomi: ["き"],
            radical: "黄 (Hoàng - Màu vàng)",
            components: "共 (Cộng - Phần trên) + 由 (Do/Điền - Cánh đồng) + 八 (Bát)",
            mnemonic: "Cánh đồng lúa (由) đến mùa thu hoạch chín rộ trải rộng khắp nơi (共 + 八) một MÀU VÀNG (黄) óng ả.",
            lookalikes: [
              { char: "横", hanViet: "HOÀNH", diff: "Có thêm bộ Mộc (木) ở bên trái - nghĩa là Bề ngang, bên cạnh" },
              { char: "廣", hanViet: "QUẢNG", diff: "Có bộ Nghiễm (广) bao bên ngoài - nghĩa là Rộng lớn (chữ cũ của 広)" }
            ],
            words: [
              { word: "黄色", reading: "きいろ", hanViet: "HOÀNG SẮC", meaning: "Màu vàng (danh từ)", level: "N5", type: "kun" },
              { word: "黄色い", reading: "きいろい", hanViet: "HOÀNG SẮC", meaning: "Vàng, có màu vàng (tính từ)", level: "N5", type: "kun" },
              { word: "黄身", reading: "きみ", hanViet: "HOÀNG THÂN", meaning: "Lòng đỏ trứng", level: "N4", type: "kun" },
              { word: "黄金", reading: "おうごん", hanViet: "HOÀNG KIM", meaning: "Vàng bạc, hoàng kim", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "しんごうが 黄色に なったら、もうすぐ 赤に なります。",
                reading: "しんごうが きいろに なったら、もうすぐ あかに なります。",
                vi: "Khi đèn giao thông chuyển sang màu vàng thì sắp sửa chuyển sang màu đỏ."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "あきに なると、木の はが 【黄色く】 なります。",
                target: "黄色く",
                answer: "きいろく",
                options: ["きいろく", "こうしょくく", "おういろく", "きろく"],
                hint: "Trở nên vàng (HOÀNG SẮC)."
              },
              {
                type: "kanji",
                question: "子どもは 【きいろい】 ぼうしを かぶって います。",
                target: "きいろい",
                answer: "黄色い",
                options: ["黄色い", "横色い", "金色い", "茶色い"],
                hint: "Có màu vàng (HOÀNG SẮC)."
              }
            ]
          },
          {
            char: "青",
            hanViet: "THANH",
            meaning: "Màu xanh (xanh da trời, xanh lục), non trẻ",
            strokes: 8,
            onyomi: ["セイ", "ショウ"],
            kunyomi: ["あお", "あお.い"],
            radical: "青 (Thanh - Màu xanh)",
            components: "生 (Sinh - Cây cỏ mọc) + 月 (Đan/Nguyệt - Giếng nước trong)",
            mnemonic: "Cây cỏ đâm chồi nảy lộc (生) bên dòng nước giếng trong vắt dưới ánh trăng (月) mang MÀU XANH (青) tươi mát.",
            lookalikes: [
              { char: "晴", hanViet: "TÌNH", diff: "Có thêm bộ Nhật (日 - mặt trời) bên trái - nghĩa là Trời nắng đẹp" },
              { char: "清", hanViet: "THANH", diff: "Có thêm bộ Thủy (氵 - nước) bên trái - nghĩa là Trong sạch, thanh khiết" },
              { char: "静", hanViet: "TĨNH", diff: "Có thêm chữ Tranh (争) bên phải - nghĩa là Yên tĩnh" }
            ],
            words: [
              { word: "青い", reading: "あおい", hanViet: "THANH", meaning: "Xanh, màu xanh (tính từ)", level: "N5", type: "kun" },
              { word: "青", reading: "あお", hanViet: "THANH", meaning: "Màu xanh (danh từ)", level: "N5", type: "kun" },
              { word: "青年", reading: "せいねん", hanViet: "THANH NIÊN", meaning: "Thanh niên", level: "N4", type: "on" },
              { word: "青空", reading: "あおぞら", hanViet: "THANH KHÔNG", meaning: "Bầu trời xanh", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "きょうは いい てんきで、青い 空が とても きれいです。",
                reading: "きょうは いい てんきで、あおい そらが とても きれいです。",
                vi: "Hôm nay thời tiết đẹp, bầu trời xanh trông rất tuyệt."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "あの 【青年】は とても しんせつです。",
                target: "青年",
                answer: "せいねん",
                options: ["せいねん", "あおとし", "しょうねん", "あおねん"],
                hint: "Thanh niên (THANH NIÊN)."
              },
              {
                type: "kanji",
                question: "しんごうが 【あお】に なってから、わたりましょう。",
                target: "あお",
                answer: "青",
                options: ["青", "赤", "晴", "清"],
                hint: "Màu xanh (THANH)."
              }
            ]
          }
        ]
      },
      {
        id: "5-3",
        number: 3,
        titleJp: "病院",
        reading: "びょういん",
        titleVi: "Bệnh viện",
        kanjiList: [
          {
            char: "病",
            hanViet: "BỆNH",
            meaning: "Bệnh tật, ốm đau",
            strokes: 10,
            onyomi: ["ビョウ", "ヘイ"],
            kunyomi: ["や.む", "やまい"],
            radical: "疒 (Nạch - Giường bệnh)",
            components: "疒 (Nạch - Giường bệnh) + 丙 (Bính - Cơn sốt nóng như lửa)",
            mnemonic: "Người nằm trên giường bệnh (疒) cơ thể nóng sốt bừng bừng (丙) là đang bị BỆNH (病).",
            lookalikes: [
              { char: "痛", hanViet: "THỐNG", diff: "Bên trong bộ Nạch là chữ Dũng (甬) thay vì chữ Bính (丙) - nghĩa là Đau đớn" },
              { char: "疲", hanViet: "BÌ", diff: "Bên trong bộ Nạch là bộ Bì (皮 - da) - nghĩa là Mệt mỏi" }
            ],
            words: [
              { word: "病院", reading: "びょういん", hanViet: "BỆNH VIỆN", meaning: "Bệnh viện", level: "N5", type: "on" },
              { word: "病気", reading: "びょうき", hanViet: "BỆNH KHÍ", meaning: "Ốm, bệnh tật", level: "N5", type: "on" },
              { word: "病人", reading: "びょうにん", hanViet: "BỆNH NHÂN", meaning: "Người bệnh, bệnh nhân", level: "N4", type: "on" },
              { word: "病室", reading: "びょうしつ", hanViet: "BỆNH THẤT", meaning: "Phòng bệnh", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "かぜを ひいたので、ちかくの 病院へ 行きました。",
                reading: "かぜを ひいたので、ちかくの びょういんへ いきました。",
                vi: "Vì bị cảm nên tôi đã đi đến bệnh viện gần nhà."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "父の 【病気】が やっと なおりました。",
                target: "病気",
                answer: "びょうき",
                options: ["びょうき", "へいき", "やみき", "びょき"],
                hint: "Căn bệnh, ốm đau (BỆNH KHÍ)."
              },
              {
                type: "kanji",
                question: "友だちが 入院して いる 【びょうしつ】へ 行きました。",
                target: "びょうしつ",
                answer: "病室",
                options: ["病室", "痛室", "疲室", "院室"],
                hint: "Phòng bệnh (BỆNH THẤT)."
              }
            ]
          },
          {
            char: "院",
            hanViet: "VIỆN",
            meaning: "Học viện, bệnh viện, cơ sở lớn",
            strokes: 10,
            onyomi: ["イン"],
            kunyomi: [],
            radical: "阝 (Phụ - Gò đất, tường thành)",
            components: "阝 (Phụ - Tường bao) + 完 (Hoàn - Hoàn chỉnh, trọn vẹn)",
            mnemonic: "Tòa nhà có tường rào kiên cố (阝) được trang bị hoàn chỉnh (完) để phục vụ cộng đồng là VIỆN (院).",
            lookalikes: [
              { char: "完", hanViet: "HOÀN", diff: "Không có bộ Phụ (阝) ở bên trái - nghĩa là Hoàn thành, hoàn hảo" },
              { char: "館", hanViet: "QUÁN", diff: "Bên trái là bộ Thực (飠) và bên phải là chữ Quan (官) - nghĩa là Tòa nhà, hội quán" }
            ],
            words: [
              { word: "病院", reading: "びょういん", hanViet: "BỆNH VIỆN", meaning: "Bệnh viện", level: "N5", type: "on" },
              { word: "入院", reading: "にゅういん", hanViet: "NHẬP VIỆN", meaning: "Nhập viện", level: "N4", type: "on" },
              { word: "退院", reading: "たいいん", hanViet: "THOÁI VIỆN", meaning: "Xuất viện", level: "N4", type: "on" },
              { word: "大学院", reading: "だいがくいん", hanViet: "ĐẠI HỌC VIỆN", meaning: "Cao học, sau đại học", level: "N4", type: "on" },
              { word: "美容院", reading: "びよういん", hanViet: "MỸ DUNG VIỆN", meaning: "Tiệm làm tóc / thẩm mỹ viện", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "来週の 水よう日に 退院できる そうです。",
                reading: "らいしゅうの すいようびに たいいんできる そうです。",
                vi: "Nghe nói thứ Tư tuần sau có thể xuất viện được rồi."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "大学を そつぎょうしてから、【大学院】に 進学します。",
                target: "大学院",
                answer: "だいがくいん",
                options: ["だいがくいん", "だいがくかん", "たいがくいん", "だいがくえん"],
                hint: "Cao học (ĐẠI HỌC VIỆN)."
              },
              {
                type: "kanji",
                question: "けがを して、一週間 【にゅういん】しました。",
                target: "にゅういん",
                answer: "入院",
                options: ["入院", "入館", "入完", "入園"],
                hint: "Nhập viện (NHẬP VIỆN)."
              }
            ]
          },
          {
            char: "医",
            hanViet: "Y",
            meaning: "Y học, thầy thuốc, chữa bệnh",
            strokes: 7,
            onyomi: ["イ"],
            kunyomi: [],
            radical: "匚 (Phương - Cái hộp)",
            components: "匚 (Phương - Hộp đựng) + 矢 (Thỉ - Mũi tên / Kim châm cứu)",
            mnemonic: "Chiếc hộp y tế (匚) đựng những cây kim châm cứu sắc như mũi tên (矢) của người THẦY THUỐC, Y HỌC (医).",
            lookalikes: [
              { char: "区", hanViet: "KHU", diff: "Bên trong hộp chỉ có nét chữ メ thay vì bộ Thỉ (矢) - nghĩa là Khu vực, quận" },
              { char: "族", hanViet: "TỘC", diff: "Bộ Thỉ nằm ở góc dưới bên phải cùng bộ Phương (方) bên trái - nghĩa là Gia tộc" }
            ],
            words: [
              { word: "医者", reading: "いしゃ", hanViet: "Y GIẢ", meaning: "Bác sĩ", level: "N5", type: "on" },
              { word: "歯医者", reading: "はいしゃ", hanViet: "XỈ Y GIẢ", meaning: "Nha sĩ, phòng khám răng", level: "N4", type: "on" },
              { word: "医学", reading: "いがく", hanViet: "Y HỌC", meaning: "Y học, ngành y", level: "N4", type: "on" },
              { word: "医療", reading: "いりょう", hanViet: "Y LIỆU", meaning: "Y tế, điều trị y khoa", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "おなかが いたいので、医者に みてもらいました。",
                reading: "おなかが いたいので、いしゃに みてもらいました。",
                vi: "Vì bị đau bụng nên tôi đã đi khám bác sĩ."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "あには 大学で 【医学】を べんきょうして います。",
                target: "医学",
                answer: "いがく",
                options: ["いがく", "いしゃがく", "くがく", "やがく"],
                hint: "Ngành y học (Y HỌC)."
              },
              {
                type: "kanji",
                question: "歯が いたいので、【はいしゃ】へ 行きます。",
                target: "はいしゃ",
                answer: "歯医者",
                options: ["歯医者", "歯区者", "歯矢者", "歯衣者"],
                hint: "Nha sĩ (XỈ Y GIẢ)."
              }
            ]
          },
          {
            char: "科",
            hanViet: "KHOA",
            meaning: "Khoa học, môn học, chuyên khoa",
            strokes: 9,
            onyomi: ["カ"],
            kunyomi: [],
            radical: "禾 (Hòa - Cây lúa)",
            components: "禾 (Hòa - Cây lúa) + 斗 (Đấu - Cái đấu đong)",
            mnemonic: "Đem các giống lúa (禾) ra đong đếm phân loại bằng cái đấu (斗) một cách chuẩn xác là làm KHOA HỌC, CHUYÊN KHOA (科).",
            lookalikes: [
              { char: "料", hanViet: "LIỆU", diff: "Bên trái là bộ Mễ (米 - gạo) thay vì bộ Hòa (禾 - cây lúa) - nghĩa là Nguyên liệu, tiền phí" },
              { char: "利", hanViet: "LỢI", diff: "Bên phải là bộ Đao (刂) thay vì bộ Đấu (斗) - nghĩa là Tiện lợi" }
            ],
            words: [
              { word: "科学", reading: "かがく", hanViet: "KHOA HỌC", meaning: "Khoa học", level: "N4", type: "on" },
              { word: "教科書", reading: "きょうかしょ", hanViet: "GIÁO KHOA THƯ", meaning: "Sách giáo khoa", level: "N4", type: "on" },
              { word: "内科", reading: "ないか", hanViet: "NỘI KHOA", meaning: "Khoa nội (bệnh viện)", level: "N4", type: "on" },
              { word: "外科", reading: "げか", hanViet: "NGOẠI KHOA", meaning: "Khoa ngoại (phẫu thuật)", level: "N4", type: "on" },
              { word: "歯科", reading: "しか", hanViet: "XỈ KHOA", meaning: "Nha khoa", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "かぜの ときは、病院の 内科へ 行きます。",
                reading: "かぜの ときは、びょういんの ないかへ いきます。",
                vi: "Khi bị cảm, người ta đến khoa nội của bệnh viện."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "あたらしい 【教科書】を かばんに 入れました。",
                target: "教科書",
                answer: "きょうかしょ",
                options: ["きょうかしょ", "きょうりょうしょ", "きょかしょ", "きょうかしょう"],
                hint: "Sách giáo khoa (GIÁO KHOA THƯ)."
              },
              {
                type: "kanji",
                question: "かれは 【かがく】の けんきゅうを して います。",
                target: "かがく",
                answer: "科学",
                options: ["科学", "料学", "利学", "和学"],
                hint: "Khoa học (KHOA HỌC)."
              }
            ]
          },
          {
            char: "薬",
            hanViet: "DƯỢC",
            meaning: "Thuốc, dược phẩm",
            strokes: 16,
            onyomi: ["ヤク"],
            kunyomi: ["くすり"],
            radical: "艹 (Thảo - Cây cỏ)",
            components: "艹 (Thảo - Thảo mộc) + 楽 (Lạc - Vui vẻ, thoải mái)",
            mnemonic: "Loài thảo mộc (艹) uống vào giúp cơ thể khỏe lại và cảm thấy dễ chịu, thoải mái (楽) chính là THUỐC (薬).",
            lookalikes: [
              { char: "楽", hanViet: "LẠC, NHẠC", diff: "Không có bộ Thảo (艹) ở trên đầu - nghĩa là Vui vẻ, âm nhạc" },
              { char: "葉", hanViet: "DIỆP", diff: "Bên dưới bộ Thảo là chữ Thế (枼) thay vì chữ Lạc (楽) - nghĩa là Chiếc lá" }
            ],
            words: [
              { word: "薬", reading: "くすり", hanViet: "DƯỢC", meaning: "Thuốc", level: "N5", type: "kun" },
              { word: "薬局", reading: "やっきょく", hanViet: "DƯỢC CỤC", meaning: "Hiệu thuốc, nhà thuốc", level: "N4", type: "on" },
              { word: "目薬", reading: "めぐすり", hanViet: "MỤC DƯỢC", meaning: "Thuốc nhỏ mắt", level: "N4", type: "kun" },
              { word: "風邪薬", reading: "かぜぐすり", hanViet: "PHONG TÀ DƯỢC", meaning: "Thuốc cảm", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "ごはんを たべた あとで、この 薬を のんで ください。",
                reading: "ごはんを たべた あとで、この くすりを のんで ください。",
                vi: "Sau khi ăn cơm xong, bạn hãy uống thuốc này nhé."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "駅の ちかくの 【薬局】で マスクを 買いました。",
                target: "薬局",
                answer: "やっきょく",
                options: ["やっきょく", "やくきょく", "くすりきょく", "らっきょく"],
                hint: "Hiệu thuốc (DƯỢC CỤC - có biến âm っ)."
              },
              {
                type: "kanji",
                question: "パソコンを 見て 目が つかれたので、【めぐすり】を さしました。",
                target: "めぐすり",
                answer: "目薬",
                options: ["目薬", "目楽", "目草", "目葉"],
                hint: "Thuốc nhỏ mắt (MỤC DƯỢC)."
              }
            ]
          },
          {
            char: "待",
            hanViet: "ĐÃI",
            meaning: "Chờ đợi, chiêu đãi",
            strokes: 9,
            onyomi: ["タイ"],
            kunyomi: ["ま.つ"],
            radical: "彳 (Sách - Bước chân trái)",
            components: "彳 (Sách - Đi lại) + 寺 (Tự - Ngôi chùa)",
            mnemonic: "Bước chân đi qua đi lại (彳) trước cổng chùa (寺) để CHỜ ĐỢI (待) người thương.",
            lookalikes: [
              { char: "持", hanViet: "TRÌ", diff: "Bên trái là bộ Thủ (扌 - cái tay) thay vì bộ Sách (彳) - nghĩa là Cầm, mang" },
              { char: "特", hanViet: "ĐẶC", diff: "Bên trái là bộ Ngưu (牜 - con bò) thay vì bộ Sách (彳) - nghĩa là Đặc biệt" },
              { char: "時", hanViet: "THỜI", diff: "Bên trái là bộ Nhật (日 - mặt trời) - nghĩa là Thời gian, giờ" }
            ],
            words: [
              { word: "待つ", reading: "まつ", hanViet: "ĐÃI", meaning: "Chờ, đợi", level: "N5", type: "kun" },
              { word: "待合室", reading: "まちあいしつ", hanViet: "ĐÃI HỢP THẤT", meaning: "Phòng chờ (ở ga, bệnh viện)", level: "N4", type: "kun" },
              { word: "招待", reading: "しょうたい", hanViet: "CHIÊU ĐÃI", meaning: "Mời, chiêu đãi", level: "N4", type: "on" },
              { word: "期待", reading: "きたい", hanViet: "KỲ ĐÃI", meaning: "Kỳ vọng, mong đợi", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "病院の 待合室で ３０ぷんぐらい 待ちました。",
                reading: "びょういんの まちあいしつで さんじゅっぷんぐらい まちました。",
                vi: "Tôi đã đợi khoảng 30 phút ở phòng chờ của bệnh viện."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "友だちの けっこんしきに 【招待】されました。",
                target: "招待",
                answer: "しょうたい",
                options: ["しょうたい", "しょたい", "しょうまち", "しょうだい"],
                hint: "Được mời (CHIÊU ĐÃI)."
              },
              {
                type: "kanji",
                question: "駅の 改札の まえで 【まって】 いて ください。",
                target: "まって",
                answer: "待って",
                options: ["待って", "持って", "特って", "時って"],
                hint: "Chờ đợi (ĐÃI)."
              }
            ]
          },
          {
            char: "合",
            hanViet: "HỢP",
            meaning: "Hợp nhau, vừa vặn, gộp lại",
            strokes: 6,
            onyomi: ["ゴウ", "ガッ", "カッ"],
            kunyomi: ["あ.う", "あ.わせる"],
            radical: "口 (Khẩu - Cái miệng)",
            components: "亼 (Tập - Mái nhà / Nắp đậy) + 口 (Khẩu - Cái hộp / Miệng)",
            mnemonic: "Chiếc nắp (亼) đậy vừa khít lên miệng hộp (口), hoặc nhiều người cùng chung tiếng nói là HỢP NHAU, VỪA VẶN (合).",
            lookalikes: [
              { char: "会", hanViet: "HỘI", diff: "Bên dưới là chữ Vân (云) thay vì bộ Khẩu (口) - nghĩa là Gặp gỡ, hội họp" },
              { char: "台", hanViet: "ĐÀI", diff: "Bên trên chỉ là chữ Khư (厶) không có mái nhân (人) - nghĩa là Bệ, đài" }
            ],
            words: [
              { word: "合う", reading: "あう", hanViet: "HỢP", meaning: "Vừa vặn, hợp với, đúng", level: "N4", type: "kun" },
              { word: "間に合う", reading: "まにあう", hanViet: "GIAN HỢP", meaning: "Kịp giờ", level: "N4", type: "kun" },
              { word: "試合", reading: "しあい", hanViet: "THÍ HỢP", meaning: "Trận đấu", level: "N4", type: "kun" },
              { word: "都合", reading: "つごう", hanViet: "ĐÔ HỢP", meaning: "Sự thuận tiện, hoàn cảnh", level: "N4", type: "on" },
              { word: "話し合う", reading: "はなしあう", hanViet: "THOẠI HỢP", meaning: "Thảo luận, bàn bạc với nhau", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "走れば、８時の でんしゃに 間に合いますよ。",
                reading: "はしれば、はちじの でんしゃに まにあいますよ。",
                vi: "Nếu chạy thì sẽ kịp chuyến tàu lúc 8 giờ đấy."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "来週の 金よう日は 【都合】が いいですか。",
                target: "都合",
                answer: "つごう",
                options: ["つごう", "とごう", "つあい", "とあい"],
                hint: "Sự thuận tiện về thời gian (ĐÔ HỢP)."
              },
              {
                type: "kanji",
                question: "この くつは サイズが ぴったり 【あいます】。",
                target: "あいます",
                answer: "合います",
                options: ["合います", "会います", "台います", "全います"],
                hint: "Vừa vặn, hợp kích cỡ (HỢP)."
              }
            ]
          },
          {
            char: "計",
            hanViet: "KẾ",
            meaning: "Đo lường, tính toán, kế hoạch, đồng hồ",
            strokes: 9,
            onyomi: ["ケイ"],
            kunyomi: ["はか.る", "はか.らう"],
            radical: "言 (Ngôn - Lời nói)",
            components: "言 (Ngôn - Lời nói, bàn bạc) + 十 (Thập - Số 10, đầy đủ)",
            mnemonic: "Cùng bàn bạc bằng lời nói (言) và đếm từ một đến mười (十) để TÍNH TOÁN, LẬP KẾ HOẠCH (計).",
            lookalikes: [
              { char: "討", hanViet: "THẢO", diff: "Bên phải là bộ Thốn (寸 - có dấu chấm) thay vì chữ Thập (十) - nghĩa là Thảo luận" },
              { char: "汁", hanViet: "TRẤP", diff: "Bên trái là bộ Thủy (氵 - nước) thay vì bộ Ngôn (言) - nghĩa là Nước canh, súp" }
            ],
            words: [
              { word: "時計", reading: "とけい", hanViet: "THỜI KẾ", meaning: "Đồng hồ", level: "N5", type: "on" },
              { word: "計画", reading: "けいかく", hanViet: "KẾ HOẠCH", meaning: "Kế hoạch", level: "N4", type: "on" },
              { word: "会計", reading: "かいけい", hanViet: "HỘI KẾ", meaning: "Thanh toán, kế toán", level: "N4", type: "on" },
              { word: "体温計", reading: "たいおんけい", hanViet: "THỂ ÔN KẾ", meaning: "Nhiệt kế đo thân nhiệt", level: "N4", type: "on" },
              { word: "計る", reading: "はかる", hanViet: "KẾ", meaning: "Đo (thời gian, nhiệt độ), cân", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "ねつが ありそうなので、体温計で ねつを 計りました。",
                reading: "ねつが ありそうなので、たいおんけいで ねつを はかりました。",
                vi: "Vì có vẻ bị sốt nên tôi đã dùng nhiệt kế để cặp nhiệt độ."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "お【会計】は レジで おねがいします。",
                target: "会計",
                answer: "かいけい",
                options: ["かいけい", "あいけい", "かいと", "かいはか"],
                hint: "Thanh toán tiền (HỘI KẾ)."
              },
              {
                type: "kanji",
                question: "たんじょうびに うで【どけい】を もらいました。",
                target: "どけい",
                answer: "時計",
                options: ["時計", "時討", "時汁", "時針"],
                hint: "Đồng hồ đeo tay (THỜI KẾ)."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    titleJp: "6章 学生",
    titleVi: "Chương 6: Đời sống sinh viên",
    icon: "🎓",
    lessons: [
      {
        id: "6-1",
        number: 1,
        titleJp: "研究",
        reading: "けんきゅう",
        titleVi: "Nghiên cứu",
        kanjiList: [
          {
            char: "研",
            hanViet: "NGHIÊN",
            meaning: "Mài giũa, nghiên cứu",
            strokes: 9,
            onyomi: ["ケン"],
            kunyomi: ["と.ぐ"],
            radical: "石 (Thạch - Hòn đá)",
            components: "石 (Thạch - Hòn đá mài) + 开 (Khai - Phẳng phiu)",
            mnemonic: "Dùng hòn đá (石) mài đi mài lại cho thật phẳng phiu, sắc bén (开) chính là MÀI GIŨA, NGHIÊN CỨU (研).",
            lookalikes: [
              { char: "開", hanViet: "KHAI", diff: "Bên ngoài là bộ Môn (門 - cổng) thay vì bộ Thạch (石) bên trái - nghĩa là Mở" },
              { char: "破", hanViet: "PHÁ", diff: "Bên phải là bộ Bì (皮) thay vì chữ Khai (开) - nghĩa là Phá vỡ, rách" }
            ],
            words: [
              { word: "研究", reading: "けんきゅう", hanViet: "NGHIÊN CỨU", meaning: "Nghiên cứu", level: "N4", type: "on" },
              { word: "研究者", reading: "けんきゅうしゃ", hanViet: "NGHIÊN CỨU GIẢ", meaning: "Nhà nghiên cứu", level: "N4", type: "on" },
              { word: "研究室", reading: "けんきゅうしつ", hanViet: "NGHIÊN CỨU THẤT", meaning: "Phòng nghiên cứu (của giáo sư)", level: "N4", type: "on" },
              { word: "研修", reading: "けんしゅう", hanViet: "NGHIÊN TU", meaning: "Tu nghiệp, đào tạo thực tập", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "大学で 日本の 文化に ついて 研究して います。",
                reading: "だいがくで にほんの ぶんかに ついて けんきゅうして います。",
                vi: "Tôi đang nghiên cứu về văn hóa Nhật Bản ở trường đại học."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "来月から 東京で ３かげつの 【研修】が あります。",
                target: "研修",
                answer: "けんしゅう",
                options: ["けんしゅう", "けんしゅ", "きゅうしゅう", "とぎしゅう"],
                hint: "Đào tạo, tu nghiệp (NGHIÊN TU)."
              },
              {
                type: "kanji",
                question: "先生の 【けんきゅうしつ】は ３階に あります。",
                target: "けんきゅうしつ",
                answer: "研究室",
                options: ["研究室", "開究室", "石究室", "破究室"],
                hint: "Phòng nghiên cứu (NGHIÊN CỨU THẤT)."
              }
            ]
          },
          {
            char: "究",
            hanViet: "CỨU",
            meaning: "Tìm tòi đến cùng, nghiên cứu",
            strokes: 7,
            onyomi: ["キュウ"],
            kunyomi: ["きわ.める"],
            radical: "穴 (Huyệt - Hang động)",
            components: "穴 (Huyệt - Cái hang) + 九 (Cửu - Số 9, tận cùng)",
            mnemonic: "Đào sâu vào tận cùng (九) trong hang tối (穴) để khám phá chân tướng chính là NGHIÊN CỨU, TÌM TÒI (究).",
            lookalikes: [
              { char: "空", hanViet: "KHÔNG", diff: "Bên dưới bộ Huyệt là bộ Công (工) thay vì chữ Cửu (九) - nghĩa là Bầu trời, trống rỗng" },
              { char: "窓", hanViet: "SONG", diff: "Bên dưới là chữ Thông (悤) nhiều nét - nghĩa là Cửa sổ" }
            ],
            words: [
              { word: "研究", reading: "けんきゅう", hanViet: "NGHIÊN CỨU", meaning: "Nghiên cứu", level: "N4", type: "on" },
              { word: "研究所", reading: "けんきゅうじょ", hanViet: "NGHIÊN CỨU SỞ", meaning: "Viện nghiên cứu", level: "N4", type: "on" },
              { word: "大学院生", reading: "けんきゅうせい", hanViet: "NGHIÊN CỨU SINH", meaning: "Nghiên cứu sinh (研究生)", level: "N4", type: "on" },
              { word: "究明", reading: "きゅうめい", hanViet: "CỨU MINH", meaning: "Làm sáng tỏ, điều tra rõ", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "あには 科学の 研究所で はたらいて います。",
                reading: "あには かがくの けんきゅうじょで はたらいて います。",
                vi: "Anh trai tôi đang làm việc tại một viện nghiên cứu khoa học."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "しょうらい、【研究】の しごとが したいです。",
                target: "研究",
                answer: "けんきゅう",
                options: ["けんきゅう", "けんくう", "けんきゅ", "げんきゅう"],
                hint: "Nghiên cứu (NGHIÊN CỨU)."
              },
              {
                type: "kanji",
                question: "かれは AIを 【けんきゅう】して います。",
                target: "けんきゅう",
                answer: "研究",
                options: ["研究", "研空", "研九", "研穴"],
                hint: "Nghiên cứu (NGHIÊN CỨU)."
              }
            ]
          },
          {
            char: "語",
            hanViet: "NGỮ",
            meaning: "Ngôn ngữ, từ vựng, kể chuyện",
            strokes: 14,
            onyomi: ["ゴ"],
            kunyomi: ["かた.る", "かた.らう"],
            radical: "言 (Ngôn - Lời nói)",
            components: "言 (Ngôn - Lời nói) + 五 (Ngũ - Số 5) + 口 (Khẩu - Miệng)",
            mnemonic: "Dùng cái miệng (口) nói ra lời nói (言) giao tiếp khắp năm châu (五) chính là NGÔN NGỮ (語).",
            lookalikes: [
              { char: "話", hanViet: "THOẠI", diff: "Bên phải là bộ Thiệt (舌 - cái lưỡi) thay vì chữ Ngô (吾) - nghĩa là Nói chuyện" },
              { char: "読", hanViet: "ĐỘC", diff: "Bên phải là chữ Mại (売) - nghĩa là Đọc" }
            ],
            words: [
              { word: "日本語", reading: "にほんご", hanViet: "NHẬT BẢN NGỮ", meaning: "Tiếng Nhật", level: "N5", type: "on" },
              { word: "英語", reading: "えいご", hanViet: "ANH NGỮ", meaning: "Tiếng Anh", level: "N5", type: "on" },
              { word: "外国語", reading: "がいこくご", hanViet: "NGOẠI QUỐC NGỮ", meaning: "Ngoại ngữ", level: "N4", type: "on" },
              { word: "物語", reading: "ものがたり", hanViet: "VẬT NGỮ", meaning: "Câu chuyện, truyện kể", level: "N4", type: "kun" },
              { word: "語る", reading: "かたる", hanViet: "NGỮ", meaning: "Kể, thuật lại, tâm sự", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "大学で 第二外国語として フランス語を えらびました。",
                reading: "だいがくで だいにがいこくごとして フランスごを えらびました。",
                vi: "Ở trường đại học, tôi đã chọn tiếng Pháp làm ngoại ngữ thứ hai."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "この 本は むかしの 【物語】です。",
                target: "物語",
                answer: "ものがたり",
                options: ["ものがたり", "ものご", "ぶつご", "ものかた"],
                hint: "Câu chuyện cổ (VẬT NGỮ)."
              },
              {
                type: "kanji",
                question: "わたしは 【にほんご】の べんきょうが すきです。",
                target: "にほんご",
                answer: "日本語",
                options: ["日本語", "日本話", "日本読", "日本言"],
                hint: "Tiếng Nhật (NHẬT BẢN NGỮ)."
              }
            ]
          },
          {
            char: "文",
            hanViet: "VĂN",
            meaning: "Câu văn, văn chương, văn hóa",
            strokes: 4,
            onyomi: ["ブン", "モン"],
            kunyomi: ["ふみ"],
            radical: "文 (Văn - Văn chương)",
            components: "亠 (Đầu) + 乂 (Hai nét giao nhau như hoa văn)",
            mnemonic: "Những nét khắc đan chéo (乂) dưới đầu bút (亠) tạo nên chữ viết và VĂN CHƯƠNG, VĂN HÓA (文).",
            lookalikes: [
              { char: "交", hanViet: "GIAO", diff: "Có thêm hai nét chấm nhỏ ở hai bên dưới nét ngang - nghĩa là Giao thông, trao đổi" },
              { char: "父", hanViet: "PHỤ", diff: "Không có nét chấm và nét ngang liền trên đỉnh - nghĩa là Cha" }
            ],
            words: [
              { word: "作文", reading: "さくぶん", hanViet: "TÁC VĂN", meaning: "Bài văn, viết văn", level: "N5", type: "on" },
              { word: "文化", reading: "ぶんか", hanViet: "VĂN HÓA", meaning: "Văn hóa", level: "N4", type: "on" },
              { word: "文学", reading: "ぶんがく", hanViet: "VĂN HỌC", meaning: "Văn học", level: "N4", type: "on" },
              { word: "文法", reading: "ぶんぽう", hanViet: "VĂN PHÁP", meaning: "Ngữ pháp", level: "N4", type: "on" },
              { word: "文字", reading: "もじ", hanViet: "VĂN TỰ", meaning: "Chữ viết, ký tự", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "日本の 文学や 文化に とても きょうみが あります。",
                reading: "にほんの ぶんがくや ぶんかに とても きょうみが あります。",
                vi: "Tôi rất có hứng thú với văn học và văn hóa Nhật Bản."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "小さい 【文字】が 読みにくいです。",
                target: "文字",
                answer: "もじ",
                options: ["もじ", "ぶんじ", "ふみじ", "もんじ"],
                hint: "Chữ viết, ký tự (VĂN TỰ - đọc là もじ)."
              },
              {
                type: "kanji",
                question: "しゅくだいで 日本語の 【さくぶん】を 書きました。",
                target: "さくぶん",
                answer: "作文",
                options: ["作文", "作交", "作父", "昨文"],
                hint: "Bài tập làm văn (TÁC VĂN)."
              }
            ]
          },
          {
            char: "英",
            hanViet: "ANH",
            meaning: "Nước Anh, tài giỏi, anh hùng",
            strokes: 8,
            onyomi: ["エイ"],
            kunyomi: [],
            radical: "艹 (Thảo - Cây cỏ)",
            components: "艹 (Thảo - Hoa cỏ) + 央 (Ương - Trung tâm)",
            mnemonic: "Bông hoa (艹) nở rộ đẹp nhất ở vị trí trung tâm (央) tượng trưng cho người tài hoa lỗi lạc và NƯỚC ANH (英).",
            lookalikes: [
              { char: "映", hanViet: "ÁNH", diff: "Có bộ Nhật (日) ở bên trái thay vì bộ Thảo (艹) ở bên trên - nghĩa là Chiếu phim" },
              { char: "央", hanViet: "ƯƠNG", diff: "Không có bộ Thảo (艹) ở trên đầu - nghĩa là Trung ương" }
            ],
            words: [
              { word: "英語", reading: "えいご", hanViet: "ANH NGỮ", meaning: "Tiếng Anh", level: "N5", type: "on" },
              { word: "英会話", reading: "えいかいわ", hanViet: "ANH HỘI THOẠI", meaning: "Hội thoại tiếng Anh", level: "N4", type: "on" },
              { word: "英文", reading: "えいぶん", hanViet: "ANH VĂN", meaning: "Câu văn tiếng Anh, Anh văn", level: "N4", type: "on" },
              { word: "英雄", reading: "えいゆう", hanViet: "ANH HÙNG", meaning: "Anh hùng", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "毎週 土よう日に 英会話の クラスへ 通って います。",
                reading: "まいしゅう どようびに えいかいわの クラスへ かよって います。",
                vi: "Thứ Bảy hàng tuần tôi đều đi học lớp hội thoại tiếng Anh."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "かの女は 【英語】が とても じょうずです。",
                target: "英語",
                answer: "えいご",
                options: ["えいご", "おうご", "いご", "えご"],
                hint: "Tiếng Anh (ANH NGỮ)."
              },
              {
                type: "kanji",
                question: "この 【えいぶん】を 日本語に 訳して ください。",
                target: "えいぶん",
                answer: "英文",
                options: ["英文", "映文", "央文", "茶文"],
                hint: "Câu tiếng Anh (ANH VĂN)."
              }
            ]
          },
          {
            char: "化",
            hanViet: "HÓA",
            meaning: "Biến hóa, thay đổi, văn hóa",
            strokes: 4,
            onyomi: ["カ", "ケ"],
            kunyomi: ["ば.ける", "ば.かす"],
            radical: "匕 (Chủy - Cái thìa / Người quay ngược)",
            components: "亻 (Nhân đứng - Người đang đứng) + 匕 (Chủy - Người xoay ngược)",
            mnemonic: "Một người đang đứng thẳng (亻) bỗng lộn ngược xoay mình (匕) BIẾN HÓA, THAY ĐỔI (化) hoàn toàn.",
            lookalikes: [
              { char: "花", hanViet: "HOA", diff: "Có thêm bộ Thảo (艹 - cỏ cây) ở trên đầu - nghĩa là Bông hoa" },
              { char: "北", hanViet: "BẮC", diff: "Bên trái là chữ Tường (爿) thay vì bộ Nhân đứng (亻) - nghĩa là Phía bắc" }
            ],
            words: [
              { word: "文化", reading: "ぶんか", hanViet: "VĂN HÓA", meaning: "Văn hóa", level: "N4", type: "on" },
              { word: "化学", reading: "かがく", hanViet: "HÓA HỌC", meaning: "Hóa học", level: "N4", type: "on" },
              { word: "変化", reading: "へんか", hanViet: "BIẾN HÓA", meaning: "Sự thay đổi, biến đổi", level: "N4", type: "on" },
              { word: "化粧", reading: "けしょう", hanViet: "HÓA TRANG", meaning: "Trang điểm", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "ベトナムと 日本の 文化の ちがいを べんきょうします。",
                reading: "ベトナムと にほんの ぶんかの ちがいを べんきょうします。",
                vi: "Tôi học về sự khác biệt văn hóa giữa Việt Nam và Nhật Bản."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "でかける まえに 【化粧】を します。",
                target: "化粧",
                answer: "けしょう",
                options: ["けしょう", "かしょう", "ばけしょう", "けそう"],
                hint: "Trang điểm (HÓA TRANG - chú ý đọc là ケ)."
              },
              {
                type: "kanji",
                question: "11月3日は 日本の 「【ぶんか】の 日」です。",
                target: "ぶんか",
                answer: "文化",
                options: ["文化", "文花", "文北", "文代"],
                hint: "Văn hóa (VĂN HÓA)."
              }
            ]
          },
          {
            char: "数",
            hanViet: "SỐ, SỔ",
            meaning: "Con số, đếm, toán học",
            strokes: 13,
            onyomi: ["スウ", "ス"],
            kunyomi: ["かず", "かぞ.える"],
            radical: "攵 (Phộc - Đánh khẽ, hành động)",
            components: "米 (Mễ - Hạt gạo) + 女 (Nữ - Phụ nữ) + 攵 (Phộc - Tay cầm que tính)",
            mnemonic: "Người phụ nữ (女) tay cầm que tính (攵) tỉ mỉ ĐẾM từng hạt gạo (米) để ghi lại CON SỐ (数).",
            lookalikes: [
              { char: "類", hanViet: "LOẠI", diff: "Bên phải là bộ Hiệt (頁 - cái đầu) và bên dưới chữ Mễ là chữ Đại (大) - nghĩa là Chủng loại" },
              { char: "教", hanViet: "GIÁO", diff: "Bên trái là chữ Hiếu (孝) thay vì chữ Lâu (米+女) - nghĩa là Dạy học" }
            ],
            words: [
              { word: "数学", reading: "すうがく", hanViet: "SỐ HỌC", meaning: "Môn Toán học", level: "N4", type: "on" },
              { word: "数字", reading: "すうじ", hanViet: "SỐ TỰ", meaning: "Chữ số, con số", level: "N4", type: "on" },
              { word: "数", reading: "かず", hanViet: "SỐ", meaning: "Số lượng", level: "N4", type: "kun" },
              { word: "数える", reading: "かぞえる", hanViet: "SỐ", meaning: "Đếm", level: "N4", type: "kun" },
              { word: "人数", reading: "にんずう", hanViet: "NHÂN SỐ", meaning: "Số người", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "パーティーに 来る 人の 数を 数えて ください。",
                reading: "パーティーに くる ひとの かずを かぞえて ください。",
                vi: "Hãy đếm số lượng người sẽ đến buổi tiệc giúp tôi."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "わたしは 子どもの ときから 【数学】が とくいです。",
                target: "数学",
                answer: "すうがく",
                options: ["すうがく", "かずがく", "すがく", "かぞがく"],
                hint: "Môn Toán (SỐ HỌC)."
              },
              {
                type: "kanji",
                question: "１から １０まで 【かぞえて】 ください。",
                target: "かぞえて",
                answer: "数えて",
                options: ["数えて", "教えて", "考えて", "類えて"],
                hint: "Đếm số (SỐ)."
              }
            ]
          },
          {
            char: "心",
            hanViet: "TÂM",
            meaning: "Trái tim, tấm lòng, tâm trí",
            strokes: 4,
            onyomi: ["シン"],
            kunyomi: ["こころ"],
            radical: "心 (Tâm - Trái tim)",
            components: "心 (Hình vẽ quả tim với các buồng tim và mạch máu)",
            mnemonic: "Hình dáng quả tim nằm trong lồng ngực với ba nhịp đập (ba nét chấm) tượng trưng cho TRÁI TIM, TẤM LÒNG (心).",
            lookalikes: [
              { char: "必", hanViet: "TẤT", diff: "Có một nét phẩy dài cắt chéo qua chính giữa chữ Tâm - nghĩa là Nhất định, tất yếu" },
              { char: "思", hanViet: "TƯ", diff: "Có thêm bộ Điền (田) ở phía trên chữ Tâm - nghĩa là Suy nghĩ" }
            ],
            words: [
              { word: "心", reading: "こころ", hanViet: "TÂM", meaning: "Trái tim, tấm lòng, tâm hồn", level: "N4", type: "kun" },
              { word: "安心", reading: "あんしん", hanViet: "AN TÂM", meaning: "Yên tâm", level: "N4", type: "on" },
              { word: "心配", reading: "しんぱい", hanViet: "TÂM PHỐI", meaning: "Lo lắng, quan tâm", level: "N4", type: "on" },
              { word: "熱心", reading: "ねっしん", hanViet: "NHIỆT TÂM", meaning: "Nhiệt tình, chăm chỉ", level: "N4", type: "on" },
              { word: "中心", reading: "ちゅうしん", hanViet: "TRUNG TÂM", meaning: "Trung tâm, trọng tâm", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "テストに ごうかくして、やっと 安心しました。",
                reading: "テストに ごうかくして、やっと あんしんしました。",
                vi: "Đã thi đỗ bài kiểm tra nên cuối cùng tôi cũng yên tâm rồi."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "病気は もう だいじょうぶですから、【心配】しないで ください。",
                target: "心配",
                answer: "しんぱい",
                options: ["しんぱい", "しんはい", "こころくば", "しんばい"],
                hint: "Lo lắng (TÂM PHỐI)."
              },
              {
                type: "kanji",
                question: "かれは とても 【ねっしん】に べんきょうします。",
                target: "ねっしん",
                answer: "熱心",
                options: ["熱心", "熱必", "熱思", "熱身"],
                hint: "Nhiệt tình, say mê (NHIỆT TÂM)."
              }
            ]
          }
        ]
      },
      {
        id: "6-2",
        number: 2,
        titleJp: "合コン",
        reading: "ごうコン",
        titleVi: "Buổi giao lưu kết bạn",
        kanjiList: [
          {
            char: "若",
            hanViet: "NHƯỢC",
            meaning: "Trẻ trung, non trẻ",
            strokes: 8,
            onyomi: ["ジャク", "ニャク"],
            kunyomi: ["わか.い", "も.しくは"],
            radical: "艹 (Thảo - Cây cỏ)",
            components: "艹 (Thảo - Mầm cỏ non) + 右 (Hữu - Bàn tay phải)",
            mnemonic: "Bàn tay phải (右) nâng niu mầm cỏ non mới nhú (艹) tràn đầy sức sống TRẺ TRUNG (若).",
            lookalikes: [
              { char: "苦", hanViet: "KHỔ", diff: "Bên dưới bộ Thảo là chữ Cổ (古) thay vì chữ Hữu (右) - nghĩa là Đắng, khổ cực" },
              { char: "右", hanViet: "HỮU", diff: "Không có bộ Thảo (艹) ở trên đầu - nghĩa là Bên phải" },
              { char: "君", hanViet: "QUÂN", diff: "Bên trên là chữ Doãn (尹) thay vì bộ Thảo và nét phẩy - nghĩa là Cậu, bạn" }
            ],
            words: [
              { word: "若い", reading: "わかい", hanViet: "NHƯỢC", meaning: "Trẻ, trẻ tuổi", level: "N5", type: "kun" },
              { word: "若者", reading: "わかもの", hanViet: "NHƯỢC GIẢ", meaning: "Giới trẻ, thanh niên", level: "N4", type: "kun" },
              { word: "若々しい", reading: "わかわかしい", hanViet: "NHƯỢC", meaning: "Trẻ trung, tươi trẻ", level: "N4", type: "kun" },
              { word: "老若男女", reading: "ろうにゃくなんにょ", hanViet: "LÃO NHƯỢC NAM NỮ", meaning: "Già trẻ gái trai (mọi lứa tuổi)", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "この 町には 若い 人が たくさん 住んで います。",
                reading: "この まちには わかい ひとが たくさん すんで います。",
                vi: "Ở thị trấn này có rất nhiều người trẻ tuổi sinh sống."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "この 歌は 【若者】に とても にんきが あります。",
                target: "若者",
                answer: "わかもの",
                options: ["わかもの", "じゃくしゃ", "わかいもの", "くるもの"],
                hint: "Giới trẻ, người trẻ tuổi (NHƯỢC GIẢ)."
              },
              {
                type: "kanji",
                question: "母は ５０さいですが、とても 【わかく】 見えます。",
                target: "わかく",
                answer: "若く",
                options: ["若く", "苦く", "右く", "早く"],
                hint: "Trẻ trung (NHƯỢC)."
              }
            ]
          },
          {
            char: "集",
            hanViet: "TẬP",
            meaning: "Tập hợp, tụ tập, sưu tầm",
            strokes: 12,
            onyomi: ["シュウ"],
            kunyomi: ["あつ.まる", "あつ.める", "つど.う"],
            radical: "隹 (Chuy - Chim đuôi ngắn)",
            components: "隹 (Chuy - Đàn chim nhỏ) + 木 (Mộc - Cái cây)",
            mnemonic: "Đàn chim nhỏ (隹) cùng bay về đậu chung trên một cành cây (木) là TỤ TẬP, TẬP HỢP (集).",
            lookalikes: [
              { char: "進", hanViet: "TIẾN", diff: "Có bộ Sước (辶) thay vì bộ Mộc (木) ở dưới - nghĩa là Tiến lên" },
              { char: "準", hanViet: "CHUẨN", diff: "Bên trên có bộ Thủy (氵) và bên dưới là chữ Thập (十) - nghĩa là Chuẩn bị" }
            ],
            words: [
              { word: "集まる", reading: "あつまる", hanViet: "TẬP", meaning: "Tập hợp, tụ họp lại (tự động)", level: "N4", type: "kun" },
              { word: "集める", reading: "あつめる", hanViet: "TẬP", meaning: "Sưu tầm, thu thập, gom lại", level: "N4", type: "kun" },
              { word: "集合", reading: "しゅうごう", hanViet: "TẬP HỢP", meaning: "Tập hợp, điểm hẹn", level: "N4", type: "on" },
              { word: "募集", reading: "ぼしゅう", hanViet: "MỘ TẬP", meaning: "Tuyển dụng, chiêu mộ", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "金曜日の よる、駅の まえに みんなで 集まりましょう。",
                reading: "きんようびの よる、えきの まえに みんなで あつまりましょう。",
                vi: "Tối thứ Sáu, tất cả chúng ta hãy tập trung trước nhà ga nhé."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "わたしの しゅみは 世界の 切手を 【集める】 ことです。",
                target: "集める",
                answer: "あつめる",
                options: ["あつめる", "あつまる", "しゅうめる", "きめる"],
                hint: "Sưu tầm, thu thập (TẬP - tha động từ あつめる)."
              },
              {
                type: "kanji",
                question: "明日は 朝 ８時に 学校に 【しゅうごう】して ください。",
                target: "しゅうごう",
                answer: "集合",
                options: ["集合", "進合", "準合", "習合"],
                hint: "Tập hợp (TẬP HỢP)."
              }
            ]
          },
          {
            char: "知",
            hanViet: "TRI, TRÍ",
            meaning: "Biết, quen biết, trí tuệ",
            strokes: 8,
            onyomi: ["チ"],
            kunyomi: ["し.る", "し.らせる"],
            radical: "矢 (Thỉ - Mũi tên)",
            components: "矢 (Thỉ - Mũi tên) + 口 (Khẩu - Cái miệng)",
            mnemonic: "Hiểu rõ vấn đề nên miệng (口) trả lời nhanh và trúng đích như mũi tên bắn ra (矢) nghĩa là BIẾT (知).",
            lookalikes: [
              { char: "短", hanViet: "ĐOẢN", diff: "Bên phải là bộ Đậu (豆) thay vì bộ Khẩu (口) - nghĩa là Ngắn" },
              { char: "和", hanViet: "HÒA", diff: "Bên trái là bộ Hòa (禾 - cây lúa) thay vì bộ Thỉ (矢) - nghĩa là Hòa bình, Nhật Bản" }
            ],
            words: [
              { word: "知る", reading: "しる", hanViet: "TRI", meaning: "Biết", level: "N5", type: "kun" },
              { word: "知り合い", reading: "しりあい", hanViet: "TRI HỢP", meaning: "Người quen", level: "N4", type: "kun" },
              { word: "知らせる", reading: "しらせる", hanViet: "TRI", meaning: "Báo tin, thông báo cho biết", level: "N4", type: "kun" },
              { word: "お知らせ", reading: "おしらせ", hanViet: "TRI", meaning: "Thông báo, bản tin", level: "N4", type: "kun" },
              { word: "知識", reading: "ちしき", hanViet: "TRI THỨC", meaning: "Kiến thức, tri thức", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "パーティーで 新しい 友だちと たくさん 知り合いました。",
                reading: "パーティーで あたらしい ともだちと たくさん しりあいました。",
                vi: "Tôi đã làm quen được với rất nhiều người bạn mới tại buổi tiệc."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "かれは わたしの 大学の 【知り合い】です。",
                target: "知り合い",
                answer: "しりあい",
                options: ["しりあい", "ちりあい", "しあい", "ちあい"],
                hint: "Người quen (TRI HỢP)."
              },
              {
                type: "kanji",
                question: "田中さんの でんわばんごうを 【しって】 いますか。",
                target: "しって",
                answer: "知って",
                options: ["知って", "短って", "和って", "言って"],
                hint: "Biết (TRI)."
              }
            ]
          },
          {
            char: "酒",
            hanViet: "TỬU",
            meaning: "Rượu, đồ uống có cồn",
            strokes: 10,
            onyomi: ["シュ"],
            kunyomi: ["さけ", "さか"],
            radical: "酉 (Dậu - Bình rượu)",
            components: "氵 (Thủy - Nước, chất lỏng) + 酉 (Dậu - Vò ủ rượu)",
            mnemonic: "Chất lỏng thơm nồng (氵) được ủ lên men trong chiếc vò sành (酉) chính là RƯỢU (酒).",
            lookalikes: [
              { char: "配", hanViet: "PHỐI", diff: "Bên trái là bộ Dậu (酉) và bên phải là chữ Kỷ (己), không có bộ Thủy - nghĩa là Phân phát, lo lắng" },
              { char: "洗", hanViet: "TẨY", diff: "Bên phải là chữ Tiên (先) thay vì bộ Dậu (酉) - nghĩa là Rửa, giặt" }
            ],
            words: [
              { word: "お酒", reading: "おさけ", hanViet: "TỬU", meaning: "Rượu, bia (đồ uống có cồn)", level: "N5", type: "kun" },
              { word: "日本酒", reading: "にほんしゅ", hanViet: "NHẬT BẢN TỬU", meaning: "Rượu Sake Nhật Bản", level: "N4", type: "on" },
              { word: "居酒屋", reading: "いざかや", hanViet: "CƯ TỬU ỐC", meaning: "Quán nhậu kiểu Nhật", level: "N4", type: "kun" },
              { word: "酒屋", reading: "さかや", hanViet: "TỬU ỐC", meaning: "Cửa hàng bán rượu bia", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "二十さいに なってから、お酒を のむ ことが できます。",
                reading: "はたちに なってから、おさけを のむ ことが できます。",
                vi: "Sau khi bước sang tuổi 20 mới được phép uống rượu bia."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "父は あたたかい 【日本酒】が すきです。",
                target: "日本酒",
                answer: "にほんしゅ",
                options: ["にほんしゅ", "にほんさけ", "にほんざけ", "にっぽんさけ"],
                hint: "Rượu truyền thống của Nhật (NHẬT BẢN TỬU - đọc âm On)."
              },
              {
                type: "kanji",
                question: "車で 来たので、【おさけ】は 飲みません。",
                target: "おさけ",
                answer: "お酒",
                options: ["お酒", "お配", "お水", "お湯"],
                hint: "Rượu bia (TỬU)."
              }
            ]
          },
          {
            char: "歌",
            hanViet: "CA",
            meaning: "Bài hát, ca hát",
            strokes: 14,
            onyomi: ["カ"],
            kunyomi: ["うた", "うた.う"],
            radical: "欠 (Khiếm - Há miệng thổi hơi)",
            components: "哥 (Ca - Hai chữ Khả 可 chồng lên nhau) + 欠 (Khiếm - Há miệng lấy hơi)",
            mnemonic: "Hai cái miệng (可 + 可) cùng mở to lấy hơi ngân vang (欠) để CA HÁT (歌).",
            lookalikes: [
              { char: "飲", hanViet: "ẨM", diff: "Bên trái là bộ Thực (飠) thay vì hai chữ Khả (哥) - nghĩa là Uống" },
              { char: "歓", hanViet: "HOAN", diff: "Bên trái là bộ Chuy (隹) và thảo đầu - nghĩa là Hoan nghênh, vui mừng" }
            ],
            words: [
              { word: "歌", reading: "うた", hanViet: "CA", meaning: "Bài hát", level: "N5", type: "kun" },
              { word: "歌う", reading: "うたう", hanViet: "CA", meaning: "Hát", level: "N5", type: "kun" },
              { word: "歌手", reading: "かしゅ", hanViet: "CA THỦ", meaning: "Ca sĩ", level: "N4", type: "on" },
              { word: "国歌", reading: "こっか", hanViet: "QUỐC CA", meaning: "Quốc ca", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "合コンの あとで、みんなで カラオケへ 行って 歌を 歌いました。",
                reading: "ごうコンの あとで、みんなで カラオケへ いって うたを うたいました。",
                vi: "Sau buổi giao lưu kết bạn, mọi người cùng đi karaoke và hát hò."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "かの女は しょうらい 有名な 【歌手】に なりたい そうです。",
                target: "歌手",
                answer: "かしゅ",
                options: ["かしゅ", "うたしゅ", "うたて", "かて"],
                hint: "Ca sĩ (CA THỦ)."
              },
              {
                type: "kanji",
                question: "日本の 【うた】を じょうずに うたいますね。",
                target: "うた",
                answer: "歌",
                options: ["歌", "音", "声", "楽"],
                hint: "Bài hát (CA)."
              }
            ]
          },
          {
            char: "声",
            hanViet: "THANH",
            meaning: "Giọng nói, tiếng kêu (người và động vật)",
            strokes: 7,
            onyomi: ["セイ", "ショウ"],
            kunyomi: ["こえ"],
            radical: "士 (Sĩ - Kẻ sĩ, người học thức)",
            components: "士 (Sĩ - Người có học) + 尸 (Thi/Khẩu biến thể - Phát ra âm thanh)",
            mnemonic: "Kẻ sĩ (士) đứng trên bục dõng dạc cất cao GIỌNG NÓI (声) truyền cảm hứng cho mọi người.",
            lookalikes: [
              { char: "音", hanViet: "ÂM", diff: "Bên trên là bộ Lập (立) và bên dưới là bộ Nhật (日) - nghĩa là Âm thanh (của đồ vật, tự nhiên)" },
              { char: "売", hanViet: "MẠI", diff: "Bên dưới chữ Sĩ là bộ Mịch (冖) và chữ Nhi (儿) - nghĩa là Bán" }
            ],
            words: [
              { word: "声", reading: "こえ", hanViet: "THANH", meaning: "Giọng nói, tiếng nói", level: "N4", type: "kun" },
              { word: "大声", reading: "おおごえ", hanViet: "ĐẠI THANH", meaning: "Tiếng nói to, hét lớn", level: "N4", type: "kun" },
              { word: "話し声", reading: "はなしごえ", hanViet: "THOẠI THANH", meaning: "Tiếng trò chuyện", level: "N4", type: "kun" },
              { word: "声優", reading: "せいゆう", hanViet: "THANH ƯU", meaning: "Diễn viên lồng tiếng", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "うしろの 人にも 聞こえる ように、大きい 声で 話して ください。",
                reading: "うしろの ひとにも きこえる ように、おおきい こえで はなして ください。",
                vi: "Xin hãy nói to lên để những người ngồi phía sau cũng nghe thấy được."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "となりの へやから 【話し声】が 聞こえます。",
                target: "話し声",
                answer: "はなしごえ",
                options: ["はなしごえ", "はなしこえ", "わごえ", "はなしせい"],
                hint: "Tiếng nói chuyện (THOẠI THANH - biến âm thành ごえ)."
              },
              {
                type: "kanji",
                question: "あの 歌手は とても きれいな 【こえ】を して います。",
                target: "こえ",
                answer: "声",
                options: ["声", "音", "売", "吉"],
                hint: "Giọng hát / giọng nói (THANH)."
              }
            ]
          },
          {
            char: "楽",
            hanViet: "LẠC, NHẠC",
            meaning: "Vui vẻ, thoải mái, âm nhạc",
            strokes: 13,
            onyomi: ["ガク", "ラク"],
            kunyomi: ["たの.しい", "たの.しむ"],
            radical: "木 (Mộc - Cái cây, gỗ)",
            components: "白 (Bạch) + 幺 (Nhỏ/Chuông nhạc) + 木 (Mộc - Giá gỗ treo nhạc cụ)",
            mnemonic: "Những chiếc chuông nhỏ và trống trắng (白) gắn trên giá gỗ (木) tấu lên ÂM NHẠC làm lòng người VUI VẺ (楽).",
            lookalikes: [
              { char: "薬", hanViet: "DƯỢC", diff: "Có thêm bộ Thảo (艹 - cỏ cây) ở trên đầu - nghĩa là Thuốc" },
              { char: "親", hanViet: "THÂN", diff: "Bên trái là chữ Trăn (立+木) và bên phải là bộ Kiến (見) - nghĩa là Bố mẹ, thân thiết" }
            ],
            words: [
              { word: "音楽", reading: "おんがく", hanViet: "ÂM NHẠC", meaning: "Âm nhạc", level: "N5", type: "on" },
              { word: "楽しい", reading: "たのしい", hanViet: "LẠC", meaning: "Vui vẻ", level: "N5", type: "kun" },
              { word: "楽しむ", reading: "たのしむ", hanViet: "LẠC", meaning: "Tận hưởng, thưởng thức", level: "N4", type: "kun" },
              { word: "楽しみ", reading: "たのしみ", hanViet: "LẠC", meaning: "Niềm vui, sự mong chờ", level: "N4", type: "kun" },
              { word: "楽な", reading: "らくな", hanViet: "LẠC", meaning: "Nhàn hạ, thoải mái, dễ dàng", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "来週の りょこうを とても 楽しみに して います。",
                reading: "らいしゅうの りょこうを とても たのしみに して います。",
                vi: "Tôi đang rất háo hức mong chờ chuyến du lịch vào tuần tới."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "もう少し 【楽な】 しごとが したいです。",
                target: "楽な",
                answer: "らくな",
                options: ["らくな", "がくな", "たのしいな", "やくな"],
                hint: "Nhàn nhã, thoải mái (LẠC - đọc là らく)."
              },
              {
                type: "kanji",
                question: "きのうの パーティーは とても 【たのしかった】です。",
                target: "たのしかった",
                answer: "楽しかった",
                options: ["楽しかった", "薬しかった", "嬉しかった", "音しかった"],
                hint: "Đã rất vui (LẠC)."
              }
            ]
          }
        ]
      },
      {
        id: "6-3",
        number: 3,
        titleJp: "ラーメン屋",
        reading: "ラーメンや",
        titleVi: "Quán mì Ramen",
        kanjiList: [
          {
            char: "味",
            hanViet: "VỊ",
            meaning: "Hương vị, mùi vị, ý nghĩa",
            strokes: 8,
            onyomi: ["ミ"],
            kunyomi: ["あじ", "あじ.わう"],
            radical: "口 (Khẩu - Cái miệng)",
            components: "口 (Khẩu - Cái miệng) + 未 (Vị - Ngọn cây sum suê / Chưa)",
            mnemonic: "Dùng cái miệng (口) nếm thử trái cây trên cành (未) để cảm nhận MÙI VỊ, HƯƠNG VỊ (味).",
            lookalikes: [
              { char: "妹", hanViet: "MUỘI", diff: "Bên trái là bộ Nữ (女 - phụ nữ) thay vì bộ Khẩu (口) - nghĩa là Em gái" },
              { char: "未", hanViet: "VỊ", diff: "Không có bộ Khẩu (口) ở bên trái - nghĩa là Chưa (vị lai)" },
              { char: "末", hanViet: "MẠT", diff: "Không có bộ Khẩu và nét ngang trên dài hơn nét ngang dưới - nghĩa là Cuối cùng" }
            ],
            words: [
              { word: "味", reading: "あじ", hanViet: "VỊ", meaning: "Vị, hương vị", level: "N4", type: "kun" },
              { word: "意味", reading: "いみ", hanViet: "Ý VỊ", meaning: "Ý nghĩa", level: "N4", type: "on" },
              { word: "趣味", reading: "しゅみ", hanViet: "THÚ VỊ", meaning: "Sở thích", level: "N4", type: "on" },
              { word: "興味", reading: "きょうみ", hanViet: "HỨNG VỊ", meaning: "Hứng thú, sự quan tâm", level: "N4", type: "on" },
              { word: "味噌", reading: "みそ", hanViet: "VỊ TĂNG", meaning: "Tương Miso Nhật Bản", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "この ラーメンは スープの 味が とても いいです。",
                reading: "この ラーメンは スープの あじが とても いいです。",
                vi: "Món mì Ramen này có vị nước dùng rất ngon."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "この ことばの 【意味】を おしえて ください。",
                target: "意味",
                answer: "いみ",
                options: ["いみ", "いあじ", "おもいみ", "いまい"],
                hint: "Ý nghĩa (Ý VỊ)."
              },
              {
                type: "kanji",
                question: "あなたの 【しゅみ】は 何ですか。",
                target: "しゅみ",
                answer: "趣味",
                options: ["趣味", "趣妹", "趣未", "取味"],
                hint: "Sở thích (THÚ VỊ)."
              }
            ]
          },
          {
            char: "油",
            hanViet: "DU",
            meaning: "Dầu ăn, dầu mỏ, mỡ",
            strokes: 8,
            onyomi: ["ユ"],
            kunyomi: ["あぶら"],
            radical: "氵 (Thủy - Chất lỏng)",
            components: "氵 (Thủy - Chất lỏng) + 由 (Do - Chiếc bình có cổ nhô lên)",
            mnemonic: "Chất lỏng sánh mịn (氵) được chiết ra từ trong chiếc bình (由) để chiên xào chính là DẦU ĂN (油).",
            lookalikes: [
              { char: "由", hanViet: "DO", diff: "Không có bộ Thủy (氵) bên trái - nghĩa là Lý do, tự do" },
              { char: "酒", hanViet: "TỬU", diff: "Bên phải là bộ Dậu (酉) thay vì chữ Do (由) - nghĩa là Rượu" }
            ],
            words: [
              { word: "油", reading: "あぶら", hanViet: "DU", meaning: "Dầu, dầu ăn", level: "N4", type: "kun" },
              { word: "醤油", reading: "しょうゆ", hanViet: "TƯƠNG DU", meaning: "Nước tương (xì dầu)", level: "N4", type: "on" },
              { word: "石油", reading: "せきゆ", hanViet: "THẠCH DU", meaning: "Dầu mỏ, dầu hỏa", level: "N4", type: "on" },
              { word: "油断", reading: "ゆだん", hanViet: "DU ĐOẠN", meaning: "Lơ là, chủ quan, mất cảnh giác", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "フライパンに すこし 油を 入れて、やさいを いためます。",
                reading: "フライパンに すこし あぶらを いれて、やさいを いためます。",
                vi: "Cho một chút dầu ăn vào chảo rồi xào rau."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "てんぷらを つくる とき、【油】を たくさん つかいます。",
                target: "油",
                answer: "あぶら",
                options: ["あぶら", "ゆ", "みず", "しお"],
                hint: "Dầu ăn (DU)."
              },
              {
                type: "kanji",
                question: "おすしに 【しょうゆ】を すこし つけます。",
                target: "しょうゆ",
                answer: "醤油",
                options: ["醤油", "醤由", "醤酒", "醤湯"],
                hint: "Nước tương (TƯƠNG DU)."
              }
            ]
          },
          {
            char: "太",
            hanViet: "THÁI",
            meaning: "To, béo, dày, vĩ đại",
            strokes: 4,
            onyomi: ["タイ", "タ"],
            kunyomi: ["ふと.い", "ふと.る"],
            radical: "大 (Đại - To lớn)",
            components: "大 (Đại - To lớn) + 丶 (Chấm - Thêm một phần)",
            mnemonic: "Đã to lớn (大) lại còn ăn thêm một chút (丶) dưới bụng nên càng TO BÉO, MẬP MẠP (太).",
            lookalikes: [
              { char: "大", hanViet: "ĐẠI", diff: "Không có dấu chấm (丶) ở bên dưới - nghĩa là To lớn" },
              { char: "犬", hanViet: "KHUYỂN", diff: "Dấu chấm nằm ở góc trên bên phải thay vì ở dưới - nghĩa là Con chó" }
            ],
            words: [
              { word: "太い", reading: "ふとい", hanViet: "THÁI", meaning: "To, dày (sợi mì, cành cây, chân tay)", level: "N4", type: "kun" },
              { word: "太る", reading: "ふとる", hanViet: "THÁI", meaning: "Béo lên, tăng cân", level: "N4", type: "kun" },
              { word: "太陽", reading: "たいよう", hanViet: "THÁI DƯƠNG", meaning: "Mặt trời", level: "N4", type: "on" },
              { word: "太平洋", reading: "たいへいよう", hanViet: "THÁI BÌNH DƯƠNG", meaning: "Thái Bình Dương", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "さいきん あまい ものを 食べすぎて、すこし 太りました。",
                reading: "さいきん あまい ものを たべすぎて、すこし ふとりました。",
                vi: "Gần đây vì ăn quá nhiều đồ ngọt nên tôi đã béo lên một chút."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "わたしは 【太い】 めんの ラーメンが すきです。",
                target: "太い",
                answer: "ふとい",
                options: ["ふとい", "おおきい", "たいい", "ほそい"],
                hint: "Sợi to, dày (THÁI)."
              },
              {
                type: "kanji",
                question: "東の 空から 【たいよう】が のぼります。",
                target: "たいよう",
                answer: "太陽",
                options: ["太陽", "大陽", "犬陽", "本陽"],
                hint: "Mặt trời (THÁI DƯƠNG)."
              }
            ]
          },
          {
            char: "細",
            hanViet: "TẾ",
            meaning: "Thon nhỏ, mảnh mai, chi tiết",
            strokes: 11,
            onyomi: ["サイ"],
            kunyomi: ["ほそ.い", "ほそ.る", "こま.かい", "こま.か"],
            radical: "糸 (Mịch - Sợi chỉ)",
            components: "糸 (Mịch - Sợi chỉ) + 田 (Điền - Ô ruộng chia nhỏ)",
            mnemonic: "Sợi tơ chỉ (糸) mỏng manh dùng để kẻ chia ô ruộng (田) thành từng phần THON NHỎ, CHI TIẾT (細).",
            lookalikes: [
              { char: "組", hanViet: "TỔ", diff: "Bên phải là chữ Thả (且) thay vì bộ Điền (田) - nghĩa là Tổ đội, lắp ráp" },
              { char: "絵", hanViet: "HỘI", diff: "Bên phải là chữ Hội (会) thay vì bộ Điền (田) - nghĩa là Bức tranh" }
            ],
            words: [
              { word: "細い", reading: "ほそい", hanViet: "TẾ", meaning: "Thon, gầy, mảnh (sợi mì, đường, eo)", level: "N4", type: "kun" },
              { word: "細かい", reading: "こまかい", hanViet: "TẾ", meaning: "Nhỏ nhặt, chi tiết, tiền lẻ", level: "N4", type: "kun" },
              { word: "細長い", reading: "ほそながい", hanViet: "TẾ TRƯỜNG", meaning: "Thon dài", level: "N4", type: "kun" },
              { word: "詳細", reading: "しょうさい", hanViet: "TƯỜNG TẾ", meaning: "Chi tiết, cụ thể", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "すみません、いま 細かい お金が ありません。",
                reading: "すみません、いま こまかい おかねが ありません。",
                vi: "Xin lỗi, hiện tại tôi không có tiền lẻ."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "この 先は 道が 【細い】ですから、気をつけて ください。",
                target: "細い",
                answer: "ほそい",
                options: ["ほそい", "こまかい", "ふとい", "せまい"],
                hint: "Đường hẹp, thon nhỏ (TẾ - đọc là ほそい)."
              },
              {
                type: "kanji",
                question: "使い方は せつめいしょに 【こまかく】 書いて あります。",
                target: "こまかく",
                answer: "細かく",
                options: ["細かく", "組かく", "絵かく", "糸かく"],
                hint: "Một cách chi tiết, tỉ mỉ (TẾ)."
              }
            ]
          },
          {
            char: "皿",
            hanViet: "MÃNH",
            meaning: "Cái đĩa",
            strokes: 5,
            onyomi: ["ベイ"],
            kunyomi: ["さら"],
            radical: "皿 (Mãnh - Cái đĩa)",
            components: "皿 (Hình vẽ cái đĩa có các ngăn đựng thức ăn)",
            mnemonic: "Hình ảnh chiếc ĐĨA (皿) có vành xung quanh và đế phẳng đặt vững trên bàn ăn.",
            lookalikes: [
              { char: "血", hanViet: "HUYẾT", diff: "Có thêm một nét phẩy (ノ) ở trên đỉnh chữ Mãnh - nghĩa là Máu" },
              { char: "目", hanViet: "MỤC", diff: "Hình chữ nhật đứng thay vì hình chữ nhật nằm ngang - nghĩa là Con mắt" }
            ],
            words: [
              { word: "お皿", reading: "おさら", hanViet: "MÃNH", meaning: "Cái đĩa", level: "N4", type: "kun" },
              { word: "皿洗い", reading: "さらあらい", hanViet: "MÃNH TẨY", meaning: "Việc rửa bát đĩa", level: "N4", type: "kun" },
              { word: "小皿", reading: "こざら", hanViet: "TIỂU MÃNH", meaning: "Đĩa nhỏ", level: "N4", type: "kun" },
              { word: "灰皿", reading: "はいざら", hanViet: "HÔI MÃNH", meaning: "Gạt tàn thuốc lá", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "ぎょうざを 大きい お皿に ならべて ください。",
                reading: "ぎょうざを おおきい おさらに ならべて ください。",
                vi: "Hãy xếp há cảo ra chiếc đĩa lớn giúp tôi nhé."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "食後の 【皿洗い】は わたしの しごとです。",
                target: "皿洗い",
                answer: "さらあらい",
                options: ["さらあらい", "ざらあらい", "べいあらい", "ちあらい"],
                hint: "Rửa bát đĩa (MÃNH TẨY)."
              },
              {
                type: "kanji",
                question: "しろい 【おさら】を ５まい 買いました。",
                target: "おさら",
                answer: "お皿",
                options: ["お皿", "お血", "お目", "お四"],
                hint: "Cái đĩa (MÃNH)."
              }
            ]
          },
          {
            char: "飯",
            hanViet: "PHẠN",
            meaning: "Cơm, bữa ăn",
            strokes: 12,
            onyomi: ["ハン"],
            kunyomi: ["めし"],
            radical: "食 (Thực - Ăn)",
            components: "飠 (Thực - Đồ ăn) + 反 (Phản - Lật đi lật lại / Quay lại)",
            mnemonic: "Đồ ăn (飠) được xới đảo đi đảo lại (反) trong nồi và ăn lặp lại mỗi ngày chính là CƠM, BỮA ĂN (飯).",
            lookalikes: [
              { char: "飲", hanViet: "ẨM", diff: "Bên phải là bộ Khiếm (欠) thay vì chữ Phản (反) - nghĩa là Uống" },
              { char: "館", hanViet: "QUÁN", diff: "Bên phải là chữ Quan (官) thay vì chữ Phản (反) - nghĩa là Tòa nhà, hội quán" }
            ],
            words: [
              { word: "ご飯", reading: "ごはん", hanViet: "PHẠN", meaning: "Cơm, bữa ăn", level: "N5", type: "on" },
              { word: "朝ご飯", reading: "あさごはん", hanViet: "TRIỀU PHẠN", meaning: "Bữa sáng", level: "N5", type: "on" },
              { word: "昼ご飯", reading: "ひるごはん", hanViet: "TRÚ PHẠN", meaning: "Bữa trưa", level: "N5", type: "on" },
              { word: "晩ご飯", reading: "ばんごはん", hanViet: "VÃN PHẠN", meaning: "Bữa tối", level: "N5", type: "on" },
              { word: "炒飯", reading: "チャーハン", hanViet: "SAO PHẠN", meaning: "Cơm rang, cơm chiên", level: "N4", type: "on" }
            ],
            examples: [
              {
                jp: "ラーメンと いっしょに ご飯も たべました。",
                reading: "ラーメンと いっしょに ごはんも たべました。",
                vi: "Tôi đã ăn thêm cả cơm cùng với mì Ramen."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "きのうの 【晩ご飯】は カレーライスでした。",
                target: "晩ご飯",
                answer: "ばんごはん",
                options: ["ばんごはん", "ばんごめし", "よるごはん", "ばんめし"],
                hint: "Bữa cơm tối (VÃN PHẠN)."
              },
              {
                type: "kanji",
                question: "まいあさ かならず 【あさごはん】を 食べます。",
                target: "あさごはん",
                answer: "朝ご飯",
                options: ["朝ご飯", "朝ご飲", "朝ご館", "朝ご反"],
                hint: "Bữa sáng (TRIỀU PHẠN)."
              }
            ]
          },
          {
            char: "麦",
            hanViet: "MẠCH",
            meaning: "Lúa mì, lúa mạch",
            strokes: 7,
            onyomi: ["バク"],
            kunyomi: ["むぎ"],
            radical: "麦 (Mạch - Lúa mạch)",
            components: "𡗗 (Bông lúa vươn lên) + 夂 (Trĩ - Rễ bám sâu xuống đất)",
            mnemonic: "Cây lương thực có bông vươn cao ở trên (𡗗) và bộ rễ bám chắc ở dưới (夂) để làm bột mì và bia chính là LÚA MẠCH (麦).",
            lookalikes: [
              { char: "表", hanViet: "BIỂU", diff: "Bên dưới là bộ Y (衣 - áo) thay vì bộ Trĩ (夂) - nghĩa là Bề mặt, bảng biểu" },
              { char: "素", hanViet: "TỐ", diff: "Bên dưới là bộ Mịch (糸 - sợi chỉ) thay vì bộ Trĩ (夂) - nghĩa là Nguyên tố, mộc mạc" }
            ],
            words: [
              { word: "麦", reading: "むぎ", hanViet: "MẠCH", meaning: "Lúa mạch, lúa mì", level: "N4", type: "kun" },
              { word: "麦茶", reading: "むぎちゃ", hanViet: "MẠCH TRÀ", meaning: "Trà lúa mạch", level: "N4", type: "kun" },
              { word: "小麦粉", reading: "こむぎこ", hanViet: "TIỂU MẠCH PHẤN", meaning: "Bột mì", level: "N4", type: "kun" },
              { word: "そば・蕎麦", reading: "そば", hanViet: "KIỀU MẠCH", meaning: "Mì Soba (làm từ kiều mạch)", level: "N4", type: "kun" }
            ],
            examples: [
              {
                jp: "ラーメンの めんは 小麦粉から つくられます。",
                reading: "ラーメンの めんは こむぎこから つくられます。",
                vi: "Sợi mì Ramen được làm từ bột mì."
              }
            ],
            exercises: [
              {
                type: "reading",
                question: "日本の なつは つめたい 【麦茶】を よく のみます。",
                target: "麦茶",
                answer: "むぎちゃ",
                options: ["むぎちゃ", "ばくちゃ", "むぎさ", "こむぎちゃ"],
                hint: "Trà lúa mạch mát lành (MẠCH TRÀ)."
              },
              {
                type: "kanji",
                question: "パンや ケーキは 【こむぎこ】で つくります。",
                target: "こむぎこ",
                answer: "小麦粉",
                options: ["小麦粉", "小表粉", "小素粉", "小米粉"],
                hint: "Bột mì (TIỂU MẠCH PHẤN)."
              }
            ]
          }
        ]
      }
    ]
  }
);
