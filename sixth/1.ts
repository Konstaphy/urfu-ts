export type MyOmit<T extends object, K extends string> = {
    [P in Exclude<keyof T, K>]: T[P];
}

const huy: MyOmit<object, "123" | "321"> | undefined = undefined
