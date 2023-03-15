const CartaoSchema = (sequelize, DataTypes) => {
    const CartaoTable = sequelize.define(
      "Cartao",
      {
        id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        limite: {
          defaultValue: null,
          type: DataTypes.NUMBER,
        },
        vencimento: {
          defaultValue: null,
          type: DataTypes.STRING,
        },
      },
      {
        tableName: "cartao",
        // underscored: true,
        timestamps: false,
      }
    );
    return CartaoTable;
  };
  
  module.exports = CartaoSchema;
  