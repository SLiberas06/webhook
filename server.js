const express = require("express");
const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
  const data = req.body;
  console.log("Webhook data received:", data);
  res.status(200).send("Webhook reçu !");
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
