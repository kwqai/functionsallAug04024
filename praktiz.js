"use strict";
// Excercise #2:
// =============
// Personal Message: Store a person’s name in a variable, and print a message to
// that person. Your message should be simple, such as, “Hello Eric, would you 
// like to learn some Python today?”
// =============== Excercise #2: =============== STARTS FROM HERE ===============
// ==============================================================================
/*

let personName: string = "Khaldi Wali Qureshi"; //  Store a person’s name in a variable.
console.log(`Hello ${personName}, print a message (Message should be simple) to that person?`);

*/
// =============== Excercise #2: =============== ENDS HERE =======================
// ===============================================================================
// PRACTICE #2: STARTS FROM HERE ==========
// ========================================
/*

let a: string = "Zubaida";
console.log(`Hi ${a},  Here is Good News For You today`);

*/
//  ADVANCED PROGRAM:
//  =================
/*

// Store the person's name in a variable
let personName: string = "Bushra";

// Define a random number between 1 and 10
let randomNumber: number = Math.floor(Math.random() * 10) + 1;

// Print a message based on the random number
if (randomNumber % 2 === 0) {
    console.log(`Hi ${personName}, today is your lucky day!`);
} else {
    console.log(`Hello ${personName}, better luck next time!`);
}

*/
// Excercise #3:
// =============
//  Name Cases: Store a person’s name in a variable, and then print that person’s
//  name in lowercase, uppercase, and titlecase.
// =============== Excercise #3: =============== STARTS FROM HERE ===============
// ==============================================================================
/*

// Store the person's name in a variable
let personName1: string = "khaldi Wali qureshi";

// Print the person's name in lowercase
console.log("Lowercase:", personName1.toLowerCase());

// Print the person's name in uppercase
console.log("Uppercase:", personName1.toUpperCase());

// Print the person's name in titlecase
console.log("Titlecase:", personName1.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));

*/
// =============== Excercise #2: =============== ENDS HERE =======================
// ===============================================================================
// PRACTICE #1: ======== WITH FUNCTION ============== STARTS FROM HERE ===========
// ===============================================================================
/*

// Store the person's name in a variable
let personName: string = "Khalid Wali Qureshi";

// Print the person's name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the person's name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print the person's name in titlecase
console.log("Titlecase:", toTitleCase(personName));

/*
// Function to convert string to titlecase

/*

function toTitleCase(str: string): string {

/*
 //   return str.replace(/\w\S*/
//g, function(txt){
//        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
// });
//}
// PRACTICE #1: ======== WITH FUNCTION ============== ENDS HERE ==================
// ===============================================================================
/*
console.log: This is a function in JavaScript/TypeScript that prints
information to the console.
Think of it like a message you might write on a piece of paper
to remind yourself of something important.

"Titlecase:": This is a string value enclosed in double quotes.
It's just a label or text that will be printed before the result.
You can think of it as a heading for the message.

personName1: This is a variable that holds a string value.
It represents someone's name, and
the "1" might imply it's the first person's name in a list.
Variables are like containers where you can store information.

.split(' '): This is a method that splits the string stored in personName1
into an array of smaller strings, based on spaces (' ').
For example,
if personName1 is "John Doe", .split(' ') would create an array ["John", "Doe"].

.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()):
This is a method that transforms each word in the array created by .split(' ').

.map(): It's like a machine that processes each item in a list one by one.

word: This represents each individual word in the array.

word.charAt(0).toUpperCase(): This takes the first character of each word
(charAt(0)) and converts it to uppercase (toUpperCase()).
For example, "j" becomes "J".

word.slice(1).toLowerCase(): This takes the rest of each word
(excluding the first character) and converts it to lowercase (toLowerCase()).
For example, "OHn" becomes "ohn".

So, putting it together, it converts each word to title case,
where the first letter is capitalized and the rest are in lowercase.

.join(' '): This method joins all the transformed words back together into
a single string, with each word separated by a space (' ').

.join(): It's like putting together pieces of a puzzle to form
a complete picture.

' ': This specifies the character that will be used to join the words.
Here, it's a space, so the words will be separated by spaces in the final string.

So, in simple terms, this code takes a person's name (personName1),
converts it to title case (where the first letter of
each word is capitalized and the rest are in lowercase),
and prints it with a label "Titlecase:" to the console.

For example, if personName1 is "john doe", it would print "Titlecase: John Doe".

*/
/*

// Store a person’s name, including whitespace characters at the beginning and end
let personName2: string = "\t \n  John Doe \n \t ";

// Print the name once, so the whitespace around the name is displayed
console.log("Original Name:", personName2);

// Strip the whitespace around the name and print it
console.log("Stripped Name:", personName2.trim());

/*

// Store a person’s name, including whitespace characters at the beginning
and end: This is a comment that explains what the program does.
It's like a note to help understand the code.
In this line, it's saying that we're going to store someone's name, and
there will be spaces, tabs, and newlines before and after the name.

let personName: string = "\t \n Khalid Wali \n \t ";: This line declares a
variable named personName and assigns it a string value.
The string includes spaces ( ), tabs (\t), and newlines (\n) before and after
the name "Khalid Wali". Think of it like writing someone's name on
a piece of paper with extra spaces at the beginning and end.

console.log("Original Name:", personName);:
This line prints the original name stored in the personName variable.
console.log is like writing something on a piece of paper to see it.
It prints "Original Name:" followed by the content of the personName variable.

console.log("Stripped Name:", personName.trim());:
This line prints the name after removing the extra whitespace around it
using the trim() method. trim() removes spaces, tabs, and newlines
from the beginning and end of a string.
It prints "Stripped Name:" followed by the trimmed content of the
personName variable.

So, in everyday terms, the program first shows the name with extra spaces, tabs, and newlines around it, and then it shows the same name but without those extra spaces, tabs, and newlines. It's like cleaning up the edges of a piece of paper where someone's name is written, making it look neat and tidy.

*/
/*

function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}



// Call the function with default values
make_shirt(); // Large shirt with default message
//make_shirt('Medium'); // Medium shirt with default message

//  Call the function with different sizes and messages
//  make_shirt('Small', 'I love TypeScript!');
//  make_shirt('Large', 'Keep Coding!');
//  make_shirt('Extra Large', 'Stay Awesome!');

*/
//  Void: The word void is used to tell TypeScript that this function
//  doesn't give back any information after it's done. It's like saying,
//  "Hey TypeScript, this function does something,
//  but it doesn't give me anything back.
//  " This is helpful because sometimes functions are just meant to do things, 
//  not provide information.
/*

//  EXCERCISE #29:
//  ==============

/*

Favorite Fruit: Make a array of your favorite fruits, and
then write a series of independent if statements that check for certain
fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether
a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement,
such as You really like bananas!

*/
//  ==============  EX29    ============  STARTS HERE ==========================
/*
// Define an array of favorite fruits

let favoriteFruits: string[] = ["apple", "banana", "watermelon"];

// Check for certain fruits using independent if statements
if (checkForFruit("apple")) {
    console.log("You really like apples!");
}

if (checkForFruit("banana")) {
    console.log("You really like bananas!");
}

if (checkForFruit("watermelon")) {
    console.log("You really like watermelon!");
}

if (checkForFruit("orange")) {
    console.log("You really like oranges!");
} else {
    console.log("You don't like oranges!");
}

if (checkForFruit("kiwi")) {
    console.log("You really like kiwis!");
} else {
    console.log("You don't like kiwis!");
}

// Function to check if a fruit exists in the favoriteFruits array

function checkForFruit(fruit: string): boolean {
    for (let i = 0; i < favoriteFruits.length; i++) {
        if (favoriteFruits[i] === fruit) {
            return true;
        }
    }
    return false;
}

*/
//  ==========================  ENDS HERE ========================================
//  EXCERCISE #29:
//  ==============
/*

Favorite Fruit: Make a array of your favorite fruits, and
then write a series of independent if statements that check for certain
fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether
a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement,
such as You really like bananas!

*/
/*

//  =========== EX29 PRACTICE    ===============  STARTS HERE ===================

//  Favorite Perfume: Make a array of your favorite perfumes.
//  =========================================================
//  Define an array of favorite perfumes
//  Make a array of your three favorite perfumes and call it favorite_perfumes.

let favorite_Perfumes: string[] = ["armani", "Bvlgari", "versace"];

//  Write a series of independent if statements that check for certain
//  Perfumes in your array.
//  Write five if statements.
//  Each should check whether a certain kind of perfume is in your array.
//  If the perfume is in your array, the if block should print a statement,
//  such as You really like Bvlgari!

//   Check for certain perfumes using independent if statements
if (checkForPerfume("armani")) {
    console.log("You really like armani");
}

if (checkForPerfume("Bvlgari")) {
    console.log("You really like Bvlgari");
}

if (checkForPerfume("versace")) {
    console.log("You really like versace!");
}

if (checkForPerfume("Hugo Boss - orange")) {
    console.log("You really like Hugo Boss - orange!");
} else {
    console.log("You don't like Hugo Boss - orange!!");
}

if (checkForPerfume("Calvin Klein")) {
    console.log("You really like Calvin Klein!");
} else {
    console.log("You don't like Calvin Klein!");
}

// Function to check if a perfume exists in the favoritePerfumes array

function checkForPerfume(perfume: string): boolean {
    for (let i = 0; i < favorite_Perfumes.length; i++) {
        if (favorite_Perfumes[i] === perfume) {
            return true;
        }
    }
    return false;
}


//  ==========================  ENDS HERE ========================================

*/
/*

let array1 = [1, 2, 3, 4, 5];
let array2 = array1.map(function(x) {
    return x/2;
})
console.log(array2);

*/
/*

let array1 = [11, 12, 13, 14, 15];
let array2 = array1.map( x => x * 2);
    

console.log(array2);

*/
/*
let array1: string[] = ["apple", "banana", "orange", "grape", "kiwi"];
//let array2: string[] = array1.map(x => x.toUpperCase());
//let array2: string[] = array1.map(x => x.toLowerCase());
console.log(array2);
*/
/*
function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

let array1: string[] = ["apple", "banana", "orange", "grape", "kiwi"];
let array2: string[] = array1.map(toTitleCase);

console.log(array2);

*/
/*

const toTitleCase = (str: string): string => {
    return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

let array1: string[] = ["apple", "banana", "orange", "grape", "kiwi"];
let array2: string[] = array1.map(toTitleCase);

console.log(array2);

*/
/*

let array1 = [11, 12, 13, 14, 15];
let array2 = array1.filter( x => x % 2 == 0);
    
console.log(array2);

*/
let array1 = ["A", "B", "C", "D", "E"];
let array2 = array1.filter(x => x == "D");
console.log(array2);
