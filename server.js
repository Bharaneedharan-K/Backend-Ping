const express = require("express");
const axios = require("axios");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Self-ping every 14 minutes
setInterval(() => {
  axios.get(`http://localhost:${PORT}`).catch((err) => console.error("Self-ping failed:", err.message));
}, 14 * 60 * 1000); // 14 minutes

// Ping other URLs every 5 minutes
setInterval(() => {
  const urls = JSON.parse(fs.readFileSync("urls.json"));
  urls.forEach((url) => {
    axios.get(url)
      .then(() => console.log(`✅ Pinged: ${url}`))
      .catch((err) => console.error(`❌ Failed to ping ${url}:`, err.message));
  });
}, 5 * 60 * 1000); // 5 minutes

app.get("/", (req, res) => {
  res.send("🟢 Keep-Alive Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
