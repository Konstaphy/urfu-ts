function arrayDiff<T>(a: T[], b: T[]):T[] {
    const resultArray: T[] = [];
    a.forEach((value) => !b.includes(value) && resultArray.push(value))
    return resultArray;
}

console.log(arrayDiff([2, 2, 2, 2, 3], [2]))
