// 12 in = 1ft
// 3 ft = 1 yd
// 1760 yd = 1mi

import { FEET, INCH, MILE, YARD } from "../src/UnitLab/Length/LengthMetricType";
import { Unit } from "../src/UnitLab/Common/Unit";

describe("Length: Converter", () => {
    test("Convert 12 inch to Feet = 1ft", () => {
        expect(new Unit(12, INCH).in(FEET)).toEqual(new Unit(1, FEET));
    });

    test("Self convert check 12 inch", () => {
        expect(new Unit(12, INCH).in(INCH)).toEqual(new Unit(12, INCH));
    });

    test("Convert 3 feet to Yard = 1 yard", () => {
        expect(new Unit(3, FEET).in(YARD)).toEqual(new Unit(1, YARD));
    });

    test("Convert 1760 yard to  Miles = 1 mile", () => {
        expect(new Unit(1760, YARD).in(MILE)).toEqual(new Unit(1, MILE));
    });
});




// No Extends Keyword
// Class Names:
// Should not end with or / er / tion(Convertor / Manager / Conversion)
// Should be a things(noun not verbs)
// Comment describing what the class does (later we can get rid of the comment)
// No combinatorial explosion(Classes or Methods)
// Avoid indecent exposure(instance variables should be private)
// Embrace Immutability(instance variables should be final)
// No If / Else logic(prefer dispatch - table or polymorphism and avoid procedural code)
// Don’t break Encapsulation (Logic and Data together)
// No Getters or Setters
// No Duplication(Literal, Semantic, Structural or Data)
// Unit Test
// Be Minimalistic(no surplus code)
// Clean API(should be simple and intuitive for the caller)