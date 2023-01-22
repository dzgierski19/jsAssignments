const removeFirstAndLastLetter = (value) => {
    const slicedValue = value.slice (1,-1)
    return slicedValue
}

const result1 = removeFirstAndLastLetter('Bitcoin')
console.log (result1)

