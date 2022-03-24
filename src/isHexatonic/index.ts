// https://en.wikipedia.org/wiki/Hexatonic_scale

import type { Direction, Scale } from 'src/types'
import hasIntervalAmount from '../hasIntervalAmount'

type Options = {
  direction?: Direction
}

const isHexatonic = (scale: Scale, { direction = 1 }: Options = {}) =>
  hasIntervalAmount(scale, 6, { direction })

export default isHexatonic
