// write a function called maxSubArraySum which accpets an array of intergers and a
// number called n. the function should calculate the maximum sum n concsecutive
// elements in the array.

// time complexity - O(n^2)
export const maxSubArraySumNaive = (arr: number[], num: number): number | null => {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

export const maxSubArraySum = (arr: number[], num: number): number | null => {
  console.log(arr, num)
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    console.log('i ', i);
    console.log('arr[i - num]', arr[i - num])
    console.log('arr[i]', arr[i])
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
    debugger
  }

  return maxSum;
}