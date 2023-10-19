require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./src/app");
const PORT = process.env.PORT || 5000;

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});