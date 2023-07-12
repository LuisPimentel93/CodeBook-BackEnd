const router = require('express').Router()

const {
    getAllQuestions, 
    getQuestionsById,
    creatQuestions,
    updateQuestionsById,
    deleteQuestionsById
   
} = require ('../controllers/Question')

//GET / get all breads
router.get('/', getAllQuestions)

//Get / :id get bread by id
router.get('/:id', getQuestionsById)

//POST/ creat Bread
router.post('/', creatQuestions)

//PUT /:id update bread by id 
router.put('/:id', updateQuestionsById)

//DELETE /:id delete bread by id 
router.delete('/:id', deleteQuestionsById)

module.exports = router