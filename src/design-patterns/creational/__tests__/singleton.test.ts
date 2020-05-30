import { Singleton } from "../singleton";

describe("Singleton", () => {
    test("Factory 1", () => {
        const itemA = Singleton.getInstance();
        const itemB = Singleton.getInstance();

        expect(itemA === itemB).toBe(true);
        expect(itemA.toString()).toEqual(itemB.toString());
    });
});
