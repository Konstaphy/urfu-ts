/**
 * Возвращает булевое значение равны ли объекты по их литералам
 * */
function areDeepEqual(a: unknown, b: unknown): boolean {
    if (isObject(a) && isObject(b)){
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false
        }

        for (const key of Object.keys(a)){
            const val1 = a[key];
            const val2 = b[key];
            const areObjects = isObject(val1) && isObject(val2);
            if (
                areObjects && !areDeepEqual(val1, val2) ||
                !areObjects && val1 !== val2
            ) {
                return false;
            }
        }
        return true;
    }
    return false
}

/**
 * Тайпгард на соответствие итерируемому объекту
 * */
function isObject(object: unknown): object is { [key: string]: any } {
    return !!object && typeof object === 'object';
}

const obj1 = {
    name: "Petya",
    age: 17
}

const obj2 = {
    name: "Petya",
    age: 17
}

const obj3 = {
    name: "Petya1",
    age: 17
}

console.log(areDeepEqual(obj3, obj1)); // false
console.log(areDeepEqual(obj2, obj1)); // true
