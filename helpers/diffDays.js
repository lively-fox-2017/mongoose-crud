'use strict';

module.exports = function(date1, date2){
console.log(date1);
  var timeDiff = date2.getTime() - date1.getTime();
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  console.log(diffDays);
  return diffDays
};
