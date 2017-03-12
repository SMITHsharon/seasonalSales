
var allTheProductsDOM = document.getElementById("productsContainer");
var departments;
var allTheProductsData;



//*******************************************************
// function writes the products data to the DOM, 
// grouped by department (category)
//*******************************************************
function writeProductsDOM (products, season) {
console.log("chosen season :: ", season);
console.log("products", products);

	var productString = `<h1>Current Products</h1>`;
	var currentDept;
	var thisProduct;

	productString += `<section class="sectionHeader">`
	// loop by departments first
	for (var i=0; i<departments.categories.length; i++) {

		currentDept = departments.categories[i];
		productString += `<div class="thisDepartment"><p class="deptName">${getDepartment(i)}</p>`;

		// then collect the products in those departments
		for (var j=0; j<products.products.length; j++) {

			thisProduct = products.products[j];
			if (thisProduct.category_id === currentDept.id) {
				productString += `<p class="productSpecs">${thisProduct.name}, $${calcPrice(thisProduct.price, season)}</p>`;

			} // if
		} // <j> for loop
		productString += `</div>`;
	} // <i> for loop
	productString +- `</section>`;
	allTheProductsDOM.innerHTML = productString;
}


//*******************************************************
// function RETURNS a STRING of the department name
// takes as parameter the department ID
//*******************************************************
function getDepartment (deptID) {
	return departments.categories[deptID].name;
}


//*******************************************************
// function RETURNS the price of the product passed in
// discounted by the amount defined for the indicated season
//*******************************************************
function calcPrice (thisProductBasePrice, thisSeason) {
console.log("in calcPrice :: ");

	var tenPercent;
	var twentyFivePercent;
	var fifteenPercent;

	if (thisSeason === "initState") {
		return thisProductBasePrice;

	} else if 
		(thisSeason === "winter") { // discount is 10%
		tenPercent = thisProductBasePrice * 0.1;
		return thisProductBasePrice - tenPercent;

	} else if 
		(thisSeason === "autumn") { // discount is 25%
		twentyFivePercent = thisProductBasePrice * 0.25;
		return thisProductBasePrice - twentyFivePercent;

	} else if 
		(thisSeason === "spring") { // discount is 15%
		fifteenPercent = thisProductBasePrice * 0.15;
		return thisProductBasePrice - fifteenPercent;
	}
}


//*******************************************************
// function assigns the parsed data from categories.json
// to the global variable <departments>
//*******************************************************
function executeCategoriesDOMAfterFileLoaded(){

	var categoriesData = JSON.parse(this.responseText);
	departments = categoriesData;
}


//*******************************************************
// function calls the function <writeProductsDOM>, 
// and passes the parsed data from products.json
//*******************************************************
function executeProductsDOMAfterFileLoaded(){

	var productsData = JSON.parse(this.responseText);
	allTheProductsData = productsData;
	writeProductsDOM(allTheProductsData, "initState");
}


function executeThisCodeAfterFileFails(){
	console.log("whoops! error ... ");
}



//**************************************************
// executes the XHR requests
//**************************************************
var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeCategoriesDOMAfterFileLoaded);
myRequest2.addEventListener("error", executeThisCodeAfterFileFails);
myRequest2.open("GET", "categories.json");
myRequest2.send();


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeProductsDOMAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "products.json");
myRequest.send();



//**************************************************
// event handler for <select> element
//**************************************************
var selectedSeason = document.getElementById("selectElement");

selectedSeason.addEventListener("change", function() {
    getThisSeason();
});


function getThisSeason (clickEvent) {

	var chosenSeason = selectedSeason.value;
	writeProductsDOM(allTheProductsData, chosenSeason);
// console.log("in getSeason Discount");
// console.log("selectedSeason :: ", selectedSeason);
// console.log("selectedSeason.value :: ", chosenSeason);
	
}




