import { MINOR_THIRD, MAJOR_THIRD } from '../constants/Interval/MinorMajor'
import {
  AUGMENTED_THIRD,
  DIMINISHED_THIRD,
} from '../constants/Interval/AugmentedDiminished'
import type { Interval } from 'src/types'

// @flow

const isThird = (interval: Interval) =>
  interval === DIMINISHED_THIRD ||
  interval === MINOR_THIRD ||
  interval === MAJOR_THIRD ||
  interval === AUGMENTED_THIRD

export default isThird
