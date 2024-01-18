"use strict";

document.getElementById('shortenBtn').addEventListener('click', function () {
  var urlInput = document.getElementById('urlInput');
  var resultElement = document.getElementById('result');
  var url = urlInput.value.trim();

  if (url === '') {
    resultElement.textContent = 'Please enter a valid URL.';
    return;
  }

  fetch('/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    var shortId = data.shortUrl.split('/').pop();
    resultElement.innerHTML = "\n            Shortened URL: <a href=\"".concat(data.shortUrl, "\" id=\"shortUrlLink\" target=\"_blank\">").concat(data.shortUrl, "</a>\n            <div id=\"analyticsResult\"></div>\n        ");
    document.getElementById('shortUrlLink').addEventListener('click', function (event) {
      // Fetch analytics on click but do not prevent the default action
      fetch("/analytics/".concat(shortId)).then(function (response) {
        return response.json();
      }).then(function (analyticsData) {
        document.getElementById('analyticsResult').innerHTML = "\n                    <strong>Clicks:</strong> ".concat(analyticsData.clicks, "<br>\n                    <strong>Unique Visitors:</strong> ").concat(analyticsData.uniqueVisitors, "\n                ");
      })["catch"](function (analyticsError) {
        console.error('Analytics Error:', analyticsError);
      });
    });
  })["catch"](function (error) {
    console.error('Error:', error);
    resultElement.textContent = 'An error occurred while shortening the URL.';
  });
});