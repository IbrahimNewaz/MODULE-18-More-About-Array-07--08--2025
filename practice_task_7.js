/*
Task 7
Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
    [1, 2],
  ->[3, 4],  // this is the fact that will be working space 🚩
    [5, 6]
]
Expected Array:

clar
*/

const dArray = [
  [1, 2],
  [3, 4],
  [5, 6]
];

console.log('The Orijinal Array -> ', dArray);

dArray[1][0] = 99;
console.log('The Array After Changed Its Elements -> ' ,dArray);



