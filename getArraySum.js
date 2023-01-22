const getArraySum = (numbersArray, initialValue) => {
// let sum = initialValue

// for (let i = 0; i < numbersArray.length; i++) {
//     sum += numbersArray[i]
// } return sum

if (numbersArray.length === 0 ) {
    return initialValue 
} else {
    let sum = 0
    sum += numbersArray[numbersArray.length-1]
    console.log (numbersArray)
    numbersArray.pop()
    console.log (sum)
    getArraySum (numbersArray)
}
};

const result1 = getArraySum([4,7,10], 5)
console.log (result1)

// const exampleArray = [1, 2, 3];
// const startingNumber = 5;
// const result = getArraySum(exampleArray, startingNumber); // result === 11
