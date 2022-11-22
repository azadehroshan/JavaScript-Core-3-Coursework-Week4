  function convertToOldRoman(n) {
  let newRoman= "";
  let numberArray = [1000, 500, 100, 50, 10, 5,1];
  let romanArray = ["M", "D", "C", "L", "X", "V","I"]
  // newRoman +="I".repeat(n);
  newRoman = romanArray[numberArray.indexOf(n)]
  return newRoman
}

module.exports = convertToOldRoman;
