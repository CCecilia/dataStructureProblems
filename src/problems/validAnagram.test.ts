import { validAnagramMySolution } from "./validAnagram";

test('valid anagram outputs true with a valid anagram input', () => {
  const validInput = 'anagram';
  const validInput2 = 'nagaram';
  const results = validAnagramMySolution(validInput, validInput2);

  expect(results).toBe(true);
});