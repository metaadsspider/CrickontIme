
const express = require('express');
const cors = require('cors');
const request = require('request');
const app = express();
app.use(cors());

app.get('/proxy/*', (req, res) => {
  const url = req.params[0];
  req.pipe(request(url)).pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
