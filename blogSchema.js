import {buildSchema} from 'graphql';


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





`);


export default blogSchema;