import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID XtV7noD_ybObHGJefHTv1iJo25bBBktVIhqrDVHWnSY'
  }, 
});
