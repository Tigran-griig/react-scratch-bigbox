import {gql} from '@apollo/client';

const SIGN_IN_JS = gql`
    mutation signIn($username:String!,$password:String!){
        signIn(username:$username,password:$password){
            accessToken
        }
    }`


export default SIGN_IN_JS

