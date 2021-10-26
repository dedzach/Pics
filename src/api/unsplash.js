import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID DvjbVHW1IKXrBuY8QKT9bqRFGjV4266BhjaDlYTOV9k',
      }

});