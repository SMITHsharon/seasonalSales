
console.log("writing to console");



function executeProductsDOMAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	console.log("products data :: ", data);
	// writeProductsDOM(data);
}


function executeCategoriesDOMAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	console.log("categories data :: ", data);
	// writeCategoriesDOM(data);
}

function executeThisCodeAfterFileFails(){
	console.log("whoops! error ... ");
}



//**************************************************
// executes the XHR requests
//**************************************************
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeProductsDOMAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "products.json");
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeCategoriesDOMAfterFileLoaded);
myRequest2.addEventListener("error", executeThisCodeAfterFileFails);
myRequest2.open("GET", "categories.json");
myRequest2.send();





