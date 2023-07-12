const Profile = require('../models/question')

async function getAllQuestions(req, res) {
    try {
        const question = await Question.find()
        res.json(question)
    } catch (error) {
        console.log('error fetching questions:', error)
        res.json({ 'message': 'error fetching questions' })
    }
}

async function createQuestions(req, res) {
try {
    if (!req.body.image) req.body.image = undefined
    await new Question(req.body).save()
    res.status(201).json({ 'message': 'Question created' })
} catch (error) {
    console.log('error creating Question:', error)
    res.json({ 'message': 'error creating Question' })
}
}

module.exports = {
    getAllQuestions,
    createQuestions
}