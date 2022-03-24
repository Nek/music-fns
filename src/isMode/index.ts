
// https://en.wikipedia.org/wiki/Mode_(music)

import isDiatonic from '../isDiatonic';
import mode from '../constants/Mode';
import getIntervals from '../getIntervals';
import normalize from '../normalize';
import type { Direction, Scale } from 'src/types';

type ModeName = keyof typeof mode

type Options = {
  direction?: Direction
};

const isMode = (scale: Scale, {
  direction = 1
}: Options = {}) => {
  if (![-1, 1].includes(direction)) {
    throw new Error('Direction should be 1 (up) or -1 (down)');
  }

  if (!isDiatonic(scale)) return false;

  if (direction === -1) scale.reverse();

  const normalizedScale = normalize(scale);
  const intervals = getIntervals(normalizedScale);

  const modes = Object.keys(mode).map((k) => mode[k as ModeName]);
  return modes.some(m => m.join(',') === intervals.join(','));
};

export default isMode;
