const { log } = console;

export const validAnagramFrequencySolution = (str1: string, str2: string): boolean => {
  const str1arr = str1.split("");
  const str2arr = str2.split("");

  if (str1arr.length !== str2arr.length) {
    return false;
  }

  const hash1: { [key: string]: number } = {};
  const hash2: { [key: string]: number } = {};

  for (let i = 0; i < str1arr.length; i++) {
    const element = str1arr[i];
    hash1[element] = (hash1[element] || 0) + 1;
  }

  for (let i = 0; i < str2arr.length; i++) {
    const element = str2arr[i];
    hash2[element] = (hash2[element] || 0) + 1;
  }

  for (let key in hash1) {
    if (!(key in hash2)) {
      return false;
    }
    if (hash1[key] !== hash2[key]) {
      return false;
    }
  }

  return true;
}

export const validAnagramMySolution = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }

  const buildHashMap = (arr: string[], accumulator: { [key: string]: number } = {}): { [key: string]: number } => {
    if (arr.length === 0) {
      return accumulator;
    }

    const char = arr.pop();
    accumulator[char!] = (accumulator[char!] || 0) + 1;
    return buildHashMap(arr, accumulator)
  };

  const hash1 = buildHashMap(str1.split(""));
  const hash2 = buildHashMap(str2.split(""));

  for (let key in hash1) {
    if (!(key in hash2)) {
      return false;
    }
    if (hash1[key] !== hash2[key]) {
      return false;
    }
  }

  return true;
}

// how the video solved it
export function validAnagramVideoSolution(first: string, second: string) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup: {[key: string]: number} = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find the letter or letter is zero then it's not a anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1
    }
  }

  return true;
}