import {
    SimpleLogistics,
    RoadLogistics,
    SeaLogistics,
} from "../factory-method";

describe("Factory Method", () => {
    const truckData = {
        model: "MAC",
        loadCapacity: 8_000,
    };
    const shipData = {
        model: "STX",
        loadCapacity: 100_000,
    };

    test("RoadLogistics", () => {
        const factory = new RoadLogistics();
        const truck = factory.createTransport(truckData);

        expect(truck.toArray()).toEqual(["truck", "MAC", 8_000]);
        expect(truck.toString()).toEqual("truck, MAC, 8000");
    });

    test("SeaLogistics", () => {
        const factory = new SeaLogistics();
        const ship = factory.createTransport(shipData);

        expect(ship.toArray()).toEqual(["ship", "STX", 100_000]);
        expect(ship.toString()).toEqual("ship, STX, 100000");
    });

    test("SimpleLogistics", () => {
        const factory = new SimpleLogistics();
        const truck = factory.createTransport("truck", truckData);
        const ship = factory.createTransport("ship", shipData);

        expect(truck.toArray()).toEqual(["truck", "MAC", 8_000]);
        expect(truck.toString()).toEqual("truck, MAC, 8000");
        expect(ship.toArray()).toEqual(["ship", "STX", 100_000]);
        expect(ship.toString()).toEqual("ship, STX, 100000");
    });
});
