import axios from 'axios';
import changeusername from './ChangeUsername';
import React,{Component} from 'react';
import {FloatingLabel, Form, Container, Row, Col, Button, NavItem, NavLink} from 'react-bootstrap';
import Class, { getClassIdByName } from "../../Enums/Class.js";
import changecharacterclass from "./ChangeCharacterClass";
import "../../Styles/Welcome.css";
import "./charactersettings.css";
import "../CharacterDetails/details.css";
import NavigationBar from "../Navigation/NavigationBar.js";


class CharacterSettings extends Component{

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            id: "ARCHER",
            history: props.history
        }
        this.updateInput = this.updateInput.bind(this);
        this.updateClass = this.updateClass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectToLogin = this.redirectToLogin.bind(this);
    }

    updateInput(event){
        this.setState({username : event.target.value})
        }
        
    updateClass(event){
        this.setState({id : event.target.value})
    }

    handleSubmit(){
    console.log('Your input value is: ' + this.state.username)
    //Send state to the server code
    }
    
    redirectToLogin = () => {
        this.props.history.push('..')
    }

    render ()
    {
        return (
            

        <div className='detailsBackground'>
            <NavigationBar className={"topbarnavigation"} history={this.state.history}/>
            <div className='settings'>
                <label for="username">New username: </label>
                <input className='settingsinput outline' placeholder='Enter new username...' type="text" id="username" name="username" onChange={this.updateInput}></input>
                <a href='..'>
                    <button className='submitbutton' onClick={() => {changeusername(this.state.username)}}>Submit new username</button>
                </a>
                <span className='settingsspan'></span>
                    <label>Choose new class:</label>
                        <Form.Select className="settingscombobox outline" onChange={(e) => {this.setState({id : e.target.value})}}>
                            {Object.keys(Class).map((v) => {
                                return (
                                    <option id={v}>
                                        {v}
                                    </option>
                                )
                            })}
                        </Form.Select>
                    <div className={`classImg ${this.state.id}img`}></div>
                {/* <button onClick={changeusername(this.state.username)}>Submit</button> */}
                <button className='submitbutton' onClick={() => {changecharacterclass(getClassIdByName(this.state.id))}}>Submit new class</button>
                
            </div>
        </div>
        );
    }
}
export default CharacterSettings;

