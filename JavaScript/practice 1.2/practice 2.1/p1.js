// Define the Person object
function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

// Create an instance of the Person object
var person1 = new Person("John Doe", 25, "Umiyanagar,visnagar");

// Access and display information
console.log("Original Information:");
console.log("Name: " + person1.name);
console.log("Age: " + person1.age);
console.log("Address: " + person1.address);

// Modify properties
person1.age = 26;
person1.address = "Patelnagar,visnagar";

// Display modified information
console.log("\nModified Information:");
console.log("Name: " + person1.name);
console.log("Age: " + person1.age);
console.log("Address: " + person1.address);
