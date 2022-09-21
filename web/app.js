const express = require("express");
const bodyParser = require("body-parser");
const PropertyController = require("../controller/property-controller");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const payload = req.body;
  res.send(PropertyController.getAveragePriceByCity(payload));
});

app.listen(port, () => console.log(`App running on port ${port}!`));
