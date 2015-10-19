'use strict';

var assert = require('assert');
var update = require('../bin/update.js');
var month = require('../bin/month.js');

describe('7時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 18, 6, 45));
    assert(message.includes('A、Eグループ：8、12、19時'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 19, 6, 55));
    assert(message.includes('A、Eグループ：9、13、20時'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 20, 7, 5));
    assert(message.includes('A、Eグループ：10、14、21時'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 21, 7, 15));
    assert(message.includes('A、Eグループ：11、15、22時'));
  });
  it('日曜日', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 20, 7, 5));
    assert(message.includes('ススメオトメ：全タイプ\nボーナスデー：共通アイテム&マニー2倍'));
  });
  it('月曜日', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 21, 7, 15));
    assert(message.includes('ススメオトメ：全タイプ\nボーナスデー：全属性アイテム'));
  });
  it('火曜日', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 22, 7, 15));
    assert(message.includes('ススメオトメ：全タイプ\nボーナスデー：共通アイテム(ドレス、靴)'));
  });
  it('水曜日', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 23, 7, 15));
    assert(message.includes('ススメオトメ：キュート\nボーナスデー：キュートアイテム'));
  });
  it('木曜日', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 24, 7, 15));
    assert(message.includes('ススメオトメ：クール\nボーナスデー：クールアイテム'));
  });
  it('金曜日', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 25, 7, 15));
    assert(message.includes('ススメオトメ：パッション\nボーナスデー：パッションアイテム'));
  });
  it('土曜日', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 26, 7, 15));
    assert(message.includes('ススメオトメ：全タイプ\nボーナスデー：全属性アイテム&マニー2倍'));
  });
});

describe('8時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 18, 8, 0));
    assert(message.includes('A、E'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 19, 8, 0));
    assert(message.includes('D、H'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 20, 8, 0));
    assert(message.includes('C、G'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 21, 8, 0));
    assert(message.includes('B、F'));
  });
});

describe('9時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 18, 9, 0));
    assert(message.includes('B、F'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 19, 9, 0));
    assert(message.includes('A、E'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 20, 9, 0));
    assert(message.includes('D、H'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 21, 9, 0));
    assert(message.includes('C、G'));
  });
});

describe('10時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 18, 10, 0));
    assert(message.includes('C、G'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 19, 10, 0));
    assert(message.includes('B、F'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 20, 10, 0));
    assert(message.includes('A、E'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 21, 10, 0));
    assert(message.includes('D、H'));
  });
});

describe('11時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 18, 11, 0));
    assert(message.includes('D、H'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 19, 11, 0));
    assert(message.includes('C、G'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 20, 11, 0));
    assert(message.includes('B、F'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 21, 11, 0));
    assert(message.includes('A、E'));
  });
});

describe('12時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 18, 12, 0));
    assert(message.includes('A、E'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 19, 12, 0));
    assert(message.includes('D、H'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 20, 12, 0));
    assert(message.includes('C、G'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 21, 12, 0));
    assert(message.includes('B、F'));
  });
});

describe('13時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 18, 13, 0));
    assert(message.includes('B、F'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 19, 13, 0));
    assert(message.includes('A、E'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 20, 13, 0));
    assert(message.includes('D、H'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 21, 13, 0));
    assert(message.includes('C、G'));
  });
});

describe('14時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 18, 14, 0));
    assert(message.includes('C、G'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 19, 14, 0));
    assert(message.includes('B、F'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 20, 14, 0));
    assert(message.includes('A、E'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 21, 14, 0));
    assert(message.includes('D、H'));
  });
});

describe('15時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 18, 15, 0));
    assert(message.includes('D、H'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 19, 15, 0));
    assert(message.includes('C、G'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 20, 15, 0));
    assert(message.includes('B、F'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 21, 15, 0));
    assert(message.includes('A、E'));
  });
});

describe('19時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 18, 19, 0));
    assert(message.includes('A、E'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 19, 19, 0));
    assert(message.includes('D、H'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 20, 19, 0));
    assert(message.includes('C、G'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 21, 19, 0));
    assert(message.includes('B、F'));
  });
});

describe('20時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 18, 20, 0));
    assert(message.includes('B、F'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 19, 20, 0));
    assert(message.includes('A、E'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 20, 20, 0));
    assert(message.includes('D、H'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 21, 20, 0));
    assert(message.includes('C、G'));
  });
});

describe('21時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 18, 21, 0));
    assert(message.includes('C、G'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 19, 21, 0));
    assert(message.includes('B、F'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 20, 21, 0));
    assert(message.includes('A、E'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 21, 21, 0));
    assert(message.includes('D、H'));
  });
});

describe('22時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 18, 22, 0));
    assert(message.includes('D、H'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 19, 22, 0));
    assert(message.includes('C、G'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 20, 22, 0));
    assert(message.includes('B、F'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, month.SEPTEMBER, 21, 22, 0));
    assert(message.includes('A、E'));
  });
});
