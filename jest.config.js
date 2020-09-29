module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["./src"],
    transform: { "^.+\\.jsx?$": "babel-jest", '^.+\\.tsx?$': 'ts-jest' },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    globals: {
        "ts-jest": {
            tsConfig: {
                // allow js in typescript
                allowJs: true,
            },
        },
    },
    moduleNameMapper: {
        "\\.(css|scss)$": "jest-transform-css"
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
};
