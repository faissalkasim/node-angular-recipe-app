const Recipe = require('../models/recipe');

exports.createRecipe = (req, res, next) => {
    //req.body.thing = JSON.parse(req.body.thing);
    const recipe = new Recipe({
      title: req.body.title,
      time: req.body.time,
      difficulty: req.body.difficulty,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      imageUrl: url + '/images/' + req.file.filename
    });
    recipe.save().then(
      () => {
        res.status(201).json({
          message: 'Recipe saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
}

exports.modifyRecipe = (req, res, next) => {
    const recipe = new Recipe({
      _id: req.params.id,
      title: req.body.title,
      time: req.body.time,
      difficulty: req.body.difficulty,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions
    });
    Recipe.updateOne({_id: req.params.id}, recipe).then(
      () => {
        res.status(201).json({
          message: 'Recipe updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};

exports.getRecipeById = (req, res, next) => {
    Recipe.findOne({
      _id: req.params.id
    }).then(
      (recipe) => {
        res.status(200).json(recipe);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
};

exports.deleteRecipe = (req, res, next) => {
    Recipe.deleteOne({
      _id: req.params.id
    }).then(
      (recipe) => {
        res.status(200).json({
            message: 'Deleted'
        });
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
};

exports.getAllRecipe = (req, res, next) => {
    Recipe.find().then(
      (recipes) => {
        res.status(200).json(recipes);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};