const Avengers = ["Ironman", "Captain America", "Thor", 'Black Widow', "Hulk", "Hawkeye"]

//forEach function do not return any value at ay cost

const value = Avengers.forEach((hero)=>{
    return hero;
})

// console.log(value) this will return undefined

//To prevent the short comming of forEach we can use filter method

const numero = [1, 2, 3, 4, 5, 6, 7]
const num = numero.filter((num1)=>num1>4)
//console.log(num)

const num2 = numero.filter((num3)=>{
    return num3>4;
})
//console.log(num2)

//There is one way to use conditions on array with forEach method

const number = []
numero.forEach((num2)=>{
    if(num2>3){
        number.push(num2)
    }
})

//console.log(number)

const books =[
    {
        bookName: "Book One", genre: "Fiction", publish: 1990
    },
    {
        bookName: "Book Two", genre: "History", publish: 1999
    },
    {
        bookName: "Book Three", genre: "Fiction", publish: 2003
    },
    {
        bookName: "Book Four", genre: "Science", publish: 1998
    },
    {
        bookName: "Book Five", genre: "Non-Fiction", publish: 2012
    },
    {
        bookName: "Book Six", genre: "Science", publish: 1996
    },
    {
        bookName: "Book Seven", genre: "Fiction", publish: 1983
    },
    {
        bookName: "Book Eight", genre: "History", publish: 2005
    },
    {
        bookName: "Book Nine", genre: "Science", publish: 1985
    },
    {
        bookName: "Book Ten", genre: "Non-Fiction", publish: 1993
    }
]

let userbooks = books.filter((bk)=>bk.genre =="Science")
userbooks = books.filter((bk)=>{
    return bk.publish>=2000
})
userbooks = books.filter((bk)=>{
    return bk.publish>=2000 && (bk.genre=="History" || bk.genre =="Science")
})
//console.log(userbooks)

//Map Method

// const newNums = numero.map((num2)=> num2= num2+10)

//chainning method

const newNums = numero
                .map((num2)=> num2*10)//the result of this map will pass on to next map
                .map((num2)=> num2+4)//the result of this map will pass on to filter
                .filter((num2)=> num2%4==0)//the result of this filter will be stored in newNums as an array
//console.log(newNums)

//Reduce Method

const cartItemsValue = [200, 650, 333, 20, 450]

const cartTotal = cartItemsValue.reduce((acc, price)=>{
       //console.log(acc, price)
       return acc + price
}, 0)
//console.log(cartTotal)

const shoppingCart = [
    {
        itemName: "Chocolate",
        noOfItems: 4,
        price: 20
    },
    {
        itemName: "Biscuit",
        noOfItems: 2,
        price: 30
    },
    {
        itemName: "Kurkure",
        noOfItems: 1,
        price: 40
    },
    {
        itemName: "Flour 10Kg",
        noOfItems: 2,
        price: 149
    },
    {
        itemName: "Soyabean Refined Oil",
        noOfItems: 5,
        price: 125
    },
]

const totalPrice = shoppingCart.reduce((acc, product)=> acc + (product.price * product.noOfItems), 0)
console.log(totalPrice)

