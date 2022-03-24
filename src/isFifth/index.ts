
import { PERFECT_FIFTH } from '../constants/Interval/MinorMajor';

import {
  AUGMENTED_FIFTH,
  DIMINISHED_FIFTH
} from '../constants/Interval/AugmentedDiminished';
import type { Interval } from 'src/types';

const isFifth = (interval: Interval) =>
  interval === PERFECT_FIFTH ||
  interval === AUGMENTED_FIFTH ||
  interval === DIMINISHED_FIFTH;

export default isFifth;
