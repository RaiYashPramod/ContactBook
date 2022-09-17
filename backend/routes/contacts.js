const express = require('express');
const {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
} = require('../controllers/contactController');

const router = express.Router();

//Get all the contacts from the db
router.get('/', getContacts);

//Get a Single Contact from the DB with the particular id 
router.get('/:id', getContact);

//Create a new Contact
router.post('/add', createContact);

//Update a existing contact with partial data
router.put('/:id', updateContact);

//Delete any cintact from the db
router.delete('/:id', deleteContact);

module.exports = router;
