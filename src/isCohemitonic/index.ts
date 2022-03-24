// https://en.wikipedia.org/wiki/Anhemitonic_scale

import type { Direction, Interval, Scale } from 'src/types'
import { SEMITONE } from '../constants/Interval/Names'
import getIntervals from '../getIntervals'
import isHemitonic from '../isHemitonic'
import normalize from '../normalize'

type Options = {
  direction?: Direction
}

const isCohemitonic = (scale: Scale, { direction = 1 }: Options = {}) => {
  if (!isHemitonic(scale, { direction })) return false

  const normalizedScale = normalize(scale, { direction })
  const intervals = getIntervals(normalizedScale)

  const groups = intervals.reduce(
    (acc: Interval[][], interval: Interval, i: number) => {
      if (interval === SEMITONE) {
        if (acc.length === 0) return [[interval]]
        if (intervals[i - 1] !== SEMITONE) return [...acc, [interval]]

        acc[acc.length - 1].push(interval)
        return acc
      }
      return acc
    },
    [],
  )

  return (
    groups.filter((group) => group.length >= 2).length >= 2 ||
    groups.filter((group) => group.length > 2).length >= 1
  )
}

export default isCohemitonic
