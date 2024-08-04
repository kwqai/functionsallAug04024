/*

==================================================================================



// Hard Example: Using a do-while Loop
let num = 5;
do {
    console.log("Number: " + num);
    num--;
} while (num > 0);

================================================================================

/*

================================================================================

// Medium Example: Using a while Loop
let counter = 0;
while (counter < 3) {
    console.log("Counter: " + counter);
    counter++;
}

=================================================================================

*/


//==============================================================================

/*
// Easy Example: Using a for Loop
for (let i = 3; i < 17; i++) {
    console.log("Iteration " + (i + 1));
}

*/

/*
let n1 = 2
let n2 = 1
let n3 = n1*n2
console.log(n3)
*/

let n1: number = 2
for (let a:number = 0; a<=10; a++) {
    console.log(`$(n1) * ${a} = ${n1 * a}`)
}

let n2: number = 2;
for (let a: number = 0; a <= 5; a++) {
    console.log(`${n2} * ${a} = ${n2 * a}`);
}



//===============================================================================
/*

// Business Process Simulation

// Define an array of employees
const employees: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Define a function to assign projects to employees for a week
function assignProjectsForWeek() {
    const projects: string[] = ["Project A", "Project B", "Project C", "Project D", "Project E"];
    const daysOfWeek: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    for (let day = 0; day < daysOfWeek.length; day++) {
        console.log(`Projects for ${daysOfWeek[day]}:`);
        for (let i = 0; i < employees.length; i++) {
            const projectIndex = (day + i) % projects.length; // Rotate projects for fairness
            console.log(`${employees[i]}: ${projects[projectIndex]}`);
        }
        console.log("--------------------");
    }
}

// Execute the function to assign projects for the week
assignProjectsForWeek();


*/


//==============================================================================

/*

Projects for Monday:
Alice: Project A
Bob: Project B
Charlie: Project C
David: Project D
Eve: Project E
--------------------
Projects for Tuesday:
Alice: Project B
Bob: Project C
Charlie: Project D
David: Project E
Eve: Project A
--------------------
Projects for Wednesday:
Alice: Project C
Bob: Project D
Charlie: Project E
David: Project A
Eve: Project B
--------------------
Projects for Thursday:
Alice: Project D
Bob: Project E
Charlie: Project A
David: Project B
Eve: Project C
--------------------
Projects for Friday:
Alice: Project E
Bob: Project A
Charlie: Project B
David: Project C
Eve: Project D
--------------------








*/