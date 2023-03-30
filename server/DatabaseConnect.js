// server/db.js

import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://ma01019486962:6SVUz0EAAkJm01xB@reviewdb.lw9pbkb.mongodb.net/?retryWrites=true&w=majority"
let connection = null

async function connectToDatabase() {
    if (connection) {
        return connection
    }

    try {
        connection = await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Connected to MongoDB!')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message)
    }

    return connection
}

export default connectToDatabase
