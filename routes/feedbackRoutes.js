const express = require('express');
const router = express.Router();
const { submitFeedback } = require('../controllers/feedbackController');
const { requireSession } = require('@clerk/clerk-sdk-node');

// POST route for submitting feedback
router.post('/submit', requireSession(), submitFeedback);

module.exports = router;
