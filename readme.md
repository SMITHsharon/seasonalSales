# NSS Seasonal Sales

### Project Description 
This assignment reads and displays department store information from two `JSON` files: 
- one providing information about products, pricing, and the department where they are sold
- the other providing information about the departments, as well as the discount percentage for a particular season
Additionally, a `select` element is provided, giving the user the ability to select a *season*, upon which the discounted prices for the products display. 

#### Seasonal Sales Screen at Initial State
![Seasonal Sales Screen at Initial State](https:......png)


#### Seasonal Sales Screen Upon User Selecting *Autumn*
![Seasonal Sales Screen Upon User Selecting Autumn](https:......png)


### Project Specs
#### Process XHR Requests
- The two JSON representations were provided in files: `products.json`, and `categories.json`. 
- Loaded both files via XHRs and stored the contents in two different JavaScript variables, `productsData` and `categoriesData`.

####
- Displayed all of the products, grouped by category, and the respective prices.
- Styling of the page output is discretionary; used `css flexbox`. 
- Added a `select` element listing the Seasons: *Winter#, *Autumn*, *Spring*.
- Upon the user selecting a Season from the `select` element, the discounted prices for that system are calculated (and rounded), and the new content is written to the DOM.  


### Technologies Used
- html
- css
- javascript
- XHR and JSON request


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone git@github.com:SMITHsharon/seasonalSales.git
cd seasonal-sales
npm install http-server -g
http-server -p 8080
```

This will show in your browser at: `http://localhost:8080`

### Contributor
[Sharon Smith](https://github.com/SMITHsharon)
