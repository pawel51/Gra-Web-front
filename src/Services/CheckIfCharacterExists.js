import axios from "axios";
import {ACCESS_TOKEN_NAME, API_BASE_URL} from "../constants/apiConstants.js";

const checkIfCharacterExists = async () => {


    const config = {
        method: 'get',
        url: `${API_BASE_URL}/auth/character`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_NAME)}`,
            'Content-Type': 'application/json'
        }
    };

    return await axios(config)
        .then(response => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        })

}

export {checkIfCharacterExists}