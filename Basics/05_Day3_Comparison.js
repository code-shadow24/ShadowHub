console.log(2 > 1); //greater than
console.log(2 >= 1); //greater than equal to
console.log(2 < 1); //less than
console.log(2 <= 1); //less than equal to
console.log(2 == 1); //eaqual to
console.log(2 != 1); //not equal to

//All will give value in boolean

//Note: Make sure both the value that are being compared belong to the same datatype

console.log(null > 0); //Output: false
console.log(null == 0); //Output: false
console.log(null >= 0); //Output: true
console.log(undefined > 0); //Output: false
console.log(undefined == 0); //Output: false
console.log(undefined >= 0); //Output: false

//Reason: == checks whether the value is equal to other value or not. While the comparison opertors >, >=, <, <= converts the datatype of all the variables into on type. So null becomes 0. In case of comparison with undefined the output will be false. It is advisable to not use this type of comparison as it might sometimes not give the predicted output

console.log("4" === 4)

// === check is also called strict check meaning it will not only check the value but also the datatypes of those values