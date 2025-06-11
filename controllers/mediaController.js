import { fetchFromReddit } from '../utils/redditFetcher.js';
const DEFAULT_SUBREDDITS = process.env.DEFAULT_SUBREDDITS.split(',').map((s) => s.trim());

export const fetchMedia = async (req, res) => {
    const { subreddit, limit } = req.query;

    const count = parseInt(limit) || 1;
  
    const subredditsToTry = subreddit
      ? [subreddit.trim()]
      : [...DEFAULT_SUBREDDITS].sort(() => Math.random() - 0.5); // Random fallback
  
    for (const sub of subredditsToTry) {
      try {
        const mediaItems = await fetchFromReddit(sub, count);

        if (mediaItems.length > 0) {
          return res.json(mediaItems); // ✅ Success response
        }
      } catch (err) {
        console.warn(`Failed to fetch from r/${sub}: ${err.message}`);
      }
    }
  
    res.status(404).json({ error: 'No media could be fetched from any subreddit' }); // ❌ Fallback
  };
  