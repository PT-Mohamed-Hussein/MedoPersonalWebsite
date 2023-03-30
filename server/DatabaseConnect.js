// server/db.js

import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGO_URI
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
