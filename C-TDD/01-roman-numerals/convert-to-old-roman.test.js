let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  let inputOne = 1;
  let expectedFromOne="I";
  // Act
    let resultForInputIsOne = convertToOldRoman(inputOne);
  // Assert
  expect(resultForInputIsOne).toEqual(expectedFromOne);
});
