function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function () {
    return this.name;
}

export {Person};