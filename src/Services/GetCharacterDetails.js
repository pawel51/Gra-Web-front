import axios from "axios";
import {ACCESS_TOKEN_NAME, API_BASE_URL} from "../constants/apiConstants.js";

const getCharacterDetails = (statsId, dispatch, action) => {


    const config = {
        method: 'get',
        url: `${API_BASE_URL}/stats/${statsId}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_NAME)}`,
            'Content-Type': 'application/json'
        }
    };

    axios(config)
        .then(response => {
            dispatch(action(response.data))
        })
        .catch(function (error) {
            console.log("Error w6hile fetching stats from server  "+error)
        })

}

export {getCharacterDetails}