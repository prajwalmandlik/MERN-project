import mongoose from "mongoose";

const connectToMongo = () =>{
        mongoose.connect("mongodb://127.0.0.1:27017", { 
        dbName: "Adhikar" 
    }).then(() => console.log("Database Connected")).catch((e)=> console(e));
}

export default connectToMongo ;