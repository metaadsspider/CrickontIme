const express = require("express");
const cors = require("cors");
const request = require("request");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/proxy", (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send("Missing url param");
  request({ url, headers: { "User-Agent": "Mozilla" } }).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
