import express from "express";
import connectToMongo from "./db.js";
import auth from "./routes/auth.js";
import cors from "cors";

const app = express();
const port = 5000;

connectToMongo();

app.use(cors())
app.use(express.json());

// Available Router
app.use('/api/auth', auth)


app.listen(port, () => {
    console.log("server is working")
})