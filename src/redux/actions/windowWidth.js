const actions = {

    setWindowWidth: data => ({
        type: "WIDTH-WINDOW",
        payload: data
    }),

    getWindowWidth: (data) => dispatch => {
        return dispatch(actions.setWindowWidth(data));
    },

}

export default actions