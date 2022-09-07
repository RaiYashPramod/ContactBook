require('dotenv').config();
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contacts')


const app = express();

app.use(express.json(),cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
})

app.use('/api/contacts', contactRoutes);

mongoose.connect(process.env.MONGO_URI)
 .then(() => {
    console.log('Connected To DataBase Successfully!!');
    app.listen(process.env.PORT, () => {
        console.log('Your server is up and running on PORT', process.env.PORT );
    });
 })
 .catch((error) => {
    console.log('Failed to connect to DataBase');
 }) 
