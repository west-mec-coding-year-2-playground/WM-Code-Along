// npm commands
/**
 * Instructions:
 * 1. npm init -y
 * 2. npm install express
 * 3. both both together with &&
 * 
 */

/**
 * Instructions for template engine
 * 1. npm i handlebars node-fetch express-handlebars hbs
 * 2. update our app.get()
 * 
 * 3.
 */


/**
 * app.template
 */
const express = require('express');
const app = express();
var port = 3001;
const fetch = require('node-fetch');
 

/**
 * Instructions for template engine
 * 1. npm i handlebars node-fetch express-handlebars hbs
 * 2. update our app.get()
 * 
 * 3. Create template files
 * a. views/index.hbs
 * b. views/layouts/main.hbs
 * c. views/partials/head.hbs
 */
const hbs = require('express-handlebars')({
    extname: '.hbs',
});
app.engine('hbs', hbs);
app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    res.render('index');
});



// res == response aka what we send to the client
// async tag on callback function allows us to use async/wait

app.get('/pokemon/:id', async (req, res) => {
    try {
        const URI = `https://pokeapi.co/api/v2/pokemon/${req.params.id}`;
        const pokemonData = await fetch(URI);
        const json = await pokemonData.json();
        // console.log(json);
        pokeName = await json.name;
        pokeImg = await json.sprites.back_default;
        // console.log(pokeImg);
    
        await res.render('index', {
            name: pokeName,
            img: pokeImg
        });
    } catch (error) {
        console.log(error);
    }
         
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server started on ${port}`);
});

//npm start, open your browser and run localhost:port