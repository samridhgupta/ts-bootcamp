// Keeping the existing code working, implement a Square
// What behaviour does a Square have ? (area and perimeter)

import { Rectangle } from "./Rect";
export class Square extends Rectangle {
    constructor(side: number) {
        super(side, side);
    }

    // No Need to recall the below methods as coming from Rectangle

    // area = (): number => super.area()
    // perimeter = (): number => super.perimeter()
}

// export class Square2 {
//     side: number;
//     constructor(side: number) {
//         this.side = side;
//     }
//     area(): number {
//         return this.side * this.side
//     }
//     perimeter(): number {
//         return (this.side) * 4
//     }
// }

