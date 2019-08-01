import axios from 'axios';

// const KEY = 'your api key';
// import KEY from '../config/config';
const config = {
    baseURL:'https://www.googleapis.com/youtube/v3',
}
export default axios.create(config);
