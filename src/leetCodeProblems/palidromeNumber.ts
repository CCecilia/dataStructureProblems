function isPalindrome(x: number): boolean {
  const str = x.toString();
  const arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    const left = arr[i];
    const right = arr.pop();
    if (left !== right) return false
  }

  return true;
};

function isPalindromeRecursive(x: number, numArr?: string[], index: number = 0): boolean {
  if (numArr === undefined) {
    numArr = x.toString().split("");
  }

  if (index >= numArr.length) {
    return true
  }

  const left = numArr[index];
  const right = numArr.pop();

  if (left !== right) return false

  index++

  return isPalindromeRecursive(x, numArr, index);
};

export {isPalindrome, isPalindromeRecursive}