const Sequelize = require('sequelize');
const db = require('./index');

// const Listings = db.define('listings', {
//   name: Sequelize.STRING,
// },
// {
//   timestamps: false,
//   freezeTableName: true,
// });

const Photos = db.define('photos', {
  url: Sequelize.STRING,
  description: Sequelize.STRING,
  listing_id: Sequelize.INTEGER,
},
{
  timestamps: false,
  freezeTableName: true,
});

// Listings.sync();
Photos.sync();

module.exports = {
  // Listings,
  Photos,
};
