import gql from "graphql-tag"

const GET_BOOKS_INFO = gql`
  query BOOKS_INFO{
    books{
      data{
        attributes{
          title
        }
      }
    }
  }
`
export { GET_BOOKS_INFO }