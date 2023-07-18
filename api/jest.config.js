module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  modulePaths: ["src"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testRegex: "\\.spec\\.ts$",
};
