
var allTheProducts = document.getElementById("productsContainer");
var departments;

function writeProductsDOM (products) {
// console.log("writing products to DOM");
// console.log("products data :: ", products);
// console.log("departments :: ", departments);
	// write the products to the DOM
	var productString = `<h1 class="sectionHeader">Current Products</h1>`;
	var currentProduct;
	var currentDept;
	var thisProduct;
// console.log("departments, in writeProductsDOM :: ", departments);
// console.log("departments.categories.length :: ", departments.categories.length);

	for (var i=0; i<departments.categories.length; i++) {
		currentDept = departments.categories[i];

// console.log("currentDept :: ", currentDept);
		currentProduct =+ `<div><p>${getDepartment(i)}</p>`;
// console.log("products :: ", products);
// console.log("products.products.length :: ", products.products.length);
		for (var j=0; j<products.products.length; j++) {
			thisProduct = products.products[j];
// console.log("in products loop");
			if (thisProduct.category_id === currentDept.id) {
				console.log("thisProduct.category_id :: ", thisProduct.category_id);
				console.log("currentDept.id :: ", currentDept.id);
				currentProduct += `<p>${products.products[j].name}, $${products.products[j].price}</p></div>`;
			}
		} // <j> for loop

		productString += currentProduct;
	} // <i> for loop

	allTheProducts.innerHTML = productString;
	
}


function getDepartment (deptID) {
	console.log("getting Department ID");
	console.log("deptID :: ", deptID);
	console.log("departments[deptID].name :: ", departments.categories[deptID].name);
	return departments.categories[deptID].name;
}


function executeCategoriesDOMAfterFileLoaded(){
	var categoriesData = JSON.parse(this.responseText);
// console.log("categories data :: ", categoriesData);
	departments = categoriesData;
// console.log("departments :: ", departments);
}


function executeProductsDOMAfterFileLoaded(){
	var productsData = JSON.parse(this.responseText);
// console.log("products data :: ", productsData);
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








