import type { Direction, Scale, ScientificNote } from 'src/types'
import getNoteOnDegree from '../getNoteOnDegree'
import isDiatonic from '../isDiatonic'

type Options = {
  direction?: Direction
}

const getSupertonic = (
  diatonicScale: Scale,
  { direction = 1 }: Options = {},
): ScientificNote => {
  if (!isDiatonic(diatonicScale, { direction })) {
    throw new Error(`${JSON.stringify(diatonicScale)} is not a diatonic scale.`)
  }
  return getNoteOnDegree(diatonicScale, 2, { direction })
}

export default getSupertonic
