//Given
const students = [
{ name: "Sidhant", age: 15, marks: 38 },
{ name: "Aman", age: 18, marks: 85 },
{ name: "Riya", age: 19, marks: 90 },
{ name: "Neha", age: 20, marks: 28 },
{ name: "Rahul", age: 17, marks: 72 },
{ name: "Priya", age: 16, marks: 81 },
{ name: "Karan", age: 21, marks: 67 },
{ name: "Anjali", age: 18, marks: 92 },
{ name: "Vikram", age: 22, marks: 76 },
{ name: "Pooja", age: 19, marks: 84 },
{ name: "Ajay", age: 19, marks: 34 }
                          ];
//Find all students with marks ≥ 80 (return new array)
const Learners = [];
for (let a = 0; a <students.length; a++) {
if (students[a].marks >= 80){
    Learners.push(students[a]);
}
}console.log(Learners);

//Find the youngest student

let Youngest =students[0];
for (let b = 1; b< students.length; b++){
    if (students[b].age< Youngest.age) {
        Youngest = students[b];
    }
}
console.log(Youngest);

//Find the average marks
let totalmarks=0;
for (let c =0; c< students.length; c++){
    totalmarks += students[c].marks;
}                       
const avgmarks = totalmarks / students.length;
console.log(avgmarks);

// Sort students by marks (ascending & descending)

const asc= students.slice().sort((a,b) => a.marks - b.marks);
console.log("Ascending order:", asc);
const desc= students.slice().sort((a,b) => b.marks - a.marks);
console.log("Descending order:", desc); 

//Add a new student object

const newStudent = { name: "Sid", age: 21, marks: 73 }; 
students.push(newStudent);
console.log(students);

//Number of students older than 18

let count = 0;
for (let d=0 ; d<students.length; d++){
    if (students[d].age>18){
        count++;
    }
}
console.log("Number of students older than 18 are "+ count);

// Return a list of failed students (marks < 40)

let failedStudents = [];
for(let e=0; e<students.length; e++){
    if (students[e].marks<40){
        failedStudents.push(students[e]);
    }
}
console.log(failedStudents);