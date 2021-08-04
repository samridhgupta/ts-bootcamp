import { MetricType, UNIT_TYPE } from "../Common/MetricType";

// Library of LengthMetricType
export const INCH = new MetricType("in", UNIT_TYPE.LENGTH, 1);
export const FEET = new MetricType("ft", UNIT_TYPE.LENGTH, 12);
export const YARD = new MetricType("yr", UNIT_TYPE.LENGTH, 36);
export const MILE = new MetricType("mi", UNIT_TYPE.LENGTH, 63360);

