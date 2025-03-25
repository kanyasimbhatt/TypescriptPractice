"use strict";
//when should you use generics: 
//when you truely dont know what type is going to be passed into the function
let strArr = ["sfsdf", 'ssdfsdf']; //generics syntax, showing combination of Array type and string type
let strArr1 = ["fsdfsdf", "edeef"];
let Obj = {
    address: "22nd street",
    name: "kanya",
    age: 10
};
let Store = {
    new: "hello"
};
////////////Generics with functions
function merge(a, b) {
    return [a, b];
}
function normalMerge(a, b) {
    return [a, b];
}
const normalValue = normalMerge("hell", "world");
const value = merge("hello", "world");
//if you don't add <string> here it doesnt matter because TS is able to infer the type automatically
//////////multiple placeholders
function multipleMerge(a, b) {
    return [a, b];
}
let multipleValue = multipleMerge("hello", 10);
/////adding constraint with typescript
function mergeObj(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = mergeObj({ name: "kanya" }, { "age": 10 });
//here we are telling generics that the type assigned to T should be of type object and TS should throw error some other type is assigned
//Here in this scenario the type of merged variable is a complex type it is specifying that {name: string, age?: undefined} | {age: number, name ?: undefined}
//hover on merged and find out
//to remove that complex type structure, do:
function newMergeObj(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const newMerged = newMergeObj({ name: "kanya" }, { "age": 10 });
/////Generics classes
class Athlete {
    constructor(id) {
        this.id = id;
    }
}
const a = new Athlete('id1');
