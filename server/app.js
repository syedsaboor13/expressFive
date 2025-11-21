import express, { json } from "express"
import dotenv from "dotenv"
dotenv.config()


const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())

app.get("/", (req,res)=>{
    try {
    let a = 10
    console.log(a);
    res.status(200).json({data : a})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
    
})

app.post("/login", (req, res)=>{
    try {
        let userInput = req.body
        console.log(userInput);
        res.status(200).json({msg : 'Account Created'})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
        
    }
})

app.put("/update", (req,res)=>{
    try {
        let updatedData = req.body
        console.log(updatedData);
        res.status(200).json({msg : "Account Updated"})


    } catch (error) {
        console.log(error);
        res.status(500),json({msg : error})
    }
})

app.delete("/delete", (req,res)=>{
    try {
        let userData = req.body
        let userEmail = userData.email
        console.log(userEmail);
        res.status(200).json({msg : "User Account Deleted"})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})


app.listen(PORT , ()=>{
    console.log("Server is Live");
})