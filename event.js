module.exports = {
  name: process.env.EVENT_NAME,
  // イベント開始/終了日時(15:00開始なら15:00、20:59終了なら21:00に設定)
  date: Date.parse(process.env.EVENT_DATE),
  // 開始ならfalse、終了ならtrue
  close: (process.env.EVENT_CLOSE === 'true')
};
