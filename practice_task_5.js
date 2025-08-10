/*
Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3]
*/

const arr1 = [1, 2, 3];
console.log('The Original Array -> ', arr1);
// const arr2 = arr 1 // <- this is not the right way to copy an array //
const arr2 = [...arr1]; // copy 1st arry to a new 2nd array //
console.log('Copy Array -> ', arr2);
arr2[0] = 99;
console.log('Change 1st Elements of Copyed Arrays 1st Index -> ', arr2);

