"use strict";

const loadBread = require("./bread");
const loadCheese = require("./cheese");
const loadCondiments = require("./condiments");
const loadMeat = require("./meat");
const loadVeggies = require("./veggies");

let breadArray = [];
let cheeseArray = [];
let condimentsArray = [];
let meatArray = [];
let veggieArray = [];


const errorFunction = () => {
	console.log("dis broken");
};

const whenBreadLoads = () => {
	breadArray = JSON.parse(this.responseText).breads;
	loadCheese(whenCheeseLoads, errorFunction);
};

const whenCheeseLoads = () => {
	cheeseArray = JSON.parse(this.responseText).cheese;
	loadCondiments(whenCondimentsLoad, errorFunction);
};

const whenCondimentsLoad = () => {
	condimentsArray = JSON.parse(this.responseText).condiments;
	loadMeat(whenMeatLoads, errorFunction);
};

const whenMeatLoads = () => {
	meatArray = JSON.parse(this.responseText).condiments;
	loadVeggies(whenVeggiesLoad, errorFunction);
};

const whenVeggiesLoad = () => {
	veggieArray = JSON.parse(this.responseText).veggies;
};

const initializer = () => {
	loadBread(whenBreadLoads, errorFunction);
};

module.exports = initializer;