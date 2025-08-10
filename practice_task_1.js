/*
Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/


const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const revColors = [];
for (let i = colors.length - 1; i >= 0; i--) {
    revColors.push(colors[i]);
}
console.log(revColors.join(", "));

//Practice now with  while loops //
console.log("\n");
const RevColores = [];
let i = revColors.length - 1;
while (i >= 0) {
    RevColores.push(revColors[i]);
    i--;
}
console.log(RevColores.join(", "));