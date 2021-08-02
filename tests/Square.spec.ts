import { Square } from "../src/Square";

describe("Square", () => {
    test("Should return area", () => {
        expect(new Square(10).area()).toEqual(100);
    });
    test("Should return Perimeter", () => {
        expect(new Square(10).perimeter()).toEqual(40);
    });
});

// More descriptive Test Names:
    // Should return Area of Square of Side 10 - 100
    // Area Should Return 100

// describe("Square 2", () => {
//     test("Should return area", () => {
//         expect(new Square2(10).area()).toEqual(100);
//     });
//     test("Should return Perimeter", () => {
//         expect(new Square2(10).perimeter()).toEqual(40);
//     });
// });