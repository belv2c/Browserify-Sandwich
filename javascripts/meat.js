"use strict";

const loadMeat = (onMeatLoad, onMeatError) => {
	const meatLoader = new XMLHttpRequest();
	meatLoader.addEventListener("error", onMeatError);
	meatLoader.addEventListener("load", onMeatLoad);
	meatLoader.open("GET", "../data/meat.json");
	meatLoader.send();
};

module.exports = loadMeat;