const sizes = require('../data/sizes.json');

module.exports = {
    get: (req, res) => {
        return res.status(200).json(sizes);
    }
}