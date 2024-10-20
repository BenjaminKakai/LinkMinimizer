**Introduction**

This project is a URL Shortener, a web-based application designed to transform long, cumbersome URLs into shorter, more manageable versions. This system is part of a larger effort to understand and develop scalable URL-shortening services. It's a straightforward, user-friendly application built using plain JavaScript, HTML, and CSS.

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

**Preview**
![image](https://github.com/BenjaminKakai/LinkMinimizer/assets/114109979/92f51622-c459-4788-a7fc-66c963db8047)



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

**Demonstration**

I shortened this link; https://www.example.com/users/view?category=technology&article=how-to-create-a-url-shortening-service&session=9374hfhf93hf93h4f9h39fh3f93h4f93h4f93h&user=guest&trackingid=485hf4h84f4f4f4h84h4h4f84h4fh4f4
 to get this link; http://localhost:3000/kxwnmb. As you can see, in the demonstration, the link leads to the same website.
 ![image](https://github.com/BenjaminKakai/LinkMinimizer/assets/114109979/c778e158-c99e-4b15-a798-1e4897229b06)



 The Link when clicked Opens; 
 ![image](https://github.com/BenjaminKakai/LinkMinimizer/assets/114109979/f63d9526-8e3e-4f6d-9b2e-9d89ec9fc178)





