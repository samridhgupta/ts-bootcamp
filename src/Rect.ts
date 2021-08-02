// Implement a Geometric Rectangle
// What behavior does a Rectangle have ? (area and perimeter)
// Write unit tests to verify your Rectangle actually works…

export class Rectangle {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    area(): number {
        return this.height * this.width;
    }

    perimeter(): number {
        return (this.height + this.width) * 2;
    }
}

// export const generateRectangle = (height: number, width: number) => ({
//     area: height * width,
//     perimeter: 2 * (height + width)
// })
