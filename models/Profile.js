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
      default: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg'
    },
    getsUpdates: {
      type: Boolean,
      default: false
    },
    password: {
      type: String,
      required: true
    }
   
})

module.exports = mongoose.model('Profile', profileSchema)