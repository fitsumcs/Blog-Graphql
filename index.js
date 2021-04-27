import express from 'express';
import blogSchema from './blogSchema';
import resolvers from './resolvers';
import { graphqlHTTP } from 'express-graphql';


const app = express()


app.get("/", (req, res) => {

    res.send("This is Test for Graphql")

})


var root = { hello: () => 'Hello world!' };


app.use("/graphql", graphqlHTTP({
    schema: blogSchema,
    rootValue: root,
    graphiql: true,
}))


app.listen(3000, () => console.log("The Server is Running .."))