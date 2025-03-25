//1) Extract all keys of an object as an array of strings?
const user = { name: "John", age: 30 };

type Keys<T> = T extends Record<infer K, any> ? K[] : never;
let keyArray: Keys<typeof user> = [];

for(let a of Object.entries(user)){

    
    
    if(a[0] === "name" || a[0] === "age") keyArray.push(a[0])
}
console.log(keyArray);

//2) Extract First and Last Element of Tuple using Generic.
type First<T> = T extends [infer F, ...infer K] ? F : never
type Last<T> = T extends [...infer K, infer F] ? F : never

type A = First<[1, 2, 3]>;  
type B = Last<[1, 2, 3]>;

//3)Define a generic type that creates a tuple of a specific length?

type TupleOf<N extends number, T> = {
    0: T,
    length: N
};
 
type C = TupleOf<3, string>;  // Expected: [string, string, string]type B = TupleOf<5, number>;  // Expected: [number, number, number, number, number]
//4) Create a generic type that extracts the argument type from a function?

type ArgumentType<Fn extends (...args:any[]) => any> = Fn extends (...args: infer A) => any? A : never;


type Fn = (name: string, age: number) => void;
type D = ArgumentType<Fn>;//[string, number]

//NEW PROBLEMS

//flat DeepArray

// type Flatten<T, U extends any[] = []> = T extends [infer A, ...infer B] ? A extends any[] ? Flatten<A, U> : Flatten<B, [...U, A]> : U;
type Flatten<T> = T extends [infer A, ...infer B] ? A extends any[]? [...Flatten<A>, ...Flatten<B>] : [A, ...Flatten<B>] : [];

type S = Flatten<[1, [2, 3], [4, [5]]]>; // Expected: [1, 2, 3, 4, 5]
type R = Flatten<['a', ['e', 'f'], ['b', ['c']]]>;  // Expected: ['a', 'b', 'c']




type Zip<T, U, Z extends any[] = []> = T extends [infer A, ...infer B] ? 
U extends [infer C, ...infer D] ? 
Zip<B, D, [...Z, [A, C]]> : Z : Z;

type Zipped = Zip<[1, 2, 3], ["a", "b", "c"]>;
// Expected: [[1, "a"], [2, "b"], [3, "c"]]
