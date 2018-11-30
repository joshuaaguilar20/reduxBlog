import axios from 'axios';

export default axios.create({
  //Allows you to use without making a baserequest Everytime* 
  baseURL: 'https://jsonplaceholder.typicode.com'
});
