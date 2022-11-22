function verify(password) {
 if (password.length<8) {
    return 'Password rejected'
 }else if(password===null){
    return 'Password rejected'
 }else if(!/[A-Z]/g.test(password)){
    return 'Password rejected'
 }return 'Password accepted'
}
module.exports = verify;
