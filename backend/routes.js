const express = require('express');
const router = express.Router();
const flavors = require('./api/flavors');
const sizes = require('./api/sizes');
const doughTypes = require('./api/doughTypes');
const edges = require('./api/edges');
const highlightFlavor = require('./api/highlightFlavor');
const pizza = require('./api/pizza');

router.get('/ping', (req, res) => {
    return res.status(200).json({ pong: true });
});

router.get('/flavors', flavors.get);
router.get('/sizes', sizes.get);
router.get('/dough-types', doughTypes.get);
router.get('/edges', edges.get);
router.get('/highlight-flavor', highlightFlavor.get);
router.post('/pizza/save', pizza.save);

module.exports = router;