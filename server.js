(function(){
  'use strict';

  var http = require('http');
  var exec = require('child_process').exec;
  var schedule = require('node-schedule');
  var twitter = require('./twitter.js');

  // サーバーの動作開始時間
  var START_TIME = 7;
  // サーバーの動作終了時間
  var STOP_TIME = 24;

  var jobHourlyTweet, jobWeekDayTweet, jobTimeTableTweet, jobCurl;

  function curl(url) {
    console.log('========== function curl ==========');
    exec('curl ' + url, function(){});
  }

  // ジョブをキャンセル
  function cancelJobs() {
    console.log('========== function cancelJobs ==========');
    jobHourlyTweet.cancel();
    jobWeekDayTweet.cancel();
    jobTimeTableTweet.cancel();
    jobCurl.cancel();
  }

  /**
   * サーバーを実行すべき時間内か調べる
   * @return {boolean} 時間内ならtrue。
   */
  function isInTime(hours) {
    return (START_TIME <= hours && hours < STOP_TIME);
  }

  process.on('exit', function() {
    console.log('========== process.on Exit ==========');
    // ジョブをキャンセル
    cancelJobs();
  });

  // 毎時50分にトレチケタイムをツイートする
  jobHourlyTweet = schedule.scheduleJob('50 7-14,18-21 * * *', function() {
    twitter.tweetHourlyMessage();
  });

  // 毎日0時0分に曜日毎のツイートをする
  jobWeekDayTweet = schedule.scheduleJob('0 0 * * *', function() {
    twitter.tweetWeekDayMessage();
  });

  // 毎日7時45分に今日の予定をツイートする
  jobTimeTableTweet = schedule.scheduleJob('45 7 * * *', function() {
    twitter.tweetTimeTableMessage();
  });

  // 15分毎にcurlで自分を叩き起こす
  jobCurl = schedule.scheduleJob('*/15 * * * *', function() {
    var hours = (new Date()).getHours();

    if (isInTime(hours)) {
      // 時間内なら自分を叩く
      curl(process.env.KEEP_ALIVE_URL);
    }
    else {
      // それ以外はジョブをキャンセル
      cancelJobs();
    }
  });

  // ダミーのhttpサーバーを動かしておく
  http.createServer(function(request, response) {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end('<!DOCTYPE html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1></body>\n');

    var hours = (new Date()).getHours();
    if (!isInTime(hours)) {
      // 時間外ならジョブをキャンセル
      cancelJobs();
    }
  }).listen(process.env.PORT);
})();
