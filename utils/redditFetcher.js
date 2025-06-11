import fetch from 'node-fetch';
import { getRedditAccessToken } from './redditAuth.js';

export async function fetchFromReddit(subreddit, count = 1, random = false) {
  const token = await getRedditAccessToken();
  const headers = {
    Authorization: `Bearer ${token}`,
    'User-Agent': process.env.REDDIT_USER_AGENT || 'media-api/1.0',
    Accept: 'application/json',
  };

  const url = `https://oauth.reddit.com/r/${subreddit}/hot.json?limit=${random ? 100 : 50}`;
  const res = await fetch(url, { headers });

  if (!res.ok) throw new Error(`Failed to fetch from Reddit: ${res.status}`);

  const data = await res.json();
  const posts = data.data.children || [];

  const mediaPosts = posts
    .map(p => p.data)
    .filter(p =>
      !p.over_18 &&                     // skip NSFW
      !p.stickied &&                   // skip pinned
      (p.post_hint === 'image' || p.is_video || p.url?.endsWith('.jpg') || p.url?.endsWith('.png'))
    )
    .sort(() => Math.random() - 0.5) // Randomize for better variety
    .slice(0, count)
    .map(p => ({
      title: p.title,
      url: p.url_overridden_by_dest || p.url,
      is_video: !!p.is_video,
      thumbnail: p.thumbnail,
      subreddit: p.subreddit,
      permalink: `https://reddit.com${p.permalink}`,
      id: p.id,
    }));

  return mediaPosts;
}
