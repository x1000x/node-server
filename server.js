const express = require("express");
const connectDB = require("./database");

const morgan = require("morgan");
const cors = require("cors");
const { readdirSync} = require("fs");
// const userRoutes = require("./routes/user")
require("dotenv").config();

//server
const app = express();

//db-connection
connectDB();

//middlewares
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb"}));
app.use(express.urlencoded({extended: false}));
app.use(cors());  

//routes-middlewares
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r ))); 

//port
const port = process.env.PORT || 8000;

//listen
app.listen(port, ()=> console.log(`Server in running on port ${port}`));