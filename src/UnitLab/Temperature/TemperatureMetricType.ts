import { MetricType, UNIT_TYPE } from "../Common/MetricType";


// Library of TemperatureMetricType
export const CELSIUS = new MetricType("C", UNIT_TYPE.TEMPERATURE, 1, 0);
export const FAHRENHEIT = new MetricType("F", UNIT_TYPE.TEMPERATURE, 5 / 9, 32);
export const KELVIN = new MetricType("K", UNIT_TYPE.TEMPERATURE, 273.15, 0);
