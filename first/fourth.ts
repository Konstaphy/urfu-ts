function reverseString(sentence: string): string {
    return sentence.split(" ").reduce((sentence, currentWord) => {
        return sentence + " " + currentWord.split("").reverse().join("")
    }, "")
}

console.log(reverseString("Привет мир!"))
