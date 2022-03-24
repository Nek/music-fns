import type { Direction, Scale, ScientificNote } from 'src/types'
import normalize from '../normalize'

type Options = {
  direction?: Direction
}

const getNoteOnDegree = (
  scale: Scale,
  degree: number,
  { direction = 1 }: Options = {},
): ScientificNote => {
  const normalizedScale = normalize(scale, { direction })

  if (degree < 1 || degree > normalizedScale.length) {
    throw new Error(`Degree must be between 1 - ${normalizedScale.length}.`)
  }

  return normalizedScale[degree - 1]
}

export default getNoteOnDegree
