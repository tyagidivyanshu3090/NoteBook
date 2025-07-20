// The new data we want to send
const newPost = {
  title: "My First Post",
  body: "Hello, world!",
  userId: 5,
};

// This function sends our data
async function createPost() {
  try {
    // Tell Axios the URL and the data to send
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );

    // The server often sends back the created data
    console.log("Success! Server responded with:", response.data);
  } catch (error) {
    console.error("Failed to send data:", error);
  }
}

// Call the function to run it
createPost();
