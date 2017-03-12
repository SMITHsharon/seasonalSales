
var allTheProducts = document.getElementById("productsContainer");
var departments;

function writeProductsDOM (products) {
console.log("writing products to DOM");
console.log("products data :: ", products);
console.log("departments :: ", departments);
	// write the products to the DOM
	var productString = `<h1 class="sectionHeader">Current Products</h1>`;
	var currentProduct;
	var currentDept;

	for (var i=0; i<departments.length; i++) {
		currentDept = categories[i];
		currentProduct =+ `<p>${getDepartment(j)}</p>`;
		for (var j=0; j<products.length; j++) {
			if (products[j].category_id === departments[i].id) {
				currentProduct += `<p>${products[j].name}, $${products[j].price}</p>`;
			}
		} // <j> for loop
	} // <i> for loop
		
			// productString += `<div class="department">`;
			// productString += `<h3>${getDepartment(myRequest2, currentProduct.category_id)}</h3>`;
			// console.log("myRequest2 :: ", myRequest2);
			// console.log("currentProduct.category_id :: ", currentProduct.category_id);

			// for (var j=0; j<currentProduct.types.length; j++) {
				// productString += `<p class="thisType">${cleanedProductString(currentProduct.types[j].type)}</p>`;
				

				// for (var k=0; k<currentProduct.types[j].volumes.length; k++) {
					// productString += `<p class="thisPrice">${currentProduct.types[j].volumes[k].name}: `
					// productString += `$${currentProduct.types[j].volumes[k].price}</p>`;
				// } // k loop
			// } // j loop	

			// productString += `</div>`;
	// } // <i> for loop

	allTheProducts.innerHTML = productString;
	
}


function getDepartment (deptID) {
	console.log("getting Department ID");
	console.log("departments[deptID].name :: ", departments[deptID].name);
	return departments[deptID].name;
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








