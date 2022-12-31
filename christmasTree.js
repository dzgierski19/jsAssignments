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
    if (!(treeHeight>=1 && treeHeight<=10)) {
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

/*
const topLineOfChristmasTree = (space.repeat(treeHeight+1) + '*') 
console.log(topLineOfChristmasTree)

const bottomLineOfChristmasTree = (space.repeat(treeHeight+1) + '|')
console.log(bottomLineOfChristmasTree)
//console.log('\\')*/

const showChristmasTree = (treeHeight) => {
treeHeightIsNumber(treeHeight)
treeHeightSection(treeHeight)
treeHeightIsInteger(treeHeight)
const topLineOfChristmasTree = (space.repeat(treeHeight+1) + '* \n') 
const bottomLineOfChristmasTree = (space.repeat(treeHeight+1) + '|')
//const wholeTree = bottomLineOfChristmasTree + modifiedTree + topLineOfChristmasTree
const tree = []
    for (let i = 0; i<treeHeight-1; i++) {
    const star2 = 'x'
    const space = ' '
    const leftSlash = '/'
    const rightSlash = '\\ \n'
    const modifiedTree = space.repeat(treeHeight-i) + leftSlash + star2.repeat(2*i) + star2 + rightSlash
    tree.push(modifiedTree)
} return treeString = topLineOfChristmasTree + tree.join('') + bottomLineOfChristmasTree
} 

const myResult1 = showChristmasTree(5)
console.log (myResult1)

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


