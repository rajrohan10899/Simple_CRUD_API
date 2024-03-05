const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API");
})

//Database Connection
mongoose.connect("mongodb+srv://rohanraj091099:PF1BGBm31qYz98O4@backenddb.xvde3s0.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB").then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
    console.log("Database is connected!");
})
.catch(() => {
    console.log("Database is not connected");
});