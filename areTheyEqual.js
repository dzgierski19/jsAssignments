// const areInputsTheSameTypeAndAreNotObjects = (input1, input2) => {
// if (typeof input1 === "object" && typeof input2 === "object"){
//     return isObjectTheSame (input1, input2)
// } else if (input1 === input2){
//     return true
// } else return false
// }

// const areObjectsTheSameLength = (input1, input2) => {
// if (input1.length !== input2.length) { 
//     throw new Error ('Inputs are not the same length')
// }
// }

// const isInputAnObject = (input1, input2) => {
//     if (typeof input1 !== "object" && typeof input2 !== "object") {
//         throw new Error ("It's not an object")
//     }
// }    

// const isObjectTheSame = (input1, input2) => {
//     isInputAnObject (input1, input2)
//     let input1Values = Object.values(input1) 
//     let input1Keys = Object.keys(input1)
//     let summedInput1 = [...input1Values, ...input1Keys]
//     let input2Values = Object.values(input2)
//     let input2Keys = Object.keys(input2)
//     let summedInput2 = [...input2Values, ...input2Keys]
//     areObjectsTheSameLength (summedInput1, summedInput2)
//     if (summedInput1.length === 0 && summedInput2.length === 0) {
//         return true
//     } else {
//         let input5 = ""
//         let input6 = "" 
//         if (summedInput1[summedInput1.length-1] === summedInput2[summedInput2.length-1]){
//         input5 += summedInput1.pop()
//         input6 += summedInput2.pop()
//         } else return false
// } return isObjectTheSame (summedInput1, summedInput2)
// }

// const areTheyEqual = (firstValue, secondValue) => {
// return areInputsTheSameTypeAndAreNotObjects (firstValue, secondValue)
// }

// let person = {name: "John", surname: "John"}
// let person2 = {name: "John", surname: "John"}

// const result1 = areTheyEqual ([0,1], [1,2])
// console.log (result1)


//sprawdzić entries

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
    
    
    const isInputAnObject = (input) => {
        if (typeof input !== "object") {
            throw new Error ("It's not an object")
        } else {
        let inputValues = Object.values(input) 
        let inputKeys = Object.keys(input)
        let summedInput = inputValues.concat(inputKeys)
        return summedInput 
        } 
    }    
    

    const isObjectTheSame = (input1, input2) => {
        const input1Value = isInputAnObject (input1)
        const input2Value = isInputAnObject (input2) 
        //areObjectsTheSameLength (input1Value, input2Value)
        return isObjectEqualObject (input1Value, input2Value)
    }
    

    const isObjectEqualObject = (input1, input2) => {
    if (input1.length === 0 && input2.length === 0) {
        return true
    } else {
        if (input1[input1.length-1] === input2[input2.length-1]){
        input1.pop()
        input2.pop()
        } else return false
} return isObjectEqualObject (input1, input2)
}


    const areTheyEqual = (firstValue, secondValue) => {
    return areInputsTheSameTypeAndAreNotObjects (firstValue, secondValue)
    }
    
    let person = {name: "John", surname: "John", lkids: ["Anna", "Billy"]}
    let person2 = {name: "John", surname: "John", kids: ["Anna", "Billy"]}    
    const result1 = areTheyEqual (person, person2)
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