

const Tab3 = () => {

    return(
        <form className="fullform" >
                        <div>
                            <div>
                                <input type="text" placeholder="First Name"/>
                                <input type="text" placeholder="Last Name"/>
                            </div>
                            <div>
                                <label for="formFile">Identity Proof</label>
                                <input type="file" id="formFile"/>
                                </div>
                            <div>
                                <label for="formFile">Address Proof</label>
                                <input type="file" id="formFile"/>
                            </div>
                        </div>
                    </form>
    );
}

export default Tab3;