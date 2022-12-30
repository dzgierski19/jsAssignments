/*
const showChristmasTree = (treeHeight) => {
for (let i=1; i<treeHeight; i++) {
    array1.splice (skip*i, 1)
    } return array1.join("")
} 
*/

// "i".jakaśmetoda(4) = "iiii"

//christmasTree jest metoda ktora pozwala powielić spację

const showChristmasTree = (treeHeight) => {

} 

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
