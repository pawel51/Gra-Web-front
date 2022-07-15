import axios from "axios";
import {ACCESS_TOKEN_NAME, API_BASE_URL} from "../constants/apiConstants.js";
import {getClassNameById} from "../Enums/Class.js";
import {getRaceNameById} from "../Enums/Race.js";

const getCharacterBasic = (dispatch, action) => {


    const config = {
        method: 'get',
        url: `${API_BASE_URL}/character`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_NAME)}`,
            'Content-Type': 'application/json'
        }
    };

    const character = {
        "img": "",
        "user": {
            "id": 0
        },
        "race": {
            "id": 0
        },
        "classes": {
            "id": 0
        },
        "stats": {
            "id": 0
        },
        "characterEquipment": {
            "id": 0
        },
        "freePoints": 0
    }

    axios(config)
        .then(response => {
            let character = response.data
            let classes = getClassNameById(character.classes.id)
            let races = getRaceNameById(character.race.id)

            let filePath = `${classes}-${races}`

            character.img = `${filePath}`
            dispatch(action(character))
        })
        .catch(function (error) {
            console.log(error);
        })

}

export {getCharacterBasic}