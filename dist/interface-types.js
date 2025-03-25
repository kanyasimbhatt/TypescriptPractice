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
let source = {
    name: "demo",
};
if ("path" in source) { //if path is a property present in the source object
    console.log("sdfdfsdf");
}
let newDBSource = {
    name: "kanya",
    type: "db"
};
let newLibSource = {
    name: "bhatt",
    type: "lib"
};
function CalculateSource(source) {
    if (source.type === 'db') {
        console.log("dsdf");
    }
    //type gaurd in classes can be instance of, where we check if the object passed is an object of certain class we need to perform a certain type of operation
    //also if we are aware of all the properties present in the class we can use the `in` keyword to differentiate between objects of different classes
}
CalculateSource(newDBSource);
let store = {
    name: "sfsdfsd"
};
let newStore = {
    name: "kanya",
    age: 10,
};
newStore.place = "gandhinagar";
//here it allows us to add extra properties
//it tells typescript that there can be any number os properties that would be following the specified syntax
/////as const feature:-
//In TypeScript, "as const" is a type assertion that indicates that the properties of an object or the elements of an array are readonly and will not be widened.
//usecase - when there is variable you have defined with let, and the project requires you to fix the value for that variable based on certain condition in middle
//(ex - address of person when it doesnt own a house is variable but when it buys a house the address hsould be fixed thereafter )
let variable = "hello";
variable = "hello"; //allowed
// variable = "sdsds" not allowed
console.log(typeof variable);
const newvar = "dfsdfsd";
variable = "pink"; //takes the type of variable as pink
////Record Type
//similar to index types creates a type for us having fixed types for key and values.
let newObj = {
    name: "sakshi"
};
newObj.place = "gandhinagar";
newObj[2] = "dfsdf";
//type inference happens for objects as well
let obj = {
    name: "ssfsdfsf",
    age: 10,
    occupation: ['artist', 'coder'],
};
////satisfies keyword
//satisfies keyword is used to check if the object defined satisfies a particular record type
let obj2 = {
    name: "kan",
    age: "10"
};
//results in the most narrowed type
// obj2.newprop
//here above this statement would give error, so basically satisfies helps induce `type` kind of behavious where it doesnt 
// allow to add more properties to the type later on but also checks that the object defined is following a certain structure in terms of types specified in Record<>
