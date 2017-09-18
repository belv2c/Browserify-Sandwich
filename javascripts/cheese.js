"use strict";

const loadCheese = (onCheeseLoad, onCheeseError) => {
	const cheeseLoader = new XMLHttpRequest();
	cheeseLoader.addEventListener("error", onCheeseError);
	cheeseLoader.addEventListener("load", onCheeseLoad);
	cheeseLoader.open("GET", "../data/cheese.json");
	cheeseLoader.send();
};

module.exports = loadCheese;