"use strict";
//gives type of a expression at runtime
const uName = 'max';
console.log((typeof uName));
//////////////////////////
const settings = {
    difficulty: "hard"
};
function loadData(settings) {
    return "hello";
}
function getProp(obj, key) {
    let val = obj[key];
    if (val === undefined || val === null)
        throw new Error("trying to access property of undefined or null");
    return val;
}
let element1;
//A more general approach in conditional types file
