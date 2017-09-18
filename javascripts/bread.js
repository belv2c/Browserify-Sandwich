"use strict";

const loadBread = (onBreadLoad, onBreadError) => {
	const breadLoader = new XMLHttpRequest();
	breadLoader.addEventListener("error", onBreadError);
	breadLoader.addEventListener("load", onBreadLoad);
	breadLoader.open("GET", "../data/bread.json");
	breadLoader.send();
};

module.exports = loadBread;