
// https://en.wikipedia.org/wiki/Pentatonic_scale

import type { Direction, Scale } from 'src/types';
import hasIntervalAmount from '../hasIntervalAmount';

type Options = {
  direction?: Direction
};

const isOctatonic = (scale: Scale, {
  direction = 1
}: Options = {}) =>
  hasIntervalAmount(scale, 8, { direction });

export default isOctatonic;
