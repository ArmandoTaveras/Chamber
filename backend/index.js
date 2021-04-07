const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
    res.send('Live on port 3000')
})

app.listen(port, () => {
    console.log('Listening on port %d', port)
})