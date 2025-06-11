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

## 🔧 API Usage 

### Base Endpoint 

``` 
GET /api/media 
``` 

### Optional Query Parameters 

| Param | Type | Description | 
| ----------- | ------ | --------------------------------------------------- | 
| `subreddit` | string | (Optional) Specific subreddit to fetch from | 
| `q` | string | (Optional) Filter posts by title keyword | 
| `limit` | number | (Optional) Number of posts to return (default: `1`) | 

---

### ✅ Example Requests 

* **Get 1 random post** from default SFW subreddits: 

 ``` 
 GET /api/media 
 ``` 

* **Get 5 posts** from a specific subreddit: 

 ``` 
 GET /api/media?subreddit=Art&limit=5 
 ``` 

* **Search for "sky"** in titles across default subreddits: 

 ``` 
 GET /api/media?q=sky 
 ``` 

---

## 📄 Sample JSON Response 

```json 
[ 
 {
 "id": "abc123", 
 "title": "Stunning sunset over the ocean", 
 "subreddit": "EarthPics", 
 "mediaUrl": "https://i.redd.it/xyz.jpg", 
 "preview": "https://preview.redd.it/xyz.jpg", 
 "type": "image", 
 "ups": 1023, 
 "permalink": "https://reddit.com/r/EarthPics/comments/abc123/stunning_sunset" 
 } 
] 
``` 

---

## 📁 Folder Structure 

``` 
reddit-media-api/ 
\u2502 
\u251c\u2500\u2500 controllers/ 
\u2502 \u2514\u2500\u2500 mediaController.js # Handles logic for /api/media 
\u2502 
\u251c\u2500\u2500 utils/ 
\u2502 \u2514\u2500\u2500 redditFetcher.js # Reddit fetch logic 
\u2502 
\u251c\u2500\u2500 server.js # Express server entry point 
\u251c\u2500\u2500 package.json # Project metadata and scripts 
\u2514\u2500\u2500 README.md # You're here! 
``` 

---

## 📋 Default Safe Subreddits 

This project uses only **visually appealing subreddits** by default: 

```js 
const DEFAULT_SUBREDDITS = [ 
 'EarthPics', 
 'Wallpapers', 
 'ImaginaryLandscapes', 
 'Cityscapes', 
 'SkyShots', 
 'NaturePics', 
 'Art', 
 'Architecture', 
 'FoodPics', 
 'Space' 
]; 
``` 

You can extend this list safely in <mcfile name="mediaController.js" path="controllers/mediaController.js"></mcfile>. 

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
GitHub: `https://github.com/your-username` 

---

## 🌐 Resources 

* <mcurl name="https://www.reddit.com/dev/api/" url="https://www.reddit.com/dev/api/"></mcurl> 
* <mcurl name="https://expressjs.com/" url="https://expressjs.com/"></mcurl> 
* <mcurl name="https://nodejs.org/" url="https://nodejs.org/"></mcurl> 

---

## 💡 Tip 

Want to add NSFW/private subreddits without making them public? 
Use the `subreddit` query param in the frontend, and **don't include them in the default list.** 

```