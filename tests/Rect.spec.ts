import { Rectangle } from "../src/Rect";

describe("Rectangle", () => {
    test("Should return area", () => {
        expect(new Rectangle(10, 20).area()).toEqual(200);
    });
    test("Should return Perimeter", () => {
        expect(new Rectangle(10, 20).perimeter()).toEqual(60);
    });
});