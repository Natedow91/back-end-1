const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
// const SERVER_PORT = 4000

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });
  app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });
  app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  });

// app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`) )
app.listen(4050, () => console.log(`Server is running on 4050`) )
