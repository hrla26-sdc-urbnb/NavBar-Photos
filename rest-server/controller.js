const { Listings, Photos } = require('../db/models');

module.exports = {
  get: (req, res) => {
    const { listing_id } = req.params;
    Photos.findAll({ where: { listing_id } })
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  },
};
