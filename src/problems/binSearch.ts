// this video example solution is infinitly loop beacuse of the while loop
export const binSearch = (arr: number[], val: number): number => {
  let min = 0;
  let max = arr.length - 1;

  // while (min <= max) {
  //   let middle = Math.floor((min + max / 2));
  //   let currentElement = arr[middle];
  //   console.log(currentElement)
  //   if (arr[middle] < val) {
  //     min = middle + 1;
  //   } else if (arr[middle] > val) {
  //     max = middle - 1;
  //   } else {
  //     return middle
  //   }
  //   debugger;
  // }

  return -1
};

// This is pretty close to probably what i would of come up with, i did do some research and receursive searches
// are actually less efficient than iterative one because ofthe space complexity of O(log N) whiler iterative is
// O(1)
export const binarySearchFromStackOverFlow = (
  arr: number[],
  x: number,
  start = 0,
  end = arr.length
): number => {
  // If the item does not exist, return -1
  if(end < start) return -1;

  // Calculate middle index of the array
  let mid = Math.floor((start + end) / 2);

  // Is the middle a match?
  if(arr[mid] === x) return mid;
  // Is the middle less than x
  if(arr[mid] < x) return binarySearchFromStackOverFlow(arr, x, mid+1, end);
  // Else the middle is more than x
  else return binarySearchFromStackOverFlow(arr, x , start, mid-1);
}