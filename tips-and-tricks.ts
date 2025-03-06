// Closure & Lexical Scope (1)
function createIncrement() {
  let count = 0;
  function increment() { 
    count++;
  }

  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  
  return [increment, log];
}
const [increment, log] = createIncrement();
increment(); 
increment(); 
increment(); 
log();  // Count is 0


// Closure & Lexical Scope (1)
function createIncrement() {
  let count = 0;
  function increment() { 
    count++;
  }

  function log() {
    let message = `Count is ${count}`;
    console.log(message);
  }
  
  return [increment, log];
}
const [increment, log] = createIncrement();
increment(); 
increment(); 
increment(); 
log();  // Count is 3



/* Function Scope */
// Output: 0 1 2 3
for(let i=0; i<=3;i++) {
    setTimeout(function cb(){
        console.log(`${i}`)
    }, i * 1000)
}

/* Variable Scope */
// Output: 200 200 200
var myVar = 100;

function Constructor() {
  var myVar = 200;
  this.myVar = 200;
  console.log(myVar)
  console.log(this.myVar)
}

const obj = new Constructor()
console.log(obj.myVar);

// Accidental global variable
function foo() {
  let a = b = 0;
  a++;
  return a;
}

foo();

console.log(typeof a);  // undefined
console.log(typeof b);	// number

// Automatic semicolon insertion
function arrayFromValue(item) {
  return
    [item];
}
arrayFromValue(10); // undefined
// Array length
const clothes = ['jacket', 't-shirt'];
clothes.length = 0; // Reducing length will delete elements there after from the index till end
console.log(clothes[0]);  // undefined


// Code debugging (Semicolon at end of For loop)
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);{
  numbers.push(i + 1);
}
console.log(numbers);   // [5]

// var vs let (1)
for (let i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // 0 1 2
  }, i * 1000);
}

// var vs let (2)
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // 3 3 3
  }, i * 1000);
}

// Variable scope
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);     // 3 3 3
  }
  setTimeout(log, 100);
}

let j;
for (j = 0; j < 3; j++) {
  setTimeout(function() {
	  console.log(j);   // 3 3 3
	}, 100);
}

for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);     // 0 1 2
  }
  setTimeout(log, 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(function() {
	  console.log(j);   // 0 1 2
	}, 100);
}

// Floating point match
0.1 + 0.2 === 0.3 // false
0.1 + 0.2; // => 0.30000000000000004

// Hoisting (1)
console.log(myVar);   // undefined
console.log(myConst); // Uncaught ReferenceError: Cannot access 'myConst' before initialization

var myVar = 'value';
const myConst = 3.14;


// Hosting (2)
numbers();	// two
var numbers = function () {
  console.log('Number one');
}
numbers();	// one

function numbers() {
  console.log('Number two');
}
numbers();	// one

// Hoisting (3)
console.log(a);		// undefined
var a;
console.log(b);		// Uncaught ReferenceError: b is not defined


// Closure (1)
let counter = function() {
  let k = 0;
  return () => k++;
}();
console.log(counter());	// 0
console.log(counter());	// 1
console.log(counter());	// 2
console.log(counter());	// 3

// Closure (2)
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // 1
  }
  console.log(count); // 0
})();

// Mystry of this - keyword
var length = 4;
function callback() {
  console.log(this.length);	// 3
}
const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};
object.method(callback, 1, 2);

/* 1. Reverse a String */
function reverse(str) {
    return str.split('').reverse().join('');
}

let input = "Hello";
let output = reverse(input);
console.log(`The Reverse of ${input} is ${output}`); // Output: "olleH"

/* 2. Palindrome Test */
function palindrome(str1, str2) {
    let reversed = str1.split('').reverse().join('');
    return reversed.toLowerCase() === str2.toLowerCase();
}

const str1 = "amma";
const str2 = "amma";
console.log(palindrome(str1, str2)); // Output: true

/* 3. Most Frequent Character */
function mostFrequentChar(str) {
    const charCount = {};
    let maxChar = '', maxCount = 0;

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }
    return maxChar;
}

const input = "ABBAAdBd5BBB";
console.log(mostFrequentChar(input)); // Output: 'B'

/* 4. Chunk an Array */
function chunk(array, size) {
    const output = [];
    for (let i = 0; i < array.length; i += size) {
        output.push(array.slice(i, i + size));
    }
    return output;
}

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(array, 3));
/* Output: [[1, 2, 3], [4, 5, 6], [7]] */

/* 5. Capitalize the First Character of Each Word */
function capitalize(sentence) {
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

let input = "the moon is so beautiful";
console.log(capitalize(input)); // Output: "The Moon Is So Beautiful"


/* 6. Anagram Test */
function cleanText(str) {
    return str.toLowerCase().replace(/\W/g, '').split('').sort().join('');
}

function anagrams(str1, str2) {
    return cleanText(str1) === cleanText(str2);
}

console.log(anagrams("RAIL! SAFETY!", "fairy tales")); // Output: true

/* 7. Count Vowels */
function vowelCheck(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(char => vowels.includes(char.toLowerCase())).length;
}

console.log(vowelCheck("Apple")); // Output: 2

/* 8. FizzBuzz */
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

fizzBuzz(15);

/* 9. Print Steps of (#) */
function steps(n) {
    for (let i = 1; i <= n; i++) {
        console.log('#'.repeat(i));
    }
}

steps(3);
/* Output:
#
##
### */


/* 10. Print a Pyramid of (#) */
function printPyramid(height) {
    for (let row = 1; row <= height; row++) {
        let spaces = ' '.repeat(height - row);
        let hashes = '#'.repeat(2 * row - 1);
        console.log(spaces + hashes + spaces);
    }
}

printPyramid(3);

/* 11. Spiral Matrix */
function spiralMatrix(n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let num = 1, rowStart = 0, rowEnd = n - 1, colStart = 0, colEnd = n - 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {
        for (let i = colStart; i <= colEnd; i++) matrix[rowStart][i] = num++;
        rowStart++;
        for (let i = rowStart; i <= rowEnd; i++) matrix[i][colEnd] = num++;
        colEnd--;
        for (let i = colEnd; i >= colStart; i--) matrix[rowEnd][i] = num++;
        rowEnd--;
        for (let i = rowEnd; i >= rowStart; i--) matrix[i][colStart] = num++;
        colStart++;
    }
    return matrix;
}

console.log(spiralMatrix(3));
