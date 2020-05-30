export class Singleton {
    private static instance: Singleton = null;

    static getInstance(): Singleton {
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton();
        }

        return this.instance;
    }
}
