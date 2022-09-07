const Contact = require("../model/ContactModel")
const mongoose = require('mongoose');

const getContacts = async (req, res) => {
    const contacts = await Contact.find({}).sort({ createdAt: -1 })

    res.status(200).json(contacts);
}

const getContact = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'NO SUCH WORKOUT' });
    }
    
    const contact = await Contact.findById(id);
    if(!contact) {
        return res.status(404).json({ error: 'No such Contact was found in the database' })
    }
    return res.status(200).json(contact);
}

const createContact = async (req, res) => {
    const {name, phone, email} = req.body;

    let emptyFields = [];

    if(!name){
        emptyFields.push('name');
    }

    if(!phone) {
        emptyFields.push('phone');
    }

    if(!email) {
        emptyFields.push('email');
    }

    // if(!address) {
    //     emptyFields.push('address');
    // }

    if(emptyFields.length > 0) {
        res.status(400).json({ error:'Please fill all the necessary fields', emptyFields });
    }

    const newContact = await Contact.create({ name, phone, email });
    return res.status(200).json(newContact);
}

const updateContact = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'NO SUCH WORKOUT' });
    }

    const contact = await Contact.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!contact) {
        return res.status(400).json({ error: 'No such workout was found in the database' })
    }

    return res.status(200).json(contact);
}

const deleteContact = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'NO SUCH WORKOUT' });
    }

    const contact = await Contact.findByIdAndDelete({_id: id})

    if(!contact) {
        return res.status(400).json({ error: 'No such workout was found in the database' })
    }
    return res.status(200).json(contact);
}
 
module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}