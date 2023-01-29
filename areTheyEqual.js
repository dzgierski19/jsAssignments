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
    areObjectsTheSameLength (input1, input2)
    if (input1.length === 0 && input2.length === 0) {
        return true
    } else {
        let input3 = ""
        let input4 = "" 
        if (input1[input1.length-1] === input2[input1.length-1]){
        input3 += input1.pop()
        input4 += input2.pop()
        } else return false
} return isObjectTheSame (input1,input2)
}

const areTheyEqual = (firstValue, secondValue) => {
 return areInputsTheSameTypeAndAreNotObjects (firstValue, secondValue)
}

const result1 = areTheyEqual ([1,2], [1,2,3])
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

