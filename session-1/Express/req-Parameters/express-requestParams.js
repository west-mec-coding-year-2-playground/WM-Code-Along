/**
 * Steps:
 * 1. npm init -y && npm i express node-fetch
 * 2. require / import dependancies
 * 3. app.listen(3000)
 * 4. app.use(...)
 */


var express = require('express');
var app = express();
var fetch = require('node-fetch');
// built in node module
var path = require('path');


/**
 * Documentation:
 * 1. app.param()
 * https://expressjs.com/en/api.html#app.param
 */
app.use('/:pokemonName', async (_req, _response) => {
    // :pokemonName ref to ${request.params.pokemonName}
    // see express documentation on req.params
    // req stands for the request, params is the parameters of the request
    // translation, what is your request to 
    try {
        _response = await fetch(`https://pokeapi.co/api/v2/pokemon/${_req.params.pokemonName}`);
            // .then( function (response) { response.json()} )
            // .then(DATA => console.log(DATA) )
            // .catch(error => res.send(error));
        const _json = await _response.json();
        console.log(_json.forms);

        const [...forms] = _json.forms;
        console.log("forms",_json.forms);
        // const [...data] = _json.data;
        
    } catch (error) {
        console.log(error);
    }
});

app.listen(3000)