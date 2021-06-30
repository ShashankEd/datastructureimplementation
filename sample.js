/**
1. Takes a date (string in date format)
2. Checks if the date is older than or equal to 15 years from the current date
3. If yes, returns true
4. What unit test cases will you write for this} date 
 */
const checkDate = (date) => {
    let result = date !=="" ? false : "Pass the date";
    if(date !== "") {
        const dateToday = new Date().getTime()
        const oldDate = new Date(date).getTime();
        const dateDiff = Math.abs(dateToday - oldDate) / (1000 * 3600 * 24);
        console.log("dateToday, oldDate , dateDiff", dateToday, oldDate, dateDiff)
        result =  dateDiff >= 15 ? true : false ;
    }
    return result;
}

const testCases = [
    "10/01/1992",
    "10/10/2005",
    "10/01/2020",
    // "",
    // 12,
    // "abc"
]
// testCases.map( 
//     test => console.log("check more than 15 years ", checkDate(test))
// );


// console.log(a);
// a = 2;
// console.log(a);
// var a = 10;

// function check(){
// console.log(a);
// var a = 20;
// console.log(a);
// }

// check();
// console.log(a);

//closure example
function parent(pdata) {
    var mess = "hello";
    function child(childData) {
       console.log( `${mess} ${pdata} ${childData}`)
    }
    return child;
}

const pCall = parent("Papa");
pCall("shanky")

// console.log(a)
// var a = 10;

//let and const works differently than var, as it is block scope, it is not assigned undefined in the Memory creation step
// console.log(a)
// let a = 10;

function a() { 
    var x = 2;
    console.log(`${x} in a`)
}
function b() { 
    var x = 3;
    console.log(`${x} in b`)
}
var x;
a();//As before the function executes, the js engine will create a separate Execution context for this function, and which will have the 
//memory creation phase, and code execution phase, and all the varaibles within this function will be created, and the undefined value 
//will be assigned to it, in this case x = > undefined in the memory creation phase
b();;//As before the function executes, the js engine will create a separate Execution context for this function, and which will have the 
//memory creation phase, and code execution phase, and all the varaibles within this function will be created, and the undefined value 
//will be assigned to it, in this case x = > undefined in the memory creation phase
console.log(x)
// What is the call stack?
// It contains the global execution context and 