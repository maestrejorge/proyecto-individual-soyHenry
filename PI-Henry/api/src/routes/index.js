const { Router } = require("express");
const getRecipes = require("../routes/routeRecipe/getRecipes.js");
const getDiets = require("../routes/routeRecipe/getDiets.js");
const getIngredients = require("../routes/routeRecipe/getingredients.js")
const router = Router();

router.use("/diets", getDiets);
router.use("/recipes", getRecipes);
router.use("/ingredients", getIngredients);
module.exports = router;
