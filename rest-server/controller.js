// const { Todo } = require('../db/models.js');

module.exports = {
    get: (req, res) => {
        // Todo.findAll({})
        // .then((data) => res.status(200).send(data))
        // .catch(err => console.log(err));
        res.status(200).send();
    }
    // post: (req, res) => {
    //     let { name } = req.body;
    //     Todo.create({ name })
    //     .then(() => res.status(201).send('Item added'));
    // },
    // patch: (req, res) => {
    //     let { id, name } = req.body;
    //     Todo.update(
    //         { name },
    //         {where: { id }})
    //         .then(res.status(202).send('Item updated'))
    //         .catch(err => console.log(err));
    // },
    // delete: (req, res) => {
    //     let { id } = req.query;
    //     Todo.destroy({where: { id }}).
    //     then(() => res.status(202).send('Item deleted'))
    //     .catch(err => console.log(err));
    // },
}