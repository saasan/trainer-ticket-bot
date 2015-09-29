exports.scheduleMessages = [
// パターンA
`本日のトレチケタイムは以下の通りです。
A、Eグループ：①8時、②12時、③19時
B、Fグループ：①9時、②13時、③20時
C、Gグループ：①10時、②14時、③21時
D、Hグループ：①11時、②15時、③22時
http://saasan.github.io/imas/trainer-ticket-time/`,
// パターンB
`本日のトレチケタイムは以下の通りです。
A、Eグループ：①9時、②13時、③20時
B、Fグループ：①10時、②14時、③21時
C、Gグループ：①11時、②15時、③22時
D、Hグループ：①8時、②12時、③19時
http://saasan.github.io/imas/trainer-ticket-time/`,
// パターンC
`本日のトレチケタイムは以下の通りです。
A、Eグループ：①10時、②14時、③21時
B、Fグループ：①11時、②15時、③22時
C、Gグループ：①8時、②12時、③19時
D、Hグループ：①9時、②13時、③20時
http://saasan.github.io/imas/trainer-ticket-time/`,
// パターンD
`本日のトレチケタイムは以下の通りです。
A、Eグループ：①11時、②15時、③22時
B、Fグループ：①8時、②12時、③19時
C、Gグループ：①9時、②13時、③20時
D、Hグループ：①10時、②14時、③21時
http://saasan.github.io/imas/trainer-ticket-time/`
];

exports.groupTable = [
  ['A、E', 'D、H', 'C、G', 'B、F'],
  ['B、F', 'A、E', 'D、H', 'C、G'],
  ['C、G', 'B、F', 'A、E', 'D、H'],
  ['D、H', 'C、G', 'B、F', 'A、E']
];

exports.startSoon =
`【%(hours)d時】から【%(group)s】グループのトレチケタイムが始まります。
今日のトレチケタイム：http://saasan.github.io/imas/trainer-ticket-time/`;
