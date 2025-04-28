# Creating the http server:

- Node.js has a built-in module called http that you can use to create servers.

```js
const http = require("http");
```

- This http module provides a function `createServer` which is used to **listen** to incoming request.
- This method provides the instance of a server `createServer`
- This server can receive requests and send back responses.

# Note:

- Instead of using the http module for creating the server. we use a wrapper on top of http which is **express**.
