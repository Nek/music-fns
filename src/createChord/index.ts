import transpose from '../transpose'
import areIntervals from '../areIntervals'
import { ROOT } from '../constants/Interval/Names'
import type {
  Chord,
  Interval,
  Intervals,
  ScientificNote,
  ScientificNotes,
} from 'src/types'

const createChord = (
  root: ScientificNote,
  chord: Intervals,
): ScientificNotes => {
  if (!areIntervals(chord)) {
    throw new Error(
      `Provide a valid collection of chord intervals ex: [0, 1, 3]`,
    )
  }

  if (chord[0] !== ROOT) {
    throw new Error(`First interval of chord should be 0 (Root)`)
  }

  return chord.reduce(
    (acc: Chord, interval: Interval) => [...acc, transpose(root, interval)],
    [],
  )
}

export default createChord
