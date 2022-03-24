import isScale from '../isScale'
import getIntervals from '../getIntervals'
import type { Direction, Scale } from 'src/types'

type Options = {
  direction?: Direction
}

const isAscending = (scale: Scale, { direction = 1 }: Options = {}) => {
  if (!isScale(scale, { direction })) {
    return false
  }

  const intervals = getIntervals(scale, { direction })
  return intervals.every((interval) => interval < 0)
}

export default isAscending
