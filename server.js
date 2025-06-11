// server.js
const express = require('express');
const cors = require('cors');
const mediaRoutes = require('./routes/media');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use('/api/media', mediaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
