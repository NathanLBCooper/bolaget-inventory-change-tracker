const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello, this is the fake backend speaking!'))

app.listen(port, () => console.log(`Fake Backend listening on port ${port}!`))
