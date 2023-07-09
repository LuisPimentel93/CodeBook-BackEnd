const Profile = require('../models/Profile')

async function getAllProfiles(req, res) {
    try {
        const profile = await Profile.find()
        res.json(profile)
    } catch (error) {
        console.log('error fetching profiles:', error)
        res.json({ 'message': 'error fetching Profiles' })
    }
}

async function createProfile(req, res) {
try {
    if (!req.body.image) req.body.image = undefined
    await new Profile(req.body).save()
    res.status(201).json({ 'message': 'Profile created' })
} catch (error) {
    console.log('error creating Profile:', error)
    res.json({ 'message': 'error creating Profile' })
}
}

module.exports = {
    getAllProfiles,
    createProfile
}