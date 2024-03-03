const User = require('../models/User.model.js');
const Product = require('../models/Product.model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// signup controller 
const signup = async (req, res) => {
    try {
        //get all the data from body 
        const { name, email, password } = req.body;
        // store the encrypted password 
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });
        user.save();
    } catch (err) {
        res.status(400).json(err);
    }
    // all data should exist 
    // user already exist or not 
    // encrypt the password 
    // save the data in db 
    // generate a token for user and send it 
}

// login controller 
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            if (email == user.email && await bcrypt.compare(password, user.password)) {
                const token = jwt.sign({ name: user.name, email: user.email }, 'xxyyzz', { expiresIn: '1h' });
                res.status(200).cookie('accessToken', token).json({ success: true, user })
            }
            else {
                res.status(400).json("Inavlid Credentials");
            }
        }
        else {
            res.status(400).json("User does not exist");
        }

    } catch (err) {
        res.status(400).json(err);
    }
}

// forget password controller 
const forgetpassword = async (req, res) => {
    res.status(200).json("THis is foreget pass api ");
}

// for getting the pin codes where service is available 
const getPinCodes = (req, res) => {
    res.status(200).json([242220, 242221, 242001, 209625, 242223]);
}

// for fetching all the products 
const getAllProducts = async (req, res) => {
    try {
        let products = await Product.find();
        res.status(200).json({ products });
    } catch (err) {
        res.status(400).json(err);
    }

}

// for adding the products 
const addAllProducts = async (req, res) => {
    try {
        for (let i = 0; i < req.body.length; i++) {
            await Product.create({
                title: req.body[i].title,
                slug: req.body[i].slug,
                description: req.body[i].description,
                image: req.body[i].image,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty
            })
        }
        res.status(200).json({ success: true });

    } catch (err) {
        res.status(400).json(err);
    }
}

// updating the products 
const updateAllProducts = async (req, res) => {
    try {
        for (let i = 0; i < req.body.length; i++) {
            await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
        }
        res.status(200).json({ success: true });

    } catch (err) {
        res.status(400).json(err);
    }
}



// exporting all the functions 
module.exports = { signup, login, forgetpassword, getPinCodes, getAllProducts, addAllProducts, updateAllProducts };

