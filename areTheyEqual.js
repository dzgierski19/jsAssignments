isInput1TheSameTypeAsInput2 = (input1, input2) => {
if (input1 !== input2){
    throw new Error ("You must type the same inputs")
}
}

isInput1AnObject = (input) => {
if (typeof input === "object") {

} else return true
}

const areTheyEqual = (firstValue, secondValue) => {
isInput1TheSameTypeAsInput2 (firstValue, secondValue)
return isInput1AnObject (firstValue)
}

const result1 = areTheyEqual("Hi there", "Hi there.") 
console.log (result1)

console.log (areTheyEqual("8", "8")) // true
areTheyEqual("8", 8) // false
// false


const array1 = [1,2,3,4]
const arrayToString = array1.toString()
console.log (arrayToString)
console.log (typeof arrayToString)
console.log (typeof array1)

const object1 = {name: "John", surname: "Doe"}
const object1ToString = object1.toString()
console.log (typeof object1)
console.log (object1ToString)
console.log (typeof object1ToString)