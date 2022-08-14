export const averagePair = (arr: number[], avg: number): boolean => {
  let left = 0
  let right = arr.length - 1


  while (left <= right) {
    const pairAvg = (arr[left] + arr[right]) / 2

    if (pairAvg === avg) {
      return true;
    } else if (pairAvg > avg) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}