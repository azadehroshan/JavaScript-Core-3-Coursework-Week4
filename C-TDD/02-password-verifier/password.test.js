let verify = require("./password"); 

test ("verify",function () {
let password = "Azadeh2022";
let outPut = verify(password)
let expected = "Password accepted"
expect(outPut).toEqual(expected);
})
