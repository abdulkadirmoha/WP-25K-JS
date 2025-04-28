/* 
Initial data:
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

1. Loop through the `teamMembers` array and log each name to the console.  
2. Remove the first member of the array.  
3. Remove the last member of the array.  
4. Add a new member "Alex" to the front of the array.  
5. Append a new member "Linda" to the end of the array.  
6. Create a new array that excludes the first two members, keeping the original array unchanged.  
7. [Skipped]  
8. Try to find the index of "Jake" (who is not in the array).  
9. Replace "Mike" with "Carol" and "Bruce" in the same position.  
10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  
11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  
13. [Skipped]  
14. Transform all names in the array to be uppercase while keeping the original array unchanged.  
15. Sort `teamMembers` in alphabetical order.  
16. Reverse the `teamMembers` array.  
17. Check if at least one member in the array is named "John".  
18. Check if all names in the array have more than three letters. 
*/

// Initial Data
let teamMembers = ["John", "Emily", "Mike", "Sarah"];

// 1. Loop through the teamMembers array and log each name
teamMembers.forEach((member) => {
  console.log(member);
});

// 2. Remove the first member of the array
teamMembers.shift();

// 3. Remove the last member of the array
teamMembers.pop();

// 4. Add a new member "Alex" to the front of the array
teamMembers.unshift("Alex");

// 5. Append a new member "Linda" to the end of the array
teamMembers.push("Linda");

// 6. Create a new array that excludes the first two members, keeping the original array unchanged
let teamMembersTwo = teamMembers.slice(2);
console.log("teamMembersTwo:", teamMembersTwo);

// 8. Try to find the index of "Jake" (who is not in the array)
console.log("Index of Jake:", teamMembers.indexOf("Jake"));

// 9. Replace "Mike" with "Carol" and "Bruce" in the same position
// (First, reset data so Mike is back for this operation)
teamMembers = ["Alex", "Emily", "Mike", "Linda"];
teamMembers.splice(2, 1, "Carol", "Bruce");

// 10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged
let newTeam = ["Bob"];
let combined = teamMembers.concat(newTeam);
console.log("Combined:", combined);

// 11. Copy the entire teamMembers array using slice
let allNewteamMembers = teamMembers.slice();
console.log("allNewteamMembers:", allNewteamMembers);

// 12. Create a `newMembers` array and merge it with `teamMembers`
let newMembers = ["Tina", "Dean"];
let mergedMembers = teamMembers.concat(newMembers);
console.log("Merged Members:", mergedMembers);

// 14. Transform all names in the array to be uppercase
const capitalizationName = teamMembers.map((name) => name.toUpperCase());
console.log("Uppercase Names:", capitalizationName);

// 15. Sort teamMembers in alphabetical order
teamMembers.sort();
console.log("Sorted:", teamMembers);

// 16. Reverse the teamMembers array
teamMembers.reverse();
console.log("Reversed:", teamMembers);

// 17. Check if at least one member is named "John"
const hasJohn = teamMembers.some((name) => name === "John");
console.log("Contains John?", hasJohn);

// 18. Check if all names have more than three letters
const allLongNames = teamMembers.every((name) => name.length > 3);
console.log("All names > 3 letters?", allLongNames);

// Final state of the array
console.log("Updated teamMembers:", teamMembers);
