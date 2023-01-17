//WALIDACJA

const isTextString = (text) => {
    if (typeof text !== "string") {
        throw new Error (`${text} must be a string`)
    }
}

const isStringLengthNotZero = (text) => {
    if (text.length === 0) {
        throw new Error ("You must type at least one character")
    }
}
//accumulator 29 po przecinku
//currentValue pierwszy element array1

const array2 = [1,2,3]
const summed = array2.reduce((accumulator, currentValue) => { 
    console.log(accumulator)
    const summedAccumulator = accumulator+currentValue
    console.log(summedAccumulator)
    return summedAccumulator
},0)

console.log (summed)

//reduce((accumulator, currentValue) => { /* … */ })
//reduce((accumulator, currentValue) => { /* … */ })
const changeFirstLetters = (text) => {
isTextString(text)
isStringLengthNotZero(text)
const splittedArray = text.split(' ')
return splittedArray.reduce ((accumulator, currentValue) => {
    if (currentValue[0]===currentValue[0].toUpperCase()) {
    return accumulator += currentValue[0].toLowerCase() + currentValue.slice(1) + ' '
} else {
    return accumulator += currentValue[0].toUpperCase() + currentValue.slice(1) + ' '
} 
},'') 

// arr.reduce((acc, curr) => {
//   if(currentValue[0]===currentValue[0].toUpperCase()){
//      accumulator.push(accumulator += currentValue[0].toLowerCase() + currentValue.slice(1))
//      return accumulator   
// } 
//},[])

//let array1LowerCase = array1.map (array1 => array1[0].toLowerCase() + array1.slice(1))
//console.log (array1LowerCase)
/*const filteredArray = array1.filter(function(element, index, array){
    return index.toUpperCase() + index.slice(1)
})
console.log (filteredArray)*/
};

//SPRAWDZENIE

const result1 = changeFirstLetters ("Bitcoin is the best asset in the world, Not fiat currencies")

console.log (result1)

const result2 = changeFirstLetters (100011)

console.log (result2)

const result3 = changeFirstLetters ("I like my Job")

console.log (result3)

const exampleText = "Pisze tutaj cokolwiek, a Ala ma kota";
const result = changeFirstLetters(exampleText); // result === "pisze Tutaj Cokolwiek, A ala Ma Kota"