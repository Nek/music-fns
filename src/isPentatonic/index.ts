// https://en.wikipedia.org/wiki/Pentatonic_scale

import type { Direction, Scale } from 'src/types'
import hasIntervalAmount from '../hasIntervalAmount'

type Options = {
  direction?: Direction
}

const isPentatonic = (scale: Scale, { direction = 1 }: Options = {}) =>
  hasIntervalAmount(scale, 5, { direction })

export default isPentatonic
