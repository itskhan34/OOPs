class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;

    }
    run(speed) {
        console.log(this.name + ' is running ' + speed);

    }
}

const bmw = new Car('bmw', 2023);
const audi = new Car(`audi`, 2024);

bmw.run(100);
audi.run(150);

console.log(bmw);
console.log(audi);
