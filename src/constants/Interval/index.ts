// https://en.wikipedia.org/wiki/Interval_(music)#Interval_number_and_quality

import names from './Names'
import short from './Short'

import minorMajor from './MinorMajor'
import augmentedDiminished from './AugmentedDiminished'

export default {
  ...short,
  ...names,
  ...minorMajor,
  ...augmentedDiminished,
}
