module.exports = (sequelize, DataType) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
      },
      brand: {
        type: DataType.STRING,
        allowNull: false,
      },
      description: {
        type: DataType.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: DataType.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataType.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "products",
    }
  );
  return Product;
};
