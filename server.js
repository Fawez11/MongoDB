const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // Parse incoming JSON data

// Connect to MongoDB
connectDB();

// User routes
app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Server listening on port ${port}`));
