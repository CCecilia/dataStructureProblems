/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  bail: false,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts}',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
  modulePathIgnorePatterns: ['node_modules'],
};