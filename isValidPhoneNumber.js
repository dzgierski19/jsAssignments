

// isValidPhoneNumber(123123123) // true
// isValidPhoneNumber("123123123") // true
// isValidPhoneNumber("123-123-123") // true
// isValidPhoneNumber("123 123 123") // true
// isValidPhoneNumber("123-123 123") // false


const isStringOrNumber = (input) => {
    if (typeof input !== "string" && typeof input !== "number"){
        throw new Error ('Please type number or string')
    }
}

const convertNumberToStringOrReturnString = (input) => {
    isStringOrNumber(input)
    if (typeof input === 'number') {
        return input.toString()
    } else if (typeof input === 'string'){
        return input
    }
}

const isValidPhoneNumber = (value) => {
    const modifiedInput = convertNumberToStringOrReturnString (value)
    console.log (modifiedInput)
    if (modifiedInput.length === 9 && modifiedInput === modifiedInput.replace (/[^0-9]/g, '')) {
        return true
    } else if (modifiedInput.length === 11 && modifiedInput[3] === modifiedInput[3].replace(/[^-]/g, '') && modifiedInput[7] === modifiedInput[7].replace(/[^-]/g, '')) {
        return true
    } else if (modifiedInput.length === 11 && modifiedInput[3] === modifiedInput[3].replace(/[^ ]/g, '') && modifiedInput[7] === modifiedInput[7].replace(/[^ ]/g, '')) {
        return true
    } else {
        return false
    } 
}

const result1 = isValidPhoneNumber("123-456-789")
console.log (result1)

const result2 = isValidPhoneNumber ("123 456 789")
console.log (result2)

const result3 = isValidPhoneNumber (1234567891)
console.log (result3)

const result4 = isValidPhoneNumber ("123-456 789")
console.log (result4)

const result5 = isValidPhoneNumber ("aabababab")
console.log (result5)