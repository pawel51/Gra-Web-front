import axios from "axios";
import AddCharacter from "../Requests/AddCharacter.js";
import Class from "../Enums/Class.js";
import Races from "../Enums/Race.js";
import {ACCESS_TOKEN_NAME, API_BASE_URL} from "../constants/apiConstants.js";

async function createCharacter(payload, dispatch, action) {

    const characterModel = new AddCharacter()
    characterModel.classes.id = Class[payload.classId]
    characterModel.classEnum = payload.classId
    characterModel.img = payload.img
    characterModel.race.id = Races[payload.raceId]
    characterModel.raceEnum = payload.raceId


    const config = {
        method: 'post',
        url: `${API_BASE_URL}/character/add`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_NAME)}`,
            'Content-Type': 'application/json'
        },
        data : characterModel
    };

    axios(config)
        .then(function (response) {
            if(response.status !== 200)
                console.log(response.status)
            //dodanie stats id do
            dispatch(action(response.data.stats.id))
        })
        .catch(function (error) {
            console.log("Error while fetching basic character data from server  "+error)
        });
}

export {createCharacter}