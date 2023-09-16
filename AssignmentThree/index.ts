console.log("Task 1:")
const addAtSpecificIndex = (arr:string[],i:number,value:string) =>{
    arr.splice(i, 0,value)
    return arr
}
console.log(addAtSpecificIndex(["Banana", "Orange", "Apple", "Mango"],2,"Lemon"))
console.log("=========")


console.log("Task 2:")

type CART = {
    name:string,
    quantity:number
}

const productArr:CART[] = []

const addCart = (item:any) =>{
    productArr.push(item)
}

const removeCart = () =>{
    productArr.pop()
}

const updateCarts = (i:number,updatedItem:any) =>{
    productArr.splice(i, 1,updatedItem)
}


addCart({name:"camera",quantity:2})
console.log(productArr)

addCart({name:"iphone",quantity:1})
console.log(productArr)


addCart({name:"psp",quantity:1})
console.log(productArr)

removeCart()
console.log(productArr)


updateCarts(1,{name:"iphone",quantity:2})
console.log(productArr)
console.log("=========")



console.log("Task 3:")
let n = 1;
while(n <= 25){
    console.log(n)
    n++
}
console.log("=========")



console.log("Task 4:")
let m = 1;
while(m <= 20){
    if(m%2 == 0){
        console.log(m)
    }
    m++
}
console.log("=========")


console.log("Task 5:")
function factorial(number) {
    let result = 1;
    while (number > 1) {
        result *= number;
        number--;
    }
    return result;
}
console.log('Factorial==>',factorial(5))
console.log("=========")




console.log("Task 6:")
function sumOfNumbersInArray(arrOne) {
    let index = 0;
    let sum = 0;
    while(index < arrOne.length) {
        sum += arrOne[index]
        index++
    }
    return sum
}
console.log('sumOfNumbersInArray==>',sumOfNumbersInArray([1,2,3,4,5]))
console.log("=========")


console.log("Task 7:")
function removeNegativeNumber(arrTwo) {
    let index = 0;
    let newArray:any = []
    while(index < arrTwo.length) {
        if(Math.asin(arrTwo[index]) == 1){
            newArray.push(arrTwo[index])
        }
        index++
    }
    return newArray
   
}
console.log('removeNegativeNumber==>',removeNegativeNumber([1,2,-3,4,5]))
console.log("=========")



console.log("Task 8:")
const calculatingTemperatures = (arrThree) => {
    let indexOne = 0;
    let resultArray:any = []
    while(indexOne < arrThree.length){
        let calculation = (arrThree[indexOne]*9/5) + 32
        resultArray.push(calculation)
        indexOne++
    }
    return resultArray
}
console.log('calculatingTemperatures==>',calculatingTemperatures([32,40,48,46]))
console.log("=========")