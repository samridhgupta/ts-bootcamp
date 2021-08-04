// Units Lab - Part 3
// 1 tbsp = 3 tsp
// 1 cup = 16 tbsp
// 1 pint = 2 cup

import { Unit } from "../src/UnitLab/Common/Unit";
import { TABLESPOON } from "../src/UnitLab/Volume/VolumeMetricType";

describe("Volume: Converter", () => {

    test("Self convert check 12 inch", () => {
        expect(new Unit(12, TABLESPOON).in(TABLESPOON)).toEqual(new Unit(12, TABLESPOON));
    });
    // test("Convert 1 tbsp = 3 tsp", () => {
    //     expect(new Unit(12, TABLESPOON).in(FEET)).toEqual(new Unit(1, FEET));
    // });



    // test("Convert 1 cup = 16 tbsp", () => {
    //     expect(new Unit(3, FEET).in(YARD)).toEqual(new Unit(1, YARD));
    // });

    // test("Convert 1760 yard to  Miles = 1 mile", () => {
    //     expect(new Unit(1760, YARD).in(MILE)).toEqual(new Unit(1, MILE));
    // });
});