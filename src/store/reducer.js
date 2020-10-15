import * as actionTypes from './actions';

const reducer = (state, action) => {

    switch (action.type) {

        case actionTypes.UPDATE_ACCESS_DATA:

            localStorage.setItem("accessData", JSON.stringify(action.data));
            return action.data;

        default:

            return state;

    }


};

export default reducer;