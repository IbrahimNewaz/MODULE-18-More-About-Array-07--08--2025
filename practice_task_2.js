/*
Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 78, 46]
*/

const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumber = []; // an empty array for save the evern value from the numbers array //
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumber.push(numbers[i]); // saving the even values in this evenNumber variable //
    }
}
console.log(evenNumber.join(", "));
// output -> 12, 98, 78, 46 //

// Now reverse the array //

const revNumber = []; // an empty array for save all the value who comes in reverse way //
for (let i = evenNumber.length - 1; i >= 0; i--) {
    revNumber.push(evenNumber[i]);
}
console.log(revNumber.join(", "));

// output -> 12, 98, 78, 46 //
// output -> 46, 78, 98, 12 //