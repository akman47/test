var resultsContainerEl = document.querySelector("#results-container");
var recipeTitleEl = document.querySelector("#recipe-title");
var ingredientsListEl = document.querySelector("#ingredients");
var instructionsListEl = document.querySelector("#instructions");
var mainIngredient = "";

var testEndPoint = function(){
    var apiUrlFood = "https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken"
    var apiUrlJoke = "https://v2.jokeapi.dev/joke/Any?contains=onion";
    var apiUrlJokes2 = "https://api.jokes.one/jod"
    var apiUrlFoodCategory = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

    fetch (apiUrlFood).
        then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);  
            displayRecipe(data);
            //displayRecipeList(data);
        })
}
var displayRecipeList = function (data) {
    for (var i = 0; i < data.meals.length; i++) {
        console.log(data.meals[i].strMeal);

        // add text content to heading: Choose a recipe to try!

        // create list links or buttons of options
    }
}

var displayRecipe = function(recipe) {
    console.log(recipe.meals[0]);
    var mealName = recipe.meals[0].strMeal;
    console.log (mealName);

    for (var i = 1; i < 21; i++) {
        //console.log(recipe.meals[0].(strIngredient+i));
        console.log("strIngredient"+i);
        if (recipe.meals[0].strIngredient+i.value !== "") {
            var ingredients = recipe.meals[0].striIngredient+i;
            console.log (ingredients);
        }
    }

    // get instructions from API data
    var instructions = recipe.meals[0].strInstructions;
    console.log(instructions);
    var paragraphs = instructions.split(".");

    // display dish title
    recipeTitleEl.textContent = mealName;

    // display ingredients
    ingredientsListEl.innerHTML = "Ingredients";

    // display instructions
    instructionsListEl.innerHTML = "Instructions:";
        for (var i = 0; i < paragraphs.length; i++) {
            var instructions = document.createElement("li");
            instructions.textContent = paragraphs[i]+ ".";   
            instructionsListEl.appendChild(instructions);
        }

    // get image from API data
    var imgSrc = recipe.meals[0].strMealThumb;
    var mealImg = document.createElement("img");
    mealImg.setAttribute("src", imgSrc);
    mealImg.setAttribute("width", "300px");
    mealImg.setAttribute("height", "260px");  
    
    resultsContainerEl.appendChild(mealImg);

    // create buttons: save to recipe box or back to list
};


testEndPoint ();