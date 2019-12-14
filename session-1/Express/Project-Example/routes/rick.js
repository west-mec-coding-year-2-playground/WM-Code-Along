var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

/* GET all characters listing. */
router.get('/', async function(req, res, next) {
      try {
        const URI = `https://rickandmortyapi.com/api/character/`;
        const rickData = await fetch(URI);
        const json = await rickData.json();
        const [...rickCharacters] =  json.results;
        // console.log(rickCharacters);

        await res.render('rick', {
            data: rickCharacters
            // name: "this"
            // results: monsters,
            // name: pokeName,
            // img: pokeImg
        });
    } catch (error) {
        console.log(error);
    }
});

router.get('/:characters', async function(req, res, next) {
  try {
    const URI = `https://rickandmortyapi.com/api/character/${req.params.characters}`;
    const rickData = await fetch(URI);
    const json = await rickData.json();
    console.log(json);
    // const pokeName = await json.name;
    // const pokeImg = await json.sprites.back_default;
    // console.log(pokeImg);

    await res.render('rickcharacters', {
        data: json,
        name: json.name,
        img: json.image,
        gender: json.gender
        // img: pokeImg
    });
  } catch (error) {
      console.log(error);
  }
});


module.exports = router;
