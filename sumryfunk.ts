//  =====   36 ========= STARTS FROM HERE ========================================

/*

// Define a function called make_shirt
function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}

// Call the function with a size and message
make_shirt('Medium', 'Assignment #36');

*/

//  ==============  ENDS HERE   =====================================================================

//  =====   37  ========= STARTS FROM HERE =======================================

/*

// Define a function called make_shirt with default values

function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}

// Call the function with default values
//make_shirt(); // Large shirt with default message
//make_shirt('Medium'); // Medium shirt with default message

// Call the function with different sizes and messages
make_shirt('Small', 'I love TypeScript!');
make_shirt('Large', 'Keep Coding!');
make_shirt('Extra Large', 'Stay Awesome!');

*/

//  ==============  ENDS HERE   =====================================================================

//  ======  38  ======== STARTS FROM HERE ========================================

/*

//  Define a function called describe_city with default country value

function describe_city(city: string, country: string = 'DefaultCountry'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Tokyo'); // Default country will be used

*/

/*

// Define a function called describe_city() to describe cities
function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi"); // This statement describes that Karachi is located in Pakistan. Since no country is specified for Karachi, the default country, which is Pakistan, is used.
describe_city("New York", "USA");
describe_city("Paris", "France"); // Adding a city not in the default country

*/



//  ==============  ENDS HERE   =====================================================================


//  =====   39  ========= STARTS FROM HERE =======================================


/*


// Define a function called city_country() to format city and country
function city_country(city: string, country: string): string {
    return `"${city}, ${country}"`;
}

// Call the function with city-country pairs and print the returned value
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Washington", "USA"));
console.log(city_country("Mombasa", "Kenya"));

*/

//  ==============  ENDS HERE   =====================================================================



//  =====   40  ========= STARTS FROM HERE =======================================

/*

function make_album(artist: string, title: string, tracks?: string, volume?: number): { artist: string, title: string, tracks?: string, volume?: number } {
    const album: { artist: string, title: string, tracks?: string, volume?: number } = {
        artist: artist,
        title: title
    };

    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    // Add volume to the album object if provided
    if (volume !== undefined) {
        album.volume = volume;
    }

    return album;
}

// Create album objects
const album1 = make_album('Atif Aslam', 'Jal Pari', 'Aadat', 1);
const album2 = make_album('Hadiqa Kiani', 'Rung', 'Boohay Bariyaan', 2);
const album3 = make_album('Ali Zafar', 'Huqqa Pani', 'Channo', 3);

// Print album information
console.log(album1);
console.log(album2);
console.log(album3);

*/

//  ==============  ENDS HERE   =====================================================================

//  ==============   OR ==========================================================


/*

Excercise #40:
==============  



Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and
an album title, and it should return a Object containing these two pieces
of information. Use the function to make three dictionaries representing 
different albums. 
Print each return value to show that Objects are storing 
the album information correctly.
Add an optional parameter to make_album() that allows you to store 
the number of tracks on an album. 
If the calling line includes a value for the number of tracks, 
add that value to the album’s Object. 
Make at least one new function call that includes the number of tracks 
on an album.

*/

//  ============== STARTS FROM HERE ===============================================================

/*

// Function to create an album object
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create album objects
const album1 = make_album('Artist1', 'Album1', 10);
const album2 = make_album('Artist2', 'Album2');
const album3 = make_album('Artist3', 'Album3', 12);

// Print album information
console.log(album1);
console.log(album2);
console.log(album3);

*/

//  ==============  ENDS HERE   =====================================================================




//  ====================== OUT PUT ================================================




/*



{ artist: 'Artist1', title: 'Album1', tracks: 10 }
{ artist: 'Artist2', title: 'Album2' }
{ artist: 'Artist3', title: 'Album3', tracks: 12 }

*/


//  ============== STARTS FROM HERE ===============================================================

/*

function make_album(artist: string, title: string, tracks?: string): { artist: string, title: string, tracks?: string } {
    const album: { artist: string, title: string, tracks?: string } = {
        artist: artist,
        title: title
    };

    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create album objects
const album1 = make_album('Atif Aslam', 'Jal Pari', 'Aadat' tracks: 10);
const album2 = make_album('Hadiqa Kiani', 'Rung', 'Boohay Bariyaan' tracks: 10);
const album3 = make_album('Ali Zafar', 'Huqqa Pani', 'Channo' tracks: 10);

// Print album information
console.log(album1);
console.log(album2);
console.log(album3);

*/


//  ==============  ENDS HERE   =====================================================================


/*

//  ====================== OUT PUT ================================================




/*




{ artist: 'Atif Aslam', title: 'Jal Pari', tracks: 'Aadat' }
{ artist: 'Hadiqa Kiani', title: 'Rung', tracks: 'Boohay Bariyaan' }
{ artist: 'Ali Zafar', title: 'Huqqa Pani', tracks: 'Channo' }


*/

//  ============== STARTS FROM HERE ===============================================================

/*

function make_album(artist: string, title: string, tracks?: string, volume?: number): { artist: string, title: string, tracks?: string, volume?: number } {
    const album: { artist: string, title: string, tracks?: string, volume?: number } = {
        artist: artist,
        title: title
    };

    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    // Add volume to the album object if provided
    if (volume !== undefined) {
        album.volume = volume;
    }

    return album;
}

// Create album objects
const album1 = make_album('Atif Aslam', 'Jal Pari', 'Aadat', 1);
const album2 = make_album('Hadiqa Kiani', 'Rung', 'Boohay Bariyaan', 2);
const album3 = make_album('Ali Zafar', 'Huqqa Pani', 'Channo', 3);

// Print album information
console.log(album1);
console.log(album2);
console.log(album3);

*/

//  ==============  ENDS HERE   =====================================================================




//  ====================== OUT PUT ================================================




/*

{ artist: 'Atif Aslam', 
  title: 'Jal Pari',
  tracks: 'Aadat',
  volume: 1 
}
{
  artist: 'Hadiqa Kiani',
  title: 'Rung',
  tracks: 'Boohay Bariyaan',
  volume: 2
}
{
  artist: 'Ali Zafar',
  title: 'Huqqa Pani',
  tracks: 'Channo',
  volume: 3
}

*/

//  ==========================================================================
//  ==========================================================================


/*

Excercise #40:
==============  



Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and
an album title, and it should return a Object containing these two pieces
of information. Use the function to make three dictionaries representing 
different albums. 
Print each return value to show that Objects are storing 
the album information correctly.
Add an optional parameter to make_album() that allows you to store 
the number of tracks on an album. 
If the calling line includes a value for the number of tracks, 
add that value to the album’s Object. 
Make at least one new function call that includes the number of tracks 
on an album.

*/

//  ============== STARTS FROM HERE ===============================================================

/*

// Function to create an album object
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create album objects
const album1 = make_album('Artist1', 'Album1', 10);
const album2 = make_album('Artist2', 'Album2');
const album3 = make_album('Artist3', 'Album3', 12);

// Print album information
console.log(album1);
console.log(album2);
console.log(album3);

*/

//  ==============  ENDS HERE   =====================================================================




//  ====================== OUT PUT ================================================




/*



{ artist: 'Artist1', title: 'Album1', tracks: 10 }
{ artist: 'Artist2', title: 'Album2' }
{ artist: 'Artist3', title: 'Album3', tracks: 12 }

*/


//  ============== STARTS FROM HERE ===============================================================

/*

function make_album(artist: string, title: string, tracks?: string): { artist: string, title: string, tracks?: string } {
    const album: { artist: string, title: string, tracks?: string } = {
        artist: artist,
        title: title
    };

    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create album objects
const album1 = make_album('Atif Aslam', 'Jal Pari', 'Aadat' tracks: 10);
const album2 = make_album('Hadiqa Kiani', 'Rung', 'Boohay Bariyaan' tracks: 10);
const album3 = make_album('Ali Zafar', 'Huqqa Pani', 'Channo' tracks: 10);

// Print album information
console.log(album1);
console.log(album2);
console.log(album3);

*/


//  ==============  ENDS HERE   =====================================================================


/*

//  ====================== OUT PUT ================================================




/*




{ artist: 'Atif Aslam', title: 'Jal Pari', tracks: 'Aadat' }
{ artist: 'Hadiqa Kiani', title: 'Rung', tracks: 'Boohay Bariyaan' }
{ artist: 'Ali Zafar', title: 'Huqqa Pani', tracks: 'Channo' }


*/

//  ============== STARTS FROM HERE ===============================================================

/*

function make_album(artist: string, title: string, tracks?: string, volume?: number): { artist: string, title: string, tracks?: string, volume?: number } {
    const album: { artist: string, title: string, tracks?: string, volume?: number } = {
        artist: artist,
        title: title
    };

    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    // Add volume to the album object if provided
    if (volume !== undefined) {
        album.volume = volume;
    }

    return album;
}

// Create album objects
const album1 = make_album('Atif Aslam', 'Jal Pari', 'Aadat', 1);
const album2 = make_album('Hadiqa Kiani', 'Rung', 'Boohay Bariyaan', 2);
const album3 = make_album('Ali Zafar', 'Huqqa Pani', 'Channo', 3);

// Print album information
console.log(album1);
console.log(album2);
console.log(album3);

*/

//  ==============  ENDS HERE   =====================================================================




//  ====================== OUT PUT ================================================




/*

{ artist: 'Atif Aslam', 
  title: 'Jal Pari',
  tracks: 'Aadat',
  volume: 1 
}
{
  artist: 'Hadiqa Kiani',
  title: 'Rung',
  tracks: 'Boohay Bariyaan',
  volume: 2
}
{
  artist: 'Ali Zafar',
  title: 'Huqqa Pani',
  tracks: 'Channo',
  volume: 3
}

*/

//  ======= 41  ======= STARTS FROM HERE =========================================

/*

// Function to show magicians
function show_magicians(magicians: string[]): void {
    console.log("List of Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
const magician_names: string[] = ['Shahrukh', 'David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Call the function to show magicians
show_magicians(magician_names);

*/

//  ==============  ENDS HERE   =====================================================================


//  =====   42  ========= STARTS FROM HERE =======================================

/*

// Function to show magicians
function show_magicians(magicians: string[]): void {
    console.log("List of Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Function to modify the array of magicians
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Array of magician's names
const magician_names: string[] = ['Shahrukh', 'David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Modify the array of magicians
const great_magicians: string[] = make_great(magician_names);

// Call the function to show magicians
show_magicians(great_magicians);

*/

//  ==============  ENDS HERE   =====================================================================


//  =====   43  ========= STARTS FROM HERE =======================================

/*

// Function to show magicians
function show_magicians(magicians: string[]): void {
    console.log("List of Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Function to modify a copy of the array of magicians
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Array of magician's names
const magician_names: string[] = ['Shahrukh', 'David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Modify a copy of the array of magicians
const great_magicians: string[] = make_great([...magician_names]); // Creating a copy of the array using spread operator

// Call the function to show magicians with original names
show_magicians(magician_names);

console.log(""); // Adding a blank line for separation

// Call the function to show magicians with the Great added to each name
show_magicians(great_magicians);


*/

//  ==============  ENDS HERE   =====================================================================


//  ======= 44  ======= STARTS FROM HERE =========================================

/*
// Function to create a summary of the sandwich
function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log(); // Add an empty line for better readability
}

// Call the function with different numbers of arguments
makeSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
makeSandwich('Turkey', 'Swiss', 'Mayonnaise');
makeSandwich();


*/

//  ==============  ENDS HERE   =====================================================================


//  ============== STARTS FROM HERE ===============================================================

// Define a function to store car information

/*

Method: OR  SYNTAX:
===================     

function functioname() {        //  Attribute function with function name
    let a: number=33*2
    return a
    }
    console.log(functioname()); //  CALLING FUNCTION HERE

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
//  ==============  ENDS HERE   =====================================================================

function add(a, b) {
    return a + b;
}
console.log(add(12, 13));
//  ========================
function add1(a:number, b:number) { //  IN TYPESCRIPT
    return a + b;
}
const res = add1(322, 13);
console.log(res);
//  ========================
function sub(a,b) {
    return a - b;
}
console.log(sub(12, 3));
//  =======================
function grossprofit(sales,costofgoodssold) {
    return sales - costofgoodssold;
}
console.log(grossprofit(120000, 90000));
//  =======================
function mul(a, b) {
    return a * b;
}
console.log(mul(2, 3));
//  =======================
function div(a, b) {
    return a / b;
}
console.log(div(10, 2));
//  ========================







