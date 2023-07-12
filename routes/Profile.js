const router = require('express').Router()
const{
    getAllProfiles,
    createProfile,
    deleteProfileById,
    updateProfileById
} = require('../controllers/Profile')

// GET / get all Profiles
router.get('/', getAllProfiles)
// GET / get all profile by id
router.get('/:id', )
// POST / create profile
router.post('/', createProfile)

router.put('/:id', updateProfileById )
// GET / get all profile by id
router.delete('/:id', deleteProfileById  )
// GET / get all profile by id


module.exports = router