import {ACCESS_TOKEN_NAME, API_BASE_URL} from "../constants/apiConstants.js";
import axios from "axios";

const postSellItem = (id, slotId, dispatch, deleteSoldItem) => {
    const data = {
        "idItem": {
            "id": id
        }
    };

    const config = {
        'method': 'delete',
        'url': `${API_BASE_URL}/item/sell`,
        'headers': {
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_NAME)}`,
            'Content-Type': 'application/json'
        },
        'data': data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));

        })
        .catch(function (error) {
            console.log(error);
        });

    dispatch(deleteSoldItem(slotId))
}

export default postSellItem