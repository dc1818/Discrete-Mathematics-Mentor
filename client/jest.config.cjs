module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: [
    "./node_modules/@testing-library/jest-dom/extend-expect",
  ],
};
