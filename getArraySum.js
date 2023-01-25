const getArraySum = (numbersArray, initialValue) => {
// let sum = initialValue

// // for (let i = 0; i < numbersArray.length; i++) {
// //     sum += numbersArray[i]
// // } return sum
if (numbersArray.length === 0) {
    return initialValue 
} else {
    initialValue += numbersArray.pop()
    // console.log (numbersArray)
    // console.log (sum)
    return getArraySum (numbersArray, initialValue)
} 
};

// const getArraySum = (numbersArray, initialValue) => {
//     if (numbersArray.length === 0) {
//         return initialValue 
//     } 
//     return numbersArray.pop() + getArraySum(numbersArray, initialValue);
//   };
  
//   const result = getArraySum([4,7,10], 5)
//   console.log (result)

const result1 = getArraySum([4,7,10], 5)
console.log (result1)

// const exampleArray = [1, 2, 3];
// const startingNumber = 5;
// const result = getArraySum(exampleArray, startingNumber); // result === 11



//                       FIBO

const isIntegerHigherOrEqualZero = (input) => {
    if (Number.isInteger(input) != true || input < 0){
        throw new Error ('You must type an integer higher or equal 0')
    }
}

// const result2 = isIntegerHigherThanZero(2)
// console.log(result2)


const fibo = (n) => {
    isIntegerHigherOrEqualZero(n)
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return fibo (n-1) + fibo (n-2)
    } 
}

const result3 = fibo(5)
console.log (result3)

