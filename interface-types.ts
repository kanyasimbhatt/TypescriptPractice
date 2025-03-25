function newfunc1():void{
    return undefined;
}

newfunc1();


//-------------------------------

let names: Array<string>;
let names1: string[];

//------------------------------- union with array

let arr: string[] | number[] = [];
let newarr: (string | number)[] = [1, 2, "sdds"];

//---------------------------------enums

enum values {
    UP = "hello",
    DOWN = 10
};

console.log(values.UP);
console.log(values.DOWN);


//----------type alias and interface difference
///the example shown below is of Declaration Merging - generally used when a particular interface is coming from a 3rd party library and we want add some extra features for use
//type doesnt support declaration merging

type Person = {
    name: string,
    age: number
};

interface NewPerson {
    name: string;
    age: number;
}

interface NewPerson {
    newfunc(): string;
}


let person: NewPerson = {
    name: "sdfsdf",
    age: 20,
    newfunc(){
        return "sdfsdf";
    }
}

//// interface can be used when we want assign a type to a particular object
//// also to create a new interface using existing interface using extends
//// also when we want to use the predefined set of properties present for interface in a class using implements keyword
//// interfaces here only represents a structure not containing any data or functionbody


function randomFunction():NewPerson {
    let obj:NewPerson = {
        name: "kanya",
        age: 10,
        newfunc(){
            return "sdfsdf";
                }
    }
    return obj;
}

///Using interface and types you can define function types

type sumFunction = (a: number, b:number) => number;

interface Sumfunctionality {
    (a:number, b:number):number;
}

/// implementing the interface
class DemoPerson implements NewPerson{
    constructor(public name:string, public age: number, resignation:string){

    }
    newfunc(){
        return "sdfsdf";
     }
}

//////Difference between any and unknown
//to work with the variables definded with unknown type you have to derive it to a specific type like using if statement before using it
function processAny(input: any) {
    console.log(input.toUpperCase());
}
 
// function processUnknown(input: unknown) {
//     console.log(input.toUpperCase());
// }


let v:any;
v = [1, 2,3];
v.push(4);

let b:unknown;
b = [1, 3, 5];

if(Array.isArray(b))
    b.push(5);


///Intersection types: use of & and extends in types and interface which helps in getting all properties from one type or interface to another

///Type Gaurds - using if statement to validate the type before working on it
type Source1  = {
    name:string;
}

let source:Source1 = {
    name: "demo",
}
if("path" in source){//if path is a property present in the source object
    console.log("sdfdfsdf");
}

/// Discriminated Unions where we use a common shared property present in 2 types to distinguish the operation required for each type of input

type DBSource = {
    type: "db"
    name: string,
};

let newDBSource:DBSource = {
    name: "kanya",
    type: "db" 
};

type LibSource = {
    name: string,
    type: "lib"
}

let newLibSource = {
    name: "bhatt",
    type: "lib"
}
type Source = DBSource | LibSource;



function CalculateSource(source: Source){
    if(source.type === 'db'){
        console.log("dsdf");
    }

    //type gaurd in classes can be instance of, where we check if the object passed is an object of certain class we need to perform a certain type of operation
    //also if we are aware of all the properties present in the class we can use the `in` keyword to differentiate between objects of different classes

}

CalculateSource(newDBSource);


/// Type Predictes
//functions that return a boolean value and are used to narrow down the type of a variable using if(isDB(source)) and function isDB => return source.type === 'db'
//so here the type is narrowed down to the DBSource
//syntax: function is<TypeName>(variable: any) : variable is TypeName { Return boolean value } => where Typename refers to the type you want to check for and the variable to refers to something whose type you want to narrow down or check

///Type casting `as`
// A way through which we can explicitly assign a type to a variable using `as` 
// let value = getLength('hello how are you') as string here it would presume that the output for this should be string
//can be used in the case where a function returns multiple type of output like getLength here can return both string and number 




///Index types
//Here we specify the type of the key that is acceptable while defining a type using `type` keyword

//in the below scenario type doesnt allow to add extra properties to an object which is already defined using another type(demo here)
type demo = {
    name: string,
}

let store:demo = {
    name: "sfsdfsd"
}

// store.newId = "sdfsdf";


//but if we use index types

type newDemo = {
    [prop: string]: string | number |boolean, //the types for values in the right is applicable to all properties we will be adding, if try to assign a variable of type string[] it will give an error
    [prop: number]: boolean
};


let newStore:newDemo = {
    name: "kanya",
    age: 10, 
}

newStore.place = "gandhinagar";
//here it allows us to add extra properties
//it tells typescript that there can be any number os properties that would be following the specified syntax




/////as const feature:-
//In TypeScript, "as const" is a type assertion that indicates that the properties of an object or the elements of an array are readonly and will not be widened.
//usecase - when there is variable you have defined with let, and the project requires you to fix the value for that variable based on certain condition in middle
//(ex - address of person when it doesnt own a house is variable but when it buys a house the address hsould be fixed thereafter )
let variable = "hello";
variable = "hello";//allowed
// variable = "sdsds" not allowed
console.log(typeof variable);

const newvar = "dfsdfsd";

variable = "pink" as const; //takes the type of variable as pink



////Record Type
//similar to index types creates a type for us having fixed types for key and values.

let newObj: Record<string, string>  = {
    name: "sakshi"
};
newObj.place = "gandhinagar";
newObj[2] = "dfsdf";

//type inference happens for objects as well
let obj = {
    name: "ssfsdfsf",
    age: 10,
    occupation: ['artist', 'coder'],
}


////satisfies keyword
//satisfies keyword is used to check if the object defined satisfies a particular record type

let obj2 = {
    name: "kan",
    age: "10"
} satisfies Record<string, string>;
//results in the most narrowed type
// obj2.newprop
//here above this statement would give error, so basically satisfies helps induce `type` kind of behavious where it doesnt 
// allow to add more properties to the type later on but also checks that the object defined is following a certain structure in terms of types specified in Record<>
