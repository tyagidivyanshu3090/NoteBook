// --- 1. Import the MongoClient ---
// This line imports the MongoClient class from the 'mongodb' library.
// The MongoClient is the main tool you'll use to connect to any MongoDB database.
const { MongoClient } = require("mongodb");

// --- 2. Define the Connection String (URL) ---
// This is your unique connection string, which acts like an address and password
// to your database hosted on MongoDB Atlas.
// It contains the username ("NamasteDev"), password ("JitinTyagi3090@@"),
// and the cluster address ("namastenode.4ffvfwu.mongodb.net").
const url =
  "mongodb+srv://NamasteDev:Divyanshu3090@namastenode.4ffvfwu.mongodb.net/";

// --- 3. Create a New Client Instance ---
// This creates a new MongoClient object using your connection string.
// At this point, it has NOT connected to the database yet; it's just prepared to connect.
const client = new MongoClient(url);

// --- 4. Specify the Database Name ---
// This variable holds the name of the specific database you want to work with
// after you connect to the cluster.
const dbName = "Testing_database";

// --- 5. Define the Main Asynchronous Function ---
// All the main logic is wrapped in an `async` function. This is necessary
// because connecting to a database is an asynchronous operation (it takes time),
// and this allows us to use the `await` keyword.
async function main() {
  // Use the .connect() method to establish a connection to the database server.
  // `await` pauses the function here until the connection is successful.
  await client.connect();
  console.log("Connected successfully to server");

  // Get a reference to the specific database you defined in `dbName`.
  const db = client.db(dbName);

  // Get a reference to a specific collection (like a table) named "User"
  // within that database. You'll use this `collection` object to find,
  // insert, update, or delete documents.
  const collection = db.collection("User");

  // This is a placeholder where you would add your code to interact with
  // the database, like `collection.find()` or `collection.insertOne()`.

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

// --- 6. Execute the Main Function and Handle the Outcome ---
// This block calls the `main` function and handles its result using Promises.
main()
  // .then() runs if the `main` function completes successfully.
  // It will log the return value ("done.") to the console.
  .then(console.log)

  // .catch() runs if any error occurs inside `main`.
  // It will log the error message, which is crucial for debugging.
  .catch(console.error)

  // .finally() ALWAYS runs, whether the function succeeded or failed.
  // Its purpose here is to close the database connection, which is a very
  // important step to free up resources and allow the program to exit cleanly.
  .finally(() => client.close());
