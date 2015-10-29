(function(){
  'use strict';

  var http = require('http');
  var exec = require('child_process').exec;
  var schedule = require('node-schedule');
  var twitter = require('./twitter.js');

  // curlで叩き起こす自分のURL
  var KEEP_ALIVE_URL = 'https://tttbt.herokuapp.com/';
  // サーバーの動作開始時間
  var START_TIME = 6;
  // サーバーの動作終了時間
  var END_TIME = 22;

  process.on('exit', function() {
    console.log('========== process Exit ==========');
  });

  function curl(url) {
    console.log('========== function curl ==========');
    exec('curl ' + url, function(){});
  }

  // 毎時50分にお知らせツイートする
  var jobHourlyTweet = schedule.scheduleJob('50 7-14,18-21 * * *', function() {
    twitter.tweetHourlyMessage();
  });

  // 15分毎にcurlで自分を叩き起こす
  var jobCurl = schedule.scheduleJob('*/15 * * * *', function() {
    var hours = (new Date()).getHours();

    if (START_TIME <= hours && hours < END_TIME) {
      // 時間内なら自分を叩く
      curl(KEEP_ALIVE_URL);
    }
    else {
      // それ以外は終了
      exit();
    }
  });

  function exit() {
    console.log('========== function exit ==========');
    jobCurl.cancel();
    jobHourlyTweet.cancel();
    process.exit();
  }

  // ダミーのhttpサーバーを動かしておく
  http.createServer(function(request, response) {
    console.log(request.url);
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end('<!DOCTYPE html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1></body>\n');

    var hours = (new Date()).getHours();
    if (!(START_TIME <= hours && hours < END_TIME)) {
      // 時間外なら終了
      exit();
    }
  }).listen(process.env.PORT);
})();
