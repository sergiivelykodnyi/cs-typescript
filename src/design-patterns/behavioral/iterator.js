class CollectionIterator {
    #collection;
    #position = 0;

    constructor(collection = [], isReverse = false) {
        if (isReverse) {
            this.#collection = collection.reverse();
        } else {
            this.#collection = collection;
        }
    }

    next() {
        if (this.#position < this.#collection.length) {
            const result = {
                value: this.#collection[this.#position],
                done: false,
            };
            this.#position += 1;
            return result;
        }

        return { done: true };
    }
}

class StringCollection {
    #collection;

    constructor(collection = []) {
        this.#collection = collection;
    }

    add(value) {
        this.#collection.push(value);
    }

    [Symbol.iterator]() {
        return new CollectionIterator(this.#collection);
    }

    *getReverseIterator() {
        for (const item of this.#collection.reverse()) yield item;
    }
}

module.exports = { StringCollection };
