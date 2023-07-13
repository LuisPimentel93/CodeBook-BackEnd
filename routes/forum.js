const router = require('express').Router()

const {
    getAllForuns, 
    getForunsById,
    creatForums,
    updateForumsById,
    deleteForumsById
   
} = require ('../controllers/Forum')

//GET / get all breads
router.get('/', getAllForums)

//Get / :id get bread by id
router.get('/:id', getForumsById)

//POST/ creat Bread
router.post('/', creatForums)

//PUT /:id update bread by id 
router.put('/:id', updateForumsById)

//DELETE /:id delete bread by id 
router.delete('/:id', deleteForumsById)

module.exports = router