**Introduction**

This project presents a Simple URL Shortener, a web-based application designed to transform long, cumbersome URLs into shorter, more manageable versions. This system is part of a larger effort to understand and develop scalable URL-shortening services. It's a straightforward, user-friendly application built using plain JavaScript, HTML, and CSS.

**Features**

**URL Shortening:** Converts long URLs into short, manageable links.
**Click Analytics:** Tracks clicks and unique visitors for each shortened URL.
**User-Friendly Interface:** Clean and simple UI for easy navigation and use.
**In-Memory Storage:** Temporary storage of URLs and analytics data.
**Error Handling:** Provides feedback for invalid URLs or server errors.


**Installation**

**Clone the Repository:** git clone https://github.com/BenjaminKakai/LinkMinimizer
**Navigate to the Project Directory:** cd [local repository]
**Install Dependencies:** Run npm install to install the required Node.js packages.


**Usage**

**Start the Server:** Run node server.js to start the application server.
**Access the Application:** Open a web browser and go to http://localhost:3000.
**Shorten a URL:** Enter a URL in the input field and click on "Shorten URL".
**View Shortened URL:** A shortened version of the URL will be displayed, which can be shared or copied.
**View Analytics:** Click on the shortened URL to view click and visitor analytics.


**Architecture**
**Frontend:** HTML, CSS for layout and styling; JavaScript for client-side logic.
**Backend:** Express.js server handling API requests and URL redirection.
**Data Storage:** Temporary in-memory storage for URLs and analytics.


**File Structure**
**/public/index.html** - Main HTML file for the frontend interface.
**/public/style.css** - CSS file for styling the frontend.
**/public/script.js** - JavaScript file managing frontend logic.
**/server.js** - Node.js Express server for backend logic.


**Limitations and Future Work**
**Persistence:** Currently, the application uses in-memory storage. Future versions could implement database integration for persistence.
**Scalability:** The system's scalability can be improved for handling more significant traffic.
**Custom URL Paths:** Future iterations could include the option for users to create custom short URL paths.
**Expire URLs:** Implement functionality to expire URLs after a certain period or number of clicks.



