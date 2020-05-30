type IItemType = "type1" | "type2";

interface IItemData {
    value1: string;
    value2: number;
}

export interface IItem extends IItemData {
    type: IItemType;
    toArray(): [IItemType, string, number];
    toString(): string;
}

export class Item implements IItem {
    type: IItemType;
    value1: string;
    value2: number;

    constructor(data: IItemData) {
        this.value1 = data.value1;
        this.value2 = data.value2;
    }

    toArray(): [IItemType, string, number] {
        return [this.type, this.value1, this.value2];
    }

    toString() {
        return this.toArray().join(", ");
    }
}

export class Item1 extends Item {
    constructor(data: IItemData) {
        super(data);
        this.type = "type1";
    }
}

export class Item2 extends Item {
    constructor(data: IItemData) {
        super(data);
        this.type = "type2";
    }
}

interface IFactory {
    createItem(data: IItemData): IItem;
}

export class Factory1 implements IFactory {
    createItem(data: IItemData): IItem {
        return new Item1(data);
    }
}

export class Factory2 implements IFactory {
    createItem(data: IItemData): IItem {
        return new Item2(data);
    }
}

export class SimpleFactory {
    createItem(type: IItemType, data: IItemData) {
        if (type === "type1") {
            return new Item1(data);
        }

        if (type === "type2") {
            return new Item2(data);
        }

        throw new Error(`${type} is wrong type of product`);
    }
}
