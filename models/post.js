module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: DataTypes.STRING,
        content: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        authorId: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        freezeTableName: true,
      },
      {
        timestamps: false,
      }
    );
  
    Post.associate = (models) => {
      Post.belongsTo(models.author, {as: "author", foreignKey: "authorId"});
      Post.hasMany(models.comment, {as: "comment", foreignKey: "postId"});
    };
  
    return Post;
  }