const areInputsTheSameTypeAndAreNotObjects = (input1, input2) => {
if (typeof input1 === "object" && typeof input2 === "object"){
    return isObjectTheSame (input1, input2)
} else if (input1 === input2){
    return true
} else return false
}

const areObjectsTheSameLength = (input1, input2) => {
if (input1.length !== input2.length) { 
    throw new Error ('Inputs are not the same length')
}
}



const isInputAnObject = (input1, input2) => {
    if (typeof input1 !== "object" && typeof input2 !== "object") {
        throw new Error ("It's not an object")
    }
}    

const isObjectTheSame = (input1, input2) => {
    isInputAnObject (input1, input2)
    let input3 = Object.values(input1)
    let input4 = Object.values(input2)
    areObjectsTheSameLength (input3, input4)
    if (input3.length === 0 && input4.length === 0) {
        return true
    } else {
        let input5 = ""
        let input6 = "" 
        if (input3[input3.length-1] === input4[input4.length-1]){
        input5 += input3.pop()
        input6 += input4.pop()
        } else return false
} return isObjectTheSame (input3,input4)
}

const areTheyEqual = (firstValue, secondValue) => {
return areInputsTheSameTypeAndAreNotObjects (firstValue, secondValue)
}

let person = {name: "John", surname: "John"}
let person2 = {name: "John", surname: "John"}

const result1 = areTheyEqual (person2, person)
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

