// Function to add a new item to the list
function addItem() {
    var newItemText = document.getElementById('newItem').value;

    // Ensure the input is not empty
    if (newItemText.trim() !== '') {
        var itemList = document.getElementById('itemList');

        // Create a new list item
        var listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${newItemText}</span>
            <button onclick="removeItem(this)">Remove</button>
        `;

        // Add the new item to the list
        itemList.appendChild(listItem);

        // Clear the input field
        document.getElementById('newItem').value = '';
    }
}

// Function to remove an item from the list
function removeItem(button) {
    // Get the parent list item and remove it
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}