const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect('mongodb+srv://omnistack:<password>@cluster0-8a1im.mongodb.net/omnistack?retryWrites=true',
    {
        useNewUrlParser: true
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(3330);