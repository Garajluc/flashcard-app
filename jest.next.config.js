// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  displayName: 'Unit tests',
  modulePaths: ['<rootDir>/src'],
  testMatch: ['<rootDir>/src/**/*test.ts'],
  testPathIgnorePatterns: ['<rootDir>/tests'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        isolatedModules: true,
        tsconfig: './tsconfig.test.json',
      },
    ],
  },
  modulePathIgnorePatterns: ['<rootDir>/cypress', '<rootDir>/tests'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
