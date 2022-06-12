import { useState } from "react";

const Tab2 = ({userdetails,setUserDetails}) => {

    const handlechange = (e) => {
        const {name,value} = e.target;
        setUserDetails({...userdetails,[name]: value})
        
    }

    return(
        <form className="fullform" >
            {console.log(userdetails)}
                            <div>
                                <input name="bname" value={userdetails.bname} onChange={handlechange} type="text" placeholder="Business Name"/>
                                <input name="domain" value={userdetails.domain} onChange={handlechange} type="text" placeholder="Business Domain"/>
                            </div>
                            <div>
                                <input name="contact" value={userdetails.contact} onChange={handlechange} type="phone" placeholder="Contact Number"/>
                                <input name="address" value={userdetails.address} onChange={handlechange} type="text" placeholder="Address"/>
                            </div>
                            <div>
                                <input name="businessemail" value={userdetails.businessemail} onChange={handlechange} type="email" placeholder="Business Email"/>
                                <input name="gst" value={userdetails.gst} onChange={handlechange} type="number" placeholder="GST Number"/>
                            </div>

                            <button>Save & Next</button>
                    </form>
    );
}

export default Tab2;