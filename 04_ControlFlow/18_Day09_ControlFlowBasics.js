//The control flow is to limit the execution of the whole code 

//The first control flow is if-statement. This will check if the condition is true or not. If the condition is true then the code will be executed otherwise it will not be executed

if(true){
    console.log("Hello")
}//this code will be executed

if(false){
    console.log("Bye")
}//this code will not be executed

/*To check the conditions we can do comparison, and for this we can use comparison operators. Such as:
< : less than
> : greater than
<= : less than or equal to
>= : greater than or eaqual to
== : equal to
=== : equal to in value and type
!= : not equal to
!== : not equal to in value and type
*/

//The second control flow is if-else statement. In this first the condition written in if is checked and if the condition is true if statement will be executed and else statement will not be executed. In case the if statement is false, then only else statement will be executed. This is used in case of contradictory result. 

if(2!= 2){
    console.log("Not Equal")
}else{
    console.log("Equal")
}

//Note: Any variable declared inside the if or if-else statement using let or const has a limited scope upto that statement and cannot be accessed from outside the statement

const score = 200;

if(score>100){
    let power = "Fly";
    console.log(`${power} Power Granted`)
}

// console.log(`${power} Power Granted`) this will throw an error

const balance = 1000

if(balance > 400) console.log("Well Done"); //this is called implicit scope and is used only for one line statements. To write the multi-line code you can use comma to write another line of comment and end the statement with semi-colon. This method is not recommended at all

//Third method of Control Flow is nested if: where we need to check the multiple conditions

if(balance<500){
    console.log("Less than 500")
}else if(balance<750){
    console.log("less than 750")
}else if(balance<900){
    console.log("less than 900")
}else{
    console.log("more than 900")
}

//Incase we want to check multiple condition in the same statement we can use logical operators such as AND: &&(all the conditions must be true for the statement to be executed) OR: ||(any one condition must be true for the statement to be executed), NOT: !

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("Allow")
}


