var person = (name, age) => {
    console.log(name);
    console.log(age);
}

const NAME = "bobo";

let age = 22;

person(NAME, age);

let arr = [1, 2, 3, 4];
arr.includes(9);

let arr2 = arr.map(item => item * 2);
console.log('new Set(arr2)', new Set(arr2));

function* f() {

}