const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://olhachei:olhachei@olhachei-roj3n.mongodb.net/cinema?retryWrites=true&w=majority', { 
        useNewUrlParser: true,
        useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db