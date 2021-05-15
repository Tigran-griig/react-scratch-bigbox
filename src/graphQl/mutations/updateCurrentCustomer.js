import {gql} from '@apollo/client';

const UPDATE_CURRENT_CUSTOMER = gql`
    mutation updateCurrentCustomerDetails($customerData: CustomerDataInput!){
        updateCurrentCustomerDetails(customerData:$customerData){
            id
        }
    }`

export default UPDATE_CURRENT_CUSTOMER

