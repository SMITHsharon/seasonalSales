
var allTheProducts = document.getElementById("productsContainer");
var departments;



//*******************************************************
// function writes the products data to the DOM, 
// grouped by department (category)
//*******************************************************
function writeProductsDOM (products) {

	var productString = `<h1 class="sectionHeader">Current Products</h1>`;
	var currentDept;
	var thisProduct;

	// loop by departments first
	for (var i=0; i<departments.categories.length; i++) {

		currentDept = departments.categories[i];
		productString += `<div><p>${getDepartment(i)}</p>`;

		// then collect the products in those departments
		for (var j=0; j<products.products.length; j++) {

			thisProduct = products.products[j];
			if (thisProduct.category_id === currentDept.id) {
				productString += `<p>${thisProduct.name}, $${thisProduct.price}</p></div>`;
			} // if
		} // <j> for loop
	} // <i> for loop

	allTheProducts.innerHTML = productString;
}


//*******************************************************
// function RETURNS a STRING of the department name
// takes as parameter the department ID
//*******************************************************
function getDepartment (deptID) {
	return departments.categories[deptID].name;
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
	writeProductsDOM(productsData);
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








