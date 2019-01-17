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
  // url: Sequelize.STRING,
  // description: Sequelize.STRING,
  // listing_id: Sequelize.INTEGER,
  // id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  listing_id: Sequelize.INTEGER,
  img_url: Sequelize.STRING
},
{
  timestamps: false,
  freezeTableName: true,
});

// Listings.sync();
Photos.sync(()=>{
  console.log("synced table");
});

module.exports = {
  // Listings,
  Photos,
};
