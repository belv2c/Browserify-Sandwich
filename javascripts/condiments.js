"use strict";

const loadCondiments = (onCondimentLoad, onCondimentError) => {
	const condimentLoader = new XMLHttpRequest();
	condimentLoader.addEventListener("error", onCondimentError);
	condimentLoader.addEventListener("load", onCondimentLoad);
	condimentLoader.open("GET", "../data/condiments.json");
	condimentLoader.send();
};

module.exports = loadCondiments;