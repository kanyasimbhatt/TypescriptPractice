//used to develop utilty types/helper types

type ExtractType<T> = T extends any[]? T[number] : never;

function getFullName<T extends object>(person: T){
    if('firstName' in person && 'lastName' in person && person.firstName && person.lastName){
        return `${person.firstName} and ${person.lastName}`;
    } 
    throw new Error("no firstname and lastname present in the object");
}

//alternate way using conditional types

type FullName = {firstName:string, lastName: string};
type FullNameOrNothing<T> = T extends FullName ? string : never;

function getFullName2<T extends object>(person: T): FullNameOrNothing<T>{
    if('firstName' in person && 'lastName' in person && person.firstName && person.lastName){
        return `${person.firstName} and ${person.lastName}` as FullNameOrNothing<T>;
    } 
    throw new Error("no firstname and lastname present in the object");
}

// let newPerson: {firstName:string, lastName: string} = {
//     firstName: "kanya",
//     lastName: "bhatt"
// }
// getFullName<{firstName:string, lastName: string}>(newPerson);







////INFER KEYWORD
//use case: If we want to get the return type of a particular function

type GetReturnType<T> = T extends (...args:any[]) => infer RV ? RV : T;

function func(a: number, b:number): number{
    return a + b;
}

type RetREurnType = GetReturnType<typeof func>;