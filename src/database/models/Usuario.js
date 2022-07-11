module.exports = (sequelize, dataTypes) => {
  let alias = "Usuarios";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {},
    password: {},
    categoryId: {},
    image: {},
  };
  let config = {
    tableName: "users",
    timestamps: false,
  };
  const Usuario = sequelize.define(alias, cols, config);
  return Usuario;
};
