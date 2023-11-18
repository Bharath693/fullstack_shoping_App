const express = require('express');
var bodyParser= require('body-parser');
const env = require('./config/envConfig')
const app = express();
const connect = require('./config/db');
const userRoutes = require('./routers/Users/userRouters');
const categoryRoutes = require('./routers/Category/CategoryRoutes');
const productRoutes = require('./routers/Product/ProductRoutes')
const homePageRoutes = require('./routers/HomeProducts/HomeProductsRoutes')
const cors = require('cors')


//database connection
connect();

//add middelware
app.use(bodyParser.urlencoded({extended: true })); //if false then parse only strings
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.json({msg:"The api's are getting ready"})
});

//cors
app.use(cors())

//user routes
app.use(userRoutes);

//category routes
app.use("/api",categoryRoutes);

//Product routes
app.use("/api",productRoutes);

//HomePage routes
app.use("/api",homePageRoutes);


const port = env.PORT || 5000;

app.listen(port,() =>{
    console.log("app is running at port Number: "+port)
})