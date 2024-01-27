//for of


const numero = [1, 2, 3, 4, 5, 6]
for (const num of numero) {
    //console.log(num)
}

const greeting = "Bonjour World!"
for (const greet of greeting){
    //console.log(greet)
}

const Avengers = ["Ironman", "Captain America", "Thor", 'Black Widow', "Hulk", "Hawkeye"]

for(const heros of Avengers){
    //console.log(heros)
}

//Maps: all the values will be unique
const map = new Map()
map.set("IN", "India")
map.set("IN", "India")
map.set("FR", "France")
map.set("NZ", "New Zealand")
//console.log(map)

//console.log(map.get("IN"))

for(const [key, value] of map){
    //console.log(`${key} :- ${value}`)
}

const myObject = {
    name: "Sammy",
    lastname: "Brown",
    class: 10
}

// for(const [key, val] of myObject){
//     console.log(`${key} :- ${val}`)
// } objects cannot be iterated using for of loop

//To apply loop on object we can use for in loop

for(const key in myObject){
    //console.log(`${key} :- ${myObject[key]}`)
}

for(const hero in Avengers){
    //console.log(Avengers[hero])
}

//for of loop will print the values but for in loop will print the keys

for(const key in map){
    //console.log(key)
}//map is ot interable with for in loop

//for each loop

Avengers.forEach( (i)=>{
    //console.log(i)
} )

function printone(a){
    //console.log(a)
}

Avengers.forEach(printone)//only provide reference

printtwo = (b) => {
    //console.log(b)
}

Avengers.forEach(printtwo)

Avengers.forEach((a, index, arr)=>{
    //console.log(a, index, arr)
})

const programming = [
    {
        languageName: "Javasript",
        languageExtension: "js"
    },
    {
        languageName: "Python",
        languageExtension: "py"
    },
    {
        languageName: "C++",
        languageExtension: "cpp"
    }
]

programming.forEach((val)=>{
   console.log(val.languageName)
})