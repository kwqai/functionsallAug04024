function CreateShoppingList(...items: string[]): string {
    let shoppingList = "Shopping List:\n";

    for (let i = 0; i < items.length; i++) {
        shoppingList += "- " + items[i] + "\n";
    }

    return shoppingList;
}

// Example usage of the function
let shoppingList1 = CreateShoppingList("Apples", "Bananas", "Milk", "Bread");
console.log(shoppingList1);

let shoppingList2 = CreateShoppingList("Eggs", "Cheese", "Tomatoes");
console.log(shoppingList2);
