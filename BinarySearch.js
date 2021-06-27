//implement binary search 
let elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let serchable= 11;
//works only on sorted elements 
/**
 * Pass a sorted array
 * @param {*} data 
 * @param {*} startindex 
 * @param {*} end 
 * @param {*} value 
 * @returns index of the search element
 * @timecomplexity O(log n)
 * @spacecomplexity n- for all the recursive functions in stack
 */
const binarySearch = (data,startindex,end,value) => { 
    let median = Math.round(
        startindex === 0 
            ? Math.round((Math.round(end/2)- startindex)/2) 
            : (end+startindex)/2
        ); 
    if(value > data[median-1]) {
        return binarySearch(data,median,data.length,value); 
    } else if(value < data[median-1]){
        return binarySearch(data,startindex,median,value);
    } else if(data[median-1] === value) {//base condition when median index contains the search value
        return median-1;
    }
}
console.log(`Binary search index found for item ${serchable} => `, binarySearch(elements,0,elements.length,serchable)); 