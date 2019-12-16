var express = require('express');
var router = express.Router();

/* Render data ok all pokemon with a single route */

app.use('/pokemon/:pokemonName', async (_req, _response) => {
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
        console.log(_json);
        // const [...data] = _json.data;
        
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
