import express from "express";

// Initialize Express app
const app = express();
const port = 3000;

// In-memory variable
let buttonStatus = false;

// Endpoint to get the current status of the button
app.get("/buttonStatus", (req, res) => {
  console.log(`Button status requested, currently ${buttonStatus}`);
  res.send({ status: buttonStatus });
});

// Endpoint to toggle the button status
app.get("/buttonToggle", (req, res) => {
  buttonStatus = !buttonStatus;
  console.log(`Button status toggled to ${buttonStatus}`);
  res.send({ toggledTo: buttonStatus });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
