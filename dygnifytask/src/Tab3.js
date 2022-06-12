import axios from "axios";
const Tab3 = ({userdetails,setUserDetails,handlechange}) => {

    const handleSubmit = () => {
        axios.post("http://localhost:9002/loans",userdetails)
        .then(res => console.log(res));
    }


    return(
        <>
            {console.log(userdetails)}
                            <div>
                            <select name="loantype" value={userdetails.loantype} onChange={handlechange}> 
                                <option >Personal Loan</option>
                                <option >Auto Loan</option>
                                <option >Home Loan</option>
                                <option >Gold Loan</option>
                                <option >Student Loan</option>
                            </select>
                            <input name="loanamt" value={userdetails.loanamt} onChange={handlechange} type="number" placeholder="₹ Loan Amount"/>
                            </div>
                            <div>
                                <input name="tenure" value={userdetails.tenure} onChange={handlechange} type="number" placeholder="Tenure"/>
                                <input name="interest" value={userdetails.interest} onChange={handlechange} type="number" placeholder="Interest (%)"/>
                            </div>

                            <button onClick={handleSubmit}>Submit</button>
                    </>
    );
}

export default Tab3;