class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    calculateTotalCost(quantityToBuy) {
      if (quantityToBuy <= 0) {
        console.error("Error: Please enter a valid quantity.");
        return null;
      }
  
      if (quantityToBuy > this.quantity) {
        console.error(`Error: Not enough ${this.name} available.`);
        return null;
      }
  
      const totalCost = this.price * quantityToBuy;
      return totalCost;
    }
  }
  
  // Example usage:
  // Creating a product
  const product1 = new Product("Laptop", 1200, 10);
  
  // Calculating total cost for a specified quantity
  const quantityToBuy = 3;
  const totalCost = product1.calculateTotalCost(quantityToBuy);
  
  if (totalCost !== null) {
    console.log(`Total cost for ${quantityToBuy} ${product1.name}(s): $${totalCost}`);
  }
  