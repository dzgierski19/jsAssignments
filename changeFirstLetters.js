//WALIDACJA

const isTextString = (text) => {
    if (typeof text !== "string") {
        throw new Error (`${text} must be a string`)
    }
}

const isStringLengthNotZero = (text) => {
    if (text.length == 0) {
        throw new Error ("You must type at least one character")
    }
}

const changeFirstLetters = (text) => {
isTextString(text)
isStringLengthNotZero(text)


};


//SPRAWDZENIE

const result1 = changeFirstLetters ("Bitcoin is the best asset in the world, not fiat currencies")

console.log (result1)

const result2 = changeFirstLetters (100011)

console.log (result2)

const result3 = changeFirstLetters ('')

console.log (result3)

const exampleText = "Pisze tutaj cokolwiek, a Ala ma kota";
const result = changeFirstLetters(exampleText); // result === "pisze Tutaj Cokolwiek, A ala Ma Kota"