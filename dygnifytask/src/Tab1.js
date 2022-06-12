
const Tab1 = ({userdetails,setUserDetails,handlechange}) => {

    

    return(
        <>
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
                            <button >Save & Next</button>
                    </>
    );
}

export default Tab1;