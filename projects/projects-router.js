const router = require('express').Router();
const Projects = require('./projects-model');


router.get('/', (req, res) => {
    Projects.getall()
        .then(projects =>{
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json('failed to fetch projects')
        })
})

router.post('/', async(req, res) =>{
    const newproject = req.body;

    Projects.add(newproject)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err =>{
            res.status(500).json('failed to add');
        })
})

module.exports = router;