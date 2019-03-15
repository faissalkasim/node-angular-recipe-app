const mongoose = require('mongoose');

const recipechema = mongoose.Schema({
    title: { type: String, required: true },
    time: { type: Number, required: true },
    difficulty: { type: Number, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
});

module.exports = mongoose.model('Recipe', recipechema);