import * as API_Constants from './API_Constants';
import axios from 'axios';

export const getFastRiderRides = async () => {

    const { data } = await axios.get(API_Constants.API_BASE_URL + 'rides', { params: { token: API_Constants.API_KEY } });
    console.log(data);
    return data;

};

export const postChosenRide = async (requiredDataToPost) => {

    const { data } = await axios.post(API_Constants.API_BASE_URL + 'tickets', {

        params: requiredDataToPost
          

    });

    console.log(data);
    return data;

};