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
const client1Name = faker.name.findName()
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


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(randomData);
  res.render('index', { 
    title: 'Express',
    name: "Hans McMurdy",
    description: "Your Teacher,Web Developer,Web Designer,Frontend Developer,Maker",
    jobTitle: "Your Teacher",
    email: "brett.mcmurdy@west-mec.org",
    apis: ["starwars","rick and morty", "pokemon"],
    clients: [
      {
        name: faker.name.findName(),
        img: "img/testimonial-2.jpg",
        description: randomParagraph
      },
      {
        name: faker.name.findName(),
        img: "img/testimonial-2.jpg",
        description: randomParagraph
      },
      {
        name: faker.name.findName(),
        img: "img/testimonial-2.jpg",
        description: randomParagraph
      }
    ],
    services: [
      {
        icon: "ion-monitor",
        service: "Web Design",
        description: servicesDescription,
      },
      {
        icon: "ion-code-working",
        service: "Web Development",
        description: servicesDescription,
      },
      {
        icon: "ion-android-phone-portrait",
        service: "Responsive Design",
        description: servicesDescription,
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
        level: "100%"
      },
      {
        skill: "node",
        level: "80%"
      },
      {
        skill: "express",
        level: "100%"
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
        skill: "Docker",
        level: "60%"
      },
      {
        skill: "fetch",
        level: "100%"
      }
    ]
  });
});

module.exports = router;
