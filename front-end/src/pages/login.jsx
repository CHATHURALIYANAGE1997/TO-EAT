import React from "react";
import {Link} from "react-router-dom";
import signinpic from "../components/Signin/signinpic.jpg";
import { useState } from "react";


const Login = (props) => {

const [error, setError] = useState();
    const [show, setShow] = useState(true);

    const initialState = {

        email: "",
        password: "",
    };

    const [user, setUser] = useState(initialState);

    const credentialChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
        
    };


return (
<div>
            <div className="mt-5 p-5 text-left signincontainer">
                <div className="row px-3">
                    <div class="col-lg-10 col-xl-9 card flex-row mx-auto shadow p-3 mb-5 bg-white rounded ">
                        <div className="d-none d-md-flex loginimage">
                            <img src={signinpic} className="float-left signinpic" alt="signuppic"></img>
                        </div>
                        <form class="loginform-box px-3 row g-3">
                            <div className="login-body">
                                <h1 className="p-2 text-center">Hello, <br></br>Welcome TO-EAT</h1>
                                {/* <form class="loginform-box px-3 row g-3"> */}
                                <div class="loginform-input col-12">

        
                                </div>
                                <div class="col-12">
                                    <br></br>
                                    <div class="loginform-input">
                                        <input type="email" class="form-control" placeholder="Email-Address" />
                                    </div>
                                </div>

                            </div>
                            <div class="col-12">
                                <br></br>
                                

                            </div>
                            <div class="loginform-input">
                               
                                <input className="password-field" type="password" class="form-control" placeholder="Password"  />

                            </div>
                            <div class="col-6">
                                <div class="mt-3 form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="mt-3 form-check">

                                   <Link to={}>Forgot Password</Link>
                                </div>
                            </div>
                            <div class="col-6 mt-3 mx-auto text-center loginbtn">
                                <button class="btn btn-primary" type="submit" type="button" variant="success"  >Login</button>
                            </div>
                            <hr ></hr>
                            <div class="text-center mb-2">
                                Don't have an account? <Link to={}>Register Here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div >
        )
        }
        
export default Login        
