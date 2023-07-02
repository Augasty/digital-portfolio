const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');
module.exports = sequelize.define('BasicDetails', {
    id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_Id: {
        type:  Sequelize.INTEGER,
        allowNull: false
      },
      first_Name: {
        type:  Sequelize.STRING,
        allowNull: false
      },
      last_Name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone_Number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email_address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      objective: {
        type: Sequelize.STRING,
        allowNull: false
      },
      headline: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profile_img_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      language: {
        type: Sequelize.STRING,
        allowNull: false
      },

}, {
    tableName: 'basic_details'
})