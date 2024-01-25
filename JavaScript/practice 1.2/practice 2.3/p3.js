// Array of objects representing people
const peopleArray = [
    { name: "John", age: 30, occupation: "Engineer" },
    { name: "Alice", age: 25, occupation: "Teacher" },
    { name: "Bob", age: 40, occupation: "Doctor" },
    // Add more objects as needed
  ];
  
  // Loop through the array and display information for each person
  for (let i = 0; i < peopleArray.length; i++) {
    const person = peopleArray[i];
    console.log(`Person ${i + 1}:`);
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Occupation: ${person.occupation}`);
    console.log("\n"); // Add a newline for better readability
  }
  