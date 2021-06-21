"use strict";

Product.allProducts = [];
let mainElem = document.getElementById('main')
let h1Elem = document.getElementById('h1');
let imgElem = document.getElementById('img')

function Product(name, image) {
this.name = name;
this.image = image;
this.viewedCounter = 0;

Product.allProducts.push(this);
}

new Product('Banana Slicer', '../img/banana.jpeg');
new Product('Bathroom Ipad Stand', '../img/bathroom.jpeg');
new Product('Open Toe Rain Boots', '../img/boots.jpeg');
new Product('All-in-one Breakfast Maker', '../img/breakfast.jpeg');
new Product('Meatball Bubblegum', '../img/bubblegum.jpeg');
new Product('Chair', '../img/chair.jpeg');
new Product('Cthulu Action Figure', '../img/cthulhu.jpeg');
new Product('Duck Bill Dog Muzzle', '../img/dog-duck.jpeg');
new Product('Dragon Meat', '../img/dragon.jpeg');
new Product('Utensil Pens', '../img/pen.jpeg');
new Product('Pet Sweeper', '../img/pet-sweep.jpeg');
new Product('Pizza Scissors', '../img/scissors.jpeg');
new Product('Shark Sleeping Bag', '../img/shark.jpeg');
new Product('Baby Onesie Sweeper', '../img/sweep.png');
new Product('Tauntaun Sleeping Bag', '../img/tauntaun.jpeg');
new Product('Unicorn Meat', '../img/unicorn.jpeg');
new Product('Perpetual Watering Can', '../img/water-can.jpeg');
new Product('Wine Glass With Hole', '../img/wine-glass.jpeg');


Product.prototype.renderProduct = function(h1, img) {
h1.textContent = this.name;
img.src = this.image;
this.viewedCounter++;
}



function handleClick() {
  Product.allProducts[0].renderProduct(h1Elem, imgElem);
}

h1Elem.addEventListener('click', handleClick);

