import { Builder, Director } from "../builder";

describe("Builder", () => {
    const builder = new Builder();
    const director = new Director(builder);

    test("Get Minimal Valuable Item", () => {
        director.buildMinValuableItem();
        const minItem = builder.getItem();

        expect(minItem.toString()).toEqual("part A");
    });

    test("Get Full Valuable Item", () => {
        director.buildFullValuableItem();
        const fullItem = builder.getItem();

        expect(fullItem.toString()).toEqual("part A, part B, part C");
    });
});
