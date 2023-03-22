require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors({ origin: true, credentials: true }));
const question = require("./routers/routes"); 
// connect database
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));
app.use("/post", question);

//app.use("/all", question);
// setting up port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});