// Q1) Remove State Names Starting with Vowels
const states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Kerala", "Tamil Nadu", "Assam", "Punjab"];
const filteredStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));
console.log("Filtered States:", filteredStates);


// Q2) Reverse Words in a Sentence
let str = "I love my India";
let reversed = str.split(" ").reverse().join(" ");
console.log("Reversed Sentence:", reversed);


// Q3) Modify String Using splice
let stringArray = ["I", "N", "D", "I", "A"];
stringArray.splice(2, 0, "O", "N", "E", "S");
console.log("Modified String:", stringArray.join(""));

// Q4) Count Vowels and Consonants
function countVowelsConsonants(str) {
    let vowels = str.match(/[aeiouAEIOU]/g) || [];
    let consonants = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || [];
    console.log(`Vowels: ${vowels.length}, Consonants: ${consonants.length}`);
}
countVowelsConsonants("JavaScript is a powerful programming language.");


// Q5) Replace Incorrect Word
function correctfn(sentence, wrong, correct) {
    return sentence.replace(new RegExp(wrong, "g"), correct);
}
console.log("Corrected Sentence:", correctfn("I love Javascripting", "Javascripting", "JavaScript"));


// Q6) Filter Numbers Greater than 5
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let filteredNumbers = inputArr.filter(num => num > 5);
console.log("Filtered Numbers:", filteredNumbers);


// Q7) Calculate Average Scores
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const result = students.map(student => ({
    name: student.name,
    average: Math.round(student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length)
}));
console.log("Students with Averages:", result);


// Q8) Repeated Sum of Digits
function sumOfDigits(num) {
    while (num >= 10) {
        num = num.toString().split("").reduce((sum, digit) => sum + Number(digit), 0);
    }
    return num;
}
console.log("Repeated Sum of Digits:", sumOfDigits(456));


// Q9) Count Words in a Paragraph
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}
console.log("Word Count:", countWords("JavaScript is a versatile language used for web development."));


// Q10) Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reversed String:", reverseString("Hello"));


// Q11) Calculate Student Averages from Object Data
const studentsData = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
};

const studentAverages = Object.keys(studentsData).map(student => {
    let scores = Object.values(studentsData[student]);
    let average = Math.round(scores.reduce((sum, val) => sum + val, 0) / scores.length);
    return { [student]: { average } };
});
console.log("Student Averages:", studentAverages);
