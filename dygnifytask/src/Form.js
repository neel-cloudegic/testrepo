import { useState } from "react";
import Navbar from "./Navbar";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const Form = () => {

    const [set1,setSet1] = useState(true);
    const [set2,setSet2] = useState(false);
    const [set3,setSet3] = useState(false);
    const [title,setTitle] = useState("Personal Details");
    const [userdetails,setUserDetails] = useState({
        fname: "",
        lname: "",
        mobile: "",
        age: "",
        email: "",
        aadhar: "",
        bname: "",
        domain: "",
        contact: "",
        address: "",
        businessemail: "",
        gst: "",

    }) 

    const handletabs = (e) => {
        document.getElementById(e.target.id).style.borderBottomColor = "#2B2B2B";
        document.getElementById(e.target.id).style.backgroundColor = "#2B2B2B";

        if(e.target.id === "btn0")
        {
            document.getElementById("btn1").style.borderBottomColor = "rgb(118, 118, 118)";
            document.getElementById("btn1").style.backgroundColor = "#443f3f";
            document.getElementById("btn2").style.borderBottomColor = "rgb(118, 118, 118)";
            document.getElementById("btn2").style.backgroundColor = "#443f3f";
            setSet1(true);
            setSet2(false);
            setSet3(false);
            setTitle("Personal Details");
        }
        else if(e.target.id === "btn1")
        {
            document.getElementById("btn0").style.borderBottomColor = "rgb(118, 118, 118)";
            document.getElementById("btn0").style.backgroundColor = "#443f3f";
            document.getElementById("btn2").style.borderBottomColor = "rgb(118, 118, 118)";
            document.getElementById("btn2").style.backgroundColor = "#443f3f";
            setSet2(true);
            setSet1(false);
            setSet3(false);
            setTitle("Business Details");
        }
        else
        {
            document.getElementById("btn1").style.borderBottomColor = "rgb(118, 118, 118)";
            document.getElementById("btn1").style.backgroundColor = "#443f3f";
            document.getElementById("btn0").style.borderBottomColor = "rgb(118, 118, 118)";
            document.getElementById("btn0").style.backgroundColor = "#443f3f";
            setSet3(true);
            setSet2(false);
            setSet1(false);
            setTitle("Loan Details");
        }
        
    }


    return(
        
        <div className="fullpage">
            <Navbar/>
            <div className="headingform">Loan Form Filling</div>
            <div className="middle">
                <div className="tabs">
                    <button onClick={handletabs} id="btn0" className="tbs tab1">Step 1</button>
                    <button onClick={handletabs} id="btn1" className="tbs tab2">Step 2</button>
                    <button onClick={handletabs} id="btn2" className="tbs tab3">Step 3</button>
                </div>
                <div className="actual"> 
                    <div className="forming">{title}
                        {set1 && <Tab1 userdetails={userdetails} setUserDetails={setUserDetails}/>}
                        {set2 && <Tab2 userdetails={userdetails} setUserDetails={setUserDetails}/>}
                        {set3 && <Tab3 userdetails={userdetails} setUserDetails={setUserDetails}/>}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Form;