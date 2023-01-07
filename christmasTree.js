//nazwy funkcji powinny pochodzić od czasowników, a zmiennych od rzeczowników

/*ZMIANY

1) Poprawiona funkcja showChristmasTree -> Choinka już powinna wyswietlać się poprawnie
2) Dodanie dwóch dodatkowych paramtetrów do funkcji treeHeightSection
3) Poprawiona czytelność kodu


*/

//WALIDACJA

/*
const treeHeightisAbove = (treeHeight) => {
    if (treeHeight<1) {
        throw new Error ("Number must not be less than 1")
    }
}

const treeHeightisUnder = (treeHeight) => {
    if (treeHeight>10) {
        throw new Error ("Number must not be higher than 10")
    }
}

*/

const isTreeHeightInRange = (treeHeight, minRange, maxRange) => {
    if ((treeHeight<minRange || treeHeight>maxRange)) {
        throw new Error (`Must be a number from specified range: from ${minRange} to ${maxRange}`)
}
}

const isNumber = (input) => {
    if (typeof input !== "number" || isNaN(input)){
        throw new Error ("Must be a number")
    }
}

const isInteger = (input) => {
    if (!(Number.isInteger(input))) {
        throw new Error ("Must be an integer")
    } 
}
 

// const showChristmasTree = (treeHeight) => {
//     isNumber(treeHeight)
//     //treeHeightisUnder(treeHeight)
//     //treeHeightisAbove(treeHeight)
//     isTreeHeightInRange(treeHeight, 1, 10)
//     isInteger(treeHeight)
//     const space = ' '
// const topLineOfChristmasTree = (space.repeat(treeHeight) + '* \n') 
// const bottomLineOfChristmasTree = (space.repeat(treeHeight) + '|')
// //const wholeTree = bottomLineOfChristmasTree + modifiedTree + topLineOfChristmasTree
// const tree = []
// const star2 = 'x'
// const leftSlash = '/'
// const rightSlash = '\\ \n'
//     for (let i = 0; i<treeHeight; i++) {
//     const modifiedTree = space.repeat(treeHeight-i-1) + leftSlash + star2.repeat(2*i) + star2 + rightSlash
//     tree.push(modifiedTree)
// } return treeString = topLineOfChristmasTree + tree.join('') + bottomLineOfChristmasTree
// } 

// const myResult1 = showChristmasTree(4)
// console.log (myResult1)

const showChristmasTreeString = (treeHeight) => {
    isNumber(treeHeight)
    isInteger(treeHeight)
    //treeHeightisUnder(treeHeight)
    //treeHeightisAbove(treeHeight)
    isTreeHeightInRange(treeHeight, 1, 10)
    const space = ' '
const topLineOfChristmasTree = (space.repeat(treeHeight) + '* \n') 
const bottomLineOfChristmasTree = (space.repeat(treeHeight) + '|')
//const wholeTree = bottomLineOfChristmasTree + modifiedTree + topLineOfChristmasTree
let myTree = ""
const leftSlash = '/'
const rightSlash = '\\ \n'
const star = 'x'

for(let i = 0 ; i<treeHeight ; i++){
    myTree += space.repeat(treeHeight-i-1) + leftSlash + star.repeat((2*i)+1) + rightSlash
} return topLineOfChristmasTree + myTree + bottomLineOfChristmasTree
} 

const myResult2 = showChristmasTreeString(4)
console.log (myResult2)

// W konsoli powinno wyświetlić się:
/*
    *
   /x\
  /xxx\
 /xxxxx\
/xxxxxxx\
    |
*/





