//DOTO
// 1. Zainstaluj node.js : https://nodejs.org/en/
// 2. Instaluje npm : zgoogluj
// 3. każde zadanie to oddzielny plik

// Jakie są inne rozwiązania Math.floor, Math.round, Math.ceil -> math.round
// typeof
// wywołać pustą tablicę, a potem dodać do validacji, żeby tablica nie była pusta

const exampleArray = [0, 1, 2, 3, 4, 5];
const superDuperArray = ["stirng", 123, "dalsza część"];
const superDuperDuperArray = ["stirng", 123, "dalsza część", 345,345345,4567456];
const emptyArray = []

const merged = [...exampleArray, ...superDuperArray, ...superDuperDuperArray]

console.log(merged)

const selectRandomEle = (array1)  => {
  //TODO zrobić validacje
  validateIsNotEmptyArray(array1)
  return array1[Math.round(Math.random()*array1.length)]; // flor zwraca wartości z przedziału "<0;1)"
}

const validateIfArray = (array1) => {
  if(!Array.isArray(array1)){
    throw new Error("Must be an array")
  }
}

const validateIsNotEmptyArray = (array1) => {
  // tu sprawdzić, czy coś nie jest arrayem
  validateIfArray(array1)
  if(array1.length === 0){ 
    // alert("Enter Value");  
    throw new Error("Must not be an empty array")
  }
}



// console.log("emptyArray", selectRandomEle(emptyArray), typeof selectRandomEle(emptyArray))
const result = selectRandomEle(exampleArray)
console.log("exampleArray",result, typeof result)
console.log("superDuperDuperArray",selectRandomEle(superDuperDuperArray), typeof selectRandomEle(superDuperDuperArray))
console.log("Lubie placki",selectRandomEle("Lubie placki"))

console.log("Czy to się wyświetli - 1")

//selectRandomEle(emptyArray)

console.log("Czy to się wyświetli - 2")

const throwIfNotString = (mystring) => {
  if(typeof mystring !== "string"){
    throw new Error("Variable must be a string")
  }
}

console.log(emptyArray[0])

// console.log ('emptyArrayValidation', validateIsNotEmptyArray(emptyArray))

// hostisting poczytah

// petla, instrukcja warunkowa