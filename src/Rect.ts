// Implement a Geometric Rectangle
// What behavior does a Rectangle have ? (area and perimeter)
// Write unit tests to verify your Rectangle actually works…

import { Shape } from "./Shape";

export class Rectangle implements Shape {
    private readonly height: number;
    private readonly width: number;
    // Made the attribute to be Private and Readonly

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }
    area = (): number => this.height * this.width;
    perimeter = (): number => (this.height + this.width) * 2;
    scaleHeightWise = (factor: number): Rectangle => new Rectangle(this.height + this.height * factor / 100, this.width)
}

// export const generateRectangle = (height: number, width: number) => ({
//     area: height * width,
//     perimeter: 2 * (height + width)
// })
