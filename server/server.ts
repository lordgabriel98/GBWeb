import "dotenv/config";
import express from "express";
import contactRoute from "./routes/contact";


const app = express();

app.use(express.json());

app.use("/api/contact", contactRoute);

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})

console.log("SMTP HOST:", process.env.SMTP_HOST);
console.log("SMTP PORT:", process.env.SMTP_PORT);
console.log("SMTP USER:", process.env.SMTP_USER);