import express from "express";
import connectToMongo from "./db.js";
import router from "./routes/auth.js";
// import auth from "./routes/auth.js";



const app = express();
const port = 5000;

connectToMongo();

// Available Router
app.use('/api/auth', router)


app.listen(port, () => {
    console.log("server is working")
})