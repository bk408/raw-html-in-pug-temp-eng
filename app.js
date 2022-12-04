const express = require("express");       // first we import the express module
const path = require("path");
const fs = require("fs");
const app = express();           // create an app 
const port = 80;                // run on port on 80


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));  // for Serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')   // Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))  // Set the views directory 


// ENDPOINTS

app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {'title': 'pug is the best template engine', "content": con};
    res.status(200).render('index.pug', params);
});

app.post('/',(req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputTOWRITE = `The name of client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more} `
    fs.writeFileSync('output.txt',outputTOWRITE )
    const params = {'meassage': 'Your form has been submitted sucessfully',};
    res.status(200).render('index.pug', params);
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)    // to run the app on port
});






