import axios from 'axios';

const KEY = 'AIzaSyAj_4VD_IwTD0A8pVY7b5juYrZHqzXLREA';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY
   }
});