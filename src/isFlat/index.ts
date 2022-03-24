import noteToObject from '../noteToObject'
import isNote from '../isNote'
import { FLAT } from '../constants/Accidental'
import type { ScientificNote } from 'src/types'

const isFlat = (note: ScientificNote) => {
  if (!isNote(note)) {
    return false
  }

  return noteToObject(note).accidental === FLAT
}

export default isFlat
