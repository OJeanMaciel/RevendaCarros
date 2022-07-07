import '../css/header.css';
import '../services/api.js';
function Body() {

    
    const axios = require('axios');
  
    const sendGetRequest = async () => {
        try {
            const resp = await axios.get('https://jkflix.herokuapp.com/carros');
            console.log(resp.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
    sendGetRequest();

    return (
        <div >
            <p>{axios}</p>
        </div>
      );
    }
    
    export default Body;
    