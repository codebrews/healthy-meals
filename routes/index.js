const express = require('express');
const fs = require('fs');
const axios = require('axios').default;

const router = express.Router();

const file = "private/key.txt"
const key = fs.readFileSync(file, 'utf-8');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const requestURL = `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${key}&minProtein=50&maxCalories=800&number=1`

// axios.get(requestURL).then()
//   .then((response) => {
//     console.log(response);
//   });

const jsonContent = 5; //fs.readFile('private/recipes.json')

// module.exports = { jsonContent };