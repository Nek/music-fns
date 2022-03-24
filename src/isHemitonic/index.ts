
// https://en.wikipedia.org/wiki/Anhemitonic_scale

import { SEMITONE } from '../constants/Interval/Names';

import isScale from '../isScale';
import getIntervals from '../getIntervals';
import normalize from '../normalize';
import type { Direction, Scale } from 'src/types';

type Options = {
  direction?: Direction
};

const isHemitonic = (scale: Scale, {
  direction = 1
}: Options = {}) => {
  if (!isScale(scale, { direction })) return false;

  const normalizedScale = normalize(scale, { direction });
  const intervals = getIntervals(normalizedScale);

  return intervals.filter(i => Math.abs(i) === SEMITONE).length > 0;
};

export default isHemitonic;
