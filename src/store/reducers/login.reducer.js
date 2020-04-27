import * as keys from '../keys/login.key';

const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case keys.LOGIN_PENDING:

            return {
                ...state,
                isLoading: true,
                isAuth: false,
                error: false
            };
        case keys.LOGIN_FULFILLED:
            return {
                ...state,
                token: action.payload,
                isAuth: true,
                isLoading: false,
                error: false,
            };
        case keys.LOGIN_REJECTED:
            return {
                ...state,
                error: action.payload,
                isAuth: false,
                isLoading: false,
            };
        default:
            return state;
    }
};
