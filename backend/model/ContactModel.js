const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please give a valid email"]
    },
    // address: {
    //     type: String
    //     // flatNo: Number,
    //     // building: String || Number,
    //     // SocietyName: String,
    //     // Area: String,
    //     // city: String,
    //     // State: String,
    //     // pincode: Number,
    // }
}, {timestamps: true})

module.exports = mongoose.model('contacts', contactSchema);