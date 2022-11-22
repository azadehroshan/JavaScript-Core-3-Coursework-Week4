let convertToNewRoman = require("./convert-to-new-roman"); 

test("returns I if passed 1 as an argument", function () { 
  // Arrange
    let inputOne = 900;
    let expectedFromOne="CM";
  // Act
    let resultForInputIsOne = convertToNewRoman(inputOne);
  // Assert
  expect(resultForInputIsOne).toEqual(expectedFromOne);
});

