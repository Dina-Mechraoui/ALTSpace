const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();
const PORT = 3000;

// Use middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Use sessions for tracking user login state
app.use(
  session({
    secret: "your-secret-key",
    resave: true,
    saveUninitialized: true,
  })
);

// In-memory database (for demonstration purposes)
let users = [];

// Registration endpoint
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (user) {
    return res.status(400).json({ message: "Username already exists" });
  }

  users.push({ username, password });
  res.status(200).json({ message: "Registration successful" });
});

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Store user information in the session
  req.session.user = user;
  res.status(200).json({ message: "Login successful" });
});

// Profile endpoint
app.get("/profile", (req, res) => {
  // Check if the user is logged in
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Send the user's information as response
  res.status(200).json({ user: req.session.user });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
