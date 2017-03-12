# NSS Seasonal Sales

### Project Description 
This assignment 
#### User Input Screen
![Seasonal Sales Output Screen](https:......png)




### Project Specs
#### Process XHR Requests
- The two JSON representations were provided in two files: `products.json`, and `categories.json`. 
- Loaded both files via XHRs and stored the contents in two different JavaScript variables, `productsData` and `categoriesData`.

####
- Displayed all of the products, grouped by category, and the price.
- Styling of the page output is discretionary. 
- Added a `select` element listing the Seasons: *Winter#, *Autumn*, *Spring*.

 Additionally, put a <select> element at the top of the page that contains all possible values of the season_discount key in the categories file. As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.

For example, when Spring is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.






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

