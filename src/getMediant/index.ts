
import type { Direction, Scale, ScientificNote } from 'src/types';
import getNoteOnDegree from '../getNoteOnDegree';
import isDiatonic from '../isDiatonic';

type Options = {
  direction?: Direction
};

const getMediant = (
  diatonicScale: Scale,
  {
    direction = 1
  }: Options = {}
): ScientificNote => {
  if (!isDiatonic(diatonicScale, { direction })) {
    throw new Error(
      `${JSON.stringify(diatonicScale)} is not a diatonic scale.`
    );
  }
  return getNoteOnDegree(diatonicScale, 3, { direction });
};

export default getMediant;
