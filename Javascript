document.getElementById('shortenBtn').addEventListener('click', function () {
    const urlInput = document.getElementById('urlInput');
    const resultElement = document.getElementById('result');
    
    const url = urlInput.value.trim();
    if (url === '') {
        resultElement.textContent = 'Please enter a valid URL.';
        return;
    }
    
    fetch('/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url })
    })
    .then(response => response.json())
    .then(data => {
        const shortId = data.shortUrl.split('/').pop();
        resultElement.innerHTML = `
            Shortened URL: <a href="${data.shortUrl}" id="shortUrlLink" target="_blank">${data.shortUrl}</a>
            <div id="analyticsResult"></div>
        `;

        document.getElementById('shortUrlLink').addEventListener('click', function(event) {
            // Fetch analytics on click but do not prevent the default action
            fetch(`/analytics/${shortId}`)
            .then(response => response.json())
            .then(analyticsData => {
                document.getElementById('analyticsResult').innerHTML = `
                    <strong>Clicks:</strong> ${analyticsData.clicks}<br>
                    <strong>Unique Visitors:</strong> ${analyticsData.uniqueVisitors}
                `;
            })
            .catch(analyticsError => {
                console.error('Analytics Error:', analyticsError);
            });
        });
    })
    .catch(error => {
        console.error('Error:', error);
        resultElement.textContent = 'An error occurred while shortening the URL.';
    });
});
