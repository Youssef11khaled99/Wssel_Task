module.exports =  `
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    posts: [Post]
  }
  type Post {
    id: ID!
    title: String
    content: String!
    comments: [Comment]
    authorId: ID!
    author: Author!
  }
  type Comment {
    id: ID!
    content: String!
    authorId: ID!
    postId: ID!
  }

  type Query {
    posts: [Post!]!
    author(id: ID!): Author
    authors: [Author!]!
  }

  type Mutation {
    createAuthor(firstName: String!, lastName:String): Author!
    updateAuthor(id: ID!, firstName: String!, lastName:String): [Int!]!
    deleteAuthor(id: ID!): Int!

    createPost(title: String, content:String!, authorId: ID!): Post!
    updatePost(id: ID!, title: String, content:String!): [Int!]!
    deletePost(id: ID!): Int!


  }
`;