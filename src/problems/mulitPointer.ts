// Write a function called sumZero which accepts a
// sorted array of integers.The function should find the first
// pair where the sum is zero. Return an array that includes
// both values that a sum to sero or undefined if a pair does not exist

export const sumZero = (arr: number[]): undefined | number[] => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

export const sumZeroMyVersion = (arr: number[], left: number = 0, right?: number): undefined | number[] => {
  if (right === undefined) {
    right = arr.length - 1
  }

  if (left === right) {
    return undefined;
  }

  let sum = arr[left] + arr[right];

  if (sum === 0) {
    return [arr[left], arr[right]];
  } else if (sum > 0) {
    right--;
  } else {
    left++;
  }

  return sumZeroMyVersion(arr, left, right)
}

// time complexity - O(n^2)
// space complexitry - O(1)
export const sumZeroNaive = (arr: number[]): undefined | number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};