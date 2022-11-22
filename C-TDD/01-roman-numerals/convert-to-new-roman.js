function convertToNewRoman(n) {
  let newRoman= "";
  let numberArray = [1000, 900,500,400, 100, 50, 10, 5,1];
  let romanArray = ["M","CM","D","CD","C", "L", "X", "V","I"]
  // newRoman +="I".repeat(n);
  newRoman = romanArray[numberArray.indexOf(n)]
  return newRoman
}

module.exports = convertToNewRoman;
