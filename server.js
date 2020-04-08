const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const Order = require("./models/Order");
const Product = require("./models/Product");
// Connect to the Mongo DB
var mongodb_url = process.env.MONGO_URL || "mongodb://localhost:27017/local";
mongoose.connect( mongodb_url, { useNewUrlParser: true });
var dessert = mongoose.connection;

//test mongooes
dessert.on("error", function(err){
  console.log("mongoose err: " + err);
});
dessert.once("open", function(){
  console.log("Mongoose connection successful.");
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }


// Define API routes here
//productInfo에서 이 API를 사용
//데이터베이스에서 정보를 넣어준다. 
app.post("/orders/:productId", (req, res) => {
  //console.log(req.params.id);
  console.log(req.body)
  Order.create({
    productId:req.params.productId,
    customerName: req.body.customerName,
    isChecked: false,
    date: new Date() //constructor
  }).then((data)=>{
    //console.log('order productId data'+data);
    res.json(data);
  });
});

//데이터베이스에서 정보를 읽는다. 
app.get("/orders", (req, res) => {
  console.log(req);
  Order.find().then((data)=>{
    console.log('order data' + data);
    res.json(data);
    });
  });

app.get("/products", (req, res) => {
  console.log(req);
  Product.find().then((data)=>{
    console.log('products data' + data);
    res.json(data);
  });
});

app.post("/products", (req, res)=> {
  Product.create({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    desc: req.body.desc
  }).then((data)=>{
    console.log('products data' + data);
    res.json(data);
  });
})

//데이터 베이스에 정보를 업데이트(수정) 한다.
app.put("/checked_order", (req, res)=> {
  console.log(req);
  Order.findOneAndUpdate({
    _id: req.body.orderId
  }, {isChecked: true}).then((data)=>{
    res.json(data);
  });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
