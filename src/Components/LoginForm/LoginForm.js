import React, {useState} from 'react';
import axios from 'axios';
import '../../Styles/Welcome.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";
import TitleText from "../../Images/Text/title.svg";
import {Image} from "react-bootstrap";
import {checkIfCharacterExists} from "../../Services/CheckIfCharacterExists.js";

function LoginForm(props) {
    const [state , setState] = useState({
        // email : "",
        userName: "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "userName":state.userName,
            "password":state.password,
        }

        const config = {
            'method':'POST',
            'url': API_BASE_URL+'/auth/login',
            'data': payload,
            'headers': {}
        }

        axios.request(config)
            .then(function (response) {
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                    sessionStorage.setItem("UserId", response.data.id)
                    redirectToHome();
                    props.showError(null)
                }
                else if(response.code === 204){
                    props.showError("Username and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const redirectToHome = async () => {
        const exist = await checkIfCharacterExists()

        if (exist > 0){
            props.history.push('/details');
        }

        else
            props.history.push('/create')



    }
    const redirectToRegister = () => {
        props.history.push('/register'); 
        props.updateTitle('Register');
    }
    return(

        <div className={"WelcomeScreen"}>
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
                        {/*<label htmlFor="exampleInputEmail1">Email address</label>*/}
                        {/*<input type="email"*/}
                        {/*       className="form-control"*/}
                        {/*       id="email"*/}
                        {/*       aria-describedby="emailHelp"*/}
                        {/*       placeholder="Enter email"*/}
                        {/*       value={state.email}*/}
                        {/*       onChange={handleChange}*/}
                        {/*/>*/}
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
                    <div className="form-check">
                    </div>

                    <button
                        type="submit"
                        className="welcomeButton loginButton"
                        onClick={handleSubmitClick}
                    >Login</button>
                </form>
                <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                    {state.successMessage}
                </div>
                <div className="registerMessage">
                    <span>Don't have an account? </span>
                    <span className="loginText" onClick={() => redirectToRegister()}>Register</span>
                </div>
            </div>
        </div>



    )
}

export default withRouter(LoginForm);