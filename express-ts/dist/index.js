"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Initialize Express app
const app = (0, express_1.default)();
const port = 3000;
// In-memory variable
let buttonStatus = false;
// Endpoint to get the current status of the button
app.get("/buttonStatus", (req, res) => {
    res.send({ status: buttonStatus });
});
// Endpoint to toggle the button status
app.get("/buttonToggle", (req, res) => {
    buttonStatus = !buttonStatus;
    res.send({ toggledTo: buttonStatus });
});
// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
