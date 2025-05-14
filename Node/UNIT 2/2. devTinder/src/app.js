const express = require("express"); // 👉 You're importing Express so you can use its features.
const app = express(); // 👉 You're creating an Express app. Think of it as your web server.

const PORT = 3000; // Set the port number

app.get("/", function (req, res) {
  res.send("Hello from the server. This is Landing page");
});

app.get("/about", function (req, res) {
  res.send("Hello from the server. This is about us page");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
