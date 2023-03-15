module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cartao", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      limite: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      vencimento: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("cartao");
  },
};
