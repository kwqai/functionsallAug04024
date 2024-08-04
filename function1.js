"use strict";
function CalculateGrade(studentName, subject, score) {
    let grade;
    if (score >= 90) {
        grade = "A";
    }
    else if (score >= 80) {
        grade = "B";
    }
    else if (score >= 70) {
        grade = "C";
    }
    else if (score >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    return studentName + " achieved grade " + grade + " in " + subject;
}
// Example usage of the function
let student1Grade = CalculateGrade("Alice", "Math", 85);
console.log(student1Grade);
let student2Grade = CalculateGrade("Bob", "Science", 75);
console.log(student2Grade);
