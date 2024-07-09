// Add items to shopping list 
document.getElementById('addItem-btn').addEventListener('click', addItem);

function addItem() {
    // Get the value of the input field 
    let newItem = document.getElementById('newItem').value;

    // Check if the input field is not empty
    if (newItem.trim() !== '') {
        // Create a new list item element
        let li = document.createElement('li');
        li.innerHTML = newItem;

        // Add click event listener to select the item
        li.addEventListener('click', function() {
            li.classList.toggle('selected');
        });

        // Append the new list item to the shopping list
        document.getElementById('genzItemsUl').appendChild(li);

        // Clear the input field
        document.getElementById('newItem').value = '';
    } else {
        alert('Please enter a shopping item.');
    }
}

// To add ENTER keyboard button functionality to add shopping item
document.getElementById('newItem').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

// Clear shopping list items 
document.getElementById('clearList-btn').addEventListener('click', function() {
    // Get the shopping list element
    let genzItemsUl = document.getElementById('genzItemsUl');

    // Check if the list has any children
    let hasChildren = genzItemsUl.firstChild !== null;

    // Remove all items of the shopping list
    while (genzItemsUl.firstChild) {
        genzItemsUl.removeChild(genzItemsUl.firstChild);
    }

    // Mimic the 'else' behavior
    if (!hasChildren) {
        alert('Oops! Genz Shopper, no more shopping items. Add some..');
    }
});

// Mark selected items as purchased 
document.getElementById('markPurchased-btn').addEventListener('click', function() {
    let selectedItems = document.querySelectorAll('#genzItemsUl li.selected');
    selectedItems.forEach(item => {
        item.classList.remove('selected');
        item.classList.add('purchased');
    });
});
