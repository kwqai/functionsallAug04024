/*

// Store the names of animals in a list
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the name of each animal using a for loop
console.log("Animals:");
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nAnimal Characteristics:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a statement about what these animals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");

*/

//  ============================================================================



// Define a list of animals
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print out the name of each animal using forEach loop
console.log("Animals:");
animals.forEach(animal => {
    console.log(animal);
});

// Print a statement about each animal
console.log("\nAnimal Characteristics:");
animals.forEach(animal => {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
});

// Print a statement about what these animals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");





