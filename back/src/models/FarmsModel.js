const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Farm",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      area: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ubication: {
        type: DataTypes.STRING,
        allowNull: false
      },
      class_: {
        type: DataTypes.ENUM({
          values: [
            "I (Agrícola)",
            "II (Agrícola)",
            "III (Agrícola)",
            "IV (Agrícola-Ganadero)",
            "V (Ganadero)",
            "VI (Ganadero)",
            "VII (Ganadero Pasto natural)",
            "VIII (Ganadero Pasto natural)"
          ]
        }),
        allowNull: false
      },
      slope: {
        type: DataTypes.ENUM({
          values: ["0 - 2", "2 - 4", "4 - 7", "+ 7"]
        }),
        allowNull: false
      },
      rainfall: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      rainfallb: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      weeding: {
        type: DataTypes.ENUM({
          values: ["0 - 25", "25 - 50", "50 - 75", "+ 75"]
        }),
        allowNull: false
      },
      compactation: {
        type: DataTypes.ENUM({
          values: ["Baja", "Media", "Alta"]
        }),
        allowNull: false
      },
      erosion: {
        type: DataTypes.ENUM({
          values: ["Baja", "Media", "Alta"]
        }),
        allowNull: false
      }
    },
    {
      timestamps: true
    }
  )
}