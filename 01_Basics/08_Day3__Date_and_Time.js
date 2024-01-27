let newDate = new Date()
console.log(newDate)

console.log(newDate.toString())//will convert the date into a string and will make it more readable
console.log(newDate.toDateString())//will display date in string format
console.log(newDate.toISOString())//will display the string in ISO format
console.log(newDate.toJSON())
console.log(newDate.toLocaleDateString())//will convert the date in local format
console.log(newDate.toLocaleString())//will convert the date and time in local format
console.log(newDate.toLocaleTimeString())//will comvert the time in local format
console.log(newDate.toTimeString())//will display the time in string format

//typeof Date is a object

const myDate = new Date(2024, 10, 24, 21, 15, 10)
console.log(myDate.toLocaleString())

const myTime = Date.now();//will give the number of milliseconds from 1 Jan 1970 to today
console.log(myTime)
console.log(Math.floor(myTime/1000))
console.log(Math.floor((myTime/1000)/60))
console.log(Math.floor(((myTime/1000)/60)/60))

console.log(newDate.getMonth())//array starts from zero . January = 0, Feb=1 and so on
console.log(newDate.getDay())//array starts from Monday

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))//to add more customisation to locale string

