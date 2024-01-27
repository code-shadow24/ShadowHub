//For loop

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// } basic syntax

//While writing the for loop first thing is initialization of the variable, next is condition checking, if the condition is true, then the code inside is executed and after that the third part of the loop is executed which is increasing or decreasing the value of the variable. In case the condition is false the loop will break

//Ctrl+D : duplicate the cursor on the same occurances

for(let i=0; i<=10; i++){
    //console.log(i)
}

//we can also write if-else statement in the for loop

for(let a=0; a<=10; a++){
    const element = a;
    if(a==7){
        //console.log("Thalla is ariving")
    }
    console.log(element)
    // console.log(a)
}

//we can also run a for loop inside a for loop

for (let b = 0; b < 10; b++) {
    //console.log(`Outer loop value ${b}`)
    for (let c = 0; c < 10; c++) {
        //console.log(`Inner loop Value ${c} and the outer loop value ${b}`)
        
    }
}

//Applying for loop on array

const Avengers = ["Ironman", "Captain America", "Thor", 'Black Widow', "Hulk", "Hawkeye"]

for(let a =0; a< Avengers.length; a++){
    //console.log(Avengers[a])
}

//break and continue keywords
for(let h=0; h<=20; h++){
    if(h==7){
        //console.log("7 Detected")
        break;//this will exit the for loop
    }
    //console.log(`Value of h is ${h}`)
}

for(let h=0; h<=20; h++){
    if(h==7){
        console.log("7 Detected")
        continue;//this will skip the condition for once
    }
    console.log(`Value of h is ${h}`)
}