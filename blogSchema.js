import { buildSchema } from 'graphql';


var blogSchema = buildSchema(`
  type Blog {
    id: ID
    title: String
    body: String
    category: BlogType
    language: String
    author: [Author]
  }

  type Author {
   
       firstName: String
       lastName: String
       email: String

  }

  enum BlogType {
      Tech 
      Science
      Nature
      Art
      Other
  }


  input BlogInput{
    id: ID
    title: String!
    body: String
    category: BlogType!
    language: String
    author: [Author]!
  }
  input AuthorInput{
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    getBlog(id: ID): Blog
  }

  type mutation{
    createBlog(input: BlogInput):Blog
  }



`);


export default blogSchema;