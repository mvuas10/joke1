const express = require('express')
const app = express()

const page = 
            `<html>
                <head>
                    <title>Jokes</title>
                </head>

                <body>
                    <h1>What do you call a boommeran that doesn't work?</h1>
                    <p>A stick</p>
                </body>
            </html>`

app.get('/', (req, res) => res.send(page))
   

// use $PORT if it is defined
// use 3000 if $PORT is not defined
const port = 3000

// start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

