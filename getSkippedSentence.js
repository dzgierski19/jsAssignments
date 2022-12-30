//DOTO
// 1. Zainstaluj node.js : https://nodejs.org/en/
// 2. Instaluje npm : zgoogluj
// 3. każde zadanie to oddzielny plik


// 1. staraj się używać arrow functions
// 2. modulo -> podzielność, wielokrotnoscią 3, to jest też podzielne przez 3 bez reszty

//zamienić string na arraya

// 1. dodać do validacji "skip" > 0   OK
// 2. validacja, że skip jest integerem int OK


const skipIsHigherThanZero = (skip) => {
    if (skip<=0){
        throw new Error ("Number must be higher than 0")
    }
}

const skipIsNumber = (skip) => {
    if (!(typeof skip === "number" && !isNaN(skip))){
        throw new Error ("Must be a number")
    }
}

const skipIsInteger = (skip) => {
    if (!(Number.isInteger(skip))) {
        throw new Error ("Must be an integer")
    } 
}

const sentenceIsString = (sentence) => {
    if (typeof sentence !== "string" ){
        throw new Error ("Must be a string")
    }
}

// nie przypisujesz wartości z array filter, przypisać to do zmiennej/stałej

const skipLettersInSentence = (sentence, skip) => {
    skipIsNumber(skip)
    skipIsHigherThanZero(skip)
    skipIsInteger(skip)
    sentenceIsString(sentence)
    const array1 = sentence.split('')
    console.log(array1)
    const filteredSentence = array1.filter(function(element, index, array){
        return index%skip!==0
    })
    console.log(filteredSentence.join(''))
}

const myResult1 = skipLettersInSentence ("Ethereum is cool", 4)
console.log (myResult1)

const myResult2 = skipLettersInSentence (54674455647645, 3)
console.log (myResult2)
    
    /*const filteredArray = array1.filter ((element, index, array) => {
        array.push("filtered letters")
        return sentence[index]%skip === 0
        })*/


// czy deklarując wpisując parametry element, index, array musimy ich później używac?

// array.filter  wpisywac element, index, array jedynie gdy będę z tego korzystał. sam element też zadziala

    /*const array2 = array1.filter((element, index, array) => {
        element === array[index]
        if(index % skip == 0){
            return element
        }
    
    console.log(array2)
    }
    for (let i=0; i<sentence.length/skip; i++) {
    if (array1.index%skip==0) {
        array1.filter(skip*i)
    }
    } return array1.join("")*/


/*
[
  'E',  'h', 'e',
  'r', 'e', 'u', 'm',
  ' ', 'i', 's', ' ',
  'c', 'o', 'o', 'l', 1
]
*/

