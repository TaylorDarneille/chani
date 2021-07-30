const express = require('express')
const app = express()
const PORT = 3000

app.get('/test', (req, res, next) => {
    res.json({'msg': 'testing, testing, 123'})
})

app.listen(PORT, ()=>{console.log('app is up and running')})