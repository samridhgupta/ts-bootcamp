// Keeping the existing code working, implement a Square
// What behavior does a Square have ? (area and perimeter)

import { Shape } from "./Shape";
import { Rectangle } from "./Rect";

// Inheritance = Square isA Rectangle - White Box reuse
export class Square extends Rectangle {
    constructor(side: number) {
        super(side, side);
    }
    // No Need to recall the below methods as coming from Rectangle
    // area = (): number => super.area()
    // perimeter = (): number => super.perimeter()
}

// Better Approach when 

// To avoid "scaleHeightWise" in Square 
// Don't want to inherit all the methods.


// Composition = Square HasA Rectangle = Black-Box reuse
export class Square2 {
    rectangle: Shape;
    constructor(side: number) {
        this.rectangle = new Rectangle(side, side);
    }
    area = (): number => this.rectangle.area()
    perimeter = (): number => this.rectangle.perimeter()
}

// Composition over Inheritance - Driving Factor