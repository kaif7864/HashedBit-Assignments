// 1. Display even numbers from 1 to 100
function displayEvenNumbers() {
    let result = "";
    for (let i = 2; i <= 100; i += 2) {
        result += i + " ";
    }
    console.log("result :",result);
}

displayEvenNumbers();

// 2. Calculator function using switch case
function calculator(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        default:
            return 'Invalid operation';
    }
}
console.log(calculator(10, 5, 'add'));
console.log(calculator(10, 5, 'subtract'));
console.log(calculator(10, 5, 'multiply'));
console.log(calculator(10, 5, 'divide'));

// 3. Function to calculate tax based on salary
function findTax(salary) {
    switch (true) {
        case salary > 0 && salary <= 500000:
            return 0;
        case salary > 500000 && salary <= 1000000:
            return salary * 0.1;
        case salary > 1000000 && salary <= 1500000:
            return salary * 0.2;
        case salary > 1500000:
            return salary * 0.3;
        default:
            return 'Invalid salary';
    }
}
console.log(findTax(1000000));

// 4. Function to calculate sum of products of corresponding digits
function sumOfProducts(n1, n2) {
    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    let sum = 0;

    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        let digit1 = i < str1.length ? parseInt(str1[i]) : 0;
        let digit2 = i < str2.length ? parseInt(str2[i]) : 0;
        sum += digit1 * digit2;
    }

    return sum;
}
console.log(sumOfProducts(6, 6)); 
