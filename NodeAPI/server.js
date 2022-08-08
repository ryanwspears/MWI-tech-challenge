require("dotenv").config();

const express = require("express");
const app = express();

var cors = require('cors');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/posts", require("./routes/routes"));

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));