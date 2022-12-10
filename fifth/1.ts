interface HasAge {
    age: number;
}

type Person = HasAge & {
    name: string,
}

type Bridge = HasAge & {
    city: string,
}

type Wine = HasAge & {
    manufacturer: string,
    grade: string,
}


function getOldest<T extends HasAge>(items: T[]): T {
    return items.sort((a, b) => b.age - a.age)[0];
}

const oldThings: [Person, Bridge, Wine] =
    [{age: 18, name: "Artem"}, {age: 133, city:"Ekb "}, {age: 112, grade: "Dry Red", manufacturer: "Ilya Petrovich"}]

getOldest(oldThings)
