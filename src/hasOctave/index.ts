
import type { ScientificNote } from 'src/types';
import getOctave from '../getOctave';
import isNote from '../isNote';

const hasOctave = (note: ScientificNote) => {
  if (!isNote(note)) {
    return false;
  }

  return typeof getOctave(note) !== 'undefined';
};

export default hasOctave;
