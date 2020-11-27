
exports.randomNumStr = length => {
  let str = [];
  for(let i = 1; i <= length; i++) {
    str.push(Math.floor(Math.random() * 10).toString(16));
  }
  return str.join('');
}

exports.randomHexStr = length => {
     let str = [];
     for(let i = 1; i <= length; i++) {
       str.push(Math.floor(Math.random() * 16).toString(16));
     }
     return str.join('');
}

exports.randomBinString = length => {
     let str = [];
     for(let i = 1; i <= length; i++) {
       str.push(Math.floor(Math.random() * 2).toString(2));
     }
     return str.join('');
}

exports.randomCharString = length => {
     const chars = 'abcdefghijklmnopqrstuvwxyz';
     let str = [];
     for(let i = 1; i <= length; i++) {
       const number = Math.floor(Math.random() * (chars.length+1));
       str.push(chars[number]);
     }
     return str.join('');
}

exports.randomCharNumString = length => {
     const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
     let str = [];
     for(let i = 1; i <= length; i++) {
       const number = Math.floor(Math.random() * (chars.length+1));
       str.push(chars[number]);
     }
     return str.join('');
}

exports.randomCharNumSpeString = (length, special ) => {
     special = special ? special : '!@#$%&*_-=+;:,<>.|';
     const chars = 'abcdefghijklmnopqrstuvwxyz0123456789' + special;
     let str = [];
     for(let i = 1; i <= length; i++) {
       const number = Math.floor(Math.random() * (chars.length+1));
       str.push(chars[number]);
     }
     return str.join('');
}

exports.randomStrFromArr = (length, arr) => {
  let str = [];
  for(let i = 1; i <= length; i++) {
    const number = Math.floor(Math.random() * (arr.length+1));
    str.push(arr[number]);
  }
  return str.join('');
}