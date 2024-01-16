const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware for parsing JSON requests
app.use(express.static('public')); // Serve static files from 'public' folder

// Temporary in-memory 'database'
let urlDatabase = {};

// Function to generate a short ID
function generateShortId() {
    // Simple random ID generation - consider a more robust method for production
    return Math.random().toString(36).substr(2, 6);
}

// Endpoint to create a shortened URL
app.post('/shorten', (req, res) => {
    const originalUrl = req.body.url;
    // Validation to ensure a URL is provided
    if (!originalUrl) {
        return res.status(400).json({ error: 'No URL provided' });
    }
    const shortId = generateShortId();
    urlDatabase[shortId] = originalUrl;
    res.json({ shortUrl: `http://localhost:${PORT}/${shortId}` });
});

// Endpoint for redirecting short URLs to original URLs
app.get('/:shortId', (req, res) => {
    const shortId = req.params.shortId;
    const originalUrl = urlDatabase[shortId];
    if (originalUrl) {
        res.redirect(originalUrl);
    } else {
        res.sendStatus(404);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
