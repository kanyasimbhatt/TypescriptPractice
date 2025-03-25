"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve promise1");
    }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve promise2");
    }, 3000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve promise3");
    }, 2000);
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve promise3");
    }, 3000);
});
Promise.all = function (arrOfPromise) {
    let arr = [];
    let resolvePromiseCount = 0;
    return new Promise((resolve, reject) => {
        try {
            arrOfPromise.forEach((element) => __awaiter(this, void 0, void 0, function* () {
                let promiseOutput = yield element;
                arr.push(promiseOutput);
                resolvePromiseCount++;
                if (resolvePromiseCount === arrOfPromise.length)
                    resolve(arr);
            }));
        }
        catch (err) {
            reject(err);
        }
    });
};
Promise.all([promise1, promise2, promise3, promise4]).then((arr) => {
    console.log(arr);
});
