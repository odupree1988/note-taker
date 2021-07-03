const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static("public"));

// app.use("/api", apiRoutes);
// app.use("/api", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});