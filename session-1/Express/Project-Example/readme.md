# Final Project Level 1

## Professional Requirements
- [ ] Must be deployed using Glitch
- [x] Must have a polished responsive frontend
- [x] Must use a css Framework
- [x] Must utilize at least two new library, package, or technology that we haven’t discussed in-depth

## Professional Requirements
- [x] Must meet good quality coding standards (indentation, documentation, scoping, naming, DRY Patterns (Don’t Repeat Yourself), Functions, Loops, modules (export / import / requires() ) 
- [x] Must use a Node & Express Web Server
- [ ] Must use AJAX with least 3 different API’s 


# Start Project
`npx express-generator --hbs` type y or yes.
then install the packages with ` npm i`.

# update app.js and add app.listen
Make sure there is **NOT** multiple app.listen().
```js
    var PORT = 8000;
    app.listen(process.env.PORT||PORT, () => {
    console.log(`Server started on ${PORT}`);
    });
```

# Install more stuff to meet requirements
`npm i node-fetch express-handlebars compression`
Unused packages:
1. compression
2. http-errors
3. cookie-parser
4. morgan



# Update View Engine code in app.js
```js
   const hbs = require('express-handlebars')({
     defaultLayout: "main",
     extname: '.hbs'
   });
   app.engine('hbs', hbs);
   app.set('view engine', 'hbs');
```


# Add Partials (head.hbs & footer.hbs) and add Bootstrap to them
Both of these partials should be included in the main.hbs layout file.


## head.hbs
```html
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
```

## footer.hbs
```html
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
```


# Add Layouts 
```html
   <!DOCTYPE html>
   <html lang="en">
       {{>head}}
   <body>
       {{{body}}}
       {{>footer}}
   </body>
   </html>
```


# Download a bootstrap theme & use it
1. Pick a (theme)[https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/]
2. Add the css and js to the public folder

### Adding a bootstrap theme
1. change the head.hbs & footer files
2. update the path for static files (the "lazy" way).
```js
// Serve static content for the app from the "public" directory in the application directory.
app.use('/public', express.static('public'));
app.use('/img', express.static('public/img'));
app.use('/stylesheets', express.static('public/stylesheets'));
app.use('/css', express.static('public/css'));
app.use('/lib', express.static('public/lib'));
app.use('/js', express.static('public/js'));
```

# Edit the route files and template file

### routes files in app.js
```js
var indexRouter = require('./routes/index');
var starRouter = require('./routes/star');
var rickRouter = require('./routes/rick');
var pokemonRouter = require('./routes/poke');
app.use('/', indexRouter);
app.use('/star', starRouter);
app.use('/rick', rickRouter);
app.use('/poke', pokemonRouter);
```

### Editing the Project-Example/routes/index.js
```js
// Lorem-ipsum for random sentences and paragrpahs
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

// configuration for lib
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const servicesDescription = lorem.generateSentences(5);
const randomParagraph = lorem.generateParagraphs(1);
const randomSentence = lorem.generateSentences(1);

// for mockup testomonials
var faker = require('faker');
const client1Name = faker.name.findName();
const randomData = faker.image.avatar();


var express = require('express');
var router = express.Router();

const _name = "Hans McMurdy";

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(randomData);
  res.render('index', { 
    title: 'Home',
    name: "Hans McMurdy",
    description: "Your Teacher,Web Developer,Web Designer,Frontend Developer,Maker",
    jobTitle: "Your Teacher",
    email: "brett.mcmurdy@west-mec.org",

    apis: [
      {
        name:"star wars api",
        route: "/starwars",
        img: faker.image.image(),
        category: "web Design",
        date: "18 Sep. 2018",
        title: "Lorem impsum dolor",
        icon: "ion-ios-plus-outline"
      },
      {
        name:"rick and morty api",
        route: "/rnm",
        img: faker.image.image(),
        category: "web Design",
        date: "18 Sep. 2018",
        title: "Lorem impsum dolor",
        icon: "ion-ios-plus-outline"
      },
      {
        name:"pokemon",
        route: "/pokemon",
        img: faker.image.image(),
        category: "web Design",
        date: "18 Sep. 2018",
        title: "Lorem impsum dolor",
        icon: "ion-ios-plus-outline"
      }
    ],
    posts: [
      {
        route: "/",
        smIMG: faker.image.avatar(),
        mdIMG: faker.image.image(),
        read: "10 min",
        description: randomParagraph,
        name: faker.name.findName(),
      },
      {
        route: "/",
        smIMG: faker.image.avatar(),
        mdIMG: faker.image.image(),
        read: "10 min",
        description: randomParagraph,
        name: faker.name.findName(),
      },
      {
        route: "/",
        smIMG: faker.image.avatar(),
        mdIMG: faker.image.image(),
        read: "10 min",
        description: randomParagraph,
        name: faker.name.findName(),
      }
    ],
    clients: [
      {
        name: faker.name.findName(),
        img: faker.image.avatar(),
        description: randomParagraph
      },
      {
        name: faker.name.findName(),
        img: faker.image.avatar(),
        description: randomParagraph
      },
      {
        name: faker.name.findName(),
        img: faker.image.avatar(),
        description: randomParagraph
      }
    ],
    services: [
      {
        icon: "ion-monitor",
        service: "star wars api",
        description: servicesDescription,
        name:"star wars api",
        route: "/star",
      },
      {
        icon: "ion-code-working",
        service: "rick and morty api",
        description: servicesDescription,
        name:"rick and morty api",
        route: "/rick",
      },
      {
        icon: "ion-android-phone-portrait",
        service: "pokemon api",
        description: servicesDescription,
        name:"pokemon api",
        route: "/poke",
      }
    ],
    skills: [
      {
        skill: "html",
        level: "100%"
      },
      {
        skill: "css",
        level: "100%"
      },
      {
        skill: "javascript",
        level: "95%"
      },
      {
        skill: "Docker",
        level: "60%"
      },
      {
        skill: "node",
        level: "60%"
      },
      {
        skill: "express",
        level: "70%"
      },
      {
        skill: "server-side rendering",
        level: "100%"
      },
      {
        skill: "AJAX",
        level: "100%"
      },
      {
        skill: "fetch",
        level: "100%"
      }
    ]
  });
});

module.exports = router;
```


### Editing the index route (template file)[https://github.com/west-mec-coding-year-2-playground/WM-Code-Along/blob/master/session-1/Express/Project-Example/views/index.hbs]


### update a route file for a pokemon API
Note that you don't need to use "/poke" when requiring a file.
This is because you define the route to "/poke" in app.js.
Example: 
```js
var indexRouter = require('./routes/index');
app.use('/poke', pokemonRouter);
```

```js
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
        await res.render('poke', {
            results: monsters
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
    const pokeName = await json.name;
    const pokeImg = await json.sprites.back_default;
    await res.render('pokename', {
        name: pokeName,
        img: pokeImg
    });
  } catch (error) {
      console.log(error);
  }
});

module.exports = router;
```

### update the poke.hbs file to display all the pokemon using a combination of server-side fetch and client-side fetch
```html
<div class="container">
    <div class="row">
        {{#each results}}

                <div id={{this.name}} class="col">
                    {{!-- <img src={{this.img}} alt="{{this.name}}"> --}}
                </div>

            <script >
                var selector{{this.name}} = document.getElementById("{{this.name}}");
                fetch("{{this.url}}")
                .then(response=>response.json() )
                .then(
                    data => {
                        //console.log( data );
                        selector{{this.name}}.innerHTML = `
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top"  src=${data.sprites.front_shiny} alt="Card image cap for {{this.name}}" >
                                <div class="card-body">
                                    <h5 class="card-title">{{this.name}}</h5>
                                    <p class="card-text">Some info about {{this.name}}.</p>
                                    <a href="/poke/{{this.name}}" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        `;
                });
            </script>

        {{/each}}

    </div>
</div>
```


