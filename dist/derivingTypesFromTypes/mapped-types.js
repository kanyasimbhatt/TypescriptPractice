"use strict";
//converting one object type to some other object type using the other object type
// taking the properties of some other object and defining custom value type for each, view example below
let mathOperations = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};
let newobj = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(4, 1)
};
let newobj1 = {
    add: mathOperations.add(1, 2),
}; //now here add and subtract become optional properties 
