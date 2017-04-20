# NSS Seasonal Sales

### Project Description 
This assignment reads and displays department store information from two `JSON` files: 
- one providing information about products, pricing, and the department where they are sold
- the other providing information about the departments, as well as the discount percentage for a particular season

Additionally, a `select` element is provided, giving the user the ability to select a *season*, upon which the discounted prices for the products display. 

#### Seasonal Sales Screen at Initial State
![Seasonal Sales Screen at Initial State](https://raw.githubusercontent.com/SMITHsharon/seasonalSales/productData/screens/Seasonal%20Sales%20Init%20State%20Screen%20Grab.png)


#### Seasonal Sales Screen Upon User Selecting *Autumn*
![Seasonal Sales Screen Upon User Selecting Autumn](https://raw.githubusercontent.com/SMITHsharon/seasonalSales/productData/screens/Seasonal%20Sales%20Autumn%20Discounts%20Screen%20Grab.png)


### Project Specs
##### Process XHR Requests
- The two `JSON` representations are provided in files: `products.json`, and `categories.json`
- Loads both files via `XHR`s and stores the contents in two different `JavaScript` variables, `productsData` and `categoriesData`

##### Writes the Data to the DOM
- Displays all of the products, grouped by category, and the respective prices
- Styling of the page output is discretionary; uses `css flexbox`

##### Rewrites Data, Showing Discounted Prices for User-Selected Season
- Adds a `select` element listing the Seasons: *Winter*, *Autumn*, *Spring*
- Upon the user selecting a Season from the `select` element, the discounted prices for that Season are calculated (and rounded), and the new content is written to the DOM


### Technologies Used
- `html`
- `css`
- `JavaScript`
- `XHR` and `JSON` request


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone git@github.com:SMITHsharon/seasonalSales.git
cd seasonal-sales
http-server -p 8080
This will show in your browser at: http://localhost:8080
```


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)

