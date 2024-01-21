let score = 56

console.log(typeof score)
console.log(typeof (score))// both are same

let score1 = "56ab"

console.log(typeof score1)
console.log(typeof (score1))

let finalScore = Number(score1)//converts into number datatype
console.log(typeof finalScore)
console.log(finalScore)

/* Incase the value is in alphaumeric or a string form such as 78as or ashe or undefined then on applying the conversion to number datatype will be converted to number but the value
will be NaN(Not a Number). Incase of value as null on conversion to number datatype the value will be 0. In case of a boolean value true the conversion in number type will return 1 and for false it will return 0*/

/*Types of Conversion
  Number()- converts to number datatype
  String()- converts to string datatype
  Boolean()- converts to boolean datatype
*/

let happy= '1';
let isHappy = Boolean(happy);
console.log(typeof happy)
console.log(typeof isHappy)
console.log(isHappy)

/*
 Only few values will result in false on typeconversion. Those values are 0, empty string, null, undefined, NaN.
*/

let price=true;
let price1 = String(price)
console.log(price1);
console.log(typeof price1);

//any value type can be converted into a string

/********************************************OPERATIONS************************************************ */

let val = 2
let negVal = -val //will give the negaitive value
console.log(negVal)

//Airthematic opertaions

// val = 2 + 3 //addition
// console.log(val)
// val = 7 - 4 //substraction
// console.log(val)
// val = 5 * 1 //multiplication
// console.log(val)
// val = 2 ** 2 // raised to the power
// console.log(val)
// val = 12 / 4
// console.log(val)
// val = 17 % 5
// console.log(val)

let str1 = 1;
let str2 = "2"
console.log(str1 + str2); //this will convert the type of str1 from number to string and will concatenate it to str2. conversion depends on on the datatype of 1st variable if more than two variables are being added

console.log("1"+ 2 + 3)//it will be converted into a string
console.log(1+ 2 + "3") // it will be converted into a number

console.log(+true)//will convert the boolean to number
//console.log(true+) //will throw an error

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment