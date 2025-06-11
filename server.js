import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { fetchMedia } from './controllers/mediaController.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/health', (_, res) => {
  res.send('✅ Reddit API Proxy is running');
});

app.get('/api/reddit', fetchMedia);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
