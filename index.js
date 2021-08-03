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
    let year = req.body.year ? parseInt(req.body.year) : null
    let month = req.body.month ? parseInt(req.body.month) : null
    let day = req.body.day ? parseInt(req.body.day) : null
    let hour = req.body.hour ? parseInt(req.body.hour) : null
    let minute = req.body.minute ? parseInt(req.body.minute) : null
    let newFriend = {
        name: req.body.name,
        year,
        month,
        day,
        minute,
        hour,
        meridiem: req.body.meridiem
    }
    db.friend.create(newFriend)
    .then(newFriend=>{
        res.json({'msg': 'created a new friend', body: newFriend})
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
    db.friend.findByPk(req.params.id)
    .then(async friendToUpdate=>{
        friendToUpdate.name = req.body.name
        friendToUpdate.year = req.body.year ? parseInt(req.body.year) : null
        friendToUpdate.month = req.body.month ? parseInt(req.body.month) : null
        friendToUpdate.day = req.body.day ? parseInt(req.body.day) : null
        friendToUpdate.hour = req.body.hour ? parseInt(req.body.hour) : null
        friendToUpdate.minute = req.body.minute ? parseInt(req.body.minute) : null
        friendToUpdate.meridiem = req.body.meridiem
        await friendToUpdate.save()
        res.json({
            'msg': `editted friend #${req.params.id}`,
            'body': friendToUpdate
        })
    })
    .catch(err=>{
        res.json({
            'msg': 'Error! Friend not created.',
            'error': err
        })
    })
})

// permanently delete an existing friend
app.delete('/friend/:id', (req, res, next)=>{
    db.friend.findByPk(req.params.id)
    .then(async foundFriend=>{
        await foundFriend.destroy()
        res.json({'msg': `deleted friend #${req.params.id}`})
    })
    .catch(err=>{
        res.json({
            'msg': 'Error! Friend not created.',
            'error': err
        })
    })
})

app.listen(PORT, ()=>{console.log('app is up and running')})