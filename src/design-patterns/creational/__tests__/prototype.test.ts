import { Item } from "../prototype";

describe("Prototype", () => {
    const data = {
        linkedItemValue: "linkedItemValue",
        primitive: "primitive",
        list: ["one", "tow", "three"],
    };
    const itemA = new Item(data);
    const itemB = itemA.clone();

    test("Clone and prototype should have different instances", () => {
        expect(itemA !== itemB).toBe(true);
    });
    test("Values of clone object should be equal to prototype values", () => {
        expect(itemA.primitive === itemB.primitive).toBe(true);
        expect(itemA.list).toEqual(itemB.list);
    });
    test("List property of Clone and Prototype should have different instances", () => {
        expect(itemA.list === itemB.list).not.toBe(true);
    });
    test("linkedItem property of Clone and Prototype should have different instances", () => {
        expect(itemA.linkedItem === itemB.linkedItem).not.toBe(true);
    });
});
