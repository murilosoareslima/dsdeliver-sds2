import axios from "axios";

const API_URL = 'https://curso-dev-superior.herokuapp.com';

export function fetchOrders() {
    return axios(`${API_URL}/orders`);
}