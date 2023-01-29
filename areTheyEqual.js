isInput1TheSameTypeAsInput2 = (input1, input2) => {
if (input1 !== input2){
    throw new Error ("You must type the same inputs")
}
}

const isInput1EqualInput2 = (input1, input2) => {
if (input1.length !== input2.length) { 
    throw new Error ('Inputs are not the same length')
}
}

const isIndexTheSame = (input1, input2) => {
    isInput1EqualInput2 (input1, input2)
    if (input1.length === 0 && input2.length === 0) {
        return true
    } else {
        let input3 = ""
        let input4 = "" 
        if (input1[input1.length-1] === input2[input1.length-1]){
        input3 += input1.pop()
        input4 += input2.pop()
        } else return false
} return isIndexTheSame (input1,input2)
}


console.log (isIndexTheSame([0,2],[0,2]))

isInputAnObject = (input1, input2) => {
if (typeof input1 === "object" && input1 === input2) {
    for (let i=0; i<input1.length; i++) {
        input1[i] === input2[i]
        console.log (input1[i])
        i++
    } return true
} else return true
}

// isInputAnArray = (input) => {
// if (Array.isArray(input)) {
//     return input.join()
// }
// }

// console.log (isInputAnArray([1,2,3]))

const areTheyEqual = (firstValue, secondValue) => {
isInput1TheSameTypeAsInput2 (firstValue, secondValue)
const checkedInput = isInputAnObject (firstValue)
return checkedInput
}

console.log (typeof ([1]))

const result1 = areTheyEqual([1],[1])
console.log (result1)

// console.log (areTheyEqual("8", "8")) // true

// const array1 = [1,2,3,4]
// const arrayToString = array1.toString()
// console.log (arrayToString)
// console.log (typeof arrayToString)
// console.log (typeof array1)

// const object1 = {name: "John", surname: "Doe"}
// const object1ToString = object1.toString()
// console.log (typeof object1)
// console.log (object1ToString)
// console.log (typeof object1ToString)
