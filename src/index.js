const express = require('express')
const { request, response } = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.get('/users', (request, response) => {
    response.send([])
})

app.listen(port, () => {
    console.log(`Server listening on port : http://localhost:${port}` )
})