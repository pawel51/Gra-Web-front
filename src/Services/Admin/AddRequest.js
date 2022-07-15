import axios from 'axios'
import {ACCESS_TOKEN_NAME, API_BASE_URL} from "../../constants/apiConstants.js";


const add = (path, data) => {


    var config = {
        method: 'post',
        url: `${API_BASE_URL}${path}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_NAME)}`,
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            alert("Successfully added item")
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default add