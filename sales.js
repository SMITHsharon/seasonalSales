
var allProductsDOM = document.getElementById("productsContainer");
var departments;
var allProductsData;



//*******************************************************
// function writes the products data to the DOM, 
// grouped by department (category)
//*******************************************************
function writeProductsDOM (products, season) {

	var productString = `<h1>Current Products</h1>`;
	var currentDept;
	var thisProduct;

	productString += `<section class="sectionHeader">`
	// loop by departments (category) first
	for (var i=0; i<departments.categories.length; i++) {

		currentDept = departments.categories[i];
		productString += `<div class="thisDepartment"><p class="deptName">${getDepartment(i)}</p>`;

		// then collect the products in those departments
		for (var j=0; j<products.products.length; j++) {

			thisProduct = products.products[j];
			if (thisProduct.category_id === currentDept.id) {
				productString += `<p class="productSpecs">${thisProduct.name}, `;
				productString += `$${calcPrice(thisProduct.price, season)}</p>`;

			} // if
		} // <j> for loop

		productString += `</div>`;

	} // <i> for loop

	productString +- `</section>`;
	allProductsDOM.innerHTML = productString;
}


//*******************************************************
// function RETURNS a STRING of the department name
// takes as PARAMETER the Department ID
//*******************************************************
function getDepartment (deptID) {
	return departments.categories[deptID].name;
}


//*******************************************************
// function RETURNS the price of the product passed in
// discounted by the amount defined for the indicated season
// PARAMETERS: the product base price, 
//   and either the iniatialized state <initState>, 
//   or the user selected season
//*******************************************************
function calcPrice (thisProductBasePrice, thisSeason) {

	var tenPercent;
	var twentyFivePercent;
	var fifteenPercent;

	if (thisSeason === "initState") {
		return thisProductBasePrice;

	} else if 
		(thisSeason === "winter") { // discount is 10%
		tenPercent = thisProductBasePrice * 0.1;
		return roundedPrice(thisProductBasePrice - tenPercent);

	} else if 
		(thisSeason === "autumn") { // discount is 25%
		twentyFivePercent = thisProductBasePrice * 0.25;
		return roundedPrice(thisProductBasePrice - twentyFivePercent);

	} else if 
		(thisSeason === "spring") { // discount is 15%
		fifteenPercent = thisProductBasePrice * 0.15;
		return roundedPrice(thisProductBasePrice - fifteenPercent);
	}
}


//*******************************************************
// function rounds the calculated discounted price
// RETURNS the rounded amount
// PARAMETER: the unrounded amount
//*******************************************************
function roundedPrice(unroundedAmount) {

	return (Math.round(unroundedAmount * 100) / 100);
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
	allProductsData = productsData;
	writeProductsDOM(allProductsData, "initState");
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


//**************************************************
// function reads the user-selected choice
// from the <select> element
// and calls v=the function <writeProductsDOM>
// to rewrite the DOM, passing the selected <season>
// so the appropriate discount will be calculated
// and displayed
//**************************************************
function getThisSeason (clickEvent) {

	var chosenSeason = selectedSeason.value;
	writeProductsDOM(allProductsData, chosenSeason);
}




