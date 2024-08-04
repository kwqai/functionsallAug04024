

//console.log(`Total Subject - 5`);
//console.log(`Total Marks - 500`);


function sumMarks(urdu: number, english: number, math: number, physics: number, chemistry: number): number {
    let totalMarks = urdu + english + math + physics + chemistry;
    return totalMarks;
}


console.log(`Total Subject - 50`);
console.log(`Total Marks - 5000`);



let obtainedMarks = sumMarks(80, 80, 80, 80, 80);
console.log(`Marks Obtained - ` + obtainedMarks + ` `);

function percentage(totalMarks: number): number {
    let percent = (totalMarks / 500) * 100;
    return percent;
}

let percentObtained = percentage(obtainedMarks);
console.log(`Percentage - ` + percentObtained + ` %`);

//  ===============================================================

