import createScale from '../src/createScale';
import scale from '../src/constants/Scale';
import objectToNote from '../src/objectToNote';
import sharpToFlat from '../src/sharpToFlat';
import accidentalToLetter from '../src/accidentalToLetter';
import getChromaticCPosition from '../src/getChromaticCPosition';
import getIntervals from '../src/getIntervals';
import normalize from '../src/normalize';
import type { Octave } from 'src/types';

const createScalesForOctave = (octave: Octave) => {
  const root = objectToNote({
    root: 'C',
    octave
  });

  const sharpScale = createScale(root, scale.CHROMATIC);
  const flatScale = sharpScale.map(sharpToFlat);

  const symbolScales = [sharpScale, flatScale];
  const letterScales = symbolScales.map(scale => scale.map(accidentalToLetter));

  return [...symbolScales, ...letterScales];
};

describe('scales', () => {
  it('should return the correct chromatic c positions across 8 octaves', () => {
    const octaves = [...Array(8).keys()];

    const scales = octaves
      .map(createScalesForOctave)
      .reduce((acc, v) => [...acc, ...v], []);

    const chromaticCPositions = scales.map(scale =>
      scale.map(getChromaticCPosition)
    );
    const intervals = scales.map(scale =>
      getIntervals(normalize(scale))
    );

    expect(
      chromaticCPositions.every(
        c => chromaticCPositions[0].join(',') === c.join(',')
      )
    ).toBe(true);

    expect(
      intervals.every(i => scale.CHROMATIC.join(',') === i.join(','))
    ).toBe(true);
  });
});
