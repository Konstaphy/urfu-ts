function capitalizeFirstLettersAndRemoveIndexWord(sentence: string): string {
    const wordArray = sentence.split(" ")
    return wordArray
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .filter((_, index) => index !== wordArray[0].length)
        .join(" ")
}

console.log(capitalizeFirstLettersAndRemoveIndexWord(
    "Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили."
));
