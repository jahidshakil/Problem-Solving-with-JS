const arr1 = [1, 3, 4, 5, 6, 8];
const arr2 = [4, 6, 8, 9, 11];
const merge = (arr1,arr2) => {
    let result = [];
    let i = 0; 
    let j = 0;
    let current = 0;
    while (current < (arr1.length + arr2.length)) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++
        }
        current++
    }
    return result;
}
 
console.log(merge(arr1,arr2))