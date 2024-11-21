const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcryptjs=require("bcryptjs")
const Signup=require("./models/Signup")
const Feedback=require("./models/Feedback");
const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/tyre', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.post("/user/signup",async(req,res)=>{
    try {
      const {name,email,password}=req.body;
      const signup=await Signup.findOne({email})
      if(signup){
        return res.status(400).json({message:"Email already exists"})
      }
  
      const hashPassword=await bcryptjs.hash(password,10)
  
      const newSignup=new Signup({
        name:name,
        email:email,
        password:hashPassword,
      })
  
      await newSignup.save()
  
      res.status(201).json({message:"User Created Successfully"})
  
    } catch (error) {
      console.log("Error :",error.message)
      res.status(500).json({message:"Internal Server Error"})
    }
  })

  app.post("/user/login",async(req,res)=>{
    try {
     const {email,password}=req.body;
     const signup=await Signup.findOne({email})
   
     const isMatch=await bcryptjs.compare(password,signup.password)
   
     if(!signup || !isMatch){
       res.status(400).json({message:"Invalid Email or Password"})
     }
     else{
       res.status(200).json({message:"Login Successfull",
         signup:{
           _id:signup._id,
           name:signup.name,
           email:signup.email,
         }
     })
     }
    } catch (error) {
     console.log("Error :",error.message)
     res.status(400).json({message:"Invalid Email or Password"})
    }
   })

   app.post("/user/feedback", async (req, res) => {
    try {
      const { name, email, favouriteteam, feedback, rating } = req.body;
  
  
      if (!name || !email || !favouriteteam || !feedback || !rating) {
        return res.status(400).json({ message: "Missing required fields" });
      }
  

      const existingFeedback = await Feedback.findOne({ email });
      if (existingFeedback) {
        return res
          .status(400)
          .json({ message: "Feedback already submitted for this email" });
      }
  
   
      const newFeedback = new Feedback({
        name,
        email,
        favouriteteam,
        feedback,
        rating,
      });
  
      const savedFeedback = await newFeedback.save();
      if (!savedFeedback) {
        return res.status(500).json({ message: "Failed to save feedback" });
      }
  
      
      res.status(200).json({ message: "Feedback data saved successfully" });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ message: "Server error" });
    }
  });
 

app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`)
})