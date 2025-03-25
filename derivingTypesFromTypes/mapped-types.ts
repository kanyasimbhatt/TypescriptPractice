//converting one object type to some other object type using the other object type
// taking the properties of some other object and defining custom value type for each, view example below

type Operations = {
    add: (a: number, b:number) => number;
    subtract: (a: number, b:number) => number;
};

type Results<T> = {
    [Key in keyof T]: number
};

let mathOperations: Operations = {
    add(a: number, b:number){
        return a + b;
    },

    subtract(a: number, b: number) {
        return a - b;
    }
}

let newobj: Results<Operations> = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(4, 1)
};

// to make the properties optional in Result object we can do this:

type Result1<T> = {
    [Key in keyof T] ?: number
}

let newobj1: Result1<Operations> = {
    add: mathOperations.add(1, 2),
};//now here add and subtract become optional properties 


//To removing optionality use the syntax -?
//if by chance all the properties in Operations are optional we can remove the optionality by
//also to make the properties readonly, we can use the readonly keyword, it makes all the properties non readable
type Result2<T> = {
    readonly [Key in keyof T]-?: number;
}

//similarly if the operations type has set all its properties as readonly we can remove them subsequently by adding -readonly
type Result3<T> = {
    -readonly [Key in keyof T]: number
}