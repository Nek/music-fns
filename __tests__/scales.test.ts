import createScale from '../src/createScale';
import scale from '../src/constants/Scale';
import transpose from '../src/transpose';
import getIntervals from '../src/getIntervals';
import objectToNote from '../src/objectToNote';
import { OCTAVE } from '../src/constants/Interval/Names';
import isHeptatonic from '../src/isHeptatonic';
import isDiatonic from '../src/isDiatonic';
import isHemitonic from '../src/isHemitonic';
import isScale from '../src/isScale';
import sharpToFlat from '../src/sharpToFlat';
import accidentalToLetter from '../src/accidentalToLetter';
import normalize from '../src/normalize';
import type { Octave } from 'src/types';

const createScalesForOctave = (octave: Octave) => {
  const root = objectToNote({
    root: 'C',
    octave
  });

  const rootScale = createScale(root, scale.MAJOR);

  const sequence = [...Array(OCTAVE).keys()];

  const sharpScales = sequence.map(interval =>
    rootScale.map(note => transpose(note, interval))
  );

  const flatScales = sharpScales.map(scale => scale.map(sharpToFlat));

  const symbolScales = [...sharpScales, ...flatScales];
  const letterScales = symbolScales.map(scale => scale.map(accidentalToLetter));

  return [...symbolScales, ...letterScales];
};

describe('scales', () => {
  it('should create correct major scales for all notes across 8 octaves', () => {
    const octaves = [...Array(8).keys()];

    const scales = octaves
      .map(createScalesForOctave)
      .reduce((acc, v) => [...acc, ...v], []);

    const intervals = scales.map(s =>
      getIntervals(normalize(s))
    );

    expect(scales.every(v => isHeptatonic(v))).toBe(true);
    expect(scales.every(v => isDiatonic(v))).toBe(true);
    expect(scales.every(v => isScale(v))).toBe(true);
    expect(scales.every(v => isHemitonic(v))).toBe(true);

    expect(
      intervals.every(interval => scale.MAJOR.join(',') === interval.join(','))
    ).toBe(true);
  });
});
