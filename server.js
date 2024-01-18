const express = require('express');
const app = express();
const path = require('path'); // Added to use path.join

const PORT = 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Serve static files from the 'public' directory (Make sure your HTML, CSS, and JS files are in this directory)
app.use(express.static('public'));

// Temporary in-memory 'database' for URLs
let urlDatabase = {};

// Your analytics data object
const analyticsData = {};

// Function to generate a short ID
function generateShortId() {
    return Math.random().toString(36).substr(2, 6);
}

// Endpoint to create a shortened URL
app.post('/shorten', (req, res) => {
    const originalUrl = req.body.url;
    const shortId = generateShortId();
    urlDatabase[shortId] = originalUrl;
    res.json({ shortUrl: `http://localhost:${PORT}/${shortId}` });
});

// Endpoint for redirecting short URLs to original URLs
app.get('/:shortId', (req, res) => {
    const shortId = req.params.shortId;
    const originalUrl = urlDatabase[shortId];

    if (originalUrl) {
        if (!analyticsData[shortId]) {
            analyticsData[shortId] = { clicks: 0, visitors: new Set() };
        }
        analyticsData[shortId].clicks++;
        analyticsData[shortId].visitors.add(req.ip);

        res.redirect(originalUrl);
    } else {
        res.sendStatus(404);
    }
});

// Endpoint to fetch analytics for a given shortId
app.get('/analytics/:shortId', (req, res) => {
    const shortId = req.params.shortId;
    const data = analyticsData[shortId];

    if (data) {
        res.json({
            shortId: shortId,
            clicks: data.clicks,
            uniqueVisitors: data.visitors.size
        });
    } else {
        res.status(404).json({ error: 'Analytics data not found for this ID' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
