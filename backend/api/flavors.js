const flavors = require('../data/flavors.json');

module.exports = {
    get: (req, res) => {
        return res.status(200).json(flavors);
    }
}