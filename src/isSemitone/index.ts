import type { Interval } from 'src/types'
import { SEMITONE } from '../constants/Interval/Names'

const isSemitone = (interval: Interval) => interval === SEMITONE

export default isSemitone
