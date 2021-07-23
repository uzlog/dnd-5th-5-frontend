import axios from 'axios';
import Cookies from 'universal-cookie';
import * as dotenv from 'dotenv';

dotenv.config();

const cookies = new Cookies();
const token = cookies.get('token');

const client = axios.create({
  baseURL: process.env.REACT_API_SERVER,
});

client.defaults.headers.common['X-AUTH-TOKEN'] = token;

export default client;
