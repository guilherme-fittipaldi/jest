const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

app.post("/", (req, res) => {
  const grouped = groupBy(req.body, (ap) => ap.city);
  const list = {};

  grouped.forEach(function imprimir(city) {
    list[city[0].city] =
      city.reduce((total, next) => total + next.area / next.price, 0) /
      city.length;
  });

  res.send(list);
});

app.listen(port, () => console.log(`App running on port ${port}!`));

module.exports = groupBy;
