type TActor = {
    name: string;
    firstName: string;
    country: string;
    city: string;
    hasOskar: boolean;
    filmsCount: number;
    age: number;
    languages: string[];
}

const actor: TActor = {
    name: 'Michael',
    firstName: 'Ivanov',
    country: 'Russia',
    city: 'Machachkala',
    hasOskar: false,
    filmsCount: 10,
    age: 14,
    languages: ['RU-ru', 'EN-us', 'TR-tr'],
};

const howOldWillBeActorAfterTwentyYears = (actor: TActor) => {
    return actor.age + 20;
}

console.log(howOldWillBeActorAfterTwentyYears(actor));
