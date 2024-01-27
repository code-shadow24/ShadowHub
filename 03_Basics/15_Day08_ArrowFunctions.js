//Introduced in 2015

//This keyword provide reference to current context

const user1 = {
    username: "Sammy",
    courseName: "Javascript for Beginners",

    welcomeMessage: function(){
        console.log(`Hello, ${this.username} , Welcome to ${this.courseName}`)
        // console.log(this) this will give the context of the current object
    }
}

user1.welcomeMessage()
console.log(this)//in node environment this will give an empty object but in browser console panel it will return window

//Method 1 of declaring the functions(direct method)

// function one(){
//     console.log(this)//this will give various properties of the current context
//     let name = "Raghav"
//     console.log(this.username)//this will give undefined value as 'this' can only be used in objects not in functions
// }

//Method 2 of declaring the functions(expression method)

// const one = function(){
//     console.log(this)//this will give various properties of the current context
//     let name = "Raghav"
//     console.log(this.username)//this will give undefined value as 'this' can only be used in objects not in functions
// }

//Method 3 of declaring the functions(arrow method)

const one= () => {
    console.log(this)//this will give {} as an output
    let name = "Raghav"
    console.log(this.username)//this will give undefined value as 'this' can only be used in objects not in functions
}

one()

//The basic syntax of arrow function is ()=>{} but we can hold it in a value

const addTwoNums = (val1, val2) => {
    return val1 + val2
}

const addNum = (num1, num2) => num1 + num2 //this is called implicit return which means you do not have to write return keyword. This method only works with single line code functions

const addNum1 = (num1, num2) => (num1 + num2)// when we use {} we have to write return keyword. When we use () we donot write return keyword. This is mostly used with react

const name = () => ({username: "Sammy"})//to return the object through implicit method

console.log(addTwoNums(3, 7), addNum(34, 76), addNum1(23, 34), name())