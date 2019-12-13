# Final Project Level 1

## Professional Requirements
- [ ] Must be deployed using Glitch
- [ ] Must have a polished responsive frontend
- [x] Must use a css Framework
- [ ] Must utilize at least two new library, package, or technology that we haven’t discussed in-depth

## Professional Requirements
- [ ] Must meet good quality coding standards (indentation, documentation, scoping, naming, DRY Patterns (Don’t Repeat Yourself), Functions, Loops, modules (export / import / requires() ) 
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
1. Add the css and js to the public folder


