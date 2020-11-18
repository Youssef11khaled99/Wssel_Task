module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
      },
      {
        freezeTableName: true,
      },
      {
        timestamps: false
      }
    );
  
    Comment.associate = (models) => {
      Comment.belongsTo(models.post, {as: "post", foreignKey: "postId"});
    };
  
    return Comment;
  }