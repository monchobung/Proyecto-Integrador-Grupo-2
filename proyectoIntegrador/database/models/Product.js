module.exports = function(sequelize, DataTypes) {
    const alias = "Product";
  
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      imagen: {
        type: DataTypes.STRING(100)
      },
      nombre_producto: {
        type: DataTypes.STRING(100)
      },
      descripcion: {
        type: DataTypes.STRING(500)
      }
    };
  
    const config = {
      tableName: "productos",
      timestamps: true,
      
    };
  
    const Product = sequelize.define(alias, cols, config);
  
    Product.associate = function(models) {
      Product.belongsTo(models.User, {
        as: "user",
        foreignKey: "usuario_id"
      });
      Product.hasMany(models.Comentario, {
        as: "comentario",
        foreignKey: "producto_id"
      });
    };
  
    return Product;
  };
  