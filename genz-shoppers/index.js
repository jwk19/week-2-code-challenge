// Add items to shopping list 
document.getElementById('addItem-btn').addEventListener('click',function (){
// get value of the input field 
let newItem = document.getElementById('newItem').value;

// Check if the input field is not empty
if (newItem.trim() !== '') {
    // Create a new list item element
    let li = document.createElement('li');
    li.innerHTML = newItem;

    // Append the new list item to the shopping list
    document.getElementById('genzItemsUl').appendChild(li);

    // Clear the input field
    document.getElementById('newItem').value = '';
} else {
    alert('Please enter a shopping item.');
}

});


//clear shopping list items 
document.getElementById('clearList-btn').addEventListener('click', function() {
    // Get the shopping list element
    let genzItemsUl = document.getElementById('genzItemsUl');

// Check if the list has any children
if (genzItemsUl.children.length > 0) {
    // Remove all items of the shopping list
    genzItemsUl.removeChild(genzItemsUl.lastChild);
    
} else {
    alert('Oops! Genz Shopper, no more shopping items. Add some..');
}
});
