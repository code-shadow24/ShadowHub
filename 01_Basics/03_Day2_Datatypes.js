"use strict"; //treat all code as newer version

// alert("Hello"); in node js we cannot use alert directly
/*
 In JS you can avoid using semi-colons

 Code Readability should be proper:

 console.log(
    3
    +
    4
 ) //not recommended

 consol.log("Hello"); console.log("User"); //Not recommended

 console.log("Hello User")//recommended method of writing

 Code should be readable and understandable

 https://tc39.es/ecma262/ and MDN for reading documentation
*/


let name ="Arya" //this is a string datatype. Use either with single or double quote
let age= 19 //This is a number datatype. For very big numbers bigint datatype can be used 
let isLoggedIn = false //This is a boolean datatype. Only have two values true and false

// null is a standalone value with empty value
let temperature = null;
//undefined is where no value is defined
let price;
//symbol to define uniqeness

//typeof is used to check the type of a value or a variable
console.log(typeof age) // number datatype
console.log(typeof "Arya") // string datatype
console.log(typeof undefined)// undefined datatype
console.log(typeof null)// object type

//object
