import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from '@apollo/client/link/context';


const httpLink = createHttpLink({
    uri: 'https://example-vmall-front.yereone.com/graphql',
    headers: {
        "account-id": "6027acbe5fc2b4627256d612",
        "shopId": "6027c6425b8f3f206fce7366",
        "locale": "en_US",
    }
});


const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? token : "",
        }
    }
});
export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),

});
