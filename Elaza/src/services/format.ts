import {Metrics} from '@themes'

export type PassCodeState = {
  code0: string
  code1: string
  code2: string
  code3: string
}
/**
 * Format unit for the css value
 * @param value: number | string
 */
export const convertToPx = (value: number | string): string => {
  return typeof value === 'number' ? `${value}px` : value
}

/**
 * Format unit for the css value
 * @param type: string
 */
const MetricType = Metrics as {
  [key: string]: any
}

export const getType = (type: string, key: string) => {
  return type && MetricType[key][type]
}
