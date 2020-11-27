
class Random {

  constructor() {
    this.num = '0123456789';
    this.charsLC = 'abcdefghijklmnopqrstuvwxyz';
    this.charsUC = this.charsLC.toUpperCase();
    this.special = '!@#$%&*_-=+;:,<>.|'
  }

  random(length, chars) {
    let str = [];

    for(let i = 1; i <= length; i++) {
    str.push(chars[Math.floor(Math.random() * chars.length)]);
    }

    return str.join('');
  }

  numStr(length) {
    return this.random(length, this.num)
  }

  hexStr(length) {
    return this.random(length, (this.num+'abcdef'));
  }

  binStr(length) {
    return this.random(length, '01');
  }

  charStr(length, option) {
    let charSet = this.charsLC;
    if(option === 1) charSet = this.charsLC + this.charsUC;
    if(option === 2) charSet = this.charsUC;

    return this.random(length, charSet)
  }

  charNumStr(length, option) {
    let charSet = this.num + this.charsLC;
    if(option === 1) charSet += this.charsUC;
    if(option === 2) charSet = this. number + this.charsUC;

    return this.random(length, charSet)
  }

  charNumSpeStr(length, special, option) {
    special = special ? special : '!@#$%&*_-=+;:,<>.|';
    let charSet = this.num + special +  this.charsLC;
    if(option === 1) charSet += this.charsUC;
    if(option === 2) charSet =  this.num + special +  this.charsLC;

    return this.random(length, charSet)
  }
}

const instance = new Random;
module.exports = instance;
