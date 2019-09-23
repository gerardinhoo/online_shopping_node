const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const exampleRoutes = require("./routes/example");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(exampleRoutes);
app.use((req, res, next) => {
  res.status(404).send("PAGE NOT FOUND");
});

app.listen(3000);
