"use strict";
//in function overloads we specify multiple function declaration where we can specify different return types for different types of output
function getLength(input) {
    if (typeof input === 'string') {
        let words = input.split(' ');
        return `${words.length} words`;
    }
    return input.length;
}
let numOfWords = getLength('hello hey hi');
numOfWords.length; //now here its not fiving me an error which it previously was before adding function overloads(because the return could be number or string)
