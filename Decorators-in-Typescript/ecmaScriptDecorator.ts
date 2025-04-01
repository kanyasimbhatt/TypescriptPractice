//meta programming code that interacts with/changes the behaviour other code, then that other code makes/builds up the entire application
//ex - adding validators for variables
/*
@Length(10, 20)
title: string

@Contains('hello')
text:string

here the Length and contains decorator is taken from class-validator library
*/

/*
There are 2 types of decorators, there are 2 different ways they are written:
1) ECMAScript decorators => offical decorator, built on javascript features, can be used w/o TS
2) Experimental decorators => works only with TS
*/

//Decorators can be attached to class, methods, its fields, its getters and setters

//BUILDING A DECORATOR
//attaching the logger decorator the class below using @logger where logger is the name of the function 

//for ECMAscript decorator the logger function should include 2 parameter, where first is the 
// target(for which class or element we are defining it for) and second is the context indication for which we are using it

function logger<T extends new (...args: any[]) => any>(target: T, context: ClassDecoratorContext){
    //can be used to change the thing we are attaching it to(class here)

    return class extends target{
        age = 35;
    }//here this age property gets added into the original class
}

@logger
class DecoratorPersonClass{
    name = "kanya";

    constructor(){
        this.greet = this.greet.bind(this);
    }
    /*
    the code in the constructor above is added for followg scenario
    let max = new DecoratorPersonClass();
    greet = max.greet;
    greet() //gives error otherwise
    */

    @autobind
    greet(){
        console.log('Hi I am ' + this.name);
        
    }

}

//testing it out

const decoratedObj = new DecoratorPersonClass();
console.log(decoratedObj);//output: DecoratorPersonClass { name: 'kanya', age: 35 }


////////METHOD DECORATOR
function autobind(target: Function, context: ClassMethodDecoratorContext){
    

}

//these decorators are executed only when the thing they are attached to is done initialising
// here the method's decorator is executed first because the method is initialed before class is done initializing 