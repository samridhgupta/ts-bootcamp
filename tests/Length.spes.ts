// 12 in = 1ft
// 3 ft = 1 yd
// 1760 yd = 1mi

import { FEET, INCH, MILE, YARD } from "../src/Length/LengthMetricType";
import { LengthUnit } from "../src/Length/LengthUnit";

// 

describe("Length: Converter", () => {



    test("Convert 12 inch to Feet = 1ft", () => {
        expect(new LengthUnit(12, INCH).in(FEET)).toEqual(new LengthUnit(1, FEET));
    });

    test("Self convert check 12 inch", () => {
        expect(new LengthUnit(12, INCH).in(INCH)).toEqual(new LengthUnit(12, INCH));
    });

    test("Convert 3 feet to Yard = 1 yard", () => {
        expect(new LengthUnit(3, FEET).in(YARD)).toEqual(new LengthUnit(1, YARD));
    });

    test("Convert 1760 yard to  Miles = 1 mile", () => {
        expect(new LengthUnit(1760, YARD).in(MILE)).toEqual(new LengthUnit(1, MILE));
    });
});