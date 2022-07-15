import axios from 'axios';
import React, { Component } from 'react';
import {ACCESS_TOKEN_NAME, API_BASE_URL} from "../../constants/apiConstants.js";
import {Table} from 'react-bootstrap';
import characterdelete from './CharacterDelete.js';
import "../../Styles/App.css"
import { NotificationContainer,NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css'
import NavigationBar from "../Navigation/NavigationBar.js";
import {withRouter} from "react-router-dom";

 class CharacterList extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          characters: []
       }
     }

     

     componentDidMount(){
        axios.get(`${API_BASE_URL}/character/all`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_NAME)}`
            }
        })
        .then(response => {
            console.log(response)
            this.setState({characters: response.data})
        })
        .catch(error => {
            console.log(error)
        })
     }
     createNotification(message) {
        NotificationManager.success('Success', message);
      }
     
     
  render() {
      const {characters} = this.state
    return (
      <div className="content">
          <NavigationBar className={"topbarnavigation"}/>
        <div className="header" align = "center"> List of characters</div>
        <Table striped bordered>
          <thead>
            <tr align="center">
              <th> Id</th>
              <th> Username</th>
              <th>Class</th>
              <th>Race</th>
              <th>Free Points</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {characters.length
              ? characters.map((character) => (
                  <tr>
                   <td> {character.id} </td>
                    <td>{character.userName}</td>
                    <td> {character.classesName}</td>
                    <td> {character.raceName}</td>
                    <td> {character.freePoints}</td>
                    <td><button onClick={() => {characterdelete(character.id); this.createNotification('Pomyslnie usunieto');}}> Usun Postac </button> <NotificationContainer/></td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CharacterList;
