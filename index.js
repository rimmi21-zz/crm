import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) =>
  res.send(`Node and Express server running on ${PORT}`)
);

app.listen(PORT, () => res.send(`Your server is running on ${PORT}`));
