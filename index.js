const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require("dotenv");
const connectDB = require('./config/db.js');
const userRoutes = require("./routes/userRoute.js");
const productRoutes = require("./routes/productRoute.js");
const cartRoutes = require("./routes/cartRoute.js");
const orderRoutes = require("./routes/orderRoute.js");
// data imports

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));
app.use(cors());

const port = process.env.SERVER_PORT;

/* ROUTES */
app.get("/", (req, res) => {
  res.send("Welcome to Ecom...!!");
});
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/carts", cartRoutes);
app.use("/orders", orderRoutes);

/* SERVER SETUP */
(async() =>{
  connectDB().then((status) =>{
    if(status){
        app.listen(port, () => console.log(`Server started on port ${port}`));
    }
    else {
      console.log("Unable to start server");
    }
  })
})()