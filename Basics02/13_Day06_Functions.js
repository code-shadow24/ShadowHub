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

//In case the number of arguemets that will be passed is not certain or fixed like in shopping cart

// function cartPrice(...num1){
//     return num1
// }// the ...operator is known as rest operator to convert all the arguements into an array. Now we can apply for loop to calculate the price

function cartPrice(val1, val2, ...num1){
    return num1
}// in case we pass other parameters too so the one value per paramter will be assigned first and the rest will be converted to the array

 console.log(cartPrice(300, 1320, 572, 890, 120))

 //we can also handle objects and arrays in functions

 const product1 = {
    productname: "XYZ Chocolate",
    price: 130,
    weight: "120g"
 }

function cartDetail(anyobject){
    console.log(`You selected ${anyobject.productname} of weight ${anyobject.weight}. Please pay Rs. ${anyobject.price} to complete the purchase`)
}
//anyobject is a paramter to accept function without passing the actual function name in parameters

cartDetail(product1)

const scores = [20, 40, 23, 450]

function scoreDetail(getArray){
    return getArray[2]
}

console.log(scoreDetail(scores))

//We can also directly pass the array or the object while passing the arguements

cartDetail({
    productname: "ABC Sweets",
    price: 50,
    weight: "25 grams"
})

console.log(scoreDetail([30, 45, 12, 56]))
