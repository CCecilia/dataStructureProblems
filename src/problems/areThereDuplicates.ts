// implement a function name arethereDuplicates which
// accepts a variable number of arguments, checks wether
// there are any deplicates among the arguments passed in.

function areThereDuplicates(...args: string[]) {
  const freqMap: { [key: string]: number } = {};
  for (let i in args) {
    freqMap[args[i]] = freqMap[args[i]] ? freqMap[args[i]] += 1 : 1;
    if (freqMap[args[i]] > 1) return true;
  }

  return false;
}

export {areThereDuplicates}