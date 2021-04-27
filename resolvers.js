import { nanoid } from 'nanoid';


// Our fake database 
class Blog {
    constructor(id, {
        title,
        body,
        category,
        language,
        author
    }) {
        this.title = title
        this.body = body
        this.category = category
        this.language = language
        this.author = author
    }
}

const blogList = {}


const resolvers = {

    getBlog: ({ id }) => {
        return new Blog(id, blogList[id])
    },
    createBlog: ({ input }) => {
        let id = nanoid()
        blogList[id] = input
        return new Blog(id, input)
    }

}