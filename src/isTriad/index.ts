
// https://en.wikipedia.org/wiki/Triad_(music)

import chords from '../constants/Chord';
const { MAJOR, MINOR, DIMINISHED, AUGMENTED } = chords
import getIntervals from '../getIntervals';
import areNotes from '../areNotes';
import type { Chord } from 'src/types';

const isTriad = (chord: Chord) => {
  if (!areNotes(chord)) return false;

  const intervals = [0, ...getIntervals(chord, { fromRoot: true })];

  const triads = [MAJOR, MINOR, DIMINISHED, AUGMENTED];
  return triads.some(t => t.join(',') === intervals.join(','));
};

export default isTriad;
