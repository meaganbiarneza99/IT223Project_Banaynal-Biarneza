// Get the filter and sort select elements
var filterSelect = document.getElementById('filter-select');
var sortSelect = document.getElementById('sort-select');

// Add event listeners to the select elements
filterSelect.addEventListener('change', filterProducts);
sortSelect.addEventListener('change', sortProducts);

// Function to filter the products based on the selected filter
function filterProducts() {
  var filterValue = filterSelect.value;
  var productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(function(card) {
    if (filterValue === 'all' || card.classList.contains(filterValue)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Function to sort the products based on the selected sort option
function sortProducts() {
  var sortValue = sortSelect.value;
  var productsContainer = document.querySelector('.products');
  var productCards = document.querySelectorAll('.product-card');

  var sortedCards = Array.from(productCards).sort(function(a, b) {
    var aName = a.querySelector('.product-info h5').innerText;
    var bName = b.querySelector('.product-info h5').innerText;

    if (sortValue === 'featured') {
        // Implement the logic to sort by featured
        return 0; // Placeholder return value
    } else if (sortValue === 'bestselling') {
        // Implement the logic to sort by bestselling
        return 0; // Placeholder return value
    } else if (sortValue === 'az') {
        return aName.localeCompare(bName);
    } else if (sortValue === 'za') {
        return bName.localeCompare(aName);
    } else if (sortValue === 'lowtohigh') {
        var aPrice = parseFloat(a.querySelector('.product-info h6').innerText.replace(/₱|,/g, ''));
        var bPrice = parseFloat(b.querySelector('.product-info h6').innerText.replace(/₱|,/g, ''));
        return aPrice - bPrice;
    } else if (sortValue === 'hightolow') {
        var aPrice = parseFloat(a.querySelector('.product-info h6').innerText.replace(/₱|,/g, ''));
        var bPrice = parseFloat(b.querySelector('.product-info h6').innerText.replace(/₱|,/g, ''));
        return bPrice - aPrice;
    } else if (sortValue === 'newtoold') {
        // Implement the logic to sort by date, new to old
        var aId = a.querySelector('.product-image input').id;
        var bId = b.querySelector('.product-image input').id;
        return bId.localeCompare(aId);
    } else if (sortValue === 'oldtonew') {
        // Implement the logic to sort by date, old to new
        var aId = a.querySelector('.product-image input').id;
        var bId = b.querySelector('.product-image input').id;
        return aId.localeCompare(bId);
      }
  });

  // Remove existing product cards
  productCards.forEach(function(card) {
    card.remove();
  });

  // Append sorted product cards to the container
  sortedCards.forEach(function(card) {
    productsContainer.appendChild(card);
  });
}






