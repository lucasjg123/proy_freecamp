require("dotenv").config();
const bodyparser = require("body-parser");
let express = require("express");
let app = express();

// Middlewware bodyparse apra acceder al body de los post
app.use(bodyparser.urlencoded({ extended: false }));

// servimos el directorio static /public donde tenemos el css
app.use("/public", express.static(__dirname + "/public"));

// servimos la pagina html en el root. Este index llama al recuros style.css de /public internamente
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Endpoint  al cual redirije el form al enviar sus datos
app.post("/name", (req, res) => {
  const send = { name: `${req.body.first} ${req.body.last}` };
  res.json(send);
});

module.exports = app;
