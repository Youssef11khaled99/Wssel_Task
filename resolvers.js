module.exports = {
    Author: {
        posts: (parent, args, { db }, info) => db.post.findAll({ where: { authorId: parent.id } }),
    },
    Post: {
        author: (parent, args, { db }, info) => db.author.findOne({ where: { id: parent.authorId } }),
        comments: (parent, args, { db }, info) => db.comment.findAll({ where: { id: parent.id } }),
    },  
    Query: {
        posts: (parent, args, { db }, info) => db.post.findAll(),
        authors: (parent, args, { db }, info) => db.author.findAll(),
        comments: (parent, args, { db }, info) => db.comment.findAll(),
        author: (parent, { id }, { db }, info) => db.author.findByPk(id) 
    },
    Mutation: {
        createAuthor: (parent, { firstName, lastName }, { db }) =>
            db.author.create({
            firstName: firstName,
            lastName: lastName,
        }),
        updateAuthor: (parent, { firstName, lastName, id }, { db }) =>
            db.author.update({
                firstName: firstName,
                lastName: lastName,
            },
            {
            where: {
                id: id
            }
        }),
        deleteAuthor: (parent, {id}, { db }) =>
            db.author.destroy({
            where: {
                id: id
            }
        }),
        createPost: (parent, { title, content, authorId }, { db }) =>
            db.post.create({
            title: title,
            content: content,
            authorId: authorId
        }),
        updatePost: (parent, { title, content, id }, { db }) =>
            db.post.update({
            title: title,
            content: content
            },
            {
            where: {
                id: id
            }
            }),
        deletePost: (parent, {id}, { db }) =>
            db.post.destroy({
            where: {
                id: id
            }
        })
    }
  };