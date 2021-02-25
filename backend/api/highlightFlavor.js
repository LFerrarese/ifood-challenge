const flavors = require('../data/flavors.json');

module.exports = {
    get: (req, res) => {
        const randomFlavor = Math.floor(Math.random() * flavors.length);
        const randomPoints = Math.round(Math.random() * 50);

        return res.status(200).json({ flavor: flavors[randomFlavor], points: randomPoints });
    }
}