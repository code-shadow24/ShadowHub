const user1 = new Object({
    email: "sammy123@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sammy",
            lastname : "Green"
        }
    }
})//another method of creating an object using a constructor. This will create a singleton object which can be used as the component many times further

console.log(user1)

console.log(user1.fullname.userfullname.firstname)//to access the value of the nested objects. In case when we call the values from API and to skip using if else on every key to check if the value is present or not we can simply write the ? infront of the key to check if the value is there or not. in case the key or the value is not there it will move to next key or value

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}
//const obj3 = {obj1, obj2} //this will not combine the objects

//const obj3 = Object.assign({}, obj1, obj2)//this will combine both the objects which are the source into the first empty object which is a target and return a new object

const obj3 ={...obj1, ...obj2}//this is known as spread method to merge the objects

console.log(obj3)

const usersDetails = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
] //this is the array of object. Usually seen when data is taken from database

console.log(usersDetails[1].email)//to access the value stored in a particular key of the object stored at a particular index

console.log(Object.keys(user1))//this will give the keys of the object in an array form
console.log(Object.values(user1))//this will give the values of the object in an array form
console.log(Object.entries(user1))//this will give the key value pair of the object each in a separate array enclosed in a final array form

console.log(user1.hasOwnProperty('firstname'))// to check if the key is present in the object or not


//object destructurig

const supervillans= {
    marvel:"thanos",
    starwars: "darth vader",
    harrypotter: "voldermort"

}

//in case you want to access any value many times suppose we want to print villan of marvel five times, writing supervillans.marvel five times will not look very clean. Instead use this

const {marvel} = supervillans

console.log(marvel)

//if we want we can also assign a different name to the key also

const {marvel : marv} = supervillans

console.log(marv)

//Intro to API and JSON

/*{
    "marvel":"thanos",
    "starwars": "darth vader",
    "harrypotter": "voldermort"

}*/ //syntax of a json

//We get APIs usually in object format but sometimes we can also get arrays in the API

//To access the value in APIs we usually use object or array methods. Note: can try randomuser.me to practice API methods and to understad and simplify it we can use JSON formatter