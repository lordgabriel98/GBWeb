import "dotenv/config";
import express from "express";
import contactRoute from "./routes/contact";


const app = express();

app.use(express.json());

app.use("/api/contact", contactRoute);

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})
