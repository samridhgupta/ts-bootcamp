// Temp Lab
// 0C = 32 F
// -40C = -40 F
// 212 F = 100C

import { CELSIUS, FAHRENHEIT, TemperatureUnit } from "../src/Temperature";

// describe("Temperature: Converter", () => {
//     test("Convert 0C to F = 32F", () => {
//         expect(new Temperature("0C").toF()).toEqual("32F");
//     });
//     test("Convert -40C to F = -40F", () => {
//         expect(new Temperature("-40C").toF()).toEqual("-40F");
//     });
//     test("Convert 212F to C = 100C", () => {
//         expect(new Temperature("212F").toC()).toEqual("100C");
//     });

//     test("Convert 0C to K = 273.15K", () => {
//         expect(new Temperature("0C").toK()).toEqual("273.15K");
//     });
//     // test("Convert Invalid Entry", () => {
//     //     expect(new Temperature("0")).toThrowError();
//     // });
// });


// 1. One Class per conversion - CToF, FToC
// 2. Single Temperature Class with Switch
// 3. One Class per Temperature Unit
// 4. Method per Conversion - CToF, FtoC
// 5. toBaseUnit - still has if conditions
// 6. DI with One Class per Temperature Un

// Round 2
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




// Breaking down the problem 

/**
     *
     * (0°C × 9/5) + 32 = 32°F
     *               0C = (32F - 32) * 5/9
     *
     * 0 C x 9/5 + 32
     *
     * 0 Degress Celicius
     * 0 - value
     * Unit - (Value, MetricType (name, number of base unit, offset))
     * C, F
     * 9 / 5, 5 / 9
     * 32, -32
     *
     * Unit, MetricType (C, F)
     */



describe("Temperature:2 Converter", () => {
    test("Convert 0C to F = 32F", () => {
        // const celsius = new MetricType("C", 1, 0);
        // const fahrenheit = new MetricType("F", 5 / 9, 32);
        // const Kelvin = new MetricType("K", 273.15, 0);
        expect(new TemperatureUnit(0, CELSIUS).in(FAHRENHEIT)).toEqual(new TemperatureUnit(32, FAHRENHEIT));
    });

    // test("Convert Invalid Entry", () => {
    //     expect(new Temperature("0")).toThrowError();
    // });
});