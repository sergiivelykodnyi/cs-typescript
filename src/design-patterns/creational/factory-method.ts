type ITransType = "truck" | "ship";

interface ITransData {
    model: string;
    loadCapacity: number;
}

export interface ITrans extends ITransData {
    type: ITransType;
    toArray(): [ITransType, string, number];
    toString(): string;
}

export class Trans implements ITrans {
    type: ITransType;
    model: string;
    loadCapacity: number;

    constructor(data: ITransData) {
        this.model = data.model;
        this.loadCapacity = data.loadCapacity;
    }

    toArray(): [ITransType, string, number] {
        return [this.type, this.model, this.loadCapacity];
    }

    toString() {
        return this.toArray().join(", ");
    }
}

export class Truck extends Trans {
    constructor(data: ITransData) {
        super(data);
        this.type = "truck";
    }
}

export class Ship extends Trans {
    constructor(data: ITransData) {
        super(data);
        this.type = "ship";
    }
}

interface ILogistics {
    createTransport(data: ITransData): ITrans;
}

export class RoadLogistics implements ILogistics {
    createTransport(data: ITransData): ITrans {
        return new Truck(data);
    }
}

export class SeaLogistics implements ILogistics {
    createTransport(data: ITransData): ITrans {
        return new Ship(data);
    }
}

export class SimpleLogistics {
    createTransport(type: ITransType, data: ITransData) {
        if (type === "truck") {
            return new Truck(data);
        }

        if (type === "ship") {
            return new Ship(data);
        }

        throw new Error(`${type} is wrong type of product`);
    }
}
