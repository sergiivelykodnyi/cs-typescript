// * Partial.
type Type1 = { prop1: string; prop2: number };
type Type2 = Partial<Type1>;
type CustomPartial<T> = { [K in keyof T]?: T[K] };
type Type3 = CustomPartial<Type1>;

// * Required.
type Type4 = { prop1?: string; prop2?: number };
type Type5 = Required<Type4>;
type CustomRequired<T> = { [K in keyof T]-?: T[K] };
type Type6 = CustomRequired<Type4>;

// * NonNullable.
type Type7 = string | number | null | undefined;
type Type8 = NonNullable<Type7>;
type CustomNonNullable<T> = T extends null | undefined ? never : T;
type Type9 = Type7;

// * Record.
type Type10 = { prop1: string; prop2: string; prop3: string };
type Type11 = Record<"prop1" | "prop2" | "prop3", string>;
type CustomRecord<K extends keyof any, T> = { [P in K]: T };
type Type12 = CustomRecord<"prop1" | "prop2" | "prop3", string>;

// * Readonly
type Type13 = { prop1: string; prop2: number };
type Type14 = CustomReadonly<Type13>;
type CustomReadonly<T> = { readonly [K in keyof T]: T[K] };
type Type15 = CustomReadonly<Type13>;

const object1: Type13 = { prop1: "prop 1", prop2: 1 };
object1.prop1 = "";
const object2: Type14 = { prop1: "prop 1", prop2: 1 };
// object2.prop1 = '';
const object3: Type15 = { prop1: "prop 1", prop2: 1 };
// object3.prop1 = '';
const object4 = { prop1: "prop 1", prop2: 1 } as const;
// object4.prop1 = '';
const object5 = <const>{ prop1: "prop 1", prop2: 1 };
// object5.prop1 = '';

// * ReadonlyArray
const array1: Type13[] = [{ prop1: "prop 1", prop2: 1 }];
array1.push({ prop1: "prop 2", prop2: 2 });
const array2: ReadonlyArray<Type14> = [{ prop1: "prop 1", prop2: 1 }];
// array2.push({prop1: 'prop 2', prop2: 2})
const array3 = [{ prop1: "prop 1", prop2: 1 }] as const;
// array3.push({prop1: 'prop 2', prop2: 2})
const array4: readonly string[] = ["str1", "str2"];
// array4.push({prop1: 'prop 2', prop2: 2})
