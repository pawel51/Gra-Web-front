import {ACCESS_TOKEN_NAME, API_BASE_URL} from "../constants/apiConstants.js";
import axios from "axios";


const updateStats = (stats, freePoints, dispatch, setAllStats) => {


    const config = {
        'method': 'put',
        'url': `${API_BASE_URL}/stats/update/${freePoints}`,
        'headers': {
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_NAME)}`,
            'Content-Type': 'application/json'
        },
        'data': stats
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            dispatch(setAllStats(response.data))
        })
        .catch(function (error) {
            console.log(error);
        });



}

export default updateStats