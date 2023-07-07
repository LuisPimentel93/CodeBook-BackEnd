const mongoose = require('mongoose')

const profuleSchema = new mongoose.Schema({
    userName: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String,
      default: ''
    },
   
})

module.exports = mongoose.model('Profile', breadSchema)