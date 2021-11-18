const express = require('express');
const fs = require('fs');
const axios = require('axios').default;

const router = express.Router();

const key = fs.readFileSync('private/key.txt', 'utf-8');

// protein value comes in string format (i.e. 56g) 
// This removes 'g' and converts to int prior to the mathematical operation
function getCalorieToProteinRatio(calories, protein) {
  protein = protein.slice(0, -1);
  protein = parseInt(protein);
  return (calories / protein).toFixed(1);
}

/* GET home page. */
router.get('/', function (req, res, next) {
  axios.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${key}&minProtein=50&maxCalories=800&random=true&number=100`)
    .then((response) => {
      for (obj of response.data) {
        obj.calorieToProteinRatio = getCalorieToProteinRatio(obj.calories, obj.protein);
      }
      res.render('index', { title: 'food', data: response.data });
    });
});

/* GET detail page. */
router.get('/:id', function (req, res, next) {
  axios.get(`https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${key}&includeNutrition=true`)
    .then((response) => {
      const recipeDetail = response.data;
      res.render('detail', { title: 'food', data: recipeDetail });
    });
});

module.exports = router;
