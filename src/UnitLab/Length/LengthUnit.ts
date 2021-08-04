

// Composition = Square HasA Rectangle = Black-Box reuse

import { LengthMetricType } from "./LengthMetricType";

// Updated 

export class LengthUnit {
    value: number;
    metricType: LengthMetricType;
    valueInBaseUnits: number;

    constructor(value: number, metricType: LengthMetricType) {
        this.value = value;
        this.metricType = metricType;
        this.valueInBaseUnits = metricType.inBaseUnits(value);
    }

    in(toUnit: LengthMetricType): LengthUnit {
        return new LengthUnit(toUnit.amountForm(this.valueInBaseUnits), toUnit);
    }
}
