require('dotenv').config();
const mongoose = require('mongoose');

const database = require("./Database");
const express = require("express");

const cors = require("cors");

database()

const connection = {
    origin: 'http://localhost:3000',
    credentials: true
};

const app = express();
app.use(cors(connection));

