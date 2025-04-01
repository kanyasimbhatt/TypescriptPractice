"use strict";
//meta programming code that interacts with/changes the behaviour other code, then that other code makes/builds up the entire application
//ex - adding validators for variables
/*
@Length(10, 20)
title: string

@Contains('hello')
text:string

here the Length and contains decorator is taken from class-validator library
*/
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
function logger(target, context) {
    //can be used to change the thing we are attaching it to(class here)
    return class extends target {
        constructor() {
            super(...arguments);
            this.age = 35;
        }
    }; //here this age property gets added into the original class
}
let DecoratorPersonClass = (() => {
    let _classDecorators = [logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _greet_decorators;
    var DecoratorPersonClass = _classThis = class {
        constructor() {
            this.name = (__runInitializers(this, _instanceExtraInitializers), "kanya");
            this.greet = this.greet.bind(this);
        }
        /*
        the code in the constructor above is added for followg scenario
        let max = new DecoratorPersonClass();
        greet = max.greet;
        greet() //gives error otherwise
        */
        greet() {
            console.log('Hi I am ' + this.name);
        }
    };
    __setFunctionName(_classThis, "DecoratorPersonClass");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _greet_decorators = [autobind];
        __esDecorate(_classThis, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: obj => "greet" in obj, get: obj => obj.greet }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DecoratorPersonClass = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DecoratorPersonClass = _classThis;
})();
//testing it out
const decoratedObj = new DecoratorPersonClass();
console.log(decoratedObj); //output: DecoratorPersonClass { name: 'kanya', age: 35 }
////////METHOD DECORATOR
function autobind(target, context) {
}
//these decorators are executed only when the thing they are attached to is done initialising
// here the method's decorator is executed first because the method is initialed before class is done initializing 
