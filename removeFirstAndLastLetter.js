//   VALIDATION

const isNumber = (input) => {
    if (typeof (input) !== 'string'){
        throw new Error ('Must be a string')
}
}

const isStringLengthInRange = (input) => {
    if (input.length < 2) {
        throw new Error ('Your must type at least 2 letters')
    }
}

//   1st SOLUTION 

const removeFirstAndLastLetter = (value) => {
    isNumber(value)
    isStringLengthInRange(value)
    const slicedValue = value.slice (1,-1)
    return slicedValue
}

const result1 = removeFirstAndLastLetter('Bitcoin')
console.log (result1)

//   2nd SOLUTION

const removeFirstAndLastLetter2 = (value) => {
    isNumber(value)
    isStringLengthInRange(value)
    const substringedValue = value.substring (1, value.length-1)
    return substringedValue
}

const result2 = removeFirstAndLastLetter2('Ethereum')
console.log (result2)

//   3rd SOLUTION

const removeFirstAndLastLetter3 = (value) => {
    isNumber(value)
    isStringLengthInRange(value)
    let array2 = []
    array2 = value.split ('')
    array2.shift()
    array2.pop()
    return array2.join('')
}

const result3 = removeFirstAndLastLetter3('Polkadot')
console.log (result3)