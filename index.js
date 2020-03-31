const express = require('express')
const app = express()

const jokes = {
    "joke_1": {"What do you call a boommeran that doesn't work?": "A stick"},
    "joke_2": {"The same bike tries to run me down every day": "Sounds like a vicious cycle"},
    "joke_3": {"What do you call a guy who's had too much to drink?": "A cab"},
    "joke_4": {"What kinds of tree has a hand?": "A palm tree"},
    "joke_5": {"How does the solor system organize a party?": "They planet!"}
}

function render (joke) {
    const page = 
            `<html>
                <head>
                    <title>Jokes</title>
                </head>

                <body>
                    <h1>${jokes.joke_1}</h1>
                </body>
            </html>`
    return page
}


app.get(
    '/user/age', 
    (req, res) => {
        const joke = `${req.params.age}`
        const laugh = render (joke)
    }
    
    res.send(laugh))

// use $PORT if it is defined
// use 3000 if $PORT is not defined
const port = process.env.PORT || 3000

// start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

