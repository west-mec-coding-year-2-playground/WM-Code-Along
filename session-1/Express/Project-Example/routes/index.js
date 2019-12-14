/**
 * 
 * 3rd party stuff
 */


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
// const randomCard = faker.helpers.createCard();

// for mockup testomonials
var faker = require('faker');
const client1Name = faker.name.findName();
// faker.image.people();
// 
const randomData = faker.image.avatar();
// const fakeClients = [
//   {
//     name: faker.name.findName(),
//     email: faker.name.findEmail()
//   }
// ];


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
