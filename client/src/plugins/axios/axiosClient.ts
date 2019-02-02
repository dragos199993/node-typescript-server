import axios from 'axios';
import { baseURL } from '../../constants/runtimeConfig';

export const axiosClient: any = axios.create({
    baseURL
});
