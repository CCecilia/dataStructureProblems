import { areThereDuplicates } from './problems/areThereDuplicates';
import { sameFrequency } from './problems/sameFrequency';
// import { countUniqueValues, countUniqueValuesMySolution, countUniqueValuesMySolution2 } from './problems/countUniqueValues';
// import { maxSubArraySum, maxSubArraySumNaive } from './problems/slidingWindow';
// import { sumZero, sumZeroMyVersion } from './problems/mulitPointer';

// import { binSearch } from './problems/binSearch';
// import { isPalindrome } from './leetCodeProblems/palidromeNumber';
// import { twoSum } from './leetCodeProblems/twoSum';
// import { validAnagramMySolution } from './problems/validAnagram';

// import { addUpTo, addUpTo2, myAddUpTo } from "./bigO/addUpTo";
// import { arrayProblem1_frequencyCounter, arrayProblem1_naiveSolution } from './problems/arrayProblem1';

// import { countUpDown } from "./bigO/countUpDown";

const {log} = console;

// using time to judge functions
// const t1 = performance.now();
// log(addUpTo(6));
// const t2 = performance.now();
// log('addUpTo: ', t2 - t1)
// const t3 = performance.now();
// log(addUpTo2(6));
// const t4 = performance.now();
// log('addUpTo2: ', t4 - t3)
// const t5 = performance.now();
// log(myAddUpTo(6));
// const t6 = performance.now();
// log('myAddUpTo: ', t6 - t5)

// countUpDown(10);

// const arr1 = () => [1, 2, 3, 2, 5];
// const arr2 = () => [9, 1, 4, 4, 25];
// log(arrayProblem1_naiveSolution(arr1(), arr2()));
// log(arrayProblem1_frequencyCounter(arr1(), arr2()));
// ;
// log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// log(sumZero([-2, 0, 1, 3]));
// log(sumZero([1, 2, 3]));
// log(sumZeroMyVersion([-3, -2, -1, 0, 1, 2, 3]));
// log(sumZeroMyVersion([-2, 0, 1, 3]));
// countUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 1, 2])
// log(countUniqueValuesMySolution([1, 1, 1, 1, 1, 1, 1, 1, 1, 2]));
// log(countUniqueValuesMySolution2([1, 1, 1, 1, 17, 1, 1, 11, 3, 2, 18].sort((a: number, b:number) => a - b)));
// log(maxSubArraySumNaive([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
// log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))

// log(twoSum([1, 5, 9, 5, 9, 1, 2, 7, 8, 9], 9))
// log(twoSum([3,2,3], 6))
// const inputArr = [1, 2, 3, 4, 5, 6, 7, 8]
// const searchNumber = 6;
// const results = binSearch(inputArr, searchNumber);
// log(results)
// log(isPalindrome(1000030001));

// log(sameFrequency(3589578, 5879385))
// log(sameFrequency(34,14))

log(areThereDuplicates('a', 'b', 'c', 'a'))