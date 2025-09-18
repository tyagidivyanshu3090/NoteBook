// 1. Import the built-in 'http' module
// Since 'http' is a native module, in newer Node versions, you can import it as 'node:http' (recommended)
// You could also just write 'http' in older versions
const http = require("node:http");

// 2. Create an HTTP server instance
// The 'createServer' method expects a function with (req, res) parameters
// 'req' = incoming request object (client details)
// 'res' = outgoing response object (what we will send back)
const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("There is no secret data");
    return;
  }
  // 3. Send the final response to the client and end the request
  // 'res.end()' sends the response data and closes the TCP connection
  res.end("Hello, this is my first Node.js HTTP server!🧐 ");
});

// 4. Start the server and make it listen on port 777
// Now your server will wait for requests at http://localhost:777

// Choose a port to listen on
const PORT = 7777;

// Start the server and have it listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});

