const express = require('express');
const sequelize = require('./db');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// User registration routes
app.use('/api', userRoutes);

// Sync database and start server
sequelize.sync()
    .then(() => {
        console.log('Database connected and synced');
        app.listen(3000, () => {
            console.log('Server running on http://localhost:3000');
        });
    })
    .catch((err) => console.error('Error syncing database', err));
 
