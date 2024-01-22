//objects made using object literals will not be singleton but objects made using constructor will be a singleton(Object.create)

const sym1 = Symbol(1)//to declare a symbol

const users={
    name:"Shivani",
    "full name": "Shivani Khare",
    [sym1]: 1034,//isert the symbol declared as a key in the object
    class:"10th",
    section:"A",
    age:16,
    marks:[80, 40, 90, 50, 70],
    isPass:true
}

console.log(users.name)//a method to access the value stored with the particular key
console.log(users["full name"])//another method to access the value stored with the particular key. This method is most prefered as we cannot access the keys declared in string with the first method(dot method)
console.log(users[sym1])//to access the value stored with the symbol
console.log(typeof users[sym1])
console.log(users)

users.age = 17 //to change the value stored with a particular key
//Object.freeze(users)// to freeze the object so that no change is made to object
users["full name"]= "Sivani Ary"
console.log(users)

users.greeting = function(){
    return 'Hello user'
}//adds a function to the object

users.greetingTwo = function(){
    return `Hello ${this["full name"]}`//this is used to refer to the keys belonging to the same object
}



console.log(users.greeting())
console.log(users.greetingTwo())