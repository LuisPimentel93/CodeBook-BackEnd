const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const profileRoutes = require('./routes/Profile')

const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/profile', profileRoutes)


const PORT = process.env.PORT 

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));


app.listen(PORT, console.log(`listining on port ${PORT}`))