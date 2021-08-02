import { Square, Square2 } from "../src/Square";

describe("Square", () => {
    test("Should return area", () => {
        expect(new Square(10).area()).toEqual(100);
    });
    test("Should return Perimeter", () => {
        expect(new Square(10).perimeter()).toEqual(40);
    });
});

// describe("Square 2", () => {
//     test("Should return area", () => {
//         expect(new Square2(10).area()).toEqual(100);
//     });
//     test("Should return Perimeter", () => {
//         expect(new Square2(10).perimeter()).toEqual(40);
//     });
// });