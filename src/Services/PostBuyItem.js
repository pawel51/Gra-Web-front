import axios from 'axios'
import {ACCESS_TOKEN_NAME, API_BASE_URL} from "../constants/apiConstants.js";

const postBuyItem = (id, slotId, dispatch, setBoughtItem) => {


    const config = {
        'method': 'put',
        'url': `${API_BASE_URL}/item/buy/${id}`,
        'headers': {
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_NAME)}`,
            'Content-Type': 'application/json'
        }
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            dispatch(setBoughtItem({id: slotId, value: response.data}))
        })
        .catch(function (error) {
            console.log(error);
        });


    // const configForItem = {
    //     method: 'get',
    //     url: `${API_BASE_URL}/item/${id}`,
    //     headers: {
    //         'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_NAME)}`,
    //         'Content-Type': 'application/json'
    //     }
    // };
    // axios(configForItem)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });



}

export default postBuyItem