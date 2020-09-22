/*
|---------------------------------------------------------------------------------
| The median is the middle number in a sorted list of numbers
| and can be more descriptive of that data set than the average.
|---------------------------------------------------------------------------------
*/
export const getMedian = (arr: number[]) => {
  const midIndex = Math.floor(arr.length / 2);
  const sortedArr = [...arr].sort((a, b) => a - b);

  // Odd number of elements
  if (sortedArr.length % 2 !== 0) {
    return sortedArr[midIndex];
  }

  // Even number of elements
  return (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
};
