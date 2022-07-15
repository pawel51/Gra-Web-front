import React, {useState} from 'react';
import axios from 'axios';
import '../../Styles/Welcome.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";
import TitleText from "../../Images/Text/title.svg";
import {Image} from "react-bootstrap";
import {checkIfCharacterExists} from "../../Services/CheckIfCharacterExists.js";

function RegistrationForm(props) {
    const [state , setState] = useState({
        userName: "",
        email : "",
        password : "",
        confirmPassword: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            props.showError(null);
            const payload={
                "userName":state.userName,
                "email":state.email,
                "password":state.password,
            }

            const config = {
                'method': 'POST',
                'url': API_BASE_URL+'/auth/register',
                'data': payload
            }

            axios.request(config)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                        redirectToHome();
                        props.showError(null)
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    if(error.status === 500){
                        props.showError("User already exists in database")
                    }
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
        }
        
    }
    const redirectToHome = () => {
        if (checkIfCharacterExists() > 0)
            props.history.push('/details');
        else
            props.history.push('/create')

    }
    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login'); 
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        }
    }
    return(
        <div className="WelcomeScreen">
            <Image className={"titleText"} src={TitleText}/>
            <div className={"centerButtons"}>
                <form>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputLogin1">Login</label>
                        <input type="text"
                               className="form-control"
                               id="userName"
                               placeholder="Enter login"
                               value={state.userName}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email"
                               className="form-control"
                               id="email"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"
                               value={state.email}
                               onChange={handleChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password"
                               className="form-control"
                               id="password"
                               placeholder="Password"
                               value={state.password}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        <input type="password"
                               className="form-control"
                               id="confirmPassword"
                               placeholder="Confirm Password"
                               value={state.confirmPassword}
                               onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="welcomeButton registerButton"
                        onClick={handleSubmitClick}
                    >
                        Register
                    </button>
                </form>
                <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                    {state.successMessage}
                </div>
                <div className="mt-2">
                    <span>Already have an account? </span>
                    <span className="loginText" onClick={() => redirectToLogin()}>Login here</span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(RegistrationForm);