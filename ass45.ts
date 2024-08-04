
/*

function storeCarInfo(manufacturer: string, modelName: string): object {
    let carInfo: { [key: string]: any } = {
        "Manufacturer": manufacturer,
        "Model": modelName
    };

    return carInfo; // Result 
}

// Call the function with required information
const carInfo = storeCarInfo("Toyota", "Corolla");

// Print the object to ensure all information is stored correctly
console.log(carInfo);

*/


/*

//  ADDING NEW FEATURES:    - BY ADDING CODE ...extras: [string, any][]):
//  =====================================================================


function storeCarInfo(manufacturer: string, modelName: string, ...extras: [string, any][]): object {
    let carInfo: { [key: string]: any } = {
        "Manufacturer": manufacturer,
        "Model": modelName
    };

    // Store any additional information provided as key-value pairs
    extras.forEach(([key, value]) => {
        carInfo[key] = value;
    });

    return carInfo; // Result 
}

// Call the function with required information and additional details
const carInfo = storeCarInfo("Toyota", "Corolla", ["Sunroof", true], ["Leather Seats", true]);

// Print the object to ensure all information is stored correctly
console.log(carInfo);

*/

/*


function storeCarInfo(manufacturer: string, modelName: string, ...extras: [string, any][]): object {
    
    let carInfo: {[key: string]: any} = {
        "Manufacturer": manufacturer,
        "Model": modelName
    };

    // Store any additional information provided as key-value pairs
    extras.forEach(([key, value]) => {
        carInfo[key] = value;
    });

    return carInfo; //  Result 
}

// Call the function with required information and additional details
let carDetails = storeCarInfo("Suzuki", "FX-800", ["Color", "Off White"], ["Year", 1984]);

// Print the object to ensure all information is stored correctly
console.log(carDetails);

*/
/*

//  ASSIGNMENT SUBMITTED TO GHOUSE:
//  ===============================

function storeCarInfo(manufacturer: string, modelName: string, ...extras: [string, any][]): object {
    
    let carInfo: {[key: string]: any} = {
        "Manufacturer": manufacturer,
        "Model": modelName
    };

    // Store any additional information provided as key-value pairs
    extras.forEach(([key, value]) => {
        carInfo[key] = value;
    });

    return carInfo; //  Result 
}

// Call the function with required information and additional details
let carDetails = storeCarInfo("Suzuki", "FX-800", ["Color", "Off White"], ["Year", 1984]);

// Print the object to ensure all information is stored correctly
console.log(carDetails);

*/

/*

================================================================================

function storeCarInfo(manufacturer: string, modelName: string): object {
    let carInfo: { [key: string]: any } = {
        "Manufacturer": manufacturer,
        "Model": modelName
    };

    return carInfo; // Result 
}

// Call the function with required information
const carInfo = storeCarInfo("Toyota", "Corolla");

// Print the object to ensure all information is stored correctly
console.log(carInfo);

================================================================================

*/

/*

======================= RED LINE  LINE #9: ======================================

function storeCarInfo(manufacturer: string, modelName: string): object {
    let carInfo: { [key: string]: any } = {
        "Manufacturer": manufacturer,
        "Model": modelName
    };

    return carInfo; // Result 
}

// Call the function with required information
const carInfo = storeCarInfo("Toyota", "Corolla", ["Sunroof", true], ["Leather Seats", true]);

// Print the object to ensure all information is stored correctly
console.log(carInfo);

================================================================================

*/

/*

==================  RED LINE  LINE #1: ===========================================

function storeCarInfo(manufacturer: string, modelName: string, ...extras: [string, any][]): object {
    let carInfo: { [key: string]: any } = {
        "Manufacturer": manufacturer,
        "Model": modelName
    };

    return carInfo; // Result 
}

// Call the function with required information
const carInfo = storeCarInfo("Toyota", "Corolla");

// Print the object to ensure all information is stored correctly
console.log(carInfo);

================================================================================

*/

/*

================================================================================

function storeCarInfo(manufacturer: string, modelName: string): object {
    let carInfo: { [key: string]: any } = {
        "Manufacturer": manufacturer,
        "Model": modelName
    };

    return carInfo; // Result 
}

// Call the function with required information
const carInfo = storeCarInfo("Toyota", "Corolla");

// Print the object to ensure all information is stored correctly
console.log(carInfo);

================================================================================

*/

/*

================================================================================

*/

function storeCarInfo(manufacturer: string, modelName: string, ...extras: [string, any][]): object {
    let carInfo: { [key: string]: any } = {
        "Manufacturer": manufacturer,
        "Model": modelName
    };

    // Store any additional information provided as key-value pairs
    extras.forEach(([key, value]) => {
        carInfo[key] = value;
    });

    return carInfo; // Result 
}

// Call the function with required information and additional details
let carDetails = storeCarInfo("Suzuki", "FX-800", ["Color", "Off White"], ["Year", 1984], ["Price", 5000], ["GPS", true]);

// Print the object to ensure all information is stored correctly
console.log(carDetails);

/*

================================================================================

*/

/*

==================  OUT PUT ====================================================

{
  Manufacturer: 'Suzuki',
  Model: 'FX-800',       
  Color: 'Off White',    
  Year: 1984,
  Price: 5000,
  GPS: true
}

================================================================================

*/