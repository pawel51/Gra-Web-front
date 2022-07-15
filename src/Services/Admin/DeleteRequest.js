import axios from 'axios'
import {ACCESS_TOKEN_NAME, API_BASE_URL} from "../../constants/apiConstants.js";


const deleteItem = (path, id) => {


    var config = {
        method: 'delete',
        url: `${API_BASE_URL}${path}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_NAME)}`,
            'Content-Type': 'application/json'
        },
        data : id
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default deleteItem