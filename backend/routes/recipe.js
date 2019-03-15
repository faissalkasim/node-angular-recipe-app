const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');
const recipeCtrl = require('../controllers/recipe');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Save recipe into database
router.post('/', auth, recipeCtrl.createRecipe);

// Modify recipe into database
router.put('/:id', auth, recipeCtrl.modifyRecipe);

// Returns the recipe with the provided ID
router.get('/:id', auth, recipeCtrl.getRecipeById);

// Returns the recipe with the provided ID
router.delete('/:id', auth, recipeCtrl.deleteRecipe);

// Returns all recipes
router.get('/', auth, recipeCtrl.getAllRecipe);

module.exports = router;