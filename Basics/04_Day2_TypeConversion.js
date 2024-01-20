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
