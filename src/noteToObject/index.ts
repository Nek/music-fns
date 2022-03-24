import SCIENTIFIC_NOTE from '../constants/Regex/SCIENTIFIC_NOTE'
import isNote from '../isNote'

import {
  FLAT_LETTER,
  FLAT_SYMBOL,
  SHARP_LETTER,
  SHARP_SYMBOL,
  FLAT,
  SHARP,
  LETTER,
  SYMBOL,
} from '../constants/Accidental'
import type {
  Accidental,
  AccidentalType,
  NoteObject,
  ScientificNote,
} from 'src/types'

const isFlat = (accidental: string) =>
  [FLAT_LETTER, FLAT_SYMBOL].includes(accidental)
const isSharp = (accidental: string) =>
  [SHARP_LETTER, SHARP_SYMBOL].includes(accidental)

const isSymbol = (accidental: string) =>
  [FLAT_SYMBOL, SHARP_SYMBOL].includes(accidental)
const isLetter = (accidental: string) =>
  [FLAT_LETTER, SHARP_LETTER].includes(accidental)

const getAccidental = (accidental: string) => {
  if (isSharp(accidental)) return SHARP
  else if (isFlat(accidental)) return FLAT
  return undefined
}

const getAccidentalType = (accidental: string) => {
  if (isSymbol(accidental)) return SYMBOL
  else if (isLetter(accidental)) return LETTER
  return undefined
}

const parseAccidental = (acc: string) => ({
  accidental: getAccidental(acc) as Accidental,
  accidentalType: getAccidentalType(acc) as AccidentalType,
})

const noteToObject = (scientificNote: ScientificNote): NoteObject => {
  if (!isNote(scientificNote)) {
    throw new Error(`"${scientificNote}" is not a valid scientific note.`)
  }

  const regexResult = SCIENTIFIC_NOTE.exec(scientificNote)
  const root = regexResult?.[1]
  const accidental = regexResult?.[2]
  const octave = regexResult?.[3]

  return {
    root: root!.toUpperCase(),
    ...parseAccidental(accidental!),
    octave: typeof octave !== 'undefined' ? Number(octave) : undefined,
  }
}

export default noteToObject
