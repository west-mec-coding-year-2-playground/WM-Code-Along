var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

/* GET users listing. */
router.get('/', async function(req, res, next) {
      try {
        const URI = `https://pokeapi.co/api/v2/pokemon/`;
        const pokemonData = await fetch(URI);
        const json = await pokemonData.json();
        const [...monsters] = await json.results;
        console.log(monsters);
        // const pokeImg = await json.sprites.back_default;
        // console.log(pokeImg);
        // await res.send("hi")
        await res.render('poke', {
            results: monsters,
            // name: pokeName,
            // img: pokeImg
        });
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async function(req, res, next) {
  try {
    const URI = `https://pokeapi.co/api/v2/pokemon/${req.params.id}`;
    const pokemonData = await fetch(URI);
    const json = await pokemonData.json();
    // console.log(json.results);
    const pokeName = await json.name;
    const pokeImg = await json.sprites.back_default;
    // console.log(pokeImg);

    await res.render('pokename', {
        name: pokeName,
        img: pokeImg
    });
  } catch (error) {
      console.log(error);
  }
});

module.exports = router;
