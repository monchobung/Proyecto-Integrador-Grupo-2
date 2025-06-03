module.exports = function(sequelize, DataTypes) {
    const alias = "Comentario";
  
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      texto: {
        type: DataTypes.STRING(300)
      }
    };
  
    const config = {
      tableName: "comentarios",
      timestamps: true,
      
    };
  
    const Comment = sequelize.define(alias, cols, config);
  
    Comment.associate = function(models) {
      Comment.belongsTo(models.User, {
        as: "user",
        foreignKey: "usuario_id"
      });
      Comment.belongsTo(models.Product, {
        as: "product",
        foreignKey: "producto_id"
      });
    };
  
    return Comment;
  };
  