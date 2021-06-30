/**
 * Partition algorithm
 * @param {*} data 
 * @param {*} low 
 * @param {*} high 
 */
 const getPartitionIndex = (data,low,high) => {
    let pivotEle = data[low];
    let i = low, j = high;
    while(i < j) {
        do {
            i++;
        } while(data[i] <= pivotEle);
        do {
            j--;
        } while(data[j] > pivotEle);
        if(i < j) {
            //swap the values
            let temp = data[i];
            data[i]= data[j];
            data[j]= temp;
            break;
        }
    }
    //we have reached the position where element at i is greater than pivot, and element at j is less than pivot
    //swap pivot(low) with element at j, and j becomes the partitioning index
    let temp = data[low];
    data[low]= data[j];
    data[j] = temp;
    return j;
}

/**
 * 
 * @param {*} data 
 * @param {*} low 
 * @param {*} high 
 * @returns the updated array with sorted elements
 * @timecomplexity O(nlog n)
 * @spacecomplexity n+n for recursive function call in stack and the array of n 
 */
const quickSort = (data,low,high) => {
    if(low < high) {
         const partitionIndex = getPartitionIndex(data,low,high);
         quickSort(data,low,partitionIndex);
         quickSort(data,partitionIndex+1,high);
    }
}

const data = [10,3,2,4,5,15,12,11,16,13,19];
console.log("Unsorted ::: ", data)
quickSort(data,0,data.length-1)
console.log("With quick sort the data is sorted ::: ", data)