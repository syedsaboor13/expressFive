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

// 2. req.params


app.post("/students/:id", (req, res)=>{
    try {
        let myStudent = req.params.id
        console.log(myStudent);
        res.status(200).json({msg : `I am ${myStudent} API`})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
        
    }
})

// 3. req.query

// data will be send via key value pair with ?

app.post("/user", (req,res)=> {
    try {
        let data = req.query;
        let myName = req.query.myName;
        let age = req.query.age;
        let isAlive = req.query.isAlive;
        console.log(myName, age, isAlive);

        res.status(200).json({ msg: data })

    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})


app.listen(PORT , ()=>{
    console.log("Server is Live");
})