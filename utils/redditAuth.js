import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

let redditAccessToken = null;
let tokenExpiry = 0;

export async function getRedditAccessToken() {
  if (redditAccessToken && Date.now() < tokenExpiry) return redditAccessToken;

  const basicAuth = Buffer.from(`${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`).toString('base64');
  const response = await fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': process.env.REDDIT_USER_AGENT,
    },
    body: 'grant_type=client_credentials',
  });
  if (!response.ok) throw new Error(`Failed to get Reddit token: ${response.status}`);

  const data = await response.json();
  redditAccessToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in - 60) * 1000;
  return redditAccessToken;
}

export function buildHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    'User-Agent': process.env.REDDIT_USER_AGENT,
    Accept: 'application/json',
  };
}
