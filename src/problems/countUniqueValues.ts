// implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array, and counts the unique values in the array
// there can be negative numbers in the array, but it will always be sorted.

export const countUniqueValues = (arr: number[]): number => {
  if (!arr.length) {
    return arr.length;
  }
  let i = 0;

  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

export const countUniqueValuesMySolution = (sortedArr: number[], left: number = 0, acc: number[] = [], right?: number): number => {
  if (right === undefined) {
    right = sortedArr.length - 1;
  }

  if (left > right) {
    return acc.length;
  }

  if (!(acc.includes(sortedArr[left]))) {
    acc.push(sortedArr[left]);
  }

  if (!(acc.includes(sortedArr[right]))) {
    acc.push(sortedArr[right]);
  }

  right--
  left++

  return countUniqueValuesMySolution(sortedArr, left, acc, right);
}

export const countUniqueValuesMySolution2 = (sortedArr: number[], acc: number[] = [], count: number = 0): number => {
  if (!sortedArr.length) {
    return count;
  }

  const right = sortedArr.pop();

  if (!acc.length) {
    count++;
    acc.push(right!);
  } else if (acc[acc.length - 1] !== right!) {
    count++;
    acc.push(right!);
  }

  return countUniqueValuesMySolution2(sortedArr, acc, count);
}