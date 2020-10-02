const express = require("express");
const { router } = require("./");
const PORT = 8083;
const app = express();

app.listen(PORT, () => {
  const openUrl = `http://localhost:${PORT}`;
  console.log("application listen ", "Open:", openUrl);
});

app.use(router);
