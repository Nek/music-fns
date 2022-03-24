import type { Interval } from 'src/types'
import { OCTAVE } from '../constants/Interval/Names'

const isOctave = (interval: Interval) => interval === OCTAVE

export default isOctave
