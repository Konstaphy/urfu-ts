class Cat {
    constructor(private readonly  name: string, readonly meow: () => string) {
    }
}

type Dog = {
    name: string,
    bark: () => string,
}

const cat = new Cat("Pushok", () => "meow!")

const dog: Dog = {
    name: 'Bobik',
    bark: () => 'bark!',
}

/*
Expected:

    whatDoesThePetSay(cat) -> 'meow'
    whatDoesThePetSay(dog) -> 'bark'
*/

function petIsCat(pet: Dog | Cat): pet is Cat {
    return "meow" in pet
}

function whatDoesThePetSay(pet: Dog | Cat): string {
    if (pet instanceof Cat || petIsCat(pet)) {
        return pet.meow()
    }
    if ("bark" in pet) {
        return pet.bark()
    }
    return ""
}

console.log(whatDoesThePetSay(cat))
console.log(whatDoesThePetSay(dog))


// Если под "обычным тайпгардом" воспринимается инстансоф, то тут он бессилен, потому что цепочка прототипов
// не содержит типы тайпскрипта
// UPD: переделал cat под класс, который позже войдет в скоуп JS и инстансоф будет работать
