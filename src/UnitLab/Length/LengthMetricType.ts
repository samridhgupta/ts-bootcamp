
export class LengthMetricType {
    name: string; multiplier: number;
    constructor(name: string, multiplier: number) {
        this.name = name;
        this.multiplier = multiplier;
    }
    inBaseUnits(value: number): number {
        return (value * this.multiplier);
    }
    amountForm(valueInBaseUnits: number): number {
        return valueInBaseUnits / this.multiplier;
    }
}

// Library of LengthMetricType
export const INCH = new LengthMetricType("in", 1);
export const FEET = new LengthMetricType("ft", 12);
export const YARD = new LengthMetricType("yr", 36);
export const MILE = new LengthMetricType("mi", 63360);

