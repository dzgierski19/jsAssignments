

// isValidPhoneNumber(123123123) // true
// isValidPhoneNumber("123123123") // true
// isValidPhoneNumber("123-123-123") // true
// isValidPhoneNumber("123 123 123") // true
// isValidPhoneNumber("123-123 123") // false


//zrobić regExa który załatwia reszte poza 3 i 7

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
    if (modifiedInput.length === 9 && (/^\d/).test(modifiedInput) === true) {
        return true
    } else if (modifiedInput.length === 11 && (/^\d{3}[ ]\d{3}[ ]\d{3}$/).test (modifiedInput) || (/^\d{3}[-]\d{3}[-]\d{3}$/).test (modifiedInput) === true){
        return true
    } else {
        return false
    } 
}

const result1 = isValidPhoneNumber("aaa-456-789")
console.log (result1)

const result2 = isValidPhoneNumber ("123-456-789")
console.log (result2)

const result3 = isValidPhoneNumber (123456789)
console.log (result3)

const result4 = isValidPhoneNumber ("123-456 789")
console.log (result4)

const result5 = isValidPhoneNumber ("aabababab")
console.log (result5)