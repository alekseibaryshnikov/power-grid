/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  testEnvironment: "jsdom"
};
