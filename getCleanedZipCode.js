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

isInputStringOrNumber = (input) => {
    if (typeof input === 'number') {
        return input.toString()
    } else if (typeof input === 'string') {
        return input 
    } else {
        throw new Error ('You must type Number or String')}
}

console.log (isInputStringOrNumber(12))


isInputWithNumbersSpacesAndDashes = (input) => {
    if (input === input.replace(/[^0-9, -]/g, '')) {
        return input
    } return ""
}

const getCleanedZipCode = (Value) => {
const checkedValue = isInputStringOrNumber(Value)
const checkedValueWithNumbersAndSpacesAndDashes = isInputWithNumbersSpacesAndDashes (checkedValue)
const checkedValueWithAnythingButNumbers = checkedValueWithNumbersAndSpacesAndDashes.replace (/[^0-9]/g, '')
if (checkedValueWithAnythingButNumbers.length !== 5) {
    return ""
} return checkedValueWithAnythingButNumbers.slice (0,2) + '-' + checkedValueWithAnythingButNumbers.slice(2) 
}

const result1 = getCleanedZipCode('1 2  3-23')
console.log(result1)