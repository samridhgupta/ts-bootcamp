
export class TemperatureMetricType {
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
        return valueInBaseUnits / this.numberOfBaseUnits + this.offset;
    }
}

// Library of TemperatureMetricType
export const CELSIUS = new TemperatureMetricType("C", 1, 0);
export const FAHRENHEIT = new TemperatureMetricType("F", 5 / 9, 32);
export const KELVIN = new TemperatureMetricType("K", 273.15, 0);
