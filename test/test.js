'use strict';

var assert = require('assert');
var update = require('../bin/update.js');

var SEPTEMBER = 8;

describe('7時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 18, 6, 45));
    assert(message.includes('A、Eグループ：①8時、②12時、③19時'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 19, 6, 55));
    assert(message.includes('A、Eグループ：①9時、②13時、③20時'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 20, 7, 5));
    assert(message.includes('A、Eグループ：①10時、②14時、③21時'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 21, 7, 15));
    assert(message.includes('A、Eグループ：①11時、②15時、③22時'));
  });
});

describe('8時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 18, 8, 0));
    assert(message.includes('A、E'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 19, 8, 0));
    assert(message.includes('D、H'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 20, 8, 0));
    assert(message.includes('C、G'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 21, 8, 0));
    assert(message.includes('B、F'));
  });
});

describe('9時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 18, 9, 0));
    assert(message.includes('B、F'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 19, 9, 0));
    assert(message.includes('A、E'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 20, 9, 0));
    assert(message.includes('D、H'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 21, 9, 0));
    assert(message.includes('C、G'));
  });
});

describe('10時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 18, 10, 0));
    assert(message.includes('C、G'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 19, 10, 0));
    assert(message.includes('B、F'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 20, 10, 0));
    assert(message.includes('A、E'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 21, 10, 0));
    assert(message.includes('D、H'));
  });
});

describe('11時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 18, 11, 0));
    assert(message.includes('D、H'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 19, 11, 0));
    assert(message.includes('C、G'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 20, 11, 0));
    assert(message.includes('B、F'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 21, 11, 0));
    assert(message.includes('A、E'));
  });
});

describe('12時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 18, 12, 0));
    assert(message.includes('A、E'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 19, 12, 0));
    assert(message.includes('D、H'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 20, 12, 0));
    assert(message.includes('C、G'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 21, 12, 0));
    assert(message.includes('B、F'));
  });
});

describe('13時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 18, 13, 0));
    assert(message.includes('B、F'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 19, 13, 0));
    assert(message.includes('A、E'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 20, 13, 0));
    assert(message.includes('D、H'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 21, 13, 0));
    assert(message.includes('C、G'));
  });
});

describe('14時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 18, 14, 0));
    assert(message.includes('C、G'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 19, 14, 0));
    assert(message.includes('B、F'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 20, 14, 0));
    assert(message.includes('A、E'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 21, 14, 0));
    assert(message.includes('D、H'));
  });
});

describe('15時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 18, 15, 0));
    assert(message.includes('D、H'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 19, 15, 0));
    assert(message.includes('C、G'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 20, 15, 0));
    assert(message.includes('B、F'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 21, 15, 0));
    assert(message.includes('A、E'));
  });
});

describe('19時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 18, 19, 0));
    assert(message.includes('A、E'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 19, 19, 0));
    assert(message.includes('D、H'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 20, 19, 0));
    assert(message.includes('C、G'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 21, 19, 0));
    assert(message.includes('B、F'));
  });
});

describe('20時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 18, 20, 0));
    assert(message.includes('B、F'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 19, 20, 0));
    assert(message.includes('A、E'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 20, 20, 0));
    assert(message.includes('D、H'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 21, 20, 0));
    assert(message.includes('C、G'));
  });
});

describe('21時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 18, 21, 0));
    assert(message.includes('C、G'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 19, 21, 0));
    assert(message.includes('B、F'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 20, 21, 0));
    assert(message.includes('A、E'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 21, 21, 0));
    assert(message.includes('D、H'));
  });
});

describe('22時', function() {
  var message;

  it('パターンA', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 18, 22, 0));
    assert(message.includes('D、H'));
  });
  it('パターンB', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 19, 22, 0));
    assert(message.includes('C、G'));
  });
  it('パターンC', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 20, 22, 0));
    assert(message.includes('B、F'));
  });
  it('パターンD', function () {
    message = update.createMessage(new Date(2015, SEPTEMBER, 21, 22, 0));
    assert(message.includes('A、E'));
  });
});
