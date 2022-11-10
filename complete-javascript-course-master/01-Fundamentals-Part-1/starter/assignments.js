
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
// const now = 2057;
// const ageLol = now - 1987;
// const ageHero = now - 1948;
// console.log(ageKanat, ageHero);

// console.log(ageKanat * 2, ageHero / 2, 2 ** 3);

// const firstName = 'Kanat';
// const lastName = 'Saurbaev';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1 
// console.log(x);

// // Comparison operator

// console.log(ageLol > ageHero); // >, <, >=, <=
// console.log(ageHero >= 18);

// const isFullAge = ageLol >= 18;

// console.log(now - 1987 > now - 1948);


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

// const now = 2057;
// const ageLol = now - 1987;
// const ageHero = now - 1948;
// console.log(now - 1987 < now - 1948);
// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25-10-5; // x = y = 10
// console.log(x, y);
// const averageAge = ageLol + ageHero / 2
// console.log(ageLol, ageHero)



/*

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' +  (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String 
multiple
lines`);
*/

// const age = 15;

// if(age >= 18) {
//     console.log('Sarah can start driving license  🏎️ ');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);



// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;
// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / (heightJohn * heightJohn) ;
// const MarkHigherBMI = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn);

// if(MarkHigherBMI) {
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
// }  else {
//     console.log(`John's BMI (${bmiJohn})is higher than Mark's (${bmiMark})!`)
// }

//type of conversion

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('jonas'));
// console.log(typeof NaN);
// console.log(String(23), 23);

// // type coercion

// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');


// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if(money) {
//     console.log("Don's spend it all ;)");
// } else {
//     console.log('You should get a job');
// }

// let height = 0;
// if(height){
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is Undefined');
// }


const age = '18';
if(age === 18) console.log('You just became an adult :D (strict');

if(age == 18) console.log('You just became an adult :D (loose)');

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);