//Immediately Invoked Function Expression (IIFE)

(function coffee(){
    console.log(`Your Coffee is Ready`)
})();

//IIFE are the functions that are immediately invoked after the declaration. This is used to prevent the pollution caused by global scope. Always use semicolon at the end to limit the scope

((name)=>{
    console.log(`Hello, ${name}`)
})('sammy')



