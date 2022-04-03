import { application } from "express";
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const Port =mprocess.env.PORT;

const mobiles = [
    {
      model: "OnePlus 9 5G",
      img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
      company: "Oneplus"
    },
    {
      model: "Iphone 13 mini",
      img:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
      company: "Apple"
    },
    {
      model: "Samsung s21 ultra",
      img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
      company: "Samsung"
    },
    {
      model: "xiomi mi 11",
      img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
      company: "xiomi"
    }
  ];
  const MONGO_URL = process.env.MONGO_URL;
async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongdb is Connected ✌😊");
    return client;
  }
  
  const client = await createConnection();


app.get("/", function (req, res){
 res.send("Hellow World 👍❤😊🙌🙌😁");
});


app.get("/", function (req, res){
    res.send();
   });
//Mobile
app.listen(PORT , ()=> console.log("App start in 😁", PORT));