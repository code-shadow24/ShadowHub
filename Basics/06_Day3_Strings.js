const name = "Shivani "
const surname = "Khare"

console.log(name + surname + " Good Morning!") // not a preferred practice

//Use backticks to write a cleaner code
console.log(`${name}${surname} Good Morning!`)

//To declare a string we can use new String('') snytax

const nickName = new String('Shivanka')
console.log(nickName);

console.log(nickName[0])//will display the letter on key 0
console.log(nickName.__proto__) //will display the object
console.log(nickName.length) //prints the length of the string
console.log(nickName.toUpperCase) //converts the string into upper case
console.log(nickName.charAt(2))//print the character at certain key
console.log(nickName.indexOf('h'))//to know the index of a character

const newNickName = nickName.substring(0, 4) //last index will not be included in the output
console.log(newNickName)

const anotherName = nickName.slice(-8, 2)//in slice we can give negative values to start the operstion from back. However negative value will not work in substring
console.log(anotherName)

const newString = "    Game1    "
console.log(newString)
console.log(newString.trim())//trim removes white spaces and line terminators. We can also use trimstart() or trimend(). However trim() is more preferred as it include both start and end

console.log(nickName.replace('S','p'))//will replace the first value with the second value provided

console.log(nickName.includes('i'))//to check if the provided character or value is included in the string or not

const favGames = "PUBG-Minecraft-Traffic Rider-Call Of Duty-Granny"
console.log(favGames.split('-'))//will split the string and form an array by separating every word after the provided separator