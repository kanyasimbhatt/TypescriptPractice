"use strict";
//used to develop utilty types/helper types
function getFullName(person) {
    if ('firstName' in person && 'lastName' in person && person.firstName && person.lastName) {
        return `${person.firstName} and ${person.lastName}`;
    }
    throw new Error("no firstname and lastname present in the object");
}
function getFullName2(person) {
    if ('firstName' in person && 'lastName' in person && person.firstName && person.lastName) {
        return `${person.firstName} and ${person.lastName}`;
    }
    throw new Error("no firstname and lastname present in the object");
}
function func(a, b) {
    return a + b;
}
