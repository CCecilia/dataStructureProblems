import { averagePair } from './averagePair';

test('test that it can find a averaged pari correctly', () => {
  const arr = [1, 3, 3, 5, 6, 7, 10, 12, 19];
  const avg = 8;
  const expectedResult = true;
  const results = averagePair(arr, avg);

  expect(results).toEqual(expectedResult);
});