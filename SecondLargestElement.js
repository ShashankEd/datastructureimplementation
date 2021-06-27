//2nd largest elements array, sorted using bubble sorting
const printSecondLargest = (array) => {
    let secondMax = array.length > 1 ? 0 : "Error: pass atleast 2 values in the array";
    if(array.length > 1) {
        //bubbble sorting
        for (let i = 0; i < array.length; i++) {  
            for(let j=i+1; j<array.length ;j++) { 
                let temp = array[i];
                if(array[i] > array[j]) { 
                    array[i] = array[j]; 
                    array[j] = temp;
                }
            }
        } 
        secondMax = array[array.length-2];
    }
    return secondMax;
}
let testValues = [];
testValues.push([4,1,12,15,16,10,2]);
testValues.push([]);
testValues.push([10]);
testValues.push([-10]); 
testValues.push([11,10]); 
testValues.push([21,50,70]); 
testValues.push([21,0,100]); 
testValues.push([-12,-11,-15]); 
testValues.map(
    value => console.log(`Second Largest is: ${printSecondLargest(value)}`)
);