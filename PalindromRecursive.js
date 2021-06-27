const number = 123212;
const checkIfPalindromRecursive = (num,r) => {
    let rev = r, temp = num, rem= 0;
    if(Math.round(temp) > 0) { 
        rem = Math.round(temp)%10; 
        rev = rev * 10 + rem; 
        temp =  Math.round(temp)/10; 
        // console.log("rem, rev, temp", rem, rev,  Math.round(temp));
        return checkIfPalindromRecursive(temp,rev);
    } else {
        return rev;
    }
}
console.log(`checkIfPalindrom using Recursive ${number}`, checkIfPalindromRecursive(number,0) === number ? true : false);
