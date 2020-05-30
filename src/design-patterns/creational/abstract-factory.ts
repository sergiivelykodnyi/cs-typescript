interface IItemA {
    value: string;
    toString(): string;
}

class ItemA1 implements IItemA {
    value: string;

    constructor() {
        this.value = "ItemA1";
    }

    toString() {
        return `Instance of ${this.value}`;
    }
}

class ItemA2 implements IItemA {
    value: string;

    constructor() {
        this.value = "ItemA2";
    }

    toString() {
        return `Instance of ${this.value}`;
    }
}

interface IItemB {
    value: string;
    toString(): string;
}

class ItemB1 implements IItemB {
    value: string;

    constructor() {
        this.value = "ItemB1";
    }

    toString() {
        return `Instance of ${this.value}`;
    }
}

class ItemB2 implements IItemA {
    value: string;

    constructor() {
        this.value = "ItemB2";
    }

    toString() {
        return `Instance of ${this.value}`;
    }
}

interface IFactory {
    createItemA(): IItemA;
    createItemB(): IItemB;
}

export class Factory1 implements IFactory {
    createItemA() {
        return new ItemA1();
    }

    createItemB() {
        return new ItemB1();
    }
}

export class Factory2 implements IFactory {
    createItemA() {
        return new ItemA2();
    }

    createItemB() {
        return new ItemB2();
    }
}
