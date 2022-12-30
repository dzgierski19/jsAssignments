/*
const showChristmasTree = (treeHeight) => {
for (let i=1; i<treeHeight; i++) {
    array1.splice (skip*i, 1)
    } return array1.join("")
} 
*/

const showChristmasTree = (treeHeight) => {};

showChristmasTree(4);
// W konsoli powinno wyświetlić się:
/*
    *
   /x\
  /xxx\
 /xxxxx\
    |
*/

//index * i | powiązany z treeHeight

const skipIsNumber = (skip) => {
    if (typeof skip === "number" && !isNaN(skip)){
        return true
    } else { 
        throw new Error ("Must be a number")
    }
}

const sentenceIsString = (sentence) => {
    if (typeof sentence === "string"){
        return true
    } else { 
        throw new Error ("Must be a string")
    }
}

const skipLettersInSentence = (sentence, skip) => {
    skipIsNumber(skip)
    sentenceIsString(sentence)
    const array1 = sentence.split('')
    console.log(array1)    
for (let i=1; i<sentence.length/skip; i++) {
    array1.splice (skip*i, 1)
    } return array1.join("")
} 

const myResult1 = skipLettersInSentence ("Ethereum is cool", 3)
console.log (myResult1)

const myResult2 = skipLettersInSentence (54674455647645, 3)
console.log (myResult2)

