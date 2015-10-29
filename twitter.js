(function(){
  'use strict';

  var Twit = require('twit');
  var sprintf = require('sprintf-js').sprintf;
  var locale = require('./ja.js');
  var month = require('./month.js');
  var event = require('./event.js');

  var MS_SEPTEMBER7 = (new Date(2015, month.SEPTEMBER, 7)).getTime(),
      MS_ONE_MINUTE = 60 * 1000,
      MS_ONE_HOUR = MS_ONE_MINUTE * 60,
      MS_ONE_DAY = MS_ONE_HOUR * 24;

  var TIME_TABLE = {
    '8': 0,
    '9': 1,
    '10': 2,
    '11': 3,
    '12': 0,
    '13': 1,
    '14': 2,
    '15': 3,
    '19': 0,
    '20': 1,
    '21': 2,
    '22': 3
  };

  module.exports = {
    tweetHourlyMessage: function() {
      /*jshint camelcase: false */

      var T = new Twit({
        consumer_key:        process.env.TWITTER_CONSUMER_KEY,
        consumer_secret:     process.env.TWITTER_CONSUMER_SECRET,
        access_token:        process.env.TWITTER_ACCESS_TOKEN,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
      });

      var message = this.createMessage(new Date());

      if (message != null) {
        T.post('statuses/update', { status: message }, function(err /*, data, response */) {
          if (err) {
            console.error(err);
          }
        });
      }
    },

    getPattern: function(date) {
      var msDate = date.getTime();
      var daysElapsed = Math.floor((msDate - MS_SEPTEMBER7) / MS_ONE_DAY);
      var pattern = (daysElapsed + 1) % 4;

      return pattern;
    },

    roundHours: function(date) {
      var roundDate = new Date(date.getTime());
      roundDate.setSeconds(0);
      roundDate.setMilliseconds(0);

      var minutes = roundDate.getMinutes();
      if (minutes >= 30) {
        roundDate.setMinutes(60);
      }
      else {
        roundDate.setMinutes(0);
      }

      return roundDate;
    },

    createEventMessage: function(date) {
      var msDate = date.getTime(),
          msUntil = event.until.getTime(),
          msRoundDate = this.roundHours(date).getTime(),
          delta, left, template, eventMessage;

      // 終了時刻表示用にevent.untilの1分前を計算
      var until = new Date(msUntil);
      until.setMinutes(until.getMinutes() - 1);

      // 残り24時間の時都合がいいので、とりあえず毎正時のmsRoundDateで計算
      delta = msUntil - msRoundDate;

      // 残り1日より多い
      if (MS_ONE_DAY < delta) {
        left = Math.floor(delta / MS_ONE_DAY);
        template = locale.countdownDay;
      }
      // 残り24時間以下1時間以上
      else if (MS_ONE_HOUR <= delta) {
        left = Math.floor(delta / MS_ONE_HOUR);
        template = locale.countdownHour;
      }
      // 1時間未満
      else {
        // 正時のmsRoundDateではまずいのでdeltaを計算し直す
        delta = msUntil - msDate;

        left = Math.ceil(delta / MS_ONE_MINUTE);
        template = locale.countdownMinute;
      }

      eventMessage = sprintf(template + '\n', {
        eventName: event.name,
        left: left,
        month: locale.month[until.getMonth()],
        date: until.getDate(),
        hour: until.getHours(),
        minute: until.getMinutes()
      });

      return eventMessage;
    },

    createMessage: function(date) {
      var message = null,
          pattern = this.getPattern(date),
          hours = this.roundHours(date).getHours();

      if (hours === 7) {
        message = locale.scheduleMessages[pattern] + locale.weekDayMessages[date.getDay()];
      }
      else {
        var group = TIME_TABLE[hours.toString()];
        var eventMessage = '';

        if (date.getTime() < event.until.getTime()) {
          eventMessage = this.createEventMessage(date);
        }

        if (group != null) {
          var groupString = locale.groupTable[group][pattern];
          message = sprintf(locale.startSoon, {
            hours: hours,
            group: groupString,
            eventMessage: eventMessage
          });
        }
      }

      console.log(date.toString(), ' pattern: ', pattern, ' ', message);

      return message;
    }
  };
})();
