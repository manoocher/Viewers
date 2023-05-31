// This is really annoying, but we can't use string concatenation to produce names
// or the purger will purge stuff we need. This is a lazy workaground.
// The alternative would be to use the safelist, but then we would have to remember
// which components which entry in the safelist are used for.
// https://tailwindcss.com/docs/optimizing-for-production
export default function getGridWidthClass(gridCol) {
  const widthClasses = {
    // 1: 'w-1/24',
    // 2: 'w-2/24',
    // 3: 'w-3/24',
    // 4: 'w-4/24',
    // 5: 'w-5/24',
    // 6: 'w-6/24',
    // 7: 'w-7/24',
    // 8: 'w-8/24',
    // 9: 'w-9/24',
    // 10: 'w-10/24',
    // 11: 'w-11/24',
    // 12: 'w-12/24',
    // 13: 'w-13/24',
    // 14: 'w-14/24',
    // 15: 'w-15/24',
    // 16: 'w-16/24',
    // 17: 'w-17/24',
    // 18: 'w-18/24',
    // 19: 'w-19/24',
    // 20: 'w-20/24',
    // 21: 'w-21/24',
    // 22: 'w-22/24',
    // 23: 'w-23/24',
    // 24: 'w-24/24',
    1: 'md:w-1/24',
    2: 'md:w-2/24',
    3: 'md:w-3/24',
    4: 'md:w-4/24',
    5: 'md:w-5/24',
    6: 'md:w-6/24',
    7: 'md:w-7/24',
    8: 'md:w-8/24',
    9: 'md:w-9/24',
    10: 'md:w-10/24',
    11: 'md:w-11/24',
    12: 'md:w-12/24',
    13: 'md:w-13/24',
    14: 'md:w-14/24',
    15: 'md:w-15/24',
    16: 'md:w-16/24',
    17: 'md:w-17/24',
    18: 'md:w-18/24',
    19: 'md:w-19/24',
    20: 'md:w-20/24',
    21: 'md:w-21/24',
    22: 'md:w-22/24',
    23: 'md:w-23/24',
    24: 'md:w-24/24',
  };

  return widthClasses[gridCol];
}
