// Your item data (replace with actual data)
const items = ['child', '999', 'Item 3','Item 4','Item 5',
'Item 6','Item 7','Item 8','Item 9','Item 10'];
const itemsPerPage = 10; // Number of items to load per scroll

const itemContainer = document.getElementById('item-container');
let currentPage = 1;

function loadItems() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    for (let i = startIndex; i < endIndex; i++) {
        if (items[i]) {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.textContent = items[i];
            itemContainer.appendChild(itemElement);
        }
    }
    currentPage++;
}

// Initial load
loadItems();

// Infinite scroll listener
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
        loadItems();
    }
});
