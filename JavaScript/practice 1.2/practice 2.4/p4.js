function filterProperties(inputObject, propertiesToKeep) {
    const filteredObject = {};
  
    propertiesToKeep.forEach(property => {
      if (inputObject.hasOwnProperty(property)) {
        filteredObject[property] = inputObject[property];
      }
    });
  
    return filteredObject;
  }
  
  // Example usage:
  const person = {
    name: "John",
    age: 30,
    address: "123 Main Street",
   
  };
  
  const filteredPerson = filterProperties(person, ["name", "age"]);
  
  console.log("Original Person:", person);
  console.log("Filtered Person:", filteredPerson);
  