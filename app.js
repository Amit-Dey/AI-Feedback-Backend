const express = require('express');
const feedbackRoutes = require('./routes/feedbackRoutes');
const connectDB = require('./config/db');
require('dotenv').config();
const cors = require('cors');


const app = express();

// Middleware
app.use(cors({}));
app.use(express.json());  // To handle JSON requests

// Connect to the database
connectDB();

// Routes
app.use('/api/feedback', feedbackRoutes);

module.exports = app;
