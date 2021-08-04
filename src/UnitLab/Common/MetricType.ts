
export class MetricType {
    name: string; numberOfBaseUnits: number; offset: number;
    constructor(name: string, numberOfBaseUnits: number, offset?: number) {
        this.name = name;
        this.numberOfBaseUnits = numberOfBaseUnits;
        this.offset = offset || 0;
    }
    inBaseUnits(value: number): number {
        return (value - this.offset) * this.numberOfBaseUnits;
    }
    amountForm(valueInBaseUnits: number): number {
        return valueInBaseUnits / this.numberOfBaseUnits + this.offset;
    }
}


