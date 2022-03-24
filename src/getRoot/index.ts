
import noteToObject from '../noteToObject';
import isNote from '../isNote';
import type { ScientificNote } from 'src/types';

const getRoot = (note: ScientificNote) => {
  if (!isNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  return noteToObject(note).root;
};

export default getRoot;
