const express = require('express');
const User = require('../models/User');
const Address = require('../models/Address');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, street, city, state, zipCode } = req.body;

    try {
        const user = await User.create({ name });

        await Address.create({ 
            street, 
            city, 
            state, 
            zipCode, 
            UserId: user.id 
        });

        res.status(201).send('User and Address Registered Successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

module.exports = router;
 
