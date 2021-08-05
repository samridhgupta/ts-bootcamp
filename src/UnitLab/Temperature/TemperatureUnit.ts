

// Composition = Square HasA Rectangle = Black-Box reuse

// import { TemperatureMetricType } from "./TemperatureMetricType";


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

// export class TemperatureUnit {
//     value: number;
//     metricType: TemperatureMetricType;
//     valueInBaseUnits: number;

//     constructor(value: number, metricType: TemperatureMetricType) {
//         this.value = value;
//         this.metricType = metricType;
//         this.valueInBaseUnits = metricType.inBaseUnits(value);
//     }

//     in(toUnit: TemperatureMetricType): TemperatureUnit {
//         return new TemperatureUnit(toUnit.amountForm(this.valueInBaseUnits), toUnit);
//     }
// }


// Can comment as duplicate of the Unit
