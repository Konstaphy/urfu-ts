type Cat = {
    name: string,
    meow: () => string,
}

type Dog = {
    name: string,
    bark: () => string,
}

const cat: Cat = {
    name: 'Pushok',
    meow: () => 'meow!'
};

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
    if (petIsCat(pet)) {
        return pet.meow()
    }
    if ("bark" in pet) {
        pet.bark()
    }
    return ""
}

// Если под "обычным тайпгардом" воспринимается инстансоф, то тут он бессилен, потому что цепочка прототипов
// не содержит типы тайпскрипта
