const flavors = require('../data/flavors.json');

module.exports = {
    get: (req, res) => {
        const randomFlavor = Math.floor(Math.random() * flavors.length);

        return res.status(200).json(flavors[randomFlavor]);
    }
}