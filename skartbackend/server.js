const express = require("express");
const connectToDb = require("./db_connection/mongodb_connect");
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser')

const router = require("./routes/user.routes.js");
const app = express();

// using middlewares 
app.use(cors());
app.use(bodyparser.json());
app.use(cookieParser());

// handling apis 
app.use(router)


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

// after creating the server , connecting to mongodb database 
connectToDb();

