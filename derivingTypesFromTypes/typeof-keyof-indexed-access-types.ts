//gives type of a expression at runtime

const uName = 'max';

console.log((typeof uName));

type userName = typeof uName;

//////////////////////////


const settings = {
    difficulty: "hard"
}

type Settings = typeof settings;

function loadData(settings: Settings){
    return "hello"
}

///////////////////////////// keyof

type newUser = {name: string, age: number};

type UserKeys = keyof newUser;

function getProp<T extends object, U extends keyof T>(obj: T, key: U){
    let val = obj[key];
    if(val === undefined || val === null) throw new Error("trying to access property of undefined or null");

    return val;
}


///// If we want to extract  a particular property from one object to another
// INDEXED-ACCESS-TYPES

type AppUser = {
    name: string;
    age: number;
    permissions: {
        id: string,
        context: string
    }[]
}
//now to get the type of permissions property 

type permissionsConstruction = AppUser['permissions']

//here persmissionCOnstruction stores the type of array of objects, but what if we want to access the type of the element present in the array returned
//for that follow the following syntax.(VARIATION OF indexed access types)

type Perm = permissionsConstruction[number]; 

//another use case of the same:
type StringArray = string[];
type ElementType = StringArray[number];

//with generics usecase: 
type GenericElementType<T extends any[]> = T[number];

let element1:GenericElementType<StringArray>;

//A more general approach in conditional types file