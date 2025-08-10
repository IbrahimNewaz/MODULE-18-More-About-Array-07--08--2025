/*
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/
const statement = 'I am a hard working person'
const staArray = ['I', 'am', 'a', 'hard', 'working', 'person'];
const RevstaArray = [];

let i = staArray.length - 1;
while (i >= 0) {
    RevstaArray.push(staArray[i]);
    i--;
}
console.log(RevstaArray.join(" "));