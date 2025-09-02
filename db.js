const mongoose = require('mongoose');
const {MONGO_USERNAME, MONG_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DB_NAME} = require('./config');
const mongoURI = `mongodb://${MONGO_USERNAME}:${MONG_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}?authSource=admin`;
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
}
module.exports = connectDB;