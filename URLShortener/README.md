# URL Shortener - Frontend Project

## Overview
This project is a **frontend-only URL Shortener** built using **React.js** and **plain CSS**.  
It allows users to generate **5 unique short URLs** for every long URL submitted.  

Each generated URL:
- Is valid for **30 minutes by default**, unless the user specifies a custom expiry time.
- Is stored in the browser’s **localStorage** for persistence.
- Can be tracked with an integrated **logging middleware**.

The project runs on **port 3000** by default.

---

## Features
- Input a long URL and generate **exactly 5 shortened URLs**.
- Specify a custom expiry time for URLs, or fallback to **30 minutes default**.
- Expired URLs are automatically invalidated.
- Integrated **logging middleware** that records:
  - URL submissions
  - URL list updates
  - Expiry events  
- Logs are available in both the **console** and **localStorage**.

---

## Tech Stack
- **React.js** – Component-based UI and state management
- **Plain CSS** – Lightweight and simple styling
- **LocalStorage** – Client-side persistence of URLs and logs

---

## Project Structure
├── public
│ └── index.html
├── src
│ ├── components
│ │ ├── URLForm.jsx # Handles URL submission
│ │ ├── URLList.jsx # Displays generated URLs
│ ├── logger.js # Logging middleware
│ ├── App.jsx # Main app container
│ ├── index.js # Entry point
│ └── styles.css # Plain CSS styling
└── README.md

yaml
Copy code

---

## Installation & Running
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/url-shortener-frontend.git
   cd url-shortener-frontend
Install dependencies:

bash
Copy code
npm install
Start the development server (default port: 3000):

bash
Copy code
npm start
📝 Logging Middleware
The logging middleware (logger.js) captures key events and stores them:

Console logs with timestamp

LocalStorage logs for inspection

Example log entry:

json
Copy code
{
  "timestamp": "2025-09-08T12:45:32.123Z",
  "event": "URL_SUBMITTED",
  "data": { "original": "https://example.com", "expiry": 1694181123000 }
}
