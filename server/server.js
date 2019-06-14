const path = require('path');
const express = require('express');
const axios = require('axios');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

const gbAPIKey = process.env.GIANTBOMB_API_KEY;

app.use(express.static(publicPath));

app.get('/gbapi', async (req, res) => {
  const gbURI = `https://www.giantbomb.com/api/genres/?api_key=${gbAPIKey}&format=json&field_list=name`;
  try {
    const genres = await axios.get(gbURI);
    res.send(genres.data.results);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
