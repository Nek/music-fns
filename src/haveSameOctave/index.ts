import noteToObject from '../noteToObject'
import areNotes from '../areNotes'
import type { ScientificNotes } from 'src/types'

function uniq<T>(arr: T[]) {
  return arr.filter((e: T, i: number, a: T[]) => a.indexOf(e) === i)
}

const haveSameOctave = (notes: ScientificNotes = []) => {
  if (!areNotes(notes) || notes.length < 2) return false
  return uniq(notes.map(noteToObject).map((o) => o.octave)).length === 1
}

export default haveSameOctave
