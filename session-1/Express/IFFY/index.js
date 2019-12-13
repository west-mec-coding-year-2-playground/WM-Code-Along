/**
 * 1. Create an Async IIFE
 *      (async function () {
 *          const logic = "here";
 *      })();
 * 2. 
 * 
 */


 
var foo = "foo";

(async (innerFoo)=> {
    /**
     * Require libraries / packages & set the port for the server
     */
    const fetch = require('node-fetch');
    const express = require('express');
    const app = express();
    const port = 8080;

    try {
        /**
         * Before the server starts
         */
        const _request1 = await fetch('https://swapi.co/api/planets/1/');
        const _jsonResponce1 = await _request1.json();
        const [...films] = _jsonResponce1.films;
        console.log(films);
  
        for await (let num of films) {
            let _request = await fetch(`${num}`);
            // let _jsonResponce = await _request1.json();
            console.log(_request);
            
        }
        
        
    } 
    catch (error) {
        console.log(error);
    }
    app
    .get('/:id', (req, res) => {
        // res.send(_jsonResponce1)
    })
    .get('/about', (req, res) => {
        res.send(_jsonResponce1)
    })
    
    .listen(process.env.PORT || port, 
        () => console.log(`Server started on ${port}`) 
    );
    // log stuff passed through IIFE
    console.log(innerFoo);
}
)(foo);
