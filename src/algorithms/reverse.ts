export function stringReverse(string: string): string {
    return string.split("").reverse().join("");
}

export function stringReverse2(string: string): string {
    let result = "";

    for (const character of string) {
        result = character + result;
    }

    return result;
}

export function stringReverse3(string: string): string {
    return string.split("").reduce((result, character) => character + result);
}

export function integerReverse(number: number): number {
    const reverse = stringReverse(number.toString());

    return parseInt(reverse) * Math.sign(number);
}

export function arrayReverse<T>(array: T[]): T[] {
    const result = [];

    let i = array.length - 1;
    for (i; i >= 0; i--) {
        result.push(array[i]);
    }

    return result;
}
