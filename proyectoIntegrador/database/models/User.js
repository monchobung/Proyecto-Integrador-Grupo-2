module.exports = function(sequelize, DataTypes) {
    const alias = "User";
  
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_usuario: {
      type: DataTypes.STRING(30),
      allowNull: false
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
      },
      contrasena: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      fecha_nacimiento: {
        type: DataTypes.DATE
      },
      dni: {
        type: DataTypes.INTEGER.UNSIGNED
      },
      foto_perfil: {
        type: DataTypes.STRING(100)
      }
    };
  
    const config = {
      tableName: "usuarios",
      timestamps: true,
      underscored: false,
    };
  
    const User = sequelize.define(alias, cols, config);
  
    User.associate = function(models) {
      User.hasMany(models.Product, {
        as: "products",
        foreignKey: "usuario_id"
      });
      User.hasMany(models.Comentario, {
        as: "comentario",
        foreignKey: "usuario_id"
      });
    };
  
    return User;
  };
  