var url = 'http://saasan.github.io/imas/trainer-ticket-time/';

exports.month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

exports.countdownDay = '%(eventName)sまであと%(left)d日(%(month)s/%(date)d %(hour)d:%(minute)02d)';
exports.countdownHour = '%(eventName)sまであと%(left)d時間(%(month)s/%(date)d %(hour)d:%(minute)02d)';
exports.countdownMinute = '%(eventName)sまであと%(left)d分くらい(%(month)s/%(date)d %(hour)d:%(minute)02d)';

exports.scheduleMessages = [
// パターンA
`おはようございます！今日のトレチケタイムをお知らせします。
A、Eグループ：8、12、19時
B、Fグループ：9、13、20時
C、Gグループ：10、14、21時
D、Hグループ：11、15、22時
予定表：${ url }`,
// パターンB
`おはようございます！今日のトレチケタイムをお知らせします。
A、Eグループ：9、13、20時
B、Fグループ：10、14、21時
C、Gグループ：11、15、22時
D、Hグループ：8、12、19時
予定表：${ url }`,
// パターンC
`おはようございます！今日のトレチケタイムをお知らせします。
A、Eグループ：10、14、21時
B、Fグループ：11、15、22時
C、Gグループ：8、12、19時
D、Hグループ：9、13、20時
予定表：${ url }`,
// パターンD
`おはようございます！今日のトレチケタイムをお知らせします。
A、Eグループ：11、15、22時
B、Fグループ：8、12、19時
C、Gグループ：9、13、20時
D、Hグループ：10、14、21時
予定表：${ url }`
];

exports.groupTable = [
  ['A、E', 'D、H', 'C、G', 'B、F'],
  ['B、F', 'A、E', 'D、H', 'C、G'],
  ['C、G', 'B、F', 'A、E', 'D、H'],
  ['D、H', 'C、G', 'B、F', 'A、E']
];

exports.startSoon =
`【%(hours)d時】から【%(group)s】グループのトレチケタイムが始まります。
%(eventMessage)s予定表：` + url;

exports.weekDayMessages = [
// 日
`日曜日になりました。
【限定曲】
ススメ☆オトメ ～jewel parade～ (全タイプ)
アタシポンコツアンドロイド
Nation Blue
Orange Sapphire
ゴキゲンParty Night (全タイプ)
【ボーナスデー】
共通アイテム&マニー2倍`,
// 月
`月曜日になりました。
【限定曲】
ススメ☆オトメ ～jewel parade～ (全タイプ)
アタシポンコツアンドロイド
Nation Blue
Orange Sapphire
ゴキゲンParty Night (全タイプ)
【ボーナスデー】
全属性アイテム`,
// 火
`火曜日になりました。
【限定曲】
ススメ☆オトメ ～jewel parade～ (全タイプ)
アタシポンコツアンドロイド
Nation Blue
Orange Sapphire
ゴキゲンParty Night (全タイプ)
【ボーナスデー】
共通アイテム(ドレス、靴)`,
// 水
`水曜日になりました。
【限定曲】
ススメ☆オトメ ～jewel parade～ (キュート)
アタシポンコツアンドロイド
ゴキゲンParty Night (キュート)
【ボーナスデー】
キュートアイテム`,
// 木
`木曜日になりました。
【限定曲】
ススメ☆オトメ ～jewel parade～ (クール)
Nation Blue
ゴキゲンParty Night (クール)
【ボーナスデー】
クールアイテム`,
// 金
`金曜日になりました。
【限定曲】
ススメ☆オトメ ～jewel parade～ (パッション)
Orange Sapphire
ゴキゲンParty Night (パッション)
【ボーナスデー】
パッションアイテム`,
// 土
`土曜日になりました。
【限定曲】
ススメ☆オトメ ～jewel parade～ (全タイプ)
アタシポンコツアンドロイド
Nation Blue
Orange Sapphire
ゴキゲンParty Night (全タイプ)
【ボーナスデー】
全属性アイテム&マニー2倍`
];

