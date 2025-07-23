const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://arnavspartan:<db_password>@cluster0.b38i6pp.mongodb.net/sharda_db?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = mongoDB;
