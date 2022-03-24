import type { Intervals } from '../types'

const areIntervals = (intervals: Intervals) =>
  intervals.length > 1 &&
  (intervals.every((i) => i >= 0) || intervals.every((i) => i <= 0))

export default areIntervals
