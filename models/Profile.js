const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    userName: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    emailAddress: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String,
      default: ''
    },
    getsUpdates: {
      type: Boolean,
      default: false
    }
   
})

module.exports = mongoose.model('Profile', profileSchema)