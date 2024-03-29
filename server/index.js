const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, encouragment, deleteRandomFortune, changeQuote, getQuote } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/encourage", encouragment);
app.delete("/api/deleteRandomFortune", deleteRandomFortune);

app.put("/api/quote", changeQuote);
app.get("/api/getQuote", getQuote);

app.listen(4000, () => console.log("Server running on 4000"));
