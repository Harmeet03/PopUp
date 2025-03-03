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