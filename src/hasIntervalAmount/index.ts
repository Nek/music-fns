
// https://en.wikipedia.org/wiki/Heptatonic_scale

import type { Direction, Scale } from 'src/types';
import isScale from '../isScale';
import normalize from '../normalize';

type Options = {
  direction?: Direction
};

const hasIntervalAmount = (
  scale: Scale,
  intervalAmount: number,
  {
    direction = 1
  }: Options = {}
) => {
  if (![-1, 1].includes(direction)) {
    throw new Error('Direction should be 1 (up) or -1 (down)');
  }

  try {
    const normalizedScale = normalize(scale, { direction });
    return (
      normalizedScale.length === intervalAmount + 1 && isScale(normalizedScale)
    );
  } catch (e) {
    return false;
  }
};

export default hasIntervalAmount;
