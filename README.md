トレチケタイム通知bot
============================

##必要な物

- Node.js
- mocha

##実行
`npm install` したあと `npm start` または `heroku local web`

##テスト

`npm test` または `mocha`

##日本時間にする

`heroku config:add TZ=Asia/Tokyo`

##設定

ローカルで動かすときは .env に書く
- `KEEP_ALIVE_URL`  
  curlで叩き起こす自分のURL
- `TWITTER_CONSUMER_KEY`  
- `TWITTER_CONSUMER_SECRET`  
  Twitterのコンシューマキー
- `TWITTER_ACCESS_TOKEN`  
- `TWITTER_ACCESS_TOKEN_SECRET`  
  Twitterアカウントのアクセストークン
