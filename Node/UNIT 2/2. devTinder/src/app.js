const express = require("express"); // 👉 You're importing Express so you can use its features.
const app = express(); // 👉 You're creating an Express app. Think of it as your web server.

const PORT = 3000; // Set the port number

app.use(function (req, res) {
  res.send("Hello from the server");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
