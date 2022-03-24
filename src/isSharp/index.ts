import noteToObject from '../noteToObject'
import isNote from '../isNote'
import { SHARP } from '../constants/Accidental'
import type { ScientificNote } from 'src/types'

const isSharp = (note: ScientificNote) => {
  if (!isNote(note)) {
    return false
  }

  return noteToObject(note).accidental === SHARP
}

export default isSharp
