import { Job } from "./job"

export class Person{
    private _name: string;
    private _job: Job | undefined;

    constructor(name: string){
        this._name = name;
    }
    
    set job(job: Job){
        this._job = job;
    }

    public getSalary(): number | null {
        if (!this._job) {
            return null
        }
        return this._job.salary;
    }

    public work(): void{
        if (!this._job) {
            console.log("А работы то нема")
            return
        }
        console.log(`${this._name} поработал как ${this._job.role}`);
    }
}
