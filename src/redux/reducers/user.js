const initialState = {
    user: null,
    isAuth: null,
    authType: null,
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case "SET:AUTH":
            return {
                ...state,
                authType: payload,
            };
        case "SET:IS_AUTH":
            return {
                ...state,
                isAuth: payload,
            };
        case "SET:USER_DATA":
            return {
                ...state,
                user: payload,
            };


        default:
            return state;
    }

}