const express = require('express');
const fs = require('fs');
const axios = require('axios').default;

const router = express.Router();

const key = fs.readFileSync('private/key.txt', 'utf-8');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${key}&minProtein=50&maxCalories=800&number=10`)
  .then((response) => {
    const recipes = response.data;
    res.render('index', { title: 'food', data: recipes });
  });
});

/* GET detail page. */
router.get('/:id', function(req, res, next) {
    console.log(req.params.id);
  axios.get(`https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${key}&includeNutrition=true`)
      .then((response) => {
        const recipeDetail = response.data;
        console.log(recipeDetail.nutrition.nutrients);
        res.render('detail', { title: 'food', data: recipeDetail });
      });
});

module.exports = router;
