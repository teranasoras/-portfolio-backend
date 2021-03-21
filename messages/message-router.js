const router = require('express').Router();
const Messages = require('./message-model');

router.post('/', async(req, res) =>{
    const newmessage = req.body;

    Messages.add(newmessage)
        .then(message => {
            res.status(201).json(message)
        })
        .catch(err =>{
            res.status(500).json('failed to add');
        })
})

router.get('/', (req, res) => {
    Messages.getall()
        .then(messages =>{
            res.json(messages);
        })
        .catch(err => {
            res.status(500).json('failed to fetch messages');
        })
})

module.exports = router;