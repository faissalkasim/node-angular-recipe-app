// SCRAM mongoDB cloud authentication : fkasim/25bmlkoq08Zkz4mD
// https://cloud.mongodb.com/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const recipesRouters = require('./routes/recipe');
const userRouters = require('./routes/user');

// Connect our API to MongoDB cluster
mongoose.connect('mongodb+srv://fkasim:25bmlkoq08Zkz4mD@fkcluster-hsrxh.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
});

app.use(bodyParser.json());
app.use(cors());

// Register recipe routers
app.use('/api/recipes', recipesRouters);
app.use('/api/auth', userRouters);

module.exports = app;