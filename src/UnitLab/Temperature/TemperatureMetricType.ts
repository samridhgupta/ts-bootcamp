import { MetricType } from "../Common/MetricType";


// Library of TemperatureMetricType
export const CELSIUS = new MetricType("C", 1, 0);
export const FAHRENHEIT = new MetricType("F", 5 / 9, 32);
export const KELVIN = new MetricType("K", 273.15, 0);
