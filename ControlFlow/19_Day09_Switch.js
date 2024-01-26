// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } basic syntax

const month = 3

switch (month) {
    case 1: 
    console.log("January");
    break;
    case 2: 
    console.log("February");
    break;
    case 3: 
    console.log("March");
    break;
    case 4: 
    console.log("April");
    break;
    case 5: 
    console.log("May");
    break;
    case 6: 
    console.log("June");
    break;

    default:
        console.log("No Match Found")
        break;
}

//Notes: In switch case, if break statement is not there all the code after match case is executed except for default case. To stop this the break statement is used.

//Switch can also be used with string and other datatypes

//Concept of truthy and falsy value
/*
 When the value is assumed to be true it is known as truthy value
 When the value is assumed to be false it is known as falsy value; false, 0, -0, BingInt 0n, "", null, undefined, NaN. Values other than them are truthy values

 "0" is a truthy value. Any falsy value declared as string will be termed as truthy value even an empty string with a space is a truthy value

 Other truthy values: [], {}, function (){}

 false==0, false=='', 0=='' will always return true
*/

const user = []

//to check if the array has any value or is an empty array

if(user.length===0){
    console.log("No details found")
}

//to check if the object has any value or is an empty object

const user1 = {}

if(Object.keys(user1).length===0){
    console.log("No Details Available")
}

//Nullish Coalescing Operator(??): This is usually used when we call info from database. If the value received in null or undefined or two values are received then this operator helps in assignemnt of value in order to not create any issue in code structure

let val1;

// val1 = 5??10// will assign 5 to val1
// val1 = null ??20 //will assign 20 to val1
// val1 = undefined ?? 30
// val1 = null ?? 20 ?? 30//will assign 20 to val1
// val1 = null ?? undefined ?? null ?? 70 //will assign 70 to val1
//val1 = null ?? undefined ?? null ?? null // will assign null 
// val1 = null??undefined??null??undefined //wil assign undefined to val1
//val1 = undefined??null??undefined??null //will assign null to val1

console.log(val1)

//Ternary Operator(?:): This is another form of writing single line if-else statement

//Syntax of ternary operator (condition)? true : false

const teaprice = 100

teaprice>=80? console.log("More than 80"): console.log("Less than 80")

