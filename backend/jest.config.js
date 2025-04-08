/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 50,
      functions: 60,
      lines: 60,
    },
  },
  roots: ["<rootDir>/tests"],
};
