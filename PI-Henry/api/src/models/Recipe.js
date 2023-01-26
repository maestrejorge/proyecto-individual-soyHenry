const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
   foodid:{
    type: DataTypes.INTEGER,
      allowNull: false,
      primarykey: true
      },
      tittle: {
        type: DataTypes.STRING,
        
      },
   summary: {
        type: DataTypes.STRING,
        
      },
   healthScore: {
        type: DataTypes.STRING,
        
      },
      origendata: {
        type: DataTypes.STRING,
       
      },
      image:{
        type: DataTypes.BLOB('long'),
      }
  }, {timestamps: false});
};
