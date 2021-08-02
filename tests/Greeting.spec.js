"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Greeting_1 = require("../src/Greeting");
describe("Greeting", function () {
    test("should say hello", function () {
        expect(new Greeting_1.Greeting("Hari").hello()).toEqual("hello Hari");
    });
});
