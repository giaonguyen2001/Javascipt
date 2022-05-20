// Description Array in JS
/*
    1. Resizable and contain a mix of difference data type
    2. Accessed using number index
    3. JavaScript array-copy operations create shallow copies
*/

// Shallow copy and Deep copy 
/*
    1. Shallow copy:
    - Share the same references
    - Way: (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), Object.assign()
*/

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2[0] = 0;

// console.log(arr1, arr2);

/*
    1. Deep copy
    - Do not share the same references
    - Way: Use JSON.stringify to convert object to a JSON string, 
    and then JSON.parse() to convert the string back
*/

let arr1 = [1, 2, 3];
let arr2 = JSON.parse(JSON.stringify(arr1));
arr2[0] = 0;

console.log(arr1, arr2);

// Array function: find(), filter(), reduce(), map(), forEach()

