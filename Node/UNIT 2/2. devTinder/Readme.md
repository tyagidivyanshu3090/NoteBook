# devTinder

## Initialising the project

- Run the `npm init`: creates the package.json [ Initialise the project ]
- `creating the src folder` @ which act as the folder of our source code
  - Inside the src we have app.js file which is the entry point for the project/application
- for creation of server we have used `express.js`

### 📝 To Run the application we have following command:

```bash
node ${fileName}
```

# 🧐 Creating the server for devTinder using express-js

```bash
npm install express
```

- Code written in src/app.js

# Installed the nodemon:

- nodemon is a tool that automatically restarts your Node.js application whenever it detects changes in your code files.

```bash
sudo npm install -g nodemon
```

- To run the application using the nodeman:

```bash
nodeman ${fileName}
```

# Routing takeaways"

```js
app.post("/us?er", (req, res) => {
  // This route will respond to both '/user' and '/uer'
  res.send("Matched route!");
});
```

- In Express route paths: ? means "the character before it is optional" So /us?er matches both /user and /uer It does not make s mandatory — it makes it optional

```js
app.get("/ab+cd", (req, res) => {
  res.send("Matched route!");
});
```

- In a route path like /ab+cd:
  - The + means: "one or more of the character before it". So b+ means: at least one b must be there
