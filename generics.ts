//when should you use generics: 
//when you truely dont know what type is going to be passed into the function

let strArr: Array<string> = ["sfsdf", 'ssdfsdf'];//generics syntax, showing combination of Array type and string type
let strArr1: string[] =["fsdfsdf", "edeef"];

//above 2 statements are working similarly


//generics as a concept helps in creating more flexible types where multiple types can be worked on together

type genericType<T> = {
    address: T,
    name: string,
    age: number
}

let Obj:genericType<string> = {
    address: "22nd street",
    name: "kanya",
    age: 10
};

////////////////another basic example

type newGenericType<T> = {
    [key: string]: T
};

let Store:newGenericType<string | number> = {
    new: "hello"
}

////////////Generics with functions
function merge<T>(a: T, b: T){
    return [a, b];
}

function normalMerge(a: any, b: any){
    return [a, b];

}

const normalValue = normalMerge("hell", "world");
const value = merge<string>("hello", "world");
//if you don't add <string> here it doesnt matter because TS is able to infer the type automatically


//////////multiple placeholders
function multipleMerge<T, U>(a: T, b:U){
    return [a, b];
}

let multipleValue = multipleMerge("hello", 10);


/////adding constraint with typescript

function mergeObj<T extends object>(a: T, b: T){
    return {...a, ...b};
}

const merged = mergeObj({name: "kanya"}, {"age": 10});

//here we are telling generics that the type assigned to T should be of type object and TS should throw error some other type is assigned
//Here in this scenario the type of merged variable is a complex type it is specifying that {name: string, age?: undefined} | {age: number, name ?: undefined}
//hover on merged and find out

//to remove that complex type structure, do:
function newMergeObj<T extends object, U extends object>(a: T, b:U){
    return {...a, ...b};
}

const newMerged = newMergeObj({name: "kanya"}, {"age": 10});


/////Generics classes

class Athlete<T>{
    constructor(public id: T){}
}

const a = new Athlete('id1');


//// generics interface

interface Role<T>{
    id: T
}

//// Distributivity in Typescript
// where we iterate over each element present in the union
//TS automatically iterates over each element present in the union

//Use Case, removing one element in union from the type

type Chars = 'a' | 'b' | 'c';

type RemoveC<T> = T extends "c" ? never : T; //if the T === "c" then dont return anything, else return the T itself

// type RemoveC<T> = T extends "c" ? "d" : T; rather then never you can modify the union element to something else
type newType = RemoveC<Chars>;