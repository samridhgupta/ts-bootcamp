import { Rectangle } from "../src/Rect";
import { Square, Square2 } from "../src/Square";

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

describe("Square: Given side is 10", () => {
    test("Should return area 100", () => {
        expect(new Square2(10).area()).toEqual(100);
    });
    test("Should return Perimeter 40", () => {
        expect(new Square2(10).perimeter()).toEqual(40);
    });


    // Not need to check now for Square2 Class
    // test("Is it a Square Anymore?", () => {

    //     var square: Rectangle = new Square(3);
    //     var scaleSquare: Rectangle = square.scaleHeightWise(10);

    // })
});

// TDD - Approach  
// Red => Green => Refactor
// Write Test Case - then generate the code 
    // Red - Test Fail (declare it from the Test case to implementation)
    // Green - Test Pass (Compiling Stage)
    // Refactor - Change structure of code without changing Functionality.
// Can Write down Negative Test Cases
// Yarn test --watchAll (for sync test)