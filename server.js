(function(){
  'use strict';

  var http = require('http');
  var exec = require('child_process').exec;
  var CronJob = require('cron').CronJob;
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

  // ジョブを停止
  function stopJobs() {
    console.log('========== function stopJobs ==========');
    jobHourlyTweet.stop();
    jobTimeTableTweet.stop();
    jobCurl.stop();
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
  jobHourlyTweet = new CronJob('0 50 7-14,18-21 * * *', function() {
    twitter.tweetHourlyMessage();
  });
  jobHourlyTweet.start();

  // 毎日0時0分に曜日毎のツイートをする
  jobWeekDayTweet = new CronJob('0 0 0 * * *', function() {
    twitter.tweetWeekDayMessage();
    // 0時0分のツイートで1日分終わりなので自分で停止
    jobWeekDayTweet.stop();
  });
  jobWeekDayTweet.start();

  // 毎日7時45分に今日の予定をツイートする
  jobTimeTableTweet = new CronJob('0 45 7 * * *', function() {
    twitter.tweetTimeTableMessage();
  });
  jobTimeTableTweet.start();

  // 20分毎にcurlで自分を叩き起こす
  jobCurl = new CronJob('0 0,20,40 * * * *', function() {
    if (isInTime(new Date())) {
      // 時間内なら自分を叩く
      curl(process.env.KEEP_ALIVE_URL);
    }
    else {
      // それ以外はジョブを停止
      stopJobs();
    }
  });
  jobCurl.start();

  // ダミーのhttpサーバーを動かしておく
  http.createServer(function(request, response) {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end('<!DOCTYPE html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1></body>\n');

    if (!isInTime(new Date())) {
      // 時間外ならジョブを停止
      stopJobs();
    }
  }).listen(process.env.PORT);
})();
