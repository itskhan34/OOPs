function Person(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}
Person.prototype.money = '200';

manOne = new Person('Monajje', 'khan', '15');
console.log(manOne.money);