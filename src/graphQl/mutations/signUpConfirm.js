import {gql} from '@apollo/client';

const SIGN_UP_CONFIRM = gql`
    mutation signUpConfirm($username: String!, $confirmationCode: String!, $userId: String!){
        signUpConfirm(username:$username, confirmationCode:$confirmationCode, userId:$userId )
    }`


export default SIGN_UP_CONFIRM

