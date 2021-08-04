
export class MetricType {
    name: string; unitType: UNIT_TYPE; numberOfBaseUnits: number; offset: number;

    constructor(name: string, unitType: UNIT_TYPE, numberOfBaseUnits: number, offset?: number) {
        this.name = name;
        this.unitType = unitType;
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

export enum UNIT_TYPE {
    TEMPERATURE,
    LENGTH,
    VOLUME
}

