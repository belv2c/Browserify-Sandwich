"use strict";

const data = require("./data");

// Variable to hold the final price. Default to 0.
let finalSandwichPrice = 0;

// Variable to hold the final sandwich.
let finalSandwichProduct = document.getElementById("final-sandwich");

//Variable to hold price in HTML
let totalCost = document.getElementById("final-cost");

// Variable to hold topping that the user selects
let selectedTopping;
let loadBread = require("./bread");


// Get a reference to the <select> elements that have all the ingredient options
let breadChooser = document.getElementById("bread-chooser");
let meatChooser = document.getElementById("meat-chooser");
let cheeseChooser = document.getElementById("cheese-chooser");
let condimentChooser = document.getElementById("condiment-chooser");
let veggieChooser = document.getElementById("veggie-chooser");


breadChooser.addEventListener("change", (event) =>{
  selectedTopping = event.target.value;
  for (let key in loadBread){
  	if(selectedTopping === key && event.target.checked) {
  		finalSandwichPrice += loadBread[key];
      totalCost.innerHTML = `$${finalSandwichPrice}`;
      finalSandwichProduct.innerHTML += `<p id="${key}">$${loadBread[key]} ${key}</p>`;
    } else if(selectedTopping === key && event.target.checked === false) {
      finalSandwichPrice -= loadBread[key]; 
      totalCost.innerHTML = `$${finalSandwichPrice}`;
      console.log(finalSandwichPrice);
    }
  }
 });



module.exports = {breadChooser};