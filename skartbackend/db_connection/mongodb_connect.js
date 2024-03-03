const mongoose = require("mongoose");

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URl, {
            dbName: 'users'
        });
        console.log("We connected to database successfully");
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectToDb;