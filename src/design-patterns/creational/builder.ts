class Item {
    parts: string[] = [];

    toString(): string {
        return this.parts.join(", ");
    }
}

interface IBuilder {
    reset(): void;
    addPartA(): void;
    addPartB(): void;
    addPartC(): void;
    getItem(): Item;
}

export class Builder implements IBuilder {
    private item: Item;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.item = new Item();
    }

    addPartA() {
        this.item.parts.push("part A");
    }

    addPartB() {
        this.item.parts.push("part B");
    }

    addPartC() {
        this.item.parts.push("part C");
    }

    getItem() {
        const item = this.item;
        this.reset();

        return item;
    }
}

export class Director {
    private builder: IBuilder;

    constructor(builder: IBuilder) {
        this.setBuilder(builder);
    }

    setBuilder(builder: IBuilder) {
        this.builder = builder;
    }

    buildMinValuableItem() {
        this.builder.addPartA();
    }

    buildFullValuableItem() {
        this.builder.addPartA();
        this.builder.addPartB();
        this.builder.addPartC();
    }
}
