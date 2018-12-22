const Sequelize = require('sequelize');
const db = require('./index');

const Listings = db.define('listings', {
    name: Sequelize.STRING
},
{
    timestamps: false,
    freezeTableName: true
}
);

const Photos = db.define('photos', {
    url: Sequelize.STRING,
    description: Sequelize.STRING,
    listing_id: Sequelize.INTEGER
},
{
    timestamps: false,
    freezeTableName: true
}
);

Listings.sync({
    force: true
});
Photos.sync({
    force: true
});

module.exports = {
    Listings,
    Photos
};