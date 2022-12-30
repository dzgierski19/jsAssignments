//DOTO
// 1. Zainstaluj node.js : https://nodejs.org/en/
// 2. Instaluje npm : zgoogluj
// 3. każde zadanie to oddzielny plik


// 1. staraj się używać arrow functions
// 2. modulo -> podzielność, wielokrotnoscią 3, to jest też podzielne przez 3 bez reszty


//while

const getAllPoweredValuesLimitedByNumber1 = (value) => {
    let counter = 1
    const array1 = []
    while ((Math.pow(counter, 2))<value){
        console.log("Twoje wyniki to: " + Math.pow(counter,2));
        array1.push(Math.pow(counter,2))
        counter++;
    } return array1
}

console.log ('Wynik dla 5 to ' + getAllPoweredValuesLimitedByNumber1 (5))

//for

const getAllPoweredValuesLimitedByNumber2 = (value) => {
    const array2 = []
    for (let i=1; Math.pow((i),2)<(value) ; i++) {
        console.log("Twoje wyniki to: ", Math.pow((i),2))
        array2.push(Math.pow(i,2))
    } return array2
}

console.log ('Wynik dla 30 to ' + getAllPoweredValuesLimitedByNumber2 (30))

const myResult = getAllPoweredValuesLimitedByNumber2(30) // = [1,4,9...]
console.log(myResult)

//rekurencja

const array3 = []
let numberToBePowered = 1

const valueIsNumber = (value) => {
    if (typeof value === "number" && !isNaN(value)) {
        return true
    } else {
        throw new Error ("Must be a number")
    }
}

const getAllPoweredValuesLimitedByNumber3 = (value) => {
    valueIsNumber(value)
    // const poweredValue = numberToBePowered*numberToBePowered
    if ((numberToBePowered*numberToBePowered)<(value)) {
        array3.push(numberToBePowered*numberToBePowered)
        numberToBePowered++
        getAllPoweredValuesLimitedByNumber3(value)
        console.log (array3)
    }
    return array3
}


const myResult3 = getAllPoweredValuesLimitedByNumber3(38)
console.log(myResult3)

const myResult4 = getAllPoweredValuesLimitedByNumber3("kawa")
console.log(myResult4)


// const myResult5 = valueIsNumber(30)
// console.log(myResult5)

// const myResult6 = valueIsNumber(NaN)
// console.log(myResult6)

//value musi być number funkcja walidycyjna


/*
const recFunction = (value) => {
    if(value > 1){
        value--
        recFunction(value)
    }
    return value
}
*/

/* przy rekurencji te dwie wartości poza funkcją
    let counter = 1
    const array1 = []
*/

//35 i 36 dlaczego ++ w tym miejscu
//deklarowanie zmiennych mi się myli

//arraye deklarujemy jako const


/*

console.log ('Wynik dla 68', getAllPoweredValuesLimitedByNumber(68))

for (let i=10; i>0; i--) {
    console.log("Trwa odliczanie", i);
}

*/

// const result = getAllPoweredValuesLimitedByNumber(9);
// result ===  [1, 4, 9, 16, 25, 36, 49, 64]