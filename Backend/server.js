// SERVER BASIC SETTING
require('dotenv').config();
const mongoose = require('mongoose');

const database = require("./Database");
const express = require("express");

const cors = require("cors");

database();

const Port = process.env.PORT

const connection = {
    // origin: 'http://localhost:3000',
    origin: 'https://app-popup.netlify.app',
    credentials: true
};

const app = express();
app.use(cors(connection));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = async () => {
    e.preventDefault();
    try{
        const request = await fetch(`https://app-popup.netlify.app`, {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': 'http://localhost:3000'
                'Access-Control-Allow-Origin': 'https://app-popup.netlify.app'
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
const bcrypt = require('bcryptjs');
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

// PAYMENT GATEWAY SERVER (Using Razorpay)
const Razorpay = require('razorpay')
const crypto = require('crypto')

// 1. {Initialize it with keys}
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// 2. {Create Order API}
app.post('/payment/create-order', async (req, res) => {
    try{
        const { amount, currency, product_name, product_category } = req.body;
        const options = {
            amount: amount,
            currency,
            notes: {
                product_name: product_name,
                product_category: product_category
            },
            receipt: `order_rcpt_${Date.now()}`
        };
        const order = await razorpay.orders.create(options);
        console.log('User placed an order!');
        res.json({success: true, order});
    }
    catch(e){
        console.error('Error creating order: ', e);
        res.status(500).json({ success: false, message: "Failed to create order" });
    }
});

// 3. {Verify Payment}
app.post('/payment/verify-payment', async (req, res) => {
    try{
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const body = razorpay_order_id + '|' + razorpay_payment_id; 
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body)
            .digest("hex");
        
        if(expectedSignature === razorpay_signature){
            res.json({ success: true, message: "Payment Verified Successfully" });
            console.log('User paid for an order!');
        }
        else{
            res.status(400).json({ success: false, message: "Invalid Payment Signature" });
            console.log("User wasn't able to pay for an order!");
        }
    }
    catch(e){
        console.error("Error verifying payment:", e);
        res.status(500).json({ success: false, message: "Payment verification failed" });
    }
});

// 4. {Sending order details to database}
const orders = require('./Orders');
app.post('/orders', async (req, res) => {
    try{
        const order_lists = await orders.create({
            order_id: req.body.order_id,
            product_name: req.body.product_name,
            amount: req.body.amount,
            product_category: req.body.product_category
        });
        res.status(200).json({ message: "Sent", order_lists });
        console.log("Order details sent to the database");
    }
    catch(e){
        console.error(`Error while sending order details to the database: ${e}`);
    }
});

app.get('/orders', async (req, res) => {
    try{
        const data = await orders.find({});
        res.json(data)
    }
    catch(e){
        console.error(`Unable to fetch: ${error}`);
    }
})
