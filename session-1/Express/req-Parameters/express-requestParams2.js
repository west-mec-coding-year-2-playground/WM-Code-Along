/**
 * Steps:
 * 1. npm init -y && npm i express node-fetch express-handlebars
 * * express-handlebars will require a layouts and partials folder + files *
 * 2. require / import dependancies
 * 3. app.listen(3000)
 * 4. app.use(...)
 */


var express = require('express');
var app = express();
var fetch = require('node-fetch');
// built in node module
var path = require('path');

const hbs = require('express-handlebars')({
    extname: '.hbs'
  });
  app.engine('hbs', hbs);
  app.set('view engine', 'hbs');

const API1 = "https://pokeapi.co/api/v2/pokemon/";

/**
 * 
 */
const get_data = async (_API,templateNameString, res,req) => {
    try {
        console.time("Request time");
            const response = await fetch(`${_API}${req.params.id}`);
            const json = await response.json();
            // log the json RESPONSE
            console.log("JSON: \n", json);
            // pass the json response into the the view
            // remember that res.render is part of EXPRESS
            res.render(templateNameString, {
                title: json.name,
                name: json.name,
                data: json
            });
        console.timeEnd("Request time");
      
        // use a ternary operator to log potential errors
        (err)=> (err) ? LOG(err): LOG("all good")
    } catch (error) {
        console.log(error);
    }
};

/**
 * Documentation:
 * 1. app.param()
 * https://expressjs.com/en/api.html#app.param
 */
app.use('/:id', async (req, res) => {
    // :pokemonName ref to ${request.params.pokemonName}
    // see express documentation on req.params
    // req stands for the request, params is the parameters of the request
    // translation, what is your request to 
    get_data(API1,"index", res,req)
});

app.listen(3000)