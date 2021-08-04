


import { MetricType } from "./MetricType";

// Updated 

export class Unit {
    value: number;
    metricType: MetricType;
    valueInBaseUnits: number;

    constructor(value: number, metricType: MetricType) {
        this.value = value;
        this.metricType = metricType;
        this.valueInBaseUnits = metricType.inBaseUnits(value);
    }

    in(toUnit: MetricType): Unit {
        return new Unit(toUnit.amountForm(this.valueInBaseUnits, this.metricType.unitType), toUnit);
    }
}

