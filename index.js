const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: true }))

// get all friends
app.get('/friend', (req, res, next) => {
    res.json({'msg': 'retrieving friends list'})
})

// create a new friend
app.post('/friend', (req, res, next)=>{
    res.json({'msg': 'creating a new friend', body: req.body})
})

// edit an existing friend
app.put('/friend/:id', (req, res, next)=>{
    res.json({'msg': `editting friend #${req.params.id}`})
})

// permanently delete an existing friend
app.delete('/friend/:id', (req, res, next)=>{
    res.json({'msg': `deleting friend #${req.params.id}`})
})

app.listen(PORT, ()=>{console.log('app is up and running')})