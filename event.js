var month = require('./month.js');

module.exports = {
  name: 'イベント「LIVE Groove Vocal burst」開催',
  // イベント開始/終了日時(15:00開始なら15:00、20:59終了なら21:00に設定)
  date: new Date(2015, month.OCTOBER, 31, 15, 0),
  // 開始ならfalse、終了ならtrue
  close: false
};
