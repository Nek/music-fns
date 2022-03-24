
// https://en.wikipedia.org/wiki/Anhemitonic_scale

import isScale from '../isScale';
import getIntervals from '../getIntervals';
import normalize from '../normalize';

import { SEMITONE } from '../constants/Interval/Names';
import type { Direction, Scale } from 'src/types';

type Options = {
  direction?: Direction
};

const isAnhemitonic = (scale: Scale, {
  direction = 1
}: Options = {}) => {
  if (!isScale(scale, { direction })) return false;

  const normalizedScale = normalize(scale, { direction });
  const intervals = getIntervals(normalizedScale);

  return intervals.filter(i => i === SEMITONE).length === 0;
};

export default isAnhemitonic;
