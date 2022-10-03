function getNumRoot(initialNumber: number): number {
    let stringNumberRepresentation: string = initialNumber.toString()
    while (stringNumberRepresentation.length !== 1) {
        stringNumberRepresentation = stringNumberRepresentation.split("").reduce((total: number, current) => {
            return total + Number(current)
        }, 0).toString()
    }
    return Number(stringNumberRepresentation);
}

console.log(getNumRoot(942));
