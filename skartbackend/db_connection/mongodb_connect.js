const mongoose = require("mongoose");
const env = require('dotenv').config();


const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: 'skartdata'
        });
        console.log("We connected to database successfully");
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectToDb;