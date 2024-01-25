function mergeObjects(obj1, obj2) {
    const mergedObject = { ...obj1, ...obj2 };
    return mergedObject;
  }
  
  // Example usage:
  const person1 = {
    name: "John",
    age: 30
  };
  
  const person2 = {
    address: "Patelnagar, Visnagar",
   
  };
  
  const combinedPerson = mergeObjects(person1, person2);
  
  console.log("Person 1:", person1);
  console.log("Person 2:", person2);
  console.log("Combined Person:", combinedPerson);
  