const myArr = [0, 1, "cat", "dog", true]
/* 
  arrays are resizable, we can add more elements to the array
  We can add elements belonging to different datatypes to a same array
  The indexing in the array starts from zero. And to access the element in the array index must be given
  On creating the copies of array JS will make shallow copies(means the copies will share the same reference point) not the deep copies(means the copies will not share the same reference point)
*/

const Arr2 = new Array(2, 6, "Ironman", "Captain America", null, undefined)//another method of declaring an array
console.log(myArr[3])//will access the 4th element of the array i.e. dog

//Array Methods

Arr2.push("Thor","Loki")//adds the element in the array
Arr2.pop()//removes the last element
Arr2.unshift(50, 60)//adds the element at start
Arr2.shift()//removes the first element
console.log(Arr2)
console.log(Arr2.includes(2))//to check if the element is included in the array or not
console.log(Arr2.indexOf(12))//to know at which index the particular element is located. In case the element is not preset in the array, the result will be -1

const arr3 = Arr2.join()//will join the array and converts it into the string

//slice and splice
const newArr = [1, 2 , 3 , 4 , 5 , 6 , 7]
console.log("A: ", newArr)
const newar1 = newArr.slice(1,4)//will take out the portion of the array starting from index 1 to index 3 but the original array will not be manipulated
console.log(newar1)
console.log("B: ", newArr)
const newar2 = newArr.splice(1,4)//will take out the portion of the array starting from index 1 to index 4 and will also manipulate the origial array
console.log(newar2)
console.log("C: ", newArr)


const colours = ["red", "black", "blue"]
const stationery = ["pen", "books", "tape"]

// colours.push(stationery)//this will create the array inside the array and will be treated as a single element
// console.log(colours)

//const list1 = colours.concat(stationery)//this will merge both the arrays and return a new array
//console.log(list1)

const list2 = [...colours, ...stationery]//another method of merging the array known as spread method. It is the most preferred method as unline concat method you can merge more than two arrays at once by simply adding a comma and three dots accompained by array name)
console.log(list2)

const one_more_array = [1 , 2, 3, [5, 6, 2], 34, 67, [34, 57, [23, 12, 45]]]
const flatArr = one_more_array.flat(Infinity)//this will merge the sub arrays with the main array depending upon the depth specified with the flat method
console.log(flatArr)

console.log(Array.isArray("Ironman"))//check if the provided value is an array or not
console.log(Array.from("Ironman"))// converts the provided value into the array
console.log(Array.from({name:"Ironman"}))// will return an empty array because it will not be able to convert into an array.

let player1 = 200
let player2 = 250
let player3 = 400

console.log(Array.of(player1, player2, player3))//combines all the value into an array