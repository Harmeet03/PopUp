// SERVER BASIC SETTING
require('dotenv').config();
const mongoose = require('mongoose');

const database = require("./Database");
const express = require("express");

const cors = require("cors");

database()
const Port = process.env.PORT

const connection = {
    origin: 'http://localhost:3000',
    credentials: true
};

const app = express();
app.use(cors(connection));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = async () => {
    e.preventDefault();
    try{
        const request = await fetch(`http://localhost:${Port}`, {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        });
        if(request.ok){
            console.log("Server Connected!");
        }
        else{
            console.log("Request Error!");
        }
    }
    catch(e){
        console.log(`Error occurred: ${e}`);
    }
}

app.listen(Port, () => {
    console.log(`Server is Running, and running at PORT: ${Port}`);
});

app.get('/', (req, res) => {
    res.send("Server is Running");
});

// ADD TO BAG SERVER
const bag = require("./Bag");
app.post('/bag-list', async (req, res) => {
    try{
        const bag_list = await bag.create({
            name: req.body.name,
            url_name: req.body.url_name,
            image: req.body.image,
            price: req.body.price,
            category: req.body.category,
            company: req.body.company
        })

        res.status(200).json({ message: "Added To Bag successfully", bag_list });
        console.log('Added To Bag');
    }
    catch(e){
        res.status(500).json({e: "ERROR:500. SERVER IS OFFLINE. KINDLY TRY LATER"});
        console.log('Error in adding', e);
    }
});

app.get('/bag-list', async (req, res) => {
    try{
        const bag_list = await bag.find({});
        if(bag_list){
            res.json(bag_list)
        }
    }
    catch(e){
        res.status(500).json({e: 'Internal server error'});
    }
});

// SIGN UP & SIGN IN SERVER
const user = require('./User');
const bcrypt = require('bcrypt');
app.post('/sign-up', async (req, res) => {
    try{
        const encryption = await bcrypt.hash(req.body.password, 10)
        const user_detail = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: encryption
        });
        res.status(200).json({ message: "Created", user_detail });
        console.log("User Created");
    }
    catch(e){
        console.error(`Error while registering user: ${e}`);
    }
});

app.get('/sign-up', async (req, res) => {
    try{
        const data = await user.find({});
        res.json(data)
    }
    catch(e){
        console.error(`Unable to fetch: ${error}`);
    }
})

app.post('/sign-in', async (req, res) => {
    const {email, password} = req.body;
    try{
        const user_email = await user.findOne({email});
        if(user_email){
            const match = await bcrypt.compare(password, user_email.password);
            if(match){
                res.json({ message: "Authorized", user_email });
                console.log('Authorized');
            } 
            else{
                res.status(401).json({ message: "Unauthorized" });
                console.log('Password Unauthorized');
            }
        }
        else{
            res.status(401).json({ message: "Unauthorized" });
            console.log('Email Unauthorized');
        }
    }
    catch(e){
        console.error(`Unable to connect to the server: ${e}`);
    }
});