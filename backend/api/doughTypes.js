const doughTypes = require('../data/doughTypes.json');

module.exports = {
    get: (req, res) => {
        return res.status(200).json(doughTypes);
    }
}