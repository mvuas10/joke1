const express = require('express')
const app = express()

const page = 
`<html>
    <head>
        <title>Minh Nhat Vu</title>
    </head>

    <body>
        <h1>Why do comedians love !false?</h1>
        <p>It's funny because it's true.</p>
    </body>
</html>`

app.get('/', (req, res) => res.send(page))

// use $PORT if it is defined
// use 3000 if $PORT is not defined
const port = process.env.PORT || 3000

// start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

