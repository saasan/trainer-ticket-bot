(function(){
  'use strict';

  var http = require('http');
  var exec = require('child_process').exec;
  var schedule = require('node-schedule');
  var twitter = require('./twitter.js');

  // サーバーの動作開始時間
  var START_TIME = {
    hour: 6,
    minute: 55
  };
  // サーバーの動作終了時間
  var STOP_TIME = {
    hour: 23,
    minute: 45
  };


  var jobHourlyTweet, jobWeekDayTweet, jobTimeTableTweet, jobCurl;

  function curl(url) {
    console.log('========== function curl ==========');
    exec('curl ' + url, function(){});
  }

  // ジョブをキャンセル
  function cancelJobs() {
    console.log('========== function cancelJobs ==========');
    jobHourlyTweet.cancel();
    jobTimeTableTweet.cancel();
    jobCurl.cancel();
  }

  /**
   * 今日の指定時刻のgetTime()を返す
   * @return {number} getTime()で取得したミリ秒。
   */
  function getSpecifiedTime(hour, minute) {
    var d = new Date();
    d.setHours(hour);
    d.setMinutes(minute);
    d.setSeconds(0);
    d.setMilliseconds(0);

    return d.getTime();
  }

  /**
   * サーバーを実行すべき時間内か調べる
   * @param date 調べる時間のDateオブジェクト
   * @return {boolean} 時間内ならtrue。
   */
  function isInTime(date) {
    var now = date.getTime();
    var start = getSpecifiedTime(START_TIME.hour, START_TIME.minute);
    var stop = getSpecifiedTime(STOP_TIME.hour, STOP_TIME.minute);

    return (start <= now && now < stop);
  }

  process.on('exit', function() {
    console.log('========== process.on Exit ==========');
  });

  // 毎時50分にトレチケタイムをツイートする
  jobHourlyTweet = schedule.scheduleJob('50 7-14,18-21 * * *', function() {
    twitter.tweetHourlyMessage();
  });

  // 毎日0時0分に曜日毎のツイートをする
  jobWeekDayTweet = schedule.scheduleJob('0 0 * * *', function() {
    twitter.tweetWeekDayMessage();
    // 0時0分のツイートで1日分終わりなので自分でキャンセル
    jobWeekDayTweet.cancel();
  });

  // 毎日7時45分に今日の予定をツイートする
  jobTimeTableTweet = schedule.scheduleJob('45 7 * * *', function() {
    twitter.tweetTimeTableMessage();
  });

  // 20分毎にcurlで自分を叩き起こす
  jobCurl = schedule.scheduleJob('0,20,40 * * * *', function() {
    if (isInTime(new Date())) {
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

    if (!isInTime(new Date())) {
      // 時間外ならジョブをキャンセル
      cancelJobs();
    }
  }).listen(process.env.PORT);
})();
