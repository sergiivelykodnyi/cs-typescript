interface IPrototype<T> {
    clone(): T;
}

interface IData {
    linkedItemValue: string;
    primitive: string;
    list: string[];
}

export class Item implements IPrototype<Item> {
    primitive: string;
    list: string[];
    linkedItem: LinkedItem;

    constructor(data: IData) {
        this.primitive = data.primitive;
        this.list = data.list;
        this.linkedItem = new LinkedItem(data.linkedItemValue);
    }

    clone() {
        const data = {
            primitive: this.primitive,
            list: this.list.slice(),
            linkedItemValue: this.linkedItem.toString(),
        };
        return new Item(data);
    }
}

class LinkedItem {
    value: string;

    constructor(value) {
        this.value = value;
    }

    toString(): string {
        return this.value;
    }
}
