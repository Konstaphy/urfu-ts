export type TypeOfArr1 = (string | null)[]
export type TypeOfArr2 = (string | boolean)[]
export type TypeOfArr3 = (string[] | number[])[]
export type TypeOfArr4 = (string | number | boolean | undefined)[]

type TPersonRole = {
    id: number;
    name: string;
}

export type TypeOfArr5 = TPersonRole[]
