"use strict";
//Note: All parameters are required
/*
//Named function
function add(x: number, y: number): number {
    return x+y;
}
*/
//  REAL EXAMPLE:===================================================
/*
function makeLemonade(lemonJuiceAmount: number, sugarAmount: number): number {
    return lemonJuiceAmount + sugarAmount;
}
const lemonJuiceAmount = 2; // cups of lemon juice
const sugarAmount = 1; // cups of sugar

const totalIngredients = makeLemonade(lemonJuiceAmount, sugarAmount);
console.log("Total ingredients needed for lemonade:", totalIngredients);
*/
//======================================================================
/*
//Anonymous function
let myAdd1 = function(x: number, y: number): number {
                return x+y;
};

*/
//  REAL EXAMPLE:===================================================
/*

let calculateTotal = function(item1Price: number, item2Price: number): number {
    return item1Price + item2Price;
};

const item1Price = 10; // price of item 1
const item2Price = 15; // price of item 2

const totalAmount = calculateTotal(item1Price, item2Price);
console.log("Total amount to pay:", totalAmount);

=====================================================================
*/
/*
//Anonymous function with explict type
let myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number {
                                                return x+y;
                                            };

//type names dont matter
let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number {
                                                                return x+y;
                                                            };
//Lambda functions
let myAdd4 = (a : number, b : number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
    //....
}
*/
/*
function totalEstimatedFactoryoverheads(supervisors: number, indirectLabor: number): number {
    return supervisors + indirectLabor;
}
const supervisors = 70000; // salary of supervisors
const indirectLabor = 75000; // wages of indirect Labor

const totalFactoryoverheads = totalEstimatedFactoryoverheads(supervisors, indirectLabor);
console.log("Total Estimated factory overheads:", totalFactoryoverheads);
*/
/*

function totalEstimatedFactoryoverheads(supervisors: number, indirectLabor: number): void {
    const totalFactoryoverheads = totalEstimatedFactoryoverheads(supervisors, indirectLabor);
    console.log("Total Estimated factory overheads:", totalFactoryoverheads);
}
const supervisors = 170000; // salary of supervisors
const indirectLabor = 175000; // wages of indirect Labor

*/
function totalEstimatedFactoryOverheads(supervisors, indirectLabor) {
    const totalFactoryOverheads = supervisors + indirectLabor;
    console.log("Total Estimated factory overheads:", totalFactoryOverheads);
}
const supervisors = 170000; // salary of supervisors
const indirectLabor = 175000; // wages of indirect Labor
totalEstimatedFactoryOverheads(supervisors, indirectLabor);
