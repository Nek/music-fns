
import transpose from '../transpose';
import areIntervals from '../areIntervals';
import type { ScientificNote, Intervals, ScientificNotes } from 'src/types';

type Options = {
  includeRootEnd?: boolean
};

const createScale = (
  root: ScientificNote,
  scale: Intervals,
  {
    includeRootEnd = false
  }: Options = {}
): ScientificNotes => {
  if (!areIntervals(scale)) {
    throw new Error(
      `Provide a valid collection of scale intervals ex: [1, 2, 1, 2, 1]`
    );
  }

  const notes = scale.reduce(
    (acc, interval) => [...acc, transpose(acc[acc.length - 1], interval, root)],
    [root]
  );

  return includeRootEnd ? notes : notes.slice(0, -1);
};

export default createScale;
