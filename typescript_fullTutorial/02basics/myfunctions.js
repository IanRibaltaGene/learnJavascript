"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("hello");
signUpUser("Ian", "ian@dsa.it", false);
loginUser("h", "h@h.com");
// function getValue(myVal: number){
//     if(myVal > 1){
//         return true;
//     }
//     return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heroes = ["Superman", "Batman", "Flash", "Aquaman"];
// const heroes = [1,2,3];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
