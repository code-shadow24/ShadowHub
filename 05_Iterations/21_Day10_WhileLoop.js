//While loop

// while (condition) {
    
// } basic syntax

let a = 0
while (a<10) {
    //console.log(a);
    a= a+2
}

const Avengers = ["Ironman", "Captain America", "Thor", 'Black Widow', "Hulk", "Hawkeye"]
let arr = 0
while(arr<Avengers.length){
    //console.log(Avengers[arr])
    arr++
}

// do {
    
// } while (condition); basic syntax, this will first perform the fuction then check the condition

let sum = 1
do{
    //console.log(`Right now the value of sum is ${sum}`)
    sum++
}while(sum<10);//this loop will run till sum's value is less than 10

do{
    //console.log(`Right now the value of sum is ${sum}`)
    sum++
}while(sum<1);//this loop will run atleast once