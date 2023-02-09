// const result1 = getCleanedZipCode (12345)
// console.log (result1)

// getCleanedZipCode("") // ""
// getCleanedZipCode("123") // ""
// getCleanedZipCode(123) // ""
// getCleanedZipCode("1-2-3-4-5") // ""
// getCleanedZipCode("12-345") // "12-345"
// getCleanedZipCode("12 345") // "12-345"
// getCleanedZipCode("12345") // "12-345"
// getCleanedZipCode(12345) // "12-345"
// getCleanedZipCode("123456") // ""

/*
isInputStringOrNumber = (input) => {
    if (typeof input === 'number') {
        return input.toString()
    } else if (typeof input === 'string') {
        return input 
    } else {
        throw new Error ('You must type Number or String')}
}
*/

const isStringOrNumber = (input) => {
    if (typeof input !== "string" && typeof input !== "number") {
        throw new Error ("You must type string or number")
    }
}

const isValueInRange = (input) => {
    isStringOrNumber(input)
    const numberToString = input.toString()
    if (numberToString.length === 5 && (/^\d{5}$/).test(input) === true) {
        return numberToString.slice (0,2) + '-' + numberToString.slice(2)
    } else if ((/^\d{2}[ -]\d{3}$/).test(input) === true) {
        return input.slice(0,2) + '-' + input.slice(3) } 
    return ""
}


//isString oraz isNumber OK
//napisać regEx dwie pierwsze cyfry, trzeci spacja -, 4 do konca cyfry

const getCleanedZipCode = isValueInRange("12-355") 

console.log (getCleanedZipCode)

// isInputWithNumbersSpacesAndDashes = (input) => {
//     if (input.length === 6 && input[2].test(/[ -]/) && input.test[0](/[0-9]/))  {
//         return input
//     } else if (input.length === 5 && input.test (/[0-9]/)) {
//         return input
//     } else return ""
// }

// const getCleanedZipCode = (value) => {
// const checkedValue = isInputStringOrNumber(value)
// const checkedValueWithNumbersAndSpacesAndDashes = isInputWithNumbersSpacesAndDashes (checkedValue)
// console.log (checkedValueWithNumbersAndSpacesAndDashes)
// const checkedValueWithAnythingButNumbers = checkedValueWithNumbersAndSpacesAndDashes.test (/[0-9]/)
// if (checkedValueWithAnythingButNumbers.length !== 5) {
//     return ""
// } return checkedValueWithAnythingButNumbers.slice (0,2) + '-' + checkedValueWithAnythingButNumbers.slice(2) 
// }

// const result1 = getCleanedZipCode("124223")
// console.log(result1)