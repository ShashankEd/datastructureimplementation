//Input - Welcome to this Javascript Guide!
//Output - !ediuG tpircsavaJ siht ot emocleW
const reverseSentence = (sentence) => {
    return sentence.split(" ").map(
        word => [...word].reverse().join("")
    ).reverse().join(" ");
}

const reverseEveryWordOfSentence = (sentence) => {
    return sentence.split(" ").map(
        word => [...word].reverse().join("")
    ).join(" ");
}

let sentence = "Welcome to this Javascript Guide!";
console.log("Reverse sentence: ", reverseSentence(sentence));
console.log("Reverse every word: ", reverseEveryWordOfSentence(sentence));

let numbers = [10,1,24,12,17,100,60,45];
//sort the numbers 
console.log("sorted in ASC: " ,numbers.sort((a,b) => a-b));
console.log("sorted in DESC: " ,numbers.sort((a,b) => b-a));
// get all distinct values 
let repeatingNumbers = [10,1,10,1,1,1,241,24,12,17,100,100,100,100,60,45];

let repeatingObjects = [
    {
        id: 1
    },
    {
        id: 1
    },
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
    {
        id: 5
    },
    {
        id: 6
    },
    {
        id: 12
    },
]
console.log("Distinct numbers: ", [...repeatingNumbers.reduce((map,item )=> map.set(item,item),new Map()).values()]);

//distinct object based on id attribute
console.log("Distinct objects: ", [...repeatingObjects.reduce((map,item)=> map.set(item.id,item),new Map()).values()]);

//distinct objects with only even ids 
console.log("Even ids ", 
    [...repeatingObjects.reduce((map,item) =>  map.set(item.id,item),new Map()).values()]
        .filter(item => item.id%2 === 0));