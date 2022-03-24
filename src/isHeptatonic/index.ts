
// https://en.wikipedia.org/wiki/Heptatonic_scale

import type { Direction, Scale } from 'src/types';
import hasIntervalAmount from '../hasIntervalAmount';

type Options = {
  direction?: Direction
};

const isHeptatonic = (scale: Scale, {
  direction = 1
}: Options = {}) =>
  hasIntervalAmount(scale, 7, { direction });

export default isHeptatonic;
