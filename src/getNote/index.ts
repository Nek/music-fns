
import getRoot from '../getRoot';
import getAccidental from '../getAccidental';
import isNote from '../isNote';
import type { ScientificNote } from 'src/types';

const getNote = (note: ScientificNote) => {
  if (!isNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  return `${getRoot(note)}${getAccidental(note) || ''}`;
};

export default getNote;
