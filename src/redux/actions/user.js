import {client} from "../../graphQl/client";
import GET_USER_DATA from "../../graphQl/queryies/currentCustomer";

const actions = {
    setAuth: auth => ({
        type: "SET:AUTH",
        payload: auth
    }),
    setIsAuth: bool => ({
        type: "SET:IS_AUTH",
        payload: bool
    }),
    setUserData: data => ({
        type: "SET:USER_DATA",
        payload: data
    }),

    fetchUserData: () => async (dispatch) => {
        dispatch(actions.setIsAuth(false))
        if(localStorage.getItem('token')){
            const data = await client.query({
                query: GET_USER_DATA,
                fetchPolicy: "no-cache"
            })
            dispatch(actions.setUserData(data.data.currentCustomer))
            dispatch(actions.setAuth(null));
            dispatch(actions.setIsAuth(true))
        }else{
            dispatch(actions.setIsAuth(null))
            dispatch(actions.setUserData(null))

        }
    },

}

export default actions