// utils/redditFetcher.js
const fetch = require('node-fetch');

async function fetchFromReddit(subreddit, keyword, limit) {
  const url = `https://www.reddit.com/r/${subreddit}.json?limit=100`;

  const res = await fetch(url, {
    headers: {
      'User-Agent': 'RedditMediaFetcher/1.0',
    },
  });

  if (!res.ok) throw new Error('Reddit fetch failed');

  const data = await res.json();
  const posts = data.data.children;

  const filtered = posts
    .map((p) => p.data)
    .filter((post) => {
      const isMedia = post.url && (post.url.endsWith('.jpg') || post.url.endsWith('.png') || post.url.endsWith('.gif') || post.url.includes('redgifs') || post.is_video);
      const titleMatch = !keyword || post.title.toLowerCase().includes(keyword.toLowerCase());
      return isMedia && titleMatch;
    })
    .slice(0, limit);

  return filtered.map((post) => ({
    id: post.id,
    title: post.title,
    subreddit: post.subreddit,
    mediaUrl: post.url_overridden_by_dest || post.url,
    preview: post.thumbnail,
    type: post.is_video ? 'video' : 'image',
    ups: post.ups,
    permalink: `https://reddit.com${post.permalink}`,
  }));
}

module.exports = fetchFromReddit;
