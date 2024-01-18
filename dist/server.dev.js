"use strict";

var express = require('express');

var app = express();

var path = require('path'); // Added to use path.join


var PORT = 3000; // Middleware for parsing JSON requests

app.use(express.json()); // Serve static files from the 'public' directory (Make sure your HTML, CSS, and JS files are in this directory)

app.use(express["static"]('public')); // Temporary in-memory 'database' for URLs

var urlDatabase = {}; // Your analytics data object

var analyticsData = {}; // Function to generate a short ID

function generateShortId() {
  return Math.random().toString(36).substr(2, 6);
} // Endpoint to create a shortened URL


app.post('/shorten', function (req, res) {
  var originalUrl = req.body.url;
  var shortId = generateShortId();
  urlDatabase[shortId] = originalUrl;
  res.json({
    shortUrl: "http://localhost:".concat(PORT, "/").concat(shortId)
  });
}); // Endpoint for redirecting short URLs to original URLs

app.get('/:shortId', function (req, res) {
  var shortId = req.params.shortId;
  var originalUrl = urlDatabase[shortId];

  if (originalUrl) {
    if (!analyticsData[shortId]) {
      analyticsData[shortId] = {
        clicks: 0,
        visitors: new Set()
      };
    }

    analyticsData[shortId].clicks++;
    analyticsData[shortId].visitors.add(req.ip);
    res.redirect(originalUrl);
  } else {
    res.sendStatus(404);
  }
}); // Endpoint to fetch analytics for a given shortId

app.get('/analytics/:shortId', function (req, res) {
  var shortId = req.params.shortId;
  var data = analyticsData[shortId];

  if (data) {
    res.json({
      shortId: shortId,
      clicks: data.clicks,
      uniqueVisitors: data.visitors.size
    });
  } else {
    res.status(404).json({
      error: 'Analytics data not found for this ID'
    });
  }
}); // Start the server

app.listen(PORT, function () {
  console.log("Server running on port ".concat(PORT));
});