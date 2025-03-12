// 1. Variable Scope (let, const, var)
function variableScope() {
    if (true) {
        var a = "I am var";  // Function scoped
        let b = "I am let";  // Block scoped
        const c = "I am const";  // Block scoped
        console.log(b); // Accessible
        console.log(c); // Accessible
    }
    console.log(a); // Accessible (var is function-scoped)
    // console.log(b); // Error (let is block-scoped)
    // console.log(c); // Error (const is block-scoped)
}
variableScope();

// 2. Return the Second Fruit in an Array
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Grapes"];

function getSecondFruit(arr) {
    return arr[1]; // Returns "Banana"
}
console.log(getSecondFruit(fruits));

// 3. Add & Remove Element from Array
function modifyArray(arr) {
    arr.push("New Element");
    arr.pop();
    return arr;
}
console.log(modifyArray(["A", "B", "C"])); // Output: ["A", "B", "C"]

// 4. Square Numbers using map()
const numbers = [2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log(squareNumbers(numbers)); // Output: [4, 9, 16, 25]

// 5. Filter Odd Numbers using filter()
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6])); // Output: [1, 3, 5]

// 6. Object & Greeting Function
const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer"
};

function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}, I am ${obj.age} years old and I work as a ${obj.occupation}.`);
}
greetPerson(person);

// 7. Calculate Rectangle Area
function calculateArea(rect) {
    return rect.width * rect.height;
}
console.log(calculateArea({ width: 5, height: 10 })); // Output: 50

// 8. Get Object Keys using Object.keys()
const car = { brand: "Toyota", model: "Corolla", year: 2022 };

function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log(getObjectKeys(car)); // Output: ["brand", "model", "year"]

// 9. Merge Two Objects using Object.assign()
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
const obj1 = { name: "John", age: 25 };
const obj2 = { city: "New York", country: "USA" };

console.log(mergeObjects(obj1, obj2)); 
// Output: { name: "John", age: 25, city: "New York", country: "USA" }

// 10. Sum of Numbers using reduce()
function sumNumbers(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumNumbers([1, 2, 3, 4, 5])); 
