module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
    moduleNameMapper: {
        "^@algorithms/(.*)$": "<rootDir>/src/algorithms/$1",
        "^@data-structures/(.*)$": "<rootDir>/src/data-structures/$1",
        "^@design-patterns/(.*)$": "<rootDir>/src/design-patterns/$1",
    },
};
