(function(){
  'use strict';

  var Twit = require('twit');
  var sprintf = require('sprintf-js').sprintf;
  var locale = require('./ja.js');

  var SEPTEMBER = 8,
      MS_SEPTEMBER7 = (new Date(2015, SEPTEMBER, 7)).getTime(),
      MS_ONE_DAY = 24 * 60 * 60 * 1000;

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
    tweet: function() {
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
      date.setSeconds(0);
      date.setMilliseconds(0);

      var minutes = date.getMinutes();
      if (minutes >= 30) {
        date.setMinutes(60);
      }
      else {
        date.setMinutes(0);
      }

      return date;
    },

    createMessage: function(date) {
      var message = null,
          pattern = this.getPattern(date),
          hours = this.roundHours(date).getHours();

      if (hours === 7) {
        message = locale.scheduleMessages[pattern];
      }
      else {
        var group = TIME_TABLE[hours.toString()];
        if (group != null) {
          var groupString = locale.groupTable[group][pattern];
          message = sprintf(locale.startSoon, { hours: hours, group: groupString });
        }
      }

      console.log(date.toString(), ' pattern: ', pattern, ' ', message);

      return message;
    }
  };
})();
