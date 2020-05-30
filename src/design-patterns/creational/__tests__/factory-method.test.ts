import { SimpleFactory, Factory1, Factory2 } from "../factory-method";

describe("Factory Method", () => {
    const itemData = {
        value1: "string",
        value2: 10_000,
    };

    test("Factory 1", () => {
        const factory = new Factory1();
        const item = factory.createItem(itemData);

        expect(item.toArray()).toEqual(["type1", "string", 10_000]);
        expect(item.toString()).toEqual("type1, string, 10000");
    });

    test("Factory 2", () => {
        const factory = new Factory2();
        const item = factory.createItem(itemData);

        expect(item.toArray()).toEqual(["type2", "string", 10_000]);
        expect(item.toString()).toEqual("type2, string, 10000");
    });

    test("SimpleLogistics", () => {
        const factory = new SimpleFactory();
        const item1 = factory.createItem("type1", itemData);
        const item2 = factory.createItem("type2", itemData);

        expect(item1.toArray()).toEqual(["type1", "string", 10_000]);
        expect(item1.toString()).toEqual("type1, string, 10000");
        expect(item2.toArray()).toEqual(["type2", "string", 10_000]);
        expect(item2.toString()).toEqual("type2, string, 10000");
    });
});
