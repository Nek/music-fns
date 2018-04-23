// @flow

// https://en.wikipedia.org/wiki/Heptatonic_scale

import isValidScale from '../isValidScale';
import normalizeScale from '../normalizeScale';
import getNote from '../getNote';

type options = {
  direction?: direction
};

const isScaleWithIntervalAmount = (
  scale: Scale,
  intervalAmount: number,
  { direction = 1 }: options = {}
) => {
  if (![-1, 1].includes(direction)) {
    throw new Error('Direction should be 1 (up) or -1 (down)');
  }

  try {
    const normalizedScale = normalizeScale(scale, { direction });
    return (
      normalizedScale.length === intervalAmount + 1 &&
      isValidScale(normalizedScale)
    );
  } catch (e) {
    return false;
  }
};

export default isScaleWithIntervalAmount;
