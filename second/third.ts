function capitalizeFirstLetters(sentence: string): string{
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

console.log(capitalizeFirstLetters("Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили."));
