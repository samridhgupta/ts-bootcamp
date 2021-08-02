"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeting = void 0;
var Greeting = /** @class */ (function () {
    function Greeting(name) {
        this.name = name;
    }
    Greeting.prototype.hello = function () {
        return "hello " + this.name;
    };
    return Greeting;
}());
exports.Greeting = Greeting;
