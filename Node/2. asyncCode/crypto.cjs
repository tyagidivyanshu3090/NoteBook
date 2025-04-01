const crypto = require("crypto");
// Password base key derivative function
crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  if (err) {
    console.error("Error generating key:", err);
    return;
  }
  console.log("Generated Key:", key.toString("hex")); // Convert buffer to hex string
});
