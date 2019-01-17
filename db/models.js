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
  listing_id: Sequelize.INTEGER,
  img_url: Sequelize.STRING
},
{
  timestamps: false,
  freezeTableName: true,
});
Photos.removeAttribute('id');
// Listings.sync();
Photos.sync(()=>{
  console.log("synced table");
});

module.exports = {
  // Listings,
  Photos,
};
