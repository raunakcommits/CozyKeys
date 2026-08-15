require("dotenv").config();
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);

const express = require("express");
const cors = require("cors");

const app = express();

require("./config/database");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to CozyKeys API 🚀"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});