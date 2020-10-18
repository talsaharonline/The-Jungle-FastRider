import * as API_Constants from './API_Constants';
import axios from 'axios';

export const getFastRiderRides = async () => {

    const { data } = await axios.get(API_Constants.API_BASE_URL + 'rides',
        { params: { token: API_Constants.API_KEY } });

    return data;

};

export const postChosenRide = async (userPIN, chosenCardRideID) => {

    let requiredPayloadToPost = {

        pin: userPIN,
        ride_id: chosenCardRideID,
        token: API_Constants.API_KEY

    };

    const { data } = await axios.post(API_Constants.API_BASE_URL + 'tickets', requiredPayloadToPost);

    return data;

};
