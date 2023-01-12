//WALIDACJA

const isTextString = (text) => {
    if (typeof text !== "string") {
        throw new Error (`${text} must be a string`)
    }
}

const isStringLengthNotZero = (text) => {
    if (text.length == 0) {
        throw new Error ("You must type at least one character")
    }
}


const changeFirstLetters = (text) => {
isTextString(text)
isStringLengthNotZero(text)
const array1 = text.split(' ')
console.log (array1)
let array1UpperOrLowerCase = array1.reduce (function(element, index, array1) {
    if (element.toString()===element.toString().toUpperCase()) {
    return element.toLowerCase() + element.slice(1)
} else {
    element[0].toUpperCase() + element.slice(1)
}
})
return array1UpperOrLowerCase.join('')

//let array1LowerCase = array1.map (array1 => array1[0].toLowerCase() + array1.slice(1))

console.log (array1UpperOrLowerCase)
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

const result3 = changeFirstLetters ('')

console.log (result3)

const exampleText = "Pisze tutaj cokolwiek, a Ala ma kota";
const result = changeFirstLetters(exampleText); // result === "pisze Tutaj Cokolwiek, A ala Ma Kota"