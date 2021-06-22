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
let resultsButtonElem = document.getElementById('results-button')
let voteCounter = 0;
let leftProduct = null;
let middleProduct = null;
let rightProduct = null;

function Product(name, identifier, image) {
this.name = name;
this.productIdentifier = identifier;
this.image = image;
this.viewedCounter = 0;
this.votes = 0;

Product.allProducts.push(this);
}


function pickThreeProducts() {
  let previousLeft = leftProduct;
  let previousMiddle = middleProduct;
  let previousRight = rightProduct;
  
  let usedProductsArray = [previousLeft, previousMiddle, previousRight];

  let leftProductIndex = Math.floor((Math.random() * Product.allProducts.length));
  leftProduct = Product.allProducts[leftProductIndex];

  while (usedProductsArray.includes(leftProduct)) {
    let leftProductIndex = Math.floor((Math.random() * Product.allProducts.length));
    leftProduct = Product.allProducts[leftProductIndex];
  }

  usedProductsArray.push(leftProduct);

  let middleProductIndex = Math.floor((Math.random() * Product.allProducts.length));
  middleProduct = Product.allProducts[middleProductIndex];

  while (usedProductsArray.includes(middleProduct)) {
    let middleProductIndex = Math.floor((Math.random() * Product.allProducts.length));
    middleProduct = Product.allProducts[middleProductIndex];
  }

  usedProductsArray.push(middleProduct);

  let rightProductIndex = Math.floor((Math.random() * Product.allProducts.length));
  rightProduct = Product.allProducts[rightProductIndex];

  while (usedProductsArray.includes(rightProduct)) {
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
    // console.log(voteCounter);
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
  if (voteCounter === 25) {
    renderButton();
    // turn off the listener
    mainElem.removeEventListener('click', handleClick);
  }
}

function handleButtonClick() {
  renderResults();
  addProductChart();
}

function renderButton() {
  let buttonElem = document.createElement('button');
  buttonElem.textContent = 'View Results';
  buttonElem.addEventListener('click', handleButtonClick);
  resultsButtonElem.appendChild(buttonElem);
}

function renderResults() {
  resultsUlElem.innerHTML = "";

  for (let product of Product.allProducts) {
    let liElem = document.createElement('li');
    liElem.textContent = `${product.productIdentifier} had ${product.votes} votes, and was seen ${product.viewedCounter} times.`;
    resultsUlElem.appendChild(liElem);
  }
}

function addProductChart() {
  const productNamesArray = [];
  const productVotesArray = [];
  
  for (let product of Product.allProducts) {
    productNamesArray.push(product.name);
    productVotesArray.push(product.votes);
  }

  const ctx = document.getElementById('goatChart').getContext('2d');

    const productChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: productNamesArray,
          datasets: [{
              label: '# of Votes',
              data: productVotesArray,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 99, 132, 0.2)',
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 99, 132, 0.2)',
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 99, 132, 0.2)',
                  // 'rgba(54, 162, 235, 0.2)'
                  
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 99, 132, 1)',
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 99, 132, 1)',
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 99, 132, 1)',
                  // 'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });
}

mainElem.addEventListener('click', handleClick);

new Product('Banana Slicer', 'banana', '../img/banana.jpeg');
new Product('Bathroom Ipad Stand','bathroom', '../img/bathroom.jpeg');
new Product('Open Toe Rain Boots', 'boots' ,'../img/boots.jpeg');
new Product('All-in-one Breakfast Maker', 'breakfast' ,'../img/breakfast.jpeg');
new Product('Meatball Bubblegum', 'bubblegum' ,'../img/bubblegum.jpeg');
new Product('Chair', 'chair' ,'../img/chair.jpeg');
new Product('Cthulu Action Figure', 'cthulhu', '../img/cthulhu.jpeg');
new Product('Duck Bill Dog Muzzle', 'dog-duck' ,'../img/dog-duck.jpeg');
new Product('Dragon Meat', 'dragon' ,'../img/dragon.jpeg');
new Product('Utensil Pens', 'pen' ,'../img/pen.jpeg');
new Product('Pet Sweeper', 'pet-sweep' ,'../img/pet-sweep.jpeg');
new Product('Pizza Scissors', 'scissors' ,'../img/scissors.jpeg');
new Product('Shark Sleeping Bag', 'shark' ,'../img/shark.jpeg');
new Product('Baby Onesie Sweeper', 'sweep' ,'../img/sweep.png');
new Product('Tauntaun Sleeping Bag', 'tauntaun' ,'../img/tauntaun.jpeg');
new Product('Unicorn Meat', 'unicorn','../img/unicorn.jpeg');
new Product('Perpetual Watering Can', 'water-can','../img/water-can.jpeg');
new Product('Wine Glass With Hole', 'wine-glass','../img/wine-glass.jpeg');

pickThreeProducts();
