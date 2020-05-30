import { Factory1, Factory2 } from "../abstract-factory";

describe("Abstract Factory", () => {
    test("Factory 1", () => {
        const factory = new Factory1();
        const itemA = factory.createItemA();
        const itemB = factory.createItemB();

        expect(itemA.toString()).toEqual("Instance of ItemA1");
        expect(itemB.toString()).toEqual("Instance of ItemB1");
    });

    test("Factory 2", () => {
        const factory = new Factory2();
        const itemA = factory.createItemA();
        const itemB = factory.createItemB();

        expect(itemA.toString()).toEqual("Instance of ItemA2");
        expect(itemB.toString()).toEqual("Instance of ItemB2");
    });
});
