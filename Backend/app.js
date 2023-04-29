const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
require("dotenv").config();


const app = express();
const cors = require("cors");

const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());


app.use("/books", router);



const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

const url = process.env.URI;
mongoose
    .connect(url)
    .then(() => {
        console.log("Connected to the database ");
    })
    .catch((err) => {
        console.error(`Error connecting to the database. ${err}`);
    });