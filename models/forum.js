const mongoose = require('mongoose')

const forumSchema = new mongoose.Schema({
    getsUpdates: {
      type: Boolean,
      default: false
    }
   
})

module.exports = mongoose.model('Forum', forumSchema)