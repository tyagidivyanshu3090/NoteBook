# Geting the connection string of monogodb

- Go to https://cloud.mongodb.com and log in to your MongoDB account.
- Select your project.
- Click on your Cluster (e.g: NamasteDev).
- Click “Connect” (top right).
- Choose “Connect your application”.
- Copy the Connection String URI that looks like this:

```js
const connectionString =
  "mongodb+srv://NamasteDev:<db_password>@namastenode.4ffvfwu.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNode";
```

# Making connection btw Node application and Mongodb

- Install the npm package of the mongodb
- import the mongodb package using require function
