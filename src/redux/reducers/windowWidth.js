const initialState = {
    width: null
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case "WIDTH-WINDOW":
            return {
                ...state,
                width: payload,
            };

        default:
            return state;
    }

}