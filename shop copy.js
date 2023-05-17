var showCodeButton = document.getElementById('product');
var overlay = document.getElementById('overlay');
var showCodeButton1 = document.getElementById('product1');
var overlay1 = document.getElementById('overlay1');
var showCodeButton2 = document.getElementById('product2');
var overlay2 = document.getElementById('overlay2');
var showCodeButton3 = document.getElementById('product3');
var overlay3 = document.getElementById('overlay3');
var showCodeButton4 = document.getElementById('product4');
var overlay4 = document.getElementById('overlay4');

showCodeButton.addEventListener('click', function() {
    overlay.style.display = 'block';
});

overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
});

showCodeButton1.addEventListener('click', function() {
    overlay1.style.display = 'block';
});

overlay1.addEventListener('click', function(event) {
    if (event.target === overlay1) {
        overlay1.style.display = 'none';
    }
});

showCodeButton2.addEventListener('click', function() {
    overlay2.style.display = 'block';
});

overlay2.addEventListener('click', function(event) {
    if (event.target === overlay2) {
        overlay2.style.display = 'none';
    }
});

showCodeButton3.addEventListener('click', function() {
    overlay3.style.display = 'block';
});

overlay3.addEventListener('click', function(event) {
    if (event.target === overlay3) {
        overlay3.style.display = 'none';
    }
});

showCodeButton4.addEventListener('click', function() {
    overlay4.style.display = 'block';
});

overlay4.addEventListener('click', function(event) {
    if (event.target === overlay4) {
        overlay4.style.display = 'none';
    }
});


  
  
  