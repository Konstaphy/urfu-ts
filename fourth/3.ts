interface CanRun {
    run(): void
}

interface CanSwim {
    swim(): void
}


interface CanFly {
    fly(): void
}


export abstract class AbstractHuman implements CanSwim, CanFly, CanRun {
    run(): void {}

    swim(): void {}

    fly(): void {}
}

export class Earthman extends AbstractHuman {
    run(): void {
        console.log("run run");
    }

    swim(): void {
        console.log("swim swim");
    }
    fly(): void {
        throw Error("Земляне не могут летать")
    }
}

export class Cryptonman extends AbstractHuman{
    run(): void {
        console.log("run run");
    }

    swim(): void {
        console.log("swim swim");
    }

    fly(): void {
        console.log("fly fly");
    }
}

export class Nibiruman extends AbstractHuman{
    run(): void {
        console.log("run run");
    }
    swim(): void {
        throw Error("Нибируманы не могут плавать")
    }
    fly(): void {
        throw Error("Нибируманы не могут летать")
    }
}
