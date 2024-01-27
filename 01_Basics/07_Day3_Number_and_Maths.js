const num1 = 200//automatically define datatype of the variable as number

const num2 = new Number(300) //explicitly definng the datatype of the variable as number

console.log(num2.toString())//converts number to string datatype and can use strig methods on it
console.log(num2.toFixed(2))// to fix the number of digits after float point

const num3 = 223.5677
console.log(num3.toPrecision(4))
console.log(num3.toPrecision(2))
//will make the number precise starting from left to right and will give the number in no.s of digit specified. In case if the number of digits specified in precision is less than the number of digits present in the number before decimal point , this will make the number precis till the number of digit specified rest will be made exponential

const bankBalance = 165720000
console.log(bankBalance.toLocaleString('en-IN'))//will insert commas between the numbers depending on the number standard provided. By default it follows US standard and insert commas after 3 digits.

//================================MATHS================================================

console.log(Math.abs(-6))//will remove minus sign
console.log(Math.round(7.8))//will round off the value
console.log(Math.floor(7.8))//will round off the value to lowest value
console.log(Math.ceil(7.8))//will round off the value to the upper value
console.log(Math.min(3, 4, 1, 6, 2, 1))//will find the minimum value in the array
console.log(Math.max(3, 4, 1, 6, 2, 1))//will find the maximum value in the array
console.log(Math.random())//will generate a random value between 0 to 1
console.log(Math.random() * 10)//will give an integer above zero
console.log((Math.random() * 10) + 1)//will make sure that integer never become zero

const min=10
const max = 30
console.log(Math.floor(Math.random() * (max - min + 1)) + min)// will give the value between a specific range


