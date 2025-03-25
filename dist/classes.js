"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
///////////////////////////////SHORTCUT
class User1 {
    constructor(name) {
        this.name = name;
    }
}
let user2 = new User1("kanya");
console.log(user2.name);
////////////optional and default parameter allowed here
class User2 {
    constructor(name, age = 10) {
        this.name = name;
        this.age = age;
        this.age = age;
    }
}
////////// public used for shortcut notation + to declare some variable public(accessed by all) similar thing can be said about private(can't be accessed outside class)
class User3 {
    constructor(name, age = 10) {
        this.name = name;
        this.age = age;
        // #hobbies:string[] = [];
        this.hopCount = 0;
        //above 2 statements do the same thing
        this.strArray = ['123', '234'];
        this.age = age;
    }
}
let user1 = new User3("kriti", 10);
user1.strArray[1] = "sdfsf"; //allowed in readonly
user1.strArray.push('sdfdfg'); //allowed
// user1.strArray = ["sdfsdf"]; not allowed
///////////// getter and setter
//setters can be used when we want to validate the input sent by new before actually storing them into a variable.
//through protected you can have the extended class access the variables but not anything else
class User4 {
    constructor() {
        this._firstName = "";
        this._lastName = "";
        this.lname = "";
        this.fname = "";
    }
    // constructor(private firstname: string, private lastname:string){} (in case of setters we can remove the constructor)
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    set firstName(firstname) {
        if (firstname.trim() === '')
            throw new Error('invalid input');
        this._firstName = firstname;
    }
    set lastName(lastname) {
        if (lastname.trim() === '')
            throw new Error('invalid input');
        this._lastName = lastname;
    }
    print() {
        console.log(this.fname, " ", this.lname);
    }
}
let user3 = new User4();
user3.firstName = "kanya";
user3.lastName = "bhatt";
console.log(user3.fullName);
//////////////////// static
class User5 {
    static heavyFunction() {
        console.log('hello some complex work happening here');
    } //static methods can be used for utility class where we want to do something that doesnt require the variables defined in the class 
}
User5.eid = 'user';
User5.eid = 'wefsfsdf';
let user4 = new User5();
///////// extends
class Employee extends User4 {
    constructor(jobTitle, firstname, lastname) {
        super();
        this.jobTitle = jobTitle;
        this.fname = firstname;
        this.lname = lastname;
        this.jobTitle = jobTitle;
        this.firstName = firstname;
        this.lastName = lastname;
    }
    work() {
        console.log(this._firstName);
    }
}
let emp = new Employee(10, 'name', "last");
emp.print();
/////// abstract classes - only for TS not JS
//acts as a base class for other classes to extend from
//shouldn't be initialised themselved
class UIElement {
    constructor(identifier) {
        this.identifier = identifier;
    }
}
class newFeature extends UIElement {
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
