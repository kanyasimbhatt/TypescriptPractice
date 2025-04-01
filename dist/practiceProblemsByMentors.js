"use strict";
//1) Extract all keys of an object as an array of strings?
const user = { name: "John", age: 30 };
let keyArray = [];
for (let a of Object.entries(user)) {
    if (a[0] === "name" || a[0] === "age")
        keyArray.push(a[0]);
}
console.log(keyArray);
//5)Create a function that takes an object and a key, then returns the corresponding value?
function getValue(obj, property) {
    if (property in obj) {
        return obj[property];
    }
}
function getV(obj, property) {
    if (property in obj) {
        // return obj[property];
        console.log("dfsd: ", typeof property);
    }
}
const newuser = { name: "John", age: 30 };
console.log(getV(newuser, "name")); // Expected: "John"console.log(getValue(user, "age"));  // Expected: 30
