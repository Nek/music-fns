
import { SYMBOL } from '../constants/Accidental';

import noteToObject from '../noteToObject';
import isNote from '../isNote';
import type { ScientificNote } from 'src/types';

const hasAccidentalSymbol = (note: ScientificNote) => {
  if (!isNote(note)) {
    return false;
  }

  return noteToObject(note).accidentalType === SYMBOL;
};

export default hasAccidentalSymbol;
