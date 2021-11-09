'use strict'

// import { jsonContent } from "../../routes/index.js";
// console.log(jsonContent);

let newDiv = `<div class="card col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
    <h1 class="card-title text-center">Beef Wellington</h1>
    <img class="card-image " src="https://spoonacular.com/recipeImages/75081-312x231.jpg"
         alt="Beef Wellington">
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">calories: 705</li>
            <li class="list-group-item">protein: 71g</li>
            <li class="list-group-item">fat: 24g</li>
            <li class="list-group-item">carbs: 47g</li>
        </ul>
    </div>
</div>`;

let recipes = document.getElementById('recipes');
recipes.innerHTML = newDiv;
recipes.innerHTML += newDiv;
recipes.innerHTML += newDiv;
recipes.innerHTML += newDiv;
recipes.innerHTML += newDiv;
recipes.innerHTML += newDiv;
recipes.innerHTML += newDiv;
recipes.innerHTML += newDiv;
recipes.innerHTML += newDiv;
recipes.innerHTML += newDiv;
recipes.innerHTML += newDiv;
recipes.innerHTML += newDiv;
recipes.innerHTML += newDiv;
recipes.innerHTML += newDiv;
recipes.innerHTML += newDiv;