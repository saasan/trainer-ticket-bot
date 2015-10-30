var url = 'http://saasan.github.io/imas/trainer-ticket-time/';

exports.month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

exports.countdownDay = '%(eventName)sまであと%(left)d日(%(month)s/%(date)d %(hour)d:%(minute)02d)';
exports.countdownHour = '%(eventName)sまであと%(left)d時間(%(month)s/%(date)d %(hour)d:%(minute)02d)';
exports.countdownMinute = '%(eventName)sまであと%(left)d分くらい(%(month)s/%(date)d %(hour)d:%(minute)02d)';

exports.scheduleMessages = [
// パターンA
`今日のトレチケタイム
A、Eグループ：8、12、19時
B、Fグループ：9、13、20時
C、Gグループ：10、14、21時
D、Hグループ：11、15、22時
`,
// パターンB
`今日のトレチケタイム
A、Eグループ：9、13、20時
B、Fグループ：10、14、21時
C、Gグループ：11、15、22時
D、Hグループ：8、12、19時
`,
// パターンC
`今日のトレチケタイム
A、Eグループ：10、14、21時
B、Fグループ：11、15、22時
C、Gグループ：8、12、19時
D、Hグループ：9、13、20時
`,
// パターンD
`今日のトレチケタイム
A、Eグループ：11、15、22時
B、Fグループ：8、12、19時
C、Gグループ：9、13、20時
D、Hグループ：10、14、21時
`
];

exports.groupTable = [
  ['A、E', 'D、H', 'C、G', 'B、F'],
  ['B、F', 'A、E', 'D、H', 'C、G'],
  ['C、G', 'B、F', 'A、E', 'D、H'],
  ['D、H', 'C、G', 'B、F', 'A、E']
];

exports.startSoon =
`【%(hours)d時】から【%(group)s】グループのトレチケタイムが始まります。
%(eventMessage)s今日のトレチケタイム：` + url;

exports.weekDayMessages = [
  /* 日 */ 'ススメオトメ：全タイプ\nボーナスデー：共通アイテム&マニー2倍\n' + url,
  /* 月 */ 'ススメオトメ：全タイプ\nボーナスデー：全属性アイテム\n' + url,
  /* 火 */ 'ススメオトメ：全タイプ\nボーナスデー：共通アイテム(ドレス、靴)\n' + url,
  /* 水 */ 'ススメオトメ：キュート\nボーナスデー：キュートアイテム\n' + url,
  /* 木 */ 'ススメオトメ：クール\nボーナスデー：クールアイテム\n' + url,
  /* 金 */ 'ススメオトメ：パッション\nボーナスデー：パッションアイテム\n' + url,
  /* 土 */ 'ススメオトメ：全タイプ\nボーナスデー：全属性アイテム&マニー2倍\n' + url
];

