// The curly braces {} is know as the scope , except when used with an object declaration

//The scope of the variables defined should remain inside that scope only, which is why the var is not a preferred method of variable declaration

if(true){
    let a = 12 //cannot be accessed from outside the if
    const b = 14 // cannot be accessed from outside the if
    var c = 16 //can be accessed from outside the if
}

//console.log(a)
//console.log(b)
console.log(c)

/*
 If any variable declared outside {} is known as variable declared in global scope, which means it can be accessed outside the {}
 If any variable declared inside {} is known as variable declared in local scope, which means it cannot be accessed outside the {}
*/

//nested scope: In case there are functions declared inside a function, loop or if-else statement or vice versas, in that case the block inside another block can access the variables declared inside the first block or outer block. However the variables declared inside the inner blocks cannot be accessd by the outer blocks

function one(){
    const number1 = 23
    function two(){
        const number2= 45
        console.log(number1)
    }
    // console.log(number2) this will throw a error
    two()
}

//two() this will throw an error
one()


console.log(addOne(4))//we can place the function call before declaring the function
function addOne(num){
    return num + 1
}//this called function
console.log(addOne(5))

// console.log(addTwo(7)) this will throw an error as functions declared using expression method cannot be called before declaration 
const addTwo = function(num){
    return num + 2
}//this is called expression
console.log(addTwo(10))