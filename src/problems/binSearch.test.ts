import { binSearch, binarySearchFromStackOverFlow } from './binSearch';

test('test binary search can find a result in a array', () => {
  const inputArr = [1, 2, 3, 4, 5, 6, 7, 8]
  const searchNumber = 6;
  const results = binSearch(inputArr, searchNumber);

  expect(results).toEqual(-1);
});

test('test new binary search can find a result in a array', () => {
  const inputArr = [1, 2, 3, 4, 5, 6, 7, 8]
  const searchNumber = 6;
  const results = binarySearchFromStackOverFlow(inputArr, searchNumber);

  expect(results).toEqual(5);
});