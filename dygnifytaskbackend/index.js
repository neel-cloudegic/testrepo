const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/neelapp",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},() => {
    console.log("DB Connected");
});

const userschema = new mongoose.Schema({
    fname: String,
    lname: String,
    mobile: Number,
    age: Number,
    email: String,
    aadhar: Number,
    bname: String,
    domain: String,
    contact: Number,
    address: String,
    businessemail: String,
    gst: String,
    loantype: String,
    loanamt: Number,
    tenure: Number,
    interest: Number
});

const User = new mongoose.model("User",userschema);

app.post("/loans" , (req,res)=> {
    const {fname,lname,mobile,age,email,aadhar,bname,domain,contact,address,businessemail,gst,loantype,loanamt,tenure,interest} = req.body;
    const user = new User({
        fname,lname,mobile,age,email,aadhar,bname,domain,contact,address,businessemail,gst,loantype,loanamt,tenure,interest
    });

    user.save(err => {
        if(err)
        res.send(err)
        else{
            res.send({message:"Success"});
        }
    })
})

app.listen(9002,()=>{
    console.log("Started at port 9002");
})