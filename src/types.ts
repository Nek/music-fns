export type Note = string
export type Accidental = 'SHARP' | 'FLAT' | ''
export type AccidentalType = 'LETTER' | 'SYMBOL' | ''
export type Octave = number

export type NoteObject = {
  root: Note,
  accidental?: Accidental,
  accidentalType?: AccidentalType,
  octave?: Octave
}

export type Direction = 1 | -1



export type ScientificNote = string
export type Interval = number
export type Intervals = Interval[]

export type Scale = Note[]
export type Chord = Note[]
export type ScientificNotes = ScientificNote[]