import React, {useState} from "react"
import {Link} from "react-router-dom";
import signuppic from "../components/Signup/signuppic.jpg";


const signup = (props) => {
  
  
  return (
        <div>
            <Navbar />
            <div className="mt-5 p-5 text-left signupcontainer">
                <div className="row px-3">
                    <div class="col-lg-10 col-xl-9 card flex-row mx-auto shadow p-3 mb-5 bg-white rounded ">
                        <div className="d-none d-md-flex loginimage">
                            <div class="signupbutton-box">
                                <div>
                                    <br/>
                                </div>
                                <img src={signuppic} className="float-left signuppic" alt="signuppic"></img>
                            </div>
                        </div>
                        <form className="loginform-box px-3 row g-3">
                            <div>
                               
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="First name"  name="firstname"
                                       />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Last name"  name="lastname"
                                      />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" placeholder="email"  name="email"
                                       />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Phone Number"  name="contactNumber"
                                       />
                            </div>
                            <div className="col-md-6">
                                <input type="password" className="form-control" placeholder="Password" name="password"
                                       />
                            </div>
                            <div className="col-md-6">
                                <input type="password" className="form-control" placeholder="ReEnter Password"  name="repassword"
                                />
                            </div>
                           
                            <br></br>
                            <div className="col-6 mt-3 mx-auto text-center loginbtn">
                                <button className="btn btn-primary" type="submit" >Signup</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default signup
