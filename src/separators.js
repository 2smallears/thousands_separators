'use strict';

function thousands_separators(num) {
  var numStr = num.toString();
  var numArray = numStr.split('.');
  numArray[0] = numArray[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + ',');
  return numArray.join('.');
}

module.exports = thousands_separators;
