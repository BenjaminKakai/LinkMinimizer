"use strict";

document.getElementById('shortenBtn').addEventListener('click', function () {
  var url = document.getElementById('urlInput').value;
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
    document.getElementById('result').innerHTML = 'Shortened URL: <a href="' + data.shortUrl + '" target="_blank">' + data.shortUrl + '</a>';
  })["catch"](function (error) {
    console.error('Error:', error);
  });
});