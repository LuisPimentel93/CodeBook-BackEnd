const mongoose = require('mongoose')

const forumSchema = new mongoose.Schema({
    getsUpdates: {
      type: Boolean,
      default: false
    },
    ProfileName: {
      type: String,
      default: false
    },
    Date: {
      type: Number,
      timestamps: true
    },
    Body: {
      type: String,
      default: false

    } 
})

module.exports = mongoose.model('Forum', forumSchema)