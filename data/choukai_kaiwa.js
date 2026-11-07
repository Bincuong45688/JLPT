// Dữ liệu Luyện Nghe Choukai (聴解) & Phản Xạ Hội Thoại Kaiwa (会話) N5 - N4
// Bám sát 9 Chương của giáo trình Kanji Master N4
window.CHOUKAI_MONDAI4 = [
  // CHƯƠNG 1: Gia đình, Chung cư & Công việc (Bài 1-1, 1-2, 1-3)
  {
    id: "m4-101",
    chapterId: 1,
    lessonId: "1-1",
    situationVi: "Đồng nghiệp hỏi thăm về gia đình (Chữ 家族・兄・姉)",
    speakerGender: "F",
    promptJp: "ご家族は どちらに 住んで いらっしゃいますか。",
    promptHira: "ごかぞくは どちらに すんで いらっしゃいますか。",
    promptVi: "Gia đình bạn đang sống ở đâu vậy?",
    options: [
      { jp: "はい、家族は 4人です。", hira: "はい、かぞくは よにん です。", vi: "Vâng, gia đình tôi có 4 người. (Sai vì hỏi どちら = ở đâu)" },
      { jp: "両親と 兄は 大阪に 住んで います。", hira: "りょうしんと あには おおさかに すんで います。", vi: "Bố mẹ và anh trai tôi đang sống ở Osaka." },
      { jp: "いいえ、まだ 結婚して いません。", hira: "いいえ、まだ けっこんして いません。", vi: "Không, tôi vẫn chưa kết hôn." }
    ],
    answerIndex: 1,
    kaiwaTip: "Trong Choukai & Kaiwa N4, 「どちら」 ngoài nghĩa 'cái nào' còn là cách hỏi lịch sự của 「どこ」(Ở đâu). 「いらっしゃいます」 là tôn kính ngữ của 「います」."
  },
  {
    id: "m4-102",
    chapterId: 1,
    lessonId: "1-2",
    situationVi: "Hỏi về việc chuyển nhà sang chung cư mới (Chữ 借・部屋・広)",
    speakerGender: "M",
    promptJp: "新しく 借りた マンションの 部屋、どう？",
    promptHira: "あたらしく かりた まんしょんの へや、どう？",
    promptVi: "Căn phòng chung cư cậu mới thuê thế nào?",
    options: [
      { jp: "駅から 近くて 広いから、とても 便利だよ。", hira: "えきから ちかくて ひろいから、とても べんりだよ。", vi: "Vì gần ga và rộng rãi nên tiện lợi lắm." },
      { jp: "来月 引っ越す つもりだよ。", hira: "らいげつ ひっこす つもりだよ。", vi: "Tháng sau mình định chuyển nhà. (Sai vì đã thuê rồi)" },
      { jp: "家賃を 払わなければ ならないよ。", hira: "やちんを はらわなければ ならないよ。", vi: "Phải trả tiền thuê nhà đấy." }
    ],
    answerIndex: 0,
    kaiwaTip: "Câu hỏi văn nói kết thúc bằng 「〜、どう？」 dùng để hỏi cảm nhận/đánh giá về một sự việc vừa trải nghiệm."
  },
  {
    id: "m4-103",
    chapterId: 1,
    lessonId: "1-3",
    situationVi: "Nhờ đồng nghiệp giúp công việc ở văn phòng (Chữ 仕事・急・始)",
    speakerGender: "F",
    promptJp: "すみません、この 仕事、急いで いるんですが、少し 手伝って もらえませんか。",
    promptHira: "すみません、この しごと、いそいで いるんですが、すこし てつだって もらえませんか。",
    promptVi: "Xin lỗi, công việc này đang gấp, bạn có thể phụ giúp mình một chút được không?",
    options: [
      { jp: "ええ、いいですよ。何を しましょうか。", hira: "ええ、いいですよ。なにを しましょうか。", vi: "Vâng, được chứ. Mình làm phần nào đây?" },
      { jp: "はい、もう 終わりましたよ。", hira: "はい、もう おわりましたよ。", vi: "Vâng, đã xong rồi ạ." },
      { jp: "こちらこそ、よろしく お願いします。", hira: "こちらこそ、よろしく おねがいします。", vi: "Chính tôi mới phải nhờ bạn." }
    ],
    answerIndex: 0,
    kaiwaTip: "Mẫu câu nhờ vả lịch sự trong công sở: 「〜んですが、〜てもらえませんか」. Cách nhận lời tự nhiên nhất trong Kaiwa là 「ええ、いいですよ。何をしましょうか」."
  },

  // CHƯƠNG 2: Cửa hàng tiện lợi, Mua sắm & Nhà hàng (Bài 2-1, 2-2, 2-3)
  {
    id: "m4-201",
    chapterId: 2,
    lessonId: "2-1",
    situationVi: "Nhân viên cửa hàng tiện lợi hỏi khi thanh toán (Chữ 弁当・温・袋)",
    speakerGender: "F",
    promptJp: "こちらの お弁当は 温めますか。",
    promptHira: "こちらの おべんとうは あたためますか。",
    promptVi: "Phần cơm hộp này quý khách có hâm nóng không ạ?",
    options: [
      { jp: "はい、お願いします。", hira: "はい、おねがいします。", vi: "Vâng, làm ơn hâm nóng giúp tôi." },
      { jp: "いいえ、袋は いりません。", hira: "いいえ、ふくろは いりません。", vi: "Không, tôi không cần túi nilon." },
      { jp: "はい、500円に なります。", hira: "はい、ごひゃくえんに なります。", vi: "Vâng, của quý khách hết 500 yên." }
    ],
    answerIndex: 0,
    kaiwaTip: "Câu Kaiwa kinh điển tại Combini Nhật Bản: 「お弁当は温めますか」(Có hâm nóng cơm hộp không?) và 「袋はおつけしますか」(Có lấy túi không?)."
  },
  {
    id: "m4-202",
    chapterId: 2,
    lessonId: "2-2",
    situationVi: "Hỏi nhân viên siêu thị về quầy bán hàng (Chữ 売場・品物・肉)",
    speakerGender: "M",
    promptJp: "あのう、とり肉の 売り場は どこですか。",
    promptHira: "あのう、とりにくの うりばは どこですか。",
    promptVi: "Xin lỗi, quầy bán thịt gà ở đâu vậy ạ?",
    options: [
      { jp: "あちらの 奥に ございます。", hira: "あちらの おくに ございます。", vi: "Ở phía bên trong đằng kia ạ." },
      { jp: "とり肉が いちばん 安いですよ。", hira: "とりにくが いちばん やすいですよ。", vi: "Thịt gà là rẻ nhất đấy." },
      { jp: "ぜんぶで 1000円で ございます。", hira: "ぜんぶで せんえんで ございます。", vi: "Tổng cộng hết 1000 yên ạ." }
    ],
    answerIndex: 0,
    kaiwaTip: "Trong Choukai N4, nhân viên cửa hàng thường dùng 「ございます」 (lịch sự của あります/です). 「奥（おく）」 là phía sâu bên trong."
  },
  {
    id: "m4-203",
    chapterId: 2,
    lessonId: "2-3",
    situationVi: "Rủ bạn đi ăn tối nhưng bạn bận (Chữ 食事・都合・悪)",
    speakerGender: "F",
    promptJp: "今晩、いっしょに 食事に 行きませんか。",
    promptHira: "こんばん、いっしょに しょくじに いきませんか。",
    promptVi: "Tối nay đi ăn cùng mình không?",
    options: [
      { jp: "すみません、今晩は ちょっと 都合が 悪くて…。", hira: "すみません、こんばんは ちょっと つごうが わるくて…。", vi: "Xin lỗi, tối nay mình hơi bận chút việc mất rồi..." },
      { jp: "ごちそうさまでした。", hira: "ごちそうさまでした。", vi: "Cảm ơn vì bữa ăn." },
      { jp: "ええ、とても おいしかったですね。", hira: "ええ、とても おいしかったですね。", vi: "Ừ, đã rất ngon nhỉ (Sai thì quá khứ)." }
    ],
    answerIndex: 0,
    kaiwaTip: "Cụm từ từ chối khéo quan trọng bậc nhất trong Choukai N4: 「ちょっと都合が悪くて…」(Tôi hơi kẹt/không tiện lắm...) hoặc chỉ lửng lơ 「今晩はちょっと…」."
  },

  // CHƯƠNG 3: Quà tặng, Bưu phẩm & Địa chỉ (Bài 3-1, 3-2, 3-3)
  {
    id: "m4-301",
    chapterId: 3,
    lessonId: "3-1",
    situationVi: "Gửi bưu phẩm tại bưu điện (Chữ 荷物・送・届)",
    speakerGender: "M",
    promptJp: "この 荷物を 明日までに 北海道へ 送りたいんですが。",
    promptHira: "この にもつを あしたまでに ほっかいどうへ おくりたいんですが。",
    promptVi: "Tôi muốn gửi kiện hàng này đến Hokkaido trước ngày mai...",
    options: [
      { jp: "それなら、速達（そくたつ）で 出した ほうが いいですよ。", hira: "それなら、そくたつで だした ほうが いいですよ。", vi: "Vậy thì quý khách nên gửi bằng chuyển phát nhanh (Sokutatsu)." },
      { jp: "はい、昨日 もう 届きましたよ。", hira: "はい、きのう もう とどきましたよ。", vi: "Vâng, hôm qua đã được giao đến nơi rồi." },
      { jp: "住所は 書かないで ください。", hira: "じゅうしょは かかないで ください。", vi: "Xin đừng viết địa chỉ." }
    ],
    answerIndex: 0,
    kaiwaTip: "Khi người nói kết thúc câu bằng 「〜たいんですが…」(Tôi muốn... nhưng không biết làm sao), người đáp sẽ đưa ra lời khuyên hoặc hướng dẫn 「それなら、〜たほうがいいですよ」."
  },
  {
    id: "m4-302",
    chapterId: 3,
    lessonId: "3-2",
    situationVi: "Tặng quà đặc sản sau chuyến đi (Chữ お土産・重・開)",
    speakerGender: "F",
    promptJp: "これ、京都の お土産です。どうぞ 召し上がって ください。",
    promptHira: "これ、きょうとの おみやげです。どうぞ めしあがって ください。",
    promptVi: "Đây là quà đặc sản Kyoto. Mời bạn thưởng thức nhé.",
    options: [
      { jp: "わあ、ありがとうございます。今 開けても いいですか。", hira: "わあ、ありがとうございます。いま あけても いいですか。", vi: "Ồ, cảm ơn bạn nhiều. Mình mở ra ngay bây giờ được không?" },
      { jp: "いいえ、どういたしまして。", hira: "いいえ、どういたしまして。", vi: "Không có chi ạ." },
      { jp: "気をつけて 行って きて くださいね。", hira: "きをつけて いって きて くださいね。", vi: "Bạn đi đường cẩn thận nhé." }
    ],
    answerIndex: 0,
    kaiwaTip: "「召し上がってください」(Mời anh/chị dùng) là tôn kính ngữ của 「食べてください / 飲んでください」."
  },

  // CHƯƠNG 4: Buổi hẹn hò, Thời trang & Kế hoạch (Bài 4-1, 4-2, 4-3)
  {
    id: "m4-401",
    chapterId: 4,
    lessonId: "4-1",
    situationVi: "Hẹn giờ gặp mặt ở nhà ga (Chữ 約束・遅・待)",
    speakerGender: "M",
    promptJp: "ごめん！電車が 遅れて いて、約束の 時間に 10分ぐらい 遅れそうなんだ。",
    promptHira: "ごめん！でんしゃが おくれて いて、やくそくの じかんに じゅっぷんぐらい おくれそうなんだ。",
    promptVi: "Xin lỗi nhé! Tàu đang bị trễ nên có vẻ mình sẽ muộn giờ hẹn khoảng 10 phút.",
    options: [
      { jp: "だいじょうぶだよ。駅前の カフェで 待って るね。", hira: "だいじょうぶだよ。えきまえの かふぇで まって るね。", vi: "Không sao đâu. Mình đợi ở quán cafe trước ga nhé." },
      { jp: "うん、きのう 約束した よね。", hira: "うん、きのう やくそくした よね。", vi: "Ừ, hôm qua đã hẹn rồi nhỉ." },
      { jp: "電車は とても 速かったよ。", hira: "でんしゃは とても はやかったよ。", vi: "Tàu điện đã chạy rất nhanh." }
    ],
    answerIndex: 0,
    kaiwaTip: "Trong văn nói thân mật: 「待っているね」 thường rút gọn chữ い thành 「待ってるね」. 「遅れそう」 = có vẻ sắp bị muộn."
  },
  {
    id: "m4-402",
    chapterId: 4,
    lessonId: "4-2",
    situationVi: "Thử quần áo tại cửa hàng thời trang (Chữ 着・服・色)",
    speakerGender: "F",
    promptJp: "すみません、この 青い シャツ、着て みても いいですか。",
    promptHira: "すみません、この あおい しゃつ、きて みても いいですか。",
    promptVi: "Xin lỗi, chiếc áo sơ mi màu xanh này tôi mặc thử xem có được không ạ?",
    options: [
      { jp: "はい、どうぞ。試着室（しちゃくしつ）は あちらです。", hira: "はい、どうぞ。しちゃくしつは あちらです。", vi: "Vâng, xin mời ạ. Phòng thử đồ ở phía đằng kia." },
      { jp: "いいえ、他の 色は ございません。", hira: "いいえ、ほかの いろは ございません。", vi: "Không, không có màu khác ạ." },
      { jp: "よく 似合って いますね。", hira: "よく にあって いますね。", vi: "Trông rất hợp với quý khách (Sai vì khách chưa mặc thử)." }
    ],
    answerIndex: 0,
    kaiwaTip: "Mẫu câu 「〜てみてもいいですか」 (Tôi thử làm ~ được không?) rất hay dùng khi mua sắm quần áo (着てみる), giày dép (履いてみる)."
  },

  // CHƯƠNG 5: Bản đồ, Giao thông & Du lịch (Bài 5-1, 5-2, 5-3)
  {
    id: "m4-501",
    chapterId: 5,
    lessonId: "5-1",
    situationVi: "Hỏi đường đi đến thư viện/ngân hàng (Chữ 通・曲・橋)",
    speakerGender: "F",
    promptJp: "すみません、市役所へ 行きたいんですが、この 道を まっすぐ ですか。",
    promptHira: "すみません、しやくしょへ いきたいんですが、この みちを まっすぐ ですか。",
    promptVi: "Xin lỗi, tôi muốn đến Tòa thị chính, cứ đi thẳng con đường này phải không ạ?",
    options: [
      { jp: "ええ、橋を 渡って、二つ目の 角を 右へ 曲がって ください。", hira: "ええ、はしを わたって、ふたつめの かどを みぎへ まがって ください。", vi: "Vâng, băng qua cầu rồi rẽ phải ở ngã rẽ thứ hai nhé." },
      { jp: "市役所は 5時に 閉まりますよ。", hira: "しやくしょは ごじに しまりますよ。", vi: "Tòa thị chính đóng cửa lúc 5 giờ đấy." },
      { jp: "バスで 20分ぐらい かかります。", hira: "ばすで にじゅっぷんぐらい かかります。", vi: "Đi xe buýt mất khoảng 20 phút." }
    ],
    answerIndex: 0,
    kaiwaTip: "Từ vựng chỉ đường luôn xuất hiện trong Choukai N4: 「橋を渡る」(Qua cầu), 「角を右へ曲がる」(Rẽ phải ở góc đường), 「突き当たり」(Cuối đường)."
  },
  {
    id: "m4-502",
    chapterId: 5,
    lessonId: "5-2",
    situationVi: "Hỏi về chuyến tàu tốc hành tại nhà ga (Chữ 乗換・急行・止)",
    speakerGender: "M",
    promptJp: "あのう、この 急行電車は みどり駅に 止まりますか。",
    promptHira: "あのう、この きゅうこうでんしゃは みどりえきに とまりますか。",
    promptVi: "Xin lỗi, chuyến tàu tốc hành này có dừng ở ga Midori không ạ?",
    options: [
      { jp: "いいえ、止まりませんから、つぎの 普通電車に 乗って ください。", hira: "いいえ、とまりませんから、つぎの ふつうでんしゃに のって ください。", vi: "Không, nó không dừng đâu nên bạn hãy đi chuyến tàu thường tiếp theo nhé." },
      { jp: "はい、3番線の ホームですよ。", hira: "はい、さんばんせんの ほーむですよ。", vi: "Vâng, ở sân ga số 3 đấy ạ." },
      { jp: "ええ、もう 出発しましたよ。", hira: "ええ、もう しゅっぱつしましたよ。", vi: "Vâng, tàu đã xuất phát rồi." }
    ],
    answerIndex: 0,
    kaiwaTip: "Phân biệt các loại tàu trong đề nghe: 「普通（各駅停車）」(Tàu thường dừng mọi ga) vs 「急行」(Tốc hành) vs 「特急」(Đặc biệt tốc hành)."
  },

  // CHƯƠNG 6: Tuyển dụng, Làm thêm & Trường học (Bài 6-1, 6-2, 6-3)
  {
    id: "m4-601",
    chapterId: 6,
    lessonId: "6-1",
    situationVi: "Gọi điện ứng tuyển làm thêm (Chữ 募集・経験・面接)",
    speakerGender: "F",
    promptJp: "アルバイトの 募集を 見て お電話したんですが、まだ 募集して いますか。",
    promptHira: "あるばいとの ぼしゅうを みて おでんわしたんですが、まだ ぼしゅうして いますか。",
    promptVi: "Tôi gọi điện vì thấy thông báo tuyển làm thêm, không biết bên mình còn tuyển không ạ?",
    options: [
      { jp: "はい。では、明日 履歴書を 持って 面接に 来て いただけますか。", hira: "はい。では、あした りれきしょを もって めんせつに きて いただけますか。", vi: "Còn ạ. Vậy ngày mai bạn mang sơ yếu lý lịch đến phỏng vấn được không?" },
      { jp: "いいえ、アルバイトの 経験は ありません。", hira: "いいえ、あるばいとの けいけんは ありません。", vi: "Không, tôi chưa có kinh nghiệm làm thêm." },
      { jp: "時給は 1100円に なります。", hira: "じきゅうは せんひゃくえんに なります。", vi: "Lương theo giờ là 1100 yên." }
    ],
    answerIndex: 0,
    kaiwaTip: "Câu mở đầu khi gọi điện xin việc/hỏi thông tin ở Nhật: 「〜を見てお電話したんですが…」(Tôi thấy thông báo ~ nên gọi điện...)."
  },
  {
    id: "m4-602",
    chapterId: 6,
    lessonId: "6-2",
    situationVi: "Quên mang tài liệu/bài tập đến lớp (Chữ 忘・宿題・貸)",
    speakerGender: "M",
    promptJp: "あ、大変！今日の 宿題、家に 忘れて きちゃった！",
    promptHira: "あ、たいへん！きょうの しゅくだい、いえに わすれて きちゃった！",
    promptVi: "Ôi thôi chết! Bài tập hôm nay mình lỡ để quên ở nhà mất rồi!",
    options: [
      { jp: "先生に すぐ 話して、明日 出したら どう？", hira: "せんせいに すぐ はなして、あした だしたら どう？", vi: "Cậu thử nói ngay với thầy giáo rồi ngày mai nộp xem sao?" },
      { jp: "宿題は とても 難しかったね。", hira: "しゅくだいは とても むずかしかったね。", vi: "Bài tập đã rất khó nhỉ." },
      { jp: "うん、忘れないように するよ。", hira: "うん、わすれないように するよ。", vi: "Ừ, mình sẽ cố gắng không quên." }
    ],
    answerIndex: 0,
    kaiwaTip: "Khẩu ngữ cực kỳ phổ biến trong Choukai: 「忘れてきてしまった」 rút gọn thành 「忘れてきちゃった」(Lỡ để quên mất rồi). 「〜たらどう？」 là câu gợi ý."
  },

  // CHƯƠNG 7: Sức khỏe, Bệnh viện & Bốn mùa (Bài 7-1, 7-2, 7-3)
  {
    id: "m4-701",
    chapterId: 7,
    lessonId: "7-1",
    situationVi: "Hỏi thăm sức khỏe đồng nghiệp sau khi ốm (Chữ 病気・治・薬)",
    speakerGender: "F",
    promptJp: "田中さん、風邪の 具合は いかがですか。もう 治りましたか。",
    promptHira: "たなかさん、かぜの ぐあいは いかがですか。もう なおりましたか。",
    promptVi: "Anh Tanaka ơi, tình hình cảm cúm thế nào rồi ạ? Đã khỏi chưa ạ?",
    options: [
      { jp: "おかげさまで、熱も 下がって すっかり 元気に なりました。", hira: "おかげさまで、ねつも さがって すっかり げんきに なりました。", vi: "Nhờ trời (cảm ơn bạn), tôi cũng hạ sốt và khỏe hẳn rồi." },
      { jp: "お大事に して くださいね。", hira: "おだいじに して くださいね。", vi: "Hãy giữ gìn sức khỏe nhé (Câu này chỉ dùng để chúc người đang ốm)." },
      { jp: "薬を 飲まない ほうが いいですよ。", hira: "くすりを のまない ほうが いいですよ。", vi: "Không nên uống thuốc đâu." }
    ],
    answerIndex: 0,
    kaiwaTip: "Khi được hỏi thăm sức khỏe đã đỡ chưa, người Nhật luôn đáp lại bằng 「おかげさまで、〜」(Nhờ phúc của anh/chị mà tôi đã khỏe)."
  },
  {
    id: "m4-702",
    chapterId: 7,
    lessonId: "7-2",
    situationVi: "Bác sĩ dặn dò ở phòng khám (Chữ 病院・熱・痛)",
    speakerGender: "M",
    promptJp: "まだ 熱が ありますから、今日と 明日は お風呂に 入らないで くださいね。",
    promptHira: "まだ ねつが ありますから、きょうと あしたは おふろに はいらないで くださいね。",
    promptVi: "Vì vẫn còn sốt nên hôm nay và ngày mai bạn đừng tắm bồn nhé.",
    options: [
      { jp: "わかりました。シャワーも だめですか。", hira: "わかりました。しゃわーも だめですか。", vi: "Vâng tôi hiểu rồi ạ. Tắm vòi sen nhanh cũng không được sao ạ?" },
      { jp: "はい、毎日 入るように します。", hira: "はい、まいにち はいるように します。", vi: "Vâng, tôi sẽ cố gắng tắm mỗi ngày." },
      { jp: "いいえ、頭は 痛く ありません。", hira: "いいえ、あたまは いたく ありません。", vi: "Không, đầu tôi không đau." }
    ],
    answerIndex: 0,
    kaiwaTip: "Sau lời dặn 「〜ないでくださいね」, người bệnh xác nhận 「わかりました」 và hỏi thêm chi tiết liên quan."
  },

  // CHƯƠNG 8: Thời tiết, Tin tức & Du lịch (Bài 8-1, 8-2, 8-3)
  {
    id: "m4-801",
    chapterId: 8,
    lessonId: "8-1",
    situationVi: "Nói chuyện về dự báo thời tiết trước khi ra ngoài (Chữ 天気・雨・降)",
    speakerGender: "F",
    promptJp: "天気予報に よると、午後から 強い 雨が 降る そうですよ。",
    promptHira: "てんきよほうに よると、ごごから つよい あめが ふる そうですよ。",
    promptVi: "Theo dự báo thời tiết thì nghe nói từ chiều sẽ có mưa to đấy.",
    options: [
      { jp: "じゃあ、傘を 持って 行かなきゃ いけないね。", hira: "じゃあ、かさを もって いかなきゃ いけないね。", vi: "Vậy thì phải mang theo ô đi rồi nhỉ." },
      { jp: "ええ、いい 天気に なって よかったですね。", hira: "ええ、いい てんきに なって よかったですね。", vi: "Vâng, thời tiết đẹp lên thật tốt quá." },
      { jp: "きのうも たくさん 降りましたからね。", hira: "きのうも たくさん ふりましたからね。", vi: "Vì hôm qua cũng mưa nhiều mà." }
    ],
    answerIndex: 0,
    kaiwaTip: "Rút gọn văn nói cực hay gặp trong đề Choukai N4: 「行かなければいけない」 → 「行かなきゃ（いけない）」(Phải đi / Phải mang theo)."
  },
  {
    id: "m4-802",
    chapterId: 8,
    lessonId: "8-2",
    situationVi: "Đặt phòng khách sạn cho chuyến du lịch (Chữ 旅行・予約・旅館)",
    speakerGender: "M",
    promptJp: "来週の 旅行、旅館の 予約は もう して おいた？",
    promptHira: "らいしゅうの りょこう、りょかんの よやくは もう して おいた？",
    promptVi: "Chuyến du lịch tuần sau, cậu đã đặt trước lữ quán (Ryokan) sẵn chưa?",
    options: [
      { jp: "うん、きのう インターネットで 予約して おいたよ。", hira: "うん、きのう いんたーねっとで よやくして おいたよ。", vi: "Ừ, hôm qua mình đã đặt sẵn trên mạng rồi." },
      { jp: "ううん、とても いい 旅館だったよ。", hira: "ううん、とても いい りょかんだったよ。", vi: "Không, đã là một lữ quán rất tuyệt (Sai thì)." },
      { jp: "来週 予約する つもりだったのに。", hira: "らいしゅう よやくする つもりだったのに。", vi: "Tuần sau định đặt mà." }
    ],
    answerIndex: 0,
    kaiwaTip: "Mẫu 「〜ておく」 (Làm sẵn để chuẩn bị trước) trong văn nói rất hay rút gọn thành 「〜とく / 〜といた」(予約しといたよ)."
  },

  // CHƯƠNG 9: Cuộc sống tại Nhật, Quy tắc & Ngày nghỉ (Bài 9-1, 9-2, 9-3)
  {
    id: "m4-901",
    chapterId: 9,
    lessonId: "9-1",
    situationVi: "Hỏi về quy định phân loại rác tại khu nhà (Chữ 燃・曜・出)",
    speakerGender: "F",
    promptJp: "すみません、燃える ゴミは 何曜日に 出せば いいですか。",
    promptHira: "すみません、もえる ごみは なんようびに だせば いいですか。",
    promptVi: "Xin lỗi, rác cháy được thì đổ vào thứ mấy trong tuần là được ạ?",
    options: [
      { jp: "火曜日と 金曜日の 朝8時までに 出して ください。", hira: "かようびと きんようびの あさ はちじまでに だして ください。", vi: "Hãy mang ra trước 8 giờ sáng thứ Ba và thứ Sáu nhé." },
      { jp: "はい、あそこに ゴミ箱が ありますよ。", hira: "はい、あそこに ごみばこが ありますよ。", vi: "Vâng, đằng kia có thùng rác đấy." },
      { jp: "いいえ、燃えない ゴミは 水曜日です。", hira: "いいえ、もえない ごみは すいようびです。", vi: "Không, rác không cháy được là thứ Tư." }
    ],
    answerIndex: 0,
    kaiwaTip: "Mẫu hỏi xin chỉ dẫn trong Kaiwa: 「〜は何曜日に出せばいいですか」(Nên đổ vào thứ mấy?). Chú ý giới hạn thời gian 「朝8時までに」(Trước 8h sáng)."
  },
  {
    id: "m4-902",
    chapterId: 9,
    lessonId: "9-2",
    situationVi: "Xin phép về trước tại công ty (Chữ 帰・残・先)",
    speakerGender: "M",
    promptJp: "お先に 失礼します。まだ 仕事が 残って いるんですか。",
    promptHira: "おさきに しつれいします。まだ しごとが のこって いるんですか。",
    promptVi: "Tôi xin phép về trước ạ. Anh vẫn còn việc chưa xong sao?",
    options: [
      { jp: "お疲れ様でした。ええ、あと 30分ぐらいで 帰ります。", hira: "おつかれさまでした。ええ、あと さんじゅっぷんぐらいで かえります。", vi: "Chào bạn, bạn vất vả rồi. Ừ, khoảng 30 phút nữa tôi cũng về." },
      { jp: "はい、お先に どうぞ。", hira: "はい、おさきに どうぞ。", vi: "Vâng, mời đi trước." },
      { jp: "いいえ、明日 休みを とります。", hira: "いいえ、あした やすみを とります。", vi: "Không, ngày mai tôi xin nghỉ." }
    ],
    answerIndex: 0,
    kaiwaTip: "Cặp câu chào bất hủ nơi công sở Nhật: Người về trước nói 「お先に失礼します」, người ở lại đáp 「お疲れ様でした / お疲れ様です」."
  }
];
