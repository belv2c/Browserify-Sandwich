"use strict";

const loadBread = require("./bread");
const loadCheese = require("./cheese");
const loadCondiments = require("./condiments");
const loadMeat = require("./meat");
const loadVeggies = require("./veggies");

let jsonData = [];


const errorFunction = () => {
	console.log("dis broken");
};

const whenBreadLoads = function(){
	console.log("bread array");
	let breadArray = JSON.parse(this.responseText).breads;
	
	jsonData.push(breadArray);
	/*loadMeat(whenMeatLoads, errorFunction);*/
};

const initializer = () => {
	loadBread(whenBreadLoads, errorFunction);
};

module.exports = initializer;