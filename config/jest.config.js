const path = require('path');
const rootDir = path.resolve(__dirname, '../');

module.exports = {
  rootDir,
  // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['**/?(*.)+(unit).ts?(x)'], // finds test
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
  testEnvironment: 'jest-environment-jsdom'
};
