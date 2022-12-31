/*
const showChristmasTree = (treeHeight) => {
for (let i=1; i<treeHeight; i++) {
    array1.splice (skip*i, 1)
    } return array1.join("")
} 
*/

// "i".jakaśmetoda(4) = "iiii"

//christmasTree jest metoda ktora pozwala powielić spację

//WALIDACJA

const treeHeightSection = (treeHeight) => {
    if (!(1<=treeHeight<=10)) {
        throw new Error ("Please type number from 1 to 10")
    }
}

const treeHeightIsNumber = (treeHeight) => {
    if (typeof treeHeight === "number" && !isNaN(treeHeight)){
        return true
    } else { 
        throw new Error ("Must be a number")
    }
}

const treeHeightIsInteger = (treeHeight) => {
    if (!(Number.isInteger(treeHeight))) {
        throw new Error ("Must be an integer")
    } 
}

const space = ' '

const topLineOfChristmasTree = (space.repeat(4) + '*') 
console.log(topLineOfChristmasTree)

const bottomLineOfChristmasTree = (space.repeat(4) + '|')
console.log(bottomLineOfChristmasTree)

let star2 = '*'
let doubleStar = (star2.repeat())
console.log(doubleStar)

const showChristmasTree = (treeHeight) => {
treeHeightIsNumber(treeHeight)
treeHeightSection(treeHeight)
treeHeightIsInteger(treeHeight)
const tree = []
    for (let i = 0; i<treeHeight; i++) {
    const star2 = '*'
    const space = ' '
    let modifiedStar = star2.repeat(i)
    console.log(modifiedStar)
    tree.push(modifiedStar)
    i++
} return tree
} 
const myResult1 = console.log(showChristmasTree(4))
console.log (myResult1)

console.log(showChristmasTree(4.5))

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


