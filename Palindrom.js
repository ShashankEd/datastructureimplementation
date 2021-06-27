const number = 12321;
const checkIfPalindrom = (num) => {
    let rev = 0, temp = num, rem= 0;
    while( Math.round(temp) > 0) {
        rem = Math.round(temp)%10; 
        rev = rev * 10 + rem; 
        temp =  Math.round(temp)/10; 
    }
    return rev === num ? true : false;
}
console.log(`checkIfPalindrom ${number}`, checkIfPalindrom(number));