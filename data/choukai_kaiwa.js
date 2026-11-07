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


// ============================================================================
// CHẾ ĐỘ 3: HỘI THOẠI BẮT BẪY ĐỔI Ý (JLPT CHOUKAI MONDAI 1 & 2 — 課題理解・ポイント理解)
// ============================================================================
window.CHOUKAI_DIALOGUES = [
  {
    id: "dlg-101",
    chapterId: 1,
    lessonId: "1-3",
    mondaiType: "問題1（課題理解 — Nghe hiểu nhiệm vụ cần làm）",
    titleVi: "Chuẩn bị phòng họp ở công ty (Chữ 会議・室・用意・始)",
    settingJp: "会社で 女の人と 男の人が 話して います。男の人は このあと まず 何を しますか。",
    settingVi: "Ở công ty, người phụ nữ và người đàn ông đang nói chuyện. Người đàn ông sau đây trước tiên (まず) sẽ làm gì?",
    trapHint: "Chú ý từ khóa 「もう終わりました」(đã xong rồi) và 「その前に」(trước đó thì...).",
    turns: [
      {
        speaker: "F",
        name: "女の人 (Nữ)",
        jp: "佐藤さん、午後2時からの 会議の 用意は もう できましたか。",
        hira: "さとうさん、ごご にじからの かいぎの よういは もう できましたか。",
        vi: "Anh Sato ơi, việc chuẩn bị cho cuộc họp lúc 2 giờ chiều đã xong chưa?"
      },
      {
        speaker: "M",
        name: "男の人 (Nam)",
        jp: "はい、会議室の 掃除と いすを 並べるのは もう 終わりました。これから 資料を コピーします。",
        hira: "はい、かいぎしつの そうじと いすを ならべるのは もう おわりました。これから しりょうを こぴーします。",
        vi: "Vâng, việc dọn phòng họp và xếp ghế thì đã xong rồi. Bây giờ tôi sẽ đi photo tài liệu.",
        isTrap: true,
        trapNote: "Bẫy 1 & 2: Dọn phòng họp (掃除) và xếp ghế đã làm xong rồi (もう終わりました). Định đi photo tài liệu nhưng nghe tiếp câu sau!"
      },
      {
        speaker: "F",
        name: "女の人 (Nữ)",
        jp: "あ、資料は さっき 私が コピーして おきましたよ。それより、部長に 会議が 始まる 時間を 知らせて くれませんか。",
        hira: "あ、しりょうは さっき わたしが こぴーして おきましたよ。それより、ぶちょうに かいぎが はじまる じかんを しらせて くれませんか。",
        vi: "À, tài liệu thì lúc nãy tôi đã photo sẵn rồi. Thay vào đó (それより), anh báo cho Trưởng phòng giờ bắt đầu họp giúp tôi được không?",
        isKeyAnswer: true,
        keyNote: "Câu chốt đáp án: Người nữ đã photo sẵn rồi (コピーしておきました), và nhờ báo giờ họp cho Trưởng phòng (それより、部長に知らせて)."
      },
      {
        speaker: "M",
        name: "男の人 (Nam)",
        jp: "わかりました。すぐ 行って きます。",
        hira: "わかりました。すぐ いって きます。",
        vi: "Tôi hiểu rồi. Tôi đi báo ngay đây."
      }
    ],
    questionJp: "男の人は このあと まず 何を しますか。",
    options: [
      { jp: "会議室の いすを 並べる", vi: "Xếp ghế trong phòng họp (Sai — Đã làm xong)" },
      { jp: "会議の 資料を コピーする", vi: "Photo tài liệu cuộc họp (Sai — Người nữ đã làm sẵn)" },
      { jp: "部長に 会議の 時間を 知らせる", vi: "Báo giờ họp cho Trưởng phòng (Đúng — Câu chốt sau それより)" },
      { jp: "会議室を 掃除する", vi: "Dọn dẹp phòng họp (Sai — Đã làm xong)" }
    ],
    answerIndex: 2
  },
  {
    id: "dlg-201",
    chapterId: 2,
    lessonId: "2-2",
    mondaiType: "問題1（課題理解 — Mua đồ chuẩn bị bữa tối）",
    titleVi: "Đi siêu thị mua đồ nấu bữa tối (Chữ 買物・肉・野菜・魚)",
    settingJp: "家で 妻と 夫が 話して います。夫は スーパーで 何を 買いますか。",
    settingVi: "Ở nhà, người vợ và người chồng đang nói chuyện. Người chồng sẽ mua gì ở siêu thị?",
    trapHint: "Chú ý cái gì còn trong tủ lạnh (冷蔵庫にまだある) và cái gì đổi ý ở phút cuối (やっぱり).",
    turns: [
      {
        speaker: "F",
        name: "妻 (Vợ)",
        jp: "あなた、帰りに スーパーで 晩ご飯の 材料を 買って きて くれる？ 今夜は カレーに しようと 思って。",
        hira: "あなた、かえりに すーぱーで ばんごはんの ざいりょうを かって きて くれる？ こんやは かれーに しようと おもって。",
        vi: "Anh ơi, lúc về ghé siêu thị mua nguyên liệu nấu bữa tối giúp em nhé? Tối nay em định nấu món Cà-ri."
      },
      {
        speaker: "M",
        name: "夫 (Chồng)",
        jp: "いいよ。とり肉と 野菜を 買えば いい？",
        hira: "いいよ。とりにくと やさいを かえば いい？",
        vi: "Được chứ. Anh mua thịt gà và rau củ là được hả?",
        isTrap: true,
        trapNote: "Bẫy: Người chồng hỏi có phải mua cả thịt gà (とり肉) và rau củ (野菜) không."
      },
      {
        speaker: "F",
        name: "妻 (Vợ)",
        jp: "えっと、野菜は 冷蔵庫に まだ たくさん あるから いらないわ。とり肉だけ お願い。あ、それから 牛乳も なくなって いたから 1本 買って きて。",
        hira: "えっと、やさいは れいぞうこに まだ たくさん あるから いらないわ。とりにくだけ おねがい。あ、それから ぎゅうにゅうも なくなって いたから いっぽん かって きて。",
        vi: "À, rau củ trong tủ lạnh vẫn còn nhiều nên không cần đâu. Anh mua thịt gà thôi nhé. À, thêm nữa là sữa bò cũng hết rồi nên anh mua 1 hộp về nhé.",
        isKeyAnswer: true,
        keyNote: "Câu chốt đáp án: Rau không cần (いらない), chỉ mua thịt gà (とり肉) + thêm sữa bò (牛乳)."
      },
      {
        speaker: "M",
        name: "夫 (Chồng)",
        jp: "わかった。じゃあ、その 二つを 買って 帰るね。",
        hira: "わかった。じゃあ、その ふたつを かって かえるね。",
        vi: "Anh hiểu rồi. Vậy anh sẽ mua 2 thứ đó về nhé."
      }
    ],
    questionJp: "夫は スーパーで 何を 買いますか。",
    options: [
      { jp: "とり肉と 野菜", vi: "Thịt gà và rau củ (Sai — Rau còn nhiều trong tủ lạnh)" },
      { jp: "とり肉と 牛乳", vi: "Thịt gà và sữa bò (Đúng)" },
      { jp: "野菜と 牛乳", vi: "Rau củ và sữa bò (Sai)" },
      { jp: "とり肉だけ", vi: "Chỉ mỗi thịt gà (Sai — Thiếu sữa bò bổ sung sau chữ あ、それから)" }
    ],
    answerIndex: 1
  },
  {
    id: "dlg-301",
    chapterId: 3,
    lessonId: "3-1",
    mondaiType: "問題2（ポイント理解 — Nghe hiểu lý do / thời gian）",
    titleVi: "Gửi quà sinh nhật cho em gái (Chữ 送・届・誕生日・箱)",
    settingJp: "郵便局で 女の人と 局員が 話して います。荷物は いつ 届きますか。",
    settingVi: "Tại bưu điện, người phụ nữ và nhân viên bưu điện đang nói chuyện. Kiện hàng khi nào sẽ tới nơi?",
    trapHint: "Phân biệt giữa gửi thường (ふつう) và gửi nhanh (速達 - そくたつ) mà người phụ nữ chọn cuối cùng.",
    turns: [
      {
        speaker: "F",
        name: "女の人 (Nữ)",
        jp: "すみません、この 箱を 福岡の 妹に 送りたいんですが、ふつうで 送ると いつ 届きますか。",
        hira: "すみません、この はこを ふくおかの いもうとに おくりたいんですが、ふつうで おくると いつ とどきますか。",
        vi: "Xin lỗi, tôi muốn gửi chiếc hộp này cho em gái ở Fukuoka, nếu gửi thường thì khi nào tới nơi ạ?"
      },
      {
        speaker: "M",
        name: "局員 (Nhân viên)",
        jp: "今日は 水曜日ですから、ふつうなら あさって、金曜日の 午後に 届きます。急ぎなら、速達に すれば 明日の 午前中に 着きますよ。",
        hira: "きょうは すいようびですから、ふつうなら あさって、きんようびの ごごに とどきます。いそぎなら、そくたつに すれば あしたの ごぜんちゅうに つきますよ。",
        vi: "Hôm nay là thứ Tư nên gửi thường thì ngày kia — chiều thứ Sáu sẽ tới. Nếu gấp mà gửi chuyển phát nhanh thì trong sáng mai sẽ tới nơi đấy ạ.",
        isTrap: true,
        trapNote: "Bẫy thời gian: Thứ Tư (Hôm nay), Sáng Thứ Năm (Gửi nhanh), Chiều Thứ Sáu (Gửi thường)."
      },
      {
        speaker: "F",
        name: "女の人 (Nữ)",
        jp: "妹の 誕生日は 土曜日だから、金曜日でも 間に合うんですが… やっぱり 早く 届けたいので、速達で お願いします。",
        hira: "いもうとの たんじょうびは どようびだから、きんようびでも まにあうんですが… やっぱり はやく とどけたいので、そくたつで おねがいします。",
        vi: "Sinh nhật em gái tôi là thứ Bảy nên thứ Sáu cũng vẫn kịp... nhưng quả nhiên (やっぱり) tôi muốn gửi tới sớm nên cho tôi gửi chuyển phát nhanh (速達) nhé.",
        isKeyAnswer: true,
        keyNote: "Câu chốt: Nhờ từ khóa 「やっぱり…速達でお願いします」 → Hàng sẽ tới vào Sáng ngày mai (Thứ Năm)!"
      }
    ],
    questionJp: "荷物は いつ 届きますか。",
    options: [
      { jp: "水曜日の 午後", vi: "Chiều thứ Tư (Hôm nay)" },
      { jp: "木曜日の 午前中", vi: "Trong buổi sáng thứ Năm (Đúng — Vì chọn gửi 速達)" },
      { jp: "金曜日の 午後", vi: "Chiều thứ Sáu (Bẫy — Đây là nếu gửi thường)" },
      { jp: "土曜日の 午前中", vi: "Sáng thứ Bảy (Bẫy — Đây là ngày sinh nhật em gái)" }
    ],
    answerIndex: 1
  },
  {
    id: "dlg-401",
    chapterId: 4,
    lessonId: "4-1",
    mondaiType: "問題2（ポイント理解 — Hẹn giờ và địa điểm gặp mặt）",
    titleVi: "Đổi giờ và chỗ hẹn xem phim (Chữ 映画・待ち合わせ・時計・前)",
    settingJp: "男の人と 女の人が 電話で 明日の 映画に ついて 話して います。二人は 明日 どこで 会いますか。",
    settingVi: "Người đàn ông và người phụ nữ đang nói chuyện điện thoại về buổi xem phim ngày mai. Ngày mai hai người sẽ gặp nhau ở đâu?",
    trapHint: "Chú ý những địa điểm bị chê là đông người (人が多くて大変) và địa điểm chốt cuối cùng.",
    turns: [
      {
        speaker: "M",
        name: "男の人 (Nam)",
        jp: "明日の 映画、駅の 改札（かいさつ）の 前で 待ち合わせようか。",
        hira: "あしたの えいが、えきの かいさつの まえで まちあわせようか。",
        vi: "Buổi xem phim ngày mai, chúng mình hẹn gặp ở trước cửa soát vé nhà ga nhé?",
        isTrap: true,
        trapNote: "Bẫy 1: Trước cửa soát vé nhà ga (駅の改札の前) là đề xuất đầu tiên nhưng sắp bị bác bỏ."
      },
      {
        speaker: "F",
        name: "女の人 (Nữ)",
        jp: "うーん、日曜日は 駅の 改札は 人が 多くて 見つけるのが 大変だよ。映画館の 入り口は どう？",
        hira: "うーん、にちようびは えきの かいさつは ひとが おおくて みつけるのが たいへんだよ。えいがかんの いりぐちは どう？",
        vi: "Ừm, Chủ nhật ở cửa soát vé đông người lắm nên khó tìm nhau. Ở lối vào rạp chiếu phim thì sao?",
        isTrap: true,
        trapNote: "Bẫy 2: Lối vào rạp chiếu phim (映画館の入り口) do bạn nữ đề xuất."
      },
      {
        speaker: "M",
        name: "男の人 (Nam)",
        jp: "でも、切符は 私が 2枚とも 持って いるよ。先に 本屋の となりにある 喫茶店で お茶を 飲んでから いっしょに 映画館へ 行かない？",
        hira: "でも、きっぷは わたしが にまいとも もって いるよ。さきに ほんやの となりにある きっさてんで おちゃを のんでから いっしょに えいがかんへ いかない？",
        vi: "Nhưng mình đang cầm cả 2 tấm vé mà. Hay là gặp nhau uống trà ở quán giải khát cạnh hiệu sách trước rồi cùng đi tới rạp phim nhé?",
        isKeyAnswer: true,
        keyNote: "Đề xuất chốt: Quán giải khát (喫茶店) bên cạnh hiệu sách."
      },
      {
        speaker: "F",
        name: "女の人 (Nữ)",
        jp: "あ、いいね！じゃあ そこで 会おう。",
        hira: "あ、いいね！じゃあ そこで あおう。",
        vi: "À, hay đấy! Vậy gặp nhau ở đó nhé."
      }
    ],
    questionJp: "二人は 明日 どこで 会いますか。",
    options: [
      { jp: "駅の 改札の 前", vi: "Trước cửa soát vé nhà ga (Bẫy 1)" },
      { jp: "映画館の 入り口", vi: "Lối vào rạp chiếu phim (Bẫy 2)" },
      { jp: "本屋の 中", vi: "Bên trong hiệu sách (Bẫy 3 — Nghe nhầm 本屋のとなり)" },
      { jp: "本屋の となりの 喫茶店", vi: "Quán giải khát bên cạnh hiệu sách (Đúng)" }
    ],
    answerIndex: 3
  },
  {
    id: "dlg-501",
    chapterId: 5,
    lessonId: "5-2",
    mondaiType: "問題1（課題理解 — Phương tiện di chuyển đến sân bay）",
    titleVi: "Chọn phương tiện đi ra sân bay (Chữ 空港・乗・電車・バス)",
    settingJp: "ホテルで 男の人と 受付の 人が 話して います。男の人は 何で 空港へ 行きますか。",
    settingVi: "Tại khách sạn, người đàn ông và nhân viên lễ tân đang nói chuyện. Người đàn ông sẽ đi ra sân bay bằng phương tiện gì?",
    trapHint: "Lắng nghe kỹ lý do tại sao không đi tàu điện (乗り換えが大変) và tại sao không đi xe buýt (事故で遅れている).",
    turns: [
      {
        speaker: "M",
        name: "男の人 (Nam)",
        jp: "すみません、これから 空港へ 行きたいんですが、電車と バスと どちらが いいでしょうか。荷物が 2つ あって 重いんです。",
        hira: "すみません、これから くうこうへ いきたいんですが、でんしゃと ばすと どちらが いいでしょうか。にもつが ふたつ あって おもいんです。",
        vi: "Xin lỗi, bây giờ tôi muốn ra sân bay, đi tàu điện hay xe buýt thì tốt hơn ạ? Tôi có 2 kiện hành lý khá nặng."
      },
      {
        speaker: "F",
        name: "受付 (Lễ tân)",
        jp: "電車は 早くて 便利ですが、途中で 2回 乗り換えなければ なりません。ホテルの 前から 空港バスが 出て いますが、今日は 道の 事故で かなり 遅れて います。",
        hira: "でんしゃは はやくて べんりですが、とちゅうで にかい のりかえなければ なりません。ほてるの まえから くうこうばすが でて いますが、きょうは みちの じこで かなり おくれて います。",
        vi: "Tàu điện thì nhanh và tiện nhưng giữa đường phải đổi tàu 2 lần. Trước khách sạn có xe buýt sân bay nhưng hôm nay do tai nạn trên đường nên đang trễ khá nhiều.",
        isTrap: true,
        trapNote: "Bẫy: Tàu điện phải đổi chuyến 2 lần (nặng hành lý), còn xe buýt đang bị kẹt xe do tai nạn."
      },
      {
        speaker: "M",
        name: "男の人 (Nam)",
        jp: "そうですか。重い 荷物を 持って 乗り換えるのは 大変だし、飛行機の 時間も 近いから、タクシーを 呼んで もらえますか。",
        hira: "そうですか。おもい にもつを もって のりかえるのは たいへんだし、ひこうきの じかんも ちかいから、たくしーを よんで もらえますか。",
        vi: "Vậy sao. Mang hành lý nặng mà đổi tàu thì vất vả quá, giờ bay cũng sắp đến rồi nên cô gọi giúp tôi một chiếc taxi được không?",
        isKeyAnswer: true,
        keyNote: "Câu chốt: Nhờ gọi Taxi (タクシーを呼んでもらえますか)."
      }
    ],
    questionJp: "男の人は 何で 空港へ 行きますか。",
    options: [
      { jp: "電車（でんしゃ）", vi: "Tàu điện (Sai — Ngại đổi tàu 2 lần vì hành lý nặng)" },
      { jp: "空港バス", vi: "Xe buýt sân bay (Sai — Đang bị trễ do tai nạn)" },
      { jp: "タクシー", vi: "Taxi (Đúng)" },
      { jp: "ホテルの 車", vi: "Xe riêng của khách sạn (Không được nhắc tới)" }
    ],
    answerIndex: 2
  },
  {
    id: "dlg-601",
    chapterId: 6,
    lessonId: "6-1",
    mondaiType: "問題1（課題理解 — Chuẩn bị đi phỏng vấn làm thêm）",
    titleVi: "Mang gì khi đi phỏng vấn Arubaito (Chữ 写真・履歴書・印鑑・忘)",
    settingJp: "電話で 店長と 学生が 話して います。学生は 明日の 面接に 何を 持って 行きますか。",
    settingVi: "Qua điện thoại, cửa hàng trưởng và bạn sinh viên đang nói chuyện. Ngày mai đi phỏng vấn, bạn sinh viên sẽ mang theo những gì?",
    trapHint: "Chú ý món đồ không cần mang vào ngày mai (明日はいりません) và món đồ cần mang thêm.",
    turns: [
      {
        speaker: "M",
        name: "店長 (Quản lý)",
        jp: "では、明日の 午後3時に お店へ 面接に 来て ください。写真を はった 履歴書を 忘れないで くださいね。",
        hira: "では、あしたの ごご さんじに おみせへ めんせつに きて ください。しゃしんを はった りれきしょを わすれないで くださいね。",
        vi: "Vậy 3 giờ chiều mai em hãy đến quán để phỏng vấn nhé. Đừng quên mang sơ yếu lý lịch có dán ảnh nhé."
      },
      {
        speaker: "F",
        name: "学生 (Sinh viên)",
        jp: "はい。あのう、身分証明書（みぶんしょうめいしょ）の 学生証や ハンコも 持って 行った ほうが いいですか。",
        hira: "はい。あのう、みぶんしょうめいしょの がくせいしょうや はんこも もって いった ほうが いいですか。",
        vi: "Vâng ạ. À, em có nên mang theo thẻ sinh viên và con dấu (Hanko) không ạ?",
        isTrap: true,
        trapNote: "Bẫy: Sinh viên hỏi về cả Thẻ sinh viên (学生証) và Con dấu (ハンコ)."
      },
      {
        speaker: "M",
        name: "店長 (Quản lý)",
        jp: "学生証は 確認するので 持って 来て ください。ハンコは 採用が 決まってからで いいので、明日は いりませんよ。",
        hira: "がくせいしょうは かくにんするので もって きて ください。はんこは さいようが きまってからで いいので、あしたは いりませんよ。",
        vi: "Thẻ sinh viên thì cần kiểm tra nên em hãy mang theo nhé. Còn con dấu thì đợi sau khi trúng tuyển cũng được, ngày mai chưa cần đâu.",
        isKeyAnswer: true,
        keyNote: "Câu chốt: Mang Sơ yếu lý lịch dán ảnh (履歴書) + Thẻ sinh viên (学生証). Không cần con dấu."
      }
    ],
    questionJp: "学生は 明日の 面接に 何を 持って 行きますか。",
    options: [
      { jp: "履歴書だけ", vi: "Chỉ mỗi sơ yếu lý lịch" },
      { jp: "履歴書と 学生証", vi: "Sơ yếu lý lịch và Thẻ sinh viên (Đúng)" },
      { jp: "履歴書と ハンコ", vi: "Sơ yếu lý lịch và Con dấu" },
      { jp: "履歴書と 学生証と ハンコ", vi: "Cả 3 thứ (Bẫy — Con dấu ngày mai chưa cần)" }
    ],
    answerIndex: 1
  },
  {
    id: "dlg-701",
    chapterId: 7,
    lessonId: "7-2",
    mondaiType: "問題1（課題理解 — Cách uống thuốc tại hiệu thuốc）",
    titleVi: "Hướng dẫn uống thuốc tại hiệu thuốc (Chữ 薬・飲・食事・寝)",
    settingJp: "薬局で 女の人と 薬剤師が 話して います。女の人は 昼ご飯の あと、どの 薬を 飲みますか。",
    settingVi: "Tại hiệu thuốc, người phụ nữ và dược sĩ đang nói chuyện. Sau bữa trưa, người phụ nữ sẽ uống loại thuốc nào?",
    trapHint: "Câu hỏi chỉ hỏi 「昼ご飯のあと」(SAU BỮA TRƯA)! Chú ý phân biệt thuốc uống 3 bữa và thuốc chỉ uống trước khi ngủ.",
    turns: [
      {
        speaker: "M",
        name: "薬剤師 (Dược sĩ)",
        jp: "お薬は 全部で 3種類 あります。まず、この 白い 薬は のどの 痛みを とめる 薬で、朝・昼・晩の 食事の あとに 飲んで ください。",
        hira: "おくすりは ぜんぶで さんしゅるい あります。まず、この しろい くすりは のどの いたみを とめる くすりで、あさ・ひる・ばんの しょくじの あとに のんで ください。",
        vi: "Thuốc có tất cả 3 loại. Trước hết, thuốc màu trắng này trị đau họng, hãy uống sau bữa ăn sáng - trưa - tối.",
        isKeyAnswer: true,
        keyNote: "Thuốc trắng (白い薬): Uống sau ăn Sáng • Trưa • Tối → Có uống vào buổi trưa!"
      },
      {
        speaker: "M",
        name: "薬剤師 (Dược sĩ)",
        jp: "つぎに、この 青い 薬は 眠く なる ことが ありますから、昼は 飲まないで、朝と 晩だけ 食後に 飲んで ください。そして 黄色い 薬は 熱が 高い ときだけ 飲んで ください。",
        hira: "つぎに、この あおい くすりは ねむく なる ことが ありますから、ひるは のまないで、あさと ばんだけ しょくごに のんで ください。そして きいろい くすりは ねつが たかい ときだけ のんで ください。",
        vi: "Tiếp theo, thuốc màu xanh này có thể gây buồn ngủ nên buổi trưa đừng uống, chỉ uống sau bữa sáng và tối thôi. Còn thuốc màu vàng chỉ uống khi sốt cao.",
        isTrap: true,
        trapNote: "Bẫy: Thuốc xanh không uống buổi trưa (昼は飲まないで). Thuốc vàng chỉ uống khi sốt cao."
      },
      {
        speaker: "F",
        name: "女の人 (Nữ)",
        jp: "今は 熱は ありませんから、黄色い 薬は 飲まなくても いいですね。",
        hira: "いまは ねつは ありませんから、きいろい くすりは のまなくても いいですね。",
        vi: "Hiện giờ tôi không bị sốt nên chưa cần uống thuốc màu vàng nhỉ."
      }
    ],
    questionJp: "女の人は 今日の 昼ご飯の あと、どの 薬を 飲みますか。",
    options: [
      { jp: "白い 薬だけ", vi: "Chỉ uống thuốc màu trắng (Đúng)" },
      { jp: "白い 薬と 青い 薬", vi: "Thuốc trắng và thuốc xanh (Sai — Thuốc xanh không uống buổi trưa)" },
      { jp: "白い 薬と 黄色い 薬", vi: "Thuốc trắng và thuốc vàng (Sai — Hiện không bị sốt)" },
      { jp: "3種類 ぜんぶ", vi: "Cả 3 loại thuốc" }
    ],
    answerIndex: 0
  },
  {
    id: "dlg-801",
    chapterId: 8,
    lessonId: "8-2",
    mondaiType: "問題2（ポイント理解 — Lý do chọn địa điểm du lịch）",
    titleVi: "Lên kế hoạch du lịch kỳ nghỉ thu (Chữ 旅行・山・海・温泉)",
    settingJp: "男の人と 女の人が 秋の 旅行に ついて 話して います。二人は どうして 山の 旅館に 決めましたか。",
    settingVi: "Người đàn ông và người phụ nữ đang bàn về chuyến du lịch mùa thu. Tại sao hai người lại quyết định chọn Lữ quán trên núi?",
    trapHint: "Chú ý lý do thực sự khiến cả hai cùng đồng ý ở câu cuối.",
    turns: [
      {
        speaker: "M",
        name: "男の人 (Nam)",
        jp: "来月の 連休、海の 近くの ホテルへ 行かない？ 魚料理が おいしい そうだよ。",
        hira: "らいげつの れんきゅう、うみの ちかくの ほてるへ いかない？ さかなりょうりが おいしい そうだよ。",
        vi: "Kỳ nghỉ lễ tháng sau, mình đi khách sạn gần biển không? Nghe nói món cá ở đó ngon lắm.",
        isTrap: true,
        trapNote: "Bẫy: Món cá ngon (魚料理がおいしい) là của khách sạn gần biển, không phải lữ quán trên núi."
      },
      {
        speaker: "F",
        name: "女の人 (Nữ)",
        jp: "海は 夏にも 行った じゃない。秋は やっぱり 紅葉（もみじ）が きれいな 山の 旅館で、ゆっくり 温泉に 入りたいな。",
        hira: "うみは なつにも いった じゃない。あきは やっぱり もみじが きれいな やまの りょかんで、ゆっくり おんせんに はいりたいな。",
        vi: "Biển thì mùa hè mình cũng đi rồi mà. Mùa thu quả nhiên mình muốn đến lữ quán trên núi có lá đỏ đẹp và ngâm suối nước nóng thư giãn cơ."
      },
      {
        speaker: "M",
        name: "男の人 (Nam)",
        jp: "うーん、山の 旅館は 駅から 遠くて 不便だよ。あ、でも この 旅館の パンフレットを 見て！ 駅から 無料の バスが 出て いるし、静かな 温泉が 有名だって。ここに しよう！",
        hira: "うーん、やまの りょかんは えきから とおくて ふべんだよ。あ、でも この りょかんの ぱんふれっとを みて！ えきから むりょうの ばすが でて いるし、しずかな おんせんが ゆうめいだって。ここに しよう！",
        vi: "Ừm, lữ quán trên núi xa ga bất tiện lắm. À, nhưng nhìn tờ quảng cáo lữ quán này xem! Có xe buýt miễn phí từ nhà ga, lại nổi tiếng có suối nước nóng yên tĩnh nữa. Chọn chỗ này đi!",
        isKeyAnswer: true,
        keyNote: "Lý do chốt: Có xe buýt đưa đón miễn phí từ ga và có suối nước nóng (温泉)!"
      }
    ],
    questionJp: "二人は どうして この 山の 旅館に 決めましたか。",
    options: [
      { jp: "魚料理が おいしいから", vi: "Vì món cá ngon (Bẫy — Của khách sạn gần biển)" },
      { jp: "駅から 歩いて すぐ 行けるから", vi: "Vì đi bộ từ ga tới được ngay (Sai — Phải đi xe buýt miễn phí)" },
      { jp: "無料の バスが あり、温泉に 入れるから", vi: "Vì có xe buýt miễn phí và được tắm suối nước nóng (Đúng)" },
      { jp: "夏にも 行って よかったから", vi: "Vì mùa hè đã đi rồi và thấy thích (Bẫy — Mùa hè đi biển)" }
    ],
    answerIndex: 2
  },
  {
    id: "dlg-901",
    chapterId: 9,
    lessonId: "9-3",
    mondaiType: "問題1（課題理解 — Đăng ký lớp học văn hóa tại Nhật）",
    titleVi: "Đăng ký lớp học nấu ăn tại Trung tâm (Chữ 申込・料理・教室・払)",
    settingJp: "市民センターで 男の人と 係の人が 話して います。男の人は 今日 何を しなければ なりませんか。",
    settingVi: "Tại Trung tâm văn hóa thành phố, người đàn ông và nhân viên phụ trách đang nói chuyện. Hôm nay người đàn ông phải làm gì?",
    trapHint: "Phân biệt việc phải làm NGAY HÔM NAY (今日) và việc để đến ngày học đầu tiên (最初の授業の日) mới làm.",
    turns: [
      {
        speaker: "M",
        name: "男の人 (Nam)",
        jp: "すみません、来月から 始まる 日本料理の 教室に 申し込みたいんですが。",
        hira: "すみません、らいげつから はじまる にほんりょうりの きょうしつに もうしこみたいんですが。",
        vi: "Xin lỗi, tôi muốn đăng ký lớp học nấu món Nhật bắt đầu từ tháng sau ạ."
      },
      {
        speaker: "F",
        name: "係の人 (Nhân viên)",
        jp: "はい、ありがとうございます。では、こちらの 申込書に お名前と 住所、電話番号を 書いて 出して ください。",
        hira: "はい、ありがとうございます。では、こちらの もうしこみしょに おなまえと じゅうしょ、でんわばんごうを かいて だして ください。",
        vi: "Vâng, cảm ơn anh. Vậy anh hãy điền tên, địa chỉ và số điện thoại vào tờ đơn đăng ký này rồi nộp lại nhé.",
        isKeyAnswer: true,
        keyNote: "Việc phải làm hôm nay: Điền tên, địa chỉ, SĐT vào đơn đăng ký (申込書を書いて出す)."
      },
      {
        speaker: "M",
        name: "男の人 (Nam)",
        jp: "あのう、材料費の 2000円も 今日 払いますか。",
        hira: "あのう、ざいりょうひの にせんえんも きょう はらいますか。",
        vi: "À, tiền nguyên liệu 2000 yên có phải đóng hôm nay luôn không ạ?",
        isTrap: true,
        trapNote: "Bẫy: Tiền nguyên liệu 2000 yên."
      },
      {
        speaker: "F",
        name: "係の人 (Nhân viên)",
        jp: "いいえ、お金は 最初の 授業の 日に 先生に 払って ください。あと、その日は エプロンも 忘れないように 持って 来て くださいね。",
        hira: "いいえ、おかねは さいしょの じゅぎょうの ひに せんせいに はらって ください。あと、そのひは えぷろんも わすれないように もって きて くださいね。",
        vi: "Không ạ, tiền thì anh nộp cho giáo viên vào buổi học đầu tiên nhé. Ngoài ra hôm đó anh cũng đừng quên mang theo tạp dề nhé."
      }
    ],
    questionJp: "男の人は 今日 何を しなければ なりませんか。",
    options: [
      { jp: "申込書を 書いて 出す", vi: "Viết đơn đăng ký và nộp (Đúng)" },
      { jp: "申込書を 出して、2000円を 払う", vi: "Nộp đơn đăng ký và đóng 2000 yên (Bẫy — Tiền đóng vào buổi học đầu tiên)" },
      { jp: "2000円を 払って、エプロンを 買う", vi: "Đóng 2000 yên và mua tạp dề" },
      { jp: "先生に 電話を かける", vi: "Gọi điện thoại cho giáo viên" }
    ],
    answerIndex: 0
  }
];
