//BY KAUSHAL

//1) Extract all keys of an object as an array of strings?
const user = { name: "John", age: 30 };

type Keys<T> = T extends Record<infer K, any> ? K[] : never;
let keyArray: Keys<typeof user> = [];

for (let a of Object.entries(user)) {
  if (a[0] === "name" || a[0] === "age") keyArray.push(a[0]);
}
console.log(keyArray);

//2) Extract First and Last Element of Tuple using Generic.
type First<T> = T extends [infer F, ...infer K] ? F : never;
type Last<T> = T extends [...infer K, infer F] ? F : never;

type A = First<[1, 2, 3]>;
type B = Last<[1, 2, 3]>;

//3)Define a generic type that creates a tuple of a specific length?

type ArrayLength<T extends any[]> = T["length"];
type TupleOf<
  N extends number,
  T,
  Z extends any[] = []
> = N extends ArrayLength<Z> ? Z : TupleOf<N, T, [...Z, T]>;

type C = TupleOf<4, number>; // Expected: [string, string, string]type B = TupleOf<5, number>;  // Expected: [number, number, number, number, number]

//4) Create a generic type that extracts the argument type from a function?

type ArgumentType<Fn extends (...args: any[]) => any> = Fn extends (
  ...args: infer A
) => any
  ? A
  : never;

type Fn = (name: string, age: number) => void;
type D = ArgumentType<Fn>; //[string, number]

//5)Create a function that takes an object and a key, then returns the corresponding value?

function getValue<T extends object, U extends keyof T>(obj: T, property: U) {
  if (property in obj) {
    return obj[property];
  }
}
// function getV(obj: object, property: string) {
//   if (property in obj) {
//     return obj[property];
//   }
// }

const newuser = { name: "John", age: 30 };
console.log(getValue(newuser, "name")); // Expected: "John"console.log(getValue(user, "age"));  // Expected: 30

//NEW PROBLEMS(EXTRA)

//flat DeepArray

type Flatten1<T> = T extends [infer A, ...infer B]
  ? A extends any[]
    ? [...Flatten<A>, ...Flatten<B>]
    : [A, ...Flatten<B>]
  : [];

type Flatten<T, U extends any[] = []> = T extends [infer A, ...infer B]
  ? A extends any[]
    ? Flatten<[...A, ...B], U>
    : Flatten<B, [...U, A]>
  : U;
type S = Flatten<[1, [2, 3], [4, [5]]]>; // Expected: [1, 2, 3, 4, 5]
type R = Flatten<["a", ["e", "f"], ["b", ["c"]]]>; // Expected: ['a', 'b', 'c']

// Type for output: Expected: [[1, "a"], [2, "b"], [3, "c"]], input: [1, 2, 3], ['a', 'b', 'c']
type Zip<T, U, Z extends any[] = []> = T extends [infer A, ...infer B]
  ? U extends [infer C, ...infer D]
    ? Zip<B, D, [...Z, [A, C]]>
    : Z
  : Z;

type Zipped = Zip<[1, 2, 3], ["a", "b", "c"]>;

//creating object from tuples:

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type arrayToObj = TupleToObject<typeof tuple>;

// RINKESH

// 1.
type Merge<T, U> = {
  [K in keyof (T & U)]: K extends keyof U
    ? U[K]
    : K extends keyof T
    ? T[K]
    : never;
};
type A1 = { name: string; age: number };
type B1 = { age: string; address: string };
type Merged = Merge<A1, B1>;
// Merged should be: { name: string; age: string; address: string }

// 2. Array to Object
const keys = ["name", "age", 10];

type ArrayToObject<T extends (string | number)[], U> = {
  [P in T[number]]: U;
};

type Person1 = ArrayToObject<typeof keys, string>;
const person1: Person1 = {
  name: "John",
  age: "30",
  10: "sdfdf",
};

// 3. Conditional Require
type ConditionalRequired<T, U extends keyof T> = T & {
  // [K in keyof T as K extends U? K: never]-?: T[K]
  [K in keyof T as K extends U ? K : never]-?: T[K];
};

type APerson = { name?: string; age?: number };
type UpdatedPerson = ConditionalRequired<APerson, "name">;

let hello: UpdatedPerson = {
  name: "sdfsdffs",
  age: 10,
};

// { name: string; age?: number }

// 4.

type IfElse<T extends boolean, U extends "Yes", V extends "No"> = T extends true
  ? U
  : V;

type Test1 = IfElse<true, "Yes", "No">; // "Yes"
type Test2 = IfElse<false, "Yes", "No">; // "No"

//-----------------------------------

type LastChar<T extends string> = T extends `${infer A}${infer B}`
  ? B extends ""
    ? A
    : LastChar<B>
  : never;

let ab: LastChar<"abcs">;
//--------------------------

type LastCharRemove<
  T extends string,
  U extends string = ""
> = T extends `${infer A}${infer B}`
  ? B extends ""
    ? U
    : LastCharRemove<B, `${U}${A}`>
  : never;

let bc: LastCharRemove<"abcde">;
//--------------------------

type GetLastWord<T extends string> = T extends `${infer A} ${infer B}`
  ? GetLastWord<B>
  : T;
let c: GetLastWord<"hello world">;
//--------------------------

type SwapName<T extends string> = T extends `${infer A} ${infer B}`
  ? `${B} ${A}`
  : never;
let name1: SwapName<"james dae hollywood">;

//--------------------------
type Person3 = {
  name: string;
  name1: string;
  age: number;
  isActive: boolean;
};

type PickByType<T, U> = {
  [V in keyof T as T[V] extends U ? V : never]: T[V];
};

type StringProperties = PickByType<Person3, string>; // { name: string }
type BooleanProperties = PickByType<Person3, boolean>; // { isActive: boolean }

//------------------------------

type reverseString<T extends string> = T extends `${infer A}${infer C}`
  ? C extends ""
    ? A
    : `${reverseString<C>}${A}`
  : never;
let d: reverseString<"hello">;
//------------------------------
type stringLength<
  T extends string,
  Z extends any[] = []
> = T extends `${infer A}${infer B}` ? stringLength<B, [...Z, A]> : Z["length"];
let e: stringLength<"hello">;
//-----------------------------

type stringSplit<
  T extends string,
  U extends string,
  Z extends any[] = []
> = T extends `${infer A}${U}${infer B}`
  ? stringSplit<B, U, [...Z, A]>
  : T extends `${infer A}${infer B}`
  ? B extends ""
    ? [...Z, A]
    : Z
  : never;
let f: stringSplit<"1,2,3,4", ",">;

//-------------------------------
type Person2 = {
  name: string;
  age: number;
  isActive: boolean;
};

type ExcludeByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K];
};

type WithoutString = ExcludeByType<Person2, string>; // { age: number; isActive: boolean }\

//------------------------------------------------
type A11 = {
  name: string;
  address: {
    city: string;
    state: string;
  };
};

type B11 = {
  age: number;
  address: {
    city: string;
    country: string;
  };
};

type MergeDeep<A extends object, B extends object> = {
  [K in keyof (A & B)]: K extends keyof A
    ? K extends keyof B
      ? A[K] extends object
        ? B[K] extends object
          ? MergeDeep<A[K], B[K]>
          : A[K]
        : A[K]
      : A[K] extends object
      ? MergeDeep<A[K], B>
      : A[K]
    : K extends keyof B
    ? B[K] extends object
      ? MergeDeep<A, B[K]>
      : B[K]
    : never;
};

type Merged1 = MergeDeep<A11, B11>;
// Result: {
//   name: string;
//   age: number;
//   address: {
//     city: string;
//     state: string;
//     country: string;
//   };
// }

let obj1: Merged1 = {
  name: "dfsfd",
  age: 100,
  address: {
    city: "dgfdfg",
    state: "sgsfsdf",
    country: "asdsdasd",
  },
};

//----------------------------
