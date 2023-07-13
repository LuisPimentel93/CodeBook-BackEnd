const Question = require('../models/forum')

async function getAllForums(req, res) {
    try {
        const forum = await Question.find()
        res.json(forum)
    } catch (error) {
        console.log('error fetching Forums:', error)
        res.json({ 'message': 'error fetching Forums' })
    }
}

async function createForums(req, res) {
try {
    if (!req.body.image) req.body.image = undefined
    await new Forum(req.body).save()
    res.status(201).json({ 'message': 'Forum created' })
} catch (error) {
    console.log('error creating Forum:', error)
    res.json({ 'message': 'error creating Forum' })
}
}

module.exports = {
    getAllForums,
    createForums
}