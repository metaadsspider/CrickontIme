const express = require("express");
const cors = require("cors");
const request = require("request");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/proxy", (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send("Missing URL param");

  request
    .get(url)
    .on("error", () => res.status(500).send("Stream error"))
    .pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
