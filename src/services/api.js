// src/api.js

import axios from 'axios';

const API_URL = 'https://api.fakefoodservice.com';

export const getRestaurants = async () => {
    const response = await axios.get(`${API_URL}/restaurants`);
    return response.data;
};

export const getRestaurantDetails = async (id) => {
    const response = await axios.get(`${API_URL}/restaurants/${id}`);
    return response.data;
};

export const getMenuItems = async (id) => {
    const response = await axios.get(`${API_URL}/restaurants/${id}/menu`);
    return response.data;
};

export const addRestaurant = async (restaurant) => {
    const response = await axios.post(`${API_URL}/restaurants`, restaurant);
    return response.data;
};

export const addMenuItem = async (restaurantId, menuItem) => {
    const response = await axios.post(`${API_URL}/restaurants/${restaurantId}/menu`, menuItem);
    return response.data;
};
