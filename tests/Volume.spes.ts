// Units Lab - Part 3
// 1 tbsp = 3 tsp
// 1 cup = 16 tbsp
// 1 pint = 2 cup

import { Unit } from "../src/UnitLab/Common/Unit";
import { FAHRENHEIT } from "../src/UnitLab/Temperature/TemperatureMetricType";
import { TABLESPOON } from "../src/UnitLab/Volume/VolumeMetricType";


describe("Volume: Converter", () => {

    test("Self convert check 12 inch", () => {
        expect(new Unit(12, TABLESPOON).in(TABLESPOON)).toEqual(new Unit(12, TABLESPOON));
    });

    // Error Tests
    test("Invalid Conversion ::", () => {
        expect(() => {
            new Unit(12, TABLESPOON).in(FAHRENHEIT);
        }).toThrow("Invalid Conversion");
    });
});
