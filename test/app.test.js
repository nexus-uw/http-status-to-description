'use strict';

var expect = require('chai').expect
  , app = require('../app');

describe('http-status-to-description',function(){
  it('should exist',function(){
    expect(app).to.be.defined;
    expect(app).to.be.a('function');
  });

  it('should handle string status codes',function(){
    expect(app('200')).to.equal('OK');
  });
  it('should handle int status codes',function(){
    expect(app(200)).to.equal('OK');
  });
  it('should handle all status codes between 100 and 599, inclusive',function(){
    for(var i = 100; i <= 599; i++) {
      // the following are not standard codes, and should be unassigned
      if((i >= 103 && i <= 199 ) ||
        (i >= 209 && i <= 225 ) ||
        (i >= 227 && i <= 299 ) ||
        (i >= 309 && i <= 399 ) ||
        (i >= 418 && i <= 421 ) ||
        (i === 425) ||
        (i === 427) ||
        (i === 430) ||
        (i >= 432 && i <= 499 ) ||
        (i === 509) ||
        (i >= 512 && i <= 599 )) {
        expect(app(i)).to.equal('Unassigned','for : ' +i);
      } else {
        var result = app(i);
        expect(result).to.be.a('string');
        expect(result).to.have.length.above(0);
        expect(result).to.not.equal('Unassigned','for : ' +i);
      }
    }
  });
});