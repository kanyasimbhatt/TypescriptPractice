"use strict";
function newfunc1() {
    return undefined;
}
newfunc1();
//-------------------------------
let names;
let names1;
//------------------------------- union with array
let arr = [];
let newarr = [1, 2, "sdds"];
//---------------------------------enums
var values;
(function (values) {
    values["UP"] = "hello";
    values[values["DOWN"] = 10] = "DOWN";
})(values || (values = {}));
;
console.log(values.UP);
console.log(values.DOWN);
let person = {
    name: "sdfsdf",
    age: 20,
    newfunc() {
        return "sdfsdf";
    }
};
//// interface can be used when we want assign a type to a particular object
//// also to create a new interface using existing interface using extends
//// also when we want to use the predefined set of properties present for interface in a class using implements keyword
//// interfaces here only represents a structure not containing any data or functionbody
function randomFunction() {
    let obj = {
        name: "kanya",
        age: 10,
        newfunc() {
            return "sdfsdf";
        }
    };
    return obj;
}
/// implementing the interface
class DemoPerson {
    constructor(name, age, resignation) {
        this.name = name;
        this.age = age;
    }
    newfunc() {
        return "sdfsdf";
    }
}
//////Difference between any and unknown
//to work with the variables definded with unknown type you have to derive it to a specific type like using if statement before using it
function processAny(input) {
    console.log(input.toUpperCase());
}
// function processUnknown(input: unknown) {
//     console.log(input.toUpperCase());
// }
let v;
v = [1, 2, 3];
v.push(4);
let b;
b = [1, 3, 5];
if (Array.isArray(b))
    b.push(5);
