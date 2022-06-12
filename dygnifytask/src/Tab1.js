
const Tab1 = ({userdetails,setUserDetails}) => {

    const handlechange = (e) => {
        const {name,value} = e.target;
        setUserDetails({...userdetails,[name]: value});
    }

    return(
        <form className="fullform" >
            {console.log(userdetails.fname)}
                            <div>
                                <input value={userdetails.fname} name="fname" onChange={handlechange} type="text" placeholder="First Name"/>
                                <input value={userdetails.lname} name="lname" onChange={handlechange} type="text" placeholder="Last Name"/>
                            </div>
                            <div>
                                <input value={userdetails.mobile} name="mobile" onChange={handlechange} type="phone" placeholder="Mobile Number"/>
                                <input value={userdetails.age} name="age" onChange={handlechange} type="number" placeholder="Age"/>
                            </div>
                            <div>
                                <input value={userdetails.email} name="email" onChange={handlechange} type="email" placeholder="Email Address"/>
                                <input value={userdetails.aadhar} name="aadhar" onChange={handlechange} type="number" placeholder="Aadhar Card Number"/>
                            </div>
                            <div>
                                <label htmlFor="formFile">Signature Proof</label>
                                <input type="file" id="formFile"/>
                                </div>
                            <div>
                                <label htmlFor="formFile">Address Proof</label>
                                <input type="file" id="formFile"/>
                            </div>
                            <button>Save & Next</button>
                    </form>
    );
}

export default Tab1;