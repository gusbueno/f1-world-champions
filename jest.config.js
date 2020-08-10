module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: [
    "<rootDir>/__tests__/config/setup.ts"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/__tests__/config/"
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
}
