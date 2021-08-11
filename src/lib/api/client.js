import axios from 'axios';
import Cookies from 'universal-cookie';
import * as dotenv from 'dotenv';

dotenv.config();

const cookies = new Cookies();
const token = cookies.get('token');

const client = axios.create({
  baseURL: 'http://3.37.42.147/',
});

client.defaults.headers.common['X-AUTH_TOKEN'] = token;

export default client;
