import type { Interval } from 'src/types'
import { TONE } from '../constants/Interval/Names'

const isTone = (interval: Interval) => interval === TONE

export default isTone
