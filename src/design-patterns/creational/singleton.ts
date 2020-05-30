export class Singleton {
    private static instance: Singleton = null;

    public static getInstance(): Singleton {
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton();
        }

        return this.instance;
    }

    public toString(): string {
        return "I'm Singleton";
    }
}
