# 📸 Reddit Media API 

A lightweight public API built with Node.js and Express to fetch image/video posts from Reddit's clean and safe subreddits. 

This API returns high-quality media content — perfect for use in galleries, wallpaper apps, background image fetchers, and more. 

---

## 🌟 Features 

- 🔄 Fetches media directly from Reddit (no database required) 
- ✅ Safe by default — only clean, public-friendly subreddits are included 
- 🔍 Optional keyword filtering in titles 
- 🔁 Retries multiple subreddits if one fails (up to 10) 
- 📦 JSON output includes post title, media URL, type, and subreddit info 
- 🧩 Easy to extend with custom subreddits or logic 

---

## 🚀 Getting Started 

### 1. Clone the repository 

```bash 
git clone https://github.com/your-username/reddit-media-api.git 
cd reddit-media-api 
```` 

### 2. Install dependencies 

```bash 
npm install 
``` 

### 3. Start the server 

```bash 
node server.js 
``` 

Server will start on: 
👉 `http://localhost:3001` 

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory of the project and add the following:

```
PORT=3001
REDDIT_USER_AGENT=your-reddit-user-agent
```

- `PORT`: The port the server will run on (default: 3001).
- `REDDIT_USER_AGENT`: A unique user agent string for your application. This is required by Reddit's API.

---

## 🔧 API Usage 
Base Endpoint 
```bash 
GET /api/media 
``` 
Query Parameters 

| Param | Type | Description | 
|---|---|---| 
| subreddit | string | (Optional) Subreddit to fetch from | 
| limit | number | (Optional) Number of media posts to get (default: 1) | 

---

✅ Example Requests 
1 random post from default subreddits: 

```http 
GET /api/media 
``` 
5 posts from a specific subreddit: 

```
GET /api/media?subreddit=Art&limit=5 
```

Example usage with external API:

```
https://openmedia-fetcher.onrender.com/api/reddit?subreddit=GTA&limit=5
```

```
https://openmedia-fetcher.onrender.com/api/reddit
``` 

---

📄 Sample JSON Response 
```json 
[ 
  { 
    "id": "abc123", 
    "title": "Stunning sunset over the ocean", 
    "subreddit": "EarthPics", 
    "mediaUrl": "`https://i.redd.it/xyz.jpg`", 
    "preview": "`https://preview.redd.it/xyz.jpg`", 
    "type": "image", 
    "ups": 1023, 
    "permalink": "`https://reddit.com/r/EarthPics/comments/abc123/stunning_sunset`" 
  } 
] 
``` 

---

## 📁 Folder Structure 

```
reddit-api/
├── .gitignore
├── README.md
├── controllers/
│   └── mediaController.js
├── package-lock.json
├── package.json
├── routes/
│   └── media.js
├── server.js
└── utils/
    ├── redditAuth.js
    └── redditFetcher.js
```

---

## ⚠️ Error Handling 

* If a subreddit fails or returns no valid media, the system retries up to 10 others. 
* If no results are found, you'll get: 

```json 
{ 
 "error": "No media could be fetched from any subreddit" 
} 
``` 

---

## 🛡️ License 

This project is licensed under the MIT License. 
Feel free to fork, modify, and build upon it. 

---

## 🙌 Contributing 

Pull requests and feature suggestions are welcome! 

---

## 👨‍💻 Author 

**Your Name** 
GitHub: `https://github.com/atharvabaodhankar/` 

---

## 🌐 Resources 

* [Reddit API Documentation](https://www.reddit.com/dev/api/) 
* [Express.js](https://expressjs.com/) 
* [Node.js](https://nodejs.org/) 

---

