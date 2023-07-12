const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    profilePicture: {
      type: String,
      default: ''
    },
    getsUpdates: {
      type: Boolean,
      default: false
    }
   
})

module.exports = mongoose.model('Question', questionSchema)