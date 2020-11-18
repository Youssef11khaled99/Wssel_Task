'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('comment', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      content: {
        type: Sequelize.STRING(300),
        allowNull: false
      },
      authorId: {
          type: Sequelize.INTEGER(11),
          allowNull: false
      },
      postId: {
          type: Sequelize.INTEGER(11),
          allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comment');
  }
};
