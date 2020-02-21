function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}
hello("TypeScript");

console.log("============")
let o = {a: "foo", b: 12, c:"bar"}
let {a, b} = o
console.log(a, b)


interface Point {
    readonly x: number;
    readonly y: number;
}

let x: Point = {'x': 1, 'y':2}
console.log(x)

console.log("=======")

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = {} as Square
square.color = 'red'
console.log(square)

console.log("=======================================")
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

let dog = new Dog()



console.log("========================")
type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };


interface Person {
    name: string
    age: number
}
type ReadonlyPerson = Readonly<Person>

let person:Person = {name:'name', age:18}
let readonly_person:ReadonlyPerson = {name:'name1', age:19}
console.log('======', person, readonly_person)