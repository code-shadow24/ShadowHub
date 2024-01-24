//Functions are declared to prevent the need to write the same chunk of code repeatedly

function greetings(){
    console.log("Hello Buddy")
}//this called the definition of the function

greetings()//without parantheses it is called function reference. With parantheses is is called function execution

// function addTwoNumbers(){
//     let a = 10;
//     let b = 20;
//     console.log(a+b);
// }

// addTwoNumbers() //one of the method of function but not preferred

function addTwoNumbers(num1, num2){
       console.log(num1+num2);
}

addTwoNumbers(3, 6)//variables or values passed within the brackets in function definition is known as parameters, while the variables or values passed within the brackets in function execution is known as arguements

//We can also save the value returned by the function into a variable but for that we must return some values

function greet(name){
    if(!name){
        return  "Please enter a name"
    }
    let finalGreet = `Hello ${name}`;
    return finalGreet;
}

const wishYou = greet("Ashe");
console.log(wishYou)

//Note: Any code written after return will never get executed

//In case the user didn't pass any arguement during function execution the value take will be undefined. To prevent this from happening we can use if-else statement to check if the arguement is passed or not or we can pass a default value to the parameter 

console.log(greet())

/*
function greet(name="Sammy"){
    if(name===undefined){
        console.log("Please enter a name")
        return
    }
    let finalGreet = `Hello ${name}`;
    return finalGreet;
}
*/