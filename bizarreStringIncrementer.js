function bizarreStringIncrementer(str) {
    if(isNaN(str.slice(-1))) {
      return `${str}1`;
    }
    else {
      var alphabets = str.split('') .filter(n => isNaN(n)).join('');
      var digits = str.split('') .filter(n => !isNaN(n)).join('');
      var newNum = +digits + 1;
      if(digits.length > newNum.toString().length) {
        var bizarreString  = '';
        for(var i = 0; i < digits.length; i++) {
          bizarreString  += '0';
        }
        return alphabets + (bizarreString  + newNum).slice(-digits.length);
      }
      else {
        return alphabets + newNum;
      }
    }
  }
  module.exports = { bizarreStringIncrementer };
