import { isSubsequence } from './isSubsequence'

test('that it can check two strings where the first string has subsequence chareacter in the second string', () => {
  const str1 = 'hello';
  const str2 = 'hello world'
  const expectedResult = true
  const results = isSubsequence(str1, str2)

  expect(results).toEqual(expectedResult);
});