"use strict";
/*

// ============    EX09b   ======= STARTS FROM HERE    =========================

//Named function with optional parameters
function buildName(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  //ok
//let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams");  //also ok



//anonymous function type with optional parameters
var buildName1 : (firstName: string, lastName?: string) => string =
function(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

==================================================================================
=====   April 16, 2024 ========    EX09b   ======= ENDS HERE   ===================
==================================================================================
*/
function makeObject(firstName, lastName, email, phoneNumber) {
    return {
        firstName,
        lastName,
        email,
        phoneNumber
    };
}
const obj1 = makeObject("John", "Doe", "john@example.com", "12345");
const obj2 = makeObject("John", "Doe", "john@example.com");
console.log(obj1);
console.log(obj2);
//============================================================================
/*


interface kharoos {
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string
}

function funkanaamkuchbhi(firstName: string, lastName: string, email: string,
    phoneNumber?: string) {

        return {
            firstName,
            lastName,
            email,
            phoneNumber
        }

        }

let chalbay1 = funkanaamkuchbhi("Javeria", "Neelum", "javaidexample.com", "1352345");
let chalbay2 = funkanaamkuchbhi("Johny", "Dare", "john@example.com");

console.log(chalbay1);
console.log(chalbay2);

*/ 
