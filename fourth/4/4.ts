import { Job } from "./job"
import { Person } from "./person"

let programmer = new Job("Программист", 50000);
let plumber = new Job("Слесарь", 150000);
let turner = new Job("Токарь", 500);

let shura = new Person("Александра");
shura.job = plumber;
shura.work();
console.log(shura.getSalary());
shura.job = turner;
shura.work();
console.log(shura.getSalary());

let petro = new Person("Петр Украинец");
petro.job = turner;
petro.work();

let joe = new Person("Джо чернокожий");
joe.job = programmer;
joe.work();
