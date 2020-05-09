const { StringCollection } = require("../iterator");

describe("Iterator Pattern", () => {
    const words = new StringCollection(["Zero"]);
    words.add("One");
    words.add("Two");
    words.add("Three");

    test("Test straight traversal of the StringCollection", () => {
        let result = "";

        for (const word of words) {
            result += word;
        }

        expect(result).toEqual("ZeroOneTwoThree");
    });
    test("Test reverse traversal of the StringCollection", () => {
        let result = "";

        // console.log(words.getReverseIterator());

        for (const word of words.getReverseIterator()) {
            result += word;
        }

        expect(result).toEqual("ThreeTwoOneZero");
    });
});
