/*
write a function called same, which accepts two arrays. The function
The function should return true if value in the array has it's
corresponding value squared in the second array. The frequency of
values most be the same.

a function that checks if values in a array match the values in the
second array after they have been squared, and each number acan only
have one squared version of itself in the second array ordering
doesn't matter
*/
const { log } = console;


// Time Complexity of n^2 because of the nested looping,
// the for loop then the indexOf method use inside of the for loop, is the nbested looping
export const arrayProblem1_naiveSolution = (arr: number[], arr2: number[]): boolean => {
  if (arr.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    let correctIndex = arr2.indexOf(arr[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;
};

// Frequency Counter Pattern
// instead of nested which is n^2 complexity this only loops over each array one time so O(n) which is better than n^2
export const arrayProblem1_frequencyCounter = (arr: number[], arr2: number[]): boolean => {
  log('test', arr.length, arr2.length)
  if (arr.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1: {[key: string]: number} = {};
  let frequencyCounter2: {[key: string]: number} = {};
  for (let val of arr) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  debugger
  log({ frequencyCounter1, frequencyCounter2 });
  for (let key in frequencyCounter1) {
    if (!((parseInt(key) ** 2) in frequencyCounter2)) {
      return false;
    };
    if (frequencyCounter2[parseInt(key) ** 2] !== frequencyCounter1[key]) {
      return false;
    };
  }

  log({ frequencyCounter1, frequencyCounter2 });
  return true;
};