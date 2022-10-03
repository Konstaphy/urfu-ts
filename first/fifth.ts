function powNumParts(initialNumber: number): number {
    return Number(initialNumber.toString().split("").reduce((resultNum, current) => {
        return resultNum + (Number(current) ** 2).toString()
    }, ""))
}

console.log(powNumParts(9119))
