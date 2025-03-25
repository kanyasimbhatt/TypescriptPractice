"use strict";
//1) Extract all keys of an object as an array of strings?
const user = { name: "John", age: 30 };
let keyArray = [];
for (let a of Object.entries(user)) {
    if (a[0] === "name" || a[0] === "age")
        keyArray.push(a[0]);
}
console.log(keyArray);
