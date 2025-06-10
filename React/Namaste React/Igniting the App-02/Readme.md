# Previous class:

- Using CDN link in index.html for react
- Linking the app.js to index.html using script tag

# Igniting the App

- `npm init -y`: to initialise the package.json file [ manifest file ]
- `npm install parcel -D`: installing the parcel bundler as devDependency
- `.gitignore` file: This tells Git to ignore the node_modules folder in future commits.
- `npx parcel index.html`: igniting the application

# Removing CDN link and installing React

```bash
npm i react
npm i react-dom
```

- After installing react and react-dom: we can remove the CDN link for the same and we need to import the react and react-dom in the app.js

```js
import React from "react";
import ReactDOM from "react-dom";
```
