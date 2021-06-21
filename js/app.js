"use strict";

Product.allProducts = [];
let mainElem = document.getElementById('main')
let h1LeftElem = document.getElementById('left-h1');
let imgLeftElem = document.getElementById('left-img')
let h1MiddleElem = document.getElementById('middle-h1');
let imgMiddleElem = document.getElementById('middle-img')
let h1RightElem = document.getElementById('right-h1');
let imgRightElem = document.getElementById('right-img')
let resultsUlElem = document.getElementById('results');
let voteCounter = 0;
let leftProduct = null;
let middleProduct = null;
let rightProduct = null;

function Product(name, image) {
this.name = name;
this.image = image;
this.viewedCounter = 0;
this.votes = 0;

Product.allProducts.push(this);
}

function pickThreeProducts() {
let leftProductIndex = Math.floor((Math.random() * Product.allProducts.length));
leftProduct = Product.allProducts[leftProductIndex];

let middleProductIndex = Math.floor((Math.random() * Product.allProducts.length));
middleProduct = Product.allProducts[middleProductIndex];

while (middleProduct === null || middleProductIndex === leftProductIndex) {
  let middleProductIndex = Math.floor((Math.random() * Product.allProducts.length));
  middleProduct = Product.allProducts[middleProductIndex];
}

let rightProductIndex = Math.floor((Math.random() * Product.allProducts.length));
rightProduct = Product.allProducts[rightProductIndex];

while (rightProduct === null || rightProductIndex === middleProductIndex || rightProductIndex === leftProductIndex) {
  let rightProductIndex = Math.floor((Math.random() * Product.allProducts.length));
  rightProduct = Product.allProducts[rightProductIndex];
}

leftProduct.renderProduct(h1LeftElem, imgLeftElem);
middleProduct.renderProduct(h1MiddleElem, imgMiddleElem);
rightProduct.renderProduct(h1RightElem, imgRightElem);
}

Product.prototype.renderProduct = function(h1, img) {
h1.textContent = this.name;
img.src = this.image;
this.viewedCounter++;
}

function handleClick(event) {
let id = event.target.id
if (id === 'left-img' || id === 'middle-img' || id === 'right-img') {
  voteCounter++;
  if (id === 'left-img') {
    leftProduct.votes++;
  } else if (id === 'middle-img'){
    middleProduct.votes++;
  } else {
    rightProduct.votes++;
  }
  pickThreeProducts();
} else {
  alert('try again');
}
if (voteCounter === 10) {
  renderResults();
  // turn off the listener
  mainElem.removeEventListener('click', handleClick);
}
}

function renderResults() {
  resultsUlElem.innerHTML = "";

  for (let product of Product.allProducts) {
    let liElem = document.createElement('li');
    liElem.textContent = `${product.name}: ${product.votes}`;
    resultsUlElem.appendChild(liElem);
  }
}

mainElem.addEventListener('click', handleClick);

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

pickThreeProducts();
