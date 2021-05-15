import {gql} from '@apollo/client';

const SIGN_UP_JS = gql`
    mutation signUp($signUpData:SignUpInput!){
        signUp(signUpData:$signUpData){
            accessToken
            code
            userId
        }
    }`


export default SIGN_UP_JS

