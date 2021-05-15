import {gql} from '@apollo/client';

const GET_USER_DATA = gql`
    query currentCustomer{
        currentCustomer{
            id
            firstName
            lastName
            email
        }
    }`


export default GET_USER_DATA

