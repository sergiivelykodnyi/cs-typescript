import { Singleton } from "../singleton";

describe("Singleton", () => {
    const itemA = Singleton.getInstance();
    const itemB = Singleton.getInstance();

    test("getInstance should return the same instances", () => {
        expect(itemA === itemB).toBe(true);
    });
});
