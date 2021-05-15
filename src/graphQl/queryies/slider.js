import {gql} from '@apollo/client';

const GET_SHOP_SLIDER = gql`
            query slider($sliderId:String!){
              slider(sliderId:$sliderId){
                slides{
                  id
                  image
                  contentPosition
                  content
                  link
                  linkType
                }
              }
            }`




export default GET_SHOP_SLIDER