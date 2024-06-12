
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const path = require('path');
require('dotenv').config()
app.use(express.json());

app.use(cors({ origin: true }));

const distPath = path.join(__dirname, 'public');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": process.env.PRIVATE_KEY } }
    );

    return res.status(r.status).json(r.data);
  } catch (e) {
    console.log('error in axios', e)
    return res.status(e.response.status).json(e.response.data);
  }
});

module.exports = app;