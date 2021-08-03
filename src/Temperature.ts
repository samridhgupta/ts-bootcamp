

// Composition = Square HasA Rectangle = Black-Box reuse


// type MetricType 
// export class Temperature {
//     private tempInK: number;
//     constructor(temp: string) {
//         const tempNum = parseInt(temp.substring(0, temp.length - 1));
//         if (temp.toLowerCase().includes("c")) {
//             this.tempInK = tempNum + 273.15;
//         } else if (temp.toLowerCase().includes("f")) {
//             this.tempInK = ((tempNum - 32) * 5 / 9) + 273.15;
//         } else {
//             throw new Error();
//         }
//     }
//     toC = (): string => {
//         return `${this.tempInK - 273.15}C`;
//     }
//     toF = (): string => {
//         return `${((this.tempInK - 273.15) * 9 / 5) + 32}F`;
//     }
//     toK = (): string => {
//         return `${this.tempInK}K`;
//     }
// }


// Updated 


export class MetricType {
    name: string; numberOfBaseUnits: number; offset: number;
    constructor(name: string, numberOfBaseUnits: number, offset: number) {
        this.name = name;
        this.numberOfBaseUnits = numberOfBaseUnits;
        this.offset = offset;
    }
    inBaseUnits(value: number): number {
        return (value - this.offset) * this.numberOfBaseUnits;
    }
    amountForm(valueInBaseUnits: number): number {
        return valueInBaseUnits / this.numberOfBaseUnits + this.offset
    }
}
// Library of 
export const CELSIUS = new MetricType("C", 1, 0);
export const FAHRENHEIT = new MetricType("F", 5 / 9, 32);
export const KELVIN = new MetricType("K", 273.15, 0);


export class TemperatureUnit {
    value: number;
    metricType: MetricType;
    valueInBaseUnits: number;

    constructor(value: number, metricType: MetricType) {
        this.value = value;
        this.metricType = metricType;
        this.valueInBaseUnits = metricType.inBaseUnits(value);
    }

    in(toUnit: MetricType): TemperatureUnit {
        return new TemperatureUnit(toUnit.amountForm(this.valueInBaseUnits), toUnit);
    }
}
