const express = require("express"); // 👉 You're importing Express so you can use its features.
const app = express(); // 👉 You're creating an Express app. Think of it as your web server.

const PORT = 3000; // Set the port number

app.get("/", function (req, res) {
  res.send({ firstName: "Divyanshu", lastName: "Tyagi" });
});

app.get("/about", function (req, res) {
  res.send("Hello from the server. This is about us page");
});

app.post("/user", (req, res) => {
  // Saving the data to db ->
  res.send("Data saved to the dataBase");
});

app.delete("/user", (req, res) => {
  // Data deleteed from the db
  res.send("Data is deleted from the dataBase");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
