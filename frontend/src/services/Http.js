import axios from 'axios';

const Http = axios.create({
  baseURL: 'https://localhost:7207',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Http;