const express = require('express')
const app = express()
const PORT = 3000
const db = require('./models')

app.use(express.urlencoded({ extended: false }))

// get all friends
app.get('/friend', (req, res, next) => {
    res.json({'msg': 'retrieving friends list'})
})

// create a new friend
app.post('/friend', (req, res, next)=>{
    let inputYear = parseInt(req.body.year)
    db.friend.create({
        name: req.body.name,
        year: inputYear
    })
    .then(newFriend=>{
        res.json({'msg': 'created a new friend', body: req.body})
    })
    .catch(err=>{
        res.json({
            'msg': 'Error! Friend not created.',
            'error': err
        })
    })
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