import {
    stringReverse,
    stringReverse2,
    stringReverse3,
    integerReverse,
    arrayReverse,
} from "@algorithms/reverse";

describe("String Reversal", () => {
    test("stringReverse", () => {
        expect(stringReverse("Hello World!")).toEqual("!dlroW olleH");
    });
    test("stringReverse2", () => {
        expect(stringReverse2("Hello World!")).toEqual("!dlroW olleH");
    });
    test("stringReverse3", () => {
        expect(stringReverse3("Hello World!")).toEqual("!dlroW olleH");
    });
});

describe("Integer Reversal", () => {
    test("integerReverse", () => {
        expect(integerReverse(123456)).toEqual(654321);
        expect(integerReverse(-1200)).toEqual(-21);
    });
});

describe("Array Reversal", () => {
    test("arrayReverse", () => {
        expect(
            arrayReverse<number>([1, 2, 3, 4, 5, 6])
        ).toEqual([6, 5, 4, 3, 2, 1]);
    });
});
