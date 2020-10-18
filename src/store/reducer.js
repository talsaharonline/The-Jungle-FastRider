import * as actionTypes from './actions';

const reducer = (state, action) => {

    switch (action.type) {

        case actionTypes.ADD_ACCESS_CARD:

            localStorage.setItem("accessData", JSON.stringify(action.data));
            
            return action.data;

        default:

            return state;

    };

};

export default reducer;