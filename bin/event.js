var month = require('./month.js');

module.exports = {
  name: 'Nation Blue',
  // イベント終了日時(20:59終了なら21:00に設定)
  until: new Date(2015, month.OCTOBER, 27, 21, 0)
};
