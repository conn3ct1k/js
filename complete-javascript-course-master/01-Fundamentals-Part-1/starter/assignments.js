
// let country = "Kazakhstan";
// let continent = 'Eurasia';
// let population = 14;

// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsIsland = false;
// const language = 'kazakh';
// console.log(typeof isIsIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);


// let javascriptIsFun = true;
// console.log(javascriptIsFun)

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'kani');

// javascriptIsFun = 'YES';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(typeof null);

// let age = 30;
// age = 31;
// const birthYear = 1991;
// // birthYear = 192;

// var job = 'programmer';
// job = 'teacher';

// lastName = 'Saurbaev';
// console.log(lastName)
const now = 2057;
const ageKanat = now - 1987;
const ageHero = now - 1948;
console.log(ageKanat, ageHero);

console.log(ageKanat * 2, ageHero / 2, 2 ** 3);

const firstName = 'Kanat';
const lastName = 'Saurbaev';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1 
console.log(x);

// Comparison operator

console.log(ageKanat > ageHero); // >, <, >=, <=
console.log(ageHero >= 18);

const isFullAge = ageKanat >= 18;

console.log(now - 1987 > now - 1948);


/*
DATA TYPES 
1. Number. Floating point numbers -> Used for desimals and integers: let age = 23; 
2. String. Sequence of characters -> Used for text: let firstName = 'Jonas';
3. Boolean: Logical type that can only be true of false -> Used for taking desicios: let fullAge = true;

4. Undefined: Value taken by a variable that is not yet defined('empty value'): let children;
5. Null. Also means 'empty value'

6. Symbol(ES2015): Value that is unique and cannot be changed[Not useful for now] 

7. Bigint(ES2020): Larger integers than the Number type can hold

JavaScript has dynamic typing: We do not have to manually define
type of the value stored in a variable. Instead, data types are determined automatically.

*/