import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiConstants';

const changeusername = (username) => {

var axios = require('axios');
var data = JSON.stringify({
  username
});

var config = {
  method: 'put',
  url: `${API_BASE_URL}/user/updateUserName`,
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
export default changeusername;