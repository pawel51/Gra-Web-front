import {ACCESS_TOKEN_NAME, API_BASE_URL} from "../../constants/apiConstants.js";

const characterdelete = (id) => {

var axios = require('axios');
var data = JSON.stringify({
  id
});

var config = {
  method: 'delete',
  url: `${API_BASE_URL}/character/delete`,
  headers: { 
    'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_NAME)}`, 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


}
export default characterdelete;