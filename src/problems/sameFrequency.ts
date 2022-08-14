// Given two positive integers, find out if the two numbers have the same frequency of digits.
// expected Time: O(N)

export const sameFrequency = (num1: number, num2: number): boolean => {
  type FreqMap = { [key: string]: number };
  const num1Arr = num1.toString().split("");
  const num2Arr = num2.toString().split("");

  if (num1Arr.length !== num2Arr.length) return false;

  const buildMap = (arr: string[], acc: FreqMap = {}): FreqMap => {
    if (arr.length === 0) {
      return acc;
    };

    const num = arr.pop();
    acc[num!] = acc[num!] ? acc[num!] + 1 : 0

    return buildMap(arr, acc);
  }


  const map1 = buildMap(num1Arr);
  const map2 = buildMap(num2Arr);

  for (let key in map1) {
    if (map1[key] !== map2[key]) return false;
  }
  
  return true;
};