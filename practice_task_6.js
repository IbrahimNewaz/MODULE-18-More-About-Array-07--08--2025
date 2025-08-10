/*
Task 6
Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected ooutput:
John scored 85
Alice scored 90
*/

const infoStudent = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
]
let i = 0;
while (i < infoStudent.length) {
    const student = infoStudent[i];
    console.log(student.name + " scored " + student.marks);
    i++;
}